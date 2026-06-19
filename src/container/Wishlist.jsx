import React from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Wishlist() {

  const wishlist = [
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
  ];

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
        <div className="container container px-4 sm:px-6 lg:px-8  mx-auto">
          <div className="border border-gray-300">

            {wishlist.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 border-b gap-y-3 md:gap-y-0 border-gray-300 hover:bg-gray-200 transition"
              >

                {/* Product Section */}
                <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row items-start sm:items-center border-r-0 md:border-r-3 border-white">

                  {/* Remove Button */}
                  <button className="text-gray-400 hover:text-red-500 text-2xl px-2 py-1 sm:px-3 sm:py-2 self-end sm:self-stretch border-b sm:border-b-0 sm:border-r-3 border-white">
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
                  <div className="p-3 sm:p-3  w-full">
                    <h3 className="text-base sm:text-[18px] text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-base sm:text-[18px] font-medium">
                      ${item.price}
                    </p>

                    <p className="text-gray-500 text-sm sm:text-base">
                      June 19, 2026
                    </p>
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
        </div>
      </section>
    </main>
  )
}
export default Wishlist;