import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { pillars } from "@/lib/data";

export const metadata = { title: "Security | Kaisen Arcane Systems" };
const dot = { ok: "dot-ok", watch: "dot-watch", alert: "dot-alert" } as const;
const bars: [string, number][] = [["Barrier coverage", 94], ["Patch compliance", 88], ["Identity assurance", 91], ["Backup verification", 96]];

export default function Security() {
  return (
    <>
      <PageHeader title="Security Architecture" intro="Kaisen Arcane is a cybersecurity and technology organization. This dashboard shows the state of each defense area (demo data)." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <article key={p.title} className="panel holo p-6">
            <div className="flex items-center justify-between">
              <span className="text-arc"><Icon name={p.icon} /></span>
              <span className="flex items-center gap-2 text-xs text-mist"><span className={`dot ${dot[p.tone]}`} />{p.status}</span>
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold text-white">{p.title}</h2>
            <p className="mt-2 text-mist">{p.text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-10">
        <div className="panel space-y-4 p-6">
          <h2 className="font-display text-xl font-semibold text-white">Coverage indicators</h2>
          {bars.map(([l, v]) => (
            <div key={l}>
              <div className="mb-1 flex justify-between text-sm text-mist"><span>{l}</span><span>{v}%</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-steel"><div className="h-full rounded-full bg-gradient-to-r from-arc to-volt" style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
