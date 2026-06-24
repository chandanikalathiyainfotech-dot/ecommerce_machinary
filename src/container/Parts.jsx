import React, { useState, useEffect } from 'react';
console.log(React);

import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useSearchParams } from 'react-router-dom';
import {
    FaCog, FaTools, FaArrowRight, FaShieldAlt,
    FaTruckMonster, FaIndustry, FaShippingFast,
    FaHeadset, FaTruckPickup, FaCheckCircle, FaWrench,
    FaBolt, FaFilter, FaWater, FaFire, FaCalendarCheck, FaChevronRight,
} from 'react-icons/fa';


const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const pageAnim = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }, exit: { opacity: 0, y: -20, transition: { duration: 0.3 } } };


const CATEGORIES = [
    { id: 'heavy', label: 'Heavy Machinery', short: 'Heavy', icon: <FaTruckMonster /> },
    { id: 'spare', label: 'Spare Parts', short: 'Spare', icon: <FaCog /> },
    { id: 'tools', label: 'Tools & Equipment', short: 'Tools', icon: <FaTools /> },
    { id: 'truck', label: 'Truck Parts', short: 'Truck', icon: <FaTruckPickup /> },
    { id: 'hydraulic', label: 'Hydraulic Systems', short: 'Hydraulic', icon: <FaWater /> },
    { id: 'electrical', label: 'Electrical Parts', short: 'Electrical', icon: <FaBolt /> },
    { id: 'maintenance', label: 'Maintenance Kits', short: 'Maintenance', icon: <FaWrench /> },
    { id: 'engine', label: 'Engine Components', short: 'Engine', icon: <FaFire /> },
    { id: 'filters', label: 'Filters & Lubricants', short: 'Filters', icon: <FaFilter /> },
];


