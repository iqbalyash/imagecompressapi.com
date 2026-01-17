export const metadata = {
  title: "Image Compression API Documentation | ImageCompressAPI",
  description:
    "Complete API documentation for ImageCompressAPI. Learn how to use our image compression API, image resize API, bulk image compression, AVIF and WebP conversion. Get started with code examples and SDKs.",
  keywords: [
    "image compression API",
    "image resize API",
    "bulk image compression API",
    "AVIF compression API",
    "WebP compression API",
    "image compression documentation",
    "REST API documentation",
    "image optimization API",
  ],
  openGraph: {
    title: "Image Compression API Documentation | ImageCompressAPI",
    description:
      "Complete API documentation for ImageCompressAPI. Learn how to compress, resize, and convert images using our REST API.",
    url: "https://imagecompressapi.com/docs",
  },
};

export default function DocsPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-gray-900">
              ImageCompressAPI
            </a>
            <div className="flex items-center gap-8">
              <a
                href="/docs"
                className="text-base text-gray-600 hover:text-gray-900"
              >
                Docs
              </a>
              <a
                href="/pricing"
                className="text-base text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="/#signup"
                className="text-base px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Image Compression API Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Complete guide to using ImageCompressAPI for image compression, resizing, and format conversion. Our <strong className="text-gray-900">image compression API</strong> and <strong className="text-gray-900">image resize API</strong> provide developers with powerful tools to optimize images programmatically.
            </p>
            <p className="text-base text-gray-600 mb-12">
              Get started in minutes with our REST API. Supports bulk image compression, AVIF and WebP conversion, custom image sizes, and more.
            </p>

            <div className="space-y-12">
              {/* Getting Started */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Getting Started
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Base URL
                  </h3>
                  <code className="text-base bg-white px-4 py-2 rounded border border-gray-200 block">
                    https://api.imagecompressapi.com/v1
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Authentication
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  All API requests require authentication using your API key. Include your API key in the Authorization header:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-gray-100 text-sm">
                    <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                  </pre>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Get your API key by signing up for a free account. No credit card required.
                </p>
              </section>

              {/* Compress Image */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Compress Image
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Compress a single image or multiple images in bulk. Supports JPEG, PNG, WebP, and AVIF formats.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-base">
                    POST /compress
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Request Parameters
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Parameter
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Required
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          image
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          File
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Image file to compress (JPEG, PNG, WebP, AVIF)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          quality
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Integer
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          No
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Compression quality (1-100, default: 80)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          format
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          String
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          No
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Output format: jpg, png, webp, avif (default: original)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          width
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Integer
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          No
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Resize width in pixels
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          height
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Integer
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          No
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Resize height in pixels
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Example Request
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-gray-100 text-sm">
                    <code>{`curl -X POST https://api.imagecompressapi.com/v1/compress \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@photo.jpg" \\
  -F "quality=80" \\
  -F "format=webp" \\
  -F "width=1200"`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Response
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                  <pre className="text-gray-100 text-sm">
                    <code>{`{
  "success": true,
  "data": {
    "url": "https://cdn.imagecompressapi.com/compressed/abc123.webp",
    "original_size": 2456789,
    "compressed_size": 456789,
    "savings": 81.4,
    "format": "webp",
    "width": 1200,
    "height": 800
  }
}`}</code>
                  </pre>
                </div>
              </section>

              {/* Bulk Compression */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Bulk Compression
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Process multiple images in a single API request. Upload up to 100 images per request.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-base">
                    POST /compress/bulk
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Example Request
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                  <pre className="text-gray-100 text-sm">
                    <code>{`curl -X POST https://api.imagecompressapi.com/v1/compress/bulk \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "images[]=@image1.jpg" \\
  -F "images[]=@image2.jpg" \\
  -F "images[]=@image3.jpg" \\
  -F "quality=80" \\
  -F "format=webp"`}</code>
                  </pre>
                </div>
              </section>

              {/* Resize Image */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Resize Image
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Resize images to specific dimensions while maintaining aspect ratio or custom cropping.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Endpoint
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-base">
                    POST /resize
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Additional Parameters
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Parameter
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          maintain_aspect
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Boolean. Maintain aspect ratio when resizing (default: true)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          crop
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Boolean. Crop image to exact dimensions (default: false)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Error Handling */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Error Handling
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  The API uses standard HTTP status codes. Errors are returned in JSON format:
                </p>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                  <pre className="text-gray-100 text-sm">
                    <code>{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "Invalid or missing API key"
  }
}`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Common Error Codes
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start p-3 bg-gray-50 rounded">
                    <code className="text-sm font-semibold text-gray-900 mr-4">400</code>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Bad Request</p>
                      <p className="text-sm text-gray-600">Invalid parameters or malformed request</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded">
                    <code className="text-sm font-semibold text-gray-900 mr-4">401</code>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Unauthorized</p>
                      <p className="text-sm text-gray-600">Invalid or missing API key</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded">
                    <code className="text-sm font-semibold text-gray-900 mr-4">429</code>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Rate Limit Exceeded</p>
                      <p className="text-sm text-gray-600">Too many requests. Check your plan limits</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-gray-50 rounded">
                    <code className="text-sm font-semibold text-gray-900 mr-4">500</code>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Server Error</p>
                      <p className="text-sm text-gray-600">Internal server error. Please try again later</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rate Limits */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Rate Limits
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Rate limits vary by plan. Rate limit information is included in response headers:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <code className="text-sm">
                    X-RateLimit-Limit: 1000<br />
                    X-RateLimit-Remaining: 999<br />
                    X-RateLimit-Reset: 1640995200
                  </code>
                </div>
              </section>

              {/* SDKs */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  SDKs and Libraries
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Official SDKs are available for popular programming languages to simplify integration with our <strong className="text-gray-900">image compression API</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">JavaScript/Node.js</h4>
                    <code className="text-sm text-gray-600">npm install @imagecompressapi/sdk</code>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Python</h4>
                    <code className="text-sm text-gray-600">pip install imagecompressapi</code>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">PHP</h4>
                    <code className="text-sm text-gray-600">composer require imagecompressapi/sdk</code>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Ruby</h4>
                    <code className="text-sm text-gray-600">gem install imagecompressapi</code>
                  </div>
                </div>
              </section>

              {/* SEO Content Section */}
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Getting Started with Image Compression API
                </h2>
                <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                  <p>
                    Our <strong className="text-gray-900">image compression API</strong> provides a simple, powerful way to optimize images programmatically. Whether you're building a content management system, e-commerce platform, or mobile application, our API handles image compression seamlessly. The <strong className="text-gray-900">bulk image compression API</strong> allows you to process hundreds of images in a single request, making it ideal for batch operations and automated workflows.
                  </p>
                  <p>
                    The <strong className="text-gray-900">image resize API</strong> gives you precise control over output sizes. You can specify exact dimensions, maintain aspect ratios, or crop images to specific requirements. When combined with compression, our <strong className="text-gray-900">image compression and resize API</strong> becomes a complete solution for all your image optimization needs.
                  </p>
                  <p>
                    Modern web performance demands modern formats. Our <strong className="text-gray-900">AVIF image compression API</strong> delivers superior compression ratios compared to traditional formats, often reducing file sizes by 50% or more while maintaining visual quality. Similarly, our <strong className="text-gray-900">WebP image compression API</strong> provides excellent browser compatibility and significant file size reductions.
                  </p>
                  <p>
                    All API endpoints use standard REST conventions and return JSON responses. Authentication is handled via API keys, which you can obtain by signing up for a free account. The API supports both synchronous and asynchronous processing, with webhook notifications available for long-running operations.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-base text-gray-600">
              <a href="/docs" className="hover:text-gray-900">
                Docs
              </a>
              <a href="/pricing" className="hover:text-gray-900">
                Pricing
              </a>
              <a href="/status" className="hover:text-gray-900">
                API Status
              </a>
              <a href="/terms" className="hover:text-gray-900">
                Terms
              </a>
              <a href="/privacy" className="hover:text-gray-900">
                Privacy
              </a>
            </div>
            <p className="text-base text-gray-600">
              © {new Date().getFullYear()} ImageCompressAPI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
