import { TESTIMONIALS, STARS } from "@/app/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-dark px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-300">
          Over 90% of our new customers come from referrals and Google reviews.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map(({ name, location, text }) => (
            <div
              key={name}
              className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm"
            >
              <div className="text-xl text-yellow-400">{STARS}</div>
              <p className="mt-4 leading-relaxed text-gray-200">"{text}"</p>
              <div className="mt-5 border-t border-white/20 pt-4">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-primary-light">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
