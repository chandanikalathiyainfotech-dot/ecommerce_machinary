import React, { useState, useEffect } from 'react';
console.log(React);

import { useSearchParams, useNavigate } from 'react-router-dom';
import {
    FaTools,
    FaArrowRight
} from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { TiShoppingCart } from 'react-icons/ti';
import Quickviewpro from './Quickviewpro';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';

const CATEGORIES = [
    { id: 'hammer-tool', label: 'Hammer Tool', short: 'Hammer', img: '../../src/assets/Images/machines/c1.jpg' },
    { id: 'drill-tool', label: 'Drill Tool', short: 'Drill', img: '../../src/assets/Images/machines/c2.jpg' },
    { id: 'circular-saw', label: 'Circular Saw', short: 'Circular Saw', img: '../../src/assets/Images/machines/c3.jpg' },
    { id: 'wrench-tool', label: 'Wrench Tool', short: 'Wrench', img: '../../src/assets/Images/machines/c4.jpg' },
    { id: 'decker-tool', label: 'Decker Tool', short: 'Decker', img: '../../src/assets/Images/machines/c5.jpg' },
    { id: 'power-saw', label: 'Power Saw', short: 'Power Saw', img: '../../src/assets/Images/machines/c6.jpg' },
    { id: 'california-air', label: 'California Air', short: 'California Air', img: '../../src/assets/Images/machines/c7.jpg' },
    { id: 'jackhammer-tool', label: 'Jackhammer Tool', short: 'Jackhammer', img: '../../src/assets/Images/machines/c8.jpg' },
    { id: 'planet-power', label: 'Planet Power', short: 'Planet Power', img: '../../src/assets/Images/machines/c9.jpg' },
];

const CONFIG = {
    'hammer-tool': { theme: 'from-slate-900 via-[#0b1b3a] to-slate-900', accentHex: '#f59e0b' },
    'drill-tool': { theme: 'from-[#0b1b3a] via-slate-900 to-[#0b1b3a]', accentHex: '#f97316' },
    'circular-saw': { theme: 'from-gray-900 via-zinc-900 to-gray-900', accentHex: '#eab308' },
    'wrench-tool': { theme: 'from-[#0b1b3a] via-blue-950 to-[#0b1b3a]', accentHex: '#f59e0b' },
    'decker-tool': { theme: 'from-blue-950 via-[#0b1b3a] to-blue-950', accentHex: '#06b6d4' },
    'power-saw': { theme: 'from-slate-900 via-indigo-950 to-slate-900', accentHex: '#3b82f6' },
    'california-air': { theme: 'from-[#0b1b3a] via-slate-900 to-amber-950/30', accentHex: '#f59e0b' },
    'jackhammer-tool': { theme: 'from-[#060d1f] via-slate-900 to-[#060d1f]', accentHex: '#f59e0b' },
    'planet-power': { theme: 'from-cyan-950 via-[#0b1b3a] to-cyan-950', accentHex: '#06b6d4' },
};

const PRODUCTS = [
    {
        id: 1,
        name: "Black & Decker BDROUT127 1600W Router",
        image: '../../src/assets/Images/machines/m1.jpg',
        price: 59.0,
        rating: 4,
        badge: "Pack",
        oldPrice: null,
        category: "decker-tool"
    },
    {
        id: 2,
        name: "Bosch BH2760VC Brute Breaker Hammer",
        image: '../../src/assets/Images/machines/m2.jpg',
        price: 90.0,
        rating: 3,
        badge: null,
        oldPrice: null,
        category: "hammer-tool"
    },
    {
        id: 3,
        name: "Dewalt D28730 14 In Chop Saw Aluminium Arm",
        image: '../../src/assets/Images/machines/m3.jpg',
        price: 105.0,
        rating: 4,
        badge: null,
        oldPrice: null,
        category: "power-saw"
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
        category: "planet-power"
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
        category: "drill-tool"
    },
    {
        id: 6,
        name: "Dewalt XTREME 12V Brushless Circular Saw",
        image: '../../src/assets/Images/machines/m6.jpg',
        price: 65.0,
        rating: 4,
        badge: null,
        oldPrice: null,
        category: "circular-saw"
    },
    {
        id: 7,
        name: "Milwaukee M18 FN16GA 18V Angled Finish Nailer",
        image: '../../src/assets/Images/machines/m7.jpg',
        price: 99.0,
        rating: 4,
        badge: null,
        oldPrice: null,
        category: "wrench-tool"
    },
    {
        id: 8,
        name: "Dewalt DCS331N-XJ XR Lithium-Ion Jigsaw",
        image: '../../src/assets/Images/machines/m8.jpg',
        price: 105.0,
        rating: 5,
        badge: null,
        oldPrice: null,
        category: "circular-saw"
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
        category: "decker-tool"
    },
    {
        id: 10,
        name: "Paslode IM90CI Impulse Framing Combo Nailer",
        image: '../../src/assets/Images/machines/m10.jpg',
        price: 129.0,
        rating: 5,
        badge: null,
        oldPrice: null,
        category: "jackhammer-tool"
    }
];

