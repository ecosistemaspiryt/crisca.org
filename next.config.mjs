/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    i18n: {
        locales: ['es', 'pt', 'it'],
        defaultLocale: 'es',
        localeDetection: false // Disable Next.js routing, rely on client-side
    }
};

export default nextConfig;
