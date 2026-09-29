import Operator from "./Operator";

export default function OperatorPanel() {
  return (
    <div className="panel holo grid items-center gap-8 p-6 md:grid-cols-[340px_1fr]">
      <Operator />
      <div>
        <p className="font-display text-sm tracking-[0.25em] text-ember">FIELD OPERATOR</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white">YUJI ITADORI</h2>
        <p className="mt-1 font-display tracking-widest text-arc">CURSE RESPONSE SPECIALIST</p>
        <dl className="mt-6 space-y-3 text-mist">
          <div className="flex items-center gap-3"><dt className="w-20 text-sm">Status</dt><dd className="flex items-center gap-2 text-white"><span className="dot dot-ok" />ACTIVE</dd></div>
          <div className="flex gap-3"><dt className="w-20 text-sm">Mission</dt><dd className="text-white">Protect critical systems from emerging threats.</dd></div>
        </dl>
        <p className="mt-6 text-xs text-mist">Fictional, anime-inspired demo content. Not an employee or endorsement of any real company.</p>
      </div>
    </div>
  );
}
