import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
console.log(React);
import { FiHeart } from "react-icons/fi";
import { HiArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Allproductgrid() {

    const [price, setPrice] = useState(20);
    const [open, setOpen] = useState(false);
    const [view, setView] = useState("grid");
    const [showFilter, setShowFilter] = useState(false);
    const [sortBy, setSortBy] = useState("Filter Products");
    const [selectedColor, setSelectedColor] = useState("black");
    const dropdownRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
            color: ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-400",]
        },
        {
            id: 2,
            name: "Bosch BH2760VC Brute Breaker Hammer",
            image: '../../src/assets/Images/machines/m2.jpg',
            price: 90.0,
            rating: 3,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500", "bg-yellow-400",]
        },

        {
            id: 3,
            name: "Dewalt D28730 14 In Chop Saw Aluminium Arm",
            image: '../../src/assets/Images/machines/m3.jpg',
            price: 105.0,
            rating: 4,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500", "bg-amber-500"]

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
            color: ["bg-blue-500", "bg-green-500"]

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
            color: ["bg-red-500", "bg-yellow-400",]

        },

        {
            id: 6,
            name: "Dewalt XTREME 12V Brushless Circular Saw",
            image: '../../src/assets/Images/machines/m6.jpg',
            price: 65.0,
            rating: 4,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500", "bg-green-500"]

        },
        {
            id: 7,
            name: "Milwaukee M18 FN16GA 18V Angled Finish Nailer",
            image: '../../src/assets/Images/machines/m7.jpg',
            price: 99.0,
            rating: 4,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500"]

        },
        {
            id: 8,
            name: "Dewalt DCS331N-XJ XR Lithium-Ion Jigsaw",
            image: '../../src/assets/Images/machines/m8.jpg',
            price: 105.0,
            rating: 5,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500"]
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
            color: ["bg-blue-500", "bg-green-500", "bg-yellow-400",]

        },
        {
            id: 10,
            name: "Paslode IM90CI Impulse Framing Combo Nailer",
            image: '../../src/assets/Images/machines/m10.jpg',
            price: 129.0,
            rating: 5,
            badge: null,
            oldPrice: null,
            color: ["bg-blue-500", "bg-green-500", "bg-red-500"]

        },

    ];

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case "Name, A to Z":
                return a.name.localeCompare(b.name);

            case "Name, Z to A":
                return b.name.localeCompare(a.name);

            case "Price, low to high":
                return a.price - b.price;

            case "Price, high to low":
                return b.price - a.price;

            case "Best sellers":
                return b.rating - a.rating;

            default:
                return 0; // Relevance
        }
    });

    const indexOfLastProduct = currentPage * productsPerPage; //1 * 9 = 9
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //9 - 9  = 0

    const currentProducts = sortedProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    ); //(0,9)
    console.log(currentProducts)

    const totalPages = Math.ceil(
        sortedProducts.length / productsPerPage
    ); //9 / 9 = 1


    return (
        <main>
            {/* top header breadcrumps*/}
            <section id="top" className="!mt-4 md:!mt-0 md:bg-[#F7F7F7] md:py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="text text-center py-5 md:py-0 bg-[#F7F7F7] md:bg-transparent">
                        <h2 className="text-[28px] uppercase font-bold hidden md:block">Shop</h2>
                        <div className="breadcrumps pl-4 md:pl-0">
                            <ol className="flex gap-1 md:justify-center">
                                <NavLink to={'/'}><li>Home /</li></NavLink>
                                <li className="text-amber-500"> shop</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* allproducts */}
            <section id="allproduct" className="!mt-[40px] md:!mt-[50px] mb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-12 min-[992px]:gap-7 items-start">
                        {/* left side filter */}
                        <div
                            className={`
                            left-side
                            col-span-12 md:col-span-3 xl:col-span-3
                            border border-gray-300
                            px-4 sm:px-6 lg:px-8
                            py-4 lg:py-5
                            rounded-md
                            bg-white
                            overflow-y-auto

                            fixed top-0 left-0
                            h-screen w-[280px]
                            overflow-y-auto
                            z-50
                            ${showFilter ? "translate-x-0" : "-translate-x-full"}
                            min-[992px]:translate-x-0
                            min-[992px]:static
                            min-[992px]:z-auto
                            min-[992px]:h-auto
                            min-[992px]:w-auto
                            min-[992px]:overflow-visible
                            `}
                        >

                            <div className="flex justify-between items-center mb-5 mb-4 pb-4 border-b border-gray-300 ">
                                <h5 className="text-lg sm:text-xl font-bold flex justify-between items-center">Filter By</h5>

                                <button
                                    onClick={() => setShowFilter(false)}
                                    className="text-2xl"
                                >
                                    <AiOutlineClose className="text-[20px] !text-black min-[992px]:hidden" />
                                </button>
                            </div>

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

                        {/* right side product */}
                        <div className="col-span-12 min-[992px]:col-span-9 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">

                            {/* top-filter */}
                            <div className="filter-top col-span-12 flex flex-wrap justify-between gap-y-5">
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setView("grid")}>
                                        <RiLayoutGrid2Fill
                                            className={`text-[18px] ${view === "grid" ? "text-amber-500" : "text-gray-500"
                                                }`}
                                        />
                                    </button>

                                    {/* LIST BUTTON */}
                                    <button onClick={() => setView("list")}>
                                        <TfiMenuAlt
                                            className={`text-[18px] ${view === "list" ? "text-amber-500" : "text-gray-500"
                                                }`}
                                        />
                                    </button>
                                    <p className="text-[14px] md:text-[16px]">There are 19 products.</p>
                                </div>

                                <div className="filter-dropdown w-full md:w-auto ml-auto flex items-center gap-2 md:gap-5">

                                    <span className="hidden md:block !text-black !text-[16px]">Sort By: </span>

                                    <div ref={dropdownRef} className="w-80 min-[992px]:w-64 relative">

                                        {/* Button */}
                                        <button
                                            onClick={() => setOpen(!open)}
                                            className="w-full flex justify-between items-center border border-gray-300 px-4 py-2 bg-white rounded-md shadow-sm"
                                        >
                                            <span>{sortBy}</span>
                                            <span className="text-gray-500 text-xl">
                                                {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                            </span>
                                        </button>

                                        {/* Dropdown */}
                                        {open && (
                                            <div className="absolute w-full mt-2 border border-gray-200 rounded-md bg-white shadow-md overflow-hidden z-20"
                                                onClick={(e) => {
                                                    setSortBy(e.target.innerText);
                                                    setOpen(false);
                                                }}>

                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Best sellers
                                                </div>

                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Relevance
                                                </div>

                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Name, A to Z
                                                </div>

                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Name, Z to A
                                                </div>


                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Price, low to high
                                                </div>

                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    Price, high to low
                                                </div>

                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setShowFilter(true)}
                                        className="block min-[992px]:hidden text-[14px] md:text-[16px] py-2 px-5 md:px-8 bg-[var(--secondary-color)] tracking-[1.5px]  rounded-sm text-white">
                                        Filter
                                    </button>
                                </div>
                            </div>

                            {/* product display */}
                            {
                                currentProducts?.map((v) => {
                                    return (
                                        <div
                                            className={`group ${view === "grid" ? "col-span-6 md:col-span-4" : "col-span-12"}`}>
                                            <div className={`bg-white border border-gray-200 rounded-md `}>
                                                <div className={`relative ${view === "grid" ? "block" : "flex flex-wrap min-[576px]:flex-nowrap justify-center min-[576px]:justify-start"}`}>

                                                    <div
                                                        className={`relative flex items-center justify-center overflow-hidden p-3 sm:p-4 ${view === "grid"
                                                            ? "h-full"
                                                            : "h-40 min-[576px]:h-64 flex-shrink-0 w-full min-[576px]:w-fit"
                                                            }`}
                                                    >

                                                        {/* Badge */}
                                                        {v?.oldPrice && (
                                                            <div className="absolute top-2 left-2 z-10">
                                                                <span className="bg-[#0b1b3a] text-white text-xs font-semibold px-2 py-1 rounded">
                                                                    -10%
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* Icons */}
                                                        <div className="absolute right-2 min-[576px]:right-3 top-2 min-[576px]:top-4 flex flex-col gap-1 min-[576px]:gap-2 z-10">
                                                            <button
                                                                className="
                                                                w-7 h-7 min-[576px]:w-8 min-[576px]:h-8 bg-white rounded-full flex items-center justify-center
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
                                                                 w-7 h-7 min-[576px]:w-8 min-[576px]:h-8 bg-white rounded-full flex items-center justify-center
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

                                                        <img
                                                            src={v.image}
                                                            alt="Product"
                                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </div>


                                                    <div
                                                        className={`pl-2 sm:pl-5 pb-3 sm:pb-5 border-t border-gray-100 ${view === "grid" ? "pr-2" : "pr-9"
                                                            }`}
                                                    >
                                                        <h3 className="mt-5 text-sm  sm:text-md md:text-[17px] xl:text-lg font-medium text-gray-800 sm:leading-7">
                                                            {v.name}
                                                        </h3>


                                                        <div className="flex items-center min-[576px]:mt-1">
                                                            <div className="flex text-yellow-400">
                                                                ★★★★★
                                                            </div>
                                                            <span className="ml-2 text-xs sm:text-sm text-gray-500">({v.rating})</span>{/*{v.rating} */}
                                                        </div>

                                                        <div className="flex items-center gap-2 mt-1 min-[576px]:mt-2">
                                                            <span className="text-gray-400 line-through">
                                                                {v.oldPrice && "$" + v.oldPrice}
                                                            </span>
                                                            <span className="!text-[18px] sm:!text-lg md:!text-xl font-bold text-[#0b1b3a]">
                                                                ${v.price}
                                                            </span>
                                                        </div>

                                                        {
                                                            view === "list" &&
                                                            <>
                                                                <p className="text-[14px] md:text-[16px] text-[#666666] mt-1 md:mt-3 ">Availability: <span>152 In Stock</span></p>

                                                                <p id="pdes" className="hidden md:block text-[14px] text-[#666666] mt-2 ">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a convallis nisl, at aliquam dolor. Morbi in iaculis nunc.
                                                                    Nulla eu mi at velit imperdiet sollicitudin sed vel risus. Quisque eleifend lorem ipsum, et tempus nulla convallis nec.
                                                                </p>

                                                                <div className=" gap-1 mt-3 hidden min-[576px]:flex">
                                                                    {v?.color?.map((color, index) => (
                                                                        <button
                                                                            key={index}
                                                                            onClick={() => setSelectedColor(color)}
                                                                            className={`
                                                                            w-4 h-4 rounded-full transition-all duration-200
                                                                            ${color}
                                                                            ${selectedColor === color
                                                                                    ? "ring-1 ring-black ring-offset-1"
                                                                                    : "border border-gray-300"
                                                                                }
                                                                            `}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        }


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
                                                                className={`${view === "grid" ? "w-full px-0" : "w-fit px-5"}
                                                                mt-5 py-2 text-gray-800 font-semibold rounded
                                                                bg-gray-100 hover:bg-amber-500 hover:text-white
                                                                transition flex items-center justify-center gap-2`}
                                                            >
                                                                <TiShoppingCart className="text-lg hidden min-[576px]:block" />
                                                                <span className="text-gray-800 hover:text-white !text-[12px] md:!text-[14px]">
                                                                    ADD TO CART
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* pagination */}
                            <div className="col-span-12 flex justify-center items-center gap-5 mt-10">

                                {currentPage > 1 && (
                                    <button
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        className="flex items-center gap-2 text-gray-800 hover:text-amber-500"
                                    >
                                        <HiArrowNarrowLeft /> Previous
                                    </button>
                                )}

                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`text-lg ${currentPage === index + 1
                                            ? "text-amber-500"
                                            : "text-gray-800"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                                {currentPage < totalPages && (
                                    <button
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        className="flex items-center gap-2 text-gray-800 hover:text-amber-500"
                                    >
                                        Next <HiOutlineArrowNarrowRight />
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Allproductgrid;