import PageHeader from "@/components/PageHeader";
import LoginForm from "@/components/LoginForm";

export const metadata = { title: "Operator Login | Kaisen Arcane Systems" };

export default function Login() {
  return (
    <>
      <PageHeader title="Enter the Domain" intro="Visual demo only. No authentication exists and no credentials are processed." />
      <section className="mx-auto max-w-md px-5 pb-24"><LoginForm /></section>
    </>
  );
}
