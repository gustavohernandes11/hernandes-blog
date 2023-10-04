/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,

    images: {
        domains: ["res.cloudinary.com"],
        unoptimized: true,
        loader: "default",
    },
};

module.exports = nextConfig;
