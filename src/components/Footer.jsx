import React from "react";
console.log(React);

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCogs
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#0b1b3a]">
      {/* CTA Banner
      <div className="bg-gradient-to-r from-[#1a2a4a] to-[#0b1b3a] border-t-3 border-amber-500 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Upgrade Your Machinery?</h2>
          <p className="text-[#d6e2ff] text-sm md:text-base mb-6 max-w-2xl mx-auto">
            Get a free consultation and quote from our experts today!
          </p>
          <button className="px-8 py-3.5 bg-amber-500 text-[#0b1b3a] font-black text-sm rounded-lg hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-all uppercase tracking-wider">
            Get Quote
          </button>
        </div>
      </div> */}

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr_1fr] gap-10">

          {/* Logo & About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-amber-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-black p-2.5 rounded-lg border border-gray-700 group-hover:border-amber-500 transition-all duration-300">
                    <FaCogs className="text-amber-500 text-2xl animate-spin-slow" style={{ animationDuration: '10s' }} />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#0f172a]"></div>
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white tracking-tighter">
                    MECH<span className="text-amber-500">ZONE</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-amber-500 transition-colors">Industrial Pro</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium industrial machinery solutions. Quality, reliability, and innovation since 2010.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="social-icon-sm w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#0b1b3a] transition-all"
                >
                  <Icon size={18} className="sm:text-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div >
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-amber-500 -skew-x-12"></span>
            </h4>
            <ul className="space-y-3">
              {["Home", "Machines", "Spare Parts", "Services", "About Us", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 text-sm hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span className="text-amber-500 text-xs">▸</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-amber-500 -skew-x-12"></span>
            </h4>
            <ul className="space-y-3">
              {["New Machinery", "Used Equipment", "Installation", "Maintenance", "Repair Services", "Spare Parts"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 text-sm hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span className="text-amber-500 text-xs">▸</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-amber-500 -skew-x-12"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Industrial Estate, Plot #123, Ahmedabad, Gujarat 380006</span>
              </li>
              <li className="flex items-center gap-3">
                <MdCall className="text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@mechzone.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t border-white/10 !py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 MECHZONE. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
