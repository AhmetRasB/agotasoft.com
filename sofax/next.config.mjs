/** @type {import('next').NextConfig} */
const nextConfig = {
    // Azure Static Web Apps için optimize edildi
    output: "export",
    trailingSlash: true,
    
    // Görsel optimizasyonu - Azure'de çalışır
    images: {
      unoptimized: true,
      loader: 'custom',
      loaderFile: './imageLoader.js'
    },
    
    // Azure için asset prefix (CDN desteği)
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    
    // Strict mode
    reactStrictMode: true,
    
    // Performance optimizasyonları
    swcMinify: true,
    
    // Azure Static Web Apps routing
    experimental: {
      appDir: true
    }
  };
  
  export default nextConfig;
  