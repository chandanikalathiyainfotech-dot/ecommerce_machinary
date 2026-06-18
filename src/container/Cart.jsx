import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Cart() {

    const initialCart = [
        {
            id: 1,
            name: "Wireless Headphones",
            desc: "Premium sound quality",
            price: 499,
            qty: 1,
            image:
                '../../src/assets/Images/machines/m1.jpg',
        },
        {
            id: 2,
            name: "Smart Watch",
            desc: "Fitness tracking & notifications",
            price: 999,
            qty: 1,
            image:
                '../../src/assets/Images/machines/m2.jpg',
        },
    ];

    const [cart, setCart] = useState(initialCart);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
        setSubtotal(total);
    }, [cart]);

    const inc = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

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

            <section id="cart" className="!mt-[40px] md:!mt-[50px] mb-20">
                <div className="container px-4 sm:px-6 lg:px-8  mx-auto  ">
                    <div className=" ">

                        <div className="grid grid-cols-12 gap-4">

                            {/* LEFT CART ITEMS */}
                            <div className="col-span-12 min-[992px]:col-span-8 shadow-xl px-3 sm:px-5 py-6 sm:py-8">

                                <h1 className="text-xl sm:text-2xl font-semibold pb-4 sm:pb-6">
                                    My Cart
                                </h1>

                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white p-4 sm:p-5 flex flex-col min-[576px]:flex-row gap-4 sm:gap-6 items-start sm:items-center border-t border-gray-200"
                                    >

                                        {/* IMAGE */}
                                        <img
                                            src={item.image}
                                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-gray-300"
                                        />

                                        {/* DETAILS */}
                                        <div className="flex-1 w-full">

                                            {/* TOP SECTION */}
                                            <div className="flex flex-col min-[576px]:flex-row min-[576px]:justify-between gap-4">

                                                {/* TEXT */}
                                                <div>
                                                    <h2 className="font-bold text-gray-800 text-sm sm:text-base">
                                                        {item.name}
                                                    </h2>

                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                        {item.type}
                                                    </p>

                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Color: black
                                                    </p>
                                                </div>

                                                {/* QTY CONTROLS */}
                                                <div className="flex border border-gray-300 rounded-md overflow-hidden w-fit self-start sm:self-auto">

                                                    <button
                                                        onClick={() => dec(item.id)}
                                                        className="bg-[var(--secondary-color)] text-white px-3 sm:px-4 py-2 hover:bg-gray-800 transition"
                                                    >
                                                        −
                                                    </button>

                                                    <div className="px-4 sm:px-5 py-2 bg-white text-gray-800 font-semibold min-w-[40px] text-center">
                                                        {item.qty}
                                                    </div>

                                                    <button
                                                        onClick={() => inc(item.id)}
                                                        className="bg-[var(--secondary-color)] text-white px-3 sm:px-4 py-2 hover:bg-gray-800 transition"
                                                    >
                                                        +
                                                    </button>

                                                </div>
                                            </div>

                                            {/* PRICE + REMOVE */}
                                            <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                                                {/* PRICE */}
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="text-base sm:text-lg font-semibold">
                                                        ${item.price}
                                                    </span>

                                                    <span className="line-through text-gray-400 text-xs sm:text-sm">
                                                        $567
                                                    </span>

                                                    <span className="text-red-500 text-xs sm:text-sm font-medium">
                                                        20% OFF
                                                    </span>
                                                </div>

                                                {/* REMOVE */}
                                                <button
                                                    onClick={() => remove(item.id)}
                                                    className="text-gray-400 hover:text-red-500 text-sm self-start sm:self-auto"
                                                >
                                                    ✕ Remove
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* RIGHT SIDEBAR */}
                            <div className="col-span-12 min-[768px]:col-span-8 min-[992px]:col-span-4">

                                {/* COUPON */}
                                <div className="bg-white p-4 rounded-lg shadow-sm ">
                                    <h2 className="font-semibold mb-3">Coupons</h2>

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
                                </div>

                                {/* ORDER SUMMARY */}
                                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mt-5">

                                    {/* Header */}
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                        Order Summary
                                    </h2>

                                    {/* Breakdown */}
                                    <div className="space-y-3 text-sm text-gray-600">

                                        <div className="flex justify-between">
                                            <span>Subtotal ({cart.length} items)</span>
                                            <span className="font-medium text-gray-800">
                                                ${subtotal.toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Delivery</span>
                                            <span className="text-gray-700">$7.99</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Service Fee</span>
                                            <span className="text-gray-700">$1.50</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Tax</span>
                                            <span className="text-gray-700">$7.00</span>
                                        </div>

                                        {/* Highlight discount */}
                                        <div className="flex justify-between">
                                            <span>Credits</span>
                                            <span className="text-green-600 font-medium">- $8.00</span>
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
                                    <button className="w-full mt-5 bg-gradient-to-r bg-amber-500 
                     text-white py-3 rounded-lg font-semibold shadow-sm transition-all duration-200 active:scale-[0.98]">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart;