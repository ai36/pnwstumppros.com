import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/app/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark px-4 py-20 text-white sm:py-28">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
          Portland, OR · Vancouver, WA · Surrounding Areas
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Stump Grinding Done Right&nbsp;—{" "}
          <span className="text-accent">Fast & Affordable</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
          We grind stumps of any size, clean up the chips, and leave your yard
          looking great. Locally owned and operated.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#quote"
            className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold transition-opacity hover:opacity-90 sm:w-auto"
          >
            Get a Free Quote
          </a>
          <a
            href={PHONE_HREF}
            className="w-full rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-colors hover:bg-white hover:text-primary-dark sm:w-auto"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
