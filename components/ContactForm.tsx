"use client";
import { useState } from "react";

const fields = [["name", "Name", "text"], ["email", "Email", "email"], ["org", "Organization", "text"]];

export default function ContactForm() {
  const [msg, setMsg] = useState("");
  return (
    <form className="panel space-y-5 p-6" onSubmit={(e) => { e.preventDefault(); setMsg("Demo form. Nothing was sent or stored."); }}>
      {fields.map(([id, label, type]) => (
        <div key={id}>
          <label htmlFor={id} className="mb-1 block text-sm text-mist">{label}</label>
          <input id={id} name={id} type={type} className="field" />
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-mist">Message</label>
        <textarea id="message" name="message" rows={5} className="field" />
      </div>
      <button type="submit" className="btn-primary">Send message</button>
      {msg && <p role="status" className="text-sm text-arc">{msg}</p>}
    </form>
  );
}
