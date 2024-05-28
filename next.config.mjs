/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://hgindtdjagzcllnqcuwj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/special/**",
      },
    ],
  },
}

export default nextConfig
