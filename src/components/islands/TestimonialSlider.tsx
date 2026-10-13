import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";

interface Item {
  name: string;
  text: string;
  doctor: string;
}

export default function TestimonialSlider({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = (n: number, d: number) => {
    setDir(d);
    setI((n + items.length) % items.length);
  };

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(i + 1, 1), 8000);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  const item = items[i];

  return (
    <div
      className="mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
    >
      <div className="relative rounded-[2rem] bg-white px-7 py-12 text-center shadow-xl shadow-lotus-600/10 sm:px-16 sm:py-16">
        <span className="absolute -top-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-lotus-600 text-white shadow-lg">
          <Icon name="quote" className="h-6 w-6" />
        </span>

        <div className="relative min-h-[15rem] sm:min-h-[12rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={reduce ? false : { opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(i + 1, 1);
                else if (info.offset.x > 60) go(i - 1, -1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="mb-5 flex justify-center gap-1 text-lotus-500" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Icon key={s} name="star" className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-lagoon-900 sm:text-[1.7rem]">
                “{item.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm tracking-wide text-ink-soft">
                <span className="font-bold text-lagoon-800">{item.name}</span> · patient of {item.doctor}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(i - 1, -1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-lagoon-200 bg-white text-lagoon-800 transition hover:bg-lagoon-800 hover:text-white">
          <Icon name="arrowLeft" className="h-4 w-4" />
        </button>
        <div className="flex">
          {items.map((_, n) => (
            <button key={n} type="button" onClick={() => go(n, n > i ? 1 : -1)} aria-label={`Show testimonial ${n + 1}`} aria-current={n === i} className="grid h-11 w-6 place-items-center">
              <span className={`block h-2 rounded-full transition-all duration-500 ${n === i ? "w-6 bg-lotus-600" : "w-2 bg-lagoon-200"}`} />
            </button>
          ))}
        </div>
        <button type="button" onClick={() => go(i + 1, 1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-lagoon-200 bg-white text-lagoon-800 transition hover:bg-lagoon-800 hover:text-white">
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
