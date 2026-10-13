/**
 * Stock photos, all licensed on the Shutterstock Unlimited plan.
 * Resized originals live in /public/images/stock/<key>.jpg
 * (key -> Shutterstock ID is listed below).
 * Set USE_LOCAL = false to show watermarked previews instead.
 */
const USE_LOCAL = true;

const ids = {
  hero1: "2645082143", // group of women, pink ribbons
  hero2: "2388145113", // couple holding newborn
  hero3: "2235321391", // sleeping newborn in parents' hands
  about: "2734638889", // doctor talking with pregnant patient
  ob: "2441037695", // couple with doctor after ultrasound
  gyn: "2847337987", // doctor gently checking patient
  bc: "2841870131", // woman holding oral contraceptive
  meno: "2724831493", // smiling middle-aged woman
  hrt: "2847533833", // woman taking daily vitamins
  pelvic: "2837387151", // calm yoga studio
  blog1: "2712112149", // woman stretching
  blog2: "2372653241", // doctor showing ultrasound photos
  blog3: "2838526751", // doctor and smiling patient
} as const;

export type StockKey = keyof typeof ids;

const preview = (id: string) =>
  `https://www.shutterstock.com/shutterstock/photos/${id}/display_1500/stock-photo-x-${id}.jpg`;

export const stock = Object.fromEntries(
  (Object.keys(ids) as StockKey[]).map((k) => [k, USE_LOCAL ? `/images/stock/${k}.jpg` : preview(ids[k])]),
) as Record<StockKey, string>;

export const stockIds = ids;
