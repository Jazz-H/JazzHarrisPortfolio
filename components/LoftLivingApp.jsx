import { useEffect, useState } from "react";
import {
  FiHome,
  FiCreditCard,
  FiTool,
  FiMoreHorizontal,
  FiMinus,
  FiPlus,
  FiCheckCircle,
  FiArrowLeft,
  FiX,
  FiAward,
  FiUser,
  FiSettings,
  FiFileText,
  FiInfo,
  FiLogOut,
  FiChevronRight,
  FiStar,
  FiCamera,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const AUTH_KEY = "loftLivingDemoAuthed";
const THEME_KEY = "loftLivingTheme";
const BASE_RENT = 1450;
const UTILITIES = 30;

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const SEED_REQUESTS = [
  { id: 1, title: "Leaking kitchen faucet", category: "Plumbing", urgent: true, date: "Jul 6", status: "In progress" },
  { id: 2, title: "AC not cooling", category: "HVAC", urgent: false, date: "Jun 28", status: "Resolved" },
  { id: 3, title: "Hallway light out", category: "Electrical", urgent: false, date: "Jun 14", status: "Resolved" },
];

function LoadingScreen() {
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

function StatusChip({ status }) {
  const done = status === "Resolved";
  return (
    <span className={"chip" + (done ? " done" : " progress")}>
      {status}
      <style jsx>{`
        .chip { font-size: 10.5px; font-weight: 700; padding: 4px 9px; border-radius: 999px; margin-left: auto; flex-shrink: 0; }
        .progress { background: var(--ll-accent-soft); color: var(--ll-accent-soft-ink); }
        .done { background: var(--ll-success-soft); color: var(--ll-success); }
      `}</style>
    </span>
  );
}

function TabBar({ view, onNavigate }) {
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

function SignInScreen({ onSignedIn }) {
  return (
    <div className="screen center">
      <div className="faceid">
        <FiCheckCircle aria-hidden="true" />
      </div>
      <h1>Welcome back, Jordan</h1>
      <p>Use Face ID to sign in — no password needed</p>
      <button type="button" className="primary" onClick={onSignedIn}>
        Continue with Face ID
      </button>
      <button type="button" className="ghost" onClick={onSignedIn}>
        Use passcode instead
      </button>
      <style jsx>{`
        .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 100px 24px 0; }
        .faceid { width: 64px; height: 64px; border-radius: 16px; background: var(--ll-accent-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .faceid :global(svg) { width: 28px; height: 28px; color: var(--ll-accent); }
        h1 { font-size: 19px; font-weight: 700; margin: 0; color: var(--ll-text); }
        p { font-size: 13px; color: var(--ll-text-muted); margin: 6px 0 28px; }
        .primary { width: 100%; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 700; border: none; cursor: pointer; }
        .primary:hover { background: var(--ll-accent-hover); }
        .ghost { background: none; border: none; color: var(--ll-text-muted); font-size: 12.5px; margin-top: 14px; cursor: pointer; padding: 8px; }
      `}</style>
    </div>
  );
}

function HomeScreen({ requests, amount, card, onNavigate, onSignOut, onOpenRewards }) {
  const open = requests.filter((r) => r.status !== "Resolved");
  return (
    <div className="screen">
      <div className="greet">
        Good morning
        <b>Jordan</b>
      </div>
      <button type="button" className="lead" onClick={() => onNavigate("pay")}>
        <div className="l1">{amount > 0 ? "Rent due Aug 1" : "Rent"}</div>
        <div className="l2">{amount > 0 ? `$${fmt(amount)}` : "Paid in full"}</div>
        <div className="l3">No hidden fees · partial payments OK</div>
        {amount > 0 && <div className="cta">{card ? `Pay with card ····${card.last4}` : "Add card to pay"}</div>}
      </button>
      <div className="row2">
        <button type="button" className="mini" onClick={() => onNavigate("maintenance")}>
          <FiTool aria-hidden="true" />
          <div className="t">{open.length ? `${open.length} open request${open.length > 1 ? "s" : ""}` : "No open requests"}</div>
          <div className="s">{open[0] ? `${open[0].title} · ${open[0].status.toLowerCase()}` : "All caught up"}</div>
        </button>
        <button type="button" className="mini" onClick={() => onNavigate("maintenance", { openForm: true })}>
          <FiPlus aria-hidden="true" />
          <div className="t">New request</div>
          <div className="s">Report an issue</div>
        </button>
      </div>
      <div className="strip">
        <button type="button" className="stripitem" onClick={onOpenRewards}>
          <div className="dot"><FiAward aria-hidden="true" /></div>
          <span>Rewards</span>
        </button>
        {[
          { l: "Events", Icon: FiCalendar },
          { l: "Docs", Icon: FiFileText },
          { l: "Amenities", Icon: FiMapPin },
        ].map(({ l, Icon }) => (
          <div className="stripitem inert" key={l}>
            <div className="dot"><Icon aria-hidden="true" /></div>
            <span>{l}</span>
          </div>
        ))}
      </div>
      <button type="button" className="signout" onClick={onSignOut}>
        Sign out (reset demo)
      </button>
      <style jsx>{`
        .screen { padding: 4px 20px 90px; }
        .greet { font-size: 13px; color: var(--ll-text-muted); margin-top: 8px; }
        .greet b { color: var(--ll-text); font-size: 20px; font-weight: 700; display: block; margin-top: 2px; }
        .lead { display: block; width: 100%; text-align: left; margin-top: 18px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 20px; cursor: pointer; box-shadow: var(--ll-shadow); }
        .l1 { font-size: 11px; color: var(--ll-text-faint); font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
        .l2 { font-size: 28px; font-weight: 700; margin-top: 8px; color: var(--ll-text); }
        .l3 { font-size: 12px; color: var(--ll-text-muted); margin-top: 4px; }
        .cta { margin-top: 16px; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 700; }
        .row2 { display: flex; gap: 10px; margin-top: 12px; }
        .mini { flex: 1; text-align: left; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; padding: 14px; cursor: pointer; }
        .mini :global(svg) { width: 20px; height: 20px; color: var(--ll-accent); margin-bottom: 18px; }
        .mini .t { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .mini .s { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .strip { display: flex; gap: 10px; margin-top: 16px; }
        .stripitem { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; background: none; border: none; padding: 0; cursor: pointer; }
        .stripitem.inert { cursor: default; }
        .dot { width: 100%; aspect-ratio: 1; border-radius: 12px; background: var(--ll-surface); border: 1px solid var(--ll-border); display: flex; align-items: center; justify-content: center; }
        .dot :global(svg) { width: 17px; height: 17px; color: var(--ll-accent); }
        .stripitem span { font-size: 10.5px; color: var(--ll-text-muted); }
        .signout { margin-top: 24px; background: none; border: none; color: var(--ll-text-faint); font-size: 11.5px; text-decoration: underline; cursor: pointer; padding: 4px; }
      `}</style>
    </div>
  );
}

const PAY_STEP = 50;
const MIN_PAYMENT = 50;

function AddCardForm({ onSave, onCancel }) {
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    const digits = number.replace(/\D/g, "");
    if (digits.length < 4 || !expiry.trim() || !name.trim()) return;
    onSave({ last4: digits.slice(-4) });
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-head">
        <span>Add a card</span>
        <button type="button" onClick={onCancel} aria-label="Close">
          <FiX aria-hidden="true" />
        </button>
      </div>
      <label>
        Card number
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="4242 4242 4242 4242"
          inputMode="numeric"
          required
        />
      </label>
      <div className="row2f">
        <label>
          Expiry
          <input value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" required />
        </label>
        <label>
          Name on card
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Ellis" required />
        </label>
      </div>
      <button type="submit" className="primary">Save card</button>
      <style jsx>{`
        .form { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
        .form-head { display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .form-head button { background: none; border: none; color: var(--ll-text-faint); cursor: pointer; display: flex; padding: 4px; }
        label { display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: var(--ll-text-muted); }
        .row2f { display: flex; gap: 10px; }
        .row2f label { flex: 1; }
        input { background: var(--ll-surface-2); border: 1px solid var(--ll-border); border-radius: 10px; padding: 10px; color: var(--ll-text); font-size: 13px; font-family: inherit; width: 100%; }
        .primary { background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 700; border: none; cursor: pointer; margin-top: 4px; }
        .primary:hover { background: var(--ll-accent-hover); }
      `}</style>
    </form>
  );
}

function PayScreen({ balance, card, onSaveCard, onPay, onBack, onNavigate }) {
  const [payAmount, setPayAmount] = useState(balance);
  const [addingCard, setAddingCard] = useState(false);
  const [paid, setPaid] = useState(null);
  const serviceFee = 0;

  const clampedPay = Math.min(payAmount, balance);

  function submitPayment() {
    if (!card) {
      setAddingCard(true);
      return;
    }
    // Capture remaining balance now — `balance` itself updates (via onPay)
    // before this component re-renders, so it can't be derived afterward.
    setPaid({ amount: clampedPay, last4: card.last4, remaining: balance - clampedPay });
    onPay(clampedPay);
  }

  if (paid) {
    return (
      <div className="screen center">
        <div className="check">
          <FiCheckCircle aria-hidden="true" />
        </div>
        <h1>Payment received</h1>
        <p>
          ${fmt(paid.amount)} paid with card ····{paid.last4}
          {paid.remaining > 0 ? ` · $${fmt(paid.remaining)} remaining` : " · paid in full"}
        </p>
        <button type="button" className="primary" onClick={() => onNavigate("home")}>
          Back to home
        </button>
        <style jsx>{`
          .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 100px 24px 0; }
          .check { width: 64px; height: 64px; border-radius: 16px; background: var(--ll-success-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
          .check :global(svg) { width: 28px; height: 28px; color: var(--ll-success); }
          h1 { font-size: 19px; font-weight: 700; margin: 0; color: var(--ll-text); }
          p { font-size: 13px; color: var(--ll-text-muted); margin: 6px 0 28px; line-height: 1.5; }
          .primary { width: 100%; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 700; border: none; cursor: pointer; }
          .primary:hover { background: var(--ll-accent-hover); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="screen">
      <button type="button" className="back" onClick={onBack} aria-label="Back">
        <FiArrowLeft aria-hidden="true" />
      </button>
      <div className="balance">
        <div className="l">Amount due · due Aug 1</div>
        <div className="amt">${fmt(balance)}</div>
      </div>
      <div className="card">
        <div className="line"><span>Base rent</span><span>${fmt(BASE_RENT)}</span></div>
        <div className="line"><span>Utilities</span><span>${fmt(UTILITIES)}</span></div>
        <div className="line"><span>Service fee</span><span className="good">${fmt(serviceFee)} · no hidden fees</span></div>
        <div className="line total"><span>Total due</span><span>${fmt(balance)}</span></div>
      </div>

      <div className="paying-label">You're paying</div>
      <div className="stepper">
        <button
          type="button"
          onClick={() => setPayAmount((a) => Math.max(MIN_PAYMENT, a - PAY_STEP))}
          disabled={clampedPay <= MIN_PAYMENT}
          aria-label="Decrease payment amount"
        >
          <FiMinus aria-hidden="true" />
        </button>
        <span className="pay-amt">${fmt(clampedPay)}</span>
        <button
          type="button"
          onClick={() => setPayAmount((a) => Math.min(balance, a + PAY_STEP))}
          disabled={clampedPay >= balance}
          aria-label="Increase payment amount"
        >
          <FiPlus aria-hidden="true" />
        </button>
      </div>
      <p className="note">
        Partial payments are OK — pay any amount up to your full balance of ${fmt(balance)}. The base rent amount itself can&rsquo;t be changed.
      </p>

      {addingCard ? (
        <AddCardForm
          onCancel={() => setAddingCard(false)}
          onSave={(c) => { onSaveCard(c); setAddingCard(false); }}
        />
      ) : (
        <>
          {card && (
            <div className="method">
              <span>Card ····{card.last4}</span>
              <button type="button" onClick={() => setAddingCard(true)}>Change</button>
            </div>
          )}
          <button type="button" className="primary" onClick={submitPayment}>
            {card ? `Pay $${fmt(clampedPay)} with card ····${card.last4}` : "Add card to pay"}
          </button>
        </>
      )}
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .back { background: var(--ll-surface); border: 1px solid var(--ll-border); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--ll-text); cursor: pointer; margin-bottom: 8px; }
        .balance { text-align: center; padding: 14px 0 4px; }
        .l { font-size: 12px; color: var(--ll-text-muted); }
        .amt { font-size: 36px; font-weight: 700; margin-top: 6px; color: var(--ll-text); }
        .card { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 18px 20px; margin-top: 18px; }
        .line { display: flex; justify-content: space-between; font-size: 12.5px; padding: 9px 0; border-bottom: 1px solid var(--ll-border); color: var(--ll-text-muted); }
        .line.total { color: var(--ll-text); font-weight: 700; border-bottom: none; }
        .line .good { color: var(--ll-success); font-weight: 600; }
        .paying-label { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); margin-top: 20px; text-align: center; }
        .stepper { display: flex; align-items: center; justify-content: center; gap: 16px; margin: 10px 0 4px; }
        .pay-amt { font-size: 17px; font-weight: 700; color: var(--ll-text); min-width: 92px; text-align: center; }
        .stepper button { width: 36px; height: 36px; border-radius: 10px; background: var(--ll-surface-2); border: 1px solid var(--ll-border); display: flex; align-items: center; justify-content: center; color: var(--ll-text); cursor: pointer; }
        .stepper button:disabled { opacity: .35; cursor: not-allowed; }
        .note { font-size: 11.5px; color: var(--ll-text-faint); text-align: center; margin-top: 14px; line-height: 1.5; }
        .method { display: flex; justify-content: space-between; align-items: center; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 10px; padding: 12px 14px; margin-top: 18px; font-size: 12.5px; color: var(--ll-text-muted); }
        .method button { background: none; border: none; color: var(--ll-accent); font-size: 12px; font-weight: 700; cursor: pointer; padding: 4px; }
        .primary { width: 100%; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 700; border: none; cursor: pointer; margin-top: 12px; }
        .primary:hover { background: var(--ll-accent-hover); }
      `}</style>
    </div>
  );
}

const CATEGORIES = ["Plumbing", "Electrical", "Appliance", "HVAC", "Pest control", "Other"];

function NewRequestForm({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [urgent, setUrgent] = useState(false);
  const [okToEnter, setOkToEnter] = useState(true);
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto({ url: URL.createObjectURL(file), name: file.name });
  }

  function removePhoto() {
    if (photo) URL.revokeObjectURL(photo.url);
    setPhoto(null);
  }

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      desc: desc.trim(),
      category,
      urgent,
      okToEnter,
      photoUrl: photo?.url ?? null,
    });
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-head">
        <span>New request</span>
        <button type="button" onClick={onClose} aria-label="Close">
          <FiX aria-hidden="true" />
        </button>
      </div>
      <label>
        Issue
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Garbage disposal jammed" required />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <div className="urgency" role="group" aria-label="Priority">
        <button type="button" className={!urgent ? "active" : ""} aria-pressed={!urgent} onClick={() => setUrgent(false)}>Standard</button>
        <button type="button" className={urgent ? "active urgent" : ""} aria-pressed={urgent} onClick={() => setUrgent(true)}>Urgent</button>
      </div>
      <label>
        Details (optional)
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} placeholder="Anything the maintenance team should know" />
      </label>
      <label className="photo-label">
        Photo (optional)
        {photo ? (
          <div className="photo-preview">
            <img src={photo.url} alt="" />
            <button type="button" onClick={removePhoto} aria-label="Remove photo"><FiX aria-hidden="true" /></button>
          </div>
        ) : (
          <label className="photo-btn">
            <FiCamera aria-hidden="true" /> Add photo
            <input type="file" accept="image/*" onChange={handlePhoto} hidden />
          </label>
        )}
      </label>
      <label className="check-row">
        <input type="checkbox" checked={okToEnter} onChange={(e) => setOkToEnter(e.target.checked)} />
        OK to enter if I&rsquo;m not home
      </label>
      <button type="submit" className="primary">Submit request</button>
      <style jsx>{`
        .form { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .form-head { display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .form-head button { background: none; border: none; color: var(--ll-text-faint); cursor: pointer; display: flex; padding: 4px; }
        label { display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: var(--ll-text-muted); }
        input, textarea, select { background: var(--ll-surface-2); border: 1px solid var(--ll-border); border-radius: 10px; padding: 10px; color: var(--ll-text); font-size: 13px; font-family: inherit; resize: none; }
        .urgency { display: flex; gap: 8px; }
        .urgency button { flex: 1; background: var(--ll-surface-2); border: 1px solid var(--ll-border); color: var(--ll-text-muted); font-size: 12px; font-weight: 700; padding: 9px; border-radius: 10px; cursor: pointer; }
        .urgency button.active { background: var(--ll-accent-soft); border-color: var(--ll-accent); color: var(--ll-accent-soft-ink); }
        .urgency button.active.urgent { background: var(--ll-danger-soft); border-color: var(--ll-danger); color: var(--ll-danger); }
        .photo-label { gap: 8px; }
        .photo-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--ll-surface-2); border: 1px dashed var(--ll-border); color: var(--ll-text-muted); font-size: 12px; font-weight: 600; padding: 10px 14px; border-radius: 10px; cursor: pointer; width: fit-content; }
        .photo-btn :global(svg) { width: 15px; height: 15px; }
        .photo-preview { position: relative; width: 84px; height: 84px; }
        .photo-preview img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; border: 1px solid var(--ll-border); }
        .photo-preview button { position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; border-radius: 999px; background: var(--ll-surface); border: 1px solid var(--ll-border); color: var(--ll-text); display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .photo-preview button :global(svg) { width: 12px; height: 12px; }
        .check-row { flex-direction: row; align-items: center; gap: 8px; font-size: 12px; color: var(--ll-text-muted); }
        .check-row input { width: auto; padding: 0; accent-color: var(--ll-accent); }
        .primary { background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 700; border: none; cursor: pointer; margin-top: 4px; }
        .primary:hover { background: var(--ll-accent-hover); }
      `}</style>
    </form>
  );
}

