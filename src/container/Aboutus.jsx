
import React from "react";
import { FaCogs, FaTools, FaShieldAlt, FaAward, FaTruck, FaUsers, FaStar } from "react-icons/fa";

function Aboutus() {
  const values = [
    { icon: FaCogs, title: "Quality First", desc: "We never compromise on quality" },
    { icon: FaTools, title: "Innovation", desc: "Continuous improvement in everything we do" },
    { icon: FaShieldAlt, title: "Reliability", desc: "You can always count on us" }
  ];

  const reasons = [
    { icon: FaAward, title: "15+ Years Experience", desc: "Trusted by thousands of customers" },
    { icon: FaTruck, title: "Fast Delivery", desc: "Timely delivery of all your orders" },
    { icon: FaUsers, title: "Expert Team", desc: "Skilled professionals ready to help" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-5 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-5 w-48 h-48 bg-[#0b1b3a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-3">
            <span className="text-amber-600 text-xs font-semibold tracking-wide">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">
            Welcome to MECH<span className="text-amber-500">ZONE</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-lg max-w-3xl mx-auto">
            Your trusted partner for premium industrial machinery solutions since 2010.
          </p>
        </div>

        {/* About Us Story */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-12 shadow-xl border border-gray-100 mb-6 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1b3a] mb-4">Our Story</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                MECHZONE was founded with a simple mission: to provide high-quality industrial machinery and spare parts to businesses of all sizes.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                Over the years, we have grown from a small workshop to a leading industrial solutions provider, serving customers across the globe.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Today, we continue to innovate and expand our product range, always putting our customers' needs first.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl border border-amber-500/20 p-8 sm:p-10">
                  <div className="flex items-center justify-center">
                    <FaCogs className="text-amber-500 text-6xl sm:text-8xl animate-spin-slow" style={{ animationDuration: "15s" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b1b3a] mb-6 sm:mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <val.icon className="text-amber-500 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#0b1b3a] mb-2">{val.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#0b1b3a] rounded-2xl p-5 sm:p-8 lg:p-12 shadow-xl mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Why Choose MECHZONE?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl p-5 sm:p-6 border border-white/20 transition-all hover:bg-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-4">
                  <reason.icon className="text-[#0b1b3a] text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-5 sm:p-8 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b1b3a] mb-3">Ready to Get Started?</h3>
          <p className="text-[#0b1b3a]/80 text-xs sm:text-sm lg:text-base mb-6 max-w-2xl mx-auto">
            Contact us today and let's discuss your industrial machinery needs!
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0b1b3a] text-white font-bold sm:font-black rounded-lg hover:bg-[#1e293b] transition-all uppercase tracking-wider text-xs sm:text-sm">
            Contact Us Now
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow linear infinite; }
      `}</style>
    </section>
  );
}

export default Aboutus;
