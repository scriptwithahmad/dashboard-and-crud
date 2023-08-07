/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI:
      "mongodb+srv://ahmed:ahmed@edify.9anuaq1.mongodb.net/reviews?retryWrites=true&w=majority",
      NEXTAUTH_SECRET: "CodewithAhmad"
  },
}

module.exports = nextConfig
