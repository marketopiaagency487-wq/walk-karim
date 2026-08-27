"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import Reveal from "./reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-stone/40">
      <div className="wrap max-w-[840px]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-[26px] font-bold md:text-[34px]">
            أسئلة يسألها كل مستثمر قبل الحجز
          </h2>
          <div className="ribbon-rule mt-7" />
        </Reveal>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className="slab overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-[15px] font-semibold">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[20px] leading-none text-wood transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p className="border-t border-stone px-5 py-4 text-[14px] leading-[2] text-ink/70">
                    {f.a}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
