/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/tailwind",
      "resend",
    ],
  },
};

module.exports = nextConfig;
