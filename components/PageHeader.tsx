export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:pt-24">
      <h1 className="font-display text-4xl font-bold tracking-wide text-white md:text-6xl">{title}</h1>
      <div className="mt-4 h-px w-40 bg-gradient-to-r from-ember to-transparent" />
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{intro}</p>
    </section>
  );
}
