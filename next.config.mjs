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
            },{
                protocol: 'https',
                hostname: '1000logos.net'
            }
        ]
    }
};

export default nextConfig;
