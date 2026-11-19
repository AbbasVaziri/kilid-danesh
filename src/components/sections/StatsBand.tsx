import { locations } from "@/lib/locations";
import { serviceCards } from "@/lib/services";
import { toFa } from "@/lib/site";

const stats = [
  { value: "۲۴/۷", label: "پاسخگویی شبانه‌روزی" },
  { value: toFa(locations.length), label: "منطقه تحت پوشش" },
  { value: toFa(serviceCards.length), label: "خدمت تخصصی" },
];

export default function StatsBand() {
  return (
    <section className="bg-brand py-14">
      <dl className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-center gap-4">
            <dd className="text-5xl font-light text-ink">{s.value}</dd>
            <dt className="max-w-[7rem] text-sm leading-6 font-extrabold text-ink">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
