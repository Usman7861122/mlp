import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";

export interface Slide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  position?: string;
}

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();
  const autoplay = playing && !reduce;

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, autoplay, go]);

  const slide = slides[index];
  const words = slide.title.split(" ");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome"
      className="relative isolate h-[calc(100svh-6rem)] min-h-[600px] w-full overflow-hidden bg-lagoon-950 text-white lg:h-[calc(100svh-8.5rem)] lg:max-h-[880px]"
    >
      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.img
            src={slide.image}
            alt=""
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-full w-full object-cover"
            style={{ objectPosition: slide.position ?? "center" }}
            initial={{ scale: reduce ? 1 : 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: (DURATION + 1400) / 1000, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-lagoon-950/85 via-lagoon-950/45 to-lagoon-950/5" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-lagoon-950/70 via-transparent to-transparent" aria-hidden="true" />

      {/* Text */}
      <div className="wrap relative z-10 flex h-full flex-col justify-end pb-28 pt-16 sm:pb-32">
        <div role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`} aria-live={autoplay ? "off" : "polite"} className="max-w-2xl">
          <motion.p
            key={`e-${index}`}
            className="mb-5 flex items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.25em] text-lotus-200"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          >
            <span className="h-px w-10 bg-lotus-400" aria-hidden="true" />
            {slide.eyebrow}
          </motion.p>

          <h1 key={`t-${index}`} className="font-display text-[clamp(2.25rem,5.2vw,4.25rem)] font-medium leading-[1.05]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.55 + i * 0.07, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            key={`p-${index}`}
            className="mt-6 max-w-md text-lg text-white/90"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
          >
            {slide.text}
          </motion.p>

          <motion.div
            key={`c-${index}`}
            className="mt-9 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          >
            <a href="/#contact" className="btn btn-primary btn-beam">
              Book a Visit <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a href="/#providers" className="btn btn-ghost">Meet Our Providers</a>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="wrap flex items-center justify-between gap-4 pb-6 sm:pb-8">
          <div className="flex items-center gap-4">
            <p className="hidden whitespace-nowrap font-display text-lg tabular-nums text-white/90 sm:block" aria-hidden="true">
              0{index + 1} <span className="text-white/40">/ 0{slides.length}</span>
            </p>
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  type="button"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className="group grid h-11 w-10 place-items-center sm:w-12"
                >
                  <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/30">
                    {i === index && (
                      <motion.span
                        key={`${index}-${autoplay}`}
                        className="absolute inset-0 origin-left bg-white"
                        initial={{ scaleX: autoplay ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: autoplay ? DURATION / 1000 : 0, ease: "linear" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause slideshow" : "Play slideshow"} className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white/15">
              <Icon name={playing ? "pause" : "play"} className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-lagoon-900">
              <Icon name="arrowLeft" className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-lagoon-900">
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
