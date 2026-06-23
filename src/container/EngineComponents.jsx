import React, { useState } from 'react';
console.log(React);

import { motion} from 'framer-motion';
import {
  FaCogs, FaOilCan, FaShieldAlt, FaTruckPickup,
  FaTools, FaStar, FaCheckCircle, FaArrowRight,
  FaWrench, FaFire, FaBolt, FaIndustry, FaAward,
  FaShippingFast, FaHeadset, FaChevronRight, FaPlay
} from 'react-icons/fa';

/* ── animation variants ── */
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function EngineComponents() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { icon: <FaCogs />, name: 'Pistons & Rings', count: 85, accent: '#f59e0b', bg: 'from-amber-500 to-orange-600' },
    { icon: <FaWrench />, name: 'Camshafts', count: 50, accent: '#3b82f6', bg: 'from-blue-500 to-indigo-600' },
    { icon: <FaOilCan />, name: 'Oil Pumps', count: 45, accent: '#10b981', bg: 'from-emerald-500 to-teal-600' },
    { icon: <FaTools />, name: 'Gaskets', count: 120, accent: '#f97316', bg: 'from-orange-500 to-red-600' },
    { icon: <FaShieldAlt />, name: 'Bearings', count: 90, accent: '#8b5cf6', bg: 'from-purple-500 to-violet-600' },
    { icon: <FaTruckPickup />, name: 'Engine Mounts', count: 65, accent: '#06b6d4', bg: 'from-cyan-500 to-blue-600' },
  ];

  const products = [
    { id:1, name:'High-Performance Piston Set', category:'Pistons & Rings', price:499, originalPrice:649, rating:4.9, reviews:234, image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500', badge:'Best Seller' },
    { id:2, name:'Performance Camshaft Kit', category:'Camshafts', price:399, originalPrice:499, rating:4.8, reviews:189, image:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500', badge:'Hot' },
    { id:3, name:'Heavy-Duty Oil Pump', category:'Oil Pumps', price:199, originalPrice:249, rating:4.7, reviews:156, image:'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=500', badge:'New' },
    { id:4, name:'Complete Gasket Kit', category:'Gaskets', price:129, originalPrice:159, rating:4.6, reviews:420, image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500', badge:'Popular' },
    { id:5, name:'Main Bearing Set', category:'Bearings', price:149, originalPrice:189, rating:4.9, reviews:210, image:'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500', badge:'Premium' },
    { id:6, name:'Engine Mount Kit', category:'Engine Mounts', price:229, originalPrice:289, rating:4.8, reviews:98, image:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500', badge:'Sale' },
  ];

  const features = [
    { icon:<FaCheckCircle />, title:'OEM Quality Parts', desc:'Direct replacement parts meeting factory specifications', color:'from-amber-500 to-orange-500' },
    { icon:<FaShieldAlt />, title:'2-Year Warranty', desc:'Comprehensive warranty on all engine components', color:'from-blue-500 to-indigo-500' },
    { icon:<FaTools />, title:'Expert Support', desc:'Technical assistance from certified engineers 24/7', color:'from-emerald-500 to-teal-500' },
    { icon:<FaFire />, title:'Performance Parts', desc:'Upgrade options engineered for maximum power output', color:'from-rose-500 to-pink-500' },
  ];

  const stats = [
    { value:'250+', label:'Engine Parts', icon:<FaCogs /> },
    { value:'50K+', label:'Happy Customers', icon:<FaAward /> },
    { value:'99%', label:'Fitment Rate', icon:<FaBolt /> },
    { value:'24/7', label:'Expert Support', icon:<FaHeadset /> },
  ];

  const filterTabs = ['all','Pistons & Rings','Camshafts','Gaskets','Bearings'];
  const filtered = products.filter(p => activeTab === 'all' || p.category === activeTab);

  return (
    <div className="min-h-screen overflow-x-hidden">

    
      <section id='hero' className="relative min-h-screen flex items-center overflow-hidden bg-[#060d1f] text-white">

        {/* Animated grid lines background */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage:'linear-gradient(rgba(245,158,11,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.3) 1px,transparent 1px)', backgroundSize:'60px 60px' }}
        />

        {/* Glowing orbs */}
        <motion.div animate={{ scale:[1,1.3,1], opacity:[0.3,0.6,0.3] }} transition={{ duration:6, repeat:Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.2,0.5,0.2] }} transition={{ duration:8, repeat:Infinity, delay:2 }}
          className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.4,1], opacity:[0.15,0.35,0.15] }} transition={{ duration:10, repeat:Infinity, delay:4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" animate="visible">

              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest">Premium Engine Components</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black leading-[1.05] mb-6">
                Power Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                  Engine&nbsp;
                </span>
                <br className="hidden sm:block" />
                With Precision
              </motion.h1>

              <motion.p variants={fadeUp} className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Industrial-grade engine components built for durability, reliability, and peak performance in every application — from excavators to heavy trucks.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-base rounded-2xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all">
                  Shop Now <FaArrowRight />
                </motion.button>
                <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 bg-white/5 backdrop-blur text-white font-bold text-base rounded-2xl hover:bg-white/10 transition-all">
                  <FaPlay className="text-amber-500 text-sm" /> Watch Demo
                </motion.button>
              </motion.div>

              {/* Mini stats row */}
            </motion.div>

            {/* RIGHT – Image + floating cards */}
            <motion.div variants={fadeRight} initial="hidden" animate="visible" transition={{ duration:0.9, delay:0.3 }}
              className="relative hidden lg:block">

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-amber-500/20 scale-105" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 scale-110" />

              <motion.div animate={{ y:[0,-18,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut' }}>
                <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900"
                  alt="Engine" className="w-full rounded-[2.5rem] shadow-2xl border border-white/10 object-cover h-[480px]" />
              </motion.div>

              {/* Floating – rating */}
              <motion.div initial={{ opacity:0, x:-40 }} animate={{ opacity:1, x:0 }} transition={{ delay:1.2, type:'spring' }}
                className="absolute -left-8 top-20 bg-[#0d1b35] border border-amber-500/30 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_,i)=><FaStar key={i} className="text-amber-500 text-sm" />)}
                </div>
                <div className="text-white font-black text-lg">4.9 / 5.0</div>
                <div className="text-gray-400 text-xs">Customer Rating</div>
              </motion.div>

              {/* Floating – parts count */}
              <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ delay:1.5, type:'spring' }}
                className="absolute -right-6 top-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl px-5 py-4 shadow-2xl text-black">
                <div className="font-black text-2xl">250+</div>
                <div className="font-bold text-sm">Engine Parts</div>
              </motion.div>

              {/* Floating – shipping */}
              <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.8, type:'spring' }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d1b35] border border-white/10 rounded-2xl px-6 py-3 shadow-2xl backdrop-blur flex items-center gap-3">
                <FaShippingFast className="text-amber-500 text-2xl" />
                <div><div className="text-white font-black text-sm">Free Express Shipping</div><div className="text-gray-400 text-xs">On orders over $299</div></div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full">
            <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#0a1628"/>
          </svg>
        </div>
      </section>

     
      <section id='stats' className="bg-white py-10 border-y border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-amber-400 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 text-xl group-hover:bg-amber-100 transition-all flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0b1b3a]">{s.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section id='category' className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
              Browse Categories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a]">Engine Component <span className="text-amber-500">Categories</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Find the exact part you need from our comprehensive catalog of premium engine components
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={i} variants={fadeUp}
                onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y:-8 }} className="group cursor-pointer">
                <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${hoveredCard === i ? 'border-amber-400 shadow-xl shadow-amber-100' : 'border-gray-200'} bg-white shadow-md`}>

                  {/* Accent top bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${cat.bg}`} />

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.bg} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {cat.icon}
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-500">
                        {cat.count} parts
                      </span>
                    </div>
                    <h3 className="font-black text-xl text-[#0b1b3a] mb-2">{cat.name}</h3>
                    <p className="text-gray-500 text-sm mb-5">Premium quality components with OEM fitment guarantee</p>
                    <button className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${cat.bg} opacity-0 group-hover:opacity-100 text-white`}>
                      Browse Parts <FaChevronRight className="text-xs" />
                    </button>
                    <button className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border border-gray-200 text-gray-600 group-hover:opacity-0 absolute bottom-6 left-6 right-6`}>
                      Browse Parts <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section id='product' className="py-20 sm:py-24 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
              Featured Products
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Top Engine <span className="text-amber-400">Parts</span></h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Trusted by thousands of mechanics and fleet operators across the country
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-12 scrollbar-hide">
            {filterTabs.map((tab, i) => (
              <motion.button key={i} whileTap={{ scale:0.95 }} onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all border ${
                  activeTab === tab
                    ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/25'
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-amber-500/40 hover:text-white'
                }`}>
                {tab === 'all' ? 'All Products' : tab}
              </motion.button>
            ))}
          </div>

          {/* Product grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((p, i) => (
              <motion.div key={p.id} layout
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y:-6 }} className="group">
                <div className="bg-[#060d1f] border border-white/8 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300">

                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f] via-transparent to-transparent" />
                    {p.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase">
                        {p.badge}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-red-500/90 text-white text-xs font-bold">
                      -{Math.round(((p.originalPrice-p.price)/p.originalPrice)*100)}%
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{p.category}</div>
                    <h3 className="font-black text-white text-base sm:text-lg leading-snug mb-3 line-clamp-2">{p.name}</h3>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_,j) => <FaStar key={j} size={12} className={j < Math.floor(p.rating) ? 'text-amber-400' : 'text-gray-600'} />)}
                      <span className="text-gray-400 text-xs ml-1">({p.reviews})</span>
                    </div>

                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <span className="text-gray-500 line-through text-sm mr-2">${p.originalPrice}</span>
                        <span className="text-2xl sm:text-3xl font-black text-white">${p.price}</span>
                      </div>
                      <div className="text-xs text-emerald-400 font-bold">In Stock</div>
                    </div>

                    <motion.button whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      className="w-full py-3 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section id='whychoose' className="py-20 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-200 to-transparent hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b1b3a]">Built for <span className="text-amber-500">Performance</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Feature list */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }} className="space-y-5">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeLeft} whileHover={{ x:6 }}
                  className="flex gap-5 p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-[#0b1b3a] text-lg mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image side with overlay info */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once:true }} transition={{ delay:0.2 }}
              className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-orange-50 rounded-3xl blur-2xl" />
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Engine Parts" className="relative rounded-2xl sm:rounded-3xl w-full shadow-2xl border border-gray-100 h-72 sm:h-96 object-cover" />

              {/* Overlay stat cards */}
              <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.6 }}
                className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white border border-amber-200 rounded-xl p-4 shadow-xl">
                <div className="text-amber-500 font-black text-2xl">15+</div>
                <div className="text-gray-500 text-xs">Years Experience</div>
              </motion.div>

              <motion.div initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.8 }}
                className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-4 shadow-xl text-black">
                <div className="font-black text-2xl">OEM</div>
                <div className="font-bold text-xs">Certified Parts</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section id='cta' className="py-20 sm:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600" />
        <motion.div animate={{ rotate:[0,360] }} transition={{ duration:30, repeat:Infinity, ease:'linear' }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <motion.div animate={{ rotate:[360,0] }} transition={{ duration:25, repeat:Infinity, ease:'linear' }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once:true }}
            className="text-center text-black max-w-3xl mx-auto">
            <motion.div variants={fadeUp}>
              <FaIndustry className="mx-auto text-5xl sm:text-6xl mb-6 opacity-80" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 leading-tight">
              Need Help Finding the Right Parts?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/80 text-base sm:text-lg mb-10 leading-relaxed">
              Our certified engine specialists are ready to help you identify the perfect components for your specific application — from diagnostics to fitment.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-10 py-4 sm:px-12 sm:py-5 bg-black text-white font-black text-base sm:text-lg rounded-2xl shadow-2xl hover:bg-[#060d1f] transition-all flex items-center justify-center gap-3">
                Contact Our Experts <FaArrowRight />
              </motion.button>
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                className="px-10 py-4 sm:px-12 sm:py-5 border-2 border-black text-black font-black text-base sm:text-lg rounded-2xl hover:bg-black hover:text-white transition-all">
                Browse Full Catalog
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default EngineComponents;
