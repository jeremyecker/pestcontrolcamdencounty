import Link from 'next/link';
import { BRAND } from '@/hub.config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Thank You | ${BRAND.name}`,
  description: `Thank you for contacting ${BRAND.name}. We'll get back to you ASAP.`,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-accent/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Your message has been received.
          </p>
          <p className="text-lg text-white/80">
            No commitment. We&apos;ll get back to you ASAP.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">1. We Review Your Request</h3>
              <p className="text-gray-600">
                Our team reviews every inquiry personally to understand your pest situation and provide the best solution.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">2. We&apos;ll Reach Out</h3>
              <p className="text-gray-600">
                A pest control specialist will contact you to discuss your needs, answer questions, and schedule service if needed.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">3. We Solve the Problem</h3>
              <p className="text-gray-600">
                Our licensed technicians arrive on time, treat the issue thoroughly, and make sure your home is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Immediate Help */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 mb-6">
            For urgent pest emergencies, give us a call directly. We offer same-day and next-day service.
          </p>
          <a
            href={`tel:+1${BRAND.phone}`}
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
          >
            📞 Call {BRAND.phoneFormatted}
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6">While you wait, explore our services:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-brand-dark text-white rounded-lg font-semibold hover:bg-brand-dark/90 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-brand-dark text-brand-dark rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/service-areas"
              className="px-6 py-3 border-2 border-brand-dark text-brand-dark rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-colors"
            >
              Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
