import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      { hostname: "ak1944.pl" },
      { hostname: "wp.ak1944.pl" },
      { hostname: "localhost", port: "3000" },
    ],
  },
};

export default withPayload(withPayload(withPayload(withPayload(nextConfig))));
