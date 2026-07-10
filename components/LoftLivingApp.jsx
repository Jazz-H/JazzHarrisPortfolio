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
} from "react-icons/fi";

const AUTH_KEY = "loftLivingDemoAuthed";
const BASE_RENT = 1450;
const UTILITIES = 30;

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const SEED_REQUESTS = [
  { id: 1, title: "Leaking kitchen faucet", date: "Jul 6", status: "In progress" },
  { id: 2, title: "AC not cooling", date: "Jun 28", status: "Resolved" },
  { id: 3, title: "Hallway light out", date: "Jun 14", status: "Resolved" },
];

function LoadingScreen() {
  return (
    <div className="loading">
      <div className="mark">
        <FiHome aria-hidden="true" />
      </div>
      <div className="bar">
        <div className="fill" />
      </div>
      <style jsx>{`
        .loading { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; background: #0B0E14; }
        .mark { width: 72px; height: 72px; border-radius: 22px; background: linear-gradient(135deg,#8B7CFA,#5A3FE0); display: flex; align-items: center; justify-content: center; animation: pulse 1.1s ease-in-out infinite; }
        .mark :global(svg) { width: 32px; height: 32px; color: #fff; }
        .bar { width: 96px; height: 3px; border-radius: 999px; background: #20232C; overflow: hidden; }
        .fill { width: 40%; height: 100%; background: #8B7CFA; border-radius: 999px; animation: slide 1.1s ease-in-out infinite; }
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
        .chip { font-size: 10px; font-weight: 700; padding: 4px 9px; border-radius: 999px; margin-left: auto; flex-shrink: 0; }
        .progress { background: rgba(139,124,250,.18); color: #8B7CFA; }
        .done { background: rgba(74,222,128,.15); color: #4ADE80; }
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
        .tabs { position: absolute; bottom: 0; left: 0; right: 0; height: 68px; background: #12141B; border-top: 1px solid #20232C; display: flex; }
        .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; background: none; border: none; color: #6D7280; font-size: 9.5px; font-weight: 600; cursor: pointer; }
        .tab :global(svg) { width: 19px; height: 19px; }
        .tab.active { color: #8B7CFA; }
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
        .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 90px 22px 0; }
        .faceid { width: 84px; height: 84px; border-radius: 26px; background: linear-gradient(135deg,#8B7CFA,#5A3FE0); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
        .faceid :global(svg) { width: 38px; height: 38px; color: #fff; }
        h1 { font-size: 20px; font-weight: 800; margin: 0; }
        p { font-size: 13px; color: #9BA0AE; margin: 6px 0 30px; }
        .primary { width: 100%; background: #8B7CFA; color: #0B0E14; text-align: center; padding: 15px; border-radius: 16px; font-size: 14.5px; font-weight: 800; border: none; cursor: pointer; }
        .ghost { background: none; border: none; color: #9BA0AE; font-size: 12.5px; margin-top: 16px; cursor: pointer; }
      `}</style>
    </div>
  );
}

function HomeScreen({ requests, amount, onNavigate, onSignOut, onOpenRewards }) {
  const open = requests.filter((r) => r.status !== "Resolved");
  return (
    <div className="screen">
      <div className="greet">
        Good morning
        <b>Jordan</b>
      </div>
      <button type="button" className="lead" onClick={() => onNavigate("pay")}>
        <div className="l1">Rent due Aug 1</div>
        <div className="l2">${fmt(amount)}</div>
        <div className="l3">No hidden fees · pay in one tap</div>
        <div className="cta">Pay with Face ID</div>
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
        {["Events", "Docs", "Amenities"].map((l) => (
          <div className="stripitem inert" key={l}>
            <div className="dot" />
            <span>{l}</span>
          </div>
        ))}
      </div>
      <button type="button" className="signout" onClick={onSignOut}>
        Sign out (reset demo)
      </button>
      <style jsx>{`
        .screen { padding: 8px 20px 90px; }
        .greet { font-size: 13px; color: #9BA0AE; margin-top: 10px; }
        .greet b { color: #fff; font-size: 19px; display: block; margin-top: 2px; }
        .lead { display: block; width: 100%; text-align: left; margin-top: 18px; background: linear-gradient(135deg,#8B7CFA,#5A3FE0); border: none; border-radius: 22px; padding: 22px; cursor: pointer; color: #fff; }
        .l1 { font-size: 12px; opacity: .85; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
        .l2 { font-size: 30px; font-weight: 800; margin-top: 8px; }
        .l3 { font-size: 12px; opacity: .85; margin-top: 4px; }
        .cta { margin-top: 16px; background: rgba(0,0,0,.25); text-align: center; padding: 11px; border-radius: 12px; font-size: 13px; font-weight: 700; }
        .row2 { display: flex; gap: 12px; margin-top: 12px; }
        .mini { flex: 1; text-align: left; background: #171A22; border: 1px solid #262A35; border-radius: 16px; padding: 14px; cursor: pointer; color: #fff; }
        .mini :global(svg) { width: 22px; height: 22px; color: #8B7CFA; margin-bottom: 20px; }
        .mini .t { font-size: 12.5px; font-weight: 700; }
        .mini .s { font-size: 10.5px; color: #6D7280; margin-top: 2px; }
        .strip { display: flex; gap: 12px; margin-top: 18px; }
        .stripitem { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; background: none; border: none; padding: 0; cursor: pointer; }
        .stripitem.inert { cursor: default; }
        .dot { width: 100%; aspect-ratio: 1; border-radius: 14px; background: #171A22; border: 1px solid #262A35; display: flex; align-items: center; justify-content: center; }
        .dot :global(svg) { width: 18px; height: 18px; color: #8B7CFA; }
        .stripitem span { font-size: 10px; color: #6D7280; }
        .signout { margin-top: 28px; background: none; border: none; color: #4A4F5E; font-size: 11px; text-decoration: underline; cursor: pointer; }
      `}</style>
    </div>
  );
}

