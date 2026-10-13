export interface Provider {
  slug: string;
  name: string;
  firstName: string;
  title: string;
  role: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Transparent cut-out portrait. */
  cutout: string;
  /** Big letter shown behind the portrait (first letter of the last name). */
  letter: string;
  /** Tailwind classes for the portrait card (kept as full strings so Tailwind can see them). */
  shape: string;
  letterTone: string;
  photoWidth: string;
  bio: string[];
  education: { label: string; detail: string }[];
  credentials: string[];
  focus: string[];
  languages?: string[];
  beyond?: string;
}

export const providers: Provider[] = [
  {
    slug: "kyle-p-martin-md-facog",
    name: "Kyle P. Martin",
    firstName: "Dr. Martin",
    title: "MD, FACOG",
    role: "Obstetrician & Gynecologist",
    summary: "Low- and high-risk obstetrics, adolescent gynecology and minimally invasive surgery.",
    cutout: "/images/providers/martin.webp",
    letter: "M",
    shape: "bg-lotus-500",
    letterTone: "text-white/35",
    photoWidth: "w-[86%]",
    bio: [
      "Dr. Kyle Martin cares for women of every age, from the teen years through menopause. She is trained in both low-risk and high-risk obstetrics, and she also treats infertility and adolescent gynecology concerns.",
      "She is skilled in minimally invasive gynecologic surgery, including da Vinci robotic surgery, which usually means smaller cuts and an easier recovery.",
      "Before helping to found Martin, Lee & Page, Dr. Martin spent more than a decade at McDonald Murrmann Women's Clinic in Memphis. During her residency she served as chief resident and earned several awards in obstetrics and gynecology and in reproductive endocrinology and infertility.",
    ],
    education: [
      { label: "College", detail: "Colgate University, Hamilton, New York" },
      { label: "Medical school", detail: "University of Tennessee College of Medicine, Memphis" },
      { label: "Residency", detail: "University of Tennessee Health Science Center (chief resident, 2004–2005)" },
    ],
    credentials: [
      "Board certified by the American Board of Obstetrics and Gynecology",
      "Fellow of the American College of Obstetricians and Gynecologists (FACOG)",
    ],
    focus: [
      "Low-risk and high-risk obstetrics",
      "Infertility",
      "Adolescent gynecology",
      "da Vinci robotic surgery",
      "Minimally invasive gynecologic surgery",
    ],
    beyond:
      "Dr. Martin is a mother of three. She enjoys running and soccer, stays active in her church and loves cooking healthy food.",
  },
  {
    slug: "helen-s-lee-md-facog",
    name: "Helen S. Lee",
    firstName: "Dr. Lee",
    title: "MD, FACOG",
    role: "Obstetrician & Gynecologist",
    summary: "More than 20 years of experience, with a focus on modern, minimally invasive care.",
    cutout: "/images/providers/lee.webp",
    letter: "L",
    shape: "bg-lagoon-700",
    letterTone: "text-white/20",
    photoWidth: "w-[86%]",
    bio: [
      "Dr. Helen Lee has more than 20 years of experience in obstetrics and gynecology and is well respected by her colleagues in Memphis. She began her career in California, where she ran her own private practice in San Diego for nearly a decade and was named a \"Top Doctor\" by San Diego Magazine.",
      "She moved to Memphis with her husband and joined McDonald Murrmann Women's Clinic in 2008. Dr. Lee is passionate about new medical technology and minimally invasive surgery, which can mean a faster and more comfortable recovery.",
      "Dr. Lee has been through infertility herself and is the mother of a daughter. She says these experiences help her understand and support her patients.",
    ],
    education: [
      { label: "College", detail: "University of California, Los Angeles" },
      { label: "Medical school", detail: "Chicago Medical School at Rosalind Franklin University of Medicine and Science" },
      { label: "Residency", detail: "Los Angeles County + USC Medical Center" },
    ],
    credentials: [
      "Board certified by the American Board of Obstetrics and Gynecology",
      "Fellow of the American College of Obstetricians and Gynecologists (FACOG)",
      "Named a \"Top Doctor\" by San Diego Magazine",
    ],
    focus: [
      "Obstetrics and gynecology for every stage of life",
      "Minimally invasive surgery",
      "New medical technology",
      "Compassionate care for patients facing infertility",
    ],
    languages: ["English", "Korean", "Spanish"],
  },
  {
    slug: "audrey-m-page-md-facog",
    name: "Audrey M. Page",
    firstName: "Dr. Page",
    title: "MD, FACOG",
    role: "Obstetrician & Gynecologist",
    summary: "A former labor and delivery nurse who also teaches the next generation of OB-GYNs.",
    cutout: "/images/providers/page.webp",
    letter: "P",
    shape: "bg-lagoon-200",
    letterTone: "text-lagoon-600/30",
    photoWidth: "w-[86%]",
    bio: [
      "Dr. Audrey Page was a labor and delivery nurse for five years before she went to medical school. That time at the bedside shapes the way she cares for patients today: with patience, warmth and a calm, practical approach.",
      "She trained in Memphis and joined McDonald Murrmann Women's Clinic in 2013. Dr. Page is also a member of the clinical faculty at the University of Tennessee, where she helps train future OB-GYNs.",
      "During her residency she received several awards in obstetrics and gynecology and in reproductive endocrinology and infertility.",
    ],
    education: [
      { label: "Medical school", detail: "University of Tennessee College of Medicine, Memphis" },
      { label: "Residency", detail: "University of Tennessee Health Science Center, Memphis" },
      { label: "Earlier career", detail: "Registered nurse in labor and delivery (5 years)" },
    ],
    credentials: [
      "Board certified by the American Board of Obstetrics and Gynecology",
      "Fellow of the American College of Obstetricians and Gynecologists (FACOG)",
      "Clinical faculty member, University of Tennessee",
    ],
    focus: [
      "Obstetrics and prenatal care",
      "Delivery",
      "Gynecologic care for women of all ages",
      "Teaching and mentoring new doctors",
    ],
    beyond:
      "Dr. Page enjoys cooking, winemaking, gardening and travel, and spends her free time with her husband and three children.",
  },
  {
    slug: "gretchen-purkey-np",
    name: "Gretchen Purkey",
    firstName: "Gretchen",
    title: "NP",
    role: "Nurse Practitioner",
    summary: "Women's health, hormone management and aesthetic care, backed by years of nursing.",
    cutout: "/images/providers/gretchen.webp",
    letter: "P",
    shape: "bg-lagoon-600",
    letterTone: "text-white/20",
    photoWidth: "w-full",
    bio: [
      "Gretchen Purkey is a nurse practitioner with experience in women's health, primary care and urgent care. She offers a high level of care and wants every patient to reach and keep their best possible health.",
      "Before becoming a nurse practitioner, Gretchen spent about fifteen years as a registered nurse in obstetrics, pediatrics and post-anesthesia care. She has a special interest in hormone management.",
      "Gretchen also offers skincare consultations, along with Botox and dermal filler injections.",
    ],
    education: [
      { label: "Nursing degree", detail: "Bachelor of Science in Nursing, Mississippi College (1996)" },
      { label: "Advanced degree", detail: "Master of Science in Nursing, Family Nurse Practitioner, University of Memphis (2013)" },
      { label: "Earlier career", detail: "About 15 years as a registered nurse in obstetrics, pediatrics and post-anesthesia care" },
    ],
    credentials: ["Family Nurse Practitioner (NP)"],
    focus: [
      "Women's health",
      "Hormone management",
      "Primary care and urgent care",
      "Skincare consultations, Botox and dermal fillers",
    ],
    beyond: "Gretchen grew up in Clinton, Mississippi. She enjoys exercising and traveling.",
  },
  {
    slug: "sloan-anderson-np",
    name: "Sloan Anderson",
    firstName: "Sloan",
    title: "NP",
    role: "Board-Certified Family Nurse Practitioner",
    summary: "Patient-centered care for every life stage, with a love of education and prevention.",
    cutout: "/images/providers/sloan.webp",
    letter: "A",
    shape: "bg-lotus-200",
    letterTone: "text-lotus-600/25",
    photoWidth: "w-[86%]",
    bio: [
      "Sloan Anderson is a board-certified Family Nurse Practitioner who is passionate about women's health. She aims to give kind, patient-centered care at every stage of life.",
      "She has a year of experience in internal medicine and a background as a registered nurse, working in labor and delivery and in the operating room at a urology surgery center.",
      "Sloan cares deeply about patient education, preventive care and building long-term relationships with the women she treats.",
    ],
    education: [
      { label: "Certification", detail: "Board-certified Family Nurse Practitioner" },
      { label: "Experience", detail: "Internal medicine (1 year); registered nurse in labor and delivery and in a urology surgery center operating room" },
    ],
    credentials: ["Board-certified Family Nurse Practitioner"],
    focus: [
      "Women's health at every life stage",
      "Patient education",
      "Preventive care",
      "Long-term patient relationships",
    ],
    beyond: "Outside of work, Sloan enjoys time with her husband and two sons, reading and golf.",
  },
  {
    slug: "merritt-baumgartner-pa-c",
    name: "Merritt Baumgartner",
    firstName: "Merritt",
    title: "PA-C",
    role: "Certified Physician Assistant",
    summary: "Care for women of all ages, with a special interest in teen and young adult health.",
    cutout: "/images/providers/merritt.webp",
    letter: "B",
    shape: "bg-lotus-400",
    letterTone: "text-white/30",
    photoWidth: "w-full",
    bio: [
      "Merritt Baumgartner is a certified physician assistant who has spent about eighteen years caring for patients across the United States and in Italy, while her husband served in the Navy.",
      "Her passion for women's health began at Naval Air Station Sigonella, where she was one of only two female providers and saw how much women there needed care. Her experience also includes primary care, pediatrics and urgent care.",
      "Merritt cares for women of all ages and has a special interest in adolescent and young adult health and education.",
    ],
    education: [
      { label: "College", detail: "Bachelor of Science in Psychology, University of Alabama (1999)" },
      { label: "Physician assistant program", detail: "Master of Health Science, Physician Assistant Studies, University of South Alabama" },
      { label: "Experience", detail: "About 18 years as a PA in the United States and Italy" },
    ],
    credentials: ["Certified Physician Assistant (PA-C)"],
    focus: [
      "Women's health",
      "Adolescent and young adult health",
      "Primary care, including pediatrics",
      "Urgent care",
    ],
    beyond:
      "Merritt grew up in Texas and is married with four children. She enjoys working out, volunteering at her church and following University of Alabama sports.",
  },
];

export const physicians = providers.slice(0, 3);
export const practitioners = providers.slice(3);
