/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set a custom output directory (not 'public')
    distDir: 'out',
  
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Optionally add other settings
    swcMinify: true,  // Enable SWC minification for faster builds
  
    // Add other configurations like i18n, images, etc., if needed
  };
  
  export default nextConfig;
  