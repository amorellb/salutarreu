/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compilerOptions: {
    paths: { './lib/*': ['lib/*'] }
  },
}

module.exports = nextConfig
