import Image from "next/image";
import {
  COMPANY_NAME,
  PHONE,
  PHONE_HREF,
  SERVICE_AREA,
  NAV_LINKS,
  BUSINESS_HOURS,
  FOOTER_SERVICES,
} from "@/app/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark px-4 py-12 text-gray-300">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.svg"
            alt={COMPANY_NAME}
            width={206}
            height={28}
          />
          <p className="mt-3 text-sm">{SERVICE_AREA}</p>
          <a
            href={PHONE_HREF}
            className="mt-2 block font-semibold text-white hover:text-white/80"
          >
            {PHONE}
          </a>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-white">Navigate</p>
          <ul className="mt-2 space-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#quote" className="transition-colors hover:text-white">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-2 space-y-2">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-white">Hours</p>
          <ul className="mt-2 space-y-2">
            {BUSINESS_HOURS.map(({ days, hours }) => (
              <li key={days}>
                <span className="text-white">{days}:</span> {hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
