export const site = {
  name: "WALK'N Mall",
  nameAr: "مول ووك إن أكتوبر",
  developer: "شركة دبي للتطوير العقاري",
  city: "السادس من أكتوبر",
  url: "https://dubai-developments.org/",
  phone: "01112286897",
  phoneIntl: "+201112286897",
  whatsapp: "201090595696",
  email: "forestgroup0gmail.com",
  agency: "Grandeur Spaces",
  agencyUrl: "https://grandeur-spaces.com",
  // ⚠️ ضع مفتاح Web3Forms الخاص بالمشروع هنا
  web3formsKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
  // ⚠️ ضع Google Ads / GA4 tag هنا
  gtagId: "AW-XXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXX/REPLACE_FORM_LABEL",
    call: "AW-XXXXXXXXX/REPLACE_CALL_LABEL",
    whatsapp: "AW-XXXXXXXXX/REPLACE_WA_LABEL",
  },
};

export const waLink = (context = "الصفحة الرئيسية") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `مرحباً، مهتم بالاستثمار في مول WALK'N أكتوبر — ${context}. أرجو إرسال الأسعار وكراسة الشروط.`
  )}`;

export const facts = [
  { value: "10", unit: "أفدنة", label: "مساحة المشروع" },
  { value: "G + 5", unit: "", label: "أرضي و5 أدوار متكررة" },
  { value: "4", unit: "أنشطة", label: "تجاري · إداري · طبي · فندقي" },
  { value: "10", unit: "سنوات", label: "تقسيط بدون فوائد" },
];

export type Unit = {
  id: string;
  title: string;
  short: string;
  areaFrom: number;
  areaTo: number;
  priceFrom: number;
  priceTo: number;
  finishing: string;
  floor: string;
  pitch: string;
  image: string;
};

export const units: Unit[] = [
  {
    id: "ground-retail",
    title: "محلات الدور الأرضي",
    short: "محلات أرضي",
    areaFrom: 33,
    areaTo: 111,
    priceFrom: 6_000_000,
    priceTo: 33_000_000,
    finishing: "Core & Shell",
    floor: "الدور الأرضي",
    pitch:
      "واجهات مباشرة على البلازا وممرات المشاة، وأعلى معدل مشاهدة يومي داخل المشروع — الخيار الأول للبراندات والمطاعم.",
    image: "/images/plaza-day.webp",
  },
  {
    id: "first-retail",
    title: "محلات الدور الأول",
    short: "محلات أول",
    areaFrom: 39,
    areaTo: 81,
    priceFrom: 5_000_000,
    priceTo: 19_000_000,
    finishing: "Core & Shell",
    floor: "الدور الأول",
    pitch:
      "سعر متر أقل من الأرضي مع نفس حركة الزوار، ومناسب للمطاعم المعلقة والكافيهات ذات الجلسات المفتوحة.",
    image: "/images/courtyard-family.webp",
  },
  {
    id: "clinics",
    title: "العيادات الطبية",
    short: "عيادات",
    areaFrom: 47,
    areaTo: 117,
    priceFrom: 3_200_000,
    priceTo: 13_000_000,
    finishing: "تسليم متشطب بالكامل",
    floor: "الأدوار المتكررة",
    pitch:
      "مقابل مستشفى كليوباترا مباشرة، بممرات واسعة ومصاعد مخصصة للمرضى وقرب مباشر من قطاع الصيدليات.",
    image: "/images/exterior-day.webp",
  },
  {
    id: "offices",
    title: "المكاتب الإدارية",
    short: "مكاتب",
    areaFrom: 33,
    areaTo: 121,
    priceFrom: 1_800_000,
    priceTo: 14_665_000,
    finishing: "Core & Shell",
    floor: "الأدوار المتكررة",
    pitch:
      "أقل نقطة دخول سعرية في المشروع، بمداخل مستقلة وقاعات اجتماعات مشتركة وبنية تحتية ذكية من فودافون.",
    image: "/images/corner-day.webp",
  },
  {
    id: "hotel",
    title: "الوحدات الفندقية",
    short: "فندقي",
    areaFrom: 47,
    areaTo: 73,
    priceFrom: 2_500_000,
    priceTo: 4_000_000,
    finishing: "تسليم متشطب بالكامل",
    floor: "الأدوار العلوية",
    pitch:
      "وحدات مخدومة جاهزة للتشغيل من اليوم الأول، تناسب المستثمر الباحث عن دخل إيجاري دون تكلفة تشطيب.",
    image: "/images/hotel-night.webp",
  },
];

export const location = {
  headline: "على المحور المركزي مباشرة — قلب حركة غرب القاهرة",
  points: [
    { title: "20 متراً من ميدان النجدة", note: "الحي الأول، السادس من أكتوبر" },
    { title: "أمام مستشفى كليوباترا", note: "تدفق طبي مستمر على مدار الساعة" },
    { title: "بجوار بنك التعمير والإسكان", note: "كثافة تعاملات يومية" },
    { title: "دقائق من جامعة 6 أكتوبر", note: "قاعدة عملاء شبابية دائمة" },
    { title: "قريب من محور 26 يوليو ووصلة دهشور", note: "وصول سريع من الشيخ زايد" },
    { title: "اتصال مباشر بطريق الواحات", note: "وميدان جهينة وميدان الرماية" },
  ],
};

export const amenities = [
  { title: "مجمع سينمات", note: "يطيل مدة بقاء الزائر داخل المول" },
  { title: "منطقة ألعاب أطفال", note: "Kids Area مؤمّنة بالكامل" },
  { title: "منطقة VR Gaming", note: "ترفيه تفاعلي بإدارة RECO" },
  { title: "UFC GYM", note: "براند رياضي عالمي داخل المشروع" },
  { title: "Food Court عالمي", note: "مطاعم معلقة وكافيهات مفتوحة" },
  { title: "مجمع بنوك", note: "يخدم الشركات ورواد الأعمال" },
  { title: "معارض سيارات", note: "لأفخم الماركات على الواجهة" },
  { title: "جراجات ذكية", note: "تحت الأرض لمنع التكدس" },
  { title: "أمن ومراقبة 24/7", note: "أنظمة متطورة وإدارة تشغيل محترفة" },
];

export const partners = [
  { name: "حافظ للاستشارات الهندسية", role: "التصميم المعماري" },
  { name: "RECO", role: "تخطيط وإدارة المناطق الترفيهية" },
  { name: "UFC GYM", role: "تشغيل المنشأة الرياضية" },
  { name: "Vodafone", role: "البنية التحتية الذكية والتحول الرقمي" },
  { name: "Acadio", role: "الهوية التجارية والاتصال الإبداعي" },
  { name: "Rsoukh", role: "شريك استثماري (السعودية)" },
];

export const gallery = [
  { src: "/images/plaza-day.webp", alt: "بلازا مول ووك إن أكتوبر نهاراً بنوافير ومساحات خضراء" },
  { src: "/images/street-night.webp", alt: "واجهة WALK'N Mall على المحور المركزي ليلاً" },
  { src: "/images/courtyard-pool.webp", alt: "الفناء الداخلي والمسطحات المائية داخل مول ووك إن" },
  { src: "/images/facade-night.webp", alt: "المنظور العام لمشروع WALK'N أكتوبر ليلاً" },
  { src: "/images/courtyard-family.webp", alt: "ممرات المشاة والمحلات داخل مول ووك إن 6 أكتوبر" },
  { src: "/images/corner-day.webp", alt: "واجهة المكاتب الإدارية بمول WALK'N أكتوبر" },
];

export const faqs = [
  {
    q: "أين يقع مول WALK'N أكتوبر بالتحديد؟",
    a: "يقع المشروع على المحور المركزي بمدينة السادس من أكتوبر، على بُعد 20 متراً من ميدان النجدة بالحي الأول، أمام مستشفى كليوباترا وبجوار بنك التعمير والإسكان.",
  },
  {
    q: "من هو المطور العقاري للمشروع؟",
    a: "شركة دبي للتطوير العقاري، بخبرة تتجاوز 20 عاماً بدأت من السوق السعودي عام 2001، ونفذت أكثر من 150 مشروعاً وسلّمت ما يقارب 10 آلاف وحدة.",
  },
  {
    q: "ما أنواع الوحدات المتاحة؟",
    a: "محلات تجارية بالدور الأرضي والأول، مكاتب إدارية، عيادات طبية، ووحدات فندقية مخدومة، على مساحة إجمالية 10 أفدنة بتصميم أرضي و5 أدوار متكررة.",
  },
  {
    q: "ما هو نظام السداد؟",
    a: "مقدم 10٪ من قيمة الوحدة وتقسيط الباقي على 10 سنوات بدون فوائد، مع خصم 5٪ مطبق على الأسعار المعروضة خلال فترة الإطلاق.",
  },
  {
    q: "ما أقل سعر للدخول في المشروع؟",
    a: "تبدأ المكاتب الإدارية من 1,800,000 جنيه لمساحة 33 متراً، وهي أقل نقطة دخول متاحة حالياً داخل المشروع.",
  },
  {
    q: "هل الوحدات تُسلّم متشطبة؟",
    a: "العيادات والوحدات الفندقية تُسلّم متشطبة بالكامل، بينما تُسلّم المحلات والمكاتب Core & Shell. يُرجى تأكيد تفاصيل التشطيب مع فريق المبيعات وقت التعاقد.",
  },
];

export const fmt = (n: number) => n.toLocaleString("en-US");
