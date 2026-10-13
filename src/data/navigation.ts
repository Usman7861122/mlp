export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; external?: boolean; desc?: string; icon?: string }[];
  /** Show the children in a wide mega menu instead of a small dropdown. */
  mega?: boolean;
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Practice", href: "/about" },
  { label: "Meet the Providers", href: "/providers" },
  {
    label: "Patient Resources",
    href: "/patient-resources",
    children: [
      { label: "Pap Smear Results", href: "/patient-resources/pap-smear-results" },
      { label: "New Patient Registration Forms", href: "/patient-resources/new-patient-forms" },
      { label: "Medication During Pregnancy and Lactation", href: "/docs/medication-during-pregnancy.pdf", external: true },
    ],
  },
  {
    label: "Services",
    href: "/services",
    mega: true,
    children: [
      { label: "Obstetrics", href: "/services/obstetrics", desc: "Prenatal care and delivery", icon: "heart" },
      { label: "Pregnancy and Prenatal Care", href: "/services/pregnancy-and-prenatal-care", desc: "Support from the first test on", icon: "calendar" },
      { label: "Delivery", href: "/services/delivery", desc: "Gentle care on the big day", icon: "star" },
      { label: "Birth Control", href: "/services/birth-control", desc: "Find the right option for you", icon: "check" },
      { label: "Gynecology", href: "/services/gynecology", desc: "Exams and women's health care", icon: "users" },
      { label: "Pap Smears", href: "/services/pap-smears", desc: "Quick, gentle screening", icon: "shield" },
      { label: "Pelvic Pain", href: "/services/pelvic-pain", desc: "Find the cause, find relief", icon: "heart" },
      { label: "PMS", href: "/services/pms", desc: "Relief before your period", icon: "heart" },
      { label: "PCOS", href: "/services/pcos", desc: "Hormone care that fits you", icon: "star" },
      { label: "Menopause", href: "/services/menopause", desc: "Support through the change", icon: "heart" },
      { label: "Hormone Replacement", href: "/services/hormone-replacement", desc: "Safe, personal HRT", icon: "award" },
      { label: "STD Testing", href: "/services/std-testing", desc: "Private, caring testing", icon: "shield" },
      { label: "View All Services", href: "/services" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];
