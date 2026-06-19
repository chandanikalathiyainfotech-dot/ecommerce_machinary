
import React from "react";
console.log(React);
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaAward,
} from "react-icons/fa";


function Aboutus() {


  const stats = [
    {
      number: "680+",
      title: "Projects Completed",
    },
    {
      number: "1350+",
      title: "Happy Clients",
    },
    {
      number: "97%",
      title: "Client Satisfaction",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
  ];

  return (

    <div>

      {/* <section className="relative bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-5 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-5 w-48 h-48 bg-[#0b1b3a]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-20">
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
      </section> */}

      <section id="hero" className="relative h-[450px] flex items-center  justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1b3a]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            About <span className="text-amber-500">MECHZONE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-200">
            Delivering premium industrial machinery solutions with innovation,
            quality and reliability.
          </p>
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-amber-500 font-semibold uppercase">
                About Company
              </span>

              <h2 className="text-4xl font-black text-[#0b1b3a] mt-3 mb-5">
                Industrial Machinery Experts
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                MECHZONE is a trusted provider of industrial machinery,
                spare parts, installation, maintenance and engineering
                solutions. We help industries achieve maximum productivity.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <FaAward className="text-amber-500 text-xl mt-1" />
                  <p>Premium Quality Machinery</p>
                </div>

                <div className="flex gap-3">
                  <FaAward className="text-amber-500 text-xl mt-1" />
                  <p>Certified Technical Team</p>
                </div>

                <div className="flex gap-3">
                  <FaAward className="text-amber-500 text-xl mt-1" />
                  <p>24/7 Service Support</p>
                </div>
              </div>

              <button className="mt-8 bg-amber-500 text-[#0b1b3a] px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="our-core" className="py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-5">

          <div className="text-center mb-14">
            <h2 className="text-white text-4xl font-black">
              Our Core Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <FaEye className="text-amber-500 text-4xl mb-4" />

              <h3 className="font-bold text-2xl mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600">
                To become a leading industrial machinery provider through
                innovation and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <FaBullseye className="text-amber-500 text-4xl mb-4" />

              <h3 className="font-bold text-2xl mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600">
                Deliver reliable machinery solutions that increase efficiency
                and productivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="stats" className="bg-amber-500 py-12">
        <div className="container mx-auto px-5">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h2 className="text-4xl font-black text-[#0b1b3a]">
                  {item.number}
                </h2>

                <p className="text-gray-600 mt-2">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-5">

          <div className="text-center mb-12">
            <span className="text-amber-500 uppercase font-semibold">
              Team Members
            </span>

            <h2 className="text-4xl font-black text-[#0b1b3a] mt-2">
              Meet Our Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="group rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://picsum.photos/500/400?random=${item}`}
                  alt=""
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="font-bold text-xl">
                    Expert Engineer
                  </h3>

                  <p className="text-gray-500">
                    Technical Specialist
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556155092-490a1ba16284')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1b3a]/85"></div>

        <div className="container mx-auto px-5 relative text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let's Grow Your Business Together
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our experts and get a free consultation for your machinery requirements.
          </p>

          <button className="bg-amber-500 text-[#0b1b3a] px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all">
            Get Consultation
          </button>
        </div>
      </section>


    </div>

  );
}

export default Aboutus;
