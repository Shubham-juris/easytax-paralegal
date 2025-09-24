const Services = () => {
  const services = [
    {
      title: "Tax Filing",
      description:
        "Expert assistance with Income Tax Return (ITR), GST filing, and compliance management.",
      icon: "💰",
    },
    {
      title: "Paralegal Support",
      description:
        "Affordable legal documentation, case research, and professional paralegal support.",
      icon: "📑",
    },
    {
      title: "Business Registration",
      description:
        "Hassle-free company incorporation, GST registration, and trademark services.",
      icon: "🏢",
    },
    {
      title: "Consultation",
      description:
        "One-on-one tax and legal consultation to guide you with the right decisions.",
      icon: "📞",
    },
    {
      title: "Audit Support",
      description:
        "Professional support for tax audits, compliance audits, and risk assessments.",
      icon: "🕵️",
    },
    {
      title: "Document Drafting",
      description:
        "Contracts, agreements, and affidavits drafted by experts at affordable rates.",
      icon: "📝",
    },
  ];

  return (
    <div className="bg-gray-50 py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
            Our <span className="text-gray-800">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable and affordable tax & paralegal solutions to
            simplify your journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
