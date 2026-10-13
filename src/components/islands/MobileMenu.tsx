import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import Icon from "./Icon";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; external?: boolean }[];
}
interface Props {
  links: NavItem[];
  phone: string;
  phoneHref: string;
  facebook: string;
  instagram: string;
}

export default function MobileMenu({ links, phone, phoneHref, facebook, instagram }: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        ref={btnRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-11 w-11 place-items-center rounded-full border border-lagoon-200 text-lagoon-800 transition hover:bg-lagoon-50"
      >
        <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
      </button>

      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 z-[45] overflow-y-auto bg-lagoon-950 px-6 pb-10 pt-28 text-white"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={close}
                      className="block border-b border-white/10 py-3 font-display text-3xl"
                    >
                      {l.label}
                    </a>
                    {l.children && (
                      <ul className="pb-2 pt-1">
                        {l.children.map((c) => (
                          <li key={c.label}>
                            <a href={c.href} onClick={close} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="block min-h-11 py-2.5 pl-4 text-base text-lagoon-200">
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <a href="/#contact" onClick={close} className="btn btn-primary btn-beam">
                Book a Visit
              </a>
              <a href={phoneHref} className="btn btn-ghost">
                <Icon name="phone" className="h-5 w-5" /> {phone}
              </a>
              <div className="flex items-center justify-center gap-3 pt-2">
                <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full border border-white/25 hover:bg-white/10">
                  <Icon name="facebook" />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full border border-white/25 hover:bg-white/10">
                  <Icon name="instagram" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </div>
  );
}
