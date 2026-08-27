"use client";

import { useMemo, useState } from "react";
import { units, fmt, waLink } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import Reveal from "./reveal";

const step = 50_000;

export default function Payment() {
  const [unitId, setUnitId] = useState(units[3].id);
  const unit = units.find((u) => u.id === unitId)!;
  const [price, setPrice] = useState(units[3].priceFrom);

  const onUnitChange = (id: string) => {
    const u = units.find((x) => x.id === id)!;
    setUnitId(id);
    setPrice(u.priceFrom);
  };

  const { down, quarterly, remaining } = useMemo(() => {
    const d = Math.round((price * 0.1) / 1000) * 1000;
    const rem = price - d;
    return { down: d, remaining: rem, quarterly: Math.round(rem / 40 / 100) * 100 };
  }, [price]);

  return (
    <section id="payment" className="section bg-stone/40">
      <div className="wrap grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">Payment Plan</p>
          <h2 className="mt-3 text-[26px] font-bold md:text-[36px]">
            مقدم 10٪ وتقسيط على 10 سنوات بدون فوائد
          </h2>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-[2] text-ink/70">
            نظام سداد واحد لجميع الأنشطة داخل المشروع، مع خصم 5٪ مطبق بالفعل على
            الأسعار المعروضة في هذه الصفحة خلال فترة الإطلاق.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { k: "مقدم التعاقد", v: "10٪ من قيمة الوحدة" },
              { k: "مدة التقسيط", v: "10 سنوات بدون فوائد" },
              { k: "خصم الإطلاق", v: "5٪ مطبق على الأسعار المعروضة" },
              { k: "التسليم", v: "عيادات ووحدات فندقية متشطبة بالكامل" },
            ].map((r) => (
              <div
                key={r.k}
                className="slab flex items-center justify-between gap-4 px-5 py-4 text-[14.5px]"
              >
                <span className="text-ink/60">{r.k}</span>
                <span className="font-semibold">{r.v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[4px_36px_36px_4px] border-s-4 border-wood bg-ink p-7 text-paper md:p-9">
            <h3 className="text-[19px] font-bold text-wood-2">
              احسب القسط التقديري
            </h3>
            <p className="mt-2 text-[13px] text-stone-2">
              اختر نوع الوحدة وحرّك السعر لمعرفة المقدم والقسط.
            </p>

            <label className="mt-6 block text-[13px] text-stone">
              نوع الوحدة
              <select
                value={unitId}
                onChange={(e) => onUnitChange(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-ink-2 px-4 py-3 text-[14.5px] text-paper outline-none focus:border-wood-2"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-6 block text-[13px] text-stone">
              سعر الوحدة:{" "}
              <span className="num text-[16px] font-bold text-wood-2">
                {fmt(price)}
              </span>{" "}
              جنيه
              <input
                type="range"
                min={unit.priceFrom}
                max={unit.priceTo}
                step={step}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                aria-label="سعر الوحدة"
                className="mt-3 w-full accent-[#d8a967]"
              />
              <span className="mt-1 flex justify-between text-[11.5px] text-stone-2">
                <span className="num">{fmt(unit.priceFrom)}</span>
                <span className="num">{fmt(unit.priceTo)}</span>
              </span>
            </label>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              <div>
                <p className="text-[11.5px] text-stone-2">المقدم 10٪</p>
                <p className="num mt-1 text-[17px] font-bold text-paper">
                  {fmt(down)}
                </p>
              </div>
              <div>
                <p className="text-[11.5px] text-stone-2">المتبقي</p>
                <p className="num mt-1 text-[17px] font-bold text-paper">
                  {fmt(remaining)}
                </p>
              </div>
              <div>
                <p className="text-[11.5px] text-stone-2">قسط ربع سنوي</p>
                <p className="num mt-1 text-[17px] font-bold text-wood-2">
                  {fmt(quarterly)}
                </p>
              </div>
            </div>

            <a
              href={waLink(`حساب قسط — ${unit.title} بسعر ${fmt(price)}`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp")}
              className="mt-7 block rounded-full bg-wood-2 py-3.5 text-center text-[14.5px] font-bold text-ink"
            >
              اطلب جدول السداد الرسمي
            </a>

            <p className="mt-4 text-[11.5px] leading-relaxed text-stone-2">
              الأرقام تقديرية ومحسوبة على 40 قسطاً ربع سنوي لأغراض التوضيح فقط،
              وقد تختلف عن جدول السداد المعتمد من المطور وقت التعاقد.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
