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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-20 flex flex-col items-center gap-4">
          <FaHeart className="text-5xl text-gray-200" />
          <p className="text-gray-400 font-semibold">Your wishlist is empty</p>
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
