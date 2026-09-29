export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    system: "Kaisen Arcane Defense Network",
    status: "operational",
    mode: "demo",
    components: { barrier: "operational", monitor: "monitoring", access: "maintenance" },
    timestamp: new Date().toISOString(),
  });
}
