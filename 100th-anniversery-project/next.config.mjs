/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: "",
                hostname:"images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
