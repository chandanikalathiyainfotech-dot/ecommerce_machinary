import React, { useState } from 'react';
console.log(React);

import { motion } from 'framer-motion';
import {
  FaFilter,
  FaTint,
  FaOilCan,
  FaWind,
  FaCar,
  FaTruckPickup,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaShippingFast,
  FaCalendarCheck
} from 'react-icons/fa';

function FiltersLubricants() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      icon: <FaFilter />,
      name: 'Oil Filters',
      count: 120,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaWind />,
      name: 'Air Filters',
      count: 95,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaTint />,
      name: 'Fuel Filters',
      count: 80,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaOilCan />,
      name: 'Engine Oils',
      count: 60,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: <FaCar />,
      name: 'Cabin Filters',
      count: 70,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaTruckPickup />,
      name: 'Hydraulic Oils',
      count: 45,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Oil Filter',
      category: 'Oil Filters',
      price: 18,
      originalPrice: 24,
      rating: 4.9,
      reviews: 420,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'High-Performance Air Filter',
      category: 'Air Filters',
      price: 32,
      originalPrice: 40,
      rating: 4.8,
      reviews: 310,
      image: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=400',
      badge: 'Top Rated'
    },
    {
      id: 3,
      name: 'Diesel Fuel Filter',
      category: 'Fuel Filters',
      price: 28,
      originalPrice: 35,
      rating: 4.7,
      reviews: 250,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      badge: 'Popular'
    },
    {
      id: 4,
      name: 'Full Synthetic Engine Oil 5W-30',
      category: 'Engine Oils',
      price: 45,
      originalPrice: 55,
      rating: 4.9,
      reviews: 560,
      image: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=400',
      badge: 'Hot'
    },
    {
      id: 5,
      name: 'Cabin Air Filter with Activated Carbon',
      category: 'Cabin Filters',
      price: 25,
      originalPrice: 32,
      rating: 4.8,
      reviews: 380,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      badge: 'New'
    },
    {
      id: 6,
      name: 'Anti-Wear Hydraulic Oil ISO 46',
      category: 'Hydraulic Oils',
      price: 65,
      originalPrice: 78,
      rating: 4.7,
      reviews: 190,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      badge: 'Pro Choice'
    }
  ];

  const filterFinderSteps = [
    {
      number: 1,
      title: 'Select Vehicle',
      description: 'Choose your vehicle make and model'
    },
    {
      number: 2,
      title: 'Filter Type',
      description: 'Select the type of filter you need'
    },
    {
      number: 3,
      title: 'View Results',
      description: 'See all compatible filters instantly'
    }
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'OEM & Aftermarket',
      description: 'Genuine parts and high-quality alternatives'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Expert Advice',
      description: 'Free help finding the right products'
    },
    {
      icon: <FaShippingFast />,
      title: 'Fast Shipping',
      description: 'Same-day dispatch available'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Maintenance Reminders',
      description: 'Never miss a service interval'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section - Oil Drop Theme */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-40 md:pb-48 bg-gradient-to-br from-[#0b1b3a] via-slate-900 to-[#0b1b3a] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-6 sm:mb-8">
                <FaFilter className="text-cyan-400 text-sm sm:text-base" />
                <span className="text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Filter Experts
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 sm:mb-8">
                Filters &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-500">
                  Lubricants
                </span>
                <span className="block">For Every Need</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-lg">
                Premium filters and high-quality lubricants to keep your equipment running smoothly and efficiently.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg shadow-2xl hover:shadow-cyan-500/40 flex items-center justify-center gap-3"
                >
                  Shop Now <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-4 border-white text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg hover:bg-white hover:text-[#0b1b3a] transition-all"
                >
                  Find Filter
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                {[
                  { value: '500+', label: 'Filter Types' },
                  { value: '200+', label: 'Lubricants' },
                  { value: '99%', label: 'Match Rate' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-bold text-xs sm:text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mt-10 lg:mt-0"
            >
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-20 mx-4 sm:mx-8 lg:mx-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                  alt="Filters & Lubricants"
                  className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-4 sm:border-8 border-slate-800 w-full"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute top-0 left-0 sm:-top-8 sm:-left-4 lg:-top-10 lg:-left-10 z-30"
              >
                <div className="bg-slate-800/90 backdrop-blur border border-slate-700 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl">
                  <FaTint className="text-cyan-400 text-xl sm:text-3xl mb-1 sm:mb-2" />
                  <div className="font-black text-lg sm:text-2xl">200+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Lubes</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute bottom-0 right-0 sm:-bottom-8 sm:-right-4 lg:-bottom-10 lg:-right-10 z-30"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl">
                  <FaFilter className="text-white text-xl sm:text-3xl mb-1 sm:mb-2" />
                  <div className="font-black text-lg sm:text-2xl text-white">500+</div>
                  <div className="text-white/90 text-xs sm:text-sm">Filters</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0 72L48 78C96 84 192 96 288 92C384 88 480 68 576 64C672 60 768 72 864 76C960 80 1056 76 1152 74C1248 72 1344 72 1392 72H1440V120H0V72Z"
              fill="#f0f9ff"
            />
          </svg>
        </div>
      </section>

      {/* Filter Finder Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 text-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">Find Your Perfect Filter</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Use our quick filter finder to locate the exact filter for your vehicle or equipment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {filterFinderSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-7 sm:p-8 md:p-10 border border-blue-100 text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-[2rem] flex items-center justify-center text-white mb-6 sm:mb-8 shadow-2xl"
                >
                  <div className="text-2xl sm:text-3xl font-black">{step.number}</div>
                </motion.div>
                <h3 className="font-black text-xl sm:text-2xl mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-14 md:mt-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 sm:px-14 sm:py-7 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl shadow-2xl hover:shadow-cyan-500/40"
            >
              Start Filter Finder
            </motion.button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-white text-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">Shop by Category</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Browse our comprehensive range of filters and lubricants
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  <div className={`h-36 sm:h-40 md:h-44 bg-gradient-to-br ${cat.color} flex items-center justify-center text-5xl sm:text-6xl md:text-7xl text-white`}>
                    {cat.icon}
                  </div>
                  <div className="p-6 sm:p-8 md:p-10">
                    <h3 className="font-black text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{cat.name}</h3>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">{cat.count} Products Available</p>
                    <button className="w-full py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-white bg-gradient-to-r from-[#0b1b3a] to-slate-800 hover:from-cyan-500 hover:to-blue-500 transition-all text-sm sm:text-base">
                      Browse {cat.name}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 text-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">Featured Products</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Top-rated filters and lubricants trusted by professionals
            </p>
          </div>

          {/* Filter Tabs - scrollable on mobile */}
          <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {['all', 'Oil Filters', 'Air Filters', 'Fuel Filters', 'Engine Oils'].map((tab, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-cyan-500'
                }`}
              >
                {tab === 'all' ? 'All Products' : tab}
              </motion.button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {products
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 sm:p-7 md:p-8">
                    <div className="text-cyan-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-wrap">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}
                          size={15}
                        />
                      ))}
                      <span className="text-gray-600 ml-1 text-sm">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                      {product.originalPrice && (
                        <span className="text-base sm:text-xl text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-600">${product.price}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#0b1b3a] to-slate-800 text-white rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:from-cyan-500 hover:to-blue-500 transition-all"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-[#0b1b3a] via-slate-900 to-[#0b1b3a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-7 sm:mb-10">Why Choose Our Products?</h2>

              <div className="space-y-5 sm:space-y-7 md:space-y-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 sm:gap-6"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-10 lg:mt-0"
            >
              <div className="relative mx-4 sm:mx-8 lg:mx-0">
                <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-full h-full border-2 sm:border-4 border-cyan-500/30 rounded-2xl sm:rounded-[3rem]" />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                  alt="Filters & Lubricants"
                  className="rounded-2xl sm:rounded-[3rem] shadow-2xl relative z-10 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              Need Help Choosing?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
              Our filter and lubricant experts are here to help you find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 sm:px-14 sm:py-7 bg-white text-cyan-600 rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl shadow-2xl"
              >
                Get Expert Advice
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 sm:px-14 sm:py-7 border-2 sm:border-4 border-white text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl hover:bg-white hover:text-cyan-600 transition-all"
              >
                Browse All Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FiltersLubricants;
