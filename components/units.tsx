"use client";

import { units, fmt, waLink } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import Reveal from "./reveal";

export default function Units() {
  return (
    <section id="units" className="section bg-paper">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Units &amp; Pricing</p>
          <h2 className="mt-3 max-w-[22ch] text-[26px] font-bold md:text-[38px]">
            خمسة أنشطة استثمارية داخل مشروع واحد
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] text-ink/70 md:text-[16px]">
            الأسعار التالية بعد خصم 5٪ المطبق خلال فترة الإطلاق، وتشمل نظام سداد
            موحد: مقدم 10٪ وتقسيط على 10 سنوات بدون فوائد.
          </p>
          <div className="ribbon-rule mt-7" />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {units.map((u, i) => (
            <Reveal key={u.id} delay={i * 70}>
              <article className="slab group flex h-full flex-col overflow-hidden shadow-[0_2px_20px_rgba(11,20,32,.07)]">
                <div className="relative h-[178px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={u.image}
                    alt={u.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 start-3 rounded-full bg-ink/85 px-3 py-1 text-[11.5px] font-medium text-stone backdrop-blur-sm">
                    {u.floor}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] font-bold">{u.title}</h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.9] text-ink/65">
                    {u.pitch}
                  </p>

                  <dl className="mt-5 space-y-2.5 border-t border-stone pt-4 text-[13.5px]">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-ink/55">المساحات</dt>
                      <dd className="font-semibold">
                        <span className="num">{u.areaFrom}</span> —{" "}
                        <span className="num">{u.areaTo}</span> م²
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-ink/55">الأسعار</dt>
                      <dd className="font-semibold text-wood">
                        <span className="num">{fmt(u.priceFrom)}</span> —{" "}
                        <span className="num">{fmt(u.priceTo)}</span>
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-ink/55">التشطيب</dt>
                      <dd className="font-semibold">{u.finishing}</dd>
                    </div>
                  </dl>

                  <a
                    href={waLink(u.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion("whatsapp")}
                    className="mt-5 block rounded-full bg-ink py-3 text-center text-[14px] font-semibold text-paper transition-colors hover:bg-wood"
                  >
                    اطلب تفاصيل {u.short}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <div className="slab-dark flex h-full flex-col justify-center p-8 text-paper">
              <p className="eyebrow" style={{ color: "#d8a967" }}>
                Entry point
              </p>
              <p className="mt-4 text-[15px] leading-[2] text-stone">
                أقل نقطة دخول متاحة حالياً هي مكتب إداري بمساحة{" "}
                <span className="num font-bold text-paper">33</span> م² بسعر{" "}
                <span className="num font-bold text-wood-2">1,800,000</span>{" "}
                جنيه، بمقدم يبدأ من{" "}
                <span className="num font-bold text-paper">180,000</span> جنيه.
              </p>
              <p className="mt-4 text-[13px] text-stone-2">
                توافر المساحات يتغير أسبوعياً — تواصل معنا لتأكيد الوحدة المتاحة
                قبل الحجز.
              </p>
              <a
                href="#contact"
                className="mt-6 rounded-full bg-wood-2 py-3 text-center text-[14px] font-bold text-ink"
              >
                اطلب قائمة الوحدات المتاحة
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-[12.5px] text-ink/45">
          * الأسعار والمساحات استرشادية وقابلة للتغيير دون إشعار مسبق، ولا تُعد
          عرضاً تعاقدياً. يُعتمد جدول الأسعار الرسمي الصادر من المطور وقت
          التعاقد.
        </p>
      </div>
    </section>
  );
}
