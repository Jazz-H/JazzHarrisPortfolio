import { FiCheckCircle } from "react-icons/fi";
import { PrimaryButton } from "../primitives";

export default function SignInScreen({ onSignedIn }) {
  return (
    <div className="screen center">
      <div className="faceid">
        <FiCheckCircle aria-hidden="true" />
      </div>
      <h1>Welcome back, Jordan</h1>
      <p>Use Face ID to sign in — no password needed</p>
      <PrimaryButton onClick={onSignedIn}>Continue with Face ID</PrimaryButton>
      <button type="button" className="ghost" onClick={onSignedIn}>
        Use passcode instead
      </button>
      <style jsx>{`
        .screen.center { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 100px 24px 0; }
        .faceid { width: 64px; height: 64px; border-radius: 16px; background: var(--ll-accent-soft); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .faceid :global(svg) { width: 28px; height: 28px; color: var(--ll-accent); }
        h1 { font-size: 19px; font-weight: 700; margin: 0; color: var(--ll-text); }
        p { font-size: 13px; color: var(--ll-text-muted); margin: 6px 0 28px; }
        .ghost { background: none; border: none; color: var(--ll-text-muted); font-size: 12.5px; margin-top: 14px; cursor: pointer; padding: 8px; }
      `}</style>
    </div>
  );
}
