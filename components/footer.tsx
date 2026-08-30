import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-10 pt-14 text-paper">
      <div className="wrap grid gap-10 md:grid-cols-3">
        <div>
          <p
            className="text-[24px] font-bold tracking-[-.03em]"
            style={{ fontFamily: "var(--font-latin)" }}
          >
            WALK&apos;N
          </p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-stone-2">
            مول ووك إن — المحور المركزي، الحي الأول، السادس من أكتوبر. تطوير{" "}
            {site.developer}.
          </p>
        </div>

        <div>
          <p className="text-[14px] font-semibold text-wood-2">تواصل معنا</p>
          <ul className="mt-3 space-y-2 text-[13.5px] text-stone">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-wood-2">
                هاتف: <span className="num">{site.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={waLink("الفوتر")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wood-2"
              >
                واتساب: <span className="num">{site.whatsappDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-wood-2">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[14px] font-semibold text-wood-2">روابط</p>
          <ul className="mt-3 space-y-2 text-[13.5px] text-stone">
            <li>
              <a href="/about" className="hover:text-wood-2">
                من نحن
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-wood-2">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:text-wood-2">
                إخلاء المسؤولية
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-10 border-t border-white/10 pt-6">
        <p className="text-[12px] leading-relaxed text-stone-2">
          هذا الموقع تابع لـ <strong className="text-stone">{site.agency}</strong>{" "}
          — وسيط عقاري مستقل ومسوّق معتمد للمشروع، ولسنا المطور العقاري ولا نمثل
          الشركة المطورة قانونياً. جميع الأسعار والمساحات والمواصفات استرشادية
          وقابلة للتغيير دون إشعار، ولا تُعد عرضاً أو التزاماً تعاقدياً. الصور
          المعروضة مناظير دعائية صادرة عن المطور وقد تختلف عن التنفيذ الفعلي.
          يُعتمد فقط جدول الأسعار وكراسة الشروط الرسمية الصادرة من المطور وقت
          التعاقد.
        </p>
        <p className="mt-4 text-[12px] text-stone-2">
          © {new Date().getFullYear()} {site.agency}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
