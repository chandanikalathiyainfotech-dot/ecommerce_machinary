
import React, { useEffect, useState } from "react";
console.log(React);
import {
  FaArrowRight,
  FaPlay,
  FaIndustry,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const slides = [
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600",
];




function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const products = [

    {
      id: 1,
      name: "Black & Decker BDROUT127 1600W Router",
      image: '../../src/assets/Images/machines/m1.jpg',
      price: 59.0,
      rating: 4,
      badge: "Pack",
      oldPrice: null,

    },
    {
      id: 2,
      name: "Bosch BH2760VC Brute Breaker Hammer",
      image: '../../src/assets/Images/machines/m2.jpg',
      price: 90.0,
      rating: 3,
      badge: null,
      oldPrice: null,
    },

    {
      id: 3,
      name: "Dewalt D28730 14 In Chop Saw Aluminium Arm",
      image: '../../src/assets/Images/machines/m3.jpg',
      price: 105.0,
      rating: 4,
      badge: null,
      oldPrice: null,
    },

    {
      id: 4,
      name: "High Horsepower High Balance Air Sander",
      image: '../../src/assets/Images/machines/m4.jpg',
      price: 110.0,
      oldPrice: 125.0,
      rating: 4,
      badge: "-12%",
      sale: true,
    },
    {
      id: 5,
      name: "Rapid Airtac Pro Pb131 Pneumatic Nailer Gun",
      image: '../../src/assets/Images/machines/m5.jpg',
      price: 115.0,
      oldPrice: 125.0,
      rating: 4,
      badge: "-8%",
      sale: true,
    },

    {
      id: 6,
      name: "Dewalt XTREME 12V Brushless Circular Saw",
      image: '../../src/assets/Images/machines/m6.jpg',
      price: 65.0,
      rating: 4,
      badge: null,
      oldPrice: null,
    },
    {
      id: 7,
      name: "Milwaukee M18 FN16GA 18V Angled Finish Nailer",
      image: '../../src/assets/Images/machines/m7.jpg',
      price: 99.0,
      rating: 4,
      badge: null,
      oldPrice: null,
    },
    {
      id: 8,
      name: "Dewalt DCS331N-XJ XR Lithium-Ion Jigsaw",
      image: '../../src/assets/Images/machines/m8.jpg',
      price: 105.0,
      rating: 5,
      badge: null,
      oldPrice: null,
    },
    {
      id: 9,
      name: "BLACK+DECKER Angle Grinder BDEG400",
      image: '../../src/assets/Images/machines/m9.jpg',
      price: 110.5,
      oldPrice: 130.0,
      rating: 4,
      badge: "-15%",
      sale: true,
    },
    {
      id: 10,
      name: "Paslode IM90CI Impulse Framing Combo Nailer",
      image: '../../src/assets/Images/machines/m10.jpg',
      price: 129.0,
      rating: 5,
      badge: null,
      oldPrice: null,
    },

  ];


  return (
    <div>
      <section className="relative h-[600px] min-[992px]:h-screen overflow-hidden flex items-center bg-[#0b1b3a] !mt-0">

        {/* Background Slider */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
              }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071327]/80"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071327] via-[#071327]/70 to-transparent"></div>

        {/* Animated Blur Circle */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center ">

            {/* LEFT CONTENT */}
            <div className="text-center min-[425px]:text-start">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm uppercase tracking-widest">
                Industrial Excellence
              </span>

              <h1 className="mt-8 text-white font-black leading-none text-[28px] min-[576px]:text-4xl min-[768px]:text-[42px] min-[992px]:text-5xl leading-6">
                <span className="block ">
                  Smart
                </span>

                <span className="block ">
                  Machinery.
                </span>

                <span className="block text-amber-500">
                  Maximum
                </span>

                <span className="block">
                  Productivity.
                </span>
              </h1>

              <p className="mt-8 text-sm min-[576px]:text-base xl:text-lg text-gray-300 max-w-xl leading-relaxed">
                Delivering world-class industrial machinery and equipment
                solutions for manufacturing, construction and automation
                industries.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap min-[425px]:flex-nowrap gap-4 mt-10 justify-center min-[425px]:justify-start">

                <button className="group px-5 min-[425px]:px-4 min-[576px]:px-5 py-4 bg-amber-500 text-[#0b1b3a] font-black rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all">
                  Explore Products
                  <FaArrowRight className="group-hover:translate-x-1 transition-all" />
                </button>

                <button className=" px-12 min-[425px]:px-5 min-[576px]:px-8 py-4 border border-white/20 backdrop-blur-md bg-white/5 text-white rounded-xl flex items-center justify-center gap-3 hover:border-amber-500">
                  <FaPlay />
                  Watch Video
                </button>

              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 mt-14">

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        28+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Years
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        5000+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Products
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-amber-500">
                                        1200+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Clients
                                    </p>
                                </div>

                            </div> */}

            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden lg:flex ml-8 xl:ml-18 2xl:ml-0 2xl:justify-end">

              {/* Main Machinery Image */}
              <div className="relative w-[520px] h-[650px] overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-lg">

                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000"
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-24 right-[270px] min-[1200px]:right-[360px] xl:right-[350px] xl:right-[420px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 xl:w-48 2xl:w-52">
                <FaIndustry className="text-amber-500 text-2xl mb-3" />
                <h4 className="text-white font-bold">
                  Heavy Machinery
                </h4>
                <p className="text-gray-300 text-sm mt-1">
                  Industrial Equipment Solutions
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-32 right-[270px] min-[1200px]:right-[360px] xl:right-[350px] xl:right-[420px] backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 xl:w-48 2xl:w-52">
                <FaTools className="text-amber-500 text-2xl mb-3" />
                <h4 className="text-white font-bold">
                  Spare Parts
                </h4>
                <p className="text-gray-300 text-sm mt-1">
                  Genuine OEM Components
                </p>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute top-1/2 -right-12 xl:-right-15 2xl:-right-25 backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-2xl w-45 2xl:w-52">
                <FaUsers className="text-amber-500 text-2xl mb-3" />
                <h4 className="text-white font-bold">
                  Global Clients
                </h4>
                <p className="text-gray-300 text-sm mt-1">
                  Trusted Worldwide
                </p>
              </div>

            </div>

          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-3 mt-12">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${currentSlide === index
                  ? "w-7 sm:w-10 bg-amber-500"
                  : "w-3 bg-white/40"
                  }`}
              />
            ))}

          </div>

        </div>
      </section>

      <section id="products">
        <h2 className="text-[28px] font-[600] mt-20 mb-10 text-center">Trending Products</h2>
        <div class="container mx-auto bg-white  overflow-hidden  transition-all duration-300 product-container">
          <div>
            <Swiper
              modules={[Grid, Navigation]}
              slidesPerView={4}
              navigation={true}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={40}
            >
              {
                products?.map((v, i) => {
                  return (
                    <SwiperSlide>
                      <div className=" border border-gray-200 rounded-md">
                        <div class="absolute mt-2 ml-2 z-10">
                          {
                            v?.oldPrice && 
                            <span class="bg-[#0b1b3a] text-white text-xs font-semibold px-2 py-1 rounded">
                            -10%
                          </span>
                          }
                        </div>

                        <div class="h-64 flex items-center justify-center overflow-hidden p-4">
                          <img
                            src={v.image}
                            alt="Product"
                            class="max-h-full object-cover transition-transform duration-300 hover:scale-105 w-[100%] h-full"
                          />
                        </div>

                        <div class="px-5 pb-5 border-t border-gray-100">
                          <h3 class="mt-5 text-lg font-medium text-gray-800 leading-7">
                            {v.name}
                          </h3>


                          <div class="flex items-center mt-3">
                            <div class="flex text-yellow-400">
                              ★★★★★
                            </div>
                            <span class="ml-2 text-sm text-gray-500">({v.rating})</span>
                          </div>

                          <div class="flex items-center gap-2 mt-4">
                            <span class="text-gray-400 line-through">
                              {v.oldPrice && "$" + v.oldPrice}
                            </span>
                            <span class="text-xl font-bold text-[#0b1b3a]">
                              ${v.price}
                            </span>
                          </div>


                          <button
                            class="w-full mt-5 py-3 bg-gray-100 text-gray-800 font-semibold rounded hover:bg-amber-500 hover:text-white transition"
                          >
                            ADD TO CART
                          </button>

                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
          </div>


        </div>
      </section>

    </div>
  );
}

export default Home;

