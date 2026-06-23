import React from 'react';
console.log(React);

import { motion } from 'framer-motion';
import {
  FaTools,
  FaWrench,
  FaOilCan,
  FaShieldAlt,
  FaShippingFast,
  FaCheck,
  FaCartPlus,
  FaStar,
  FaBoxOpen,
  FaThermometerHalf,
  FaFan,
  FaArrowRight
} from 'react-icons/fa';

function MaintenanceKits() {

  const kits = [
    {
      id: 1,
      name: "Heavy Equipment Preventive Kit",
      description: "Complete preventive maintenance package for excavators, bulldozers, and loaders",
      price: 1249,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=800",
      includes: [
        "Oil & Air Filters",
        "Hydraulic Oil (20L)",
        "Grease Cartridges (10)",
        "Belt Inspection Kit",
        "Maintenance Manual"
      ],
      rating: 4.9
    },
    {
      id: 2,
      name: "Engine Overhaul Essentials",
      description: "All-in-one engine maintenance kit for optimal performance and longevity",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      includes: [
        "Full Gasket Set",
        "Piston Rings",
        "Engine Bearings",
        "Valve Train Components",
        "Seals & O-Rings"
      ],
      rating: 5.0
    },
    {
      id: 3,
      name: "Electrical System Tune-Up Kit",
      description: "Comprehensive electrical maintenance package for industrial machinery",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      includes: [
        "Wire Connectors Assortment",
        "Multimeter & Test Leads",
        "Fuses & Relays Kit",
        "Battery Terminal Cleaners",
        "Electrical Tape & Tools"
      ],
      rating: 4.7
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "2-Year Warranty",
      desc: "All kits backed by comprehensive warranty"
    },
    {
      icon: <FaShippingFast />,
      title: "Same Day Shipping",
      desc: "Order before 2 PM for express delivery"
    },
    {
      icon: <FaTools />,
      title: "Free Tools",
      desc: "Basic tools included with every purchase"
    },
    {
      icon: <FaCheck />,
      title: "100% Genuine Parts",
      desc: "OEM quality guaranteed"
    }
  ];

  const categories = [
    { name: "Preventive Maintenance", icon: <FaWrench /> },
    { name: "Emergency Kits", icon: <FaBoxOpen /> },
    { name: "Seasonal Packages", icon: <FaThermometerHalf /> },
    { name: "Custom Solutions", icon: <FaTools /> },
    { name: "Cooling System", icon: <FaFan /> },
    { name: "Lubrication", icon: <FaOilCan /> }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Totally New Unique Diagonal Split */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[95vh] flex items-center overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 flex">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-[#0b1b3a]"
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-gradient-to-br from-amber-50 to-orange-50"
            style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
            {/* Left Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-white shadow-xl"
                  >
                    <FaTools />
                  </motion.div>
                  <div>
                    <h4 className="text-amber-400 font-black text-base sm:text-lg md:text-xl uppercase tracking-widest">Premium Quality</h4>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">Trusted by industry leaders</p>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8"
              >
                <span className="block">Maintenance</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 block mt-2">
                  Kits That Deliver
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-500">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed"
              >
                Keep your machinery running at peak performance with our premium maintenance solutions designed for industrial excellence.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
              >
                {[
                  { icon: <FaShieldAlt />, text: "OEM Parts" },
                  { icon: <FaShippingFast />, text: "Fast Delivery" },
                  { icon: <FaCheck />, text: "Quality Guaranteed" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl"
                  >
                    <span className="text-amber-400 text-lg sm:text-2xl">{item.icon}</span>
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 sm:px-14 sm:py-7 bg-gradient-to-r from-amber-500 to-orange-500 text-[#0b1b3a] rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center gap-3"
                >
                  Shop Now <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 sm:px-14 sm:py-7 bg-transparent border-2 sm:border-4 border-white text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl hover:bg-white hover:text-[#0b1b3a] transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Product Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative mt-10 lg:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=800"
                    alt="Maintenance Kits"
                    className="rounded-2xl sm:rounded-[3rem] shadow-2xl border-4 sm:border-8 border-white w-full"
                  />
                </motion.div>

                {/* 3D Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.6, duration: 1, type: "spring" }}
                  className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 z-40"
                >
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-xl sm:text-2xl md:text-3xl font-black">20%</div>
                      <div className="text-xs sm:text-sm font-bold uppercase">OFF</div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -z-10 -inset-8 sm:-inset-12 bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-amber-500/10 rounded-[3rem] sm:rounded-[4rem] blur-3xl"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                  transition={{ duration: 7, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
            {/* Left Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl text-white shadow-xl"
                  >
                    <FaTools />
                  </motion.div>
                  <div>
                    <h4 className="text-amber-400 font-black text-xl uppercase tracking-widest">Premium Quality</h4>
                    <p className="text-gray-400 text-lg">Trusted by industry leaders</p>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
              >
                <span className="block">Maintenance</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 block mt-2">
                  Kits That Deliver
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-amber-500">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9 }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
              >
                Keep your machinery running at peak performance with our premium maintenance solutions designed for industrial excellence.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {[
                  { icon: <FaShieldAlt />, text: "OEM Parts" },
                  { icon: <FaShippingFast />, text: "Fast Delivery" },
                  { icon: <FaCheck />, text: "Quality Guaranteed" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl"
                  >
                    <span className="text-amber-400 text-2xl">{item.icon}</span>
                    <span className="text-white font-bold text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-14 py-7 bg-gradient-to-r from-amber-500 to-orange-500 text-[#0b1b3a] rounded-3xl font-black text-xl shadow-2xl hover:shadow-orange-500/40 flex items-center gap-3"
                >
                  Shop Now <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-14 py-7 bg-transparent border-4 border-white text-white rounded-3xl font-black text-xl hover:bg-white hover:text-[#0b1b3a] transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

      {/* Categories Section */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Maintenance Categories</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Find the perfect maintenance solution for your equipment</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 md:mb-5 group-hover:rotate-12 transition-all shadow-xl">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-[#0b1b3a]">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kits Section */}
      <section className="py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Featured Maintenance Kits</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Our most popular maintenance packages trusted by industry leaders</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {kits.map((kit, index) => (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl group"
              >
                <div className="relative">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  {kit.originalPrice && (
                    <div className="absolute top-6 right-6 bg-red-500 text-white px-6 py-2 rounded-full font-bold">
                      {Math.round(((kit.originalPrice - kit.price) / kit.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(kit.rating) ? 'text-amber-500' : 'text-gray-300'} size={20} />
                    ))}
                    <span className="text-gray-500 font-medium">{kit.rating}</span>
                  </div>

                  <h3 className="font-black text-2xl text-[#0b1b3a] mb-4">{kit.name}</h3>
                  <p className="text-gray-600 mb-6">{kit.description}</p>

                  <div className="space-y-3 mb-8">
                    {kit.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FaCheck className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    {kit.originalPrice && (
                      <span className="text-gray-400 line-through text-xl">${kit.originalPrice}</span>
                    )}
                    <span className="text-4xl font-black text-[#0b1b3a]">${kit.price}</span>
                  </div>

                  <button className="w-full py-5 bg-amber-500 text-[#0b1b3a] rounded-2xl font-black text-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-3">
                    <FaCartPlus />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-6 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-600 font-bold text-sm uppercase tracking-widest mb-6">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1b3a] mb-8">
                Maintenance Kits That Deliver <span className="text-amber-500">Results</span>
              </h2>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white flex-shrink-0 shadow-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-[#0b1b3a] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-4 border-amber-500 rounded-[3rem]"></div>
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                  alt="Maintenance Benefits"
                  className="relative z-10 w-full rounded-[3rem] shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0b1b3a] via-[#1e3a8a] to-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Need a Custom Maintenance Kit?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Our experts can create custom maintenance packages tailored specifically to your equipment and operational needs.
            </p>
            <button className="px-14 py-6 bg-amber-500 text-[#0b1b3a] rounded-2xl font-black text-2xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl">
              Contact Our Maintenance Experts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MaintenanceKits;
