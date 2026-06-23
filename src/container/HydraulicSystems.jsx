import React, { useState } from 'react';
console.log(React);

import { motion } from 'framer-motion';
import {
  FaTools,
  FaCog,
  FaArrowRight,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaStar,
  FaCheckCircle,
  FaWater,
  FaFilter,
  FaExchangeAlt,
} from 'react-icons/fa';

function HydraulicSystems() {
  const [activeTab, setActiveTab] = useState('All Products');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      icon: <FaWater />,
      title: 'Hydraulic Pumps',
      count: 85,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      desc: 'High-pressure pumps for every application'
    },
    {
      icon: <FaCog />,
      title: 'Hydraulic Motors',
      count: 62,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      desc: 'Powerful motors for industrial use'
    },
    {
      icon: <FaFilter />,
      title: 'Filters & Oil',
      count: 120,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      desc: 'Keep your system clean and efficient'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Valves & Controls',
      count: 95,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      desc: 'Precision control valves and manifolds'
    },
  ];

  const products = [
    {
      id: 'HS-001',
      name: 'Heavy Duty Hydraulic Pump',
      category: 'Hydraulic Pumps',
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 'HS-002',
      name: 'High-Torque Hydraulic Motor',
      category: 'Hydraulic Motors',
      price: 1250,
      originalPrice: 1500,
      rating: 4.8,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
    },
    {
      id: 'HS-003',
      name: 'Hydraulic Filter Kit',
      category: 'Filters & Oil',
      price: 125,
      originalPrice: 160,
      rating: 4.7,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
    },
    {
      id: 'HS-004',
      name: 'Proportional Control Valve',
      category: 'Valves & Controls',
      price: 650,
      originalPrice: 780,
      rating: 4.9,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
    },
    {
      id: 'HS-005',
      name: 'Variable Displacement Pump',
      category: 'Hydraulic Pumps',
      price: 1450,
      originalPrice: 1750,
      rating: 5.0,
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 'HS-006',
      name: 'Hydraulic Oil 20L',
      category: 'Filters & Oil',
      price: 85,
      originalPrice: 105,
      rating: 4.6,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
    },
  ];

  const tabs = ['All Products', 'Hydraulic Pumps', 'Hydraulic Motors', 'Filters & Oil', 'Valves & Controls'];

  const filteredProducts = products.filter(p => activeTab === 'All Products' || p.category === activeTab);

  const faqs = [
    {
      q: 'What types of hydraulic systems do you support?',
      a: 'We support all major types including gear pumps, vane pumps, piston pumps, and complete hydraulic systems for industrial and mobile applications.'
    },
    {
      q: 'Do you offer technical support?',
      a: 'Yes! Our expert team is available 24/7 to help with installation, troubleshooting, and system design questions.'
    },
    {
      q: 'What is your warranty policy?',
      a: 'All hydraulic components come with a standard 1-year warranty, with extended warranties available for commercial fleets.'
    },
    {
      q: 'Do you ship internationally?',
      a: 'Absolutely! We ship worldwide with expedited shipping options available for urgent orders.'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Full Screen with Animated Background */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-[#0b1b3a]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-4 sm:top-20 sm:left-10 text-[80px] sm:text-[120px] md:text-[150px] text-amber-500"
          >
            <FaCog />
          </motion.div>
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 text-[60px] sm:text-[90px] md:text-[120px] text-amber-500"
          >
            <FaTools />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 sm:px-6 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Premium Hydraulic Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
                Power Your <span className="text-amber-500">Industrial Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                High-performance hydraulic systems, pumps, motors, and components for the most demanding industrial applications.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-amber-500 text-[#0b1b3a] rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  Shop Hydraulics <FaArrowRight />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
                  Get a Quote
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {[
                  { num: '25+', label: 'Years Experience' },
                  { num: '10K+', label: 'Happy Customers' },
                  { num: '500+', label: 'Products' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 sm:p-4 md:p-6 bg-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-500">{stat.num}</div>
                    <div className="text-gray-300 font-medium text-xs sm:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl sm:rounded-[3rem] blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
                alt="Hydraulic System"
                className="relative rounded-xl sm:rounded-[2.5rem] shadow-2xl w-full border-2 sm:border-4 border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Grid with Glass Cards */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Browse Hydraulic Categories</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Find the perfect hydraulic components for your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-white shadow-2xl border border-gray-100">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] via-[#0b1b3a]/50 to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-7 md:p-8 relative -mt-14 sm:-mt-16 md:-mt-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-white shadow-xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-all">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2">{cat.title}</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{cat.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-500 font-black text-base sm:text-lg">{cat.count} Products</span>
                      <FaArrowRight className="text-white text-lg sm:text-xl group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Tabs + Grid */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">Featured Hydraulic Products</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Top-rated hydraulic components trusted by professionals</p>
          </div>

          {/* Filter Tabs - scrollable on mobile */}
          <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-8 sm:mb-12 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-amber-500 text-[#0b1b3a] shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl group"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-amber-500 text-[#0b1b3a] px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-black uppercase shadow-lg">
                      {product.tag}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-7 md:p-8">
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">{product.category}</span>
                  <h3 className="font-black text-lg sm:text-xl md:text-2xl text-[#0b1b3a] mt-2 sm:mt-3 mb-3 sm:mb-4 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'} size={15} />
                    ))}
                    <span className="text-gray-500 font-medium ml-2 text-sm">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm sm:text-lg mr-2 sm:mr-3">${product.originalPrice}</span>
                      )}
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b1b3a]">${product.price}</span>
                    </div>
                    <button className="p-3 sm:p-4 bg-[#0b1b3a] text-white rounded-xl sm:rounded-2xl hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                      <FaTools />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Timeline Style */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Why Choose Our Hydraulics?</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Quality you can trust, performance you can count on</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaCheckCircle />, title: 'OEM Quality', desc: 'Genuine and certified components' },
              { icon: <FaShippingFast />, title: 'Fast Shipping', desc: 'Same-day dispatch available' },
              { icon: <FaShieldAlt />, title: 'Full Warranty', desc: '1-year comprehensive warranty' },
              { icon: <FaHeadset />, title: 'Expert Support', desc: '24/7 technical assistance' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-[2.5rem] p-7 sm:p-8 md:p-10 shadow-xl border border-gray-100 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-[#0b1b3a] to-[#1e3a8a] rounded-xl sm:rounded-[2rem] flex items-center justify-center text-3xl sm:text-4xl text-amber-500 mb-5 sm:mb-6 md:mb-8 shadow-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1b3a] mb-2 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Find answers to common questions about our hydraulic systems</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl sm:rounded-[2rem] overflow-hidden shadow-xl border border-gray-100"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-7 md:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-all gap-4"
                >
                  <span className="text-base sm:text-lg md:text-2xl font-black text-[#0b1b3a]">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-amber-500 text-lg sm:text-xl md:text-2xl flex-shrink-0"
                  >
                    <FaArrowRight />
                  </motion.div>
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 sm:px-7 md:px-8 pb-5 sm:pb-7 md:pb-8 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Split Design */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0b1b3a] mb-4 sm:mb-6">
                Ready to Power Up Your Hydraulics?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0b1b3a]/90 mb-8 sm:mb-10 leading-relaxed">
                Contact our hydraulic experts today for customized solutions, bulk pricing, and system design assistance.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 bg-[#0b1b3a] text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-[#1e3a8a] transition-all transform hover:scale-105 shadow-2xl">
                  Get Expert Consultation
                </button>
                <button className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 md:px-14 md:py-7 border-2 sm:border-4 border-[#0b1b3a] text-[#0b1b3a] rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-[#0b1b3a] hover:text-white transition-all">
                  Request a Quote
                </button>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-8 lg:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
                alt="Hydraulic Solutions"
                className="rounded-2xl sm:rounded-[2.5rem] shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HydraulicSystems;
