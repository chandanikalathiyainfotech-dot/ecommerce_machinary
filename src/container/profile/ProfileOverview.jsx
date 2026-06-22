import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaShoppingBag, FaHeart, FaMapMarkerAlt, FaStar,
  FaArrowRight, FaCheckCircle, FaTruck, FaClock
} from "react-icons/fa";

const stats = [
  { label: "Total Orders", value: "24", icon: <FaShoppingBag />, color: "bg-blue-50 text-blue-500" },
  { label: "Wishlist Items", value: "12", icon: <FaHeart />, color: "bg-red-50 text-red-500" },
  { label: "Saved Addresses", value: "3", icon: <FaMapMarkerAlt />, color: "bg-green-50 text-green-500" },
  { label: "Reward Points", value: "840", icon: <FaStar />, color: "bg-amber-50 text-amber-500" },
];

const recentOrders = [
  {
    id: "ORD-10021",
    date: "18 Jun 2026",
    product: "Black & Decker 1600W Router",
    amount: 499,
    status: "Delivered",
    image: "../../src/assets/Images/machines/m1.jpg",
  },
  {
    id: "ORD-10019",
    date: "10 Jun 2026",
    product: "Bosch BH2760VC Breaker Hammer",
    amount: 999,
    status: "In Transit",
    image: "../../src/assets/Images/machines/m2.jpg",
  },
  {
    id: "ORD-10015",
    date: "2 Jun 2026",
    product: "Dewalt D28730 14in Chop Saw",
    amount: 105,
    status: "Processing",
    image: "../../src/assets/Images/machines/m3.jpg",
  },
];

const statusConfig = {
  Delivered: { icon: <FaCheckCircle />, cls: "bg-green-100 text-green-700" },
  "In Transit": { icon: <FaTruck />, cls: "bg-blue-100 text-blue-700" },
  Processing: { icon: <FaClock />, cls: "bg-amber-100 text-amber-700" },
  Cancelled: { icon: null, cls: "bg-red-100 text-red-700" },
};

export default function ProfileOverview({ user }) {
  return (
    <div className="space-y-6">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0b1b3a] to-[#1a3a6a] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-amber-500 object-cover"
          />
          <div>
            <p className="text-amber-500 text-sm font-bold uppercase tracking-widest">Welcome back</p>
            <h2 className="text-white font-black text-xl mt-0.5">{user.name}</h2>
            <p className="text-gray-400 text-sm">{user.since}</p>
          </div>
        </div>
        <NavLink
          to="/profile/settings"
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-black font-black text-sm rounded-xl hover:bg-amber-400 transition-all"
        >
          Edit Profile <FaArrowRight />
        </NavLink>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-3 min-[576px]:p-5 border border-gray-100 shadow-sm flex  items-center gap-3 min-[576px]:gap-4">
            <div className={`p-3 min-[576px]:w-12 min-[576px]:h-12 rounded-xl min-[576px]:rounded-xl flex items-center justify-center text-[12px] min-[576px]:text-xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text:md min-[576px]:text-2xl font-black text-[#0b1b3a]">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-black text-[#0b1b3a] text-base">Recent Orders</h3>
          <NavLink
            to="/profile/orders"
            className="text-amber-500 text-sm font-bold hover:underline flex items-center gap-1"
          >
            View All <FaArrowRight className="text-xs" />
          </NavLink>
        </div>

        <div className="divide-y divide-gray-50">
          {recentOrders.map((order) => {
            const sc = statusConfig[order.status] || statusConfig.Processing;
            return (
              <div key={order.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
                <img
                  src={order.image}
                  alt={order.product}
                  className="w-14 h-14 rounded-xl object-cover border border-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-[#0b1b3a] truncate">{order.product}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{order.id} · {order.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-black text-[#0b1b3a]">${order.amount}</span>
                  <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${sc.cls}`}>
                    {sc.icon} {order.status}
                  </span>
                  <NavLink
                    to={`/profile/orders/${order.id}`}
                    className="text-amber-500 hover:text-amber-600 transition-colors"
                  >
                    <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
