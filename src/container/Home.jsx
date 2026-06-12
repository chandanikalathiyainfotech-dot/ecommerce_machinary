
import React from "react";
import { FaCogs, FaTools, FaTruck, FaWrench, FaShieldAlt, FaStar } from "react-icons/fa";

function Home() {
  const categories = [
    { title: "Heavy Machinery", desc: "Excavators, bulldozers, and loaders", icon: FaCogs },
    { title: "Spare Parts", desc: "Genuine parts for all major brands", icon: FaTools },
    { title: "Truck & Transport", desc: "Commercial trucks and trailers", icon: FaTruck },
    { title: "Maintenance", desc: "Professional service and repairs", icon: FaWrench },
  ];

  const features = [
    { icon: FaShieldAlt, text: "100% Quality Guaranteed" },
    { icon: FaStar, text: "Trusted Since 2010" },
    { icon: FaTruck, text: "Fast Worldwide Shipping" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0b1b3a] to-[#0f172a] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Premium Industrial <br />
                <span className="text-amber-500">Machinery Solutions</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                Your one-stop destination for high-quality heavy machinery, spare parts, and professional maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-[#0b1b3a] font-black text-sm rounded-lg hover:bg-amber-400 transition-all uppercase tracking-wider">
                  Explore Products
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-black text-sm rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all uppercase tracking-wider">
                  Get Quote
                </button>
              </div>
              <div className="mt-10 flex gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <feature.icon className="text-amber-500 text-base" />
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#1a2a4a] to-[#0b1b3a] p-6 sm:p-8 rounded-3xl border border-gray-700 shadow-2xl">
                  <FaCogs className="text-amber-500 text-7xl sm:text-8xl animate-spin-slow" style={{ animationDuration: '20s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b1b3a] mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our wide range of industrial products designed to meet all your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="text-amber-500 text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-[#0b1b3a] mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-amber-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b1b3a] mb-3">
            Ready to Upgrade Your Machinery?
          </h3>
          <p className="text-[#0b1b3a]/80 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Get a free consultation and quote from our industrial machinery experts today!
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0b1b3a] text-amber-500 font-black text-sm rounded-lg hover:bg-[#0f172a] transition-all uppercase tracking-wider">
            Contact Us Now
          </button>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow linear infinite; }
      `}</style>
    </div>
  );
}

export default Home;
