/** @type {import('next').NextConfig} */
export default {
  transpilePackages: [
    "@repo/ui",
    // "@repo/test-pkg"
  ],
  experimental: {
    esmExternals: "loose",
  },
};
