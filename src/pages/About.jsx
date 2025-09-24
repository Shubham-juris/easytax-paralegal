import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
            About <span className="text-gray-800">EasyTax & Paralegal</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At EasyTax & Paralegal, we are passionate about simplifying taxation
            and legal processes. With a dedicated team of experts, we provide
            clear, efficient, and reliable solutions to empower individuals,
            small businesses, and large enterprises across Canada.
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
              EasyTax & Paralegal is a trusted platform offering professional
              tax filing, legal documentation, and consultancy services. Our
              commitment lies in providing affordable and transparent solutions
              while ensuring compliance with the highest standards of integrity
              and professionalism.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-1" size={20} />
                Experienced professionals with years of expertise
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-1" size={20} />
                Affordable, transparent, and reliable services
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-1" size={20} />
                Personalized solutions for individuals and businesses
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-1" size={20} />
                Customer-first approach with 24/7 dedicated support
              </li>
            </ul>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is to bridge the gap between people and complex tax or
            legal processes. We strive to create a stress-free experience by
            providing expert guidance, simplifying compliance, and empowering
            our clients with the confidence to focus on growth and success.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be Canada’s most trusted partner for tax and legal services —
              known for innovation, integrity, and excellence. We envision a
              future where every individual and business has access to reliable,
              affordable, and efficient solutions without complexity or stress.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7666.jpg"
              alt="Our Vision"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Core Values
          </h3>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Integrity
              </h4>
              <p className="text-gray-600">
                We maintain the highest ethical standards in everything we do,
                ensuring transparency and trust with every client.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Excellence
              </h4>
              <p className="text-gray-600">
                We go above and beyond to deliver quality services that exceed
                expectations and drive long-term success.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Client Focus
              </h4>
              <p className="text-gray-600">
                Every decision we make revolves around the needs of our clients,
                ensuring personalized and result-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Meet Our Experts
          </h3>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team comprises seasoned tax consultants, legal advisors, and
            paralegal professionals with extensive industry experience. Together
            we ensure that every client receives the best guidance, compliance
            support, and peace of mind.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://img.freepik.com/free-photo/portrait-smiling-businessman_171337-16482.jpg"
                alt="Team Member"
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold text-blue-700">John Smith</h4>
              <p className="text-gray-500">Senior Tax Consultant</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://img.freepik.com/free-photo/confident-businesswoman-posing_23-2148142745.jpg"
                alt="Team Member"
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold text-blue-700">Emily Davis</h4>
              <p className="text-gray-500">Legal Advisor</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-asian-businessman_1098-18714.jpg"
                alt="Team Member"
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-bold text-blue-700">Michael Lee</h4>
              <p className="text-gray-500">Paralegal Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
