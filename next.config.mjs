/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lhdsxrgvvpsqn3ot.public.blob.vercel-storage.com",
        },
      ],
    },
};

export default nextConfig;
