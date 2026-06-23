import React, { useState } from 'react';
console.log(React);
import { motion } from 'framer-motion';
import {
  FaBolt,
  FaPlug,
  FaBatteryFull,
  FaSolarPanel,
  FaLightbulb,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaMicrochip,
} from 'react-icons/fa';

function ElectricalParts() {
  const [activeTab, setActiveTab] = useState('All Products');
  const [quantity, setQuantity] = useState({});

  const categories = [
    {
      icon: <FaBolt />,
      title: 'Cables & Wires',
      count: 125,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      desc: 'High-quality electrical wiring solutions'
    },
    {
      icon: <FaPlug />,
      title: 'Connectors & Plugs',
      count: 95,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      desc: 'Industrial-grade connectors and plugs'
    },
    {
      icon: <FaBatteryFull />,
      title: 'Batteries & Power',
      count: 80,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      desc: 'Reliable power solutions for every need'
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting & Fixtures',
      count: 110,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      desc: 'Energy-efficient lighting solutions'
    },
    {
      icon: <FaMicrochip />,
      title: 'Electronics & Controls',
      count: 75,
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800',
      desc: 'Advanced control systems and components'
    },
    {
      icon: <FaSolarPanel />,
      title: 'Solar & Renewable',
      count: 65,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800',
      desc: 'Sustainable energy solutions'
    },
  ];

  const products = [
    {
      id: 'EP-001',
      name: 'Heavy Duty Electrical Cable 100m',
      category: 'Cables & Wires',
      price: 249,
      originalPrice: 319,
      rating: 4.9,
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 'EP-002',
      name: 'Industrial Connector Kit',
      category: 'Connectors & Plugs',
      price: 159,
      originalPrice: 199,
      rating: 4.8,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400',
    },
    {
      id: 'EP-003',
      name: '12V Heavy Duty Battery',
      category: 'Batteries & Power',
      price: 189,
      originalPrice: 239,
      rating: 4.7,
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400',
    },
    {
      id: 'EP-004',
      name: 'LED Industrial Light Set',
      category: 'Lighting & Fixtures',
      price: 299,
      originalPrice: 379,
      rating: 4.9,
      tag: 'Energy Efficient',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
    },
    {
      id: 'EP-005',
      name: 'PLC Control Module',
      category: 'Electronics & Controls',
      price: 599,
      originalPrice: 749,
      rating: 5.0,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=400',
    },
    {
      id: 'EP-006',
      name: 'Solar Panel 300W',
      category: 'Solar & Renewable',
      price: 449,
      originalPrice: 579,
      rating: 4.8,
      tag: 'Eco-Friendly',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
    },
  ];

  const tabs = ['All Products', 'Cables & Wires', 'Connectors & Plugs', 'Batteries & Power', 'Lighting & Fixtures', 'Electronics & Controls', 'Solar & Renewable'];
  const filteredProducts = products.filter(p => activeTab === 'All Products' || p.category === activeTab);

  const incrementQty = (id) => {
    setQuantity(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrementQty = (id) => {
    if ((quantity[id] || 1) > 1) {
      setQuantity(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0b1b3a]/5 to-white">
      {/* Hero Section - Parallax Style */}
      <section className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
            alt="Electrical Parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3a] via-[#0b1b3a]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 sm:px-6 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                Electrical Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
                Power Your <span className="text-amber-500">World</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-xl">
                Premium electrical components, wiring, and power solutions for industrial, commercial, and residential applications.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button className="px-8 py-4 sm:px-10 sm:py-5 bg-amber-500 text-[#0b1b3a] rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl">
                  Shop Electrical Parts
                </button>
                <button className="px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Categories - Horizontal Scroll with Glow */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Browse Electrical Categories</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Find the perfect electrical components for your project</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-white shadow-2xl border border-gray-100">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8 md:p-10 relative -mt-16 sm:-mt-20 md:-mt-24">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-[2rem] flex items-center justify-center text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-5 md:mb-6 group-hover:rotate-12 transition-all shadow-xl">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">{cat.title}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{cat.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-500 font-black text-base sm:text-lg md:text-xl">{cat.count} Products</span>
                      <FaArrowRight className="text-white text-lg sm:text-xl md:text-2xl group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products - Interactive Grid */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0b1b3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">Featured Electrical Products</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Top-rated electrical components trusted by professionals</p>
          </div>

          {/* Filter Tabs - scrollable on mobile */}
          <div className="flex overflow-x-auto gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-3 sm:px-7 sm:py-4 rounded-full font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-amber-500 text-[#0b1b3a] shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl group"
              >
                <div className="relative">
                  <div className="h-56 sm:h-64 md:h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  {product.tag && (
                    <span className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-amber-500 text-[#0b1b3a] px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-black uppercase shadow-lg">
                      {product.tag}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 md:p-10">
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">{product.category}</span>
                  <h3 className="font-black text-xl sm:text-2xl text-[#0b1b3a] mt-2 sm:mt-3 mb-4 sm:mb-6 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'} size={16} />
                    ))}
                    <span className="text-gray-500 font-medium ml-2 text-sm">{product.rating}</span>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center">
                      <div>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-base sm:text-xl mr-3">${product.originalPrice}</span>
                        )}
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a]">${product.price}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-xl sm:rounded-2xl p-1.5 sm:p-2">
                        <button
                          onClick={() => decrementQty(product.id)}
                          className="w-9 h-9 sm:w-12 sm:h-12 bg-[#0b1b3a] text-white rounded-lg sm:rounded-xl font-bold hover:bg-amber-500 hover:text-[#0b1b3a] transition-all"
                        >
                          -
                        </button>
                        <span className="w-8 sm:w-12 text-center font-black text-lg sm:text-xl text-[#0b1b3a]">
                          {quantity[product.id] || 1}
                        </span>
                        <button
                          onClick={() => incrementQty(product.id)}
                          className="w-9 h-9 sm:w-12 sm:h-12 bg-[#0b1b3a] text-white rounded-lg sm:rounded-xl font-bold hover:bg-amber-500 hover:text-[#0b1b3a] transition-all"
                        >
                          +
                        </button>
                      </div>

                      <button className="flex-1 py-3 sm:py-4 md:py-5 bg-[#0b1b3a] text-white rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-amber-500 hover:text-[#0b1b3a] transition-all flex items-center justify-center gap-2 sm:gap-3">
                        <FaPlug className="text-sm sm:text-base" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - 3D Cards */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a] mb-3 sm:mb-4">Why Choose Our Electrical Parts?</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">Quality, safety, and reliability in every product</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { icon: <FaCheckCircle />, title: 'Certified Quality', desc: 'All products meet international safety standards' },
              { icon: <FaShippingFast />, title: 'Express Shipping', desc: 'Same-day dispatch on all orders' },
              { icon: <FaShieldAlt />, title: '2-Year Warranty', desc: 'Comprehensive warranty on all electrical parts' },
              { icon: <FaHeadset />, title: '24/7 Support', desc: 'Expert electrical advice anytime you need it' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-[3rem] p-7 sm:p-8 md:p-10 shadow-2xl border border-gray-100 text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-7 md:mb-8 shadow-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0b1b3a] mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient Background */}
      <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-r from-[#0b1b3a] via-[#1e3a8a] to-[#0b1b3a] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
                Ready to Power Up?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                Get in touch with our electrical experts today for customized solutions, bulk pricing, and technical support.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-6 md:px-14 md:py-7 bg-amber-500 text-[#0b1b3a] rounded-xl sm:rounded-[2rem] font-black text-base sm:text-lg md:text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl">
                  Contact Our Experts
                </button>
                <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-6 md:px-14 md:py-7 border-2 sm:border-4 border-white text-white rounded-xl sm:rounded-[2rem] font-black text-base sm:text-lg md:text-xl hover:bg-white hover:text-[#0b1b3a] transition-all">
                  Request a Quote
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="mt-8 lg:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
                alt="Electrical Solutions"
                className="rounded-2xl sm:rounded-[3rem] shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElectricalParts;
