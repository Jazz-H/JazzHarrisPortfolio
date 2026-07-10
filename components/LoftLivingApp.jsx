import { useEffect, useState } from "react";
import { LoadingScreen, TabBar } from "./loft-living/primitives";
import SignInScreen from "./loft-living/screens/SignIn";
import HomeScreen from "./loft-living/screens/Home";
import PayScreen from "./loft-living/screens/Pay";
import MaintenanceScreen from "./loft-living/screens/Maintenance";
import RewardsScreen from "./loft-living/screens/Rewards";
import MoreScreen, { DetailScreen, PropertyInfoScreen, AccountSettingsScreen } from "./loft-living/screens/More";
import { AUTH_KEY, THEME_KEY, BASE_RENT, UTILITIES, SEED_REQUESTS, SEED_HISTORY, DETAIL_CONTENT } from "./loft-living/constants";

export default function LoftLivingApp() {
  const [loading, setLoading] = useState(true);
  // Rendered client-only (see pages/loft-living/index.js, dynamic + ssr:false),
  // so reading localStorage in the initializer can't cause a hydration mismatch.
  const [authed, setAuthed] = useState(() => window.localStorage.getItem(AUTH_KEY) === "1");
  const [theme, setThemeState] = useState(() => window.localStorage.getItem(THEME_KEY) || "light");
  const [view, setView] = useState("home");
  const [overlay, setOverlay] = useState(null);
  const [balance, setBalance] = useState(BASE_RENT + UTILITIES);
  const [cards, setCards] = useState([]);
  const [activeCardId, setActiveCardId] = useState(null);
  const activeCard = cards.find((c) => c.id === activeCardId) || null;
  const [requests, setRequests] = useState(SEED_REQUESTS);
  const [history, setHistory] = useState(SEED_HISTORY);
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

  function handlePay(paidAmount, last4) {
    setBalance((b) => Math.max(0, b - paidAmount));
    setHistory((h) => [...h, { id: Date.now(), date: "Just now", desc: `Payment — card ····${last4}`, amount: -paidAmount }]);
  }

  function addCard(c) {
    const newCard = { id: Date.now(), last4: c.last4 };
    setCards((cs) => [...cs, newCard]);
    setActiveCardId(newCard.id);
  }

  function deleteCard(id) {
    const next = cards.filter((c) => c.id !== id);
    setCards(next);
    setActiveCardId((cur) => (cur === id ? (next[0]?.id ?? null) : cur));
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
              ) : overlay === "property" ? (
                <PropertyInfoScreen rows={DETAIL_CONTENT.property.rows} onBack={() => setOverlay(null)} />
              ) : overlay ? (
                <DetailScreen
                  title={DETAIL_CONTENT[overlay].title}
                  rows={DETAIL_CONTENT[overlay].rows}
                  onBack={() => setOverlay(null)}
                />
              ) : view === "home" ? (
                <HomeScreen requests={requests} amount={balance} card={activeCard} onNavigate={navigate} onOpen={openFromMenu} />
              ) : view === "pay" ? (
                <PayScreen
                  balance={balance}
                  cards={cards}
                  activeCard={activeCard}
                  onSetActiveCard={setActiveCardId}
                  onAddCard={addCard}
                  onDeleteCard={deleteCard}
                  history={history}
                  onPay={handlePay}
                  onBack={() => navigate("home")}
                  onNavigate={navigate}
                />
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
