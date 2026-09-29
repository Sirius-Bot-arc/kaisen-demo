import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { systems } from "@/lib/data";

export const metadata = { title: "Defense Systems | Kaisen Arcane Systems" };
const dot = { Operational: "dot-ok", Monitoring: "dot-watch", Maintenance: "dot-maint" } as const;

export default function Systems() {
  return (
    <>
      <PageHeader title="Defense Systems" intro="Six fictional cybersecurity systems that make up the Kaisen Arcane defense network." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((s) => (
          <article key={s.name} className="panel holo p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-lg border border-arc/30 p-2 text-arc"><Icon name={s.icon} /></span>
              <span className="flex items-center gap-2 text-sm text-mist"><span className={`dot ${dot[s.status]}`} />{s.status}</span>
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-white">{s.name}</h2>
            <p className="mt-2 text-mist">{s.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
