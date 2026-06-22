import React, { useState } from 'react';
console.log(React);

import { motion } from 'framer-motion';
import {
  FaCogs,
  FaOilCan,
  FaShieldAlt,
  FaTruckPickup,
  FaTools,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaWrench,
  FaFire
} from 'react-icons/fa';

function EngineComponents() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      icon: <FaCogs />,
      name: 'Pistons & Rings',
      count: 85,
      color: 'from-rose-500 to-orange-500'
    },
    {
      icon: <FaCogs />,
      name: 'Camshafts',
      count: 50,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <FaOilCan />,
      name: 'Oil Pumps',
      count: 45,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <FaWrench />,
      name: 'Gaskets',
      count: 120,
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <FaShieldAlt />,
      name: 'Bearings',
      count: 90,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaTruckPickup />,
      name: 'Engine Mounts',
      count: 65,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'High-Performance Piston Set',
      category: 'Pistons & Rings',
      price: 499,
      originalPrice: 649,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Performance Camshaft Kit',
      category: 'Camshafts',
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      badge: 'Hot'
    },
    {
      id: 3,
      name: 'Heavy-Duty Oil Pump',
      category: 'Oil Pumps',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=400',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Complete Gasket Kit',
      category: 'Gaskets',
      price: 129,
      originalPrice: 159,
      rating: 4.6,
      reviews: 420,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      badge: 'Popular'
    },
    {
      id: 5,
      name: 'Main Bearing Set',
      category: 'Bearings',
      price: 149,
      originalPrice: 189,
      rating: 4.9,
      reviews: 210,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Engine Mount Kit',
      category: 'Engine Mounts',
      price: 229,
      originalPrice: 289,
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=400',
      badge: 'Sale'
    }
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'OEM Quality Parts',
      description: 'Direct replacement parts meeting factory specifications'
    },
    {
      icon: <FaShieldAlt />,
      title: '2-Year Warranty',
      description: 'Comprehensive warranty on all engine components'
    },
    {
      icon: <FaTools />,
      title: 'Expert Support',
      description: 'Technical assistance available 24/7'
    },
    {
      icon: <FaFire />,
      title: 'Performance Parts',
      description: 'Upgrade options for better performance'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1b3a] via-slate-900 to-[#0b1b3a] text-white">
      {/* Hero Section - Wave Design */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-500/30 to-orange-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full mb-8">
                <FaCogs className="text-amber-500 animate-spin" />
                <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
                  Engine Experts
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
                Power Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
                  Engine
                </span>
                <span className="block">With Precision</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-lg">
                High-performance engine components designed for reliability, power, and durability in every application.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-[#0b1b3a] rounded-3xl font-black text-xl shadow-2xl hover:shadow-amber-500/40 flex items-center gap-3"
                >
                  Shop Now <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-4 border-white text-white rounded-3xl font-black text-xl hover:bg-white hover:text-[#0b1b3a] transition-all"
                >
                  View Catalog
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '250+', label: 'Engine Parts' },
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '99%', label: 'Fitment Rate' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Animated Engine Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                  alt="Engine Components"
                  className="rounded-[3rem] shadow-2xl border-8 border-slate-800"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                // animate={{
                //   y: [0, -20, 0]
                // }}
                // transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
                className="absolute -top-10 -left-10 z-30"
              >
                <div className="bg-slate-800/90 backdrop-blur border border-slate-700 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FaStar className="text-amber-500 text-3xl" />
                    <div className="font-black text-2xl">4.9</div>
                  </div>
                  <div className="text-gray-400">Rating</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                // animate={{
                //   y: [0, 20, 0]
                // }}
                // transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -right-10 z-30"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-6 shadow-2xl text-[#0b1b3a]">
                  <div className="font-black text-3xl mb-1">Fast</div>
                  <div className="font-bold">Shipping</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 160L60 170.7C120 181.3 240 202.7 360 192C480 181.3 600 138.7 720 122.7C840 106.7 960 117.3 1080 128C1200 138.7 1320 149.3 1380 154.7L1440 160V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V160Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-slate-50 text-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Engine Component Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect engine parts for your needs in our comprehensive catalog
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className={`h-40 bg-gradient-to-br ${cat.color} flex items-center justify-center text-6xl text-white`}>
                    {cat.icon}
                  </div>
                  <div className="p-8">
                    <h3 className="font-black text-2xl mb-2">{cat.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">{cat.count} Products Available</p>
                    <button className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#0b1b3a] to-slate-800 hover:from-amber-500 hover:to-orange-500 transition-all">
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
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white text-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Featured Engine Parts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our top-selling engine components trusted by professionals worldwide
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'Pistons & Rings', 'Camshafts', 'Gaskets', 'Bearings'].map((tab, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-[#0b1b3a] shadow-xl'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-500'
                }`}
              >
                {tab === 'all' ? 'All Products' : tab}
              </motion.button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {products
              .filter(p => activeTab === 'all' || p.category === activeTab)
              .map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="font-black text-2xl mb-4 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}
                          size={18}
                        />
                      ))}
                      <span className="text-gray-600 ml-2">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      {product.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                      <span className="text-4xl font-black">${product.price}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-5 bg-gradient-to-r from-[#0b1b3a] to-slate-800 text-white rounded-2xl font-black text-lg hover:from-amber-500 hover:to-orange-500 transition-all"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-[#0b1b3a] via-slate-900 to-[#0b1b3a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-10">Why Choose Our Engine Parts?</h2>

              <div className="space-y-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 15 }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-2xl mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-lg">{feature.description}</p>
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
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full border-4 border-amber-500/30 rounded-[3rem]" />
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                  alt="Engine Parts"
                  className="rounded-[3rem] shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
        <div className="container mx-auto px-4 text-center text-[#0b1b3a]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Need Help Finding Parts?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Our engine experts are here to help you find the perfect components for your application.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-7 bg-[#0b1b3a] text-white rounded-3xl font-black text-xl shadow-2xl"
              >
                Contact Us Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-7 border-4 border-[#0b1b3a] text-[#0b1b3a] rounded-3xl font-black text-xl hover:bg-[#0b1b3a] hover:text-white transition-all"
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

export default EngineComponents;
