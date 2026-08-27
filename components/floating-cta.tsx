"use client";

import { site, waLink } from "@/lib/site";
import { trackConversion } from "@/lib/track";

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.32-1.94 1.36-.5.06-1.12.08-1.8-.12-.42-.14-.96-.32-1.64-.62-2.9-1.26-4.78-4.18-4.92-4.38-.14-.2-1.18-1.56-1.18-2.98s.74-2.12 1-2.4c.26-.28.58-.36.76-.36h.54c.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.06.14.1.3.02.48-.08.2-.12.32-.24.48l-.36.42c-.12.12-.24.26-.1.5.14.24.62 1.02 1.32 1.66.9.8 1.66 1.06 1.9 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.6-.18 1.28Z" />
    </svg>
  );
}

export default function FloatingCta() {
  return (
    <>
      {/* أزرار عائمة — سطح المكتب */}
      <div className="fixed bottom-6 start-5 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={waLink("زر عائم")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp")}
          aria-label="تواصل عبر واتساب"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <WaIcon className="h-7 w-7" />
        </a>
        <a
          href={`tel:${site.phone}`}
          onClick={() => trackConversion("call")}
          aria-label="اتصل بنا"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-wood text-paper shadow-lg transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
          </svg>
        </a>
      </div>

      {/* شريط سفلي — الموبايل */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-ink md:hidden">
        <a
          href={`tel:${site.phone}`}
          onClick={() => trackConversion("call")}
          className="flex items-center justify-center gap-2 py-4 text-[14.5px] font-semibold text-paper"
        >
          اتصل الآن
        </a>
        <a
          href={waLink("الشريط السفلي")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp")}
          className="flex items-center justify-center gap-2 bg-[#25D366] py-4 text-[14.5px] font-bold text-white"
        >
          <WaIcon className="h-5 w-5" />
          واتساب
        </a>
      </div>
    </>
  );
}
