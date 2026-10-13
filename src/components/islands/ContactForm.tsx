import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const inputCls =
  "mt-2 w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-base text-ink transition placeholder:text-ink-soft/60 focus:border-lagoon-600 focus:outline-none focus:ring-4 focus:ring-lagoon-100";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (d: FormData): Errors => {
    const e: Errors = {};
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const phone = String(d.get("phone") || "").replace(/\D/g, "");
    const message = String(d.get("message") || "").trim();
    if (name.length < 2) e.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Please enter a valid email, like name@email.com.";
    if (phone && phone.length < 10) e.phone = "Please enter a 10-digit phone number.";
    if (message.length < 10) e.message = "Please tell us a little more (at least 10 characters).";
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      (ev.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    // TODO: connect to Formspree / Resend / your backend here.
    setTimeout(() => setStatus("sent"), 900);
  };

  const field = (id: keyof Errors, label: string, props: React.InputHTMLAttributes<HTMLInputElement>, optional = false) => (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-lagoon-900">
        {label} {optional && <span className="font-normal text-ink-soft">(optional)</span>}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-err` : undefined}
        className={`${inputCls} ${errors[id] ? "border-lotus-600" : "border-lagoon-200"}`}
        {...props}
      />
      {errors[id] && (
        <p id={`${id}-err`} className="mt-1.5 text-sm font-bold text-lotus-700">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center" role="status">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lagoon-100 text-lagoon-700">
            <Icon name="check" className="h-8 w-8" />
          </span>
          <h4 className="mt-5 font-display text-2xl text-lagoon-900">Thank you!</h4>
          <p className="mt-2 text-ink-soft">Your message was received. Our team will contact you soon.</p>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-5">
          {field("name", "Full name", { type: "text", autoComplete: "name", placeholder: "Jane Smith" })}
          {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "jane@email.com" })}
          {field("phone", "Phone", { type: "tel", autoComplete: "tel", placeholder: "901-555-0123" }, true)}
          <div>
            <label htmlFor="message" className="text-sm font-bold text-lagoon-900">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
              className={`${inputCls} resize-y ${errors.message ? "border-lotus-600" : "border-lagoon-200"}`}
              placeholder="Tell us about your visit or question."
            />
            {errors.message && <p id="message-err" className="mt-1.5 text-sm font-bold text-lotus-700">{errors.message}</p>}
          </div>
          <p className="text-xs text-ink-soft">Please do not include private medical details. We will call you to discuss them.</p>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-70">
            {status === "sending" ? "Sending…" : "Send Message"}
            {status !== "sending" && <Icon name="arrowRight" className="h-4 w-4" />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