function MaintenanceScreen({ requests, onAdd, initialFormOpen }) {
  const [formOpen, setFormOpen] = useState(!!initialFormOpen);

  function handleAdd(data) {
    onAdd(data);
    setFormOpen(false);
  }

  return (
    <div className="screen">
      <h1>Maintenance requests</h1>
      {formOpen ? (
        <NewRequestForm onAdd={handleAdd} onClose={() => setFormOpen(false)} />
      ) : (
        <button type="button" className="new" onClick={() => setFormOpen(true)}>
          + New request
        </button>
      )}
      <div className="list">
        {requests.map((r) => (
          <div className="row" key={r.id}>
            {r.photoUrl ? (
              <img className="thumb photo" src={r.photoUrl} alt="" />
            ) : (
              <div className="thumb" aria-hidden="true"><FiTool /></div>
            )}
            <div className="meta">
              <div className="rt">
                {r.title}
                {r.urgent && <span className="urgent-tag">Urgent</span>}
              </div>
              <div className="rs">
                {r.category ? `${r.category} · ` : ""}Submitted {r.date}
              </div>
            </div>
            <StatusChip status={r.status} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        h1 { font-size: 15px; font-weight: 700; margin: 6px 0 14px; color: var(--ll-text); }
        .new { width: 100%; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 13px; border-radius: 10px; font-size: 13px; font-weight: 700; border: none; cursor: pointer; }
        .new:hover { background: var(--ll-accent-hover); }
        .list { margin-top: 14px; display: flex; flex-direction: column; gap: 10px; }
        .row { display: flex; align-items: center; gap: 12px; padding: 13px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; }
        .thumb { width: 40px; height: 40px; border-radius: 10px; background: var(--ll-surface-2); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--ll-accent); }
        .thumb.photo { object-fit: cover; }
        .meta { min-width: 0; }
        .rt { font-size: 12.5px; font-weight: 700; color: var(--ll-text); display: flex; align-items: center; gap: 6px; }
        .urgent-tag { font-size: 9.5px; font-weight: 700; color: var(--ll-danger); background: var(--ll-danger-soft); padding: 2px 7px; border-radius: 999px; flex-shrink: 0; }
        .rs { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
      `}</style>
    </div>
  );
}

function BackHeader({ title, onBack }) {
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

const REWARDS_TABS = ["Earn", "Redeem", "Benefits", "Activity"];

function RewardsScreen({ onBack }) {
  const [tab, setTab] = useState("Earn");
  return (
    <div className="screen">
      <BackHeader title="Rewards" onBack={onBack} />
      <div className="status">
        <div className="tier"><FiAward aria-hidden="true" /> Silver Tier</div>
        <div className="pts">120 pts · $25 in credits</div>
        <div className="track"><div className="fill" style={{ width: "50%" }} /></div>
        <div className="sub">2 of 4 payments to Gold Tier</div>
      </div>
      <div className="tabs2" role="tablist" aria-label="Rewards sections">
        {REWARDS_TABS.map((t) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} className={"t2b" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      {tab === "Earn" && (
        <div className="cards">
          <div className="promo violet">
            <FiStar aria-hidden="true" />
            <div className="pt">Earn points on rent payments</div>
            <div className="ps">10 pts per on-time payment</div>
          </div>
          <div className="promo amber">
            <FiTool aria-hidden="true" />
            <div className="pt">Home services</div>
            <div className="ps">Partner discounts on move-in services</div>
          </div>
        </div>
      )}
      {tab === "Redeem" && <div className="empty">Nothing to redeem yet — earn points first.</div>}
      {tab === "Benefits" && (
        <ul className="benefits">
          <li>Priority maintenance scheduling</li>
          <li>Fee-free payment methods</li>
          <li>Early access to renewal offers</li>
        </ul>
      )}
      {tab === "Activity" && <div className="empty">No activity yet this cycle.</div>}
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .status { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 20px; margin-top: 14px; }
        .tier { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: var(--ll-text); }
        .tier :global(svg) { width: 18px; height: 18px; color: var(--ll-accent); }
        .pts { font-size: 12px; color: var(--ll-text-muted); margin-top: 4px; }
        .track { height: 6px; border-radius: 999px; background: var(--ll-surface-2); margin-top: 16px; overflow: hidden; }
        .track .fill { height: 100%; background: var(--ll-accent); border-radius: 999px; }
        .sub { font-size: 11px; color: var(--ll-text-faint); margin-top: 8px; }
        .tabs2 { display: flex; gap: 4px; margin-top: 18px; border-bottom: 1px solid var(--ll-border); }
        .t2b { flex: 1; background: none; border: none; color: var(--ll-text-faint); font-size: 11.5px; font-weight: 700; padding: 10px 4px; cursor: pointer; border-bottom: 2px solid transparent; }
        .t2b.active { color: var(--ll-accent); border-bottom-color: var(--ll-accent); }
        .cards { margin-top: 16px; display: flex; flex-direction: column; gap: 12px; }
        .promo { border-radius: 12px; padding: 16px; border: 1px solid var(--ll-border); }
        .promo :global(svg) { width: 20px; height: 20px; }
        .promo.violet { background: var(--ll-accent-soft); }
        .promo.violet :global(svg), .promo.violet .pt { color: var(--ll-accent-soft-ink); }
        .promo.amber { background: var(--ll-warning-soft); }
        .promo.amber :global(svg), .promo.amber .pt { color: var(--ll-warning); }
        .pt { font-size: 13px; font-weight: 700; margin-top: 10px; }
        .ps { font-size: 11px; color: var(--ll-text-muted); margin-top: 3px; }
        .empty { margin-top: 24px; font-size: 12.5px; color: var(--ll-text-faint); text-align: center; }
        .benefits { margin-top: 16px; padding-left: 18px; display: flex; flex-direction: column; gap: 10px; font-size: 12.5px; color: var(--ll-text-muted); }
      `}</style>
    </div>
  );
}

function DetailScreen({ title, onBack, rows }) {
  return (
    <div className="screen">
      <BackHeader title={title} onBack={onBack} />
      <div className="dcard">
        {rows.map(([label, value]) => (
          <div className="drow" key={label}>
            <span className="dl">{label}</span>
            <span className="dv">{value}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .dcard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; margin-top: 16px; padding: 4px 16px; }
        .drow { display: flex; justify-content: space-between; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--ll-border); font-size: 12.5px; }
        .drow:last-child { border-bottom: none; }
        .dl { color: var(--ll-text-muted); }
        .dv { color: var(--ll-text); font-weight: 600; text-align: right; }
      `}</style>
    </div>
  );
}

function AccountSettingsScreen({ rows, theme, onSetTheme, onBack }) {
  return (
    <div className="screen">
      <BackHeader title="Account Settings" onBack={onBack} />
      <div className="dcard">
        {rows.map(([label, value]) => (
          <div className="drow" key={label}>
            <span className="dl">{label}</span>
            <span className="dv">{value}</span>
          </div>
        ))}
      </div>
      <div className="slabel">Appearance</div>
      <div className="dcard">
        <div className="drow">
          <span className="dl">Theme</span>
          <div className="segmented" role="group" aria-label="Theme">
            <button type="button" className={theme === "light" ? "active" : ""} aria-pressed={theme === "light"} onClick={() => onSetTheme("light")}>
              Light
            </button>
            <button type="button" className={theme === "dark" ? "active" : ""} aria-pressed={theme === "dark"} onClick={() => onSetTheme("dark")}>
              Dark
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .dcard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; margin-top: 16px; padding: 4px 16px; }
        .drow { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--ll-border); font-size: 12.5px; }
        .drow:last-child { border-bottom: none; }
        .dl { color: var(--ll-text-muted); }
        .dv { color: var(--ll-text); font-weight: 600; text-align: right; }
        .slabel { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); margin: 22px 0 8px; }
        .segmented { display: flex; background: var(--ll-surface-2); border: 1px solid var(--ll-border); border-radius: 8px; padding: 2px; }
        .segmented button { background: none; border: none; color: var(--ll-text-muted); font-size: 11.5px; font-weight: 700; padding: 7px 14px; border-radius: 6px; cursor: pointer; }
        .segmented button.active { background: var(--ll-accent); color: var(--ll-accent-ink); }
      `}</style>
    </div>
  );
}

const MORE_SECTIONS = [
  {
    label: "My Account",
    items: [
      { key: "account", label: "Account Settings", sub: "Manage account details", Icon: FiSettings },
      { key: "profile", label: "My Public Profile", sub: "Edit your public info", Icon: FiUser },
    ],
  },
  {
    label: "My Apartment",
    items: [
      { key: "pay", label: "Payment Center", sub: "View balance & pay rent", Icon: FiCreditCard, jump: true },
      { key: "maintenance", label: "Service Requests", sub: "Track maintenance requests", Icon: FiTool, jump: true },
      { key: "lease", label: "My Lease", sub: "View lease documents", Icon: FiFileText },
    ],
  },
  {
    label: "My Community",
    items: [
      { key: "property", label: "Property Info", sub: "Contact & address", Icon: FiInfo },
      { key: "rewards", label: "Rewards", sub: "Points, tier & perks", Icon: FiAward },
    ],
  },
];

function MoreScreen({ onOpen, onSignOut }) {
  return (
    <div className="screen">
      <div className="head">
        <h1>Unit 214</h1>
      </div>
      {MORE_SECTIONS.map((section) => (
        <div className="section" key={section.label}>
          <div className="slabel">{section.label}</div>
          <div className="scard">
            {section.items.map(({ key, label, sub, Icon }) => (
              <button type="button" className="mrow" key={key} onClick={() => onOpen(key)}>
                <span className="mic"><Icon aria-hidden="true" /></span>
                <span className="mtext">
                  <span className="mt">{label}</span>
                  <span className="ms">{sub}</span>
                </span>
                <FiChevronRight aria-hidden="true" className="mchev" />
              </button>
            ))}
          </div>
        </div>
      ))}
      <button type="button" className="logout" onClick={onSignOut}>
        <FiLogOut aria-hidden="true" /> Logout
      </button>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .head h1 { font-size: 17px; font-weight: 700; margin: 6px 0 4px; color: var(--ll-text); }
        .section { margin-top: 20px; }
        .slabel { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); margin-bottom: 8px; }
        .scard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; overflow: hidden; }
        .mrow { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: none; border: none; border-bottom: 1px solid var(--ll-border); cursor: pointer; text-align: left; min-height: 44px; }
        .mrow:last-child { border-bottom: none; }
        .mic { width: 30px; height: 30px; border-radius: 9px; background: var(--ll-surface-2); display: flex; align-items: center; justify-content: center; color: var(--ll-accent); flex-shrink: 0; }
        .mic :global(svg) { width: 15px; height: 15px; }
        .mtext { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .mt { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .ms { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .mchev { width: 15px; height: 15px; color: var(--ll-text-faint); flex-shrink: 0; }
        .logout { width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: none; border: 1px solid var(--ll-danger); color: var(--ll-danger); font-size: 13px; font-weight: 700; padding: 13px; border-radius: 10px; margin-top: 28px; cursor: pointer; }
        .logout :global(svg) { width: 15px; height: 15px; }
      `}</style>
    </div>
  );
}

const DETAIL_CONTENT = {
  account: {
    title: "Account Settings",
    rows: [
      ["Name", "Jordan Ellis"],
      ["Email", "jordan@example.com"],
      ["Phone", "(555) 010-0142"],
      ["Notifications", "On"],
    ],
  },
  profile: {
    title: "My Public Profile",
    rows: [
      ["Display name", "Jordan E."],
      ["Visible to", "Your community"],
      ["Move-in date", "Mar 2025"],
    ],
  },
  lease: {
    title: "My Lease",
    rows: [
      ["Unit", "214"],
      ["Term", "Mar 2025 – Feb 2026"],
      ["Monthly rent", `$${fmt(BASE_RENT)}`],
      ["Renewal status", "Not yet offered"],
    ],
  },
  property: {
    title: "Property Info",
    rows: [
      ["Property", "Cedar Row Apartments"],
      ["Office phone", "(555) 010-0100"],
      ["Address", "100 Main St, Anytown, ST"],
      ["Office hours", "Mon–Fri, 9am–6pm"],
    ],
  },
};

export default function LoftLivingApp() {
  const [loading, setLoading] = useState(true);
  // Rendered client-only (see pages/loft-living/index.js, dynamic + ssr:false),
  // so reading localStorage in the initializer can't cause a hydration mismatch.
  const [authed, setAuthed] = useState(() => window.localStorage.getItem(AUTH_KEY) === "1");
  const [theme, setThemeState] = useState(() => window.localStorage.getItem(THEME_KEY) || "light");
  const [view, setView] = useState("home");
  const [overlay, setOverlay] = useState(null);
  const [balance, setBalance] = useState(BASE_RENT + UTILITIES);
  const [card, setCard] = useState(null);
  const [requests, setRequests] = useState(SEED_REQUESTS);
  const [maintFormOpen, setMaintFormOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(id);
  }, []);

  function handleSignedIn() {
    window.localStorage.setItem(AUTH_KEY, "1");
    setAuthed(true);
  }

  function handleSignOut() {
    window.localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setView("home");
    setOverlay(null);
  }

  function handleSetTheme(t) {
    window.localStorage.setItem(THEME_KEY, t);
    setThemeState(t);
  }

  function navigate(next, opts) {
    if (next === "maintenance" && opts?.openForm) setMaintFormOpen(true);
    else setMaintFormOpen(false);
    setOverlay(null);
    setView(next);
  }

  function openFromMenu(key) {
    if (key === "pay" || key === "maintenance") {
      navigate(key);
    } else {
      setOverlay(key);
    }
  }

  function addRequest({ title, desc, category, urgent, okToEnter, photoUrl }) {
    setRequests((rs) => [
      { id: Date.now(), title, desc, category, urgent, okToEnter, photoUrl, date: "Just now", status: "Submitted" },
      ...rs,
    ]);
  }

  function handlePay(paidAmount) {
    setBalance((b) => Math.max(0, b - paidAmount));
  }

  return (
    <div className="ll-shell" data-theme={theme}>
      <div className="phone">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="body">
              {!authed ? (
                <SignInScreen onSignedIn={handleSignedIn} />
              ) : overlay === "rewards" ? (
                <RewardsScreen onBack={() => setOverlay(null)} />
              ) : overlay === "account" ? (
                <AccountSettingsScreen
                  rows={DETAIL_CONTENT.account.rows}
                  theme={theme}
                  onSetTheme={handleSetTheme}
                  onBack={() => setOverlay(null)}
                />
              ) : overlay ? (
                <DetailScreen
                  title={DETAIL_CONTENT[overlay].title}
                  rows={DETAIL_CONTENT[overlay].rows}
                  onBack={() => setOverlay(null)}
                />
              ) : view === "home" ? (
                <HomeScreen requests={requests} amount={balance} card={card} onNavigate={navigate} onSignOut={handleSignOut} onOpenRewards={() => setOverlay("rewards")} />
              ) : view === "pay" ? (
                <PayScreen balance={balance} card={card} onSaveCard={setCard} onPay={handlePay} onBack={() => navigate("home")} onNavigate={navigate} />
              ) : view === "maintenance" ? (
                <MaintenanceScreen requests={requests} onAdd={addRequest} initialFormOpen={maintFormOpen} />
              ) : (
                <MoreScreen onOpen={openFromMenu} onSignOut={handleSignOut} />
              )}
            </div>
            {authed && <TabBar view={view} onNavigate={navigate} />}
          </>
        )}
      </div>
      <style jsx global>{`
        .ll-shell {
          --ll-bg: #F7F7F8;
          --ll-surface: #FFFFFF;
          --ll-surface-2: #F2F3F5;
          --ll-border: #E3E4E8;
          --ll-text: #14161A;
          --ll-text-muted: #5B5E68;
          --ll-text-faint: #6E7180;
          --ll-accent: #4F46E5;
          --ll-accent-hover: #4338CA;
          --ll-accent-ink: #FFFFFF;
          --ll-accent-soft: #EEF0FD;
          --ll-accent-soft-ink: #4338CA;
          --ll-success: #117A36;
          --ll-success-soft: #E7F6EC;
          --ll-danger: #B91C1C;
          --ll-danger-soft: #FCEAEA;
          --ll-warning: #B45309;
          --ll-warning-soft: #FEF3E0;
          --ll-focus: #4F46E5;
          --ll-shadow: 0 1px 2px rgba(20,22,26,.04), 0 8px 24px -14px rgba(20,22,26,.14);
          min-height: 100dvh;
          display: flex;
          justify-content: center;
          background: var(--ll-bg);
          font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
        }
        .ll-shell[data-theme="dark"] {
          --ll-bg: #0B0E14;
          --ll-surface: #15171E;
          --ll-surface-2: #1C1F27;
          --ll-border: #262A35;
          --ll-text: #F2F3F5;
          --ll-text-muted: #9BA0AE;
          --ll-text-faint: #6D7280;
          --ll-accent: #818CF8;
          --ll-accent-hover: #A5B0FB;
          --ll-accent-ink: #10121A;
          --ll-accent-soft: rgba(129,140,248,.16);
          --ll-accent-soft-ink: #A5B0FB;
          --ll-success: #4ADE80;
          --ll-success-soft: rgba(74,222,128,.15);
          --ll-danger: #F87171;
          --ll-danger-soft: rgba(248,113,113,.15);
          --ll-warning: #FBBF24;
          --ll-warning-soft: rgba(251,191,36,.15);
          --ll-focus: #818CF8;
          --ll-shadow: 0 1px 2px rgba(0,0,0,.3), 0 12px 30px -16px rgba(0,0,0,.5);
        }
        .ll-shell .phone {
          width: 100%;
          max-width: 480px;
          min-height: 100dvh;
          background: var(--ll-bg);
          position: relative;
          color: var(--ll-text);
          display: flex;
          flex-direction: column;
        }
        .ll-shell .body { flex: 1; overflow-y: auto; padding-top: 14px; padding-bottom: 68px; }
        .ll-shell button, .ll-shell input, .ll-shell select, .ll-shell textarea { font-family: inherit; }
        .ll-shell * { box-sizing: border-box; }
        .ll-shell *:focus-visible { outline: 2px solid var(--ll-focus); outline-offset: 2px; }
      `}</style>
    </div>
  );
}
