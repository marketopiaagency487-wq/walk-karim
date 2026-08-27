"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { trackConversion } from "@/lib/track";

const nav = [
  { href: "#units", label: "الوحدات والأسعار" },
  { href: "#location", label: "الموقع" },
  { href: "#payment", label: "نظام السداد" },
  { href: "#gallery", label: "الصور" },
  { href: "#developer", label: "المطور" },
  { href: "#contact", label: "تواصل" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(216,169,103,.25)]"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between md:h-[80px]">
        <a href="#top" className="flex items-baseline gap-2 text-paper">
          <span
            className="text-[22px] font-bold tracking-[-.03em] md:text-[26px]"
            style={{ fontFamily: "var(--font-latin)" }}
          >
            WALK&apos;N
          </span>
          <span className="hidden text-[11px] text-stone-2 sm:block">
            أكتوبر
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] text-stone transition-colors hover:text-wood-2"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            onClick={() => trackConversion("call")}
            className="hidden rounded-full bg-wood px-5 py-2.5 text-[14px] font-semibold text-paper transition-colors hover:bg-wood-2 hover:text-ink sm:block"
          >
            اتصل الآن <span className="num">{site.phone}</span>
          </a>
          <button
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/30 text-paper lg:hidden"
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute inset-x-0 top-0 h-[2px] bg-current transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[6px] h-[2px] bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[12px] h-[2px] bg-current transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="wrap flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-[15px] text-stone last:border-0"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
