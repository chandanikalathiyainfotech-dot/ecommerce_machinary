import React, { useState, useEffect } from "react";
import { 
  FaCogs, FaClock, FaAward, FaHeadset, 
  FaArrowRight, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Premium Industrial Machinery",
    subtitle: "Best Machinery Supplier",
    description: "Discover our wide range of premium industrial machinery tailored to boost your business productivity.",
    highlight: "200+ Models",
    icon: FaCogs
  },
  {
    id: 2,
    title: "Genuine Spare Parts",
    subtitle: "Fast & Reliable",
    description: "Original manufacturer parts guaranteed to keep your machinery running at peak performance.",
    highlight: "5000+ Parts",
    icon: FaCogs
  },
  {
    id: 3,
    title: "Expert Repair Services",
    subtitle: "24/7 Support",
    description: "Professional repair and maintenance services available around the clock for your convenience.",
    highlight: "Book Now",
    icon: FaHeadset
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const SlideIcon = slides[currentSlide].icon;

  return (
    <section className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e2e8f0] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0b1b3a]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: slider content */}
          <div className="space-y-8 relative min-h-[400px] z-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-1000 space-y-8 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
                  <FaAward className="text-amber-500" />
                  <span className="text-amber-600 text-sm font-semibold tracking-wide">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0b1b3a]">
                  {slide.title}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#0b1b3a] mb-1">15+</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#0b1b3a] mb-1">5000+</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#0b1b3a] mb-1">24/7</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">Support</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-8 py-4 bg-[#0b1b3a] hover:bg-[#1e293b] text-white font-black rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0b1b3a]/20">
                    {slide.highlight}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0b1b3a] font-bold rounded-lg border-2 border-gray-200 hover:border-[#0b1b3a] transition-all">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: animated card */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-amber-500 hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center mb-4">
                  <SlideIcon className="text-[#0b1b3a] text-2xl animate-spin-slow" style={{ animationDuration: '5s' }} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b3a] mb-2">Premium</h3>
                <p className="text-gray-500 text-sm mb-4">Quality guaranteed</p>
                <div className="text-amber-500 font-semibold text-sm">Learn More →</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-amber-500 hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <FaClock className="text-amber-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b3a] mb-2">Fast Delivery</h3>
                <p className="text-gray-500 text-sm mb-4">Free shipping</p>
                <div className="text-amber-500 font-semibold text-sm">Order Now →</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-amber-500 hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center mb-4">
                  <FaHeadset className="text-[#0b1b3a] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b3a] mb-2">24/7 Support</h3>
                <p className="text-gray-500 text-sm mb-4">Always here</p>
                <div className="text-amber-500 font-semibold text-sm">Contact Us →</div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-amber-500 hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <FaAward className="text-amber-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1b3a] mb-2">Best Quality</h3>
                <p className="text-gray-500 text-sm mb-4">Trusted brand</p>
                <div className="text-amber-500 font-semibold text-sm">Explore →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-16 relative z-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#0b1b3a]/10 flex items-center justify-center text-[#0b1b3a] hover:bg-[#0b1b3a] hover:text-white transition-all"
          >
            <FaChevronLeft />
          </button>

          {/* Slider Indicators */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-[#0b1b3a]/30 hover:bg-[#0b1b3a]/50'
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#0b1b3a]/10 flex items-center justify-center text-[#0b1b3a] hover:bg-[#0b1b3a] hover:text-white transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;