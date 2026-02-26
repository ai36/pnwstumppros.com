import { TRUST_STATS } from "@/app/constants";

export default function TrustBar() {
  return (
    <div className="bg-surface-alt py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
        {TRUST_STATS.map(({ value, label }) => (
          <div key={value} className="text-center">
            <div className="text-2xl font-extrabold text-primary">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
