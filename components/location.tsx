import { location } from "@/lib/site";
import Reveal from "./reveal";

export default function Location() {
  return (
    <section id="location" className="section bg-ink text-paper">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">The Location</p>
          <h2 className="mt-3 text-[26px] font-bold md:text-[36px]">
            {location.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-[2] text-stone">
            القيمة الحقيقية لأي أصل تجاري تبدأ من عدد الأشخاص الذين يمرون أمامه
            كل يوم. المحور المركزي هو الشريان الأساسي لحركة الخدمات والتجارة في
            غرب القاهرة، وWALK&apos;N يقف عليه مباشرة.
          </p>

          <ul className="mt-8 space-y-4">
            {location.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-[2px] w-6 shrink-0 bg-wood-2"
                />
                <div>
                  <p className="text-[15px] font-semibold">{p.title}</p>
                  <p className="text-[13px] text-stone-2">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[4px_36px_36px_4px] border-s-4 border-wood-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/street-night.webp"
              alt="واجهة مول ووك إن على المحور المركزي بالسادس من أكتوبر"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
