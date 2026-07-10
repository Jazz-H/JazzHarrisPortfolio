import { useState } from "react";
import {
  FiAward,
  FiChevronRight,
  FiCreditCard,
  FiFileText,
  FiInfo,
  FiLogOut,
  FiSettings,
  FiTool,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";
import { BackHeader, DetailCard, FormCard, FormField, PrimaryButton, SectionLabel } from "../primitives";
import { MORE_SECTIONS } from "../constants";

const ICONS = {
  settings: FiSettings,
  user: FiUser,
  creditCard: FiCreditCard,
  tool: FiTool,
  fileText: FiFileText,
  info: FiInfo,
  award: FiAward,
};

export function DetailScreen({ title, onBack, rows }) {
  return (
    <div className="screen">
      <BackHeader title={title} onBack={onBack} />
      <DetailCard rows={rows} />
      <style jsx>{`.screen { padding: 4px 20px 40px; }`}</style>
    </div>
  );
}

export function PropertyInfoScreen({ rows, onBack }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
  }

  const displayRows = rows.map(([label, value]) =>
    label === "Email" ? [label, <a key="email" href={`mailto:${value}`}>{value}</a>] : [label, value]
  );

  return (
    <div className="screen">
      <BackHeader title="Property Info" onBack={onBack} />
      <DetailCard rows={displayRows} />

      <SectionLabel>Contact the office</SectionLabel>
      {sent ? (
        <div className="sent-card">
          <FiCheckCircle aria-hidden="true" />
          <div className="st">Message sent</div>
          <div className="ss">The office typically responds within 1 business day.</div>
        </div>
      ) : (
        <FormCard onSubmit={submit}>
          <FormField label="Subject">
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. Question about parking" />
          </FormField>
          <FormField label="Message">
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="What can the office help with?" required />
          </FormField>
          <PrimaryButton type="submit">Send message</PrimaryButton>
        </FormCard>
      )}
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .sent-card { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 24px; text-align: center; }
        .sent-card :global(svg) { width: 28px; height: 28px; color: var(--ll-success); }
        .st { font-size: 14px; font-weight: 700; color: var(--ll-text); margin-top: 10px; }
        .ss { font-size: 12px; color: var(--ll-text-muted); margin-top: 4px; line-height: 1.5; }
      `}</style>
    </div>
  );
}

export function AccountSettingsScreen({ rows, theme, onSetTheme, onBack }) {
  return (
    <div className="screen">
      <BackHeader title="Account Settings" onBack={onBack} />
      <DetailCard rows={rows} />
      <SectionLabel>Appearance</SectionLabel>
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
        .drow { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 14px 0; font-size: 12.5px; }
        .dl { color: var(--ll-text-muted); }
        .segmented { display: flex; background: var(--ll-surface-2); border: 1px solid var(--ll-border); border-radius: 8px; padding: 2px; }
        .segmented button { background: none; border: none; color: var(--ll-text-muted); font-size: 11.5px; font-weight: 700; padding: 7px 14px; border-radius: 6px; cursor: pointer; }
        .segmented button.active { background: var(--ll-accent); color: var(--ll-accent-ink); }
      `}</style>
    </div>
  );
}

export default function MoreScreen({ onOpen, onSignOut }) {
  return (
    <div className="screen">
      <div className="head">
        <h1>Unit 214</h1>
      </div>
      {MORE_SECTIONS.map((section) => (
        <div className="section" key={section.label}>
          <SectionLabel>{section.label}</SectionLabel>
          <div className="scard">
            {section.items.map(({ key, label, sub, iconKey }) => {
              const Icon = ICONS[iconKey];
              return (
                <button type="button" className="mrow" key={key} onClick={() => onOpen(key)}>
                  <span className="mic"><Icon aria-hidden="true" /></span>
                  <span className="mtext">
                    <span className="mt">{label}</span>
                    <span className="ms">{sub}</span>
                  </span>
                  <FiChevronRight aria-hidden="true" className="mchev" />
                </button>
              );
            })}
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
