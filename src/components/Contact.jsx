import React from "react";
console.log(React);


import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin 
} from "react-icons/fa";

function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e2e8f0] py-12 sm:py-16 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-5 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-5 w-48 h-48 bg-[#0b1b3a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">  
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-3 sm:mb-4">
            <span className="text-amber-600 text-xs sm:text-sm font-semibold tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid gap-4 sm:gap-6">
              {/* Location */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#0b1b3a] text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-1 sm:mb-2">Our Location</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Plot No. 123, Odhav Industrial Estate,<br />
                      Ahmedabad, Gujarat 380038
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-amber-500 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-1 sm:mb-2">Phone Number</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 79 1234 5678</p>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 9876 543 210</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#0b1b3a] text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-1 sm:mb-2">Email Address</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">info@mechzone.com</p>
                    <p className="text-gray-600 text-xs sm:text-sm">support@mechzone.com</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-amber-500 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-1 sm:mb-2">Working Hours</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex gap-2 sm:gap-3">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center text-[#0b1b3a] hover:bg-amber-500 hover:text-[#0b1b3a] transition-all"
                  >
                    <Icon size={16} className="sm:text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1b3a] mb-4 sm:mb-6">Send Us a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[#0b1b3a] font-semibold mb-1.5 sm:mb-2 text-sm">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-sm"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-[#0b1b3a] font-semibold mb-1.5 sm:mb-2 text-sm">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-sm"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#0b1b3a] font-semibold mb-1.5 sm:mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#0b1b3a] font-semibold mb-1.5 sm:mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-sm"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-[#0b1b3a] font-semibold mb-1.5 sm:mb-2 text-sm">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 resize-none text-sm"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-[#0b1b3a] hover:bg-[#1e293b] text-white font-bold sm:font-black rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0b1b3a]/20 text-sm sm:text-base"
              >
                Send Message
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 sm:mt-16 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.12908061268!2d72.61885505661937!3d23.039541768446256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e875c0d1c8b8d%3A0x9a6b3a2c0b8a0f5c!2sOdhav%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718119000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="sm:h-[350px] lg:h-[400px]"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;