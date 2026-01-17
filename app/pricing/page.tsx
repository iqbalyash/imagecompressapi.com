import Pricing from "../components/Pricing";
import Header from "../components/Header";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for ImageCompressAPI. Choose from Free, Starter, Pro, or Scale plans. All plans include bulk compression, AVIF support, and custom image sizes.",
};

export default function PricingPage() {
  return (
    <>
      <Header />

      <main>
        <Pricing />
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
              <a href="/#status" className="hover:text-gray-900">
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
              © {new Date().getFullYear()} ImageCompressAPI
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
