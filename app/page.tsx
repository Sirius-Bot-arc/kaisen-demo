import Link from "next/link";
import Core from "@/components/Core";
import Operator from "@/components/Operator";

export default function Home() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20">
      <div>
        <p className="font-display text-sm tracking-[0.25em] text-ember">KAISEN ARCANE SYSTEMS</p>
        <p className="mt-1 text-xs tracking-[0.3em] text-mist">ARCANE CYBER DEFENSE DIVISION</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">CURSE THE THREAT.<br />PROTECT THE SYSTEM.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
          Kaisen Arcane Systems develops advanced digital defense infrastructure for organizations operating in high-risk environments.
        </p>
        <p className="mt-3 font-display tracking-widest text-arc">MASTER THE CURSE. PROTECT THE SYSTEM.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/defense-systems" className="btn-primary">Explore Systems</Link>
          <Link href="/security" className="btn-ghost">View Security Architecture</Link>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[400px]">
        <div className="absolute inset-0 opacity-70"><Core /></div>
        <div className="relative"><Operator /></div>
      </div>
    </section>
  );
}
