import React, { useEffect, useState } from "react";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const initialCart = [
    {
        id: 1,
        name: "Black & Decker BDROUT127 1600W Router",
        desc: "Premium sound quality",
        price: 499,
        qty: 1,
        image: "../../src/assets/Images/machines/m1.jpg",
    },
    {
        id: 2,
        name: "Bosch BH2760VC Brute Breaker Hammer",
        desc: "Fitness tracking & notifications",
        price: 999,
        qty: 1,
        image: "../../src/assets/Images/machines/m2.jpg",
    },
];

function Cart() {

    const [cart, setCart] = useState(initialCart);

    // ✅ subtotal (no need for useEffect)
    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    // ➕ Increase qty
    const inc = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // ➖ Decrease qty
    const dec = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };


    const remove = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };


    const shipping = 7.99;
    const tax = 7.0;
    const totalPayable = subtotal + shipping + tax;

    return (
        <main>
            <section id="top" className="!mt-4 md:!mt-0 md:bg-[#F7F7F7] md:py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="text text-center py-5 md:py-0 bg-[#F7F7F7] md:bg-transparent">
                        <h2 className="text-[28px] uppercase font-bold hidden md:block">Cart</h2>
                        <div className="breadcrumps pl-4 md:pl-0">
                            <ol className="flex gap-1 md:justify-center">
                                <NavLink to={'/'}><li>Home /</li></NavLink>
                                <li className="text-amber-500"> cart</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cart" className="!mt-[20px] md:!mt-[50px] mb-10 sm:mb-20">
                <div className="container px-4 sm:px-6 lg:px-8  mx-auto  ">

                    <div className="grid grid-cols-12 gap-6 sm:pt-10">

                        {/* LEFT CART ITEMS */}
                        <div className="col-span-12  lg:col-span-9">

                            <div className="overflow-x-auto">
                                <div className="w-full">

                                    {/* Header (hidden on mobile) */}
                                    <div className="hidden sm:grid grid-cols-12 text-md font-semibold text-gray-600 pl-4 pr-5">
                                        <div className="col-span-6">Product</div>
                                        <div className="col-span-2 text-end">Price</div>
                                        <div className="col-span-2 text-end">Quantity</div>
                                        <div className="col-span-2 text-end">Subtotal</div>
                                    </div>

                                    <div className="sm:border sm:border-gray-300 rounded-sm mt-5">
                                        {/* Rows */}
                                        {cart.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className={`py-5 pl-3 pr-3
                                                border border-gray-200 rounded-lg mb-4
                                                sm:border-0 sm:rounded-none sm:mb-0
                                                sm:pl-4 sm:pr-5 sm:grid sm:grid-cols-12 sm:items-center
                                                flex flex-col gap-3
                                                ${index !== cart.length - 1 ? "sm:border-b sm:border-gray-200" : ""}
                                                `}
                                            >

                                                {/* Product */}
                                                <div className="sm:col-span-6 flex items-center gap-4">

                                                    {/* Image wrapper */}
                                                    <div className="relative w-25 h-25">

                                                        {/* X button on top-left of image */}
                                                        <button className="absolute top-0 left-0 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 shadow">
                                                            <RxCross2 className="text-white text-[12px]" />
                                                        </button>
                                                        <img
                                                            src={item.image}
                                                            className="w-25 h-25 object-contain "
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-sm sm:text-[16px] font-medium text-gray-800">{item.name}</p>
                                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                                    </div>

                                                </div>

                                                {/* Price */}
                                                <div className="sm:col-span-2 sm:text-end text-[14px] sm:text-[16px] flex justify-between sm:block">
                                                    <span className="sm:hidden  text-gray-500">Price</span>
                                                    <span >${item.price}</span>
                                                </div>

                                                {/* Quantity */}
                                                <div className="sm:col-span-2 flex justify-between sm:justify-end items-center text-[14px] sm:text-[16px]">

                                                    <span className="sm:hidden text-gray-500">Qty</span>

                                                    <div className="px-2 sm:px-0 flex border border-gray-300 rounded-md overflow-hidden w-fit">

                                                        <button
                                                            onClick={() => dec(item.id)}
                                                            className="sm:px-2 py-1 transition hover:bg-gray-100"
                                                        >
                                                            −
                                                        </button>

                                                        <div className="px-3 py-1 bg-white text-gray-800 font-semibold min-w-[40px] text-center">
                                                            {item.qty}
                                                        </div>

                                                        <button
                                                            onClick={() => inc(item.id)}
                                                            className=" sm:px-2 py-1 transition hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>

                                                {/* Subtotal */}
                                                <div className="sm:col-span-2  sm:text-end flex justify-between sm:block font-semibold text-[14px] sm:text-[16px]">
                                                    <span className="sm:hidden text-gray-500">Total</span>
                                                    <span>${item.price * item.qty}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Coupon + Update */}
                                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

                                    <div className="flex w-full max-w-md border border-gray-300 rounded-md overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gray-400">

                                        {/* INPUT */}
                                        <input
                                            type="text"
                                            placeholder="Coupon code"
                                            className="flex-1 min-w-0 px-4 py-2 outline-none text-gray-700"
                                        />

                                        {/* BUTTON */}
                                        <button
                                            className="shrink-0 whitespace-nowrap bg-[var(--secondary-color)] text-white px-4 sm:px-6 py-2 sm:py-3 text-[14px] font-medium hover:opacity-90 transition"
                                        >
                                            APPLY NOW
                                        </button>

                                    </div>

                                    <button className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded-md font-medium">
                                        Update cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="col-span-12 lg:col-span-3">

                            {/* ORDER SUMMARY */}
                            <div className="bg-white p-5 rounded-sm border border-gray-300 :mt-11">

                                {/* Header */}
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                    Order Summary
                                </h2>

                                {/* Breakdown */}
                                <div className="space-y-3 text-sm text-gray-600">

                                    <div className="flex justify-between py-3">
                                        <span>Subtotal ({cart.length} items)</span>
                                        <span className="font-medium text-gray-800">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between py-3">
                                        <span>Shipping:</span>
                                        <span className="text-gray-700">Free</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="my-4 border-t border-dashed border-gray-200"></div>

                                {/* Total */}
                                <div className="flex justify-between items-center">
                                    <span className="text-base font-semibold text-gray-800">
                                        Total Payable
                                    </span>
                                    <span className="text-lg font-bold text-gray-900">
                                        ${totalPayable.toFixed(2)}
                                    </span>
                                </div>

                                {/* CTA */}
                                <button className="w-full mt-8  bg-amber-500 hover:bg-[var(--secondary-color)] 
                                    text-white py-2 rounded-sm font-semibold shadow-sm transition-all duration-200 active:scale-[0.98]">
                                    Proceed to checkout
                                </button>

                                <button className="w-full mt-2 bg-gradient-to-r bg-[#e0e0e0] hover:bg-[var(--secondary-color)] hover:text-white
                                    py-2 rounded-sm font-semibold shadow-sm transition-all duration-200 active:scale-[0.98]">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Cart;