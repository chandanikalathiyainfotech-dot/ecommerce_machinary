import React from 'react';
console.log(React);
import {
    FaTools,
    FaCogs,
    FaOilCan,
    FaBolt,
    FaTruck,
    FaArrowRight,
    FaStar,
} from "react-icons/fa";





function SparParts() {

    const categories = [
        {
            icon: <FaCogs />,
            title: "Engine Components",
            count: "120+ Products",
        },
        {
            icon: <FaTools />,
            title: "Hydraulic Systems",
            count: "95+ Products",
        },
        {
            icon: <FaBolt />,
            title: "Electrical Parts",
            count: "80+ Products",
        },
        {
            icon: <FaOilCan />,
            title: "Filters & Lubricants",
            count: "150+ Products",
        },
    ];

    const products = [
        {
            id: 1,
            name: "Hydraulic Pump",
            image:
                "https://images.unsplash.com/photo-1581092160607-ee22731d8b52?w=800",
            price: "$149",
        },
        {
            id: 2,
            name: "Industrial Air Filter",
            image:
                "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800",
            price: "$39",
        },
        {
            id: 3,
            name: "Engine Bearing Kit",
            image:
                "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800",
            price: "$89",
        },
        {
            id: 4,
            name: "Hydraulic Hose Set",
            image:
                "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800",
            price: "$59",
        },
    ];


    return (
        <div>
            <section className="bg-[#0b1b3a] pt-40 pb-24">
                <div className="container mx-auto px-4 text-center">

                    <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-500 rounded-full font-bold uppercase text-sm">
                        Spare Parts
                    </span>

                    <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-white">
                        Genuine Machinery
                        <span className="text-amber-500">
                            {" "}Spare Parts
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
                        Premium quality spare parts for industrial machinery,
                        construction equipment, hydraulic systems and heavy-duty machines.
                    </p>

                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-black text-[#0b1b3a]">
                            Spare Parts Categories
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Find the right replacement parts for your machinery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {categories.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-3xl p-8 text-center hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                            >

                                <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-500 text-[#0b1b3a] flex items-center justify-center text-3xl group-hover:scale-110 transition-all">
                                    {item.icon}
                                </div>

                                <h3 className="mt-6 text-xl font-black text-[#0b1b3a]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    {item.count}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-black text-[#0b1b3a]">
                            Featured Spare Parts
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Top-selling replacement parts trusted by industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                            >

                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                                    />
                                </div>

                                <div className="p-6">

                                    <div className="flex gap-1 text-amber-500 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0b1b3a]">
                                        {product.name}
                                    </h3>

                                    <p className="mt-3 text-2xl font-black text-amber-500">
                                        {product.price}
                                    </p>

                                    <button className="mt-6 w-full py-3 bg-[#0b1b3a] text-white rounded-xl font-bold hover:bg-[#132a59] transition-all">
                                        View Details
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Why Choose */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-black text-[#0b1b3a]">
                            Why Choose Our Parts?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-200">
                            <FaCogs className="text-4xl text-amber-500 mb-4" />
                            <h3 className="font-black text-xl text-[#0b1b3a]">
                                Genuine Quality
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Original spare parts designed for maximum performance.
                            </p>
                        </div>

                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-200">
                            <FaTruck className="text-4xl text-amber-500 mb-4" />
                            <h3 className="font-black text-xl text-[#0b1b3a]">
                                Fast Delivery
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Quick nationwide shipping with secure packaging.
                            </p>
                        </div>

                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-200">
                            <FaTools className="text-4xl text-amber-500 mb-4" />
                            <h3 className="font-black text-xl text-[#0b1b3a]">
                                Expert Support
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Technical assistance from experienced professionals.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#0b1b3a]">
                <div className="container mx-auto px-4">

                    <div className="text-center">

                        <h2 className="text-4xl font-black text-white">
                            Need Help Finding the Right Part?
                        </h2>

                        <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
                            Contact our experts and get the perfect spare part solution
                            for your machinery.
                        </p>

                        <button className="mt-8 px-8 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-xl inline-flex items-center gap-3 hover:bg-amber-400 transition-all">
                            Contact Us
                            <FaArrowRight />
                        </button>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default SparParts;