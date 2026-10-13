import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const KEY = "mlp-cookie-consent";
const VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

interface Consent {
  v: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.v !== VERSION || Date.now() - c.ts > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

function save(analytics: boolean, marketing: boolean) {
  const c: Consent = { v: VERSION, necessary: true, analytics, marketing, ts: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* storage may be blocked; the choice then lasts for this visit only */
  }
  // Other scripts (analytics, ads) can listen for this event and load only after consent.
  window.dispatchEvent(new CustomEvent("mlp:consent", { detail: c }));
}

function Switch({ checked, onChange, label, disabled }: { checked: boolean; onChange?: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lotus-600 ${checked ? "bg-lotus-600" : "bg-lagoon-200"} ${disabled ? "cursor-not-allowed opacity-60" : ""}`}>
      <span className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${checked ? "translate-x-5" : ""}`} />
    </button>
  );
}

export default function CookieConsent() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const hasChoice = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = useCallback((withPrefs: boolean) => {
    const c = read();
    setAnalytics(c?.analytics ?? false);
    setMarketing(c?.marketing ?? false);
    setPrefs(withPrefs);
    setOpen(true);
  }, []);

  useEffect(() => {
    const c = read();
    hasChoice.current = !!c;
    if (c) {
      // Let other scripts know the saved choice on every page load.
      window.dispatchEvent(new CustomEvent("mlp:consent", { detail: c }));
    } else {
      const t = window.setTimeout(() => show(false), 900);
      return () => window.clearTimeout(t);
    }
  }, [show]);

  useEffect(() => {
    const onClick = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-open-cookie-settings]");
      if (el) {
        e.preventDefault();
        returnFocus.current = el as HTMLElement;
        show(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [show]);

  useEffect(() => {
    if (open && returnFocus.current) headingRef.current?.focus();
  }, [open, prefs]);

  const close = () => {
    setOpen(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };
  const choose = (a: boolean, m: boolean) => {
    save(a, m);
    hasChoice.current = true;
    close();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && hasChoice.current) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-3xl border border-lagoon-100 bg-white p-6 shadow-2xl shadow-lagoon-900/20 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:mx-0 sm:p-7">
          <h2 id="cookie-title" ref={headingRef} tabIndex={-1} className="font-display text-2xl text-lagoon-900 outline-none">
            {prefs ? "Cookie settings" : "We value your privacy"}
          </h2>
          <p id="cookie-desc" className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
            {prefs
              ? "Choose which cookies you allow. Necessary cookies keep the site working and are always on."
              : "We use cookies that are needed to run this site. With your OK, we also use cookies to understand how the site is used and to improve it."}{" "}
            <a href="/cookie-policy" className="font-bold text-lotus-700 underline underline-offset-2 hover:text-lagoon-700">
              Cookie Policy
            </a>
          </p>

          {prefs && (
            <ul className="mt-5 divide-y divide-lagoon-100 rounded-2xl border border-lagoon-100">
              {[
                { t: "Necessary", d: "Keeps the site working and remembers your choice.", v: true, set: undefined, locked: true },
                { t: "Analytics", d: "Helps us see how visitors use the site.", v: analytics, set: setAnalytics, locked: false },
                { t: "Marketing", d: "Measures our ads and shows relevant information.", v: marketing, set: setMarketing, locked: false },
              ].map((r) => (
                <li key={r.t} className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-bold text-lagoon-900">{r.t}</p>
                    <p className="text-sm text-ink-soft">{r.d}</p>
                  </div>
                  <Switch checked={r.v} onChange={r.set} label={`${r.t} cookies`} disabled={r.locked} />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {prefs ? (
              <>
                <button type="button" className="btn btn-primary !min-h-11 !px-6" onClick={() => choose(analytics, marketing)}>
                  Save choices
                </button>
                <button type="button" className="btn btn-outline !min-h-11 !px-6" onClick={() => choose(true, true)}>
                  Accept all
                </button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-primary !min-h-11 !px-6" onClick={() => choose(true, true)}>
                  Accept all
                </button>
                <button type="button" className="btn btn-outline !min-h-11 !px-6" onClick={() => choose(false, false)}>
                  Decline
                </button>
                <button type="button" className="min-h-11 px-2 text-sm font-bold text-lagoon-700 underline underline-offset-4 hover:text-lotus-600" onClick={() => setPrefs(true)}>
                  Preferences
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