const CONFIG = {
    heavy: {
        theme: { hero: 'from-slate-900 via-[#0b1b3a] to-slate-900', accent: 'amber', accentHex: '#f59e0b', badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
        hero: { tag: 'Industrial Grade', title: ['Premium Heavy', 'Equipment', 'Parts'], titleAccent: 1, sub: 'Genuine spare parts and industrial components for excavators, loaders, bulldozers and cranes.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900' },
        stats: [{ v: '5000+', l: 'Parts Available' }, { v: '1000+', l: 'Clients' }, { v: '15+', l: 'Years Exp.' }, { v: '24/7', l: 'Support' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Excavator Parts' }, { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', name: 'Bulldozer Parts' }, { img: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=600', name: 'Loader Parts' }, { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Crane Parts' }],
        features: [{ icon: <FaShieldAlt />, t: 'Genuine Parts' }, { icon: <FaShippingFast />, t: 'Fast Delivery' }, { icon: <FaTools />, t: 'Technical Support' }, { icon: <FaHeadset />, t: '24/7 Assistance' }],
        industries: ['Construction', 'Mining', 'Manufacturing', 'Agriculture', 'Marine', 'Energy'],
        ctaTitle: 'Need Heavy Machinery Parts?',
        ctaSub: 'Contact our experts today and get genuine industrial parts with fast delivery.',
    },
    spare: {
        theme: { hero: 'from-[#0b1b3a] via-slate-900 to-[#0b1b3a]', accent: 'orange', accentHex: '#f97316', badge: 'bg-orange-500/10 border-orange-500/30 text-orange-400' },
        hero: { tag: 'OEM Certified', title: ['Genuine', 'Spare', 'Parts'], titleAccent: 0, sub: 'High-performance industrial machinery components built for durability and reliability.', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=900' },
        stats: [{ v: '3000+', l: 'Spare Parts' }, { v: '800+', l: 'Brands' }, { v: '99%', l: 'Fitment Rate' }, { v: '48hr', l: 'Delivery' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1581092919535-7146ff1a5903?w=600', name: 'Engine Parts' }, { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', name: 'Hydraulic Parts' }, { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Transmission' }],
        features: [{ icon: <FaCheckCircle />, t: 'Long Life Performance' }, { icon: <FaShieldAlt />, t: '100% Original' }, { icon: <FaShippingFast />, t: 'Warranty Protected' }, { icon: <FaHeadset />, t: 'Expert Advice' }],
        industries: ['Oil & Gas', 'Cement', 'Power', 'Steel', 'Textile', 'Chemical'],
        ctaTitle: 'Need Custom Spare Parts?',
        ctaSub: 'Contact our experts for industrial machinery requirements.',
    },
    tools: {
        theme: { hero: 'from-gray-900 via-zinc-900 to-gray-900', accent: 'yellow', accentHex: '#eab308', badge: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' },
        hero: { tag: 'Pro Grade Tools', title: ['Build More.', 'Break Less.', 'Perform.'], titleAccent: 2, sub: 'Comprehensive range of industrial-grade tools and equipment designed for durability, precision, and performance.', img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900' },
        stats: [{ v: '245+', l: 'Power Tools' }, { v: '189+', l: 'Hand Tools' }, { v: '132+', l: 'Lifting Gear' }, { v: '5yr', l: 'Warranty' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600', name: 'Power Tools' }, { img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600', name: 'Hand Tools' }, { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600', name: 'Lifting Gear' }, { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Safety Equipment' }],
        features: [{ icon: <FaShieldAlt />, t: 'Industrial Grade' }, { icon: <FaShippingFast />, t: '24hr Delivery' }, { icon: <FaTools />, t: 'Warranty Included' }, { icon: <FaHeadset />, t: 'Expert Support' }],
        industries: ['Construction', 'Fabrication', 'Automotive', 'Mining', 'Shipbuilding', 'Aerospace'],
        ctaTitle: 'Ready to Upgrade Your Toolkit?',
        ctaSub: 'Join thousands of professionals who rely on our tools every day.',
    },
    truck: {
        theme: { hero: 'from-[#0b1b3a] via-blue-950 to-[#0b1b3a]', accent: 'amber', accentHex: '#f59e0b', badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
        hero: { tag: 'Fleet Specialists', title: ['Keep Your', 'Fleet', 'Moving.'], titleAccent: 1, sub: 'Premium quality truck parts for all major brands. Fast delivery and expert support available.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900' },
        stats: [{ v: '50K+', l: 'Parts in Stock' }, { v: '10K+', l: 'Happy Customers' }, { v: '24/7', l: 'Expert Support' }, { v: '1yr', l: 'Warranty' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Engine Components' }, { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Brakes & Suspension' }, { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600', name: 'Fuel System' }, { img: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=600', name: 'Electrical Parts' }],
        features: [{ icon: <FaCheckCircle />, t: 'OEM Quality' }, { icon: <FaShippingFast />, t: '24hr Dispatch' }, { icon: <FaShieldAlt />, t: 'Warranty Included' }, { icon: <FaHeadset />, t: 'Fleet Specialists' }],
        industries: ['Logistics', 'Construction', 'Mining', 'Agriculture', 'Municipal', 'Military'],
        ctaTitle: 'Ready to Upgrade Your Fleet?',
        ctaSub: 'Get in touch with our fleet specialists for bulk pricing and expert advice.',
    },
    hydraulic: {
        theme: { hero: 'from-blue-950 via-[#0b1b3a] to-blue-950', accent: 'cyan', accentHex: '#06b6d4', badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
        hero: { tag: 'High Pressure Systems', title: ['Power Your', 'Industrial', 'Future'], titleAccent: 2, sub: 'High-performance hydraulic systems, pumps, motors, and components for the most demanding industrial applications.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900' },
        stats: [{ v: '85+', l: 'Pump Types' }, { v: '62+', l: 'Motor Models' }, { v: '120+', l: 'Filters & Oil' }, { v: '25yr', l: 'Experience' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Hydraulic Pumps' }, { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600', name: 'Hydraulic Motors' }, { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', name: 'Filters & Oil' }, { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Valves & Controls' }],
        features: [{ icon: <FaCheckCircle />, t: 'OEM Quality' }, { icon: <FaShippingFast />, t: 'Fast Shipping' }, { icon: <FaShieldAlt />, t: 'Full Warranty' }, { icon: <FaHeadset />, t: 'Expert Support' }],
        industries: ['Construction', 'Mining', 'Marine', 'Agricultural', 'Steel', 'Aerospace'],
        ctaTitle: 'Ready to Power Up Your Hydraulics?',
        ctaSub: 'Contact our hydraulic experts for customized solutions and bulk pricing.',
    },
    electrical: {
        theme: { hero: 'from-slate-900 via-indigo-950 to-slate-900', accent: 'blue', accentHex: '#3b82f6', badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
        hero: { tag: 'Certified Electrical', title: ['Power Your', 'World With', 'Precision'], titleAccent: 1, sub: 'Premium electrical components, wiring, and power solutions for industrial, commercial, and residential applications.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900' },
        stats: [{ v: '125+', l: 'Cable Types' }, { v: '95+', l: 'Connectors' }, { v: '110+', l: 'Lighting' }, { v: '2yr', l: 'Warranty' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Cables & Wires' }, { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600', name: 'Connectors & Plugs' }, { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', name: 'Batteries & Power' }, { img: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=600', name: 'Electronics & Controls' }],
        features: [{ icon: <FaCheckCircle />, t: 'Safety Certified' }, { icon: <FaShippingFast />, t: 'Express Shipping' }, { icon: <FaShieldAlt />, t: '2-Year Warranty' }, { icon: <FaHeadset />, t: '24/7 Support' }],
        industries: ['Power Plants', 'Refineries', 'Factories', 'Commercial', 'Residential', 'Marine'],
        ctaTitle: 'Ready to Power Up?',
        ctaSub: 'Get in touch with our electrical experts for customized solutions and technical support.',
    },
    maintenance: {
        theme: { hero: 'from-[#0b1b3a] via-slate-900 to-amber-950/30', accent: 'amber', accentHex: '#f59e0b', badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
        hero: { tag: 'Premium Kits', title: ['Kits That', 'Deliver', 'Excellence'], titleAccent: 2, sub: 'Keep your machinery running at peak performance with our premium maintenance solutions designed for industrial excellence.', img: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=900' },
        stats: [{ v: '3+', l: 'Kit Types' }, { v: 'OEM', l: 'Quality Parts' }, { v: '20%', l: 'Avg Savings' }, { v: '48hr', l: 'Delivery' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=600', name: 'Preventive Kits' }, { img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', name: 'Engine Overhaul' }, { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Electrical Tune-Up' }],
        features: [{ icon: <FaShieldAlt />, t: '2-Year Warranty' }, { icon: <FaShippingFast />, t: 'Same Day Shipping' }, { icon: <FaTools />, t: 'Free Tools' }, { icon: <FaCheckCircle />, t: '100% Genuine' }],
        industries: ['Mining', 'Construction', 'Manufacturing', 'Oil & Gas', 'Power', 'Agriculture'],
        ctaTitle: 'Need a Custom Maintenance Kit?',
        ctaSub: 'Our experts can create custom packages tailored to your equipment and operational needs.',
    },
    engine: {
        theme: { hero: 'from-[#060d1f] via-slate-900 to-[#060d1f]', accent: 'amber', accentHex: '#f59e0b', badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
        hero: { tag: 'Engine Experts', title: ['Power Your', 'Engine', 'With Precision'], titleAccent: 1, sub: 'Industrial-grade engine components built for durability, reliability, and peak performance in every application.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900' },
        stats: [{ v: '250+', l: 'Engine Parts' }, { v: '50K+', l: 'Customers' }, { v: '99%', l: 'Fitment Rate' }, { v: '24/7', l: 'Expert Support' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Pistons & Rings' }, { img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', name: 'Camshafts' }, { img: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=600', name: 'Oil Pumps' }, { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', name: 'Gaskets & Bearings' }],
        features: [{ icon: <FaCheckCircle />, t: 'OEM Quality Parts' }, { icon: <FaShieldAlt />, t: '2-Year Warranty' }, { icon: <FaTools />, t: 'Expert Support' }, { icon: <FaFire />, t: 'Performance Parts' }],
        industries: ['Heavy Equipment', 'Trucking', 'Mining', 'Marine', 'Power Gen', 'Agriculture'],
        ctaTitle: 'Need Help Finding Engine Parts?',
        ctaSub: 'Our certified engine specialists are ready to help you find the perfect components.',
    },
    filters: {
        theme: { hero: 'from-cyan-950 via-[#0b1b3a] to-cyan-950', accent: 'cyan', accentHex: '#06b6d4', badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
        hero: { tag: 'Filter Experts', title: ['Filters &', 'Lubricants', 'For Every Need'], titleAccent: 1, sub: 'Premium filters and high-quality lubricants to keep your equipment running smoothly and efficiently.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900' },
        stats: [{ v: '500+', l: 'Filter Types' }, { v: '200+', l: 'Lubricants' }, { v: '99%', l: 'Match Rate' }, { v: '24hr', l: 'Dispatch' }],
        cats: [{ img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', name: 'Oil Filters' }, { img: 'https://images.unsplash.com/photo-1581093618047-4eb28b4f9b6b?w=600', name: 'Air Filters' }, { img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', name: 'Fuel Filters' }, { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600', name: 'Engine Oils' }],
        features: [{ icon: <FaCheckCircle />, t: 'OEM & Aftermarket' }, { icon: <FaShieldAlt />, t: 'Expert Advice' }, { icon: <FaShippingFast />, t: 'Fast Shipping' }, { icon: <FaCalendarCheck />, t: 'Service Reminders' }],
        industries: ['Automotive', 'Agriculture', 'Construction', 'Marine', 'Industrial', 'Transport'],
        ctaTitle: 'Need Help Choosing?',
        ctaSub: 'Our filter and lubricant experts are here to help you find exactly what you need.',
    },
};


const ROUTE_MAP = {
    heavy: '/Parts',
    spare: '/Parts',
    tools: '/tools-equipment',
    truck: '/truck-parts',
    hydraulic: '/hydraulic-systems',
    electrical: '/electrical-parts',
    maintenance: '/maintenance-kits',
    engine: '/engine-components',
    filters: '/filters-lubricants',
};


function Parts() {
    const [searchParams] = useSearchParams();
    const cat = searchParams.get('cat');
    const [active, setActive] = useState(() => {
        return cat && typeof CONFIG !== 'undefined' && CONFIG[cat] ? cat : 'heavy';
    });

    useEffect(() => {
        if (cat && typeof CONFIG !== 'undefined' && CONFIG[cat] && cat !== active) {
            setActive(cat);
            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [cat, active]);
    
    const cfg = CONFIG[active];
    const theme = cfg.theme;

    return (
        <div className="overflow-x-hidden">

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    variants={pageAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >

                    <section className={`relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-gradient-to-br ${theme.hero} text-white overflow-hidden`}>

                        {/* Grid bg */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{ backgroundImage: `linear-gradient(${theme.accentHex}33 1px,transparent 1px),linear-gradient(90deg,${theme.accentHex}33 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />

                        {/* Glow orb */}
                        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.4, 0.15] }} transition={{ duration: 7, repeat: Infinity }}
                            className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none"
                            style={{ background: `${theme.accentHex}22` }} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 md:py-24">
                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                                {/* Left */}
                                <motion.div variants={stagger} initial="hidden" animate="visible">
                                    <motion.div variants={fadeUp}
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border ${theme.badge} mb-5 sm:mb-6`}>
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.accentHex }} />
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{cfg.hero.tag}</span>
                                    </motion.div>

                                    <motion.h1 variants={fadeUp}
                                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 sm:mb-6">
                                        {cfg.hero.title.map((line, i) => (
                                            <span key={i} className={`block ${i === cfg.hero.titleAccent ? 'text-transparent bg-clip-text' : ''}`}
                                                style={i === cfg.hero.titleAccent ? { backgroundImage: `linear-gradient(90deg, ${theme.accentHex}, #fb923c)`, WebkitBackgroundClip: 'text' } : {}}>
                                                {line}
                                            </span>
                                        ))}
                                    </motion.h1>

                                    <motion.p variants={fadeUp}
                                        className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-7 sm:mb-9 max-w-lg">
                                        {cfg.hero.sub}
                                    </motion.p>

                                    <motion.div variants={fadeUp} className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                            className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 font-black text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg transition-all text-black"
                                            style={{ background: `linear-gradient(135deg, ${theme.accentHex}, #fb923c)`, boxShadow: `0 8px 25px ${theme.accentHex}40` }}>
                                            Explore Parts <FaArrowRight className="text-xs" />
                                        </motion.button>
                                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                            className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border border-white/20 bg-white/5 backdrop-blur text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all">
                                            Request Quote
                                        </motion.button>
                                    </motion.div>

                                    {/* Stats row */}
                                    <motion.div variants={fadeUp}
                                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
                                        {cfg.stats.map((s, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-xl sm:text-2xl md:text-3xl font-black" style={{ color: theme.accentHex }}>{s.v}</div>
                                                <div className="text-gray-500 text-[9px] sm:text-xs mt-0.5">{s.l}</div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Right image */}
                                <motion.div variants={fadeRight} initial="hidden" animate="visible" transition={{ delay: 0.25 }}
                                    className="relative mt-8 lg:mt-0">
                                    <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 pointer-events-none"
                                        style={{ background: `linear-gradient(135deg, ${theme.accentHex}44, transparent)` }} />
                                    <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                                        <img src={cfg.hero.img} alt={cfg.hero.title[0]}
                                            className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 object-cover h-56 xs:h-64 sm:h-80 md:h-[420px]" />
                                    </motion.div>

                                    {/* Floating stat badge */}
                                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, type: 'spring' }}
                                        className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl text-black z-10"
                                        style={{ background: `linear-gradient(135deg, ${theme.accentHex}, #fb923c)` }}>
                                        <div className="font-black text-base sm:text-xl leading-none">{cfg.stats[0].v}</div>
                                        <div className="font-bold text-[9px] sm:text-xs">{cfg.stats[0].l}</div>
                                    </motion.div>

                                    {/* Floating shipping */}
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, type: 'spring' }}
                                        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0d1b35]/90 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl backdrop-blur flex items-center gap-2 z-10">
                                        <FaShippingFast style={{ color: theme.accentHex }} className="text-base sm:text-lg flex-shrink-0" />
                                        <div>
                                            <div className="text-white font-black text-[10px] sm:text-xs">Fast Delivery</div>
                                            <div className="text-gray-400 text-[9px] sm:text-[10px]">Nationwide shipping</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>

                        {/* Wave */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-8 sm:h-10 md:h-14">
                                <path d="M0 25 C360 50 1080 0 1440 25 L1440 50 L0 50 Z" fill="white" />
                            </svg>
                        </div>
                    </section>

                    {/* ── CATEGORIES GRID ── */}
                    <section className="py-14 sm:py-18 md:py-20 bg-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10 sm:mb-12">
                                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3"
                                    style={{ background: `${theme.accentHex}15`, border: `1px solid ${theme.accentHex}40`, color: theme.accentHex }}>
                                    Parts Categories
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b1b3a]">Browse <span style={{ color: theme.accentHex }}>by Category</span></h2>
                            </motion.div>

                            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className={`grid gap-4 sm:gap-6 ${cfg.cats.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'}`}>
                                {cfg.cats.map((cat, i) => (
                                    <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-44 sm:h-52 md:h-60">
                                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                                                <h3 className="text-white font-black text-sm sm:text-base md:text-lg">{cat.name}</h3>
                                                <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="text-[10px] sm:text-xs font-bold" style={{ color: theme.accentHex }}>View Parts</span>
                                                    <FaChevronRight style={{ color: theme.accentHex }} className="text-[8px] sm:text-[10px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* ── FEATURES + IMAGE ── */}
                    <section className={`py-14 sm:py-18 md:py-20 bg-gradient-to-br ${theme.hero} text-white`}>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                                {/* Features */}
                                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <motion.div variants={fadeUp}
                                        className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5"
                                        style={{ background: `${theme.accentHex}15`, border: `1px solid ${theme.accentHex}40`, color: theme.accentHex }}>
                                        Why Choose Us
                                    </motion.div>
                                    <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-10">
                                        Built for <span style={{ color: theme.accentHex }}>Your Industry</span>
                                    </motion.h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                        {cfg.features.map((f, i) => (
                                            <motion.div key={i} variants={fadeLeft} whileHover={{ x: 4 }}
                                                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all group">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                                                    style={{ background: `${theme.accentHex}25`, color: theme.accentHex }}>
                                                    {f.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-white text-sm sm:text-base">{f.t}</h3>
                                                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Guaranteed for every order</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Industries */}
                                <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.15 }}>
                                    <motion.h3 variants={fadeUp} className="text-xl sm:text-2xl font-black text-white mb-5 sm:mb-6">
                                        Industries We <span style={{ color: theme.accentHex }}>Serve</span>
                                    </motion.h3>
                                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                        {cfg.industries.map((ind, i) => (
                                            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.04 }}
                                                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all cursor-pointer group">
                                                <FaIndustry className="text-sm sm:text-base flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: theme.accentHex }} />
                                                <span className="text-gray-300 font-bold text-xs sm:text-sm">{ind}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* ── CTA ── */}
                    <section className="py-14 sm:py-18 md:py-20 bg-white">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
                                style={{ background: `linear-gradient(135deg, ${theme.accentHex}15, ${theme.accentHex}05)`, border: `1px solid ${theme.accentHex}25` }}>

                                {/* Blobs */}
                                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full blur-3xl pointer-events-none"
                                    style={{ background: `${theme.accentHex}15` }} />
                                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 rounded-full blur-2xl pointer-events-none"
                                    style={{ background: `${theme.accentHex}10` }} />

                                <div className="relative z-10 max-w-2xl mx-auto">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl mx-auto flex items-center justify-center text-2xl sm:text-3xl text-white mb-5 sm:mb-6 shadow-xl"
                                        style={{ background: `linear-gradient(135deg, ${theme.accentHex}, #fb923c)` }}>
                                        <FaShieldAlt />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b1b3a] mb-3 sm:mb-4">{cfg.ctaTitle}</h2>
                                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-7 sm:mb-8 max-w-xl mx-auto">{cfg.ctaSub}</p>
                                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
                                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                            className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 font-black text-sm sm:text-base rounded-xl sm:rounded-2xl text-white shadow-lg transition-all"
                                            style={{ background: `linear-gradient(135deg, #0b1b3a, #1e3a8a)` }}>
                                            Contact Us Today <FaArrowRight className="text-xs" />
                                        </motion.button>
                                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                            className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 font-black text-sm sm:text-base rounded-xl sm:rounded-2xl border-2 border-[#0b1b3a] text-[#0b1b3a] hover:bg-[#0b1b3a] hover:text-white transition-all">
                                            Browse All Products
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Full page link */}
                            {ROUTE_MAP[active] !== '/Parts' && (
                                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className="text-center mt-6 sm:mt-8">
                                    <NavLink to={ROUTE_MAP[active]}
                                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold transition-all hover:gap-3"
                                        style={{ color: theme.accentHex }}>
                                        View Full {CATEGORIES.find(c => c.id === active)?.label} Page
                                        <FaArrowRight className="text-xs sm:text-sm" />
                                    </NavLink>
                                </motion.div>
                            )}
                        </div>
                    </section>

                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Parts;
