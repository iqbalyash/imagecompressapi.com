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
    </>
  );
}
