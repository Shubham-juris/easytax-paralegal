import { CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
          Our <span className="text-gray-800">Pricing Plans</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Transparent, affordable, and flexible pricing tailored to individuals,
          small businesses, and large enterprises. No hidden fees — just value.
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:border-blue-500 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Basic</h3>
            <p className="text-gray-500 mt-2">For individuals & freelancers</p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $49<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Tax Filing
                Assistance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Basic Legal
                Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Email
                Support
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" size={18} /> Priority Service
              </li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-2 border-blue-700 hover:shadow-2xl transition transform hover:-translate-y-2 scale-105">
            {/* Badge */}
            <span className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold text-gray-800">Standard</h3>
            <p className="text-gray-500 mt-2">Perfect for small businesses</p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $99<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Tax Filing
                + Audit Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Legal
                Documentation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Phone &
                Email Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Priority
                Service
              </li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:border-blue-500 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
            <p className="text-gray-500 mt-2">For enterprises & large firms</p>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              $199<span className="text-lg text-gray-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Advanced
                Tax & Audit Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Complete
                Legal Consultancy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> Dedicated
                Account Manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} /> 24/7
                Premium Support
              </li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
