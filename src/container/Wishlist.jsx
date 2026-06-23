import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

// ─── Animated Empty Wishlist ─────────────────────────────────────────────────
function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">

      {/* SVG Illustration */}
      <div className="relative">
        <svg
          width="220" height="200"
          viewBox="0 0 220 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="110" cy="188" rx="65" ry="7" fill="#f59e0b" fillOpacity="0.15" className="wl-shadow" />

          {/* Big heart */}
          <g className="wl-heart-big">
            <path
              d="M110 160 C60 125 30 95 30 65 C30 42 48 25 70 25 C85 25 98 34 110 48 C122 34 135 25 150 25 C172 25 190 42 190 65 C190 95 160 125 110 160 Z"
              fill="#fee2e2" stroke="#fca5a5" strokeWidth="2"
            />
          </g>

          {/* Inner heart */}
          <g className="wl-heart-inner">
            <path
              d="M110 145 C72 118 52 96 52 73 C52 57 63 45 78 45 C89 45 99 52 110 63 C121 52 131 45 142 45 C157 45 168 57 168 73 C168 96 148 118 110 145 Z"
              fill="#fca5a5" fillOpacity="0.5"
            />
          </g>

          {/* Broken line through heart */}
          <g className="wl-crack">
            <path d="M103 55 L108 80 L100 95 L107 125 L112 140" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3" />
          </g>

          {/* Sad eyes */}
          <g className="wl-face">
            <circle cx="93" cy="82" r="4.5" fill="#f87171" fillOpacity="0.8" />
            <circle cx="127" cy="82" r="4.5" fill="#f87171" fillOpacity="0.8" />
            {/* Sad mouth */}
            <path d="M97 103 Q110 95 123 103" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Tear drops */}
            <ellipse cx="89" cy="92" rx="2.5" ry="4" fill="#93c5fd" fillOpacity="0.8" className="tear-left" />
            <ellipse cx="131" cy="92" rx="2.5" ry="4" fill="#93c5fd" fillOpacity="0.8" className="tear-right" />
          </g>

          {/* Floating mini hearts */}
          <g className="mini-heart-1">
            <path d="M170 40 C168 35 162 35 162 40 C162 45 170 50 170 50 C170 50 178 45 178 40 C178 35 172 35 170 40Z" fill="#f59e0b" fillOpacity="0.7" />
          </g>
          <g className="mini-heart-2">
            <path d="M40 60 C38.5 56 33 56 33 60 C33 64 40 68 40 68 C40 68 47 64 47 60 C47 56 41.5 56 40 60Z" fill="#f59e0b" fillOpacity="0.5" />
          </g>
          <g className="mini-heart-3">
            <path d="M185 100 C184 97 180 97 180 100 C180 103 185 106 185 106 C185 106 190 103 190 100 C190 97 186 97 185 100Z" fill="#fca5a5" fillOpacity="0.6" />
          </g>
          <g className="mini-heart-4">
            <path d="M30 110 C29 107 25 107 25 110 C25 113 30 116 30 116 C30 116 35 113 35 110 C35 107 31 107 30 110Z" fill="#fca5a5" fillOpacity="0.4" />
          </g>

          {/* Sparkle dots */}
          <circle cx="60" cy="35" r="3" fill="#f59e0b" fillOpacity="0.4" className="dot-pulse-1" />
          <circle cx="158" cy="135" r="2.5" fill="#f59e0b" fillOpacity="0.3" className="dot-pulse-2" />
        </svg>
      </div>

      {/* Text */}
      <div className="text-center mt-3 wl-text">
        <h3 className="text-2xl font-black text-[#0b1b3a]">Your Wishlist is Empty!</h3>
        <p className="text-gray-400 text-sm mt-2 max-w-xs leading-relaxed">
          Save your favourite industrial tools and machinery here and come back to them anytime.
        </p>
      </div>

      {/* CTA */}
      <NavLink to="/allproduct"
        className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400
          text-[#0b1b3a] font-black text-sm rounded-xl transition-all hover:-translate-y-0.5
          hover:shadow-xl hover:shadow-amber-500/30 uppercase tracking-widest wl-cta">
        Explore Products →
      </NavLink>

      <style>{`
        /* Big heart pulse + float */
        .wl-heart-big {
          animation: heartFloat 2.8s ease-in-out infinite;
          transform-origin: 110px 100px;
        }
        .wl-heart-inner {
          animation: heartFloat 2.8s ease-in-out infinite 0.15s;
          transform-origin: 110px 100px;
        }
        @keyframes heartFloat {
          0%,100% { transform: translateY(0) scale(1); }
          30%      { transform: translateY(-8px) scale(1.03); }
          60%      { transform: translateY(-5px) scale(1.01); }
        }

        /* crack dash animation */
        .wl-crack path {
          stroke-dashoffset: 0;
          animation: crackAnim 2.8s ease-in-out infinite;
        }
        @keyframes crackAnim {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }

        /* Face bob */
        .wl-face {
          animation: heartFloat 2.8s ease-in-out infinite;
          transform-origin: 110px 100px;
        }

        /* Tears drip */
        .tear-left  { animation: tearDrip 2.8s ease-in-out infinite 0.5s; transform-origin: 89px 92px; }
        .tear-right { animation: tearDrip 2.8s ease-in-out infinite 0.9s; transform-origin: 131px 92px; }
        @keyframes tearDrip {
          0%      { transform: translateY(0); opacity: 0; }
          20%     { opacity: 0.9; }
          60%     { transform: translateY(10px); opacity: 0.5; }
          100%    { transform: translateY(18px); opacity: 0; }
        }

        /* Shadow pulse */
        .wl-shadow { animation: shadowPulse2 2.8s ease-in-out infinite; transform-origin: 110px 188px; }
        @keyframes shadowPulse2 {
          0%,100% { transform: scaleX(1);   opacity: 0.15; }
          50%      { transform: scaleX(0.8); opacity: 0.08; }
        }

        /* Mini hearts float up */
        .mini-heart-1 { animation: floatUp1 3.5s ease-in-out infinite; transform-origin: 170px 43px; }
        .mini-heart-2 { animation: floatUp1 3.5s ease-in-out infinite 0.7s; transform-origin: 40px 62px; }
        .mini-heart-3 { animation: floatUp2 4s ease-in-out infinite 0.3s; transform-origin: 185px 102px; }
        .mini-heart-4 { animation: floatUp2 4s ease-in-out infinite 1.1s; transform-origin: 30px 111px; }
        @keyframes floatUp1 {
          0%,100% { transform: translateY(0) rotate(0deg);   opacity: 0.7; }
          50%      { transform: translateY(-12px) rotate(8deg); opacity: 1; }
        }
        @keyframes floatUp2 {
          0%,100% { transform: translateY(0) scale(1);   opacity: 0.5; }
          50%      { transform: translateY(-8px) scale(1.3); opacity: 0.9; }
        }

        /* Dot pulses */
        .dot-pulse-1 { animation: dotPulse 2s ease-in-out infinite; }
        .dot-pulse-2 { animation: dotPulse 2s ease-in-out infinite 0.6s; }
        @keyframes dotPulse {
          0%,100% { r: 3; opacity: 0.4; }
          50%      { r: 5; opacity: 0.9; }
        }

        /* Text + CTA entrance */
        .wl-text { animation: fadeUp 0.6s ease-out both 0.2s; }
        .wl-cta  { animation: fadeUp 0.6s ease-out both 0.4s; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Wishlist Page ────────────────────────────────────────────────────────────
function Wishlist() {

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Black & Decker Router",
      desc: "Premium quality router",
      price: 499,
      image: "../../src/assets/Images/machines/m1.jpg",
    },
    {
      id: 2,
      name: "Bosch Breaker Hammer",
      desc: "Professional tool",
      price: 999,
      image: "../../src/assets/Images/machines/m2.jpg",
    },
  ]);

  const remove = (id) => setWishlist((prev) => prev.filter((item) => item.id !== id));

  return (
    <main>

      <section id="top" className="!mt-4 md:!mt-0 md:bg-[#F7F7F7] md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text text-center py-5 md:py-0 bg-[#F7F7F7] md:bg-transparent">
            <h2 className="text-[28px] uppercase font-bold hidden md:block">Wishlist</h2>
            <div className="breadcrumps pl-4 md:pl-0">
              <ol className="flex gap-1 md:justify-center">
                <NavLink to={'/'}><li>Home /</li></NavLink>
                <li className="text-amber-500"> Wishlist</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="wishlist" className="!mt-[20px] md:!mt-[50px] mb-[50px]">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">

          {/* ── EMPTY STATE ── */}
          {wishlist.length === 0 ? (
            <EmptyWishlist />
          ) : (
            <div className="border border-gray-300">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 border-b gap-y-3 md:gap-y-0 border-gray-300 hover:bg-gray-50 transition"
                >

                  {/* Product Section */}
                  <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row items-start sm:items-center border-r-0 md:border-r-3 border-white">

                    {/* Remove Button */}
                    <button
                      onClick={() => remove(item.id)}
                      className="text-gray-400 hover:text-red-500 text-2xl px-2 py-1 sm:px-3 sm:py-2 self-end sm:self-stretch border-b sm:border-b-0 sm:border-r-3 border-white transition-colors"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <div className="flex justify-center items-center sm:border-r-3 border-white w-full sm:w-auto p-1 sm:p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-36 h-36 sm:w-28 sm:h-28 md:w-24 md:h-24 object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-3 sm:p-3 w-full">
                      <h3 className="text-base sm:text-[18px] text-gray-800">{item.name}</h3>
                      <p className="text-base sm:text-[18px] font-medium">${item.price}</p>
                      <p className="text-gray-500 text-sm sm:text-base">June 19, 2026</p>
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-3 flex items-center justify-center p-3 sm:p-4">
                    <button className="w-full sm:w-auto bg-[var(--secondary-color)] text-white px-6 py-2 sm:px-8 sm:py-3 hover:bg-black transition">
                      Add To Cart
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Wishlist;
