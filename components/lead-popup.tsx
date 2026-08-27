"use client";

import { useEffect, useState } from "react";
import ContactForm from "./contact-form";

const KEY = "walkn_popup_seen";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      sessionStorage.setItem(KEY, "1");
      setOpen(true);
      cleanup();
    };

    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= 0.55) fire();
    };

    const timer = window.setTimeout(fire, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="اطلب الأسعار"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="relative max-h-[92svh] w-full max-w-[440px] overflow-y-auto rounded-[4px_32px_32px_4px] border-s-4 border-wood-2 bg-ink-2 p-7 text-paper">
        <button
          onClick={() => setOpen(false)}
          aria-label="إغلاق"
          className="absolute end-4 top-4 text-[22px] leading-none text-stone-2 hover:text-paper"
        >
          ×
        </button>
        <p className="eyebrow">Price List</p>
        <h2 className="mt-2 text-[21px] font-bold">
          استلم جدول الأسعار والمساحات المتاحة
        </h2>
        <p className="mt-2 text-[13.5px] leading-relaxed text-stone-2">
          اترك رقمك ونرسل لك الوحدات المتاحة حالياً وجدول السداد خلال ساعة عمل.
        </p>
        <div className="mt-5">
          <ContactForm compact />
        </div>
      </div>
    </div>
  );
}
