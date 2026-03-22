import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "ak1944.pl" }, { hostname: "wp.ak1944.pl" }],
  },
};

export default withPayload(withPayload(withPayload(withPayload(nextConfig))));
