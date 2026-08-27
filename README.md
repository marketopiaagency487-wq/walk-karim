# WALK'N Mall October — Landing Page

لاندينج بيدج لمشروع **مول ووك إن أكتوبر** من شركة دبي للتطوير العقاري.
Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript · عربي RTL · Static export ready.

---

## التشغيل محلياً

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # إنتاج
```

---

## ⚠️ قبل الرفع — 3 قيم لازم تتغير

كلها في ملف واحد: **`lib/site.ts`**

| المتغير | القيمة الحالية | المطلوب |
|---|---|---|
| `web3formsKey` | `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` | مفتاح Web3Forms من web3forms.com |
| `gtagId` | `AW-XXXXXXXXX` | معرّف Google Ads أو GA4 |
| `conversions.form / .call / .whatsapp` | `AW-XXXXXXXXX/REPLACE_...` | conversion labels من حساب الإعلانات |
| `url` | `https://walkn-october.com` | الدومين الفعلي بعد الربط |

الأرقام والإيميل موجودين في نفس الملف (`phone`, `whatsapp`, `email`).

---

## هيكل المشروع

```
app/
  layout.tsx        RTL + الخطوط + Metadata + JSON-LD + gtag
  page.tsx          تجميع الأقسام
  thank-you/        صفحة الشكر (noindex) — وجهة تتبع التحويل
  about/ privacy/ disclaimer/   صفحات الامتثال لسياسة Google Ads
  sitemap.ts robots.ts
components/
  header · hero · units · location · payment · gallery
  amenities · developer · faq · contact-form · footer
  floating-cta · lead-popup · cookie-consent · reveal
lib/
  site.ts           ← كل البيانات: الأسعار، المساحات، الأسئلة، الشركاء
  track.ts          دوال تتبع التحويلات
public/
  images/           9 مناظير محوّلة إلى WebP + poster الفيديو
  video/            walkn-tour.mp4
```

**كل الأسعار والمساحات والنصوص في `lib/site.ts`** — أي تحديث سعري يتم من ملف واحد فقط بدون لمس المكوّنات.

---

## نقاط التحويل (Conversion points)

| النقطة | المكان | التتبع |
|---|---|---|
| اتصال | الهيدر · الزر العائم · الشريط السفلي · الفوتر | `trackConversion("call")` |
| واتساب | الهيرو · كل كارت وحدة · الحاسبة · الزر العائم | `trackConversion("whatsapp")` |
| فورم | القسم الرئيسي + البوب أب | `trackConversion("form")` ثم `/thank-you` |

رسالة الواتساب تتغير حسب مصدر الضغطة (اسم الوحدة / الحاسبة / الفوتر) عشان تعرف مصدر الليد من نص الرسالة.

البوب أب يظهر مرة واحدة لكل جلسة عند **55% سكرول أو 16 ثانية** (`sessionStorage`).

---

## الامتثال لسياسات Google Ads

- إفصاح واضح في الفوتر: وسيط عقاري مستقل — لسنا المطور.
- صفحات About / Privacy / Disclaimer مربوطة في الفوتر.
- تنويه "أسعار استرشادية وقابلة للتغيير — ليست عرضاً تعاقدياً" أسفل جدول الأسعار وفي الفوتر.
- بانر كوكيز + نص موافقة أسفل الفورم.
- `/thank-you` مستثناة من الفهرسة في `robots.ts`.

---

## الرفع على Vercel

```bash
npx vercel --prod
```
أو ارفع المجلد على GitHub واربطه بـ Vercel — الإعدادات الافتراضية تشتغل مباشرة.

كل الصفحات تُبنى Static (○) — مفيش API routes ولا server functions.

---

## ملاحظات على المحتوى

- مواصفات التشطيب (عيادات ووحدات فندقية Full Finish / محلات ومكاتب Core & Shell) مأخوذة من مصادر منشورة — يُفضّل تأكيدها من كراسة الشروط الرسمية قبل النشر.
- الحاسبة تعرض قسط ربع سنوي محسوب على 40 قسط للتوضيح فقط، مع تنويه بأن الجدول الرسمي هو المعتمد.
- بيانات الشركاء والمطور مأخوذة من البيان الصحفي الرسمي لإطلاق المشروع (يوليو 2026).
