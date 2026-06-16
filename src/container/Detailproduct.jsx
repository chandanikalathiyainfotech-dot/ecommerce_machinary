import React, { useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";

function Detailproduct() {

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

    return (
        <section id="detailproduct" className="mb-10">
            <div className="container px-4 sm:px-6 lg:px-8  mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* LEFT SIDE - IMAGE GALLERY */}
                <div className="md:col-span-6 flex gap-4 flex-col xl:flex-row w-full">

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

                    {/* Main Image */}
                    <div className="
                        w-full border rounded-lg p-4 flex items-center justify-center bg-white 
                        order-1 xl:order-2
                        h-[300px] min-[576px]:h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
                    ">
                        <img
                            src={activeImage}
                            className="w-full h-full object-contain"
                            alt=""
                        />
                    </div>

                </div>

                {/* RIGHT SIDE - DETAILS */}
                <div className="md:col-span-6 flex flex-col gap-4">

                    <span className="bg-orange-500 text-white text-xs px-2 py-1 w-fit rounded">
                        -18%
                    </span>

                    <p className="text-sm text-gray-500">
                        Brand: <span className="text-orange-500 font-medium">QuickCart</span>
                    </p>

                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        BLACK+DECKER Angle Grinder BDEG400
                    </h1>

                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xl font-bold text-blue-600">$23 - $28</span>
                        <span className="text-orange-400">★★★★★</span>
                        <span className="text-sm text-gray-500">(1 review)</span>
                    </div>

                    <p className="text-sm text-red-500">
                        🔥 12 products sold in last 9 hours
                    </p>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        The Black & Decker BDEG400 4-1/2" 6 Amp Angle Grinder is ideal for cutting,
                        grinding and rust removal. Durable design for long life.
                    </p>

                    {/* Color Variants */}
                    <div>
                        <p className="text-sm font-medium mb-2">Color</p>

                        <div className="flex gap-2">
                            {variants.map((v) => (
                                <div
                                    key={v.id}
                                    onClick={() => {
                                        setActiveVariant(v);
                                        setActiveImage(v.image);
                                        setThumbnails(v.thumbnails);
                                    }}
                                    className={`w-18 h-18 border rounded-md cursor-pointer overflow-hidden hover:border-orange-400 ${activeVariant.id === v.id
                                        ? "border-orange-500"
                                        : ""
                                        }`}
                                >
                                    <img
                                        src={v.image}
                                        alt={v.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-2xl font-bold text-gray-800">$28</p>

                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded w-fit text-sm">
                        306 in stock
                    </span>

                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center border rounded">
                            <button className="px-3 py-2">-</button>
                            <span className="px-4">1</span>
                            <button className="px-3 py-2">+</button>
                        </div>

                        <button className="flex-1 bg-amber-500 text-white py-3 rounded font-semibold hover:bg-orange-600">
                            ADD TO CART
                        </button>
                    </div>

                    <button className="w-full bg-[var(--secondary-color)] text-white py-3 rounded font-semibold hover:bg-blue-800">
                        BUY NOW
                    </button>

                    {/* TRUST INFO - BOLD STYLE */}
                    <div className="border-t pt-4 space-y-3 text-sm text-gray-800 font-medium">

                        <p className="flex items-start gap-2">
                            <span className="text-black">●</span>
                            <span>
                                <span className="font-semibold text-black">21 people</span> are viewing this right now
                            </span>
                        </p>

                        <p className="flex items-start gap-2">
                            <span className="text-grey-200"><BsShieldFillCheck className="text-[#666666]" /></span>
                            <span>
                                <span className="font-semibold text-[#666666]">Estimated Delivery :{" "}</span>
                                Up to 4 business days
                            </span>
                        </p>

                        <p className="flex items-start gap-2">
                            <span className="text-black"><BsShieldFillCheck className="text-[#666666]" /></span>
                            <span>
                                <span className="font-semibold text-[#666666]">Free Shipping & Returns :{" "}</span>
                                On all orders over $200
                            </span>
                        </p>
                    </div>


                    {/* PAYMENT SECTION - DARKER + STRONGER LOOK */}
                    <div className="mt-5 bg-[#F5F5F5] rounded-md p-4 text-center">

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
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Detailproduct;