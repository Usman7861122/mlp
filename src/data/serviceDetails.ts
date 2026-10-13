export interface ServiceDetail {
  slug: string;
  /** Short name for breadcrumb */
  label: string;
  /** schema.org medicalSpecialty */
  specialty: string;
  /** CSS object-position for the hero and portrait photos */
  heroPos?: string;
  portraitPos?: string;
  /** <title> and meta description (SEO) */
  seoTitle: string;
  metaDescription: string;
  /** Hero */
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  chips: string[];
  images: { hero: string; heroAlt: string; intro: string; introAlt: string; portrait: string; portraitAlt: string; wide: string; wideAlt: string };
  intro: { eyebrow: string; title: string; accent: string; paras: string[] };
  covers: { eyebrow: string; title: string; accent: string; items: { t: string; d: string; icon: string }[] };
  why: { eyebrow: string; title: string; accent: string; intro: string; items: string[] };
  journey: { eyebrow: string; title: string; accent: string; steps: { t: string; d: string }[] };
  faq: { q: string; a: string }[];
  cta: { title: string; accent: string; text: string };
}

const baseServices: ServiceDetail[] = [
  {
    slug: "obstetrics",
    label: "Obstetrics",
    specialty: "Obstetric",
    heroPos: "40% 50%",
    portraitPos: "50% 30%",
    seoTitle: "Obstetrician in Memphis, TN | Obstetrics & Pregnancy Care | Martin, Lee & Page OB GYN",
    metaDescription:
      "Looking for an obstetrician in Memphis, TN? Martin, Lee & Page OB GYN offers caring, board-certified obstetrics for pregnancy, high-risk care and delivery in East Memphis. Book a visit today.",
    eyebrow: "Obstetrician in Memphis, Tennessee",
    h1: "Obstetrics in",
    h1Accent: "Memphis, TN",
    lead:
      "Martin, Lee & Page OB GYN is a Memphis obstetrics practice led by an all-female team of board-certified physicians. We guide women across Memphis through pregnancy and childbirth with time, respect and clear answers.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    images: {
      hero: "/images/services/obstetrics-greeting.jpg",
      heroAlt: "A smiling doctor welcoming an expecting mother at the door",
      intro: "/images/services/obstetrics-checkup.jpg",
      introAlt: "A doctor and an expecting mother shaking hands at a prenatal checkup",
      portrait: "/images/services/obstetrics-mother.jpg",
      portraitAlt: "A happy expecting mother standing by a window at home",
      wide: "/images/services/obstetrics-couple.jpg",
      wideAlt: "An expecting couple relaxing together on a bench in an autumn park",
    },
    intro: {
      eyebrow: "What is obstetrics?",
      title: "A guide for every step of",
      accent: "your pregnancy",
      paras: [
        "An obstetrician is a medical doctor who specializes in pregnancy, labor and birth. After medical school, obstetricians complete four years of residency training in obstetrics, gynecology, gynecologic oncology and ultrasonography.",
        "Think of your obstetrician as a pregnancy guide. We support your body through conception, growth and delivery. Our main jobs are to make sure each milestone of your pregnancy is on track, and to step in quickly if a problem appears.",
        "Regular monitoring helps us find small issues early, before they become bigger ones. That is why steady, personal prenatal care matters so much.",
      ],
    },
    covers: {
      eyebrow: "What we cover",
      title: "Obstetrics is about more than",
      accent: "delivery day",
      items: [
        { t: "Family planning", d: "Talk through your goals and timing, and choose a plan that fits your life.", icon: "calendar" },
        { t: "Fertility", d: "Support and guidance if you are hoping to become pregnant.", icon: "heart" },
        { t: "Existing health conditions", d: "Careful management of conditions you already have, so you and your baby stay well.", icon: "shield" },
        { t: "High-risk pregnancies", d: "Extra monitoring and a team who knows what to watch for.", icon: "award" },
        { t: "Before, during and after", d: "We care for you before pregnancy, through delivery, and in the weeks that follow.", icon: "users" },
      ],
    },
    why: {
      eyebrow: "Why see an obstetrician?",
      title: "Medical expertise, and the answers you",
      accent: "need",
      intro:
        "Our doctors give you medical care and clear information throughout your pregnancy. They have experience with many situations, including:",
      items: [
        "Multiple births, such as twins",
        "Conditions such as diabetes",
        "Screening procedures",
        "Heavy bleeding (hemorrhage)",
        "Blood pressure problems",
        "A baby in an unusual position, such as breech",
      ],
    },
    journey: {
      eyebrow: "Your journey",
      title: "Support at every",
      accent: "stage",
      steps: [
        { t: "Before pregnancy", d: "Family planning, fertility support and a plan for any existing health conditions." },
        { t: "During pregnancy", d: "Regular checkups and screenings to confirm each milestone, with quick action if something needs attention." },
        { t: "After pregnancy", d: "Continued care for you once your baby is here, so you never feel on your own." },
      ],
    },
    faq: [
      {
        q: "What is an obstetrician?",
        a: "An obstetrician is a medical doctor who specializes in pregnancy, labor and birth. They complete four years of residency after medical school, covering obstetrics, gynecology, gynecologic oncology and ultrasonography.",
      },
      {
        q: "What does obstetrics include?",
        a: "Obstetrics goes beyond pregnancy and delivery. It includes family planning, fertility, management of existing health conditions and high-risk pregnancies, with support before, during and after pregnancy.",
      },
      {
        q: "Why do I need an obstetrician?",
        a: "Your obstetrician gives you medical care and information during pregnancy and watches for problems early. They have experience with multiple births, diabetes, screening, hemorrhage, blood pressure issues and breech babies.",
      },
      {
        q: "Where can I see an obstetrician in Memphis, TN?",
        a: "You can see our obstetricians at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Call 901-752-4500 or book online.",
      },
    ],
    cta: {
      title: "Ready to meet your Memphis",
      accent: "obstetrician?",
      text: "New patients are welcome. Call us or request a visit online, and our team will help you get started.",
    },
  },
  {
    slug: "std-testing",
    label: "STD Testing",
    specialty: "Gynecologic",
    seoTitle: "STD Testing in Memphis, TN | Women's STD Screening | Martin, Lee & Page OB GYN",
    metaDescription:
      "Need STD testing in Memphis, TN? Martin, Lee & Page OB GYN offers caring STD screening and treatment for women. Book online or call 901-752-4500.",
    eyebrow: "STD testing in Memphis, Tennessee",
    h1: "STD Testing in",
    h1Accent: "Memphis, TN",
    lead:
      "Testing is the best way to catch an infection early, before it causes problems. Our Memphis team offers simple, respectful STD testing and treatment for women. Book online or call us at 901-752-4500.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "42% 50%",
    portraitPos: "56% 50%",
    images: {
      hero: "/images/services/std-testing-hero.jpg",
      heroAlt: "A smiling doctor talking with a patient in a bright clinic room",
      intro: "/images/services/std-testing-intro.jpg",
      introAlt: "A doctor and a young woman talking at a desk during a consultation",
      portrait: "/images/services/std-testing-portrait.jpg",
      portraitAlt: "A doctor speaking with a smiling couple in an exam room",
      wide: "/images/services/std-testing-wide.jpg",
      wideAlt: "A lab technician holding a blood sample tube",
    },
    intro: {
      eyebrow: "What is an STD?",
      title: "Know the facts about",
      accent: "STDs",
      paras: [
        "A sexually transmitted disease (STD) is an infection spread mainly through oral, vaginal or anal sex. More than 30 types exist. Common ones include syphilis, gonorrhea, chlamydia, trichomoniasis, hepatitis B, genital herpes, HIV and HPV.",
        "Some STDs, such as syphilis and hepatitis B, can also spread through blood. Several can pass to a baby during pregnancy or birth.",
        "Many STDs cause no clear symptoms, especially early on. That is why regular testing matters, even when you feel fine.",
      ],
    },
    covers: {
      eyebrow: "Who needs testing?",
      title: "Testing is a smart step for",
      accent: "many women",
      items: [
        { t: "Anyone with a concern", d: "Any woman who suspects an infection, or whose partner tests positive, should be tested as soon as possible.", icon: "heart" },
        { t: "HIV testing", d: "Every woman should have an HIV test at least once between ages 13 and 64.", icon: "shield" },
        { t: "Women under 25", d: "Sexually active women under 25 need yearly gonorrhea and chlamydia tests.", icon: "calendar" },
        { t: "Women over 25", d: "You may need gonorrhea and chlamydia tests too if you have multiple or new partners.", icon: "users" },
        { t: "During pregnancy", d: "Pregnant women need syphilis, hepatitis B and HIV tests at least once during pregnancy.", icon: "star" },
        { t: "Well-woman exams", d: "Your yearly exam is often a good time to test. You may need it more often if you have risk factors.", icon: "check" },
      ],
    },
    why: {
      eyebrow: "Symptoms",
      title: "Signs that you should get",
      accent: "tested",
      intro: "Many STDs cause no obvious symptoms at first. As an infection grows, you may notice:",
      items: [
        "Vaginal pain or itching",
        "Lower belly or pelvic pain",
        "Pain during sex",
        "Unusual vaginal discharge",
        "Fever",
        "Bumps, warts or other new growths in the genital area",
      ],
    },
    journey: {
      eyebrow: "How testing works",
      title: "Quick, simple and",
      accent: "gentle",
      steps: [
        { t: "A simple sample", d: "We collect blood, urine, or a swab from the vagina, throat or rectum. Cervical tissue from a Pap smear can be tested too. It is generally painless and takes only a few minutes." },
        { t: "Lab testing", d: "Your sample goes to a lab. Our provider contacts you with your results." },
        { t: "A clear plan", d: "If a test is positive, we create a treatment plan. Many STDs can be treated with antibiotics or antiviral medicine, so do not delay." },
      ],
    },
    faq: [
      { q: "What is a sexually transmitted disease?", a: "An STD is an infection spread mainly through oral, vaginal or anal sex. More than 30 types exist, including syphilis, gonorrhea, chlamydia, hepatitis B, genital herpes, HIV and HPV." },
      { q: "Do STDs always cause symptoms?", a: "No. Many STDs cause no obvious symptoms, especially early on. Testing is the best way to catch an infection before it causes complications." },
      { q: "How is STD testing done?", a: "We use a sample of blood, urine, a swab, or cervical tissue collected during a Pap smear. The process is generally painless and takes only a few minutes." },
      { q: "Where can I get STD testing in Memphis, TN?", a: "You can be tested at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Book online or call 901-752-4500." },
    ],
    cta: {
      title: "Book your STD test in",
      accent: "Memphis, TN",
      text: "Testing is quick, and treatment works best when infections are found early. Call us or request a visit online.",
    },
  },
  {
    slug: "pregnancy-and-prenatal-care",
    label: "Pregnancy & Prenatal Care",
    specialty: "Obstetric",
    seoTitle: "Prenatal Care in Memphis, TN | Pregnancy Care | Martin, Lee & Page OB GYN",
    metaDescription:
      "Looking for prenatal care in Memphis, TN? Martin, Lee & Page OB GYN offers complete pregnancy care, from your first visit to delivery. Book online or call 901-752-4500.",
    eyebrow: "Pregnancy care in Memphis, Tennessee",
    h1: "Prenatal Care in",
    h1Accent: "Memphis, TN",
    lead:
      "Good prenatal care gives you and your baby a strong start. Martin, Lee & Page OB GYN offers complete pregnancy care to women across Memphis, whether you are trying to conceive or already expecting.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "64% 50%",
    portraitPos: "62% 15%",
    images: {
      hero: "/images/services/pregnancy-and-prenatal-care-hero.jpg",
      heroAlt: "A doctor sharing an ultrasound photo with an expecting mother",
      intro: "/images/services/pregnancy-and-prenatal-care-intro.jpg",
      introAlt: "A doctor showing an expecting mother her baby on a tablet",
      portrait: "/images/services/pregnancy-and-prenatal-care-portrait.jpg",
      portraitAlt: "A pregnant woman preparing healthy food in a bright kitchen",
      wide: "/images/services/pregnancy-and-prenatal-care-wide.jpg",
      wideAlt: "An expecting couple smiling during a prenatal ultrasound",
    },
    intro: {
      eyebrow: "Why prenatal care?",
      title: "Healthy visits for a healthy",
      accent: "pregnancy",
      paras: [
        "Prenatal visits track the health of you and your baby, and confirm that your baby is reaching key milestones. Our doctors can find and treat problems early, and watch any risk factors you already have.",
        "Even healthy pregnancies can develop complications, so it helps to have a specialist who knows your medical history.",
        "Women who skip prenatal care are about three times more likely to have a baby with low birth weight. Care is planned around your health, lifestyle and goals.",
      ],
    },
    covers: {
      eyebrow: "What prenatal care involves",
      title: "Care that follows you",
      accent: "every step",
      items: [
        { t: "Medical history review", d: "We learn your health history so your care fits you.", icon: "users" },
        { t: "Lifestyle guidance", d: "Simple, practical changes that support a healthy pregnancy.", icon: "heart" },
        { t: "Health monitoring", d: "Regular checks on your health and your baby's health.", icon: "shield" },
        { t: "Nutrition counseling", d: "Advice on eating well for you and your baby.", icon: "star" },
        { t: "Supplements and medicines", d: "Prenatal vitamins or medicine when you need them.", icon: "check" },
        { t: "Screenings and ultrasound", d: "Tests and ultrasound to track your baby's growth.", icon: "calendar" },
      ],
    },
    why: {
      eyebrow: "High-risk pregnancy",
      title: "Extra care when you",
      accent: "need it",
      intro: "A high-risk pregnancy usually means closer, more frequent monitoring. Common risk factors include:",
      items: [
        "Being over 35",
        "Carrying more than one baby",
        "A health condition such as diabetes",
        "Obesity",
        "A history of miscarriage",
      ],
    },
    journey: {
      eyebrow: "How often to visit",
      title: "A typical visit",
      accent: "schedule",
      steps: [
        { t: "Weeks 4 to 28", d: "Once a month. Book your first visit as soon as you know you are pregnant, for a full exam, a history review and time for questions." },
        { t: "Weeks 28 to 36", d: "Twice a month, so we can watch your progress more closely." },
        { t: "After week 36", d: "Every week as your due date gets closer. High-risk pregnancies usually need more frequent visits." },
      ],
    },
    faq: [
      { q: "Why do I need prenatal care?", a: "Prenatal visits track your health and your baby's growth, help catch problems early, and let us monitor any existing risk factors." },
      { q: "What does prenatal care involve?", a: "It can include a medical history review, lifestyle advice, health monitoring, nutrition counseling, supplements or medicine, screenings and ultrasound." },
      { q: "How often will I see the doctor?", a: "A typical schedule is monthly from weeks 4 to 28, twice a month from weeks 28 to 36, and weekly after week 36. High-risk pregnancies usually need more visits." },
      { q: "Where can I get prenatal care in Memphis, TN?", a: "You can see us at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Book online or call 901-752-4500." },
    ],
    cta: {
      title: "Start your pregnancy care in",
      accent: "Memphis, TN",
      text: "Book your first prenatal visit as soon as you learn you are pregnant. Call us or request a visit online.",
    },
  },
  {
    slug: "delivery",
    label: "Delivery",
    specialty: "Obstetric",
    seoTitle: "Labor & Delivery in Memphis, TN | OB-GYN Delivery | Martin, Lee & Page OB GYN",
    metaDescription:
      "Expecting in Memphis, TN? Martin, Lee & Page OB GYN provides expert labor and delivery care, including cesarean delivery, with modern methods and a birth plan made with you. Call 901-752-4500.",
    eyebrow: "Labor and delivery in Memphis, Tennessee",
    h1: "Labor & Delivery in",
    h1Accent: "Memphis, TN",
    lead:
      "Our Memphis obstetricians give you expert care and guidance on your big day, using current methods and technology to support a safe delivery. Call 901-752-4500 or book online.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "48% 50%",
    portraitPos: "88% 50%",
    images: {
      hero: "/images/services/delivery-hero.jpg",
      heroAlt: "A new mother smiling at her newborn baby, with her partner beside her",
      intro: "/images/services/delivery-intro.jpg",
      introAlt: "New parents gently holding their newborn baby in a hospital room",
      portrait: "/images/services/delivery-portrait.jpg",
      portraitAlt: "A new mother holding her baby in a bright hospital room",
      wide: "/images/services/delivery-wide.jpg",
      wideAlt: "A new mother in a hospital bed with her newborn and a visitor",
    },
    intro: {
      eyebrow: "Delivery day",
      title: "A safe, supported birth for you and",
      accent: "your baby",
      paras: [
        "Our obstetricians aim to deliver your baby according to the birth plan you create together. They are also prepared to handle any situation that comes up.",
        "From the first signs of labor to the moment you hold your baby, you will know what is happening and what comes next.",
      ],
    },
    covers: {
      eyebrow: "Signs of labor",
      title: "How to know labor is",
      accent: "starting",
      items: [
        { t: "Stronger contractions", d: "Contractions that grow stronger and come more often.", icon: "clock" },
        { t: "Back pain and cramping", d: "Low back pain and cramping that do not go away.", icon: "heart" },
        { t: "The mucus plug", d: "A brownish or reddish mucus discharge.", icon: "shield" },
        { t: "Fluid leaking", d: "Fluid that leaks slowly or gushes out.", icon: "star" },
        { t: "Call us", d: "Once these signs begin, call the practice for instructions.", icon: "phone" },
      ],
    },
    why: {
      eyebrow: "Cesarean delivery",
      title: "Do I need a",
      accent: "c-section?",
      intro: "A cesarean is a surgical delivery through the abdomen. Some are planned in advance, and others are needed during labor. Reasons include:",
      items: [
        "More than one baby",
        "A previous c-section",
        "An infection that could pass to your baby",
        "Your baby is in an unusual position",
        "Distress in you or your baby",
        "High blood pressure",
        "Problems with the umbilical cord",
      ],
    },
    journey: {
      eyebrow: "Labor and delivery",
      title: "Three stages of",
      accent: "birth",
      steps: [
        { t: "Stage 1", d: "Labor begins and lasts until your cervix is fully open, usually 12 to 19 hours. Your care team monitors you while your body prepares." },
        { t: "Stage 2", d: "Your baby is born. This usually takes 20 minutes to two hours, as you push with your team's guidance." },
        { t: "Stage 3", d: "The placenta is delivered a few minutes after birth. Labor and delivery are complete once it is out." },
      ],
    },
    faq: [
      { q: "What are the signs of labor?", a: "Contractions that get stronger and more frequent, low back pain and cramping, a brownish or reddish mucus discharge, and fluid that leaks slowly or gushes out. Call the practice once these begin." },
      { q: "What are the stages of labor?", a: "Stage 1 lasts until your cervix is fully open, usually 12 to 19 hours. Stage 2 is the birth of your baby, usually 20 minutes to two hours. Stage 3 is delivery of the placenta, a few minutes after birth." },
      { q: "Do I need a cesarean delivery?", a: "A cesarean may be planned or needed during labor. Reasons include multiple babies, a previous c-section, infection, unusual baby position, distress, high blood pressure or cord problems." },
      { q: "How do I plan my delivery in Memphis, TN?", a: "Call 901-752-4500 or book online. Your obstetrician will work with you to create a birth plan, and will be ready to handle any situation that arises." },
    ],
    cta: {
      title: "Plan your delivery in",
      accent: "Memphis, TN",
      text: "Our obstetricians are here to guide you. Call us or request a visit online to talk about your birth plan.",
    },
  },
  {
    slug: "birth-control",
    label: "Birth Control",
    specialty: "Gynecologic",
    seoTitle: "Birth Control in Memphis, TN | Family Planning | Martin, Lee & Page OB GYN",
    metaDescription:
      "Find the right birth control in Memphis, TN. Martin, Lee & Page OB GYN offers IUDs, pills, implants, shots and complete family planning. Book online or call 901-752-4500.",
    eyebrow: "Birth control in Memphis, Tennessee",
    h1: "Birth Control in",
    h1Accent: "Memphis, TN",
    lead:
      "Choosing birth control is personal. Our Memphis doctors give you clear information, guidance and medical care so you can pick the method that fits your life. Call 901-752-4500 or book online.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "40% 50%",
    portraitPos: "45% 50%",
    images: {
      hero: "/images/services/birth-control-hero.jpg",
      heroAlt: "A smiling doctor explaining treatment options to a patient",
      intro: "/images/services/birth-control-intro.jpg",
      introAlt: "A happy young couple relaxing together on a sofa",
      portrait: "/images/services/birth-control-portrait.jpg",
      portraitAlt: "A woman holding a pack of birth control pills",
      wide: "/images/services/birth-control-wide.jpg",
      wideAlt: "A woman holding birth control pills and a glass of water",
    },
    intro: {
      eyebrow: "Family planning",
      title: "More than birth control, a plan for",
      accent: "your future",
      paras: [
        "Birth control helps you decide how many children to have and when to become pregnant. But family planning covers more than contraception.",
        "Fertility declines after age 35, so if you want a family and are close to that age, it is a good time to make a plan.",
        "Preconception counseling looks for health and lifestyle issues that could affect a future pregnancy or your baby's health, giving you time to address them first.",
      ],
    },
    covers: {
      eyebrow: "Your options",
      title: "Types of birth control",
      accent: "we offer",
      items: [
        { t: "IUDs", d: "Intrauterine devices that work for years once placed.", icon: "shield" },
        { t: "Birth control pills", d: "Oral contraceptives taken by mouth.", icon: "check" },
        { t: "Patch and ring", d: "Hormone patches and the vaginal ring.", icon: "heart" },
        { t: "Hormone shots", d: "An injection that protects you between visits.", icon: "calendar" },
        { t: "Implants", d: "Birth control implants, including Nexplanon.", icon: "award" },
        { t: "Diaphragms and permanent options", d: "Diaphragms, plus permanent options if you are done having children.", icon: "users" },
      ],
    },
    why: {
      eyebrow: "Choosing a method",
      title: "What to think about",
      accent: "first",
      intro: "Your doctor will review your medical history and do a pelvic exam, then explain any side effects that matter for your health. Personal things to consider include:",
      items: [
        "When you want to become pregnant, since some methods reverse faster than others",
        "Whether you will use a barrier method every time you have sex",
        "Whether you would rather avoid hormones",
        "Your medical history and exam results",
      ],
    },
    journey: {
      eyebrow: "How it works",
      title: "Finding your best",
      accent: "fit",
      steps: [
        { t: "Talk it through", d: "Tell us about your goals, your timing and what feels comfortable." },
        { t: "Exam and history", d: "We review your medical history and do a pelvic exam." },
        { t: "Choose your method", d: "Together we pick a method that suits you, at any stage of life." },
      ],
    },
    faq: [
      { q: "What is comprehensive family planning?", a: "It includes birth control, but also fertility planning and preconception counseling, which checks for health and lifestyle issues that could affect a future pregnancy." },
      { q: "How well does birth control work?", a: "Estimates: IUDs and sterilization nearly 100%. Hormonal methods (pills, shots, ring or patch) 91 to 94%. Diaphragms 88%. Male condoms 82%. Female condoms 79%. Sponges 76 to 88%." },
      { q: "Which types are available?", a: "After a pelvic exam and talk with your doctor, you can choose IUDs, pills, patches, shots, implants such as Nexplanon, diaphragms or the vaginal ring. Permanent options are also available." },
      { q: "Where can I get birth control in Memphis, TN?", a: "You can see our doctors at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Book online or call 901-752-4500." },
    ],
    cta: {
      title: "Find the right birth control in",
      accent: "Memphis, TN",
      text: "Our doctors are ready to help you choose with confidence. Call us or request a visit online.",
    },
  },
  {
    slug: "gynecology",
    label: "Gynecology",
    specialty: "Gynecologic",
    seoTitle: "Gynecologist in Memphis, TN | Women's Health & Well-Woman Exams | Martin, Lee & Page OB GYN",
    metaDescription:
      "Looking for a gynecologist in Memphis, TN? Martin, Lee & Page OB GYN offers well-woman exams, Pap smears, menopause care and more for women of all ages. Call 901-752-4500.",
    eyebrow: "Gynecologist in Memphis, Tennessee",
    h1: "Gynecology in",
    h1Accent: "Memphis, TN",
    lead:
      "Gynecologists do much more than yearly exams and Pap smears. Our Memphis physicians diagnose and treat conditions that affect women and their reproductive health, and we welcome women of all ages.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "60% 50%",
    portraitPos: "70% 50%",
    images: {
      hero: "/images/services/gynecology-hero.jpg",
      heroAlt: "A female doctor talking with a patient at her desk",
      intro: "/images/services/gynecology-intro.jpg",
      introAlt: "A gynecologist speaking with a young patient",
      portrait: "/images/services/gynecology-portrait.jpg",
      portraitAlt: "A doctor taking notes during a gynecology visit",
      wide: "/images/services/gynecology-wide.jpg",
      wideAlt: "A gynecologist talking with a young patient in a bright exam room",
    },
    intro: {
      eyebrow: "Women's health",
      title: "Care for every stage of",
      accent: "your life",
      paras: [
        "Obstetrics focuses on care during pregnancy and childbirth. Gynecology focuses on preventing, diagnosing and treating reproductive health issues.",
        "A yearly well-woman exam is a preventive checkup meant to catch problems early, when they are easier to prevent or treat. How often you need one depends on your overall health and your risk for gynecologic problems.",
      ],
    },
    covers: {
      eyebrow: "Our gynecology services",
      title: "Complete care for",
      accent: "women of all ages",
      items: [
        { t: "Birth control", d: "Guidance and care to choose the method that fits your life.", icon: "check" },
        { t: "Infertility", d: "Evaluation and treatment when you are hoping to become pregnant.", icon: "heart" },
        { t: "Endometriosis and fibroids", d: "Treatment for conditions that cause pain and heavy bleeding.", icon: "shield" },
        { t: "Pelvic floor and incontinence", d: "Care for incontinence and pelvic floor disorders.", icon: "users" },
        { t: "Adolescent gynecology", d: "Gentle care for teens and young women.", icon: "star" },
        { t: "Gynecologic surgery", d: "Surgery when needed, including hysterectomy.", icon: "award" },
        { t: "Colposcopy and biopsy", d: "Closer testing of the cervix when screening finds changes.", icon: "calendar" },
        { t: "HPV screening and treatment", d: "Screening and care to protect your cervical health.", icon: "shield" },
        { t: "Menopause and hormone therapy", d: "Support through menopause, including hormone replacement therapy.", icon: "heart" },
      ],
    },
    why: {
      eyebrow: "When to call us",
      title: "Signs you should book a",
      accent: "visit",
      intro: "Call us with any health question. Schedule an appointment if you have:",
      items: [
        "Bleeding between periods, or unusually heavy or long bleeding",
        "Abnormal bleeding, especially during or after sex",
        "Pelvic pain or pressure that is not menstrual cramping",
        "Frequent or urgent urination, or burning when you urinate",
        "Itching, burning or soreness in the vaginal area",
        "Sores or lumps in the genital area",
        "Vaginal discharge with a bad smell or unusual color",
        "Pain or discomfort during sex",
      ],
    },
    journey: {
      eyebrow: "Your well-woman exam",
      title: "A checkup built around",
      accent: "you",
      steps: [
        { t: "Exams", d: "Depending on your needs, a breast exam and a pelvic exam with a Pap smear to screen for cervical cancer." },
        { t: "Screenings and tests", d: "Blood tests, mammogram, osteoporosis screening, and checks for conditions such as diabetes and high blood pressure." },
        { t: "Counseling and prevention", d: "Family planning, STD testing, nutrition advice, women's health education and immunizations." },
      ],
    },
    faq: [
      { q: "What does a gynecologist do?", a: "Gynecologists prevent, diagnose and treat reproductive health issues. Gynecology goes well beyond yearly exams and Pap smears." },
      { q: "Why is a yearly well-woman exam important?", a: "It is a preventive checkup that catches potential problems early, when they are easier to prevent or treat." },
      { q: "When should I call about a gynecologic problem?", a: "Call us with any health question. Book a visit for unusual bleeding, pelvic pain, itching or burning, sores or lumps, unusual discharge, or pain during sex." },
      { q: "Where can I find a gynecologist in Memphis, TN?", a: "You can see our doctors at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Book online or call 901-752-4500." },
    ],
    cta: {
      title: "Book your well-woman exam in",
      accent: "Memphis, TN",
      text: "Preventive care helps you stay healthy for years to come. Call us or request a visit online.",
    },
  },
  {
    slug: "abnormal-bleeding",
    label: "Abnormal Bleeding",
    specialty: "Gynecologic",
    seoTitle: "Abnormal Vaginal Bleeding Treatment in Memphis, TN | Martin, Lee & Page OB GYN",
    metaDescription:
      "Heavy or abnormal bleeding? Martin, Lee & Page OB GYN in Memphis, TN finds the cause and treats it with current techniques. Book online or call 901-752-4500.",
    eyebrow: "Abnormal bleeding care in Memphis, Tennessee",
    h1: "Abnormal Bleeding Care in",
    h1Accent: "Memphis, TN",
    lead:
      "Vaginal bleeding that lasts more than a week, is heavy or painful, or happens during pregnancy, before puberty or after menopause needs prompt care. Our Memphis gynecologists find the cause and treat it.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "46% 50%",
    portraitPos: "50% 40%",
    images: {
      hero: "/images/services/abnormal-bleeding-hero.jpg",
      heroAlt: "A young woman sitting on a sofa holding her stomach in discomfort",
      intro: "/images/services/abnormal-bleeding-intro.jpg",
      introAlt: "A woman resting on a sofa at home with stomach discomfort",
      portrait: "/images/services/abnormal-bleeding-portrait.jpg",
      portraitAlt: "A young woman talking with her doctor in an exam room",
      wide: "/images/services/abnormal-bleeding-wide.jpg",
      wideAlt: "A nurse and a patient during a gynecology visit",
    },
    intro: {
      eyebrow: "Why am I bleeding so heavily?",
      title: "Bleeding that is not normal needs",
      accent: "attention",
      paras: [
        "Bleeding that is unexpected, unusually heavy, or unusually long and outside your normal period can signal a serious condition. It is especially concerning during pregnancy, after menopause, or before a first period.",
        "Our doctors use current techniques to find out why it is happening, so you can get the right treatment.",
      ],
    },
    covers: {
      eyebrow: "Possible causes",
      title: "What can cause abnormal",
      accent: "bleeding",
      items: [
        { t: "Uterine fibroids or polyps", d: "Growths in or on the uterus that can cause heavy bleeding.", icon: "shield" },
        { t: "Hormone imbalance", d: "Changes in your hormones can disrupt your cycle.", icon: "heart" },
        { t: "Thyroid problems", d: "Thyroid issues can affect your periods.", icon: "star" },
        { t: "Cancer of the reproductive organs", d: "A serious cause, and a key reason to be checked.", icon: "award" },
        { t: "During pregnancy", d: "Bleeding while pregnant needs prompt care.", icon: "calendar" },
        { t: "After menopause or before a first period", d: "Bleeding at these times should be checked right away.", icon: "clock" },
      ],
    },
    why: {
      eyebrow: "Finding the cause",
      title: "How we find out",
      accent: "why",
      intro: "To find the cause, your gynecologist may do:",
      items: [
        "A pelvic exam",
        "Blood tests",
        "Imaging, such as a uterine ultrasound",
        "An endometrial biopsy, if recommended",
      ],
    },
    journey: {
      eyebrow: "Endometrial biopsy",
      title: "What to expect from a",
      accent: "biopsy",
      steps: [
        { t: "In the office", d: "A small sample of the uterine lining is taken. It takes about 15 minutes and needs no anesthesia, though you may take over-the-counter pain medicine about 30 minutes before." },
        { t: "Afterward", d: "You may have slight spotting and cramping. Tell your doctor if you are or might be pregnant." },
        { t: "Your results", d: "Results usually take about a week. Your doctor then reviews the diagnosis and your treatment options with you." },
      ],
    },
    faq: [
      { q: "When is vaginal bleeding abnormal?", a: "Bleeding that lasts more than a week, is heavy or painful, or happens during pregnancy, before puberty or after menopause needs prompt care." },
      { q: "What is an endometrial biopsy?", a: "A small sample of the uterine lining is taken in the office and sent to a lab. It takes about 15 minutes. It should not be done if you have pelvic inflammatory disease, and tell your doctor if you may be pregnant." },
      { q: "How long do results take?", a: "Results usually take about a week. Your doctor then goes over the diagnosis, your treatment options and any questions you have." },
      { q: "Where can I get care for abnormal bleeding in Memphis, TN?", a: "You can see our gynecologists at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Call 901-752-4500 or book online." },
    ],
    cta: {
      title: "Get answers about bleeding in",
      accent: "Memphis, TN",
      text: "Do not wait if something feels wrong. Call us or request a visit online.",
    },
  },
  {
    slug: "hpv",
    label: "HPV",
    specialty: "Gynecologic",
    seoTitle: "HPV Screening & Treatment in Memphis, TN | Martin, Lee & Page OB GYN",
    metaDescription:
      "HPV screening, vaccine guidance and treatment in Memphis, TN. Martin, Lee & Page OB GYN helps protect your cervical health. Book online or call 901-752-4500.",
    eyebrow: "HPV care in Memphis, Tennessee",
    h1: "HPV Care in",
    h1Accent: "Memphis, TN",
    lead:
      "HPV is the most common sexually transmitted infection in the U.S. and can lead to cervical cancer. Our Memphis doctors encourage regular checkups and talking with you about the HPV vaccine.",
    chips: ["Board-certified OB-GYNs", "All-female team", "Voted Best Women's Clinic in Memphis, 2018 – 2021"],
    heroPos: "50% 30%",
    portraitPos: "60% 50%",
    images: {
      hero: "/images/services/hpv-hero.jpg",
      heroAlt: "A smiling young woman after receiving a vaccine from her doctor",
      intro: "/images/services/hpv-intro.jpg",
      introAlt: "A doctor giving a vaccine to a young woman",
      portrait: "/images/services/hpv-portrait.jpg",
      portraitAlt: "A female doctor giving a vaccine to a smiling patient",
      wide: "/images/services/hpv-wide.jpg",
      wideAlt: "A nurse giving a vaccine to a patient at a clinic table",
    },
    intro: {
      eyebrow: "What is HPV?",
      title: "Know the facts about",
      accent: "HPV",
      paras: [
        "Human papillomavirus (HPV) is a large group of viruses that spread in several ways, including sexual contact. Many types cause no health problems. Some cause genital warts, and high-risk types can lead to cancer.",
        "Nearly all cervical cancer is caused by HPV. Most high-risk infections clear on their own. If they do not, they can cause abnormal cell growth that may become cancer if untreated.",
      ],
    },
    covers: {
      eyebrow: "How we help",
      title: "Protection and care for",
      accent: "your cervical health",
      items: [
        { t: "HPV screening", d: "Regular screening finds problems early, when they are easier to treat.", icon: "shield" },
        { t: "Vaccine guidance", d: "We can talk with you about the HPV vaccine.", icon: "check" },
        { t: "Colposcopy and biopsy", d: "A closer look at the cervix if screening finds changes.", icon: "calendar" },
        { t: "Treatment", d: "Care for HPV-related changes and genital warts.", icon: "heart" },
        { t: "Regular checkups", d: "Stay on schedule with preventive care.", icon: "users" },
        { t: "Prevention advice", d: "Condoms used every time you have sex lower your risk.", icon: "star" },
      ],
    },
    why: {
      eyebrow: "Symptoms",
      title: "Know the signs, and do not",
      accent: "ignore them",
      intro: "HPV alone rarely causes symptoms. Signs appear only when the virus causes warts or cervical cancer.",
      items: [
        "Genital warts: flat, clustered or stem-like bumps",
        "Warts that are usually painless, sometimes itchy",
        "Heavier or longer bleeding, or bleeding between periods",
        "Bleeding after sex or after menopause",
        "Unusual or bloody discharge",
        "Pain during sex",
      ],
    },
    journey: {
      eyebrow: "Protect yourself",
      title: "Three ways to lower your",
      accent: "risk",
      steps: [
        { t: "Get vaccinated", d: "Approved HPV vaccines can greatly lower your risk." },
        { t: "Use condoms", d: "Using condoms every time you have sex also lowers your risk." },
        { t: "Keep up with screening", d: "Regular cervical cancer and HPV screening catches problems early." },
      ],
    },
    faq: [
      { q: "What is HPV?", a: "HPV is a large group of viruses, spread in several ways including sexual contact. Many types cause no problems, some cause genital warts, and high-risk types can lead to cancer." },
      { q: "How is HPV linked to cervical cancer?", a: "Nearly all cervical cancer is caused by HPV. Most high-risk infections clear on their own, but if they stay, they can cause abnormal cell growth that may become cancer if untreated." },
      { q: "Can HPV be prevented?", a: "Approved vaccines and using condoms every time you have sex lower your risk. Regular screening for cervical cancer and HPV helps catch problems early." },
      { q: "Where can I get HPV screening in Memphis, TN?", a: "You can be screened at Martin, Lee & Page OB GYN, 6286 Briarcrest Avenue, Suite 308. Call 901-752-4500 or book online." },
    ],
    cta: {
      title: "Schedule your HPV screening in",
      accent: "Memphis, TN",
      text: "If it has been a while since your last screening, now is a good time. Call us or request a visit online.",
    },
  },
];

import { moreServices } from "./serviceDetailsMore";
export const serviceDetails: ServiceDetail[] = [...baseServices, ...moreServices];
