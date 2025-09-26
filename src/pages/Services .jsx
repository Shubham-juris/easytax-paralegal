const Services = () => {
  const services = [
    {
      title: "Tax Services",
      icon: "💰",
      description: (
        <>
          <p>
            We provide comprehensive tax solutions to individuals and
            businesses. Our services include Income Tax Return (ITR) filing, GST
            filing, TDS compliance, and tax planning strategies to help you save
            money and avoid penalties. Our experts ensure all returns are
            accurate, timely, and compliant with government regulations.
          </p>
          <p className="mt-3 font-bold">Key Highlights:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Income Tax Return (ITR) Filing</li>
            <li>GST Registration & Filing</li>
            <li>TDS Compliance</li>
            <li>Tax Planning & Advisory</li>
            <li>Audit Support & Compliance</li>
          </ul>
        </>
      ),
    },
    {
      title: "Bookkeeping",
      icon: "📊",
      description: (
        <>
          <p>
            Keep your business finances organized and up-to-date. Our
            bookkeeping services include recording all financial transactions,
            managing accounts payable and receivable, bank reconciliation, and
            preparing monthly financial statements. Accurate bookkeeping helps
            you make informed business decisions and ensures compliance with tax
            regulations.
          </p>
          <p className="mt-3 font-bold">Key Highlights:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Daily Transaction Recording</li>
            <li>Accounts Payable & Receivable Management</li>
            <li>Bank Reconciliation</li>
            <li>Financial Reporting & Analysis</li>
            <li>Payroll & Expense Tracking</li>
          </ul>
        </>
      ),
    },
    {
      title: "Paralegal Services",
      icon: "📑",
      description: (
        <>
          <p>
            Our paralegal services provide professional legal support for
            individuals and businesses at affordable rates. We assist in
            drafting contracts, agreements, affidavits, and other legal
            documents. Additionally, we help with case research, legal filings,
            and documentation to ensure your legal matters are handled
            efficiently.
          </p>
          <p className="mt-3 font-bold">Key Highlights:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Legal Document Drafting</li>
            <li>Contract & Agreement Preparation</li>
            <li>Affidavits & Declarations</li>
            <li>Case Research & Filing Support</li>
            <li>Affordable & Professional Assistance</li>
          </ul>
        </>
      ),
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
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We provide reliable and affordable solutions in Tax, Bookkeeping,
            and Paralegal services. Our goal is to simplify your financial and
            legal journey with expert guidance, accurate management, and
            professional support.
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
              <div className="mt-3 text-gray-600 text-left">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
