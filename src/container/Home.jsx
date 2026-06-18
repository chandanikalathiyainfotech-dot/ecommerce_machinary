import React, { useEffect, useState } from "react";
console.log(React);
import { FaArrowRight, FaPlay, FaIndustry, FaUsers, FaTools, FaAward, FaShippingFast, FaHeadset, FaCalendarAlt, FaStar, FaQuoteLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { FiHeart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { motion } from "framer-motion";

const slides = [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600",
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCount, setVisibleCount] = useState(6);
    const [fproduct, setFproduct] = useState('Featured')

    useEffect(() => {
        const updateCount = () => {
            const w = window.innerWidth;

            console.log("WIDTH:", w);

            if (w <= 320) setVisibleCount(2);
            else if (w <= 576) setVisibleCount(2);
            else if (w <= 768) setVisibleCount(4);
            else if (w <= 992) setVisibleCount(4);
            else setVisibleCount(6);
        };

        updateCount(); // 👈 IMPORTANT (run once on load)

        window.addEventListener("resize", updateCount);

        return () => window.removeEventListener("resize", updateCount);
    }, []);

    useEffect(() => {
        console.log("visibleCount:", visibleCount);
    }, [visibleCount]);
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

    const products = [

        {
            id: 1,
            name: "Black & Decker BDROUT127 1600W Router",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: 59.0,
            rating: 4,
            badge: "Pack",
            oldPrice: null,

        },
        {
            id: 2,
            name: "Bosch BH2760VC Brute Breaker Hammer",
            image: '../../src/assets/Images/machines/m2.jpg',
            price: 90.0,
            rating: 3,
            badge: null,
            oldPrice: null,
        },

        {
            id: 3,
            name: "Dewalt D28730 14 In Chop Saw Aluminium Arm",
            image: '../../src/assets/Images/machines/m3.jpg',
            price: 105.0,
            rating: 4,
            badge: null,
            oldPrice: null,
        },

        {
            id: 4,
            name: "High Horsepower High Balance Air Sander",
            image: '../../src/assets/Images/machines/m4.jpg',
            price: 110.0,
            oldPrice: 125.0,
            rating: 4,
            badge: "-12%",
            sale: true,
        },
        {
            id: 5,
            name: "Rapid Airtac Pro Pb131 Pneumatic Nailer Gun",
            image: '../../src/assets/Images/machines/m5.jpg',
            price: 115.0,
            oldPrice: 125.0,
            rating: 4,
            badge: "-8%",
            sale: true,
        },

        {
            id: 6,
            name: "Dewalt XTREME 12V Brushless Circular Saw",
            image: '../../src/assets/Images/machines/m6.jpg',
            price: 65.0,
            rating: 4,
            badge: null,
            oldPrice: null,
        },
        {
            id: 7,
            name: "Milwaukee M18 FN16GA 18V Angled Finish Nailer",
            image: '../../src/assets/Images/machines/m7.jpg',
            price: 99.0,
            rating: 4,
            badge: null,
            oldPrice: null,
        },
        {
            id: 8,
            name: "Dewalt DCS331N-XJ XR Lithium-Ion Jigsaw",
            image: '../../src/assets/Images/machines/m8.jpg',
            price: 105.0,
            rating: 5,
            badge: null,
            oldPrice: null,
        },
        {
            id: 9,
            name: "BLACK+DECKER Angle Grinder BDEG400",
            image: '../../src/assets/Images/machines/m9.jpg',
            price: 110.5,
            oldPrice: 130.0,
            rating: 4,
            badge: "-15%",
            sale: true,
        },
        {
            id: 10,
            name: "Paslode IM90CI Impulse Framing Combo Nailer",
            image: '../../src/assets/Images/machines/m10.jpg',
            price: 129.0,
            rating: 5,
            badge: null,
            oldPrice: null,
        },

    ];

    const category = [
        {
            img: '../../src/assets/Images/machines/c1.jpg',
            name: "Hammer Tool",
            product: 11
        },
        {
            img: '../../src/assets/Images/machines/c2.jpg',
            name: "Drill Tool",
            product: 13
        },
        {
            img: '../../src/assets/Images/machines/c3.jpg',
            name: "Circular Saw",
            product: 9
        },
        {
            img: '../../src/assets/Images/machines/c4.jpg',
            name: "Wrench Tool",
            product: 13
        },
        {
            img: '../../src/assets/Images/machines/c5.jpg',
            name: "Decker Tool",
            product: 11
        },
        {
            img: '../../src/assets/Images/machines/c6.jpg',
            name: "Power Saw",
            product: 17
        },
        {
            img: '../../src/assets/Images/machines/c7.jpg',
            name: "California Air",
            product: 4
        },
        {
            img: '../../src/assets/Images/machines/c8.jpg',
            name: "Jackhammer Tooll",
            product: 5
        },
        {
            img: '../../src/assets/Images/machines/c9.jpg',
            name: "Planet Power",
            product: 7
        }
    ]

    const navigate = useNavigate()

    console.log(fproduct)

    return (
        <div>

            <section id="hero" className="relative h-[600px] min-[992px]:h-screen overflow-hidden flex items-center bg-[#0b1b3a] !mt-0">

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

                    <div className="grid lg:grid-cols-2 gap-12 items-center ">

                        {/* LEFT CONTENT */}
                        <div className="text-center min-[425px]:text-start">

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm uppercase tracking-widest">
                                Industrial Excellence
                            </span>

                            <h1 className="mt-8 text-white font-black leading-none text-[28px] min-[576px]:text-4xl min-[768px]:text-[42px] min-[992px]:text-5xl leading-6">
                                <span className="block ">
                                    Smart
                                </span>

                                <span className="block ">
                                    Machinery.
                                </span>

                                <span className="block text-amber-500">
                                    Maximum
                                </span>

                                <span className="block">
                                    Productivity.
                                </span>
                            </h1>

                            <p className="mt-8 text-sm min-[576px]:text-base xl:text-lg text-gray-300 max-w-xl leading-relaxed">
                                Delivering world-class industrial machinery and equipment
                                solutions for manufacturing, construction and automation
                                industries.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap min-[425px]:flex-nowrap gap-4 mt-10 justify-center min-[425px]:justify-start">

                                <button className="group px-5 min-[425px]:px-4 min-[576px]:px-5 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all">
                                    Explore Products
                                    <FaArrowRight className="group-hover:translate-x-1 transition-all" />
                                </button>

                                <button className=" px-12 min-[425px]:px-5 min-[576px]:px-8 py-4 border border-white/20 backdrop-blur-md bg-white/5 text-white rounded-xl flex items-center justify-center gap-3 hover:border-amber-500">
                                    <FaPlay />
                                    Watch Video
                                </button>

                            </div>

                            {/* Stats */}
                            {/* <div className="grid grid-cols-3 gap-6 mt-14">
 
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
 
                            </div> */}

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative hidden lg:flex ml-8 xl:ml-18 2xl:ml-0 2xl:justify-end">

                            {/* Main Machinery Image */}
                            <div className="relative w-[520px] h-[650px] overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-lg">

                                <img
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute top-24 right-[270px] min-[1200px]:right-[360px] xl:right-[350px] xl:right-[420px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 xl:w-48 2xl:w-52">
                                <FaIndustry className="text-amber-500 text-2xl mb-3" />
                                <h4 className="text-white font-bold">
                                    Heavy Machinery
                                </h4>
                                <p className="text-gray-300 text-sm mt-1">
                                    Industrial Equipment Solutions
                                </p>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute bottom-32 right-[270px] min-[1200px]:right-[360px] xl:right-[350px] xl:right-[420px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 xl:w-48 2xl:w-52">
                                <FaTools className="text-amber-500 text-2xl mb-3" />
                                <h4 className="text-white font-bold">
                                    Spare Parts
                                </h4>
                                <p className="text-gray-300 text-sm mt-1">
                                    Genuine OEM Components
                                </p>
                            </div>

                            {/* Floating Card 3 */}
                            <div className="absolute top-1/2 -right-12 xl:-right-15 2xl:-right-25 backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 2xl:w-52">
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
                                    ? "w-7 sm:w-10 bg-amber-500"
                                    : "w-3 bg-white/40"
                                    }`}
                            />
                        ))}

                    </div>

                </div>
            </section>

            <section id="category">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="title">Shop By Featured Categories</h3>
                    <h5 className="subtitle">There are many variations of passages of lorem Ipsum available believable.</h5>

                    <div className="category-product">

                        <Swiper
                            modules={[Navigation]}
                            // slidesPerView={6}
                            navigation={true}

                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 25
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 25
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 25
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 25
                                },
                            }}
                        >
                            {
                                category?.map((v) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="cat-card group">
                                                {/* category image */}
                                                <div className="border-[1.5px] border-gray-300 rounded-full sm:p-2 group-hover:border-amber-500">
                                                    <img src={v.img} alt="" className="object-cover rounded-full" />
                                                </div>

                                                <h6 className="sm:text-[18px] font-medium text-center mt-4">{v.name}</h6>
                                                <p className="text-[14px] sm:text-[16px] text-[#666666] text-center">{v.product} product</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                        {/* 
                        <div className="w-40">
                            
                        </div> */}
                    </div>

                </div>
            </section>

            <section id="products">
                {/* <span className="flex w-fit mx-auto px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30">
                    OUR PRODUCTS
                </span>

                <h2 className="title">
                    Explore Our Premium Machinery & Tools
                </h2>

                <h5 className="subtitle max-w-5xl mx-auto px-4">
                    Discover a wide range of high-quality industrial machinery, power tools, and equipment carefully selected to meet the needs of professionals, workshops, construction projects, and manufacturing industries.
                </h5> */}

                <div class="container px-4 sm:px-6 lg:px-8  mx-auto bg-white  overflow-hidden  transition-all duration-300 product-container">
                    <div className="text-center mb-8">
                        <div className="flex justify-center">
                            <span
                                className="inline-block px-3 sm:px-4 md:px-5 py-2 text-[11px] sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-widest text-amber-600
                            rounded-full bg-amber-500/20 border border-amber-500/30"
                            >
                                Our Products
                            </span>
                        </div>

                        <h2 className="title font-black mt-3 text-[#0b1b3a]">
                            Explore Our Premium Machinery & Tools
                            {/* <span className="text-amber-500">Machinery & Tools</span> */}
                        </h2>

                        <p className="mt-3 text-gray-600 subtitle max-w-5xl mx-auto px-4">
                            Discover a wide range of high-quality industrial machinery, power tools, and equipment carefully selected to meet the needs of professionals, workshops, construction projects, and manufacturing industries.
                        </p>
                    </div>
                    <div>
                        <Swiper
                            modules={[Grid, Navigation]}
                            slidesPerView={4}
                            navigation={true}
                            grid={{
                                rows: 2,
                                fill: "row",
                            }}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    grid: {
                                        rows: 1,
                                    },
                                },
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                    grid: {
                                        rows: 1,
                                    },
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                    grid: {
                                        rows: 2,
                                    },
                                },
                            }}
                        >
                            {
                                products?.map((v) => {
                                    return (
                                        <SwiperSlide>
                                            <div className=" border border-gray-200 rounded-md group">
                                                <div className="relative">
                                                    <div class="absolute mt-2 ml-2 z-10">
                                                        {
                                                            v?.oldPrice &&
                                                            <span class="bg-[#0b1b3a] text-white text-xs font-semibold px-2 py-1 rounded">
                                                                -10%
                                                            </span>
                                                        }
                                                    </div>

                                                    <div className="absolute right-3 top-4 flex flex-col gap-2 z-10">

                                                        {/* Wishlist */}
                                                        <button
                                                            className="
                                                            w-8 h-8 bg-white rounded-full flex items-center justify-center
                                                            border border-gray-300

                                                            opacity-100 translate-x-0
                                                            min-[992px]:opacity-0 min-[992px]:translate-x-4

                                                            group-hover:min-[992px]:opacity-100
                                                            group-hover:min-[992px]:translate-x-0

                                                            transition-all duration-300 delay-100
                                                            hover:bg-[#0b1b3a] hover:text-white"
                                                        >
                                                            <FiHeart className="text-sm" />
                                                        </button>

                                                        {/* Eye */}
                                                        <button
                                                            className="
                                                                w-8 h-8 bg-white rounded-full flex items-center justify-center
                                                                border border-gray-300

                                                                opacity-100 translate-x-0
                                                                min-[992px]:opacity-0 min-[992px]:translate-x-4

                                                                group-hover:min-[992px]:opacity-100
                                                                group-hover:min-[992px]:translate-x-0

                                                                transition-all duration-300 delay-300
                                                                hover:bg-[#0b1b3a] hover:text-white"
                                                        >
                                                            <LuEye />
                                                        </button>
                                                    </div>

                                                    {/* Product Image */}
                                                    <div className="h-50 min-[576px]:h-40 sm:h-64 flex items-center justify-center overflow-hidden p-2 min-[576px]:p-5 md:p-5 lg:p-2 sm:p-4">
                                                        <img

                                                            src={v.image}
                                                            alt="Product"
                                                            className="product-img max-h-full object-cover w-[100px] min-[576px]:w-[150px] min-[768px]:w-full h-full"
                                                        />
                                                    </div>

                                                    <div class="px-2 sm:px-5 pb-3 sm:pb-5 border-t border-gray-100">
                                                        <h3 class="mt-5 text-[15px] sm:text-md md:text-[17px] lg:text-lg font-medium text-gray-800 sm:leading-7">
                                                            {v.name}
                                                        </h3>


                                                        <div class="flex items-center mt-1 sm:mt-3">
                                                            <div class="flex text-yellow-400">
                                                                ★★★★★
                                                            </div>
                                                            <span class="ml-2 text-sm text-gray-500">({v.rating})</span>
                                                        </div>

                                                        <div class="flex items-center gap-2 mt-2 sm:mt-4">
                                                            <span class="text-gray-400 line-through">
                                                                {v.oldPrice && "$" + v.oldPrice}
                                                            </span>
                                                            <span class="text-md sm:text-lg md:text-xl font-bold text-[#0b1b3a]">
                                                                ${v.price}
                                                            </span>
                                                        </div>


                                                        <div
                                                            className="
                                                            overflow-hidden

                                                            max-h-20 opacity-100
                                                            min-[992px]:max-h-0 min-[992px]:opacity-0

                                                            group-hover:min-[992px]:max-h-20
                                                            group-hover:min-[992px]:opacity-100

                                                            transition-all duration-500"
                                                        >
                                                            <button
                                                                className="w-full mt-5 py-2 text-[14px] bg-gray-100 text-gray-800 font-semibold rounded
                                                                hover:bg-amber-500 hover:text-white transition
                                                                flex items-center justify-center gap-2"
                                                            >
                                                                <TiShoppingCart className="text-lg" />
                                                                <span>ADD TO CART</span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </div>

                    <button
                        className="px-10  py-3 text-[14px] sm:text-[14px] md:text-[16px] bg-[var(--secondary-color)]  text-white font-semibold rounded hover:bg-[var(--primary-color)]
                        hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mx-auto mt-5 sm:mt-7 lg:mt-10" >
                        Explore More Products
                    </button>
                </div>
            </section>

            <section id="feature-product" className="bg-[#F6F6F6] !mt-[60px] py-15">
                <div class="container px-4 sm:px-6 lg:px-8  mx-auto overflow-hidden  transition-all duration-300 product-container overflow-visible">
                    <div className="text-center mb-8">
                        <div className="flex justify-center">
                            <span
                                className="inline-block px-3 sm:px-4 md:px-5 py-2 text-[11px] sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-widest text-amber-600
                            rounded-full bg-amber-500/20 border border-amber-500/30"
                            >
                                Featured Collection
                            </span>
                        </div>

                        <h2 className="title font-black mt-3 text-[#0b1b3a]">
                            Explore Our Premium Machinery & Tools
                            {/* <span className="text-amber-500">Machinery & Tools</span> */}
                        </h2>

                        <p className="mt-3 text-gray-600 subtitle max-w-5xl mx-auto px-4">
                            Browse our collection of featured, best-selling, and latest machinery,
                            built to meet the demands of industrial and professional applications.
                        </p>
                    </div>

                    <ul
                        className="flex justify-center gap-3 sm:gap-5 md:gap-8 mt-6 flex-wrap"
                        onClick={(e) => setFproduct(e.target.textContent)}
                    >
                        <li
                            className={`text-xs sm:text-sm md:text-base lg:text-xl font-semibold pb-2 cursor-pointer transition
                            ${fproduct === "Featured"
                                    ? "text-black border-b-2 border-amber-500"
                                    : "text-gray-500 border-b-2 border-gray-300 hover:text-black"
                                }`}
                        >
                            Featured
                        </li>

                        <li
                            className={`text-xs sm:text-sm md:text-base lg:text-xl font-semibold pb-2 cursor-pointer transition
                            ${fproduct === "Latest"
                                    ? "text-black border-b-2 border-amber-500"
                                    : "text-gray-500 border-b-2 border-gray-300 hover:text-black"
                                }`}
                        >
                            Latest
                        </li>

                        <li
                            className={`text-xs sm:text-sm md:text-base lg:text-xl font-semibold pb-2 cursor-pointer transition
                            ${fproduct === "Bestseller"
                                    ? "text-black border-b-2 border-amber-500"
                                    : "text-gray-500 border-b-2 border-gray-300 hover:text-black"
                                }`}
                        >
                            Bestseller
                        </li>
                    </ul>

                    <div className="grid grid-cols-12 gap-y-8 min-[768px]:gap-y-12 gap-x-5 lg:gap-x-5 xl:gap-x-8 mt-7 min-[768px]:mt-10">
                        {
                            products?.slice(0, visibleCount)?.map((v) => {
                                return (
                                    <div className="col-span-12 min-[576px]:col-span-6 min-[768px]:col-span-4 min-[992px]:col-span-4 lg:col-span-3 group">
                                        <div className="bg-white shadow-md rounded-md">
                                            <div className="relative">
                                                <div class="absolute mt-2 ml-2 z-10">
                                                    {
                                                        v?.oldPrice &&
                                                        <span class="bg-[#0b1b3a] text-white text-xs font-semibold px-2 py-1 rounded">
                                                            -10%
                                                        </span>
                                                    }
                                                </div>

                                                <div className="absolute right-3 top-4 flex flex-col gap-2 z-10">

                                                    {/* Wishlist */}
                                                    <button
                                                        className="
                                                            w-8 h-8 bg-white rounded-full flex items-center justify-center
                                                            border border-gray-300

                                                            opacity-100 translate-x-0
                                                            min-[992px]:opacity-0 min-[992px]:translate-x-4

                                                            group-hover:min-[992px]:opacity-100
                                                            group-hover:min-[992px]:translate-x-0

                                                            transition-all duration-300 delay-100
                                                            hover:bg-[#0b1b3a] hover:text-white"
                                                    >
                                                        <FiHeart className="text-sm" />
                                                    </button>

                                                    {/* Eye */}
                                                    <button
                                                        className="
                                                                w-8 h-8 bg-white rounded-full flex items-center justify-center
                                                                border border-gray-300

                                                                opacity-100 translate-x-0
                                                                min-[992px]:opacity-0 min-[992px]:translate-x-4

                                                                group-hover:min-[992px]:opacity-100
                                                                group-hover:min-[992px]:translate-x-0

                                                                transition-all duration-300 delay-300
                                                                hover:bg-[#0b1b3a] hover:text-white"
                                                    >
                                                        <LuEye />
                                                    </button>
                                                </div>

                                                {/* Product Image */}
                                                <div className="h-50 min-[576px]:h-40 sm:h-64 flex items-center justify-center overflow-hidden p-2 min-[576px]:p-5 md:p-5 lg:p-2 sm:p-4">
                                                    <img

                                                        src={v.image}
                                                        alt="Product"
                                                        className="product-img max-h-full object-cover w-[100px] min-[576px]:w-[150px] min-[768px]:w-full h-full"
                                                    />
                                                </div>

                                                <div class="px-2 sm:px-5 pb-3 sm:pb-5 border-t border-gray-100">
                                                    <h3 class="mt-5 text-[15px] sm:text-md md:text-[17px] lg:text-lg font-medium text-gray-800 sm:leading-7">
                                                        {v.name}
                                                    </h3>


                                                    <div class="flex items-center mt-1 sm:mt-3">
                                                        <div class="flex text-yellow-400">
                                                            ★★★★★
                                                        </div>
                                                        <span class="ml-2 text-sm text-gray-500">({v.rating})</span>{/*{v.rating} */}
                                                    </div>

                                                    <div class="flex items-center gap-2 mt-2 sm:mt-4">
                                                        <span class="text-gray-400 line-through">
                                                            {v.oldPrice && "$" + v.oldPrice}
                                                        </span>
                                                        <span class="text-md sm:text-lg md:text-xl font-bold text-[#0b1b3a]">
                                                            ${v.price}
                                                        </span>
                                                    </div>


                                                    <div
                                                        className="
                                                        overflow-hidden
                                                        max-h-20 opacity-100
                                                        min-[992px]:max-h-0 min-[992px]:opacity-0
                                                        group-hover:min-[992px]:max-h-20
                                                        group-hover:min-[992px]:opacity-100
                                                        transition-all duration-500"
                                                    >
                                                        <button
                                                            className="w-full mt-5 py-2 text-[14px] bg-gray-100 text-gray-800 font-semibold rounded
                                                        hover:bg-amber-500 hover:text-white transition
                                                        flex items-center justify-center gap-2"
                                                        >
                                                            <TiShoppingCart className="text-lg" />
                                                            <span>ADD TO CART</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="col-span-12 min-[768px]:col-span-8 lg:col-span-6">
                            <div className="h-full rounded-md overflow-hidden relative min-[1400px]:h-[435px]">

                                <img
                                    src="../../src/assets/Images/machines/featured.webp"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <div className="uppercase absolute bottom-6 sm:bottom-10 right-4 sm:right-8 lg:right-10 text-white text-right max-w-[90%] sm:max-w-[350px]">

                                    <p className="text-[11px] sm:text-[13px] md:text-[15px] font-semibold tracking-wide">
                                        tools & accessories
                                    </p>

                                    <h4 className="text-[16px] sm:text-[22px] md:text-[28px] lg:text-[30px] font-bold leading-tight my-2 sm:my-3">
                                        20v max premium <br />
                                        combo kits
                                    </h4>

                                    <p className="text-[13px] sm:text-[16px] md:text-[18px] text-amber-500 font-semibold">
                                        free batteries
                                    </p>

                                    <button className="mt-4 sm:mt-5 flex items-center justify-end gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-white text-black rounded-md hover:bg-amber-500 hover:text-white transition ml-auto text-xs sm:text-sm md:text-base">

                                        <span>Shop Now</span>
                                        <FaLongArrowAltRight className="text-base sm:text-lg" />

                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="why-choose" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 min-[992px]:grid-cols-[0.9fr_1.1fr] gap-8 min-[992px]:gap-12 xl:gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-xl min-[992px]:max-w-none"
                        >
                            <span className="inline-block px-4 py-2 text-amber-600 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30">
                                Why Choose Us
                            </span>

                            <h2 className="mt-6 text-[28px] sm:text-4xl lg:text-[42px] xl:text-5xl font-black text-[#0b1b3a] leading-tight">
                                We Don't Just Sell
                                <span className="text-amber-500"> Machines</span>
                            </h2>

                            <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                                We provide complete industrial solutions that help businesses
                                improve productivity, reduce downtime, and maximize efficiency.
                            </p>

                            <button className="mt-8 px-8 py-4 bg-[#0b1b3a] text-white rounded-xl font-bold hover:bg-[#132a59] transition-all">
                                Explore More
                            </button>
                        </motion.div>

                        <div className="relative w-full">

                            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-amber-200"></div>

                            <div className="space-y-8 lg:space-y-10">

                                {features.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.15,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 8 }}
                                        className="relative flex gap-4 sm:gap-6"
                                    >

                                        <motion.div
                                            animate={{
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}
                                            className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-full bg-amber-500 text-[#0b1b3a] flex items-center justify-center text-xl sm:text-2xl z-10 shadow-xl"
                                        >
                                            {item.icon}
                                        </motion.div>

                                        <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-md hover:border-amber-500 hover:shadow-xl transition-all">

                                            <h3 className="text-lg sm:text-xl font-black text-[#0b1b3a]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {item.desc}
                                            </p>

                                        </div>

                                    </motion.div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-10 sm:mb-14 lg:mb-16"
                    >
                        <span className="inline-block px-4 py-2 text-amber-600 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30">
                            Knowledge Hub
                        </span>

                        <h2 className="mt-5 text-[28px] sm:text-4xl lg:text-5xl font-black text-[#0b1b3a] leading-tight">
                            Latest Industry
                            <span className="text-amber-500"> Insights</span>
                        </h2>

                        <p className="mt-5 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                            Stay updated with machinery trends, industrial innovations,
                            and expert maintenance guides.
                        </p>
                    </motion.div>

                    {/* Main Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8">

                        {/* Featured Blog */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            onClick={() => navigate(`/blog/${blogs[0].id}`)}
                            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer"
                        >
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="
                                    w-full
                                    h-[280px]
                                    sm:h-[400px]
                                    md:h-[500px]
                                    lg:h-[550px]
                                    object-cover
                                    group-hover:scale-110
                                    transition-all
                                    duration-700
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a] via-[#0b1b3a]/50 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-10">

                                <div className="flex items-center gap-2 text-amber-500 text-xs sm:text-sm mb-2 sm:mb-4">
                                    <FaCalendarAlt />
                                    <span>{blogs[0].date}</span>
                                </div>

                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                                    {blogs[0].title}
                                </h3>

                                <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-xl line-clamp-2 sm:line-clamp-3">
                                    {blogs[0].desc}
                                </p>

                                <button className="mt-4 sm:mt-6 flex items-center gap-2 text-amber-500 font-bold text-sm sm:text-base">
                                    Read Full Article
                                    <FaArrowRight />
                                </button>

                            </div>
                        </motion.div>

                        {/* Side Blogs */}
                        <div className="flex flex-col gap-4 sm:gap-6">

                            {blogs.slice(1).map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        x: 5,
                                    }}
                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                    className="
                                        group
                                        bg-[#f8fafc]
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        sm:rounded-3xl
                                        p-3
                                        sm:p-4
                                        flex
                                        flex-col
                                        min-[375px]:flex-row
                                        items-stretch
                                        gap-4
                                        hover:border-amber-500
                                        hover:shadow-xl
                                        transition-all
                                        duration-500
                                        cursor-pointer
                                    "
                                >

                                    {/* Blog Image */}
                                    <div
                                        className="
                                            overflow-hidden
                                            rounded-xl
                                            sm:rounded-2xl
                                            flex-shrink-0

                                            w-full
                                            h-[200px]

                                            min-[375px]:w-32
                                            min-[375px]:h-auto

                                            min-[425px]:w-40
                                            "
                                    >
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                                group-hover:scale-110
                                                transition-all
                                                duration-700
                                            "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center flex-1">

                                        <div className="flex items-center gap-2 text-amber-500 text-xs sm:text-sm mb-2">
                                            <FaCalendarAlt />
                                            <span>{blog.date}</span>
                                        </div>

                                        <h3 className="font-black text-[#0b1b3a] text-base sm:text-lg leading-snug group-hover:text-amber-500 transition-all line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                            {blog.desc}
                                        </p>

                                        <button className="mt-4 flex items-center gap-2 text-amber-500 font-semibold text-sm">
                                            Read More
                                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-all duration-300" />
                                        </button>

                                    </div>

                                </motion.div>
                            ))}

                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 sm:mt-16"
                    >
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0b1b3a] text-white font-black rounded-xl hover:bg-[#132a59] hover:scale-105 transition-all">
                            View All Articles
                        </button>
                    </motion.div>

                </div>
            </section>

            <section id="testimonials" className="py-20 bg-[#f8fafc] !mb-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
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
                    </motion.div>

                    {/* Slider */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        className="testimonialSwiper !pb-16"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="bg-white rounded-3xl border border-gray-200 p-8 h-full relative overflow-hidden group hover:border-amber-500 hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Background Glow */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                    {/* Quote */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                        }}
                                        className="w-14 h-14 rounded-2xl bg-amber-500 text-[#0b1b3a] flex items-center justify-center text-xl mb-6"
                                    >
                                        <FaQuoteLeft />
                                    </motion.div>

                                    {/* Review */}
                                    <p className="text-gray-600 leading-8 mb-8 relative z-10">
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
                                        <motion.img
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full border-4 border-amber-500 object-cover"
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
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            ["1000+", "Happy Clients"],
                            ["500+", "Projects Completed"],
                            ["15+", "Years Experience"],
                            ["98%", "Client Satisfaction"],
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.05,
                                }}
                                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="text-4xl font-black text-amber-500">
                                    {item[0]}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {item[1]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
