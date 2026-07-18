import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/Satvik_Kaushal.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=Satvik_Kaushal.pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
