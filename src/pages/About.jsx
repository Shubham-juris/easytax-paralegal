const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            About <span className="text-gray-800">EasyTax & Paralegal</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are committed to simplifying taxation and legal services for
            individuals and businesses. Our mission is to provide expert
            solutions with clarity, efficiency, and trust.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/business-law-abstract-concept_335657-3179.jpg"
              alt="About EasyTax"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              EasyTax & Paralegal is a trusted platform dedicated to providing
              professional tax filing, legal documentation, and consultancy
              services. Our team of experts ensures that your financial and
              legal needs are handled with care, precision, and transparency.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Experienced professionals with years of expertise
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Affordable, transparent, and reliable services
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Personalized solutions for individuals and businesses
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Customer-first approach with 24/7 support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our mission is to bridge the gap between people and complex
            tax/legal processes. We believe in empowering individuals and
            businesses with hassle-free, affordable, and professional solutions
            that bring peace of mind and growth opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
