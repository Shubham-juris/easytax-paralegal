const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">
            Easy<span className="text-gray-200">Tax</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Simplifying taxes & legal needs with professional, affordable, and
            reliable services. Your trusted partner in finance and law.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200">123 Business Street, New Delhi, India</p>
          <p className="text-gray-200 mt-2">Email: support@easytax.com</p>
          <p className="text-gray-200 mt-2">Phone: +91 98765 43210</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              🌐
            </a>
            <a href="#" className="hover:text-gray-300">
              📘
            </a>
            <a href="#" className="hover:text-gray-300">
              🐦
            </a>
            <a href="#" className="hover:text-gray-300">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-500 mt-8 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} EasyTax. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
