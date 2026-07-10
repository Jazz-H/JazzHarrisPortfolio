import { FiAward, FiCalendar, FiFileText, FiMapPin, FiPlus, FiSun, FiSunrise, FiSunset, FiTool } from "react-icons/fi";
import { fmt } from "../constants";

const STRIP_LINKS = [
  { key: "events", l: "Events", Icon: FiCalendar },
  { key: "docs", l: "Docs", Icon: FiFileText },
  { key: "amenities", l: "Amenities", Icon: FiMapPin },
];

function getGreetingHour() {
  return new Date().getHours();
}

function getGreeting(hour) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function HomeScreen({ requests, amount, card, onNavigate, onOpen }) {
  const open = requests.filter((r) => r.status !== "Resolved" && r.status !== "Cancelled");
  const hour = getGreetingHour();
  return (
    <div className="screen">
      <div className="greet">
        <div className="greet-icon" aria-hidden="true">
          {hour < 12 ? <FiSunrise /> : hour < 18 ? <FiSun /> : <FiSunset />}
        </div>
        <div>
          <div className="greet-line">
            {getGreeting(hour)}, <span className="name">Jordan</span>
          </div>
          <div className="greet-rule" aria-hidden="true" />
        </div>
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
        <button type="button" className="stripitem" onClick={() => onOpen("rewards")}>
          <div className="dot"><FiAward aria-hidden="true" /></div>
          <span>Rewards</span>
        </button>
        {STRIP_LINKS.map(({ key, l, Icon }) => (
          <button type="button" className="stripitem" key={key} onClick={() => onOpen(key)}>
            <div className="dot"><Icon aria-hidden="true" /></div>
            <span>{l}</span>
          </button>
        ))}
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 90px; }
        .greet { display: flex; align-items: center; gap: 13px; margin-top: 8px; }
        .greet-icon { width: 42px; height: 42px; border-radius: 12px; background: var(--ll-surface); border: 1px solid var(--ll-border); display: flex; align-items: center; justify-content: center; color: var(--ll-accent); flex-shrink: 0; }
        .greet-icon :global(svg) { width: 19px; height: 19px; }
        .greet-line { font-family: var(--ll-font-display); font-size: 20px; font-weight: 700; color: var(--ll-text); }
        .greet-line .name { color: var(--ll-accent); }
        .greet-rule { width: 26px; height: 3px; background: var(--ll-accent); border-radius: 999px; margin-top: 8px; }
        .lead { display: block; width: 100%; text-align: left; margin-top: 18px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 20px; cursor: pointer; box-shadow: var(--ll-shadow); }
        .l1 { font-size: 11px; color: var(--ll-text-faint); font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
        .l2 { font-family: var(--ll-font-display); font-size: 28px; font-weight: 700; margin-top: 8px; color: var(--ll-text); font-variant-numeric: tabular-nums; }
        .l3 { font-size: 12px; color: var(--ll-text-muted); margin-top: 4px; }
        .cta { margin-top: 16px; background: var(--ll-accent); color: var(--ll-accent-ink); text-align: center; padding: 12px; border-radius: 10px; font-size: 13px; font-weight: 700; }
        .row2 { display: flex; gap: 10px; margin-top: 12px; }
        .mini { flex: 1; text-align: left; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; padding: 14px; cursor: pointer; }
        .mini :global(svg) { width: 20px; height: 20px; color: var(--ll-accent); margin-bottom: 18px; }
        .mini .t { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .mini .s { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .strip { display: flex; gap: 10px; margin-top: 16px; }
        .stripitem { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; background: none; border: none; padding: 0; cursor: pointer; }
        .dot { width: 100%; aspect-ratio: 1; border-radius: 12px; background: var(--ll-surface); border: 1px solid var(--ll-border); display: flex; align-items: center; justify-content: center; }
        .dot :global(svg) { width: 17px; height: 17px; color: var(--ll-accent); }
        .stripitem span { font-size: 10.5px; color: var(--ll-text-muted); }
      `}</style>
    </div>
  );
}
