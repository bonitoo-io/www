// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bonitoo.io" }],
        destination: "https://www.bonitoo.io/:path*",
        permanent: true, // pošle 308
      },
    ];
  },
};

export default nextConfig;