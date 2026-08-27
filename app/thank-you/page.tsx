import type { Metadata } from "next";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "تم استلام بياناتك — WALK'N Mall أكتوبر",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="flex min-h-[100svh] items-center bg-ink text-paper">
      <div className="wrap max-w-[620px] text-center">
        <p className="eyebrow">Received</p>
        <h1 className="mt-4 text-[30px] font-bold md:text-[40px]">
          وصلتنا بياناتك بنجاح
        </h1>
        <p className="mt-4 text-[15px] leading-[2] text-stone">
          سيتواصل معك أحد مستشاري المبيعات خلال ساعة عمل لإرسال جدول الأسعار
          والمساحات المتاحة وترتيب موعد المعاينة. لو تحب تستعجل الرد، كلمنا
          مباشرة.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${site.phone}`}
            className="rounded-full bg-wood-2 px-8 py-3.5 text-[15px] font-bold text-ink"
          >
            اتصل الآن <span className="num">{site.phone}</span>
          </a>
          <a
            href={waLink("صفحة الشكر")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-stone/40 px-8 py-3.5 text-[15px] font-semibold text-paper"
          >
            تواصل واتساب
          </a>
        </div>
        <a href="/" className="mt-8 inline-block text-[13.5px] text-stone-2 underline">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </main>
  );
}
