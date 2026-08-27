"use client";

import { useState } from "react";
import { gallery } from "@/lib/site";
import Reveal from "./reveal";

export default function Gallery() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="gallery" className="section bg-paper">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Masterplan &amp; Views</p>
          <h2 className="mt-3 text-[26px] font-bold md:text-[36px]">
            المخطط العام والمناظير المعمارية
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-[2] text-ink/70">
            المشروع مقسّم إلى ست كتل (A – F) حول بلازا مركزية مفتوحة، بحيث تطل
            كل وحدة على ممر مشاة أو ساحة داخلية — دون وحدات خلفية مغلقة.
          </p>
          <div className="ribbon-rule mt-7" />
        </Reveal>

        <Reveal delay={80}>
          <figure className="mt-10 overflow-hidden rounded-[4px_36px_36px_4px] border-s-4 border-wood">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/masterplan.webp"
              alt="المخطط العام لمول ووك إن أكتوبر موضحاً عليه الكتل من A إلى F"
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="bg-ink px-5 py-3 text-[12.5px] text-stone-2">
              المخطط العام — توزيع الكتل حول البلازا المركزية والمسطحات المائية.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 60}>
              <div className="group overflow-hidden rounded-[4px_28px_28px_4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative mt-6 overflow-hidden rounded-[4px_36px_36px_4px] bg-ink">
            {playing ? (
              <video
                src="/video/walkn-tour.mp4"
                controls
                autoPlay
                playsInline
                className="aspect-video w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group relative block w-full"
                aria-label="تشغيل فيديو المشروع"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/video-poster.webp"
                  alt="جولة داخل مول ووك إن أكتوبر"
                  loading="lazy"
                  className="aspect-video w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wood-2 text-ink transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 -scale-x-100"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-[14px] font-semibold text-paper">
                    شغّل جولة المشروع
                  </span>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
