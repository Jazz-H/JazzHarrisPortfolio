import { useState } from "react";
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

function HomeScreen({ requests, amount, onNavigate, onSignOut }) {
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
        {["Rewards", "Events", "Docs", "Amenities"].map((l) => (
          <div className="stripitem" key={l}>
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
        .stripitem { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; }
        .dot { width: 100%; aspect-ratio: 1; border-radius: 14px; background: #171A22; border: 1px solid #262A35; }
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

function MoreScreen({ onBack }) {
  return (
    <div className="screen center">
      <h1>Not part of this redesign</h1>
      <p>
        This prototype focuses on the three flows the research prioritized —
        sign-in, rent payment, and maintenance. Rewards, events, and documents
        weren&rsquo;t in scope for this pass.
      </p>
      <button type="button" className="primary" onClick={onBack}>
        Back to home
      </button>
      <style jsx>{`
        .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 90px 26px 0; }
        h1 { font-size: 17px; font-weight: 800; margin: 0; }
        p { font-size: 12.5px; color: #9BA0AE; margin: 10px 0 26px; line-height: 1.6; }
        .primary { background: #171A22; border: 1px solid #262A35; color: #fff; text-align: center; padding: 12px 20px; border-radius: 14px; font-size: 13px; font-weight: 700; cursor: pointer; }
      `}</style>
    </div>
  );
}

export default function LoftLivingApp() {
  // Rendered client-only (see pages/loft-living/index.js, dynamic + ssr:false),
  // so reading localStorage in the initializer can't cause a hydration mismatch.
  const [authed, setAuthed] = useState(() => window.localStorage.getItem(AUTH_KEY) === "1");
  const [view, setView] = useState("home");
  const [amount, setAmount] = useState(BASE_RENT + UTILITIES);
  const [requests, setRequests] = useState(SEED_REQUESTS);
  const [maintFormOpen, setMaintFormOpen] = useState(false);

  function handleSignedIn() {
    window.localStorage.setItem(AUTH_KEY, "1");
    setAuthed(true);
  }

  function handleSignOut() {
    window.localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setView("home");
  }

  function navigate(next, opts) {
    if (next === "maintenance" && opts?.openForm) setMaintFormOpen(true);
    else setMaintFormOpen(false);
    setView(next);
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
        <div className="statusbar">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="body">
          {!authed ? (
            <SignInScreen onSignedIn={handleSignedIn} />
          ) : view === "home" ? (
            <HomeScreen requests={requests} amount={amount} onNavigate={navigate} onSignOut={handleSignOut} />
          ) : view === "pay" ? (
            <PayScreen amount={amount} setAmount={setAmount} onBack={() => navigate("home")} onNavigate={navigate} />
          ) : view === "maintenance" ? (
            <MaintenanceScreen requests={requests} onAdd={addRequest} initialFormOpen={maintFormOpen} />
          ) : (
            <MoreScreen onBack={() => navigate("home")} />
          )}
        </div>
        {authed && <TabBar view={view} onNavigate={navigate} />}
      </div>
      <style jsx global>{`
        .ll-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #08090C;
          padding: 24px 12px;
          font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
        }
        .ll-shell .phone {
          width: 100%;
          max-width: 420px;
          height: 700px;
          background: #0B0E14;
          border-radius: 32px;
          border: 1px solid #20232C;
          overflow: hidden;
          position: relative;
          color: #fff;
          box-shadow: 0 40px 100px -30px rgba(0,0,0,.7);
          display: flex;
          flex-direction: column;
        }
        .ll-shell .statusbar {
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          font-size: 12px;
          color: #9BA0AE;
        }
        .ll-shell .body { flex: 1; overflow-y: auto; padding-bottom: 68px; }
        .ll-shell button { font-family: inherit; }
        .ll-shell * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
