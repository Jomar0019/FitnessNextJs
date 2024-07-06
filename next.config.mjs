/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:"images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "play.google.com"
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            }
        ]
    }
};

export default nextConfig;
