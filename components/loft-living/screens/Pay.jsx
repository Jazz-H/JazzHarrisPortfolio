import { useState } from "react";
import { FiArrowLeft, FiCheck, FiCheckCircle, FiChevronRight, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { BackHeader, FormCard, FormField, FormHead, PrimaryButton } from "../primitives";
import { BASE_RENT, MIN_PAYMENT, PAY_STEP, UTILITIES, fmt } from "../constants";

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
    <FormCard onSubmit={submit}>
      <FormHead title="Add a card" onClose={onCancel} />
      <FormField label="Card number">
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="4242 4242 4242 4242"
          inputMode="numeric"
          required
        />
      </FormField>
      <div className="row2f">
        <FormField label="Expiry">
          <input value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" required />
        </FormField>
        <FormField label="Name on card">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Ellis" required />
        </FormField>
      </div>
      <PrimaryButton type="submit">Save card</PrimaryButton>
      <style jsx>{`
        .row2f { display: flex; gap: 10px; }
        .row2f :global(label) { flex: 1; }
      `}</style>
    </FormCard>
  );
}

function PaymentMethodsScreen({ cards, activeCardId, onSetActive, onDelete, onAddNew, onBack }) {
  return (
    <div className="screen">
      <BackHeader title="Payment Methods" onBack={onBack} />
      {cards.length === 0 ? (
        <div className="empty">No saved payment methods yet.</div>
      ) : (
        <div className="list">
          {cards.map((c) => (
            <div className="row" key={c.id}>
              <button type="button" className="select" onClick={() => onSetActive(c.id)} aria-pressed={c.id === activeCardId}>
                <span className={"radio" + (c.id === activeCardId ? " on" : "")}>
                  {c.id === activeCardId && <FiCheck aria-hidden="true" />}
                </span>
                <span>Card ····{c.last4}</span>
              </button>
              <button type="button" className="del" onClick={() => onDelete(c.id)} aria-label={`Remove card ending in ${c.last4}`}>
                <FiTrash2 aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
      <button type="button" className="new" onClick={onAddNew}>+ Add payment method</button>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .empty { font-size: 12.5px; color: var(--ll-text-faint); text-align: center; margin: 24px 0; }
        .list { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .row { display: flex; align-items: center; gap: 8px; }
        .select { flex: 1; display: flex; align-items: center; gap: 12px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; padding: 14px; cursor: pointer; text-align: left; font-size: 12.5px; color: var(--ll-text); font-weight: 600; }
        .radio { width: 20px; height: 20px; border-radius: 999px; border: 1.5px solid var(--ll-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--ll-accent-ink); }
        .radio.on { background: var(--ll-accent); border-color: var(--ll-accent); }
        .radio :global(svg) { width: 12px; height: 12px; }
        .del { width: 40px; height: 40px; border-radius: 10px; background: var(--ll-surface); border: 1px solid var(--ll-border); color: var(--ll-danger); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
        .del :global(svg) { width: 16px; height: 16px; }
        .new { width: 100%; background: var(--ll-surface-2); border: 1px dashed var(--ll-border); color: var(--ll-text-muted); text-align: center; padding: 13px; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; margin-top: 16px; }
      `}</style>
    </div>
  );
}

function HistoryScreen({ history, onBack }) {
  const withBalance = history.reduce((acc, t) => {
    const runningBalance = (acc.at(-1)?.runningBalance ?? 0) + t.amount;
    return [...acc, { ...t, runningBalance }];
  }, []);
  const newestFirst = withBalance.slice().reverse();

  return (
    <div className="screen">
      <BackHeader title="Account History" onBack={onBack} />
      <div className="list">
        {newestFirst.map((t) => {
          const isCharge = t.amount > 0;
          return (
            <div className="row" key={t.id}>
              <div className="meta">
                <div className="desc">{t.desc}</div>
                <div className="date">{t.date}</div>
              </div>
              <div className="amts">
                <div className={"amt" + (isCharge ? "" : " payment")}>
                  {isCharge ? "+" : "−"}${fmt(Math.abs(t.amount))}
                </div>
                <div className="running">Balance ${fmt(t.runningBalance)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .list { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; }
        .row { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 13px 14px; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 12px; }
        .desc { font-size: 12.5px; font-weight: 700; color: var(--ll-text); }
        .date { font-size: 11px; color: var(--ll-text-muted); margin-top: 2px; }
        .amts { text-align: right; flex-shrink: 0; }
        .amt { font-size: 13px; font-weight: 700; color: var(--ll-text); }
        .amt.payment { color: var(--ll-success); }
        .running { font-size: 10.5px; color: var(--ll-text-faint); margin-top: 2px; }
      `}</style>
    </div>
  );
}

export default function PayScreen({ balance, cards, activeCard, onSetActiveCard, onAddCard, onDeleteCard, history, onPay, onBack, onNavigate }) {
  const [payAmount, setPayAmount] = useState(balance);
  const [mode, setMode] = useState("pay"); // 'pay' | 'add' | 'manage' | 'history'
  const [pending, setPending] = useState(false);
  const [paid, setPaid] = useState(null);
  const serviceFee = 0;

  const clampedPay = Math.min(payAmount, balance);

  function submitPayment() {
    if (!activeCard) {
      setMode("add");
      return;
    }
    // Disabling immediately on click (not after the timeout) is what makes
    // a rapid double-tap safe — the second click has nothing to act on
    // because the button is already disabled, so it can never fire a
    // second charge for the same request. This is the fix for the
    // non-idempotent-payments root cause: not a random simulated failure,
    // but a UI that can't submit the same payment twice in the first place.
    if (pending) return;
    setPending(true);
    const paidAmount = clampedPay;
    const remaining = balance - paidAmount;
    const last4 = activeCard.last4;
    setTimeout(() => {
      setPaid({ amount: paidAmount, last4, remaining });
      onPay(paidAmount, last4);
      setPending(false);
    }, 900);
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
        <PrimaryButton onClick={() => onNavigate("home")}>Back to home</PrimaryButton>
        <style jsx>{`
          .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 100px 24px 0; }
          .check { width: 64px; height: 64px; border-radius: 16px; background: var(--ll-success-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
          .check :global(svg) { width: 28px; height: 28px; color: var(--ll-success); }
          h1 { font-size: 19px; font-weight: 700; margin: 0; color: var(--ll-text); }
          p { font-size: 13px; color: var(--ll-text-muted); margin: 6px 0 28px; line-height: 1.5; }
        `}</style>
      </div>
    );
  }

  if (mode === "manage") {
    return (
      <PaymentMethodsScreen
        cards={cards}
        activeCardId={activeCard?.id ?? null}
        onSetActive={onSetActiveCard}
        onDelete={onDeleteCard}
        onAddNew={() => setMode("add")}
        onBack={() => setMode("pay")}
      />
    );
  }

  if (mode === "add") {
    return (
      <div className="screen">
        <AddCardForm
          onCancel={() => setMode(cards.length ? "manage" : "pay")}
          onSave={(c) => { onAddCard(c); setMode("pay"); }}
        />
        <style jsx>{`.screen { padding: 4px 20px 40px; }`}</style>
      </div>
    );
  }

  if (mode === "history") {
    return <HistoryScreen history={history} onBack={() => setMode("pay")} />;
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
      <button type="button" className="history-link" onClick={() => setMode("history")}>
        View account history <FiChevronRight aria-hidden="true" />
      </button>

      <div className="paying-label">You're paying</div>
      <div className="stepper">
        <button
          type="button"
          onClick={() => setPayAmount((a) => Math.max(MIN_PAYMENT, a - PAY_STEP))}
          disabled={pending || clampedPay <= MIN_PAYMENT}
          aria-label="Decrease payment amount"
        >
          <FiMinus aria-hidden="true" />
        </button>
        <span className="pay-amt">${fmt(clampedPay)}</span>
        <button
          type="button"
          onClick={() => setPayAmount((a) => Math.min(balance, a + PAY_STEP))}
          disabled={pending || clampedPay >= balance}
          aria-label="Increase payment amount"
        >
          <FiPlus aria-hidden="true" />
        </button>
      </div>
      <p className="note">
        Partial payments are OK — pay any amount up to your full balance of ${fmt(balance)}. The base rent amount itself can&rsquo;t be changed.
      </p>

      {activeCard && (
        <div className="method">
          <span>Card ····{activeCard.last4}</span>
          <button type="button" onClick={() => setMode("manage")} disabled={pending}>Manage</button>
        </div>
      )}
      <PrimaryButton onClick={submitPayment} disabled={pending} aria-busy={pending} style={{ marginTop: 12 }}>
        {pending ? (
          <span className="spinner-row"><span className="spinner" aria-hidden="true" /> Processing payment&hellip;</span>
        ) : activeCard ? (
          `Pay $${fmt(clampedPay)} with card ····${activeCard.last4}`
        ) : (
          "Add card to pay"
        )}
      </PrimaryButton>
      <style jsx>{`
        .screen { padding: 4px 20px 40px; }
        .back { background: var(--ll-surface); border: 1px solid var(--ll-border); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--ll-text); cursor: pointer; margin-bottom: 8px; }
        .balance { text-align: center; padding: 14px 0 4px; }
        .l { font-size: 12px; color: var(--ll-text-muted); }
        .amt { font-family: var(--ll-font-display); font-size: 36px; font-weight: 700; margin-top: 6px; color: var(--ll-text); font-variant-numeric: tabular-nums; }
        .card { background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 14px; padding: 18px 20px; margin-top: 18px; }
        .line { display: flex; justify-content: space-between; font-size: 12.5px; padding: 9px 0; border-bottom: 1px solid var(--ll-border); color: var(--ll-text-muted); }
        .line.total { color: var(--ll-text); font-weight: 700; border-bottom: none; }
        .line .good { color: var(--ll-success); font-weight: 600; }
        .history-link { width: 100%; display: flex; align-items: center; justify-content: center; gap: 4px; background: none; border: none; color: var(--ll-accent); font-size: 12px; font-weight: 700; cursor: pointer; padding: 12px 4px 0; }
        .history-link :global(svg) { width: 14px; height: 14px; }
        .paying-label { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ll-text-faint); margin-top: 20px; text-align: center; }
        .stepper { display: flex; align-items: center; justify-content: center; gap: 16px; margin: 10px 0 4px; }
        .pay-amt { font-size: 17px; font-weight: 700; color: var(--ll-text); min-width: 92px; text-align: center; }
        .stepper button { width: 36px; height: 36px; border-radius: 10px; background: var(--ll-surface-2); border: 1px solid var(--ll-border); display: flex; align-items: center; justify-content: center; color: var(--ll-text); cursor: pointer; }
        .stepper button:disabled { opacity: .35; cursor: not-allowed; }
        .note { font-size: 11.5px; color: var(--ll-text-faint); text-align: center; margin-top: 14px; line-height: 1.5; }
        .method { display: flex; justify-content: space-between; align-items: center; background: var(--ll-surface); border: 1px solid var(--ll-border); border-radius: 10px; padding: 12px 14px; margin-top: 18px; font-size: 12.5px; color: var(--ll-text-muted); }
        .method button { background: none; border: none; color: var(--ll-accent); font-size: 12px; font-weight: 700; cursor: pointer; padding: 4px; }
        .method button:disabled { opacity: .4; cursor: not-allowed; }
        .spinner-row { display: inline-flex; align-items: center; gap: 8px; }
        .spinner { width: 14px; height: 14px; border-radius: 999px; border: 2px solid rgba(255,255,255,.4); border-top-color: var(--ll-accent-ink); animation: spin .7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
