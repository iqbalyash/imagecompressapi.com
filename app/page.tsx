export const metadata = {
  title: "Home",
  description:
    "High-performance image compression API. Compress images quickly and efficiently with our developer-friendly API.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16">
          <nav className="flex items-center justify-between mb-12">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Image Compress API
            </div>
            <div className="flex gap-4">
              <a
                href="#docs"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#signup"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Compress Images
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Fast & Simple
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            High-performance image compression API built for developers. Fast,
            reliable, and easy to integrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#docs"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View Documentation
            </a>
            <a
              href="#signup"
              className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-lg font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
            >
              Get API Key
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compress images in milliseconds with our optimized infrastructure.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enterprise-grade security with 99.9% uptime guarantee.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Easy Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simple REST API that works with any language or framework.
            </p>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get Started in Seconds
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 overflow-x-auto">
              <pre className="text-gray-100 text-sm">
                <code>{`curl -X POST https://api.imagecompressapi.com/v1/compress \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@image.jpg" \\
  -F "quality=80"`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Image Compress API. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href="#docs"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#terms"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#privacy"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
