export const metadata = {
  title: "API Status",
  description:
    "Real-time status and uptime information for ImageCompressAPI. Check service health, recent incidents, and system status.",
};

export default function StatusPage() {
  // In a real implementation, this would fetch from an API
  const services = [
    {
      name: "API Service",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
    },
    {
      name: "Image Processing",
      status: "operational",
      uptime: "99.8%",
      responseTime: "450ms",
    },
    {
      name: "CDN",
      status: "operational",
      uptime: "100%",
      responseTime: "45ms",
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.9%",
      responseTime: "15ms",
    },
  ];

  const recentIncidents = [
    {
      date: "2024-01-15",
      title: "Scheduled Maintenance",
      status: "resolved",
      description: "Completed scheduled maintenance window. All services restored.",
    },
    {
      date: "2024-01-10",
      title: "Performance Optimization",
      status: "resolved",
      description: "Improved image processing performance by 30%.",
    },
  ];

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
              API Status
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Real-time status and uptime information for all ImageCompressAPI services.
            </p>

            {/* Overall Status */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">
                  All Systems Operational
                </h2>
              </div>
              <p className="text-base text-gray-700">
                All services are running normally. No incidents reported.
              </p>
            </div>

            {/* Services Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Status
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        {service.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Uptime (30 days)</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {service.uptime}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Avg Response Time</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {service.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* System Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                System Metrics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-gray-900 mb-2">99.9%</p>
                  <p className="text-sm text-gray-600">Overall Uptime</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-gray-900 mb-2">150ms</p>
                  <p className="text-sm text-gray-600">Avg Response Time</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-gray-900 mb-2">0</p>
                  <p className="text-sm text-gray-600">Active Incidents</p>
                </div>
              </div>
            </section>

            {/* Recent Incidents */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Recent Incidents
              </h2>
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {incident.title}
                        </h3>
                        <p className="text-sm text-gray-600">{incident.date}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {incident.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                No active incidents. All systems are operational.
              </p>
            </section>

            {/* Status History */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Status History
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  View detailed status history and incident reports:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold"
                  >
                    View Full History
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 text-gray-900 rounded-lg text-sm font-semibold"
                  >
                    Subscribe to Updates
                  </a>
                </div>
              </div>
            </section>

            {/* API Status Endpoint */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Status API
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Programmatically check service status using our Status API:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-gray-100 text-sm">
                  <code>{`GET https://api.imagecompressapi.com/v1/status

Response:
{
  "status": "operational",
  "services": {
    "api": "operational",
    "processing": "operational",
    "cdn": "operational"
  },
  "uptime": 99.9,
  "timestamp": "2024-01-20T10:00:00Z"
}`}</code>
                </pre>
              </div>
            </section>
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
