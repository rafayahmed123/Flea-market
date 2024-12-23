import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PromoBanner from "./components/PromoBanner";
import CustomerReviews from "./components/CustomerReviews";
import ContactAndMap from "./components/ContactAndMap";
import WhyBeVendor from "./components/WhyBeVendor";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import FeaturesAndPress from "./components/FeaturesAndPress";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <CallToAction />
      <Features />
      <Hero />

      {/* <PromoBanner /> */}
      <WhyBeVendor />

      <CustomerReviews />
      <ContactAndMap />
      <FeaturesAndPress />
      <Footer />
    </main>
  );
}
