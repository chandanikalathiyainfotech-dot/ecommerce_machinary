import React, { useEffect, useState } from "react";
console.log(React);
import { NavLink } from "react-router-dom";

function CartDrawer({ open, onClose, product }) {

    console.log(open, onClose, product)
    const [quantity, setQuantity] = useState(product?.qty || 1);

    useEffect(() => {
        if (!open) return;

        const mediaQuery = window.matchMedia("(max-width: 768px)");
        console.log(mediaQuery)

        let timer;
        if (mediaQuery.matches) {
            timer = setTimeout(() => {
                onClose();
            }, 2000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [open, onClose, product]);

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
        <div className={`fixed inset-0 z-50 transition-all duration-300 ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`}>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-22 right-2 min-[992px]:top-0 min-[992px]:right-0 h-fit min-[992px]:h-full p-3 sm:p-5 min-[992px]:!p-0 w-[300px] 
                    min-[576px]:w-fit min-[992px]:w-[350px] xl:w-[400px] rounded-md min-[992px]:rounded-none bg-white shadow-xl
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-[110%] min-[992px]:translate-x-full"}`}
            >
                {/* Header */}
                <div className="bg-[#f5f5f5] hidden min-[992px]:flex justify-between items-center px-4 py-7">
                    <h2 className="text-lg font-semibold">Shopping Cart (2)</h2>
                    <button onClick={onClose} className="text-xl">✕</button>
                </div>

                <h2 className="min-[992px]:hidden text-lg font-semibold">Added to cart !</h2>

                {/* Cart Items */}
                <div className="min-[992px]:p-4 space-y-4 mt-4">
                    {/* Item */}
                    {product && (
                        <div className="flex gap-3">
                            <img
                                src={product.image}
                                className="w-20 h-20 min-[992px]:w-26 min-[992px]:h-26 object-cover border border-gray-300 min-[992px]:p-4"
                            />

                            <div className="flex-1">
                                <h3 className="text-[12px] min-[576px]:text-[14px] text-[var(--secondary-color)] font-bold ">
                                    {product.name.slice(0, 30)}
                                </h3>

                                <div className="flex items-center justify-between min-[992px]:gap-5 mt-3">
                                    <div className="hidden min-[992px]:flex items-center border rounded py-1">
                                        <button className="px-3" onClick={handleDecrement}>-</button>
                                        <span className="px-3">{quantity}</span>
                                        <button className="px-3" onClick={handleIncrement}>+</button>
                                    </div>

                                    <span className="text-md font-semibold">
                                        ${product.price}
                                    </span>

                                    <button className="block min-[992px]:hidden text-[16px] text-[#0285c7]">
                                        view cart
                                    </button>
                                </div>

                                <button className="hidden min-[992px]:block relative pb-1 text-xs text-[var(--secondary-color)] hover:text-amber-500 transition-colors duration-300
                                        before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[var(--secondary-color)]
                                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-amber-500 after:origin-left after:scale-x-0 
                                        after:transition-transform after:duration-300 hover:after:scale-x-100 tracking-[1px] mt-2">
                                    Remove
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="hidden min-[992px]:block absolute bottom-0 w-full">
                    <div className="text-md font-bold flex justify-between bg-[#f5f5f5] p-5">
                        <span>Subtotal:</span>
                        <span>$400.00</span>
                    </div>


                    <div className="p-4 space-y-3">
                        <NavLink
                            to="/cart"
                            className="group relative block w-full px-6 py-3 font-semibold text-[14px] text-center border border-gray-400 
                            rounded-md overflow-hidden transition-colors duration-300 ease-in-out hover:text-white hover:border-amber-400"
                        >
                            <span className="absolute bottom-0 left-0 w-full h-full bg-amber-400 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
                            <span className="relative z-10">VIEW CART</span>
                        </NavLink>

                        <NavLink
                            to="/checkout"
                            className="group relative block w-full px-6 py-3 font-semibold text-[14px] text-center bg-[var(--secondary-color)] border border-[var(--secondary-color)]
                            rounded overflow-hidden transition-colors duration-300 ease-in-out text-white hover:border-amber-400"
                        >
                            <span className="absolute bottom-0 left-0 w-full h-full bg-amber-400 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
                            <span className="relative z-10">CHECK OUT</span>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default CartDrawer;