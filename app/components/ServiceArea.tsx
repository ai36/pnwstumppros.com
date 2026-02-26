import { OREGON_CITIES, WASHINGTON_CITIES } from "@/app/constants";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Service Area
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          We serve Portland, OR, Vancouver, WA, and the surrounding communities
          on both sides of the Columbia River.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-lg font-bold text-primary">Oregon</h3>
            <ul className="grid grid-cols-2 gap-2">
              {OREGON_CITIES.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-lg font-bold text-primary">Washington</h3>
            <ul className="grid grid-cols-2 gap-2">
              {WASHINGTON_CITIES.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Not sure if we cover your area? Drop your ZIP in the form below or
          give us a call.
        </p>
      </div>
    </section>
  );
}
