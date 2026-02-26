import { HOW_IT_WORKS } from "@/app/constants";

export default function Services() {
  return (
    <section id="services" className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-600">
          Simple, fast, and mess-free. Most single-stump jobs are done in under
          an hour.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map(({ step, title, desc }) => (
            <div key={step} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl font-black text-primary-light">
                {step}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
              <p className="leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-primary p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold">Have multiple stumps?</h3>
            <p className="mt-1 text-primary-light">
              We offer multi-stump discounts — the more you have, the more you
              save.
            </p>
          </div>
          <a
            href="#quote"
            className="shrink-0 rounded-full bg-accent px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            Get a Discount Quote
          </a>
        </div>
      </div>
    </section>
  );
}
