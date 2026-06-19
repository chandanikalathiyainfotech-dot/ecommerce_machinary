import React from "react";

function CartDrawer({ open, onClose, product }) {

    console.log(product)

    return (
        <div className={`${open ? "pointer-events-auto" : "pointer-events-none"}`}>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                ${open ? "opacity-100" : "opacity-0"}`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-xl z-50
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Shopping Cart (2)</h2>
                    <button onClick={onClose} className="text-xl">✕</button>
                </div>

                {/* Cart Items */}
                <div className="p-4 space-y-4">
                    {/* Item */}
                    {product && (
                        <div className="flex gap-3">
                            <img
                                src={product.image}
                                className="w-25 h-25 object-cover border border-gray-300"
                            />

                            <div className="flex-1">
                                <h3 className="text-md font-bold">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-5 mt-3">
                                    <div className="flex items-center border rounded py-1">
                                        <button className="px-3">-</button>
                                        <span className="px-3">{product.qty || 1}</span>
                                        <button className="px-3">+</button>
                                    </div>

                                    <span className="text-md font-semibold">
                                        ${product.price}
                                    </span>
                                </div>

                                <button className="text-xs text-[var(--secondary-color)] hover:underline mt-2">
                                    Remove
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 w-full border-t p-4 space-y-3">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Subtotal:</span>
                        <span>$400.00</span>
                    </div>

                    <button className= "text-[14px] w-full border-1 border-gray-400  py-3 rounded">
                        VIEW CART
                    </button>

                    <button className="text-[14px] w-full bg-[var(--secondary-color)] text-white py-3 rounded">
                        CHECK OUT
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CartDrawer;