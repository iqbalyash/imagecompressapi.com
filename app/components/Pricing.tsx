export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      description: "Perfect for getting started",
      features: [
        "500 images/month",
        "Bulk image compression API",
        "Custom image resize",
        "AVIF & WebP support",
        "Lossy & lossless compression",
        "No credit card required",
      ],
      cta: "Get Free API Key",
      popular: false,
      isFree: true,
    },
    {
      name: "Starter",
      price: "$5",
      period: "per month",
      description: "Ideal for small projects",
      features: [
        "5,000 images/month",
        "Bulk image compression",
        "Custom sizes",
        "CDN delivery",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
      isFree: false,
    },
    {
      name: "Pro",
      price: "$15",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "25,000 images/month",
        "Higher rate limits",
        "Priority processing",
        "Usage analytics",
        "Webhooks",
      ],
      cta: "Start Free Trial",
      popular: true,
      isFree: false,
    },
    {
      name: "Scale",
      price: "$29",
      period: "per month",
      description: "For high-volume applications",
      features: [
        "100,000 images/month",
        "Multiple API keys",
        "Region-based processing",
        "Priority support",
        "SLA-ready",
      ],
      cta: "Start Free Trial",
      popular: false,
      isFree: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our full API access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl ${
                plan.popular
                  ? "border-2 border-gray-900 shadow-lg"
                  : "border border-gray-200 shadow-sm"
              } p-6 sm:p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {plan.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline flex-wrap">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period !== "pricing" && (
                      <span className="text-lg sm:text-xl text-gray-600 ml-2">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#signup"
                className="block w-full text-center py-3 sm:py-4 px-6 rounded-lg font-semibold text-base sm:text-lg bg-gray-900 text-white"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            Start with the Free plan. Upgrade anytime. No credit card required.
          </p>
        </div>

        {/* Pay-As-You-Go Section */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Pay-As-You-Go
              </h3>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-5xl font-bold text-gray-900">$1</span>
                <span className="text-2xl text-gray-600 ml-2">per 1,000 images</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-600">No monthly commitment</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-600">Same API features</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-600">Ideal for scripts and startups</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-600">Pay only for what you use</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#signup"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-semibold text-base sm:text-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Shared Features Section */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Included in All Plans
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Every plan includes our full suite of API features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start p-3 sm:p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                Bulk image compression API
              </span>
            </div>
            <div className="flex items-start p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                Image resize API
              </span>
            </div>
            <div className="flex items-start p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                Image compression and resize in one request
              </span>
            </div>
            <div className="flex items-start p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                AVIF image compression API
              </span>
            </div>
            <div className="flex items-start p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                WebP image compression API
              </span>
            </div>
            <div className="flex items-start p-4">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                Privacy-first auto deletion
              </span>
            </div>
            <div className="flex items-start p-4 md:col-span-2 lg:col-span-1">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base text-gray-600">
                API-first SaaS
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Note */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-gray-900 rounded-lg shadow-sm p-5 sm:p-6">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-gray-900">ImageCompressAPI</strong> offers lower pricing than Tinify with AVIF support, bulk compression, and custom image sizes.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-5 sm:space-y-6">
            <div className="border-b border-gray-200 pb-5 sm:pb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Do you offer a free trial?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yes! All paid plans include a 14-day free trial. You can also start with our Free plan which includes 500 images per month with no credit card required.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-5 sm:pb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Is this cheaper than Tinify?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yes, ImageCompressAPI offers lower pricing than Tinify. We also provide additional features like AVIF support, bulk compression, and custom image sizes that Tinify doesn't offer.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-5 sm:pb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Is bulk image compression supported?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yes, bulk image compression is supported on all plans. You can process multiple images in a single API request, making it efficient for batch operations and automated workflows.
              </p>
            </div>
            <div className="pb-5 sm:pb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Do you store uploaded images?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                No, we follow a privacy-first approach. Images are automatically deleted after processing to ensure your data privacy and security. We never store your images permanently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
