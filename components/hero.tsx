"use client";

import { site, waLink, facts } from "@/lib/site";
import { trackConversion } from "@/lib/track";

function Ribbon() {
  return (
    <svg
      viewBox="0 0 420 46"
      className="mt-5 h-[42px] w-[240px] -scale-x-100 md:w-[320px]"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4 12H300c22 0 40 8 40 8"
        stroke="#d8a967"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4 24H262c26 0 46 10 46 10"
        stroke="#d8a967"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".6"
      />
      <path
        d="M4 36H222c30 0 52 8 52 8"
        stroke="#d8a967"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".3"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hotel-night.webp"
          alt="واجهة مول ووك إن أكتوبر ليلاً على المحور المركزي"
          className="kenburns h-full w-full object-cover opacity-80"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/95 via-ink/75 to-ink/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="wrap relative flex min-h-[100svh] flex-col justify-center pt-28 pb-14 md:pt-32">
        <p className="eyebrow">6th of October · Central Axis</p>

        <h1 className="mt-4 max-w-[19ch] text-[30px] font-extrabold text-paper sm:text-[40px] md:text-[54px] md:leading-[1.25]">
          عنوان تجاري على المحور المركزي، على بُعد{" "}
          <span className="text-wood-2">20 متراً</span> من ميدان النجدة
        </h1>

        <Ribbon />

        <p className="mt-5 max-w-[58ch] text-[15px] leading-[2] text-stone md:text-[17px]">
          مول <strong className="font-semibold text-paper">WALK&apos;N</strong>{" "}
          من {site.developer}: 10 أفدنة تجمع المحلات والمكاتب والعيادات والوحدات
          الفندقية في وجهة واحدة، بجانب مستشفى كليوباترا وبجوار بنك التعمير
          والإسكان.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-full bg-wood-2 px-8 py-4 text-center text-[15px] font-bold text-ink transition-transform hover:scale-[1.02]"
          >
            احجز معاينة واستلم الأسعار
          </a>
          <a
            href={waLink("الهيرو")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion("whatsapp")}
            className="rounded-full border border-stone/40 px-8 py-4 text-center text-[15px] font-semibold text-paper transition-colors hover:border-wood-2 hover:text-wood-2"
          >
            تواصل واتساب
          </a>
          <p className="mt-1 text-[13px] text-stone-2 sm:mt-0 sm:ms-2">
            تبدأ من <span className="num font-bold text-wood-2">1,800,000</span>{" "}
            جنيه · مقدم 10٪
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur-sm">
        <div className="wrap grid grid-cols-2 gap-y-6 py-7 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="px-1">
              <p className="text-[22px] font-bold text-wood-2 md:text-[28px]">
                <span className="num">{f.value}</span>
                {f.unit && (
                  <span className="ms-1.5 text-[13px] font-medium text-stone">
                    {f.unit}
                  </span>
                )}
              </p>
              <p className="mt-1 text-[12.5px] leading-snug text-stone-2">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
