import React from 'react';
console.log(React);
import { motion } from "framer-motion";
import {
    FaCog,
    FaTools,
    FaTruckMoving,
    FaArrowRight,
    FaShieldAlt,
    FaSearch,
    FaTruckMonster,
    FaIndustry,
    FaShippingFast,
    FaHeadset,
    FaTruckPickup,
    FaGasPump,
    FaOilCan,
    FaRoad,
    FaStar,
    FaCheckCircle,
} from "react-icons/fa";



function Parts() {



    const categories = [
        {
            title: "Excavator Parts",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        },
        {
            title: "Bulldozer Parts",
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
        },
        {
            title: "Loader Parts",
            image:
                "https://images.unsplash.com/photo-1581093458791-9d15482442f6",
        },
        {
            title: "Crane Parts",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        },
    ];

    const features = [
        {
            icon: <FaShieldAlt />,
            title: "Genuine Parts",
        },
        {
            icon: <FaShippingFast />,
            title: "Fast Delivery",
        },
        {
            icon: <FaTools />,
            title: "Technical Support",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Assistance",
        },
    ];

    const sparecategories = [
        {
            title: "Engine Parts",
            icon: <FaCog />,
            image:
                "https://images.unsplash.com/photo-1581092919535-7146ff1a5903?w=1200",
        },
        {
            title: "Hydraulic Parts",
            icon: <FaTools />,
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
        },
        {
            title: "Transmission",
            icon: <FaTruckMoving />,
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
        },
    ];

    const truckPartsCategories = [
        {
            title: "Engine Components",
            icon: <FaCog />,
            count: "156",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        },
        {
            title: "Brakes & Suspension",
            icon: <FaTools />,
            count: "98",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        },
        {
            title: "Fuel System",
            icon: <FaGasPump />,
            count: "76",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        },
        {
            title: "Electrical Parts",
            icon: <FaShieldAlt />,
            count: "134",
            image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800",
        },
        {
            title: "Lubrication",
            icon: <FaOilCan />,
            count: "52",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
        },
        {
            title: "Tires & Wheels",
            icon: <FaRoad />,
            count: "89",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800",
        },
    ];

    const truckPartsProducts = [
        {
            id: "TP-001",
            name: "Heavy Duty Brake Pads",
            price: 129,
            rating: 4.8,
            tag: "Best Seller",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
        },
        {
            id: "TP-002",
            name: "Fuel Injector Set",
            price: 459,
            rating: 4.9,
            tag: "Premium",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400",
        },
        {
            id: "TP-003",
            name: "Air Filter Kit",
            price: 45,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
        },
        {
            id: "TP-004",
            name: "Transmission Filter",
            price: 78,
            rating: 4.7,
            tag: "New",
            image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=400",
        },
    ];

    return (
        <div>

            {/* Heavy Machinery */}
            <div id='heavyMachinery'>
                <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#0b1b3a]/80" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block items-center px-4 py-2 gap-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 font-semibold uppercase text-sm tracking-widest"

                            >
                                Heavy Machinery Parts
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 leading-none text-[28px] min-[357px]:text-[34px] min-[576px]:text-4xl min-[768px]:text-[48px] min-[1440px]:text-6xl font-black text-white"
                            >
                                Premium Heavy Equipment Parts
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 text-gray-300 text-lg"
                            >
                                Genuine spare parts and industrial components
                                for excavators, loaders, bulldozers and cranes.
                            </motion.p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-amber-500 text-[#0b1b3a] rounded-xl font-bold">
                                    Explore Parts
                                </button>

                                <button className="px-8 py-4 border border-white text-white rounded-xl font-bold">
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATEGORY */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">

                        <div className="text-center mb-14">
                            <h2 className="text-4xl md:text-5xl font-black text-[#0b1b3a]">
                                Parts Categories
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {categories.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    className="rounded-3xl overflow-hidden bg-white shadow-xl"
                                >
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="h-56 w-full object-cover"
                                    />

                                    <div className="p-6">
                                        <h3 className="font-black text-xl text-[#0b1b3a]">
                                            {item.title}
                                        </h3>

                                        <button className="mt-4 text-amber-500 font-bold">
                                            View Category →
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* STATS */}
                <section className="py-20 bg-[#0b1b3a]">
                    <div className="container mx-auto px-4">

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                            {[
                                ["5000+", "Parts Available"],
                                ["1000+", "Clients"],
                                ["15+", "Years Experience"],
                                ["24/7", "Support"],
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-3xl p-8 text-center"
                                >
                                    <h3 className="text-4xl font-black text-amber-500">
                                        {item[0]}
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        {item[1]}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* FEATURES */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">

                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-black text-[#0b1b3a]">
                                Why Choose Us
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="bg-white rounded-3xl p-8 shadow-lg text-center"
                                >
                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500 text-[#0b1b3a] flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-5 text-xl font-black text-[#0b1b3a]">
                                        {item.title}
                                    </h3>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* INDUSTRIES */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">

                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-black text-[#0b1b3a]">
                                Industries We Serve
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                "Construction",
                                "Mining",
                                "Manufacturing",
                                "Agriculture",
                                "Marine",
                                "Energy",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.04 }}
                                    className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
                                >
                                    <FaIndustry className="text-amber-500 text-4xl mb-4" />

                                    <h3 className="font-black text-2xl text-[#0b1b3a]">
                                        {item}
                                    </h3>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-amber-500">
                    <div className="container mx-auto px-4 text-center">

                        <FaTruckMonster className="mx-auto text-6xl text-[#0b1b3a]" />

                        <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0b1b3a]">
                            Need Heavy Machinery Parts?
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#0b1b3a]">
                            Contact our experts today and get genuine industrial
                            parts with fast delivery.
                        </p>

                        <button className="mt-8 px-10 py-4 bg-[#0b1b3a] text-white rounded-xl font-bold hover:scale-105 transition-all">
                            Request Quote
                        </button>

                    </div>
                </section>
            </div>

            {/* Spare Parts */}
            <div id='spareParts'>
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source
                            src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div className="absolute inset-0 bg-[#0b1b3a]/80"></div>

                    <div className="relative z-10 text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white"
                        >
                            Genuine
                            <span className="text-amber-500">Spare Parts</span>
                        </motion.h1>

                        <p className="text-gray-300 max-w-2xl mx-auto mt-6">
                            High-performance industrial machinery components built for
                            durability and reliability.
                        </p>

                        <div className="mt-10 max-w-xl mx-auto relative">
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search Spare Parts..."
                                className="w-full pl-14 pr-5 py-5 rounded-2xl outline-none"
                            />
                        </div>
                    </div>
                </section>

                {/* CATEGORY SHOWCASE */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">

                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black text-[#0b1b3a]">
                                Browse Categories
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">

                            {sparecategories.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -15,
                                        rotateX: 5,
                                    }}
                                    className="group relative rounded-3xl overflow-hidden h-[500px] cursor-pointer"
                                >
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        alt=""
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] to-transparent"></div>

                                    <div className="absolute bottom-10 left-10">
                                        <div className="text-5xl text-amber-500 mb-4">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-3xl font-black text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURED PART */}
                <section className="py-24 bg-[#0b1b3a]">

                    <div className="container mx-auto px-6">

                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200"
                                    alt=""
                                    className="rounded-3xl shadow-2xl"
                                />
                            </motion.div>

                            <div>

                                <span className="text-amber-500 font-bold uppercase">
                                    Featured Part
                                </span>

                                <h2 className="text-5xl font-black text-white mt-4">
                                    Hydraulic Pump Assembly
                                </h2>

                                <p className="text-gray-300 mt-6 leading-8">
                                    Designed for heavy-duty construction and industrial
                                    machinery. Maximum efficiency and durability guaranteed.
                                </p>

                                <button className="mt-8 px-8 py-4 bg-amber-500 text-[#0b1b3a] rounded-xl font-black flex items-center gap-3">
                                    View Product
                                    <FaArrowRight />
                                </button>

                            </div>

                        </div>

                    </div>
                </section>

                {/* WHY GENUINE */}
                <section className="py-24 bg-gray-50">

                    <div className="container mx-auto px-6">

                        <div className="text-center mb-16">

                            <h2 className="text-5xl font-black text-[#0b1b3a]">
                                Why Genuine Parts?
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                "Long Life Performance",
                                "100% Original Components",
                                "Warranty Protected",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="bg-white rounded-3xl p-10 text-center shadow-xl"
                                >
                                    <FaShieldAlt className="mx-auto text-5xl text-amber-500 mb-6" />

                                    <h3 className="text-2xl font-black text-[#0b1b3a]">
                                        {item}
                                    </h3>
                                </motion.div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-amber-500 text-center">

                    <h2 className="text-5xl font-black text-[#0b1b3a]">
                        Need Custom Spare Parts?
                    </h2>

                    <p className="mt-5 text-lg text-[#0b1b3a]">
                        Contact our experts for industrial machinery requirements.
                    </p>

                    <button className="mt-8 px-10 py-4 bg-[#0b1b3a] text-white rounded-xl font-bold">
                        Request Quote
                    </button>

                </section>
            </div>

            {/* Truck Parts - Unique Section */}
            <div id='truckParts'>
                {/* Hero Banner for Truck Parts */}
                <section className="relative py-32 bg-gradient-to-r from-[#0b1b3a] to-[#1a365d] overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <FaTruckPickup className="absolute top-10 left-10 text-9xl text-amber-500 animate-pulse" />
                        <FaTruckMonster className="absolute bottom-10 right-10 text-9xl text-amber-500 animate-pulse" style={{animationDelay: '1s'}} />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-5 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 font-bold text-sm uppercase tracking-wider mb-6"
                            >
                                Truck & Commercial Vehicle Parts
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
                            >
                                Keep Your Fleet <span className="text-amber-500">Moving</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-10"
                            >
                                Premium quality truck parts for all major brands. Fast delivery and expert support available.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <button className="px-10 py-5 bg-amber-500 text-[#0b1b3a] rounded-xl font-black text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-xl">
                                    Shop Truck Parts
                                </button>
                                <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-black text-lg hover:bg-white hover:text-[#0b1b3a] transition-all">
                                    Fleet Solutions
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Truck Parts Categories */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-black text-[#0b1b3a] mb-4">Browse Truck Parts Categories</h3>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Find everything you need for your commercial vehicles</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {truckPartsCategories.map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6">
                                            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl text-[#0b1b3a] mb-2">
                                                {cat.icon}
                                            </div>
                                            <h4 className="text-2xl font-black text-white">{cat.title}</h4>
                                            <p className="text-amber-500 font-bold">{cat.count} Products</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Truck Parts Products */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                            <div>
                                <h3 className="text-4xl font-black text-[#0b1b3a] mb-4">Featured Truck Parts</h3>
                                <p className="text-gray-600 text-lg">Top-rated products trusted by fleet owners</p>
                            </div>
                            <button className="px-8 py-4 bg-[#0b1b3a] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#1a2f5a] transition-all">
                                View All <FaArrowRight />
                            </button>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {truckPartsProducts.map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        {product.tag && (
                                            <span className="absolute top-4 left-4 bg-amber-500 text-[#0b1b3a] px-3 py-1 rounded-full text-xs font-black uppercase">
                                                {product.tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-lg text-[#0b1b3a] line-clamp-2 mb-3">{product.name}</h4>
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'} size={14} />
                                            ))}
                                            <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-black text-[#0b1b3a]">${product.price}</span>
                                            <button className="p-3 bg-[#0b1b3a] text-white rounded-lg hover:bg-amber-500 hover:text-[#0b1b3a] transition-all">
                                                <FaTools />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us for Truck Parts */}
                <section className="py-20 bg-gradient-to-r from-[#0b1b3a] to-[#1a365d]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-black text-white mb-4">Why Choose Our Truck Parts?</h3>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Quality you can trust for your entire fleet</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <FaCheckCircle />, title: "OEM Quality", desc: "Genuine and OEM parts" },
                                { icon: <FaShippingFast />, title: "24hr Dispatch", desc: "Fast shipping nationwide" },
                                { icon: <FaShieldAlt />, title: "Warranty", desc: "1-year warranty on all parts" },
                                { icon: <FaHeadset />, title: "Expert Support", desc: "Fleet specialists available" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
                                >
                                    <div className="w-16 h-16 mx-auto bg-amber-500 rounded-2xl flex items-center justify-center text-3xl text-[#0b1b3a] mb-6">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-300">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA for Truck Parts */}
                <section className="py-20 bg-amber-500">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-4xl md:text-5xl font-black text-[#0b1b3a] mb-6">Ready to Upgrade Your Fleet?</h3>
                        <p className="text-xl text-[#0b1b3a]/90 mb-10 max-w-2xl mx-auto">Contact our fleet specialists today for customized solutions.</p>
                        <button className="px-12 py-6 bg-[#0b1b3a] text-white rounded-xl font-black text-lg hover:bg-[#1a2f5a] transition-all transform hover:scale-105 shadow-2xl">
                            Get Fleet Quote
                        </button>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Parts;