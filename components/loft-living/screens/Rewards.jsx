import { FiAward, FiCheck, FiClock, FiCreditCard, FiLock, FiStar, FiTool } from "react-icons/fi";
import { BackHeader, SectionLabel } from "../primitives";
import {
  REWARD_CATALOG,
  REWARD_BENEFITS,
  REWARD_TIERS,
  POINTS_PER_PAYMENT,
  paymentsCount,
  rewardsPoints,
  rewardsCredits,
  spentPoints,
  currentTier,
  nextTier,
} from "../constants";

const BENEFIT_ICONS = { tool: FiTool, creditCard: FiCreditCard, clock: FiClock };

// No tabs — the whole screen is one continuous scroll. Top-rated resident
// apps don't gamify rewards at all, but reviewers of the ones that do
// nest content behind tabs specifically complain about losing their place
// when navigation goes more than one level deep, so this applies that
// lesson instead of inventing a feature none of them actually have.
export default function RewardsScreen({ onBack, history, redeemedRewards = [], onRedeem }) {
  const count = paymentsCount(history);
  const points = rewardsPoints(history) - spentPoints(redeemedRewards);
  const credits = rewardsCredits(history);
  const tier = currentTier(history);
  const next = nextTier(history);
  const into = next ? count - tier.minPayments : 0;
  const needed = next ? next.minPayments - tier.minPayments : 0;
  const progressPct = next ? Math.min(100, Math.round((into / needed) * 100)) : 100;

  const earnEvents = history
    .filter((t) => t.amount < 0)
    .slice()
    .reverse()
    .map((t) => ({ id: `pay-${t.id}`, desc: t.desc, date: t.date, delta: POINTS_PER_PAYMENT }));
  const spendEvents = redeemedRewards
    .slice()
    .reverse()
    .map((r) => ({ id: `redeem-${r.id}`, desc: `Redeemed — ${r.label}`, date: r.date, delta: -r.cost }));
  const activity = [...spendEvents, ...earnEvents];

  return (
    <div className="screen">
      <BackHeader title="Rewards" onBack={onBack} />
      <div className="status">
        <div className="tier"><FiAward aria-hidden="true" /> {tier.name} Tier</div>
        <div className="pts">{points} pts · ${credits} in credits</div>
        <div className="ladder" role="list" aria-label="Reward tiers">
          {REWARD_TIERS.map((t) => (
            <div
              role="listitem"
              key={t.key}
              className={"lstep" + (count >= t.minPayments ? " done" : "") + (t.key === tier.key ? " current" : "")}
            >
              {t.name}
            </div>
          ))}
        </div>
        {next ? (
          <>
            <div className="track"><div className="fill" style={{ width: `${progressPct}%` }} /></div>
            <div className="sub">{into} of {needed} payments to {next.name} Tier</div>
          </>
        ) : (
          <div className="sub top">You&rsquo;ve reached the top tier</div>
        )}
      </div>

      <SectionLabel>Earn</SectionLabel>
      <div className="cards">
        <div className="promo violet">
          <FiStar aria-hidden="true" />
          <div className="pt">Earn points on rent payments</div>
          <div className="ps">{POINTS_PER_PAYMENT} pts per on-time payment</div>
        </div>
        <div className="promo amber">
          <FiTool aria-hidden="true" />
          <div className="pt">Home services</div>
          <div className="ps">Partner discounts on move-in services</div>
        </div>
      </div>

      <SectionLabel>Redeem</SectionLabel>
      <div className="catalog">
        {REWARD_CATALOG.map((item) => {
          const isRedeemed = redeemedRewards.some((r) => r.key === item.key);
          const unlocked = isRedeemed || points >= item.cost;
          return (
            <div className={"citem" + (unlocked ? "" : " locked")} key={item.key}>
              <div className="cicon">{unlocked ? <FiStar aria-hidden="true" /> : <FiLock aria-hidden="true" />}</div>
              <div className="ctext">
                <div className="ct">{item.label}</div>
                {item.sub && <div className="cs">{item.sub}</div>}
                <div className="cc">{item.cost} pts{!unlocked ? ` · ${item.cost - points} more to unlock` : ""}</div>
              </div>
              {unlocked && (
                isRedeemed ? (
                  <span className="redeemed-tag"><FiCheck aria-hidden="true" /> Redeemed</span>
                ) : (
                  <button
                    type="button"
                    className="redeem-btn"
                    onClick={() => onRedeem(item)}
                  >
                    Redeem
                  </button>
                )
              )}
            </div>
          );
        })}
      </div>

      <SectionLabel>Benefits</SectionLabel>
      <div className="bcard">
        {REWARD_BENEFITS.map(({ label, iconKey }) => {
          const Icon = BENEFIT_ICONS[iconKey];
          return (
            <div className="brow" key={label}>
              <span className="bic"><Icon aria-hidden="true" /></span>
              <span className="bt">{label}</span>
            </div>
          );
        })}
      </div>

      <SectionLabel>Activity</SectionLabel>
      {activity.length ? (
        <div className="alist">
          {activity.map((a) => (
            <div className="arow" key={a.id}>
              <div className="am">
                <div className="at">{a.desc}</div>
                <div className="ad">{a.date}</div>
              </div>
              <div className={"ap" + (a.delta < 0 ? " spend" : "")}>
                {a.delta > 0 ? "+" : "−"}{Math.abs(a.delta)} pts
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">No activity yet this cycle.</div>
      )}

      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .status { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 20px; margin-top: 14px; }
        .tier { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: var(--ll-text); }
        .tier :global(svg) { width: 18px; height: 18px; color: var(--ll-accent); }
        .pts { font-size: 12px; color: var(--ll-text-muted); margin-top: 4px; }
        .ladder { display: flex; gap: 6px; margin-top: 16px; }
        .lstep { flex: 1; text-align: center; font-size: 10px; font-weight: 700; padding: 7px 4px; border-radius: 8px; background: var(--ll-surface-2); border: 1px solid var(--ll-border); color: var(--ll-text-faint); }
        .lstep.done { background: var(--ll-accent-soft); color: var(--ll-accent-soft-ink); border-color: transparent; }
        .lstep.current { background: var(--ll-accent); color: var(--ll-accent-ink); }
        .track { height: 6px; border-radius: 999px; background: var(--ll-surface-2); margin-top: 14px; overflow: hidden; }
        .track .fill { height: 100%; background: var(--ll-accent); border-radius: 999px; }
        .sub { font-size: 11px; color: var(--ll-text-faint); margin-top: 8px; }
        .sub.top { color: var(--ll-success); font-weight: 600; }
        .cards { margin-top: 12px; display: flex; flex-direction: column; gap: 12px; }
        .promo { border-radius: 12px; padding: 16px; border: 1px solid var(--ll-border); }
        .promo :global(svg) { width: 20px; height: 20px; }
        .promo.violet { background: var(--ll-accent-soft); }
        .promo.violet :global(svg), .promo.violet .pt { color: var(--ll-accent-soft-ink); }
        .promo.amber { background: var(--ll-warning-soft); }
        .promo.amber :global(svg), .promo.amber .pt { color: var(--ll-warning); }
        .pt { font-size: 13px; font-weight: 700; margin-top: 10px; }
        .ps { font-size: 11px; color: var(--ll-text-muted); margin-top: 3px; }
        .empty { margin-top: 12px; font-size: 12.5px; color: var(--ll-text-faint); text-align: center; }
        .catalog { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
        .citem { display: flex; align-items: center; gap: 12px; padding: 13px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; }
        .citem.locked { opacity: .6; }
        .cicon { width: 34px; height: 34px; border-radius: 10px; background: var(--ll-accent-soft); color: var(--ll-accent-soft-ink); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cicon :global(svg) { width: 16px; height: 16px; }
        .locked .cicon { background: var(--ll-surface-2); color: var(--ll-text-faint); }
        .ctext { flex: 1; min-width: 0; }
        .ct { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .cs { font-size: 11px; color: var(--ll-text-muted); margin-top: 1px; }
        .cc { font-size: 10.5px; color: var(--ll-text-faint); margin-top: 3px; }
        .redeem-btn { background: var(--ll-accent); color: var(--ll-accent-ink); font-size: 11.5px; font-weight: 700; padding: 9px 14px; border-radius: 8px; border: none; cursor: pointer; flex-shrink: 0; }
        .redeem-btn:hover { background: var(--ll-accent-hover); }
        .redeemed-tag { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; color: var(--ll-success); flex-shrink: 0; }
        .redeemed-tag :global(svg) { width: 13px; height: 13px; }
        .bcard { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; margin-top: 12px; overflow: hidden; }
        .brow { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-bottom: 1px solid var(--ll-border); }
        .brow:last-child { border-bottom: none; }
        .bic { width: 30px; height: 30px; border-radius: 9px; background: var(--ll-surface-2); display: flex; align-items: center; justify-content: center; color: var(--ll-accent); flex-shrink: 0; }
        .bic :global(svg) { width: 15px; height: 15px; }
        .bt { font-size: 12.5px; font-weight: 600; color: var(--ll-text); }
        .alist { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
        .arow { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 13px 14px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; }
        .at { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .ad { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .ap { font-size: 13px; font-weight: 700; color: var(--ll-success); flex-shrink: 0; }
        .ap.spend { color: var(--ll-accent); }
      `}</style>
    </div>
  );
}
