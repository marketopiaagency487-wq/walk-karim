import Header from "@/components/header";
import Hero from "@/components/hero";
import Units from "@/components/units";
import Location from "@/components/location";
import Payment from "@/components/payment";
import Gallery from "@/components/gallery";
import Amenities from "@/components/amenities";
import Developer from "@/components/developer";
import Faq from "@/components/faq";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import FloatingCta from "@/components/floating-cta";
import LeadPopup from "@/components/lead-popup";
import CookieConsent from "@/components/cookie-consent";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Units />
        <Location />
        <Payment />
        <Gallery />
        <Amenities />
        <Developer />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCta />
      <LeadPopup />
      <CookieConsent />
    </>
  );
}
