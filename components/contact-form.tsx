"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site, units, waLink } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import Reveal from "./reveal";

type Status = "idle" | "sending" | "error";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    const phone = String(data.get("phone") || "").replace(/\s/g, "");
    if (!/^0?1[0-25]\d{8}$/.test(phone)) {
      setError("رقم الموبايل غير صحيح — أدخل 11 رقماً يبدأ بـ 01.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    data.append("access_key", site.web3formsKey);
    data.append("subject", "عميل جديد — WALK'N Mall أكتوبر");
    data.append("from_name", "WALK'N October Landing Page");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "failed");
      trackConversion("form");
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("تعذّر الإرسال. برجاء المحاولة مرة أخرى أو التواصل عبر واتساب.");
    }
  }

  return (
    <section id="contact" className={compact ? "" : "section bg-ink text-paper"}>
      <div className={compact ? "" : "wrap grid gap-12 lg:grid-cols-[1fr_1.05fr]"}>
        {!compact && (
          <Reveal>
            <p className="eyebrow">Book a Viewing</p>
            <h2 className="mt-3 text-[26px] font-bold md:text-[36px]">
              اترك رقمك — نرسل لك الأسعار وكراسة الشروط خلال ساعة عمل
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[2] text-stone">
              فريقنا يعمل كوسيط عقاري معتمد للمشروع. نرسل لك جدول الوحدات
              المتاحة، صور التشطيبات، وموعد معاينة على أرض المشروع دون أي رسوم.
            </p>

            <div className="mt-8 space-y-3 text-[14.5px]">
              <a
                href={`tel:${site.phone}`}
                onClick={() => trackConversion("call")}
                className="flex items-center gap-3 text-stone transition-colors hover:text-wood-2"
              >
                <span className="text-wood-2">اتصال:</span>
                <span className="num font-semibold">{site.phone}</span>
              </a>
              <a
                href={waLink("نموذج التواصل")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("whatsapp")}
                className="flex items-center gap-3 text-stone transition-colors hover:text-wood-2"
              >
                <span className="text-wood-2">واتساب:</span>
                <span className="num font-semibold">{site.phone}</span>
              </a>
            </div>
          </Reveal>
        )}

        <Reveal delay={compact ? 0 : 120}>
          <form
            onSubmit={onSubmit}
            className={
              compact
                ? "space-y-3"
                : "rounded-[4px_36px_36px_4px] border-s-4 border-wood-2 bg-ink-2 p-7 md:p-9"
            }
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className={compact ? "space-y-3" : "space-y-4"}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[13px] text-stone">
                  الاسم
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="الاسم بالكامل"
                  className="w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-[15px] text-paper placeholder:text-stone-2/50 outline-none focus:border-wood-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-[13px] text-stone">
                  رقم الموبايل
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  autoComplete="tel"
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className="w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-start text-[15px] text-paper placeholder:text-stone-2/50 outline-none focus:border-wood-2"
                />
              </div>

              <div>
                <label htmlFor="unit" className="mb-1.5 block text-[13px] text-stone">
                  نوع الوحدة المطلوبة
                </label>
                <select
                  id="unit"
                  name="unit"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-[15px] text-paper outline-none focus:border-wood-2"
                >
                  <option value="">غير محدد بعد</option>
                  {units.map((u) => (
                    <option key={u.id} value={u.title}>
                      {u.title}
                    </option>
                  ))}
                </select>
              </div>

              {!compact && (
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[13px] text-stone"
                  >
                    ملاحظات (اختياري)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="المساحة أو الميزانية المطلوبة"
                    className="w-full resize-none rounded-xl border border-white/15 bg-ink px-4 py-3 text-[15px] text-paper placeholder:text-stone-2/50 outline-none focus:border-wood-2"
                  />
                </div>
              )}
            </div>

            {error && (
              <p role="alert" className="mt-3 text-[13px] text-[#ff9d8a]">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full rounded-full bg-wood-2 py-3.5 text-[15px] font-bold text-ink transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? "جارٍ الإرسال…" : "أرسل بياناتي"}
            </button>

            <p className="mt-3 text-[11.5px] leading-relaxed text-stone-2">
              بإرسال بياناتك أنت توافق على تواصل فريق المبيعات معك بخصوص هذا
              المشروع. لن تتم مشاركة بياناتك مع أطراف أخرى — راجع{" "}
              <a href="/privacy" className="underline">
                سياسة الخصوصية
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
