/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname: 'thecine.vercel.app'}, {hostname:"image.tmdb.org"}]
    }
};

export default nextConfig;
