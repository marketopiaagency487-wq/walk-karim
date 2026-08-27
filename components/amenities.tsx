import { amenities, partners } from "@/lib/site";
import Reveal from "./reveal";

export default function Amenities() {
  return (
    <section id="amenities" className="section bg-ink text-paper">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Inside the Project</p>
          <h2 className="mt-3 max-w-[24ch] text-[26px] font-bold md:text-[36px]">
            خدمات تُطيل مدة بقاء الزائر — وتحمي عائد وحدتك
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-[2] text-stone">
            الفارق بين مول ناجح وآخر متعثر هو عدد الأسباب التي تجعل الزائر يبقى
            ساعتين بدلاً من عشرين دقيقة.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[4px_28px_28px_4px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 40}>
              <div className="h-full bg-ink p-6 transition-colors hover:bg-ink-2">
                <p className="text-[16px] font-semibold text-wood-2">
                  {a.title}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-2">
                  {a.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14">
            <p className="eyebrow">Operating Partners</p>
            <h3 className="mt-3 text-[20px] font-bold md:text-[26px]">
              شركاء التصميم والتشغيل
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="slab-dark px-5 py-4"
                >
                  <p className="text-[15px] font-semibold">{p.name}</p>
                  <p className="mt-1 text-[12.5px] text-stone-2">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
