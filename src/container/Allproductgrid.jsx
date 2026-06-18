import React, { useState } from "react";
console.log(React);

import { FiHeart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

function Allproductgrid() {

    const [price, setPrice] = useState(20);

    const [selectedColor, setSelectedColor] = useState("black");

    const colors = [
        { color: "#000000", name: "Black" },
        { color: "#3B82F6", name: "Blue" },
        { color: "#EF4444", name: "Red" },
        { color: "#22C55E", name: "Green" },
        { color: "#EAB308", name: "Yellow" },
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

    return (
        <main>
            <section id="allproduct" className="mb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-12 min-[992px]:gap-7 items-start">
                        <div className="hidden min-[992px]:block col-span-12 md:col-span-3 xl:col-span-3 border border-gray-300 px-4 sm:px-6 lg:px-8 py-4 lg:py-5 rounded-md">
                            <h5 className="text-lg sm:text-xl font-bold mb-4 pb-4 border-b border-gray-300">Filter By</h5>

                            <div id="category" className="mb-7">
                                <h6 className="text-base sm:text-lg font-medium">Categories</h6>

                                <ul className="flex flex-col gap-2 mt-3 text-sm sm:text-base">
                                    <li className="flex gap-3 items-center ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span >Box Cutters (16)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Chisels (13)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Heat guns (12)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Wrench Tool (8)</span>
                                    </li>

                                </ul>
                            </div>

                            <div id="size" className="mb-7">
                                <h6 className="text-[18px]">Size</h6>

                                <ul className="flex flex-col gap-2 mt-3">
                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>S(2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>M(2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>L(2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>XL(2)</span>
                                    </li>

                                </ul>
                            </div>

                            <div id="availability" className="mb-7">
                                <h6 className="text-[18px]">Availability</h6>

                                <ul className="flex flex-col gap-2 mt-3">
                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span> In stock (16)</span>
                                    </li>
                                </ul>
                            </div>

                            <div id="price" className="mb-7">
                                <h6 className="text-[18px]">Price</h6>

                                <div className="flex items-baseline gap-1 mt-2 text-[16px]">
                                    <span>${price}</span>
                                    <span>-</span>
                                    <span>$180</span>
                                </div>

                                <input
                                    type="range"
                                    min="20"
                                    max="180"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full h-1 accent-amber-500 cursor-pointer"
                                />
                            </div>

                            <div id="color" className="mb-7">
                                <h6 className="text-[18px] mb-3">Color</h6>

                                <div className="space-y-2">
                                    {colors.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => setSelectedColor(item.name)}
                                            className={`
                                                flex items-center gap-3 transition-colors
                                                ${selectedColor === item.name
                                                    ? "text-amber-500"
                                                    : "text-gray-600 hover:text-amber-500"
                                                }
                                        `}
                                        >
                                            <span
                                                className="w-4 h-4 rounded-full border border-gray-300"
                                                style={{ backgroundColor: item.color }}
                                            />

                                            <span>{item.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div id="brand">
                                <h6 className="text-[18px]">Categories</h6>

                                <ul className="flex flex-col gap-2 mt-3">
                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Abper (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Boogie (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Graphic Corner (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Magner (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Manda (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Mova (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Rollirs (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Roprical (2)</span>
                                    </li>


                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Roxy (2)</span>
                                    </li>

                                    <li className="flex gap-3 items-center  ">
                                        <input type="checkbox" name="" id="" className="w-4 h-4 border-7 border-gray-500 accent-amber-500" />
                                        <span>Studio Design (1)</span>
                                    </li>


                                </ul>
                            </div>

                        </div>

                        <div className="col-span-12 min-[992px]:col-span-9 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                            {
                                products?.map((v) => {
                                    return (
                                        <div className="col-span-6 min-[768px]:col-span-4 min-[992px]:col-span-4 lg:col-span-4 group">
                                            <div className="bg-white border border-gray-200 rounded-md">
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
                                                    <div className="h-40 sm:h-52 xl:h-64 flex items-center justify-center overflow-hidden p-3 sm:p-4">
                                                        <img
                                                            src={v.image}
                                                            alt="Product"
                                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <div class="px-2 sm:px-5 pb-3 sm:pb-5 border-t border-gray-100">
                                                        <h3 class="mt-5 text-sm  sm:text-md md:text-[17px] xl:text-lg font-medium text-gray-800 sm:leading-7">
                                                            {v.name}
                                                        </h3>


                                                        <div class="flex items-center mt-1 sm:mt-3">
                                                            <div class="flex text-yellow-400">
                                                                ★★★★★
                                                            </div>
                                                            <span class="ml-2 text-xs sm:text-sm text-gray-500">({v.rating})</span>{/*{v.rating} */}
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
                                                                className="w-full mt-5 py-2 !text-[8px] sm:!text-sm lg:text-[14px] bg-gray-100 text-gray-800 font-semibold rounded
                                                                 hover:bg-amber-500 hover:text-white transition flex items-center justify-center gap-2"
                                                            >
                                                                <TiShoppingCart className="text-lg hidden min-[576px]:block " />
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Allproductgrid;