function Parts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const cat = searchParams.get('cat');
    const [active, setActive] = useState(() => {
        return cat && CONFIG[cat] ? cat : 'hammer-tool';
    });

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showQuickView, setShowQuickView] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [wishlistOpen, setWishlisOpen] = useState(false);

    useEffect(() => {
        const expectedCat = cat && CONFIG[cat] ? cat : 'hammer-tool';
        if (expectedCat !== active) {
            setActive(expectedCat);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [cat, active]);

    const activeCatInfo = CATEGORIES.find(c => c.id === active) || CATEGORIES[0];
    const theme = CONFIG[active] || CONFIG['hammer-tool'];

    const filteredProducts = PRODUCTS.filter(p => p.category === active);

    const openQuickView = (product) => {
        setSelectedProduct(product);
        setShowQuickView(true);
    };

    const openWishlist = (product) => {
        setSelectedProduct(product);
        setWishlisOpen(true);
    };

    const handleAddToCartWithFly = (e, productItem) => {
        const buttonElement = e.currentTarget;
        const cardElement = buttonElement.closest('.group');
        const targetImage = cardElement?.querySelector('.product-img-element');
        const destinationCart = document.getElementById('floating-cart');

        if (targetImage && destinationCart) {
            const imageRect = targetImage.getBoundingClientRect();
            const cartRect = destinationCart.getBoundingClientRect();

            const imageClone = targetImage.cloneNode(true);
            imageClone.className = "w-full h-full object-contain";
            imageClone.style.position = 'fixed';
            imageClone.style.width = `${imageRect.width}px`;
            imageClone.style.height = `${imageRect.height}px`;
            imageClone.style.left = `${imageRect.left}px`;
            imageClone.style.top = `${imageRect.top}px`;

            const targetX = cartRect.left + (cartRect.width / 2) - (imageRect.width / 2);
            const targetY = cartRect.top + (cartRect.height / 2) - (imageRect.height / 2);

            imageClone.style.setProperty('--target-x', `${targetX}px`);
            imageClone.style.setProperty('--target-y', `${targetY}px`);

            imageClone.classList.add('animate-fly');
            document.body.appendChild(imageClone);

            setTimeout(() => {
                imageClone.remove();
                setSelectedProduct(productItem);
                setCartOpen(true);
            }, 1500);
        } else {
            setSelectedProduct(productItem);
            setCartOpen(true);
        }
    };

    const handleCategoryClick = (id) => {
        setSearchParams({ cat: id });
        setActive(id);
    };

    return (
        <div className="overflow-x-hidden bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className={`relative py-12 sm:py-16 bg-gradient-to-br ${theme.theme} text-white overflow-hidden`}>
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(${theme.accentHex}33 1px,transparent 1px),linear-gradient(90deg,${theme.accentHex}33 1px,transparent 1px)`, backgroundSize: '50px 50px' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-xs uppercase tracking-widest mb-4">
                            Premium Parts Catalog
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
                            Browse <span style={{ color: theme.accentHex }}>{activeCatInfo.label}s</span>
                        </h1>
                        <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
                            Discover high-quality replacement parts and industrial components for your machinery. Built to last.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Navigation Tabs */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-[72px] z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200">
                        {CATEGORIES.map((c) => {
                            const isCatActive = c.id === active;
                            const catProdCount = PRODUCTS.filter(p => p.category === c.id).length;
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => handleCategoryClick(c.id)}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 transition-all duration-300 whitespace-nowrap group flex-shrink-0 cursor-pointer ${isCatActive
                                            ? 'border-amber-500 bg-amber-50/50 text-amber-900 font-bold shadow-sm'
                                            : 'border-gray-200 hover:border-amber-400 bg-white text-gray-600 hover:text-amber-800'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 group-hover:scale-105 transition-transform flex-shrink-0">
                                        <img src={c.img} alt={c.label} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs sm:text-sm leading-tight">{c.label}</div>
                                        <div className="text-[10px] text-gray-400 font-normal">{catProdCount} items</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">
                                {activeCatInfo.label} Collection
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Showing {filteredProducts.length} high-quality products
                            </p>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {filteredProducts.map((v) => (
                                <div key={v.id} className="bg-white border border-gray-200 rounded-2xl group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    <div className="relative flex items-center justify-center p-4 bg-gray-50 h-40 sm:h-48 md:h-56">
                                        {/* Badge */}
                                        {v?.badge && (
                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                    {v.badge}
                                                </span>
                                            </div>
                                        )}

                                        {/* Hover Actions */}
                                        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
                                            <button
                                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm text-gray-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 cursor-pointer"
                                                onClick={() => openWishlist(v)}
                                            >
                                                <FiHeart className="text-sm" />
                                            </button>
                                            <button
                                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm text-gray-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 cursor-pointer"
                                                onClick={() => openQuickView(v)}
                                            >
                                                <LuEye className="text-sm" />
                                            </button>
                                        </div>

                                        {/* Product Image */}
                                        <img
                                            onClick={() => navigate('/product-detail')}
                                            src={v.image}
                                            alt={v.name}
                                            className="product-img-element w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                        />
                                    </div>

                                    <div className="p-4 sm:p-5 flex flex-col flex-grow border-t border-gray-100 bg-white">
                                        <h3
                                            onClick={() => navigate('/product-detail')}
                                            className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 hover:text-amber-500 cursor-pointer transition-colors leading-snug flex-grow"
                                        >
                                            {v.name}
                                        </h3>

                                        <div className="flex items-center mt-2">
                                            <div className="flex text-yellow-400 text-xs tracking-tighter">
                                                ★★★★★
                                            </div>
                                            <span className="ml-1.5 text-[11px] text-gray-400 font-bold">({v.rating}.0)</span>
                                        </div>

                                        <div className="flex items-baseline gap-2 mt-3">
                                            {v.oldPrice && (
                                                <span className="text-gray-400 text-xs line-through font-medium">
                                                    ${v.oldPrice}
                                                </span>
                                            )}
                                            <span className="text-lg font-black text-[#0b1b3a]">
                                                ${v.price}
                                            </span>
                                        </div>

                                        <button
                                            onClick={(e) => handleAddToCartWithFly(e, v)}
                                            className="w-full mt-4 py-2.5 text-xs bg-gray-900 text-white font-bold rounded-xl hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md"
                                        >
                                            <TiShoppingCart className="text-base" />
                                            <span>ADD TO CART</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center max-w-lg mx-auto shadow-sm">
                            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-500 text-2xl">
                                <FaTools />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">No Products Available</h3>
                            <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
                                Currently, we don't have stock for products under "{activeCatInfo.label}". Please check back later or check other active categories.
                            </p>
                            <button
                                onClick={() => handleCategoryClick('hammer-tool')}
                                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-amber-500 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                            >
                                View Hammer Tools <FaArrowRight className="text-xs" />
                            </button>
                        </div>
                    )}
                </div>
            </section>


            {/* Quickview, Wishlist, Cart Drawers */}
            {showQuickView && (
                <Quickviewpro
                    product={selectedProduct}
                    onqClose={() => setShowQuickView(false)}
                    onAddToCart={(productWithQty) => {
                        setSelectedProduct(productWithQty);
                        setCartOpen(true);
                        setShowQuickView(false);
                    }}
                />
            )}

            {wishlistOpen && (
                <WishlistDrawer
                    product={selectedProduct}
                    onClose={() => setWishlisOpen(false)}
                    onAddToCart={(productWithQty) => {
                        setSelectedProduct(productWithQty);
                        setWishlisOpen(false);
                        setCartOpen(true);
                    }}
                />
            )}

            {cartOpen && (
                <CartDrawer
                    open={cartOpen}
                    product={selectedProduct}
                    onClose={() => setCartOpen(false)}
                />
            )}
        </div>
    );
}

export default Parts;
