import React, { useState } from "react";
import { NavLink, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  FaUser, FaShoppingBag, FaHeart, FaMapMarkerAlt,
  FaCog, FaSignOutAlt, FaBars, FaTimes, FaCogs,
  FaChevronRight
} from "react-icons/fa";
import ProfileOverview from "./profile/ProfileOverview";
import OrderHistory from "./profile/OrderHistory";
import OrderDetail from "./profile/OrderDetail";
import ProfileAddresses from "./profile/ProfileAddresses";
import ProfileWishlist from "./profile/ProfileWishlist";
import AccountSettings from "./profile/AccountSettings";

const navItems = [
  { path: "/profile", label: "Dashboard", icon: <FaUser />, exact: true },
  { path: "/profile/orders", label: "My Orders", icon: <FaShoppingBag /> },
  { path: "/profile/wishlist", label: "Wishlist", icon: <FaHeart /> },
  { path: "/profile/addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
  { path: "/profile/settings", label: "Account Settings", icon: <FaCog /> },
];

const user = {
  name: "Rajesh Patel",
  email: "rajesh@mechzone.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  since: "Member since Jan 2023",
};

export default function UserProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <main className="bg-[#f8fafc] min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-[#F7F7F7] py-4 border-b border-gray-200 !mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <NavLink to="/" className="text-gray-500 hover:text-amber-500 transition-colors">Home</NavLink>
            <FaChevronRight className="text-gray-400 text-xs" />
            <span className="text-amber-500 font-medium">My Account</span>
          </ol>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">

          {/* Mobile Sidebar Toggle */}
          <button
            className="lg:hidden fixed bottom-24 right-4 z-50 bg-amber-500 text-black p-3 rounded-full shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Sidebar Overlay (mobile) */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
              fixed lg:static top-0 left-0 h-full lg:h-auto z-50 lg:z-auto
              w-72 lg:w-64 xl:w-72 flex-shrink-0
              bg-white rounded-2xl shadow-sm border border-gray-100
              transform transition-transform duration-300
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              overflow-y-auto lg:overflow-visible
            `}
          >
            {/* User Card */}
            <div className="bg-gradient-to-br from-[#0b1b3a] to-[#1a2a4a] p-6 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-14 h-14 rounded-full border-2 border-amber-500 object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-white font-black text-sm truncate">{user.name}</h3>
                  <p className="text-gray-400 text-xs truncate">{user.email}</p>
                  <p className="text-amber-500 text-xs mt-0.5">{user.since}</p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="p-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive: active }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 font-semibold text-sm transition-all
                    ${isActive(item.path, item.exact)
                      ? "bg-amber-500 text-[#0b1b3a] shadow-md shadow-amber-500/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0b1b3a]"
                    }`
                  }
                >
                  <span className={`text-base ${isActive(item.path, item.exact) ? "text-[#0b1b3a]" : "text-amber-500"}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              ))}

              <hr className="my-3 border-gray-100" />

              <button
                onClick={() => navigate("/authendication")}
                className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
              >
                <FaSignOutAlt />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <Routes>
              <Route index element={<ProfileOverview user={user} />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="orders/:id" element={<OrderDetail />} />
              <Route path="addresses" element={<ProfileAddresses />} />
              <Route path="wishlist" element={<ProfileWishlist />} />
              <Route path="settings" element={<AccountSettings user={user} />} />
            </Routes>
          </div>

        </div>
      </div>
    </main>
  );
}
