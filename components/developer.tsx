import Reveal from "./reveal";

const stats = [
  { v: "2001", l: "بداية النشاط في السوق السعودي" },
  { v: "+150", l: "مشروعاً منفذاً" },
  { v: "~10,000", l: "وحدة مسلّمة" },
  { v: "+20", l: "عاماً من الخبرة" },
];

const projects = [
  "The Address Mega Mall",
  "Address Home 1 & 2",
  "Strip 13 Mall",
  "Dubai Mall",
  "مشروع الكوربة",
];

export default function Developer() {
  return (
    <section id="developer" className="section bg-paper">
      <div className="wrap grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-[4px_36px_36px_4px] border-s-4 border-wood">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/courtyard-pool.webp"
              alt="الفناء الداخلي والمسطحات المائية بمول ووك إن أكتوبر"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">The Developer</p>
          <h2 className="mt-3 text-[26px] font-bold md:text-[36px]">
            شركة دبي للتطوير العقاري
          </h2>
          <p className="mt-4 text-[15px] leading-[2] text-ink/70">
            بدأت الشركة نشاطها من السوق السعودي عام 2001، ونقلت خبرتها إلى غرب
            القاهرة عبر محفظة من المشروعات التجارية والسكنية. وWALK&apos;N هو
            أحدث إطلاقاتها بمدينة السادس من أكتوبر ضمن خطة توسع تشمل مشروعات
            جديدة بشرق القاهرة والساحل الشمالي.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.l} className="border-s-2 border-wood ps-4">
                <p className="num text-[24px] font-bold text-ink">{s.v}</p>
                <p className="mt-1 text-[12.5px] leading-snug text-ink/55">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[13px] font-semibold text-ink/60">
              من أعمال الشركة
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {projects.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-stone-2 px-4 py-1.5 text-[13px] text-ink/75"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
