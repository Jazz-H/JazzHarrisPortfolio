import { FiArrowLeft, FiCreditCard, FiHome, FiMoreHorizontal, FiTool, FiX } from "react-icons/fi";

export function LoadingScreen() {
  return (
    <div className="loading" role="status" aria-live="polite" aria-label="Loading">
      <div className="mark">
        <FiHome aria-hidden="true" />
      </div>
      <div className="bar">
        <div className="fill" />
      </div>
      <style jsx>{`
        .loading { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; background: var(--ll-bg); }
        .mark { width: 64px; height: 64px; border-radius: 16px; background: var(--ll-accent); display: flex; align-items: center; justify-content: center; animation: pulse 1.1s ease-in-out infinite; }
        .mark :global(svg) { width: 28px; height: 28px; color: var(--ll-accent-ink); }
        .bar { width: 88px; height: 3px; border-radius: 999px; background: var(--ll-border); overflow: hidden; }
        .fill { width: 40%; height: 100%; background: var(--ll-accent); border-radius: 999px; animation: slide 1.1s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.92); opacity: 0.8; } }
        @keyframes slide { 0% { transform: translateX(-120%); } 100% { transform: translateX(340%); } }
      `}</style>
    </div>
  );
}

export function StatusChip({ status }) {
  const variant = status === "Resolved" ? "done" : status === "Cancelled" ? "cancelled" : "progress";
  return (
    <span className={"chip " + variant}>
      {status}
      <style jsx>{`
        .chip { font-size: 10.5px; font-weight: 700; padding: 4px 9px; border-radius: 999px; margin-left: auto; flex-shrink: 0; }
        .progress { background: var(--ll-accent-soft); color: var(--ll-accent-soft-ink); }
        .done { background: var(--ll-success-soft); color: var(--ll-success); }
        .cancelled { background: var(--ll-surface-2); color: var(--ll-text-faint); border: 1px solid var(--ll-border); }
      `}</style>
    </span>
  );
}

export function TabBar({ view, onNavigate }) {
  const tabs = [
    { key: "home", label: "Home", Icon: FiHome },
    { key: "pay", label: "Pay", Icon: FiCreditCard },
    { key: "maintenance", label: "Maintenance", Icon: FiTool },
    { key: "more", label: "More", Icon: FiMoreHorizontal },
  ];
  return (
    <nav className="tabs" aria-label="Primary">
      {tabs.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          className={"tab" + (view === key ? " active" : "")}
          onClick={() => onNavigate(key)}
          aria-current={view === key ? "page" : undefined}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
      <style jsx>{`
        .tabs { position: absolute; bottom: 0; left: 0; right: 0; height: 64px; background: var(--ll-surface); border-top: 1px solid var(--ll-border); display: flex; }
        .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; background: none; border: none; color: var(--ll-text-faint); font-size: 10px; font-weight: 600; cursor: pointer; min-height: 44px; }
        .tab :global(svg) { width: 19px; height: 19px; }
        .tab.active { color: var(--ll-accent); }
      `}</style>
    </nav>
  );
}

export function BackHeader({ title, onBack }) {
  return (
    <div className="back-header">
      <button type="button" className="back" onClick={onBack} aria-label="Back">
        <FiArrowLeft aria-hidden="true" />
      </button>
      {title && <h1>{title}</h1>}
      <style jsx>{`
        .back-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .back { background: var(--ll-surface); border: 1px solid var(--ll-border); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--ll-text); cursor: pointer; flex-shrink: 0; }
        h1 { font-size: 15px; font-weight: 700; color: var(--ll-text); }
      `}</style>
    </div>
  );
}

// The label/value row list used by every detail-style screen (Account
// Settings, My Lease, My Public Profile, Property Info). Rows are
// [label, value] pairs; value can be a plain string or a JSX node
// (Property Info uses this for its mailto: link).
export function DetailCard({ rows, children }) {
  return (
    <div className="dcard">
      {rows.map(([label, value]) => (
        <div className="drow" key={label}>
          <span className="dl">{label}</span>
          <span className="dv">{value}</span>
        </div>
      ))}
      {children}
      <style jsx>{`
        .dcard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; margin-top: 16px; padding: 4px 16px; }
        .drow { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--ll-border); font-size: 12.5px; }
        .drow:last-child { border-bottom: none; }
        .dl { color: var(--ll-text-muted); }
        .dv { color: var(--ll-text); font-weight: 600; text-align: right; }
        .dv :global(a) { color: var(--ll-accent); text-decoration: none; }
        .dv :global(a:hover) { text-decoration: underline; }
      `}</style>
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="slabel">
      {children}
      <style jsx>{`
        .slabel { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); margin: 22px 0 8px; }
      `}</style>
    </div>
  );
}

// The solid-accent full-width call-to-action button, used on every screen
// with a primary action (sign in, pay, save card, submit request, send
// message). Centralizing it means the hover/disabled/spinner states only
// need to be right in one place.
export function PrimaryButton({ children, className = "", type = "button", ...props }) {
  return (
    <button type={type} className={`primary ${className}`} {...props}>
      {children}
      <style jsx>{`
        .primary { width: 100%; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 700; border: none; cursor: pointer; }
        .primary:hover:not(:disabled) { background: var(--ll-accent-hover); }
        .primary:disabled { opacity: .75; cursor: not-allowed; }
      `}</style>
    </button>
  );
}

// The bordered card wrapper used by every <form> in the app (add card,
// new maintenance request, contact the office).
export function FormCard({ children, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <style jsx>{`
        .form { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
      `}</style>
    </form>
  );
}

export function FormHead({ title, onClose }) {
  return (
    <div className="form-head">
      <span>{title}</span>
      <button type="button" onClick={onClose} aria-label="Close">
        <FiX aria-hidden="true" />
      </button>
      <style jsx>{`
        .form-head { display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .form-head button { background: none; border: none; color: var(--ll-text-faint); cursor: pointer; display: flex; padding: 4px; }
      `}</style>
    </div>
  );
}

// Label + input/textarea/select wrapper. The actual form control is
// passed as children so this stays agnostic to which one it is.
export function FormField({ label, children }) {
  return (
    <label className="ff">
      {label}
      {children}
      <style jsx>{`
        .ff { display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: var(--ll-text-muted); }
        .ff :global(input), .ff :global(textarea), .ff :global(select) { background: var(--ll-surface-2); border: 1px solid var(--ll-border); border-radius: 10px; padding: 10px; color: var(--ll-text); font-size: 13px; font-family: inherit; width: 100%; resize: none; }
        .ff :global(input:focus), .ff :global(textarea:focus), .ff :global(select:focus) { outline: 2px solid var(--ll-focus); outline-offset: 1px; }
      `}</style>
    </label>
  );
}
