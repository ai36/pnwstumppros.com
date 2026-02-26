import {
  StarIcon,
  MapPinIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import { WHY_US_REASONS } from "@/app/constants";

const iconMap: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  star: StarIcon,
  mapPin: MapPinIcon,
  banknotes: BanknotesIcon,
  calendar: CalendarDaysIcon,
  sparkles: SparklesIcon,
  wrench: WrenchScrewdriverIcon,
};

export default function WhyUs() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Homeowners Choose Us
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-600">
          We've been grinding stumps across the Portland-Vancouver area for
          years. Here's what makes us different.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US_REASONS.map(({ iconName, title, desc }) => {
            const Icon = iconMap[iconName];
            return (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 p-7 shadow-sm"
              >
                {Icon ? (
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                ) : null}
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {title}
                </h3>
                <p className="leading-relaxed text-gray-600">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
