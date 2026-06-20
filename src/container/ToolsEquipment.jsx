import React, { useState } from 'react';
console.log(React);

import { motion } from "framer-motion";
import {
  FaWrench,
  FaTools,
  FaTruckPickup,
  FaShieldAlt,
  FaHammer,
  FaHardHat,
  FaShippingFast,
  FaHeadset,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaCheckCircle,
  FaWarehouse
} from "react-icons/fa";

function ToolsEquipment() {
  const [activeTab, setActiveTab] = useState("All Tools");

  const categories = [
    { icon: <FaHammer />, title: "Power Tools", count: "245", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c" },
    { icon: <FaWrench />, title: "Hand Tools", count: "189", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b" },
    { icon: <FaTruckPickup />, title: "Lifting Gear", count: "132", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
    { icon: <FaHardHat />, title: "Safety Equipment", count: "98", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd" }
  ];

  const features = [
    { icon: <FaShieldAlt />, title: "Industrial Grade", desc: "Certified for heavy-duty use" },
    { icon: <FaShippingFast />, title: "24hr Delivery", desc: "Express shipping available" },
    { icon: <FaTools />, title: "Warranty Included", desc: "2-5 year warranty on all tools" },
    { icon: <FaHeadset />, title: "Expert Support", desc: "24/7 technical assistance" }
  ];

  const products = [
    { id: "EQ-8831", name: "Heavy Duty Impact Wrench", category: "Power Tools", price: 349, rating: 4.9, tag: "Best Seller", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c" },
    { id: "EQ-4412", name: "Digital Torque Calibrator", category: "Precision", price: 580, rating: 4.8, tag: "Certified", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b" },
    { id: "EQ-9023", name: "50 Ton Hydraulic Jack", category: "Lifting", price: 420, rating: 4.7, tag: "Heavy Duty", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12" },
    { id: "EQ-1102", name: "Pro Arc Welder 250", category: "Power Tools", price: 689, rating: 4.9, tag: "Top Rated", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd" },
    { id: "EQ-7734", name: "Cordless Drill Set", category: "Power Tools", price: 199, rating: 4.6, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c" },
    { id: "EQ-2256", name: "Measuring Tape Pro", category: "Precision", price: 45, rating: 4.8, image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b" },
    { id: "EQ-9912", name: "Socket Set 150pc", category: "Hand Tools", price: 129, rating: 4.5, tag: "New", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b" },
    { id: "EQ-3345", name: "Angle Grinder", category: "Power Tools", price: 289, rating: 4.7, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c" }
  ];

  const subCategories = ["All Tools", "Power Tools", "Hand Tools", "Lifting", "Precision"];

  const filteredProducts = products.filter(p => activeTab === "All Tools" || p.category === activeTab);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0b1b3a]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-semibold text-sm uppercase tracking-widest mb-6">
                Premium Tools & Equipment
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Build the Future with <span className="text-amber-500">Professional Tools</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our comprehensive range of industrial-grade tools and equipment designed for durability, precision, and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-amber-500 text-[#0b1b3a] rounded-xl font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg">
                  Shop Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
                  View Catalog
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800" alt="Tools" className="relative rounded-3xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b1b3a] mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Find the perfect tools for your needs from our extensive categories</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl text-[#0b1b3a] mb-3">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white">{cat.title}</h3>
                    <p className="text-amber-500 font-bold">{cat.count} Products</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-2xl flex items-center justify-center text-3xl text-amber-500 mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#0b1b3a] mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">Top picks from our collection</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {subCategories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === tab ? 'bg-[#0b1b3a] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden aspect-square">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-[#0b1b3a] px-3 py-1 rounded-full text-xs font-black uppercase">
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#0b1b3a] text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <FaShoppingCart />
                  </button>
                </div>
                <div className="p-6">
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-lg font-black text-[#0b1b3a] mt-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-3 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'} size={14} />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#0b1b3a]">${product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1b3a] mb-6">
                Limited Time Offer!
              </h2>
              <p className="text-xl text-[#0b1b3a]/90 mb-8">
                Get 25% off on all power tools. Free shipping on orders over $500.
              </p>
              <button className="px-10 py-5 bg-[#0b1b3a] text-white rounded-xl font-black text-lg hover:bg-[#1a2f5a] transition-all">
                Shop Now - Save 25%
              </button>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600" alt="Sale" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b1b3a] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">Reasons professionals trust our tools</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaCheckCircle />, title: "Genuine Products", desc: "100% authentic tools from trusted brands" },
              { icon: <FaTruck />, title: "Fast Delivery", desc: "Same-day dispatch for all orders" },
              { icon: <FaWarehouse />, title: "Huge Inventory", desc: "Over 5000+ products in stock" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 text-center">
                <div className="w-24 h-24 mx-auto bg-[#0b1b3a] rounded-3xl flex items-center justify-center text-4xl text-amber-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0b1b3a] mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b1b3a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Upgrade Your Toolkit?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied professionals who rely on our tools every day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-amber-500 text-[#0b1b3a] rounded-xl font-black text-lg hover:bg-amber-400 transition-all">
              Explore Products
            </button>
            <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-black text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolsEquipment;
