
import React from "react";
console.log(React);
import { motion } from "framer-motion";
import { FaPlay, FaUsers, FaTools, FaBullseye, FaEye, FaAward, } from "react-icons/fa";


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

      <section id="hero" className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1b3a]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            About <span className="text-amber-500">MECHZONE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
            Delivering premium industrial machinery solutions with innovation,
            quality and reliability.
          </p>
        </motion.div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image Side */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">

                {/* Background Shape */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-4 border-amber-500 rounded-3xl"></div>

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="About Company"
                  className="relative z-10 w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />

                {/* Experience Card */}
                <div className="absolute -bottom-6 right-4 md:right-8 z-20 bg-white shadow-xl rounded-2xl px-5 py-4">
                  <h3 className="text-2xl md:text-3xl font-black text-amber-500">
                    15+
                  </h3>
                  <p className="text-sm text-gray-600">
                    Years Experience
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >

              <span className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-600">
                About Company
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1b3a] leading-tight">
                Industrial Machinery
                <span className="text-amber-500"> Experts</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base">
                MECHZONE is a trusted provider of industrial machinery,
                spare parts, installation, maintenance and engineering
                solutions. We help industries achieve maximum productivity,
                operational efficiency and long-term growth through advanced
                machinery solutions.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-3">

                {[
                  "Premium Quality Machinery",
                  "Certified Technical Team",
                  "24/7 Service Support",
                  "Fast Installation & Maintenance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <FaAward className="text-amber-500 text-lg" />
                    </div>

                    <p className="font-medium text-[#0b1b3a]">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button className="bg-amber-500 text-[#0b1b3a] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">
                  Learn More
                </button>

                <button className="border-2 border-[#0b1b3a] text-[#0b1b3a] px-8 py-3 rounded-xl font-bold hover:bg-[#0b1b3a] hover:text-white transition-all duration-300">
                  Contact Us
                </button>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      <section id="our-core" className="py-14 md:py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl"
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
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl"
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

      <section id="story" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-600">
                Company Story
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#0b1b3a] leading-tight">
                See How We Build
                <span className="text-amber-500"> Industrial Excellence</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-7">
                Discover our journey, advanced machinery solutions,
                expert engineering team and commitment to delivering
                world-class industrial equipment.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <FaAward className="text-amber-500 text-3xl mb-3" />
                  <h4 className="font-black text-2xl text-[#0b1b3a]">15+</h4>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-lg">
                  <FaUsers className="text-amber-500 text-3xl mb-3" />
                  <h4 className="font-black text-2xl text-[#0b1b3a]">1000+</h4>
                  <p className="text-gray-500 text-sm">Happy Clients</p>
                </div>

              </div>
            </motion.div>

            {/* Right Video */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              {/* Video Thumbnail */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">

                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200"
                  alt="Factory Video"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-[#0b1b3a]/50"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-24 h-24 rounded-full bg-amber-500 text-[#0b1b3a] flex items-center justify-center shadow-2xl"
                  >
                    <FaPlay className="text-2xl ml-1" />

                    {/* Ripple */}
                    <span className="absolute w-full h-full rounded-full border-4 border-amber-400 animate-ping"></span>
                  </motion.button>

                </div>

              </div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block"
              >
                <FaTools className="text-amber-500 text-3xl mb-2" />
                <h4 className="font-black text-[#0b1b3a]">
                  Premium Machinery
                </h4>
                <p className="text-sm text-gray-500">
                  Trusted Industrial Solutions
                </p>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      <section id="stats" className="bg-amber-500 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-lg text-center"
              >
                <h2 className="text-2xl md:text-4xl font-black text-[#0b1b3a]">
                  {item.number}
                </h2>

                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {item.title}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <section id="team" className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            {/* <span className="text-amber-500 uppercase font-semibold">
              Team Members
            </span> */}
            <span className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-600">
              Team Members
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1b3a] mt-5">
              Meet Our Experts
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="group rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={`https://picsum.photos/500/400?random=${item}`}
                  alt=""
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition duration-500"
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

      <section id="cta" className="relative py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556155092-490a1ba16284')",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1b3a]/85"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Let's Grow Your Business Together
          </h2>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8">
            Contact our experts and get a free consultation for your machinery requirements.
          </p>

          <button className="bg-amber-500 text-[#0b1b3a] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:scale-105 transition-all">
            Get Consultation
          </button>

        </div>
      </section>


    </div>

  );
}

export default Aboutus;
