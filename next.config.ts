import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://images4-a.ravelrycache.com/**'),
      new URL('https://images4-b.ravelrycache.com/**'),
      new URL('https://images4-c.ravelrycache.com/**'),
      new URL('https://images4-d.ravelrycache.com/**'),
      new URL('https://images4-e.ravelrycache.com/**'),
      new URL('https://images4-f.ravelrycache.com/**'),
      new URL('https://images4-g.ravelrycache.com/**'),
      new URL('https://images4-h.ravelrycache.com/**'),
      new URL('https://farm66.staticflickr.com/**'),
    ],
  },
};

export default nextConfig;
