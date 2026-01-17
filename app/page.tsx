import Header from "./components/Header";

export const metadata = {
  title: "Bulk Image Compression API with Custom Sizes | ImageCompressAPI",
  description:
    "Image compress API for developers. Bulk image compression, image resize API, AVIF and WebP image compression with fast CDN delivery.",
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Bulk Image Compression API with Custom Sizes
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Compress, resize, and convert images at scale using an API. Supports AVIF, WebP, JPG, and PNG.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#signup"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View API Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need for fast, reliable image compression
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">📦</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Bulk Image Compression API
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Process hundreds of images simultaneously with our batch compression API
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">📐</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Custom Image Resize API
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Resize images to exact dimensions or maintain aspect ratios with custom sizing
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">🎨</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  AVIF and WebP Image Compression
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Convert and compress images to modern formats like AVIF and WebP for optimal performance
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">⚖️</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Lossy and Lossless Compression
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Choose between lossy compression for smaller files or lossless for maximum quality
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">⚡</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Fast API with CDN Delivery
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Lightning-fast processing with global CDN delivery for instant image access worldwide
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">🔒</div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Privacy-first (auto delete images)
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Images are automatically deleted after processing to ensure your data privacy and security
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate mb-6">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Simple four-step process to optimize your images
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="text-center group">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm group-hover:bg-secondary group-hover:shadow-md transition-all">
                  1
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Upload image or image URL
                </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                  Send your image file directly or provide a URL to fetch the image
                </p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm group-hover:bg-secondary group-hover:shadow-md transition-all">
                  2
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Choose format, size, and compression
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Select output format (AVIF, WebP, JPG, PNG), dimensions, and quality settings
                </p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm group-hover:bg-secondary group-hover:shadow-md transition-all">
                  3
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  API processes images instantly
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Our infrastructure compresses and optimizes your images in milliseconds
                </p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm group-hover:bg-secondary group-hover:shadow-md transition-all">
                  4
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Receive optimized image URLs
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Get CDN-delivered URLs for your compressed images ready to use
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-slate-900 rounded-lg p-8 overflow-x-auto">
                <pre className="text-gray-100 text-base">
                  <code>{`curl -X POST https://api.imagecompressapi.com/v1/compress \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@image.jpg" \\
  -F "format=webp" \\
  -F "width=1200" \\
  -F "quality=80"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* API Features Section */}
        <section className="py-16 sm:py-20 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate mb-6">
                API Features
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Powerful features for all your image optimization needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Bulk uploads
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Upload and process multiple images in a single API call for efficient batch operations
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Custom width & height
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Specify exact dimensions for your images with precise width and height controls
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Aspect ratio control
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Maintain or modify aspect ratios while resizing images to fit your design requirements
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Format conversion
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Convert images between AVIF, WebP, JPG, and PNG formats with automatic optimization
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Quality control
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Adjust compression quality from 1-100 to balance file size and image quality
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  API keys
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Secure authentication with API keys for protected access to your image processing
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Usage tracking
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Monitor your API usage with detailed analytics and real-time usage statistics
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-accent transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">
                  Rate limiting
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Built-in rate limiting ensures fair usage and API stability for all users
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-slate mb-4">
                Use Cases
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Perfect for a wide range of applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  E-commerce Platforms
                </h3>
                <p className="text-sm text-dark-slate">
                  Optimize product images for faster page loads and better user
                  experience
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  Content Management
                </h3>
                <p className="text-sm text-dark-slate">
                  Automatically compress user-uploaded images in CMS and blog
                  platforms
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  Mobile Apps
                </h3>
                <p className="text-sm text-dark-slate">
                  Reduce app size and bandwidth usage with optimized images
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  Social Media Tools
                </h3>
                <p className="text-sm text-dark-slate">
                  Batch process images for social media posts and campaigns
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  Portfolio Websites
                </h3>
                <p className="text-sm text-dark-slate">
                  Showcase high-quality images with minimal file sizes
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-dark-slate mb-2">
                  API Integrations
                </h3>
                <p className="text-sm text-dark-slate">
                  Add image optimization to your existing APIs and services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 sm:py-20 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark-slate mb-4">
                  ImageCompressAPI vs TinyPNG
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  See how we compare to the leading image compression tool
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-light-gray">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-dark-slate">
                          Feature
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-dark-slate">
                          ImageCompressAPI
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-dark-slate">
                          TinyPNG
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          AVIF support
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">No</span>
                        </td>
                      </tr>
                      <tr className="bg-light-gray">
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          Bulk compression
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">Limited</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          Custom image sizes
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">No</span>
                        </td>
                      </tr>
                      <tr className="bg-light-gray">
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          Compression control
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">Limited</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          Transparent pricing
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">Limited</span>
                        </td>
                      </tr>
                      <tr className="bg-light-gray">
                        <td className="px-6 py-4 text-sm text-dark-slate font-medium">
                          API-first design
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-500 font-semibold">Yes</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-gray-400">No</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-slate mb-8 text-center">
                Image Compression API for Developers
              </h2>
              
              <div className="space-y-6 text-slate-700">
                <p className="text-base leading-relaxed">
                  Our <strong className="text-dark-slate">image compress API</strong> provides developers with a powerful, 
                  scalable solution for optimizing images programmatically. Whether you're building a content management system, 
                  e-commerce platform, or mobile application, our API handles image compression seamlessly. The <strong className="text-dark-slate">bulk image compression API</strong> 
                  allows you to process hundreds of images in a single request, making it ideal for batch operations and automated workflows.
                </p>

                <p className="text-base leading-relaxed">
                  Need to adjust image dimensions? Our <strong className="text-dark-slate">image resize API</strong> gives you precise control 
                  over output sizes. You can specify exact dimensions, maintain aspect ratios, or crop images to specific requirements. 
                  When combined with compression, our <strong className="text-dark-slate">image compression and resize API</strong> becomes a complete 
                  solution for all your image optimization needs. This unified approach reduces API calls and simplifies your integration.
                </p>

                <p className="text-base leading-relaxed">
                  Modern web performance demands modern formats. Our <strong className="text-dark-slate">AVIF image compression API</strong> 
                  delivers superior compression ratios compared to traditional formats, often reducing file sizes by 50% or more while 
                  maintaining visual quality. Similarly, our <strong className="text-dark-slate">WebP image compression API</strong> provides 
                  excellent browser compatibility and significant file size reductions. Both formats are automatically optimized for 
                  web delivery, ensuring fast page loads and improved user experience.
                </p>

                <p className="text-base leading-relaxed">
                  For WordPress developers, our <strong className="text-dark-slate">WordPress image compression API</strong> integrates 
                  seamlessly with your existing workflow. Automatically compress uploaded images, optimize media library files, and 
                  reduce storage costs. The API works with any WordPress setup, whether you're using custom themes, popular page builders, 
                  or headless WordPress configurations. With webhook support, you can process images asynchronously without blocking 
                  user uploads.
                </p>

                <p className="text-base leading-relaxed">
                  All our APIs are built with developer experience in mind. Simple REST endpoints, comprehensive documentation, 
                  and SDK support for popular languages make integration straightforward. Whether you're processing user uploads, 
                  optimizing product images, or managing media assets, our image compression and resize API scales with your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24 bg-primary w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Build Faster Websites with ImageCompressAPI
              </h2>
              <p className="text-lg sm:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                Start optimizing your images today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#signup"
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-50 shadow-lg transition-colors"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent-500 shadow-lg transition-colors"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-slate">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-base text-gray-300">
                <a href="/docs" className="hover:text-accent transition-colors">
                  Docs
                </a>
                <a href="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </a>
                <a href="/status" className="hover:text-accent transition-colors">
                  API Status
                </a>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Terms
                </a>
                <a href="/privacy" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </div>
              <p className="text-base text-gray-400">
                © {new Date().getFullYear()} ImageCompressAPI
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
