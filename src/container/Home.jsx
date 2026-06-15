import React, { useEffect, useState } from "react";
console.log(React);
import { FaArrowRight, FaPlay, FaIndustry, FaUsers, FaTools, FaAward, FaShippingFast, FaHeadset, FaCalendarAlt, FaCogs, FaTruckMoving, FaWrench, FaStar, FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const slides = [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600",
];


function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <FaAward />,
            title: "Premium Quality",
            desc: "High-performance machinery built for durability, efficiency, and long-term reliability.",
        },
        {
            icon: <FaShippingFast />,
            title: "Fast Delivery",
            desc: "Quick and secure delivery across India with real-time shipment tracking.",
        },
        {
            icon: <FaTools />,
            title: "Expert Maintenance",
            desc: "Professional installation, maintenance, and repair services by experts.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            desc: "Dedicated customer support team available whenever you need assistance.",
        },
    ];

    const stats = [
        {
            number: "15+",
            text: "Years Experience",
        },
        {
            number: "500+",
            text: "Machines Delivered",
        },
        {
            number: "1000+",
            text: "Happy Clients",
        },
        {
            number: "24/7",
            text: "Support Service",
        },
    ];

    const brands = [
        "CATERPILLAR",
        "JCB",
        "KOMATSU",
        "HITACHI",
        "LIEBHERR",
        "VOLVO",
        "DOOSAN",
        "HYUNDAI",
    ];

    const blogs = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1000",
            date: "15 June 2026",
            title: "Top 5 Industrial Machinery Trends in 2026",
            desc: "Explore the latest innovations transforming the manufacturing industry.",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000",
            date: "10 June 2026",
            title: "How to Choose the Right Heavy Equipment",
            desc: "A complete guide to selecting machinery for your industrial projects.",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000",
            date: "05 June 2026",
            title: "Maintenance Tips for Maximum Productivity",
            desc: "Reduce downtime and improve performance with expert maintenance tips.",
        },
    ];

    const services = [
        {
            icon: <FaIndustry />,
            title: "Industrial Machinery",
            desc: "High-performance industrial machines for manufacturing and production facilities.",
        },
        {
            icon: <FaTools />,
            title: "Spare Parts Supply",
            desc: "Genuine OEM spare parts and components for all major machinery brands.",
        },
        {
            icon: <FaWrench />,
            title: "Maintenance Services",
            desc: "Preventive and corrective maintenance solutions to minimize downtime.",
        },
        {
            icon: <FaTruckMoving />,
            title: "Fast Delivery",
            desc: "Reliable and secure nationwide delivery of machinery and equipment.",
        },
        {
            icon: <FaCogs />,
            title: "Installation Support",
            desc: "Professional machinery installation and commissioning by experts.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Technical Support",
            desc: "Dedicated support team available around the clock for assistance.",
        },
    ];

    const testimonials = [
        {
            name: "Rajesh Patel",
            company: "Patel Engineering Ltd.",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
            review:
                "The machinery quality is outstanding. Their support team helped us throughout installation and setup. Highly recommended.",
        },
        {
            name: "Amit Shah",
            company: "Shah Industries",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
            review:
                "We've purchased multiple industrial machines and the performance has exceeded our expectations. Excellent service.",
        },
        {
            name: "Vikram Mehta",
            company: "Mehta Manufacturing",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
            review:
                "Reliable products, fast delivery, and professional after-sales support. A trusted partner for our business growth.",
        },
    ];

    const navigate = useNavigate()


    return (
        <div>
            <section className="relative min-h-screen overflow-hidden flex items-center bg-[#0b1b3a]">

                {/* Background Slider */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${currentSlide === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-110"
                            }`}
                        style={{
                            backgroundImage: `url(${slide})`,
                        }}
                    />
                ))}

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#071327]/80"></div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071327] via-[#071327]/70 to-transparent"></div>

                {/* Animated Blur Circle */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px] animate-pulse"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm uppercase tracking-widest">
                                Industrial Excellence
                            </span>

                            <h1 className="mt-8 text-white font-black leading-none">
                                <span className="block text-5xl md:text-6xl xl:text-7xl">
                                    Smart
                                </span>

                                <span className="block text-5xl md:text-6xl xl:text-7xl">
                                    Machinery.
                                </span>

                                <span className="block text-5xl md:text-6xl xl:text-7xl text-amber-500">
                                    Maximum
                                </span>

                                <span className="block text-5xl md:text-6xl xl:text-7xl">
                                    Productivity.
                                </span>
                            </h1>

                            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
                                Delivering world-class industrial machinery and equipment
                                solutions for manufacturing, construction and automation
                                industries.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-10">

                                <button className="group px-8 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all">
                                    Explore Products
                                    <FaArrowRight className="group-hover:translate-x-1 transition-all" />
                                </button>

                                <button className="px-8 py-4 border border-white/20 backdrop-blur-md bg-white/5 text-white rounded-xl flex items-center justify-center gap-3 hover:border-amber-500">
                                    <FaPlay />
                                    Watch Video
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative hidden lg:flex justify-end">

                            {/* Main Machinery Image */}
                            <div className="relative w-[520px] h-[650px] overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-lg">

                                <img
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                {/* Experience Badge */}
                                <div className="absolute top-12 -left-12 bg-amber-500 p-8 rounded-2xl shadow-2xl">

                                    <h2 className="text-5xl font-black text-white">
                                        28+
                                    </h2>

                                    <p className="text-white mt-2 text-sm font-semibold">
                                        Years of Industrial Experience
                                    </p>

                                </div>

                                {/* Team Card */}
                                <div className="absolute bottom-8 right-8 bg-white p-5 rounded-2xl shadow-xl">

                                    <p className="text-gray-500 text-sm">
                                        Team Members
                                    </p>

                                    <div className="flex -space-x-3 mt-3">
                                        {[1, 2, 3, 4].map((item) => (
                                            <img
                                                key={item}
                                                src={`https://i.pravatar.cc/60?img=${item + 10}`}
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute top-24 right-[520px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-52">
                                <FaIndustry className="text-amber-500 text-2xl mb-3" />
                                <h4 className="text-white font-bold">
                                    Heavy Machinery
                                </h4>
                                <p className="text-gray-300 text-sm mt-1">
                                    Industrial Equipment Solutions
                                </p>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute bottom-32 right-[500px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-52">
                                <FaTools className="text-amber-500 text-2xl mb-3" />
                                <h4 className="text-white font-bold">
                                    Spare Parts
                                </h4>
                                <p className="text-gray-300 text-sm mt-1">
                                    Genuine OEM Components
                                </p>
                            </div>

                            {/* Floating Card 3 */}
                            <div className="absolute top-1/2 -right-10 backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-52">
                                <FaUsers className="text-amber-500 text-2xl mb-3" />
                                <h4 className="text-white font-bold">
                                    Global Clients
                                </h4>
                                <p className="text-gray-300 text-sm mt-1">
                                    Trusted Worldwide
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Slider Indicators */}
                    <div className="flex justify-center gap-3 mt-12">

                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all ${currentSlide === index
                                    ? "w-10 bg-amber-500"
                                    : "w-3 bg-white/40"
                                    }`}
                            />
                        ))}

                    </div>

                </div>
            </section>

            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30">
                            Trusted Brands
                        </span>

                        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1b3a]">
                            Brands That Power
                            <span className="text-amber-500"> Industries</span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                            We work with globally trusted machinery manufacturers to deliver
                            high-quality industrial equipment and solutions.
                        </p>
                    </div>

                    {/* Auto Sliding Brands */}
                    <div className="relative">

                        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

                        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                        <div className="flex animate-marquee">
                            {[...brands, ...brands].map((brand, index) => (
                                <div
                                    key={index}
                                    className="mx-4 min-w-[220px] h-28 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm hover:border-amber-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-black text-[#0b1b3a]">
                                        {brand}
                                    </h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <style>{`
                        @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }

                        100% {
                            transform: translateX(-50%);
                        }
                        }

                        .animate-marquee {
                        width: max-content;
                        display: flex;
                        animation: marquee 20s linear infinite;
                        }

                        .animate-marquee:hover {
                        animation-play-state: paused;
                        }
                 `}</style>
            </section>

            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full  bg-amber-500/20 border border-amber-500/30">
                            Our Services
                        </span>

                        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1b3a]">
                            Complete Industrial
                            <span className="text-amber-500"> Solutions</span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                            We provide end-to-end industrial machinery solutions designed
                            to improve efficiency, productivity, and long-term business growth.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:border-amber-500 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0b1b3a] text-amber-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-black text-[#0b1b3a] mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>

                                <div className="mt-6 w-12 h-1 bg-amber-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                            </div>
                        ))}

                    </div>

                    {/* CTA Banner */}
                    <div className="mt-16 bg-[#0b1b3a] rounded-3xl p-10 text-center">
                        <h3 className="text-3xl font-black text-white mb-4">
                            Need a Custom Machinery Solution?
                        </h3>

                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Our experts are ready to help you find the right equipment
                            and services for your industrial requirements.
                        </p>

                        <button className="px-8 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-xl hover:bg-amber-400 transition-all">
                            Get Free Consultation
                        </button>
                    </div>

                </div>
            </section>

            <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full  bg-amber-500/20 border border-amber-500/30">
                            Why Choose Us
                        </span>

                        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                            Trusted Industrial
                            <span className="text-amber-500">
                                {" "}Machinery Partner
                            </span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We provide world-class industrial machinery solutions with unmatched
                            quality, professional support, advanced technology, and years of
                            industry expertise.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:border-amber-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                            >
                                {/* Number */}
                                <span className="absolute top-4 right-4 text-5xl font-black text-gray-100">
                                    0{index + 1}
                                </span>

                                {/* Icon */}
                                <div className="relative w-16 h-16 rounded-xl bg-amber-500 text-[#0b1b3a] flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-gray-900 text-xl font-bold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Bottom Line */}
                                <div className="mt-6 w-10 h-1 bg-amber-500 group-hover:w-20 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Statistics */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-3xl font-black text-amber-500">
                                    {item.number}
                                </h3>

                                <p className="text-gray-600 text-sm mt-2">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-14">
                        <button className="px-8 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-lg hover:bg-amber-400 hover:shadow-lg transition-all duration-300">
                            Explore Machinery
                        </button>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full  bg-amber-500/20 border border-amber-500/30">
                            Latest Blog & News
                        </span>

                        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1b3a]">
                            Industry Insights &
                            <span className="text-amber-500"> Updates</span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                            Stay informed with the latest machinery trends, maintenance guides,
                            and industrial innovations from our experts.
                        </p>
                    </div>

                    {/* Blog Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {blogs.map((blog, index) => (
                            <a
                                href="#"
                                key={index}
                                onClick={() => navigate(`/blog/${blog.id}`)}
                                className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-500 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="overflow-hidden h-60">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    <div className="flex items-center gap-2 text-amber-500 text-sm font-semibold mb-4">
                                        <FaCalendarAlt />
                                        {blog.date}
                                    </div>

                                    <h3 className="text-xl font-black text-[#0b1b3a] mb-3 group-hover:text-amber-500 transition-all">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {blog.desc}
                                    </p>

                                    <button className="flex items-center gap-2 text-amber-500 font-bold hover:gap-3 transition-all">
                                        Read More
                                        <FaArrowRight />
                                    </button>

                                </div>
                            </a>
                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-14">
                        <button className="px-8 py-4 bg-[#0b1b3a] text-white font-black rounded-xl hover:bg-[#122754] transition-all">
                            View All Articles
                        </button>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-14">

                        <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30">
                            Customer Testimonials
                        </span>

                        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-[#0b1b3a]">
                            What Our
                            <span className="text-amber-500"> Clients Say</span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                            Trusted by industries across manufacturing, construction,
                            and engineering sectors for quality machinery and reliable service.
                        </p>

                    </div>

                    {/* Testimonials */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl border border-gray-200 p-8 hover:border-amber-500 hover:shadow-2xl transition-all duration-500"
                            >

                                {/* Quote Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-[#0b1b3a] text-xl mb-6">
                                    <FaQuoteLeft />
                                </div>

                                {/* Review */}
                                <p className="text-gray-600 leading-7 mb-6">
                                    "{item.review}"
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 text-amber-500 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                {/* User */}
                                <div className="flex items-center gap-4">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                                    />

                                    <div>
                                        <h4 className="font-black text-[#0b1b3a]">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm text-gray-500">
                                            {item.company}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Bottom Statistics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-4xl font-black text-amber-500">
                                1000+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Happy Clients
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-4xl font-black text-amber-500">
                                500+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Projects Completed
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-4xl font-black text-amber-500">
                                15+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Years Experience
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                            <h3 className="text-4xl font-black text-amber-500">
                                98%
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Client Satisfaction
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default Home;
