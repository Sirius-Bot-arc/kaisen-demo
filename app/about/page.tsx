import PageHeader from "@/components/PageHeader";
import OperatorPanel from "@/components/OperatorPanel";
import { stats } from "@/lib/data";

export const metadata = { title: "About | Kaisen Arcane Systems" };

export default function About() {
  return (
    <>
      <PageHeader title="About Kaisen Arcane" intro="Kaisen Arcane Systems develops advanced defensive infrastructure, threat monitoring platforms, identity systems, and resilience technologies for organizations operating in unpredictable digital environments." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel holo p-6">
            <div className="font-display text-4xl font-bold text-arc">{s.value}</div>
            <div className="mt-1 text-mist">{s.label}</div>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-8">
        <p className="mb-6 text-sm text-mist">All figures are fictional demo statistics.</p>
        <OperatorPanel />
      </section>
    </>
  );
}
