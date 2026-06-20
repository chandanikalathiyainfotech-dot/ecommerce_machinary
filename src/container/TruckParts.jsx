import React, { useState } from 'react';
console.log(React);

import { motion } from 'framer-motion';
import {
  FaTruckPickup,
  FaCog,
  FaTools,
  FaGasPump,
  FaOilCan,
  FaRoad,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaWarehouse,
  FaAngleRight,
} from 'react-icons/fa';

function TruckParts() {
  const [activeTab, setActiveTab] = useState('All Parts');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const truckCategories = [
    {
      icon: <FaCog />,
      title: 'Engine Components',
      count: 156,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Pistons, filters, belts & more',
    },
    {
      icon: <FaTools />,
      title: 'Brakes & Suspension',
      count: 98,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      description: 'Brake pads, shocks, springs',
    },
    {
      icon: <FaGasPump />,
      title: 'Fuel System',
      count: 76,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      description: 'Injectors, pumps, filters',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Electrical Parts',
      count: 134,
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800',
      description: 'Batteries, alternators, sensors',
    },
    {
      icon: <FaOilCan />,
      title: 'Lubrication',
      count: 52,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      description: 'Oils, filters, additives',
    },
    {
      icon: <FaRoad />,
      title: 'Tires & Wheels',
      count: 89,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800',
      description: 'Tires, rims, lug nuts',
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'OEM Quality',
      desc: 'Genuine and OEM parts for all major brands',
    },
    {
      icon: <FaShippingFast />,
      title: '24hr Dispatch',
      desc: 'Fast shipping across the country',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Warranty Included',
      desc: '1-year warranty on all truck parts',
    },
    {
      icon: <FaHeadset />,
      title: 'Fleet Specialists',
      desc: 'Expert support for your entire fleet',
    },
  ];

  const truckProducts = [
    {
      id: 'TP-001',
      name: 'Heavy Duty Brake Pads',
      category: 'Brakes & Suspension',
      price: 129,
      originalPrice: 159,
      rating: 4.8,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 'TP-002',
      name: 'Fuel Injector Set',
      category: 'Fuel System',
      price: 459,
      originalPrice: 549,
      rating: 4.9,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
    },
    {
      id: 'TP-003',
      name: 'Air Filter Kit',
      category: 'Engine Components',
      price: 45,
      originalPrice: 55,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
    },
    {
      id: 'TP-004',
      name: 'Transmission Filter',
      category: 'Engine Components',
      price: 78,
      originalPrice: 95,
      rating: 4.7,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=400',
    },
    {
      id: 'TP-005',
      name: 'Shock Absorbers Set',
      category: 'Brakes & Suspension',
      price: 234,
      originalPrice: 285,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
    },
    {
      id: 'TP-006',
      name: 'Ignition Coil Pack',
      category: 'Electrical Parts',
      price: 189,
      originalPrice: 229,
      rating: 4.5,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
    },
    {
      id: 'TP-007',
      name: 'Oil Filter 6-Pack',
      category: 'Lubrication',
      price: 54,
      originalPrice: 65,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 'TP-008',
      name: 'Aluminum Wheels (Set of 4)',
      category: 'Tires & Wheels',
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      tag: 'Limited Stock',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
    },
  ];

  const tabs = ['All Parts', 'Engine Components', 'Brakes & Suspension', 'Fuel System', 'Electrical Parts', 'Lubrication', 'Tires & Wheels'];
  const filteredProducts = truckProducts.filter((p) => activeTab === 'All Parts' || p.category === activeTab);

  return (
    <div className="bg-white">
      {/* Hero Section - Unique Split Design */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[90vh]">
          {/* Left Side - Dark */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#0b1b3a] to-[#1e3a8a] p-8 lg:p-16 flex flex-col justify-center"
          >
            <span className="inline-block px-5 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-bold text-sm uppercase tracking-widest mb-6 w-fit">
              Truck & Commercial Vehicle Parts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Keep Your Fleet <span className="text-amber-500">Moving Forward</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Premium quality truck parts for all major brands. Fast delivery, expert support, and unbeatable warranty on every product.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-10 py-5 bg-amber-500 text-[#0b1b3a] rounded-xl font-black text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                Shop Now <FaArrowRight />
              </button>
              <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-black text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
                Get Quote
              </button>
            </div>

            {/* Stats in Hero */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '50K+', label: 'Parts in Stock' },
                { num: '10K+', label: 'Happy Customers' },
                { num: '24/7', label: 'Expert Support' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-amber-500">{stat.num}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image with Overlapping Cards */}
          <div className="relative bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000"
              alt="Truck Parts"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <FaShieldAlt className="text-4xl text-amber-500 mb-3" />
                  <h3 className="font-black text-[#0b1b3a] text-lg">Warranty</h3>
                  <p className="text-gray-600 text-sm">1 Year Warranty on All Parts</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <FaShippingFast className="text-4xl text-amber-500 mb-3" />
                  <h3 className="font-black text-[#0b1b3a] text-lg">Shipping</h3>
                  <p className="text-gray-600 text-sm">24hr Dispatch Available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Horizontal Scroll */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#0b1b3a] mb-2">Shop by Category</h2>
              <p className="text-gray-600 text-lg">Find exactly what you need for your truck</p>
            </div>
            <button className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All <FaAngleRight />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {truckCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                  <div className="absolute inset-0 bg-[#0b1b3a] opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <div className={`transform transition-all duration-500 ${hoveredCategory === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                      <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl text-[#0b1b3a] mb-4">
                        {cat.icon}
                      </div>
                      <h3 className="text-2xl font-black text-white mb-1">{cat.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{cat.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-500 font-black text-lg">{cat.count} Products</span>
                        <FaAngleRight className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Unique Timeline Style */}
      <section className="py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're the trusted choice for fleet owners nationwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center h-full">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center text-3xl text-[#0b1b3a] mb-6 shadow-xl">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{feat.title}</h3>
                  <p className="text-gray-300">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Sidebar Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-black text-[#0b1b3a] mb-8">Categories</h3>
                <div className="space-y-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-between ${
                        activeTab === tab
                          ? 'bg-[#0b1b3a] text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && <FaAngleRight />}
                    </button>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="mt-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-[#0b1b3a]">
                  <h4 className="text-xl font-black mb-4">Need Help?</h4>
                  <p className="text-[#0b1b3a]/90 mb-6">Our fleet specialists are here to assist you!</p>
                  <button className="w-full py-4 bg-[#0b1b3a] text-white rounded-xl font-black hover:bg-[#1e3a8a] transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
                  >
                    <div className="relative">
                      <div className="h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-amber-500 text-[#0b1b3a] px-4 py-2 rounded-full text-xs font-black uppercase shadow-lg">
                          {product.tag}
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <span className="text-amber-500 font-bold text-xs uppercase tracking-wider">{product.category}</span>
                      <h3 className="font-black text-xl text-[#0b1b3a] mt-2 mb-3 line-clamp-2">{product.name}</h3>
                      
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'} size={14} />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm mr-2">${product.originalPrice}</span>
                          )}
                          <span className="text-2xl font-black text-[#0b1b3a]">${product.price}</span>
                        </div>
                        <button className="p-3 bg-[#0b1b3a] text-white rounded-xl hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                          <FaTools />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - Full Width with Diagonal Cut */}
      <section className="py-20 bg-gradient-to-r from-[#0b1b3a] via-[#1e3a8a] to-[#0b1b3a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <FaTruckPickup className="text-[200px] text-amber-500" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Save <span className="text-amber-500">15%</span> on All Truck Parts
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Plus free shipping on orders over $500. Don't wait - this offer won't last!
              </p>
              <button className="px-14 py-6 bg-amber-500 text-[#0b1b3a] rounded-2xl font-black text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl">
                Shop the Sale Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - 3 Column Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaWarehouse />,
                title: 'Huge Inventory',
                desc: 'Over 50,000 truck parts in stock and ready to ship to your location',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <FaShippingFast />,
                title: 'Lightning Fast Delivery',
                desc: 'Same-day shipping for most orders with multiple delivery options',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: <FaShieldAlt />,
                title: '100% Quality Guarantee',
                desc: 'All parts tested and certified for quality and performance',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center text-4xl text-white mb-8 shadow-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0b1b3a] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Simple & Impactful */}
      <section className="py-24 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1b3a] mb-6">
                Ready to Upgrade Your Fleet?
              </h2>
              <p className="text-xl text-[#0b1b3a]/85 mb-8 leading-relaxed">
                Get in touch with our fleet specialists for customized solutions, bulk pricing, and expert advice tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-12 py-6 bg-[#0b1b3a] text-white rounded-2xl font-black text-xl hover:bg-[#1e3a8a] transition-all transform hover:scale-105 shadow-xl">
                  Get Fleet Quote
                </button>
                <button className="px-12 py-6 border-3 border-[#0b1b3a] text-[#0b1b3a] rounded-2xl font-black text-xl hover:bg-[#0b1b3a] hover:text-white transition-all">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700"
                alt="Fleet Trucks"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TruckParts;
