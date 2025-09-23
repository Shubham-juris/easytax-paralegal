const Pricing = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Our <span className="text-gray-800">Pricing Plans</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your needs. We offer transparent pricing with
          no hidden charges — just simple, affordable services for everyone.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Basic</h3>
            <p className="text-gray-500 mt-2">
              For individuals and freelancers
            </p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $49<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Tax Filing Assistance</li>
              <li>✔ Basic Legal Support</li>
              <li>✔ Email Support</li>
              <li>✖ Priority Service</li>
            </ul>
            <button className="mt-6 w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border-2 border-blue-700 hover:shadow-2xl transition transform scale-105">
            <h3 className="text-xl font-semibold text-gray-800">Standard</h3>
            <p className="text-gray-500 mt-2">
              Best for small businesses & startups
            </p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $99<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Tax Filing + Audit Support</li>
              <li>✔ Legal Documentation</li>
              <li>✔ Phone & Email Support</li>
              <li>✔ Priority Service</li>
            </ul>
            <button className="mt-6 w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
            <p className="text-gray-500 mt-2">For enterprises & large firms</p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $199<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Advanced Tax & Audit Support</li>
              <li>✔ Complete Legal Consultancy</li>
              <li>✔ Dedicated Account Manager</li>
              <li>✔ 24/7 Premium Support</li>
            </ul>
            <button className="mt-6 w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
