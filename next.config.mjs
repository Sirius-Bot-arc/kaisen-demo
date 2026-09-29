/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Intentionally left on: exposes "X-Powered-By: Next.js" (harmless disclosure).
  poweredByHeader: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Intentional gaps: no CSP, no Permissions-Policy, no X-Content-Type-Options.
          // Intentionally weak Referrer-Policy (harmless demo finding).
          { key: "Referrer-Policy", value: "unsafe-url" },
          // Harmless technology disclosure.
          { key: "X-Demo-Stack", value: "Next.js 14 / React 18 / Tailwind 3 (demo)" },
        ],
      },
      {
        // Harmless demo cookie on page requests: fixed dummy value, no Secure/HttpOnly/SameSite.
        source: "/((?!_next|api|health).*)",
        headers: [{ key: "Set-Cookie", value: "ka_demo_pref=demo-value; Path=/" }],
      },
    ];
  },
};
export default nextConfig;
