/** @type {import('next').NextConfig} */
const nextConfig = {
    // Change the build output directory
    distDir: 'dist',
  
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Optionally add other settings
    swcMinify: true,  // Enable SWC minification for faster builds
  
    // If you need to set up internationalization (i18n), you can add this:
    // i18n: {
    //   locales: ['en', 'fr'],  // Example: English and French locales
    //   defaultLocale: 'en',
    // },
  
    // Add any other necessary configurations
  };
  
  export default nextConfig;
  