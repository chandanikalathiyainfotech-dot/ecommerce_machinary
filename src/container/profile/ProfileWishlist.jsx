import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaTrash, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const initialWishlist = [
  { id: 1, name: "Black & Decker 1600W Router", image: "../../src/assets/Images/machines/m1.jpg", price: 499, oldPrice: null, rating: 4, badge: null },
  { id: 2, name: "Bosch BH2760VC Breaker Hammer", image: "../../src/assets/Images/machines/m2.jpg", price: 999, oldPrice: 1200, rating: 5, badge: "-17%" },
  { id: 3, name: "Dewalt D28730 14in Chop Saw", image: "../../src/assets/Images/machines/m3.jpg", price: 105, oldPrice: null, rating: 4, badge: null },
  { id: 4, name: "High Horsepower Air Sander", image: "../../src/assets/Images/machines/m4.jpg", price: 110, oldPrice: 125, rating: 4, badge: "-12%" },
  { id: 5, name: "Rapid Airtac Pro Nailer Gun", image: "../../src/assets/Images/machines/m5.jpg", price: 115, oldPrice: null, rating: 3, badge: null },
  { id: 6, name: "Dewalt XTREME Circular Saw", image: "../../src/assets/Images/machines/m6.jpg", price: 65, oldPrice: null, rating: 4, badge: null },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating
          ? <FaStar key={i} className="text-amber-500 text-xs" />
          : <FaRegStar key={i} className="text-gray-300 text-xs" />
      )}
    </div>
  );
}

export default function ProfileWishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [added, setAdded] = useState({});

  const removeItem = (id) => setWishlist((prev) => prev.filter((p) => p.id !== id));

  const addToCart = (id) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between">
        <div>
          <h2 className="font-black text-[#0b1b3a] text-xl">My Wishlist</h2>
          <p className="text-gray-500 text-sm mt-0.5">{wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved</p>
        </div>
        {wishlist.length > 0 && (
          <button
            onClick={() => setWishlist([])}
            className="text-xs font-bold text-red-400 hover:text-red-500 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-4 flex flex-col items-center gap-4">
          {/* Reuse the same animated SVG inline */}
          <svg width="180" height="160" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="110" cy="188" rx="65" ry="7" fill="#f59e0b" fillOpacity="0.15" style={{animation:"shadowPulse2 2.8s ease-in-out infinite",transformOrigin:"110px 188px"}} />
            <g style={{animation:"heartFloat 2.8s ease-in-out infinite",transformOrigin:"110px 100px"}}>
              <path d="M110 160 C60 125 30 95 30 65 C30 42 48 25 70 25 C85 25 98 34 110 48 C122 34 135 25 150 25 C172 25 190 42 190 65 C190 95 160 125 110 160 Z" fill="#fee2e2" stroke="#fca5a5" strokeWidth="2"/>
              <path d="M110 145 C72 118 52 96 52 73 C52 57 63 45 78 45 C89 45 99 52 110 63 C121 52 131 45 142 45 C157 45 168 57 168 73 C168 96 148 118 110 145 Z" fill="#fca5a5" fillOpacity="0.5"/>
              <circle cx="93" cy="82" r="4.5" fill="#f87171" fillOpacity="0.8"/>
              <circle cx="127" cy="82" r="4.5" fill="#f87171" fillOpacity="0.8"/>
              <path d="M97 103 Q110 95 123 103" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </g>
            <g style={{animation:"floatUp1 3.5s ease-in-out infinite",transformOrigin:"170px 43px"}}>
              <path d="M170 40 C168 35 162 35 162 40 C162 45 170 50 170 50 C170 50 178 45 178 40 C178 35 172 35 170 40Z" fill="#f59e0b" fillOpacity="0.7"/>
            </g>
            <g style={{animation:"floatUp1 3.5s ease-in-out infinite 0.7s",transformOrigin:"40px 62px"}}>
              <path d="M40 60 C38.5 56 33 56 33 60 C33 64 40 68 40 68 C40 68 47 64 47 60 C47 56 41.5 56 40 60Z" fill="#f59e0b" fillOpacity="0.5"/>
            </g>
            <style>{`
              @keyframes heartFloat{0%,100%{transform:translateY(0) scale(1)}30%{transform:translateY(-8px) scale(1.03)}60%{transform:translateY(-5px) scale(1.01)}}
              @keyframes shadowPulse2{0%,100%{transform:scaleX(1);opacity:.15}50%{transform:scaleX(.8);opacity:.08}}
              @keyframes floatUp1{0%,100%{transform:translateY(0) rotate(0deg);opacity:.7}50%{transform:translateY(-12px) rotate(8deg);opacity:1}}
            `}</style>
          </svg>
          <p className="text-gray-500 font-semibold text-sm">Your wishlist is empty</p>
          <NavLink
            to="/allproduct"
            className="px-6 py-2.5 bg-amber-500 text-black font-black text-sm rounded-xl hover:bg-amber-400 transition-all"
          >
            Explore Products
          </NavLink>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-amber-200 transition-all"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-amber-500 text-black text-xs font-black rounded-lg">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => removeItem(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white shadow-md transition-all"
                  title="Remove from wishlist"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <NavLink to="/product-detail">
                  <h4 className="font-bold text-[#0b1b3a] text-sm leading-snug hover:text-amber-500 transition-colors line-clamp-2">
                    {product.name}
                  </h4>
                </NavLink>
                <StarRating rating={product.rating} />
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-black text-[#0b1b3a] text-base">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 text-xs line-through">${product.oldPrice}</span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  className={`w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all
                    ${added[product.id]
                      ? "bg-green-500 text-white"
                      : "bg-amber-500 hover:bg-amber-400 text-black"
                    }`}
                >
                  <TiShoppingCart className="text-base" />
                  {added[product.id] ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
