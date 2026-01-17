import Image from "next/image";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for ImageCompressAPI. Read our terms and conditions for using our image compression and resize API service.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Image
                src="/image_compress_api_logo.png"
                alt="ImageCompressAPI"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </a>
            <div className="flex items-center gap-8">
              <a
                href="/#docs"
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  By accessing and using ImageCompressAPI ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  2. Description of Service
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  ImageCompressAPI provides an API service for image compression, resizing, and format conversion. The Service allows you to process images programmatically through our REST API endpoints.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  3. Use of Service
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li>Use the Service to process illegal, harmful, or offensive content</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
                  <li>Use the Service in a manner that could damage, disable, or impair our servers</li>
                  <li>Exceed the rate limits or usage quotas of your plan</li>
                  <li>Share your API keys with unauthorized parties</li>
                  <li>Use the Service to violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  4. API Keys and Authentication
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your API keys. You agree to notify us immediately of any unauthorized use of your account or API keys. We are not liable for any loss or damage arising from your failure to protect your API keys.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  5. Image Processing and Storage
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Images submitted to our Service are processed and automatically deleted after processing is complete. We do not store your images permanently. However, processed images may be temporarily cached for performance optimization and will be deleted according to our retention policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  6. Pricing and Payment
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Pricing for the Service is available on our pricing page. You agree to pay all fees associated with your selected plan. Fees are charged in advance on a monthly basis or on a pay-as-you-go basis, as applicable. All fees are non-refundable except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  7. Service Availability
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We strive to provide reliable service but do not guarantee uninterrupted or error-free operation. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice. We are not liable for any damages resulting from service interruptions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  8. Intellectual Property
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  The Service, including its original content, features, and functionality, is owned by ImageCompressAPI and is protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or create derivative works of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  To the maximum extent permitted by law, ImageCompressAPI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  10. Termination
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  12. Contact Information
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us through our support channels or email us at legal@imagecompressapi.com.
                </p>
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
              <a href="/#docs" className="hover:text-gray-900">
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
              © {new Date().getFullYear()} ImageCompressAPI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
