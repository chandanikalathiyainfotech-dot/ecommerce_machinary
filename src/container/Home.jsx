import React, { useEffect, useState } from "react";
console.log(React);
import { FaArrowRight, FaPlay, FaIndustry, FaUsers, FaTools, FaAward, FaShippingFast, FaHeadset, FaCalendarAlt, FaCogs, FaTruckMoving, FaWrench, FaStar, FaQuoteLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { FiHeart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

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

            <section className="relative h-[600px] min-[992px]:h-screen overflow-hidden flex items-center bg-[#0b1b3a] !mt-0">

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

            <section className="py-20 bg-[#f8fafc] !mb-0">
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
