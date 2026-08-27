"use client";

import { useEffect, useState } from "react";

const KEY = "walkn_cookies";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-[72px] inset-x-3 z-50 rounded-2xl border border-white/10 bg-ink-2 p-4 text-paper shadow-xl md:bottom-6 md:start-auto md:end-6 md:max-w-[380px]">
      <p className="text-[13px] leading-relaxed text-stone">
        نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس أداء الحملات الإعلانية.
        بمواصلة التصفح أنت توافق على ذلك.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => {
            localStorage.setItem(KEY, "1");
            setShow(false);
          }}
          className="rounded-full bg-wood-2 px-5 py-2 text-[13px] font-bold text-ink"
        >
          موافق
        </button>
        <a
          href="/privacy"
          className="rounded-full border border-white/20 px-5 py-2 text-[13px] text-stone"
        >
          التفاصيل
        </a>
      </div>
    </div>
  );
}
