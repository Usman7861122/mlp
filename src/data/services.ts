import type { StockKey } from "./images";

export interface Service {
  slug: string;
  title: string;
  blurb: string;
  image: StockKey;
}

// The 6 services shown on the homepage
export const featuredServices: Service[] = [
  { slug: "obstetrics", title: "Obstetrics", blurb: "Prenatal care and delivery with a team that listens, from your first test to your first hello.", image: "ob" },
  { slug: "gynecology", title: "Gynecology", blurb: "Annual exams, Pap smears and answers to your questions, in a calm and private setting.", image: "gyn" },
  { slug: "birth-control", title: "Birth Control", blurb: "Clear advice on every option, so you can choose what fits your body and your plans.", image: "bc" },
  { slug: "menopause", title: "Menopause", blurb: "Support for hot flashes, sleep, mood and more, so this chapter feels better.", image: "meno" },
  { slug: "hormone-replacement", title: "Hormone Replacement", blurb: "Personal treatment plans to restore balance and help you feel like yourself again.", image: "hrt" },
  { slug: "pelvic-pain", title: "Pelvic Care", blurb: "Gentle evaluation and treatment for pelvic pain and related concerns.", image: "pelvic" },
];

// Full list from the live website
export const allServices: string[] = [
  "Obstetrics", "Pregnancy and Prenatal Care", "Delivery", "Birth Control", "Gynecology",
  "Hormone Replacement", "Endometrial Ablation", "Colposcopy", "Pap Smears", "Pelvic Ultrasound",
  "Family Planning", "Pelvic Pain", "PMS", "Polyps", "Cancer Prevention", "Menopause",
  "Labiaplasty", "Vaginal Dryness", "STD Testing", "Vaginal Bleeding", "Abnormal Bleeding", "HPV", "PCOS",
];
