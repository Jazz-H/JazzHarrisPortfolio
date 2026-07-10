import { useState } from "react";
import { FiAward, FiStar, FiTool } from "react-icons/fi";
import { BackHeader } from "../primitives";
import { REWARDS_TABS } from "../constants";

export default function RewardsScreen({ onBack }) {
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
