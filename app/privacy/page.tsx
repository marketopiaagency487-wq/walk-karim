import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — WALK'N Mall أكتوبر",
  description: "كيف نجمع بياناتك ونستخدمها ونحميها.",
};

const blocks = [
  {
    h: "البيانات التي نجمعها",
    p: "نجمع الاسم ورقم الموبايل ونوع الوحدة المطلوبة وأي ملاحظات تكتبها في نموذج التواصل. كما نجمع بيانات تصفح غير شخصية عبر Google Analytics وGoogle Ads مثل مصدر الزيارة والصفحات التي تمت مشاهدتها.",
  },
  {
    h: "كيف نستخدم البيانات",
    p: "نستخدم بياناتك للتواصل معك بخصوص استفسارك عن هذا المشروع فقط، ولإرسال الأسعار والمساحات المتاحة وترتيب موعد المعاينة، ولقياس أداء حملاتنا الإعلانية.",
  },
  {
    h: "مشاركة البيانات",
    p: "قد تتم مشاركة بياناتك مع الشركة المطورة للمشروع بغرض إتمام إجراءات الحجز فقط. لا نبيع بياناتك ولا نشاركها مع أي جهة تسويقية أخرى.",
  },
  {
    h: "ملفات تعريف الارتباط",
    p: "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وقياس أداء الإعلانات. يمكنك تعطيلها من إعدادات المتصفح دون التأثير على تصفح الموقع.",
  },
  {
    h: "حقوقك",
    p: "يمكنك في أي وقت طلب الاطلاع على بياناتك أو تعديلها أو حذفها نهائياً من سجلاتنا، أو إيقاف التواصل معك، عبر مراسلتنا على البريد الإلكتروني الموضح أدناه.",
  },
];

export default function Privacy() {
  return (
    <main className="bg-paper">
      <div className="wrap max-w-[760px] py-24">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-3 text-[30px] font-bold">سياسة الخصوصية</h1>
        <div className="mt-8 space-y-8">
          {blocks.map((b) => (
            <section key={b.h}>
              <h2 className="text-[18px] font-bold">{b.h}</h2>
              <p className="mt-2 text-[15px] leading-[2] text-ink/75">{b.p}</p>
            </section>
          ))}
          <p className="text-[14px] text-ink/60">
            للاستفسارات المتعلقة بالخصوصية:{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>{" "}
            — <span className="num">{site.phone}</span>
          </p>
        </div>
        <a href="/" className="mt-10 inline-block text-[14px] text-wood underline">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </main>
  );
}
