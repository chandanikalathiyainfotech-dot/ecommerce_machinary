import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Quickviewpro({ product, onqClose, onAddToCart }) {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(product?.qty || 1);
    const [cartOpen, setCartOpen] = useState(false);

    if (!product) return null;

    useEffect(() => {
        setQuantity(product?.qty || 1);
    }, [product]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    };

    return (
        <>
            <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-2 sm:p-4">

                <div className="bg-white rounded-lg w-full max-w-5xl relative overflow-y-auto max-h-[95vh]">

                    {/* Close */}
                    <button
                        onClick={onqClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded flex items-center justify-center"
                    >
                        <RxCross2 />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-6 md:p-10">
                        {/* Product Image */}
                        <div className="flex justify-center items-center">
                            <img
                                onClick={() => navigate('/product-detail')}
                                src={product.image}
                                alt={product.name}
                                className="max-h-[250px] sm:max-h-[350px] md:max-h-[450px] object-contain"
                            />
                        </div>

                        {/* Product Details */}
                        <div>

                            <h2 className="text-xl lg:text-2xl font-bold text-slate-900">
                                {product.name}
                            </h2>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-3">
                                <div className="text-yellow-400">
                                    ★★★★★
                                </div>

                                <span className="text-gray-500 text-sm">
                                    (1 customer review)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mt-4">
                                <span className="text-xl lg:text-2xl font-bold">
                                    ${product.price}
                                </span>
                            </div>

                            <hr className="my-6" />

                            {/* Description */}
                            <p className="text-gray-600 leading-7">
                                Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            {/* Quantity + Button */}
                            <div className="flex flex-wrap gap-3 mt-8">

                                {/* Quantity */}
                                <div className="flex items-center border border-[#b5b9bd] rounded h-11 sm:h-12">
                                    <button
                                        type="button"
                                        className="px-3 2xl:px-5 h-full text-[#6c757d] hover:bg-gray-100"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>

                                    <span className="px-5 min-w-[40px] text-center flex items-center h-full">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        className="px-3 2xl:px-5 h-full text-[#6c757d] hover:bg-gray-100"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Wishlist */}
                                <button
                                    type="button"
                                    className="h-12 w-12 flex items-center justify-center bg-[#F3F3F3] rounded transition-all duration-300 hover:bg-[#faf6e8] hover:text-amber-500"
                                >
                                    <FiHeart size={20} />
                                </button>

                                {/* Add To Cart */}
                                <button
                                    type="button"
                                    className="w-full min-[576px]:w-auto text-[14px] xl:text-[16px] h-11 sm:h-12 px-4 2xl:px-8 bg-amber-500 text-white rounded font-semibold border border-transparent hover:bg-white hover:text-amber-500 hover:border-amber-500 transition"
                                    onClick={() => {
                                        if (typeof onAddToCart === "function") {
                                            onAddToCart({ ...product, qty: quantity });
                                        }

                                        onqClose();
                                    }}
                                >
                                    ADD TO CART
                                </button>

                                {/* Buy Now - Always New Line */}
                                <div className="w-full min-[576px]:w-auto min-[992px]:w-full">
                                    <button
                                        type="button"
                                        className="w-full text-[14px] xl:text-[16px] px-6 min-[992px]:px-0 h-11 sm:h-12 bg-[var(--secondary-color)] text-white rounded font-semibold border border-transparent
                                hover:bg-white hover:text-[var(--secondary-color)] hover:border-[var(--secondary-color)] transition"
                                    >
                                        BUY NOW
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Quickviewpro;