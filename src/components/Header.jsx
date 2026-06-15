
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaCogs, FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPartsDropdownOpen, setIsPartsDropdownOpen] = useState(false);
  const [isMobilePartsOpen, setIsMobilePartsOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const productCategories = [
    "Heavy Machinery",
    "Spare Parts", 
    "Tools & Equipment",
    "Truck Parts",
    "Maintenance Kits",
    "Engine Components",
    "Hydraulic Systems",
    "Electrical Parts",
    "Filters & Lubricants",
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsPartsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsPartsDropdownOpen(false);
    }, 100);
  };

  const navItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about-us" },
];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0b1b3a]/95 backdrop-blur-md border-b border-gray-800 shadow-xl" : "bg-[#0b1b3a]"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Unique & Good Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute -inset-2 bg-amber-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-2.5 rounded-lg border border-gray-700 group-hover:border-amber-500 transition-all duration-300">
                <FaCogs className="text-amber-500 text-2xl animate-spin-slow" style={{ animationDuration: '10s' }} />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#0f172a]"></div>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white tracking-tighter">
                MECH<span className="text-amber-500">ZONE</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-amber-500 transition-colors">Industrial Pro</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden min-[992px]:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all relative group/link ${idx === 0 ? "text-amber-500" : "text-gray-300 hover:text-white"}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transition-all duration-300 ${idx === 0 ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}></span>
              </NavLink>
            ))}

            {/* Parts with Simple Submenu */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all relative group/link text-gray-300 hover:text-white flex items-center gap-2"
              >
                Parts
                {isPartsDropdownOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transition-all duration-300 ${isPartsDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}></span>
              </button>

              {/* Simple Submenu Dropdown */}
              {isPartsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-[#0b1b3a] border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden animate-slideDown"
                >
                  <div className="p-2">
                    {productCategories.map((category, idx) => (
                      <a 
                        key={idx}
                        href="#"
                        className="block px-4 py-2.5 text-gray-300 hover:text-amber-500 hover:bg-gray-800 font-medium transition-all"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden min-[992px]:flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-gray-300 hover:text-amber-500 hover:bg-gray-800 rounded-full transition-all"
            >
              <FaSearch className="text-sm sm:text-base md:text-lg lg:text-xl" />
            </button>

            <button className="relative p-2.5 text-gray-300 hover:text-amber-500 hover:bg-gray-800 rounded-full transition-all">
              <FaShoppingCart className="text-sm sm:text-base md:text-lg lg:text-xl" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-black text-[10px] font-black flex items-center justify-center rounded-full border-2 border-[#0f172a]">4</span>
            </button>

            <div className="h-8 w-[1px] bg-gray-700 mx-2"></div>

            <NavLink to={'/authendication'}>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black font-black text-sm rounded-lg hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all uppercase tracking-tighter">
                <FaUser className="text-sm sm:text-base md:text-lg lg:text-xl" />
                <span>Login</span>
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex min-[992px]:hidden items-center gap-0 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-amber-500"
            >
              <FaSearch className="text-sm sm:text-base md:text-lg lg:text-xl" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-amber-500"
            >
              {isMenuOpen ? <FaTimes className="text-sm sm:text-base md:text-lg lg:text-xl" /> : <FaBars className="text-sm sm:text-base md:text-lg lg:text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="bg-[#0f172a] border-b border-gray-800 z-40 animate-slideDown shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <FaSearch className="text-sm sm:text-base md:text-lg lg:text-xl absolute left-5 top-1/2 -translate-y-1/2 text-amber-500" />
                <input
                  type="text"
                  placeholder="Search Equipment..."
                  className="w-full pl-14 pr-6 py-3 sm:py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all tracking-widest text-sm"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-4 bg-gray-800 text-amber-500 hover:bg-amber-500 hover:text-black rounded-xl transition-all"
              >
                <FaTimes className="text-sm sm:text-base md:text-lg lg:text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="min-[992px]:hidden bg-[#0f172a] border-t border-gray-800 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="px-4 py-8 space-y-0 sm:space-y-4">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
               to={item.path}
                className={`text-[14px] sm:text-[16px] block px-6 py-4 rounded-xl font-black uppercase tracking-widest transition-all ${idx === 0 ? "text-amber-500 bg-gray-800/50" : "text-gray-300 hover:text-amber-500 hover:bg-gray-800/30"}`}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Parts in Mobile - same design as desktop */}
            <div>
              <button
                onClick={() => setIsMobilePartsOpen(!isMobilePartsOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-[14px] sm:text-[16px] font-black uppercase tracking-widest text-gray-300 hover:text-amber-500 hover:bg-gray-800/30 transition-all"
              >
                Parts
                {isMobilePartsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
              </button>
              {isMobilePartsOpen && (
                <div className="mx-4 my-2 bg-[#0b1b3a] border border-gray-700 rounded-lg p-2 animate-slideDown">
                  {productCategories.map((category, idx) => (
                    <a 
                      key={idx}
                      href="#"
                      className="block px-4 py-2.5 text-gray-300 hover:text-amber-500 hover:bg-gray-800 font-medium transition-all"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 mt-3 sm:mt-6 border-t border-gray-800 space-y-4">
              <button className="w-full flex items-center justify-between px-6 py-4 text-gray-300 font-bold border border-gray-700 rounded-xl hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-3">
                  <FaShoppingCart className="text-sm sm:text-base md:text-lg lg:text-xl" />
                  <span className="uppercase tracking-widest">Cart</span>
                </div>
                <span className="w-6 h-6 bg-amber-500 text-black text-xs font-black flex items-center justify-center rounded-full">4</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-amber-500 text-black font-black rounded-xl hover:bg-amber-400 transition-all uppercase tracking-widest">
                <FaUser className="text-sm sm:text-base md:text-lg lg:text-xl" />
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-spin-slow { animation: spin-slow linear infinite; }
      `}</style>
    </header>
  );
}

export default Header;
