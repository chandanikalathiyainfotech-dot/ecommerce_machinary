import React from 'react';
console.log(React);
import { motion } from "framer-motion";
import {
    FaTruckMonster,
    FaIndustry,
    FaTools,
    FaShieldAlt,
    FaShippingFast,
    FaHeadset,
} from "react-icons/fa";


function HeavyMachinery() {

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

    return (
        <div>
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
                            className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 font-bold uppercase text-sm"
                        >
                            Heavy Machinery Parts
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white"
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
    );
}

export default HeavyMachinery;