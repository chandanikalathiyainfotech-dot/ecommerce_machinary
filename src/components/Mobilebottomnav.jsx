import React from "react";
console.log(React);

import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

function Mobilebottomnav() {
    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 min-[992px]:hidden">

                <div className="grid grid-cols-4 h-14">

                    {/* Home / Compare */}
                    <button className="flex flex-col items-center justify-center text-gray-600 border-r-1 border-r-[#eeebeb]">
                        <div className="relative">
                            <GoHomeFill className="text-[20px] text-[#BDBDBD]" />
                        </div>

                        <span className="text-xs mt-1">Compare</span>
                    </button>

                    {/* Account */}
                    <button className="flex flex-col items-center justify-center text-gray-600 border-r-1 border-r-[#eeebeb]">
                        <FaUser className="text-lg text-[#BDBDBD]" />
                        <span className="text-xs mt-1">Account</span>
                    </button>

                    {/* Cart */}
                    <button className="flex flex-col items-center justify-center text-gray-600 border-r-1 border-r-[#eeebeb]">
                        <div className="relative">
                            <FaShoppingCart className="text-[20px] text-[#BDBDBD]" />

                            <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full  bg-amber-500 text-[12px] font-semibold flex items-center justify-center">
                                2
                            </span>
                        </div>

                        <span className="text-xs mt-1">Cart</span>
                    </button>

                    {/* Wishlist */}
                    <button className="flex flex-col items-center justify-center text-gray-600 border-r-1 border-r-[#eeebeb]">
                        <div className="relative">
                            <FaHeart className="text-[20px] text-[#BDBDBD]" />

                            <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full  bg-amber-500 text-[12px] font-semibold flex items-center justify-center">
                                2
                            </span>
                        </div>

                        <span className="text-xs mt-1">Wishlist</span>
                    </button>

                </div>

            </div>
        </>
    )
}

export default Mobilebottomnav;