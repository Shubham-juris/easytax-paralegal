const Contact = () => {
  return (
    <div className="bg-gray-50 py-30 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
            Contact <span className="text-gray-800">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? Fill out the form below or reach us
            directly through our contact details.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  requiredx
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12 py-9">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Our Office
              </h3>
              <p className="text-gray-600 mt-2">32 Ave NE, Calgary, AB, T2E 8A5</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">
           Easytaxparalegals@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">403-471-1298</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Working Hours
              </h3>
              <p className="text-gray-600 mt-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
