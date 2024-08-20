/** @type {import('next').NextConfig} */
export default {
  transpilePackages: [
    "@repo/ui",
    // if enabling this, change "imports"/"exports" in package.json
    // "@repo/test-pkg"
  ],
  experimental: {
    esmExternals: "loose",
  },
};
