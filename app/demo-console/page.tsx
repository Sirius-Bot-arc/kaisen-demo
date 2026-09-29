import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Demo Console | Kaisen Arcane Systems" };
const tiles: [string, string, string][] = [
  ["Cursed energy status", "ACTIVE", "dot-ok"],
  ["Threat signal", "LOW", "dot-ok"],
  ["Domain status", "STABLE", "dot-watch"],
  ["Network nodes", "184", "dot-watch"],
];

export default function DemoConsole() {
  return (
    <>
      <PageHeader title="Demo Console" intro="Fictional security console. All values are visual demo data with no real functionality." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map(([l, v, d]) => (
          <div key={l} className="panel holo p-6">
            <div className="flex items-center gap-2 text-sm text-mist"><span className={`dot ${d}`} />{l}</div>
            <div className="mt-3 font-display text-3xl font-bold text-white">{v}</div>
          </div>
        ))}
        <div className="panel holo p-6">
          <div className="text-sm text-mist">Barrier integrity</div>
          <div className="mt-3 font-display text-3xl font-bold text-white">87%</div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-steel"><div className="h-full rounded-full bg-gradient-to-r from-arc to-ember" style={{ width: "87%" }} /></div>
        </div>
      </section>
    </>
  );
}
