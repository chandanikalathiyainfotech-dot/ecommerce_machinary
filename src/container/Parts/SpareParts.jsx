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
} from "react-icons/fa";


function SpareParts() {

    const categories = [
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

    return (
        <div>

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
                        <span className="text-amber-500"> Spare Parts</span>
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

                        {categories.map((item, index) => (
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
    );
}

export default SpareParts;