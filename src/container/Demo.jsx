import React from "react";
import { motion } from "framer-motion";
import { GiBee } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";

function Demo() {
    return (
        <div className="flex flex-col items-center justify-center py-16">

            <div className="relative w-80 h-72">

                {/* Animated Flight Path */}
                <svg
                    className="absolute left-[75px] top-[20px]"
                    width="170"
                    height="150"
                    viewBox="0 0 170 150"
                >
                    <motion.path
                        d="M120 130 C90 120 70 80 50 50 C40 35 30 20 15 10"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    />
                </svg>

                {/* Bee */}
                <motion.div
                    className="absolute left-1/2 bottom-[70px] -translate-x-1/2 text-5xl"
                    animate={{
                        x: [0, -20, -45, -30, -35],
                        y: [0, -35, -80, -115, -105],
                        rotate: [0, -15, 10, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                >
                    <GiBee />
                </motion.div>

                {/* Open Box */}
                <motion.div
                    animate={{
                        y: [0, -3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                >
                    <FaBoxOpen className="text-[140px] text-gray-400" />
                </motion.div>

            </div>

            {/* Content */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                Your Cart Is Empty
            </h2>

            <p className="mt-3 text-gray-500 text-center max-w-sm">
                Looks like you haven't added any products to your cart yet.
            </p>

            <button className="mt-6 px-6 py-3 rounded-md bg-[var(--secondary-color)] text-white hover:opacity-90 transition">
                Continue Shopping
            </button>

        </div>
    );
}

export default Demo;