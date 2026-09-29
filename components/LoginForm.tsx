"use client";
import { useState } from "react";

export default function LoginForm() {
  const [msg, setMsg] = useState("");
  return (
    <form className="panel space-y-5 p-6" onSubmit={(e) => { e.preventDefault(); setMsg("Demo authentication interface — no credentials are processed."); }}>
      <div>
        <label htmlFor="op" className="mb-1 block text-sm text-mist">Operator ID</label>
        <input id="op" type="text" autoComplete="off" className="field" />
      </div>
      <div>
        <label htmlFor="pw" className="mb-1 block text-sm text-mist">Password</label>
        <input id="pw" type="password" autoComplete="off" className="field" />
      </div>
      <button type="submit" className="btn-primary">ENTER DOMAIN</button>
      {msg && <p role="status" className="text-sm text-arc">{msg}</p>}
    </form>
  );
}
