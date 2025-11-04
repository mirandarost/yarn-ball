import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://images4-a.ravelrycache.com/uploads/**'),
      new URL('https://images4-b.ravelrycache.com/uploads/**'),
      new URL('https://images4-c.ravelrycache.com/uploads/**'),
      new URL('https://images4-d.ravelrycache.com/uploads/**'),
      new URL('https://images4-e.ravelrycache.com/uploads/**'),
      new URL('https://images4-f.ravelrycache.com/uploads/**'),
      new URL('https://images4-g.ravelrycache.com/uploads/**'),
      new URL('https://images4-h.ravelrycache.com/uploads/**'),
      new URL('https://farm66.staticflickr.com/**'),
    ],
  },
};

export default nextConfig;
