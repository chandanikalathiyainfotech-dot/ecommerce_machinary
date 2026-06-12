import React, { useEffect, useState } from "react";
console.log(React);
import {
    FaArrowRight,
    FaPlay,
    FaIndustry,
    FaUsers,
    FaTools,
} from "react-icons/fa";

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

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-14">

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        28+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Years
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        5000+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Products
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        1200+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Clients
                                    </p>
                                </div>

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
        </div>
    );
}

export default Home;
