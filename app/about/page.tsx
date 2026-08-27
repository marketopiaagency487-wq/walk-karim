import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "من نحن — WALK'N Mall أكتوبر",
  description: "تعرّف على فريق التسويق العقاري المسؤول عن عرض مشروع WALK'N Mall أكتوبر.",
};

export default function About() {
  return (
    <main className="bg-paper">
      <div className="wrap max-w-[760px] py-24">
        <p className="eyebrow">About</p>
        <h1 className="mt-3 text-[30px] font-bold">من نحن</h1>
        <div className="mt-6 space-y-5 text-[15px] leading-[2] text-ink/75">
          <p>
            {site.agency} شركة تسويق عقاري تعمل كوسيط مستقل بين العملاء
            والمطورين العقاريين في السوق المصري. نعرض المشروعات المتاحة، نوضح
            الفروق بينها بشكل محايد، ونرافق العميل حتى إتمام التعاقد مع المطور
            مباشرة.
          </p>
          <p>
            نحن لسنا المطور العقاري لمشروع WALK&apos;N Mall أكتوبر. المطور هو{" "}
            {site.developer}، والتعاقد يتم مع الشركة المطورة مباشرة وفق كراسة
            الشروط الرسمية الصادرة عنها.
          </p>
          <p>
            خدماتنا للعميل مجانية بالكامل: عرض الوحدات المتاحة، تنظيم المعاينات،
            وشرح أنظمة السداد. لا نتقاضى أي رسوم من المشتري.
          </p>
          <p>
            للتواصل: <span className="num font-semibold">{site.phone}</span> —{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
          </p>
        </div>
        <a href="/" className="mt-10 inline-block text-[14px] text-wood underline">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </main>
  );
}
