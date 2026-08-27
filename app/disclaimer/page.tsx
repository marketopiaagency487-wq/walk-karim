import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "إخلاء المسؤولية — WALK'N Mall أكتوبر",
  description: "بيان بطبيعة المعلومات المعروضة على هذا الموقع.",
};

export default function Disclaimer() {
  return (
    <main className="bg-paper">
      <div className="wrap max-w-[760px] py-24">
        <p className="eyebrow">Disclaimer</p>
        <h1 className="mt-3 text-[30px] font-bold">إخلاء المسؤولية</h1>
        <div className="mt-6 space-y-5 text-[15px] leading-[2] text-ink/75">
          <p>
            هذا الموقع صفحة تسويقية تديرها {site.agency} بصفتها وسيطاً عقارياً
            مستقلاً، وليست موقعاً رسمياً لـ {site.developer} ولا تمثلها قانونياً.
          </p>
          <p>
            جميع الأسعار والمساحات وأنظمة السداد المعروضة استرشادية وقابلة
            للتغيير من جانب المطور دون إشعار مسبق، ولا تُعد عرضاً أو إيجاباً أو
            التزاماً تعاقدياً بأي شكل. يُعتمد فقط جدول الأسعار وكراسة الشروط
            الرسمية الصادرة من المطور وقت التعاقد.
          </p>
          <p>
            الصور والمناظير المعروضة أعمال دعائية ثلاثية الأبعاد صادرة عن المطور
            لأغراض التوضيح، وقد تختلف عن التنفيذ الفعلي في التفاصيل والخامات
            والألوان.
          </p>
          <p>
            المحتوى المعروض لا يُعد استشارة استثمارية أو مالية أو قانونية. ننصح
            كل عميل بمراجعة المستندات الرسمية للمشروع والاستعانة بمستشار قانوني
            قبل الشراء.
          </p>
        </div>
        <a href="/" className="mt-10 inline-block text-[14px] text-wood underline">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </main>
  );
}
