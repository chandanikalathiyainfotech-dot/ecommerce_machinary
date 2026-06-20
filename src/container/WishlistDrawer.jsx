import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function WishlistDrawer({ product, onClose }) {
    const navigate = useNavigate()

    if (!product) return null;

    const wishlistItems = [
        {
            id: 1,
            name: "Annovi Reverberi Pump",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "120.00$",
            oldPrice: null,
            date: "June 20, 2026",
            status: null,
        },
        {
            id: 2,
            name: "10 Gallon Dust Extractor",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "120.00$",
            originalPrice: "150.00$",
            date: "June 20, 2026",
            status: null,
        },
        {
            id: 3,
            name: "Carbon Knot Wire",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "200.00$",
            originalPrice: null,
            date: "June 19, 2026",
            status: "Available on backorder",
        },
        {
            id: 1,
            name: "Annovi Reverberi Pump",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "120.00$",
            oldPrice: null,
            date: "June 20, 2026",
            status: null,
        },
        {
            id: 2,
            name: "10 Gallon Dust Extractor",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "120.00$",
            originalPrice: "150.00$",
            date: "June 20, 2026",
            status: null,
        },
        {
            id: 3,
            name: "Carbon Knot Wire",
            image: '../../src/assets/Images/machines/m1.jpg',
            price: "200.00$",
            originalPrice: null,
            date: "June 19, 2026",
            status: "Available on backorder",
        },
    ];

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Container Box: Full screen on mobile, modal box on desktop */}
            <div className="bg-white w-full h-[80vh] sm:h-auto max-w-[800px] shadow-xl rounded-t-lg sm:rounded-sm overflow-hidden flex flex-col font-sans">

                {/* Header Section */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0F172A]">
                        <FiHeart size={20} className="sm:w-[22px] sm:h-[22px]" />
                        <h2>Wishlist ({wishlistItems.length})</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {/* Wishlist Items Wrapper */}
                {/* Wishlist Items Wrapper */}
                <div className="flex-1 divide-y divide-gray-100 px-4 sm:px-6 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                    {product && (
                        <div key={product.id} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">

                            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">

                                <button className="text-gray-400 hover:text-red-500 text-[18px] px-1 transition-colors shrink-0">
                                    ✕
                                </button>

                                <div className="w-[75px] h-[75px] sm:w-[80px] sm:h-[80px] border border-gray-100 rounded flex items-center justify-center p-1.5 bg-white shrink-0">
                                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-[#03153D] text-[15px] sm:text-[16px] leading-tight truncate">
                                        {product.name}
                                    </h3>

                                    <div className="mt-0.5 flex items-center gap-2 text-[15px] sm:text-[16px]">
                                        {product.oldPrice ? (
                                            <>
                                                <span className="text-gray-400 line-through">${product.oldPrice}</span>
                                                <span className="text-red-600 font-bold">${product.price}</span>
                                            </>
                                        ) : (
                                            <span className="text-gray-400 font-semibold">${product.price}</span>
                                        )}
                                    </div>

                                </div>
                            </div>

                            {/* Bottom Row Layout (Mobile Only) / Appended Right Section (Desktop) */}
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center pl-[34px] sm:pl-0 gap-2 shrink-0">

                                <button className="border border-gray-300 sm:border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-xs font-black px-6 py-2.5 rounded transition-all tracking-wider uppercase">
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    )}
                </div>


                {/* Footer Navigation Section: Stacks buttons into rows on mobile */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-0 border-t border-gray-100 bg-white shrink-0">
                    <button className="group relative px-6 py-3 font-semibold text-[14px] bg-[var(--secondary-color)] border border-[var(--secondary-color)]
                rounded overflow-hidden transition-colors duration-300 ease-in-out text-white hover:border-amber-400 w-full sm:w-auto order-1 sm:order-none">
                        <span className="absolute bottom-0 left-0 w-full h-full bg-amber-400 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
                        <span className="relative z-10 block text-center">View Wishlist</span>
                    </button>

                    <button className="group relative px-6 py-3 font-semibold text-[14px] border border-gray-400 
                    rounded-md overflow-hidden transition-colors duration-300 ease-in-out hover:text-white hover:border-amber-400 w-full sm:w-auto order-2 sm:order-none" onClick={onClose}>
                        <span className="absolute bottom-0 left-0 w-full h-full bg-amber-400 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
                        <span className="relative z-10 block text-center">
                            Continue shopping
                        </span>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default WishlistDrawer;