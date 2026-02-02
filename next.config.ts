import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://accounts.google.com https://apis.google.com https://connect.facebook.net https://va.vercel-scripts.com https://www.facebook.com https://m.facebook.com https://translate.google.com https://translate.googleapis.com translate.google.com www.gstatic.com translate-pa.googleapis.com",

      "style-src 'self' 'unsafe-inline' https://accounts.google.com https://fonts.googleapis.com https://translate.googleapis.com https://www.gstatic.com",

      "img-src * blob: data: https://*.googleusercontent.com https://storage.googleapis.com https://www.facebook.com https://platform-lookaside.fbsbx.com https://graph.facebook.com https://translate.googleapis.com https://translate.google.com",

      "media-src 'self'",

      "connect-src * https://accounts.google.com https://apis.google.com https://graph.facebook.com https://www.facebook.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://translate.googleapis.com",

      "font-src 'self' https://fonts.gstatic.com data:",

      "frame-src 'self' https://accounts.google.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://www.facebook.com https://m.facebook.com https://staticxx.facebook.com https://translate.google.com https://translate.googleapis.com",
    ].join("; "),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: [
      "camera=(),",
      "microphone=(),",
      "geolocation=(),",
      "payment=()",
    ].join(" "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
