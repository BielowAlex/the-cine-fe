/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname: 'thecine.vercel.app'}, {hostname:"image.tmdb.org"}, {hostname:"t3.ftcdn.net"}]
    }
};

export default nextConfig;
