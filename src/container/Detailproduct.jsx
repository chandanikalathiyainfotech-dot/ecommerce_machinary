import React, { useState } from "react";
import { BsBagCheckFill, BsShieldFillCheck } from "react-icons/bs";
import { FaRegStar, FaStar, FaTruck } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { ImTruck } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { LuEye } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Quickviewpro from "./Quickviewpro";
import WishlistDrawer from "./WishlistDrawer";
import CartDrawer from "./CartDrawer";

function Detailproduct() {

    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showQuickView, setShowQuickView] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [wishlistOpen, setWishlisOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openQuickView = (product) => {
        setSelectedProduct(product);
        setShowQuickView(true);
    };

    const openWishlist = (product) => {
        setSelectedProduct(product);
        setWishlisOpen(true);
    };

    const variants = [
        {
            id: 1,
            image: "../../src/assets/Images/machines/m1.jpg",
            thumbnails: [
                "../../src/assets/Images/machines/c1.jpg",
                "../../src/assets/Images/machines/c2.jpg",
            ],
            name: "Red"
        },
        {
            id: 2,
            image: "../../src/assets/Images/machines/m2.jpg",
            thumbnails: [
                "../../src/assets/Images/machines/c3.jpg",
                "../../src/assets/Images/machines/c4.jpg",
            ],
            name: "Green"
        },
        {
            id: 3,
            image: "../../src/assets/Images/machines/m3.jpg",
            thumbnails: [
                "../../src/assets/Images/machines/c1.jpg",
                "../../src/assets/Images/machines/c3.jpg",
            ],
            name: "Blue"
        },
        {
            id: 4,
            image: "../../src/assets/Images/machines/m4.jpg",
            thumbnails: [
                "../../src/assets/Images/machines/c2.jpg",
                "../../src/assets/Images/machines/c4.jpg",
            ],
            name: "Black"
        }
    ];

    const [activeVariant, setActiveVariant] = useState(variants[0]);
    const [activeImage, setActiveImage] = useState(variants[0].image);
    const [thumbnails, setThumbnails] = useState(variants[0].thumbnails);

    const reviews = [
        {
            id: 1,
            name: "Samantha Smith",
            rating: 4,
            date: "27 May, 2018",
            image: '../../src/assets/Images/r1.jpg',
            review:
                ` Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. 
                Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.`
        },
        {
            id: 2,
            name: "Adam Taylor",
            rating: 3,
            date: "12 April, 2018",
            image: '../../src/assets/Images/r1.jpg',
            review:
                `Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo,
                sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.`
        },
        {
            id: 3,
            name: "Helena Garcia",
            rating: 5,
            date: "2 January, 2018",
            image: '../../src/assets/Images/r1.jpg',
            review:
                `Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.`
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

    const handleAddToCartWithFly = (e, productItem) => {
        const buttonElement = e.currentTarget;

        // 🎯 THE INTEGRATED FIX: Looks for a grid card wrapper first (.group), 
        // and falls back to the product details page section (#detailproduct) if it is missing
        const cardElement = buttonElement.closest('.group') || buttonElement.closest('#detailproduct');
        const targetImage = cardElement?.querySelector('.product-img-element');
        const destinationCart = document.getElementById('floating-cart');

        if (targetImage && destinationCart) {
            const imageRect = targetImage.getBoundingClientRect();
            const cartRect = destinationCart.getBoundingClientRect();

            const imageClone = targetImage.cloneNode(true);

            imageClone.className = "w-full h-full object-contain";
            imageClone.style.position = 'fixed';
            imageClone.style.width = `${imageRect.width}px`;
            imageClone.style.height = `${imageRect.height}px`;
            imageClone.style.left = `${imageRect.left}px`;
            imageClone.style.top = `${imageRect.top}px`;
            imageClone.style.zIndex = '999999';

            const targetX = cartRect.left + (cartRect.width / 2) - (imageRect.width / 2);
            const targetY = cartRect.top + (cartRect.height / 2) - (imageRect.height / 2);

            imageClone.style.setProperty('--target-x', `${targetX}px`);
            imageClone.style.setProperty('--target-y', `${targetY}px`);

            imageClone.classList.add('animate-fly');
            document.body.appendChild(imageClone);

            setTimeout(() => {
                imageClone.remove();
                setSelectedProduct(productItem);
                setCartOpen(true);
            }, 1500); // 1.5s slow-motion duration speed track
        } else {
            // Direct execution fallback if selectors return null
            setSelectedProduct(productItem);
            setCartOpen(true);
        }
    };
    

    return (
        <main>
            {/* detail of product */}
            <section id="detailproduct" className="mt-20 mb-10">
                <div className="container px-4 sm:px-6 lg:px-8  mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* LEFT SIDE - IMAGE GALLERY */}
                    <div className="md:col-span-6 flex gap-4 flex-col xl:flex-row w-full ">

                        {/* Thumbnails */}
                        <div className="flex flex-row xl:flex-col gap-3 order-2 xl:order-1">
                            {thumbnails.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-16 h-16 sm:w-25 sm:h-25 border rounded-md cursor-pointer hover:border-orange-400 ${activeImage === img ? "border-orange-500" : ""
                                        }`}
                                    alt=""
                                />
                            ))}
                        </div>

                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="w-full border rounded-lg p-4 flex items-center justify-center bg-white order-1 xl:order-2 h-[300px] min-[576px]:h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative select-none cursor-pointer"
                        >
                            <img
                                src={activeImage}
                                className="product-img-element w-full h-full object-contain pointer-events-none"
                                alt=""
                            />
                        </div>

                    </div>

                    {/* RIGHT SIDE - DETAILS */}
                    <div className="md:col-span-6 relative">

                        <h1 className="text-xl min-[576px]:text-2xl lg:text-3xl font-bold text-gray-800">
                            Brandix Screwdriver SCREW1500ACC
                        </h1>

                        <div className="flex items-center gap-3 flex-wrap my-3">
                            <span className="text-yellow-400 text-[20px]">★★★★★</span>
                            <span className="text-sm text-gray-500">(1 review)</span>
                        </div>


                        <p className="text-[#3d464d] text-[16px] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus.
                            Maecenas eu varius nisi.
                        </p>

                        <hr className=" text-gray-300 my-4" />

                        <div className="flex gap-4 font-[400]">
                            <p className="text-[#999999] text-[14px]">Availability:<span className="text-[#31d357]">In Stock</span></p>

                            <p className="text-[#999999] text-[14px]">
                                Brand: QuickCart
                            </p>

                            {/* <p className="text-[#999999] text-[14px]">
                            Brand: QuickCart
                        </p> */}
                        </div>

                        <p className="text-[28px] my-3 font-bold text-gray-800">$28</p>

                        {/* Color Variants */}
                        <div>
                            <p className="text-[18px] font-medium mb-2 text-[#6c757d]">Color</p>

                            <div className="flex gap-2">
                                {variants.map((v) => (
                                    <div
                                        key={v.id}
                                        onClick={() => {
                                            setActiveVariant(v);
                                            setActiveImage(v.image);
                                            setThumbnails(v.thumbnails);
                                        }}
                                        className={`w-12 h-12 min-[576px]:w-15 min-[576px]:h-15 border rounded-md cursor-pointer overflow-hidden hover:border-orange-400 ${activeVariant.id === v.id
                                            ? "border-orange-500"
                                            : ""
                                            }`}
                                    >
                                        <img
                                            onClick={() => navigate('/product-detail')}
                                            src={v.image}
                                            alt={v.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* quantity Variants */}
                        <div className="my-5">
                            <label className="block text-[18px] font-medium mb-2 text-[#6c757d]">
                                Quantity
                            </label>

                            <div className="flex items-center flex-wrap lg:flex-nowrap gap-2 xl:gap-4">
                                <div className="flex items-center border border-[#b5b9bd] rounded h-12">
                                    <button
                                        type="button"
                                        className="px-3 2xl:px-5 h-full text-[#6c757d] hover:bg-gray-100"
                                        onClick={() => setQty(prev => Math.max(1, prev - 1))}
                                    >
                                        -
                                    </button>

                                    <span className="px-5 min-w-[40px] text-center flex items-center h-full">
                                        {qty}
                                    </span>

                                    <button
                                        type="button"
                                        className="px-3 2xl:px-5 h-full text-[#6c757d] hover:bg-gray-100"
                                        onClick={() => setQty(prev => prev + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={(e) => {
                                        const currentProductDetails = {
                                            id: activeVariant.id,
                                            name: `Brandix Screwdriver SCREW1500ACC (${activeVariant.name})`,
                                            image: activeImage,
                                            price: "28",
                                            qty: qty
                                        };
                                        handleAddToCartWithFly(e, currentProductDetails);
                                    }}
                                    type="button"
                                    className="text-[14px] xl:text-[16px] h-12 px-4 2xl:px-8 bg-amber-500 text-white rounded font-semibold border border-transparent hover:bg-white order-1 hover:text-amber-500 hover:border-amber-500 transition"
                                >
                                    ADD TO CART
                                </button>

                                <button
                                    className="w-[80%] min-[576px]:w-fit min-[768px]:w-full min-[992px]:w-fit text-[14px] xl:text-[16px] h-12 px-6 min-[1024px]:px-5 min-[1200px]:px-6  2xl:px-12 bg-[var(--secondary-color)] text-white rounded font-semibold border 
                                    border-transparent hover:bg-white hover:text-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition order-3 min-[768px]:order-3 order-2 min-[992px]:order-2"
                                >
                                    BUY NOW
                                </button>

                                <button
                                    type="button"
                                    className="h-12 w-12 flex items-center justify-center bg-[#F3F3F3] rounded transition-all duration-300 hover:bg-[#faf6e8]
                                     hover:text-amber-500 order-2 min-[768px]:order-2 min-[576px]:order-3 min-[992px]:order-3"
                                >
                                    <FiHeart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* TRUST INFO - BOLD STYLE */}
                        <div className="border-t pt-4 space-y-3 text-sm text-gray-800 font-medium">

                            <p className="flex items-start gap-2">
                                <span className="text-grey-200"><ImTruck className="text-[#666666] text-lg" /></span>
                                <span>
                                    <span className="font-semibold text-[#666666]">Estimated Delivery :{" "}</span>
                                    Up to 4 business days
                                </span>
                            </p>

                            <p className="flex items-start gap-2">
                                <span className="text-black"><BsBagCheckFill className="text-[#666666] text-lg" /></span>
                                <span>
                                    <span className="font-semibold text-[#666666]">Free Shipping & Returns :{" "}</span>
                                    On all orders over $200
                                </span>
                            </p>
                        </div>


                        {/* PAYMENT SECTION - DARKER + STRONGER LOOK */}
                        {/* <div className="mt-5 bg-[#F5F5F5] rounded-md p-4 text-center">

                        <h3 className="text-sm font-bold text-black mb-3">
                            Guaranteed Safe And Secure Checkout
                        </h3>

                        <div className="flex items-center justify-center gap-3 flex-wrap">

                            <img src="https://img.icons8.com/color/48/visa.png" className="h-8" />
                            <img src="https://img.icons8.com/color/48/mastercard.png" className="h-8" />
                            <img src="https://img.icons8.com/color/48/amex.png" className="h-8" />
                            <img src="https://img.icons8.com/color/48/discover.png" className="h-8" />
                            <img src="https://img.icons8.com/color/48/paypal.png" className="h-8" />
                            <img src="https://img.icons8.com/color/48/apple-pay.png" className="h-8" />

                        </div>
                    </div> */}

                    </div>
                </div>

                {/* ================= FULL SCREEN QUICK-VIEW MODAL OVERLAY ================= */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center p-4 md:p-10">

                        <div
                            className="absolute inset-0 cursor-zoom-out"
                            onClick={() => setIsModalOpen(false)}
                        />

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors duration-200 text-3xl md:text-4xl p-2 z-[100001]"
                        >
                            ✕
                        </button>

                        <div className="bg-white w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[1000px] h-[70vh] sm:h-[80vh] md:h-[85vh] max-h-[800px] rounded-md p-4 sm:p-8 flex items-center justify-center relative shadow-2xl z-[100000]">

                            <div className="w-full h-full flex items-center justify-center relative select-none">

                                <button
                                    type="button"
                                    onClick={() => {
                                        const currentIndex = thumbnails.indexOf(activeImage);
                                        const prevIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
                                        setActiveImage(thumbnails[prevIndex]);
                                    }}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all z-[100002] font-mono shadow-md"
                                >
                                    ‹
                                </button>

                                <img
                                    src={activeImage}
                                    alt="Enlarged Product View"
                                    className="w-full h-full max-w-full max-h-full object-contain pointer-events-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        const currentIndex = thumbnails.indexOf(activeImage);
                                        const nextIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
                                        setActiveImage(thumbnails[nextIndex]);
                                    }}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all z-[100002] font-mono shadow-md"
                                >
                                    ›
                                </button>

                                <div className="absolute bottom-[-10px] text-xs sm:text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full shadow-sm">
                                    {thumbnails.indexOf(activeImage) + 1} / {thumbnails.length}
                                </div>

                            </div>

                        </div>

                    </div>
                )}

            </section>

            {/* product detail,review */}
            <section id="detail" className="mb-10">
                <div className="container px-4 sm:px-6 lg:px-8  mx-auto ">
                    <div className="flex justify-center flex-wrap border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`px-3 sm:px-5 md:px-8 py-3 text-sm sm:text-base md:text-lg font-semibold transition ${activeTab === "description"
                                ? "text-gray-700 border-b-2 border-blue-500"
                                : "text-gray-500"
                                }`}
                        >
                            Description
                        </button>

                        <button
                            onClick={() => setActiveTab("specification")}
                            className={`px-3 sm:px-5 md:px-8 py-3 text-sm sm:text-base md:text-lg font-semibold transition ${activeTab === "specification"
                                ? "text-gray-700 border-b-2 border-blue-500"
                                : "text-gray-500"
                                }`}
                        >
                            Specification
                        </button>

                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`px-3 sm:px-5 md:px-8 py-3 text-sm sm:text-base md:text-lg font-semibold transition ${activeTab === "reviews"
                                ? "text-gray-700 border-b-2 border-blue-500"
                                : "text-gray-500"
                                }`}
                        >
                            Reviews
                        </button>
                    </div>
                    {/* Content Box */}
                    <div className="border border-gray-200 p-6 min-[576px]:p-10 min-[992px]:p-16 xl:p-20">
                        {activeTab === "description" && (
                            <>
                                <h2 className="text-[20px] md:text-[28px] font-bold text-gray-700 mb-4">
                                    Product Full Description
                                </h2>

                                <p className="text-gray-600 text-[16px] leading-6 md:leading-7 mb-11 font-[500]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus.
                                    Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a.
                                    Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus.
                                    Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus,
                                    sed dapibus mi mauris vitae tellus.
                                </p>

                                <h2 className="text-[20px] md:text-[28px] font-bold text-gray-700 mb-4">
                                    Etiam lacus lacus mollis in mattis
                                </h2>

                                <p className="text-gray-600 text-[16px] leading-6 md:leading-7 font-[500]">
                                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci.
                                    Proin sapien neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin
                                    nisl molestie eget
                                </p>

                                <p className="text-gray-600 text-[16px] leading-6 md:leading-7 mt-7 font-[500]">
                                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut,
                                    laoreet commodo quam. Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique ac lobortis sit amet, dapibus sit amet purus.
                                    Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis, sit amet fringilla odio scelerisque non..
                                </p>
                            </>
                        )}

                        {activeTab === "specification" && (
                            <div>
                                <h2 className="text-[20px] md:text-[28px] font-bold text-gray-700 mb-10">
                                    Specification
                                </h2>

                                {/* General */}
                                <div className="mb-12">
                                    <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">
                                        General
                                    </h3>

                                    <div className="border-t border-gray-200">
                                        {[
                                            ["Material", "Aluminium, Plastic"],
                                            ["Engine Type", "Brushless"],
                                            ["Battery Voltage", "18 V"],
                                            ["Battery Type", "Li-Ion"],
                                            ["Number of Speeds", "2"],
                                            ["Charge Time", "1.08 h"],
                                            ["Weight", "1.5 kg"],
                                        ].map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="grid grid-cols-12 py-2 border-b border-gray-200 text-[15px]"
                                            >
                                                <span className="text-gray-400 col-span-12 min-[576px]:col-span-4 lg:col-span-3">{label}</span>
                                                <span className="text-gray-600 col-span-12 min-[576px]:col-span-5 lg:col-span-4">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dimensions */}
                                <div className="mb-12">
                                    <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">
                                        Dimensions
                                    </h3>

                                    <div className="border-t border-gray-200">
                                        {[
                                            ["Length", "99 mm"],
                                            ["Width", "207 mm"],
                                            ["Height", "208 mm"],
                                        ].map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="grid grid-cols-12 py-2 border-b border-gray-200 text-[15px]"
                                            >
                                                <span className="text-gray-400 col-span-12 min-[576px]:col-span-4 lg:col-span-3">{label}</span>
                                                <span className="text-gray-600 col-span-12 min-[576px]:col-span-5 lg:col-span-4">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-6 md:leading-7 text-[14px] lg:text-[16px]">
                                    Information on technical characteristics, the delivery set,
                                    the country of manufacture and the appearance of the goods
                                    is for reference only and is based on the latest information
                                    available at the time of publication.
                                </p>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div>
                                <h2 className="text-[20px] md:text-[28px] font-bold text-gray-700 mb-10">
                                    Customer Reviews
                                </h2>

                                <div className="space-y-10">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="flex gap-6 pb-5 lg:pb-8 mb-5 md:mb-8 border-b border-gray-200"
                                        >
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-16 h-16 rounded-full object-cover hidden min-[576px]:block"
                                            />

                                            <div className="flex-1">
                                                <h4 className="font-semibold text:lg md:text-xl text-gray-700">
                                                    {review.name}
                                                </h4>

                                                <div className="flex items-center gap-1 my-2">
                                                    {[...Array(5)].map((_, index) =>
                                                        index < review.rating ? (
                                                            <FaStar
                                                                key={index}
                                                                className="text-[14px] lg:text-base text-amber-400"
                                                            />
                                                        ) : (
                                                            <FaRegStar
                                                                key={index}
                                                                className="text-[14px] lg:text-base text-gray-300"
                                                            />
                                                        )
                                                    )}
                                                </div>

                                                <p className="text-[16px] md:text-[16px] text-gray-600 leading-6 md:leading-7">
                                                    {review.review}
                                                </p>

                                                <p className="text-[14px] md:text-[16px] text-gray-400 mt-2 md:mt-3">
                                                    {review.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center items-center gap-4 mt-10  pb-8 border-b border-gray-200">
                                    <button className="text-gray-400 text-xl">
                                        &lt;
                                    </button>

                                    <button className="w-8 h-8 text-gray-600">
                                        1
                                    </button>

                                    <button className="w-8 h-8 bg-blue-600 text-white rounded">
                                        2
                                    </button>

                                    <button className="w-8 h-8 text-gray-600">
                                        3
                                    </button>

                                    <button className="text-gray-400 text-xl">
                                        &gt;
                                    </button>
                                </div>

                                <div className="min-[768px]:max-w-4xl mt-10">
                                    <h2 className="text-[28px] font-bold text-gray-700 mb-10">
                                        Write A Review
                                    </h2>

                                    <form className="min-[992px]:w-[700px]">
                                        {/* Top Row */}
                                        <div className="mb-8 flex flex-wrap md:flex-nowrap gap-4">
                                            <div className="w-full md:flex-1">
                                                <label className="block text-gray-600 mb-2">
                                                    Review Stars
                                                </label>

                                                <select className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-blue-500">
                                                    <option>5 Stars Rating</option>
                                                    <option>4 Stars Rating</option>
                                                    <option>3 Stars Rating</option>
                                                    <option>2 Stars Rating</option>
                                                    <option>1 Star Rating</option>
                                                </select>
                                            </div>

                                            <div className="w-full md:flex-1">
                                                <label className="block text-gray-600 mb-2">
                                                    Your Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="w-full md:flex-1">
                                                <label className="block text-gray-600 mb-2">
                                                    Email Address
                                                </label>

                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-blue-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Review */}
                                        <div className="mb-8">
                                            <label className="block text-gray-600 mb-2">
                                                Your Review
                                            </label>

                                            <textarea
                                                rows={5}
                                                className="w-full border border-gray-300 p-4 resize-none outline-none focus:border-blue-500"
                                            />
                                        </div>

                                        <button
                                            className="h-12 px-12 bg-[var(--secondary-color)] text-white rounded font-semibold border border-transparent hover:bg-white hover:text-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
                                        >
                                            Post Your Review
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* related product */}
            <section id="relatedproduct" className="mb-10">
                <div className="container px-4 sm:px-6 lg:px-8  mx-auto">
                    <div className="flex items-center gap-3 w-full mb-5">

                        <h2 className="title font-black text-[#0b1b3a] whitespace-nowrap !mb-0">
                            Related Products
                        </h2>

                        <div className="min-[576px]:flex-1 border-t border-t-1 border-gray-300"></div>

                        <div className=" gap-2 items-center hidden min-[576px]:flex">
                            <button className="swiper-prev bg-gray-100 p-2">
                                <IoIosArrowBack />
                            </button>
                            <button className="swiper-next bg-gray-100 p-2">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>

                    <div>
                        <Swiper
                            modules={[Grid, Navigation]}
                            slidesPerView={4}
                            navigation={true}
                            navigation={{
                                prevEl: ".swiper-prev",
                                nextEl: ".swiper-next",
                            }}
                            spaceBetween={30}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 25
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                },
                            }}
                        >
                            {
                                products?.map((v) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="bg-white border-1 border-gray-300 rounded-md group">
                                                <div className="relative">
                                                    <div className="relative flex items-center justify-center overflow-hidden p-3 sm:p-4 h-40 sm:h-52 xl:h-64">

                                                        {/* Badge */}
                                                        {v?.oldPrice && (
                                                            <div className="absolute top-2 left-2 z-10">
                                                                <span className="bg-[#0b1b3a] text-white text-xs font-semibold px-2 py-1 rounded">
                                                                    -10%
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Icons */}
                                                        <div className="absolute right-2 sm:right-3 top-2 sm:top-4 flex flex-col gap-2 z-10">
                                                            <button
                                                                className="
                                                                 w-7 h-7 min-[576px]:w-8 min-[576px]:h-8 bg-white rounded-full flex items-center justify-center
                                                                border border-gray-300
    
                                                                opacity-100 translate-x-0
                                                                lg:opacity-0 lg:translate-x-4
    
                                                                group-hover:lg:opacity-100
                                                                group-hover:lg:translate-x-0
    
                                                                transition-all duration-300 delay-100
                                                                hover:bg-[#0b1b3a] hover:text-white"
                                                                onClick={() => openWishlist(v)}
                                                            >
                                                                <FiHeart className="text-sm" />
                                                            </button>

                                                            <button
                                                                className="
                                                                 w-7 h-7 min-[576px]:w-8 min-[576px]:h-8 bg-white rounded-full flex items-center justify-center
                                                                border border-gray-300
    
                                                                opacity-100 translate-x-0
                                                                lg:opacity-0 lg:translate-x-4
    
                                                                group-hover:lg:opacity-100
                                                                group-hover:lg:translate-x-0
    
                                                                transition-all duration-300 delay-300
                                                                hover:bg-[#0b1b3a] hover:text-white"
                                                                onClick={() => openQuickView(v)}
                                                            >
                                                                <LuEye />
                                                            </button>
                                                        </div>

                                                        {/* Product Image */}
                                                        <img
                                                            onClick={() => navigate('/product-detail')}
                                                            src={v.image}
                                                            alt={v.name}
                                                            className="product-img-element w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <div class="px-2 sm:px-5 pb-3 sm:pb-5 border-t border-gray-100">
                                                        <h3 class="mt-5 text-sm  sm:text-md md:text-[17px] xl:text-lg font-medium text-gray-800 sm:leading-7">
                                                            {v.name}
                                                        </h3>


                                                        <div className="flex items-center min-[576px]:mt-1">
                                                            <div className="flex text-yellow-400">
                                                                ★★★★★
                                                            </div>
                                                            <span className="ml-2 text-xs sm:text-sm text-gray-500">({v.rating})</span>{/*{v.rating} */}
                                                        </div>

                                                        <div class="flex items-center gap-2 mt-2 sm:mt-4">
                                                            <span class="text-gray-400 line-through">
                                                                {v.oldPrice && "$" + v.oldPrice}
                                                            </span>
                                                            <span class="!text-[18px] sm:!text-lg md:!text-xl font-bold text-[#0b1b3a]">
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
                                                                onClick={(e) => {
                                                                    handleAddToCartWithFly(e, v)
                                                                }}
                                                                className="w-full mt-5 py-2 text-[14px] bg-gray-100 text-gray-800 font-semibold rounded
                                                                    hover:bg-amber-500 hover:text-white transition
                                                                    flex items-center justify-center gap-2"
                                                            >
                                                                <TiShoppingCart className="text-lg hidden min-[576px]:block" />
                                                                <span className="text-gray-800 hover:text-white !text-[12px] md:!text-[14px]">ADD TO CART</span>
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
                </div>

            </section>

            {showQuickView && (
                <Quickviewpro
                    product={selectedProduct}
                    onqClose={() => setShowQuickView(false)}
                    onAddToCart={(productWithQty) => {
                        setSelectedProduct(productWithQty);
                        setCartOpen(true);
                        setShowQuickView(false);
                    }}
                />
            )}

            {wishlistOpen && (
                <WishlistDrawer
                    product={selectedProduct}
                    onClose={() => setWishlisOpen(false)}
                    onAddToCart={(productWithQty) => {
                        setSelectedProduct(productWithQty);
                        setWishlisOpen(false);
                        setCartOpen(true);
                    }}
                />
            )}

            {cartOpen && (
                <CartDrawer
                    open={cartOpen}
                    product={selectedProduct}
                    onClose={() => setCartOpen(false)}
                />
            )}
        </main>
    );
}

export default Detailproduct;