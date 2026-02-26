import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import Services from "@/app/components/Services";
import Gallery from "@/app/components/Gallery";
import WhyUs from "@/app/components/WhyUs";
import ServiceArea from "@/app/components/ServiceArea";
import Testimonials from "@/app/components/Testimonials";
import QuoteForm from "@/app/components/QuoteForm";
import Footer from "@/app/components/Footer";
import { Developer } from "@/app/components/developer/Developer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <WhyUs />
        <ServiceArea />
        <Testimonials />
        <section id="quote" className="bg-surface px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get Your Free Estimate
            </h2>
            <p className="mb-10 text-center text-gray-600">
              Fill out the form and we&apos;ll get back to you within a few hours.
            </p>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Developer />
    </>
  );
}
