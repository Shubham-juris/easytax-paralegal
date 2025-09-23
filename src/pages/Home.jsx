import React from "react";

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Offset for fixed navbar */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simplify Your <span className="text-blue-700">Taxes</span> & Legal
              Needs
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Professional tax filing and reliable paralegal services. We make
              the process easy, stress-free, and affordable — so you can focus
              on what matters most.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">
                Book Consultation
              </button>
              <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image - Updated */}
          <div className="flex-1 mt-10 md:mt-0">
            <img
              src="https://storyset.com/illustration/taxation/amico"
              alt="Tax Filing Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Tax Filing
              </h3>
              <p className="text-gray-600">
                Hassle-free income tax filing, GST, and compliance handled by
                experts.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Paralegal Support
              </h3>
              <p className="text-gray-600">
                Affordable legal documentation, case research, and professional
                assistance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Consultation
              </h3>
              <p className="text-gray-600">
                Book a one-on-one session with our experts to get personalized
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-blue-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Let us handle your taxes and legal documents with ease and confidence.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Schedule a Free Call
        </button>
      </section>
    </div>
  );
}
