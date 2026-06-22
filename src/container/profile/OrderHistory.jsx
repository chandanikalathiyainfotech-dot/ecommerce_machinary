import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch, FaCheckCircle, FaTruck, FaClock,
  FaTimesCircle, FaArrowRight, FaFilter
} from "react-icons/fa";

const allOrders = [
  { id: "ORD-10021", date: "18 Jun 2026", product: "Black & Decker 1600W Router", qty: 1, amount: 499, status: "Delivered", image: "../../src/assets/Images/machines/m1.jpg" },
  { id: "ORD-10019", date: "10 Jun 2026", product: "Bosch BH2760VC Breaker Hammer", qty: 2, amount: 1998, status: "In Transit", image: "../../src/assets/Images/machines/m2.jpg" },
  { id: "ORD-10015", date: "2 Jun 2026", product: "Dewalt D28730 14in Chop Saw", qty: 1, amount: 105, status: "Processing", image: "../../src/assets/Images/machines/m3.jpg" },
  { id: "ORD-10010", date: "22 May 2026", product: "High Horsepower Air Sander", qty: 1, amount: 110, status: "Delivered", image: "../../src/assets/Images/machines/m4.jpg" },
  { id: "ORD-10007", date: "15 May 2026", product: "Rapid Airtac Pro Nailer Gun", qty: 3, amount: 345, status: "Cancelled", image: "../../src/assets/Images/machines/m5.jpg" },
  { id: "ORD-10003", date: "5 May 2026", product: "Dewalt XTREME Circular Saw", qty: 1, amount: 65, status: "Delivered", image: "../../src/assets/Images/machines/m6.jpg" },
  { id: "ORD-09998", date: "28 Apr 2026", product: "Milwaukee M18 Angled Nailer", qty: 1, amount: 99, status: "Delivered", image: "../../src/assets/Images/machines/m7.jpg" },
  { id: "ORD-09990", date: "18 Apr 2026", product: "Dewalt DCS331N Jigsaw", qty: 2, amount: 210, status: "Cancelled", image: "../../src/assets/Images/machines/m8.jpg" },
];

const tabs = ["All", "Delivered", "In Transit", "Processing", "Cancelled"];

const statusConfig = {
  Delivered: { icon: <FaCheckCircle />, cls: "bg-green-100 text-green-700" },
  "In Transit": { icon: <FaTruck />, cls: "bg-blue-100 text-blue-700" },
  Processing: { icon: <FaClock />, cls: "bg-amber-100 text-amber-700" },
  Cancelled: { icon: <FaTimesCircle />, cls: "bg-red-100 text-red-700" },
};

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allOrders.filter((o) => {
    const matchTab = activeTab === "All" || o.status === activeTab;
    const matchSearch = o.product.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-black text-[#0b1b3a] text-xl mb-1">My Orders</h2>
        <p className="text-gray-500 text-sm">Track and manage all your orders in one place.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">

        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search by product name or order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab
                ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <FaSearch className="mx-auto text-3xl mb-3 opacity-40" />
            <p className="font-semibold">No orders found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {filtered.map((order) => {
              const sc = statusConfig[order.status];
              return (
                <div key={order.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 hover:bg-gray-50/50 transition-colors">

                  {/* Image */}
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-100 flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#0b1b3a] text-sm">{order.product}</p>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-400">
                      <span className="font-mono">{order.id}</span>
                      <span>·</span>
                      <span>{order.date}</span>
                      <span>·</span>
                      <span>Qty: {order.qty}</span>
                    </div>
                  </div>

                  {/* Amount + Status + Action */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-black text-[#0b1b3a] text-base">${order.amount.toLocaleString()}</span>
                    <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${sc.cls}`}>
                      {sc.icon} {order.status}
                    </span>
                    <NavLink
                      to={`/profile/orders/${order.id}`}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-amber-500 hover:text-black transition-all"
                    >
                      <FaArrowRight className="text-sm" />
                    </NavLink>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
