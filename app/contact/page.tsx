import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | Kaisen Arcane Systems" };

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" intro="Tell us about your environment. This form is a demo and does not send anything." />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-24 md:grid-cols-[1fr_340px]">
        <ContactForm />
        <aside className="panel h-fit space-y-3 p-6 text-mist">
          <h2 className="font-display text-xl font-semibold text-white">Kaisen Arcane HQ</h2>
          <p>100 Example Avenue<br />Demo City, DC 00000</p>
          <p>contact@kaisen-arcane.example<br />+1 (555) 010-0100</p>
          <p className="text-sm">Fictional contact details.</p>
        </aside>
      </section>
    </>
  );
}
