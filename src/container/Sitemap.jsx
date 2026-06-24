import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaBoxOpen, FaTools, FaUsers, FaPhone,
  FaShoppingCart, FaHeart, FaUser, FaFileContract,
  FaShieldAlt, FaSitemap, FaChevronRight, FaExternalLinkAlt,
  FaNewspaper, FaCogs, FaTruck, FaBolt, FaWrench
} from "react-icons/fa";

const sitemapData = [
  {
    category: "Main Pages",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-500",
    icon: <FaHome />,
    links: [
      { label: "Home", path: "/", icon: <FaHome /> },
      { label: "About Us", path: "/about-us", icon: <FaUsers /> },
      { label: "Contact", path: "/contact", icon: <FaPhone /> },
    ],
  },
  {
    category: "Shop",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-500",
    icon: <FaBoxOpen />,
    links: [
      { label: "All Products", path: "/allproduct", icon: <FaBoxOpen /> },
      { label: "Product Detail", path: "/product-detail", icon: <FaBoxOpen /> },
      { label: "Cart", path: "/cart", icon: <FaShoppingCart /> },
      { label: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
      { label: "Checkout", path: "/checkout", icon: <FaShoppingCart /> },
    ],
  },
  {
    category: "Parts & Equipment",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-500",
    icon: <FaTools />,
    links: [
      { label: "Spare Parts", path: "/Parts", icon: <FaWrench /> },
      { label: "Tools & Equipment", path: "/tools-equipment", icon: <FaTools /> },
      { label: "Truck Parts", path: "/truck-parts", icon: <FaTruck /> },
      { label: "Hydraulic Systems", path: "/hydraulic-systems", icon: <FaBolt /> },
      { label: "Electrical Parts", path: "/electrical-parts", icon: <FaBolt /> },
      { label: "Maintenance Kits", path: "/maintenance-kits", icon: <FaCogs /> },
      { label: "Engine Components", path: "/engine-components", icon: <FaCogs /> },
      { label: "Filters & Lubricants", path: "/filters-lubricants", icon: <FaWrench /> },
    ],
  },
  {
    category: "Account",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-500",
    icon: <FaUser />,
    links: [
      { label: "Sign In / Register", path: "/authendication", icon: <FaUser /> },
      { label: "Forgot Password", path: "/forgot-password", icon: <FaUser /> },
      { label: "My Dashboard", path: "/profile", icon: <FaUser /> },
      { label: "My Orders", path: "/profile/orders", icon: <FaShoppingCart /> },
      { label: "Wishlist (Profile)", path: "/profile/wishlist", icon: <FaHeart /> },
      { label: "Saved Addresses", path: "/profile/addresses", icon: <FaHome /> },
      { label: "Account Settings", path: "/profile/settings", icon: <FaCogs /> },
    ],
  },
  {
    category: "Blog & News",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-500",
    icon: <FaNewspaper />,
    links: [
      { label: "Blog Post — Top Machinery Trends", path: "/blog/1", icon: <FaNewspaper /> },
      { label: "Blog Post — Choose Right Equipment", path: "/blog/2", icon: <FaNewspaper /> },
      { label: "Blog Post — Maintenance Tips", path: "/blog/3", icon: <FaNewspaper /> },
    ],
  },
  {
    category: "Legal",
    color: "bg-gray-50 border-gray-200",
    iconBg: "bg-gray-500",
    icon: <FaFileContract />,
    links: [
      { label: "Privacy Policy", path: "/privacy-policy", icon: <FaShieldAlt /> },
      { label: "Terms of Service", path: "/terms-of-service", icon: <FaFileContract /> },
      { label: "Sitemap", path: "/sitemap", icon: <FaSitemap /> },
    ],
  },
];

export default function Sitemap() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0b1b3a] to-[#1a3a6a] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <NavLink to="/" className="hover:text-amber-500 transition-colors">Home</NavLink>
            <FaChevronRight className="text-xs text-gray-600" />
            <span className="text-amber-400 font-semibold">Sitemap</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <FaSitemap className="text-amber-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Sitemap</h1>
              <p className="text-gray-400 text-sm mt-1">Complete directory of all MechZone pages</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-5 max-w-xl leading-relaxed">
            Find every page on MechZone quickly. Use the links below to navigate directly to any section of our website.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaSitemap className="text-amber-500" />
              <span><span className="font-black text-[#0b1b3a]">{sitemapData.reduce((a, c) => a + c.links.length, 0)}</span> total pages</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaBoxOpen className="text-amber-500" />
              <span><span className="font-black text-[#0b1b3a]">{sitemapData.length}</span> categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {sitemapData.map((group, gi) => (
              <div key={gi}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow ${group.color}`}>

                {/* Card header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-inherit">
                  <div className={`w-9 h-9 rounded-xl ${group.iconBg} text-white flex items-center justify-center text-sm flex-shrink-0`}>
                    {group.icon}
                  </div>
                  <h3 className="font-black text-[#0b1b3a] text-sm uppercase tracking-wide">
                    {group.category}
                  </h3>
                  <span className="ml-auto text-xs text-gray-400 font-bold">{group.links.length}</span>
                </div>

                {/* Links */}
                <ul className="divide-y divide-gray-50 bg-white">
                  {group.links.map((link, li) => (
                    <li key={li}>
                      <NavLink
                        to={link.path}
                        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-600
                          hover:text-amber-500 hover:bg-amber-50 transition-all group"
                      >
                        <span className="text-gray-300 group-hover:text-amber-400 text-xs transition-colors flex-shrink-0">
                          {link.icon}
                        </span>
                        <span className="flex-1 font-medium">{link.label}</span>
                        <FaExternalLinkAlt className="text-gray-200 group-hover:text-amber-400 text-[10px] flex-shrink-0 transition-colors" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 max-w-6xl mx-auto bg-gradient-to-r from-[#0b1b3a] to-[#1a3a6a] rounded-2xl p-6 sm:p-8
            flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-black text-white text-lg">Can't find what you're looking for?</h3>
              <p className="text-gray-400 text-sm mt-1">Our team is happy to help you navigate.</p>
            </div>
            <NavLink to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#0b1b3a] font-black text-sm rounded-xl transition-all hover:-translate-y-0.5 flex-shrink-0">
              Get Help <FaChevronRight className="text-xs" />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