function PayScreen({ amount, setAmount, onBack, onNavigate }) {
  const [paid, setPaid] = useState(false);
  const serviceFee = 0;
  const total = amount;

  if (paid) {
    return (
      <div className="screen center">
        <div className="check">
          <FiCheckCircle aria-hidden="true" />
        </div>
        <h1>Payment received</h1>
        <p>${fmt(total)} paid · confirmation sent</p>
        <button type="button" className="primary" onClick={() => onNavigate("home")}>
          Back to home
        </button>
        <style jsx>{`
          .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 90px 22px 0; }
          .check { width: 84px; height: 84px; border-radius: 26px; background: rgba(74,222,128,.15); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
          .check :global(svg) { width: 38px; height: 38px; color: #4ADE80; }
          h1 { font-size: 20px; font-weight: 800; margin: 0; }
          p { font-size: 13px; color: #9BA0AE; margin: 6px 0 30px; }
          .primary { width: 100%; background: #8B7CFA; color: #0B0E14; text-align: center; padding: 15px; border-radius: 16px; font-size: 14.5px; font-weight: 800; border: none; cursor: pointer; }
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
        <div className="amt">${fmt(amount)}</div>
      </div>
      <div className="stepper">
        <button type="button" onClick={() => setAmount((a) => Math.max(50, a - 10))} aria-label="Decrease amount">
          <FiMinus aria-hidden="true" />
        </button>
        <span>Edit amount</span>
        <button type="button" onClick={() => setAmount((a) => a + 10)} aria-label="Increase amount">
          <FiPlus aria-hidden="true" />
        </button>
      </div>
      <div className="card">
        <div className="line"><span>Base rent</span><span>${fmt(BASE_RENT)}</span></div>
        <div className="line"><span>Utilities</span><span>${fmt(UTILITIES)}</span></div>
        <div className="line"><span>Service fee</span><span className="good">${fmt(serviceFee)} · no hidden fees</span></div>
        <div className="line total"><span>Total</span><span>${fmt(total)}</span></div>
      </div>
      <button type="button" className="primary" onClick={() => setPaid(true)}>
        Pay with Face ID
      </button>
      <p className="note">Pay early or adjust the amount any time before the due date — nothing here is locked.</p>
      <style jsx>{`
        .screen { padding: 8px 20px 40px; }
        .back { background: #171A22; border: 1px solid #262A35; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; margin-bottom: 8px; }
        .balance { text-align: center; padding: 10px 0 4px; }
        .l { font-size: 12px; color: #9BA0AE; }
        .amt { font-size: 40px; font-weight: 800; margin-top: 6px; }
        .stepper { display: flex; align-items: center; justify-content: center; gap: 16px; margin: 14px 0 4px; }
        .stepper span { font-size: 13px; color: #9BA0AE; }
        .stepper button { width: 34px; height: 34px; border-radius: 10px; background: #262A35; border: none; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; }
        .card { background: #171A22; border: 1px solid #262A35; border-radius: 20px; padding: 20px; margin-top: 18px; }
        .line { display: flex; justify-content: space-between; font-size: 12.5px; padding: 9px 0; border-bottom: 1px solid #20232C; color: #C7CAD3; }
        .line.total { color: #fff; font-weight: 700; border-bottom: none; }
        .line .good { color: #4ADE80; font-weight: 700; }
        .primary { width: 100%; background: #8B7CFA; color: #0B0E14; text-align: center; padding: 15px; border-radius: 16px; font-size: 14.5px; font-weight: 800; border: none; cursor: pointer; margin-top: 16px; }
        .note { font-size: 11px; color: #6D7280; text-align: center; margin-top: 14px; line-height: 1.5; }
      `}</style>
    </div>
  );
}

function MaintenanceScreen({ requests, onAdd, initialFormOpen }) {
  const [formOpen, setFormOpen] = useState(!!initialFormOpen);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), desc: desc.trim() });
    setTitle("");
    setDesc("");
    setFormOpen(false);
  }

  return (
    <div className="screen">
      <h1>Maintenance requests</h1>
      {formOpen ? (
        <form className="form" onSubmit={submit}>
          <div className="form-head">
            <span>New request</span>
            <button type="button" onClick={() => setFormOpen(false)} aria-label="Close">
              <FiX aria-hidden="true" />
            </button>
          </div>
          <label>
            Issue
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Garbage disposal jammed" required />
          </label>
          <label>
            Details (optional)
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} placeholder="Anything the maintenance team should know" />
          </label>
          <button type="submit" className="primary">Submit request</button>
        </form>
      ) : (
        <button type="button" className="new" onClick={() => setFormOpen(true)}>
          + New request
        </button>
      )}
      <div className="list">
        {requests.map((r) => (
          <div className="row" key={r.id}>
            <div className="thumb" aria-hidden="true"><FiTool /></div>
            <div className="meta">
              <div className="rt">{r.title}</div>
              <div className="rs">Submitted {r.date}</div>
            </div>
            <StatusChip status={r.status} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .screen { padding: 8px 20px 40px; }
        h1 { font-size: 15px; font-weight: 700; margin: 6px 0 14px; }
        .new { width: 100%; background: #8B7CFA; color: #0B0E14; text-align: center; padding: 13px; border-radius: 14px; font-size: 13px; font-weight: 800; border: none; cursor: pointer; }
        .form { background: #171A22; border: 1px solid #262A35; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .form-head { display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; font-weight: 700; color: #fff; }
        .form-head button { background: none; border: none; color: #6D7280; cursor: pointer; display: flex; }
        label { display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: #9BA0AE; }
        input, textarea { background: #0B0E14; border: 1px solid #262A35; border-radius: 10px; padding: 10px; color: #fff; font-size: 13px; font-family: inherit; resize: none; }
        input:focus, textarea:focus { outline: 2px solid #8B7CFA; outline-offset: 1px; }
        .form .primary { background: #8B7CFA; color: #0B0E14; text-align: center; padding: 12px; border-radius: 12px; font-size: 13px; font-weight: 800; border: none; cursor: pointer; margin-top: 4px; }
        .list { margin-top: 14px; display: flex; flex-direction: column; gap: 10px; }
        .row { display: flex; align-items: center; gap: 12px; padding: 13px; background: #171A22; border: 1px solid #262A35; border-radius: 14px; }
        .thumb { width: 40px; height: 40px; border-radius: 10px; background: #262A35; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #8B7CFA; }
        .meta { min-width: 0; }
        .rt { font-size: 12.5px; font-weight: 700; }
        .rs { font-size: 10.5px; color: #6D7280; margin-top: 2px; }
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
        .back { background: #171A22; border: 1px solid #262A35; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; flex-shrink: 0; }
        h1 { font-size: 15px; font-weight: 700; }
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
      <div className="tabs2">
        {REWARDS_TABS.map((t) => (
          <button key={t} type="button" className={"t2b" + (tab === t ? " active" : "")} onClick={() => setTab(t)}>
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
        .screen { padding: 8px 20px 40px; }
        .status { background: linear-gradient(135deg,#8B7CFA,#5A3FE0); border-radius: 20px; padding: 20px; margin-top: 14px; }
        .tier { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 800; }
        .tier :global(svg) { width: 18px; height: 18px; }
        .pts { font-size: 12px; opacity: .9; margin-top: 4px; }
        .track { height: 6px; border-radius: 999px; background: rgba(0,0,0,.25); margin-top: 16px; overflow: hidden; }
        .track .fill { height: 100%; background: #fff; border-radius: 999px; }
        .sub { font-size: 11px; opacity: .85; margin-top: 8px; }
        .tabs2 { display: flex; gap: 4px; margin-top: 18px; border-bottom: 1px solid #20232C; }
        .t2b { flex: 1; background: none; border: none; color: #6D7280; font-size: 11.5px; font-weight: 700; padding: 10px 4px; cursor: pointer; border-bottom: 2px solid transparent; }
        .t2b.active { color: #fff; border-bottom-color: #8B7CFA; }
        .cards { margin-top: 16px; display: flex; flex-direction: column; gap: 12px; }
        .promo { border-radius: 16px; padding: 16px; }
        .promo :global(svg) { width: 20px; height: 20px; }
        .promo.violet { background: rgba(139,124,250,.14); color: #C9C0FE; }
        .promo.amber { background: rgba(250,178,25,.12); color: #F2C368; }
        .pt { font-size: 13px; font-weight: 700; color: #fff; margin-top: 10px; }
        .ps { font-size: 11px; color: #9BA0AE; margin-top: 3px; }
        .empty { margin-top: 24px; font-size: 12.5px; color: #6D7280; text-align: center; }
        .benefits { margin-top: 16px; padding-left: 18px; display: flex; flex-direction: column; gap: 10px; font-size: 12.5px; color: #C7CAD3; }
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
        .screen { padding: 8px 20px 40px; }
        .dcard { background: #171A22; border: 1px solid #262A35; border-radius: 16px; margin-top: 16px; padding: 4px 16px; }
        .drow { display: flex; justify-content: space-between; gap: 16px; padding: 14px 0; border-bottom: 1px solid #20232C; font-size: 12.5px; }
        .drow:last-child { border-bottom: none; }
        .dl { color: #9BA0AE; }
        .dv { color: #fff; font-weight: 600; text-align: right; }
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
        .screen { padding: 8px 20px 40px; }
        .head h1 { font-size: 17px; font-weight: 800; margin: 6px 0 4px; }
        .section { margin-top: 20px; }
        .slabel { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #6D7280; margin-bottom: 8px; }
        .scard { background: #171A22; border: 1px solid #262A35; border-radius: 16px; overflow: hidden; }
        .mrow { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: none; border: none; border-bottom: 1px solid #20232C; cursor: pointer; text-align: left; }
        .mrow:last-child { border-bottom: none; }
        .mic { width: 30px; height: 30px; border-radius: 9px; background: #20232C; display: flex; align-items: center; justify-content: center; color: #8B7CFA; flex-shrink: 0; }
        .mic :global(svg) { width: 15px; height: 15px; }
        .mtext { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .mt { font-size: 12.5px; font-weight: 700; color: #fff; }
        .ms { font-size: 10.5px; color: #6D7280; margin-top: 2px; }
        .mchev { width: 15px; height: 15px; color: #4A4F5E; flex-shrink: 0; }
        .logout { width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: none; border: 1px solid #3A2530; color: #F27C7C; font-size: 13px; font-weight: 700; padding: 13px; border-radius: 14px; margin-top: 28px; cursor: pointer; }
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
  const [view, setView] = useState("home");
  const [overlay, setOverlay] = useState(null);
  const [amount, setAmount] = useState(BASE_RENT + UTILITIES);
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

  function addRequest({ title, desc }) {
    setRequests((rs) => [
      { id: Date.now(), title, desc, date: "Just now", status: "Submitted" },
      ...rs,
    ]);
  }

  return (
    <div className="ll-shell">
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
              ) : overlay ? (
                <DetailScreen
                  title={DETAIL_CONTENT[overlay].title}
                  rows={DETAIL_CONTENT[overlay].rows}
                  onBack={() => setOverlay(null)}
                />
              ) : view === "home" ? (
                <HomeScreen requests={requests} amount={amount} onNavigate={navigate} onSignOut={handleSignOut} onOpenRewards={() => setOverlay("rewards")} />
              ) : view === "pay" ? (
                <PayScreen amount={amount} setAmount={setAmount} onBack={() => navigate("home")} onNavigate={navigate} />
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
          min-height: 100dvh;
          display: flex;
          justify-content: center;
          background: #0B0E14;
          font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
        }
        .ll-shell .phone {
          width: 100%;
          max-width: 480px;
          min-height: 100dvh;
          background: #0B0E14;
          position: relative;
          color: #fff;
          display: flex;
          flex-direction: column;
        }
        .ll-shell .body { flex: 1; overflow-y: auto; padding-top: 14px; padding-bottom: 68px; }
        .ll-shell button { font-family: inherit; }
        .ll-shell * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
