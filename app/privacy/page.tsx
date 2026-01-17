import Image from "next/image";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ImageCompressAPI. Learn how we handle your data and protect your privacy when using our image compression API service.",
};

export default function PrivacyPage() {
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
                width={800}
                height={200}
                className="h-40 sm:h-48 w-auto"
                priority
                unoptimized
              />
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
              Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  ImageCompressAPI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our image compression and resize API service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  2.1 Account Information
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  When you create an account, we collect information such as your email address, name, and payment information necessary to provide the Service.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  2.2 API Usage Data
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  We collect information about your API usage, including the number of requests, processing times, and error rates. This data helps us improve our Service and provide usage analytics.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  2.3 Images
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Images submitted through our API are processed and automatically deleted after processing is complete. We do not store your images permanently. Images may be temporarily cached for performance optimization and are deleted according to our retention policies.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  2.4 Technical Information
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  We automatically collect certain technical information, including IP addresses, browser type, device information, and usage patterns to help us improve the Service and ensure security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process your API requests and deliver compressed images</li>
                  <li>Process payments and manage your account</li>
                  <li>Send you service-related communications</li>
                  <li>Monitor and analyze usage patterns to improve performance</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  4. Image Processing and Storage
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We follow a privacy-first approach to image handling:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li>Images are processed immediately upon receipt</li>
                  <li>Processed images are automatically deleted after delivery</li>
                  <li>Images may be temporarily cached for performance but are deleted within 24 hours</li>
                  <li>We do not use your images for training, marketing, or any other purpose</li>
                  <li>We do not share your images with third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li>With service providers who assist us in operating our Service (e.g., payment processors, hosting providers)</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  6. Data Security
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure API authentication, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  7. Your Rights and Choices
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-base leading-relaxed mb-4 mt-4">
                  To exercise these rights, please contact us at privacy@imagecompressapi.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  10. International Data Transfers
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Service, you consent to the transfer of your information to these countries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  12. Contact Us
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Email: privacy@imagecompressapi.com<br />
                  Address: ImageCompressAPI Privacy Team
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
              © {new Date().getFullYear()} ImageCompressAPI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
