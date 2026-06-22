import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  FaArrowLeft, FaCheckCircle, FaTruck, FaClock,
  FaTimesCircle, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaDownload, FaRedo
} from "react-icons/fa";

const mockOrders = {
  "ORD-10021": {
    id: "ORD-10021",
    date: "18 Jun 2026",
    status: "Delivered",
    deliveredOn: "20 Jun 2026",
    items: [
      { name: "Black & Decker 1600W Router", image: "../../src/assets/Images/machines/m1.jpg", qty: 1, price: 499 },
    ],
    address: { name: "Rajesh Patel", phone: "+91 98765 43210", line: "Plot #12, Industrial Estate", city: "Ahmedabad, Gujarat 380006" },
    payment: { method: "Credit Card", last4: "4242", subtotal: 499, shipping: 0, tax: 7, total: 506 },
    tracking: [
      { label: "Order Placed", date: "18 Jun 2026, 10:30 AM", done: true },
      { label: "Order Confirmed", date: "18 Jun 2026, 11:00 AM", done: true },
      { label: "Shipped", date: "19 Jun 2026, 09:00 AM", done: true },
      { label: "Out for Delivery", date: "20 Jun 2026, 08:00 AM", done: true },
      { label: "Delivered", date: "20 Jun 2026, 02:15 PM", done: true },
    ],
  },
  "ORD-10019": {
    id: "ORD-10019",
    date: "10 Jun 2026",
    status: "In Transit",
    deliveredOn: null,
    items: [
      { name: "Bosch BH2760VC Breaker Hammer", image: "../../src/assets/Images/machines/m2.jpg", qty: 2, price: 999 },
    ],
    address: { name: "Rajesh Patel", phone: "+91 98765 43210", line: "Plot #12, Industrial Estate", city: "Ahmedabad, Gujarat 380006" },
    payment: { method: "UPI", last4: null, subtotal: 1998, shipping: 0, tax: 14, total: 2012 },
    tracking: [
      { label: "Order Placed", date: "10 Jun 2026, 02:00 PM", done: true },
      { label: "Order Confirmed", date: "10 Jun 2026, 02:30 PM", done: true },
      { label: "Shipped", date: "11 Jun 2026, 10:00 AM", done: true },
      { label: "Out for Delivery", date: null, done: false },
      { label: "Delivered", date: null, done: false },
    ],
  },
};

const statusConfig = {
  Delivered: { icon: <FaCheckCircle />, cls: "bg-green-100 text-green-700" },
  "In Transit": { icon: <FaTruck />, cls: "bg-blue-100 text-blue-700" },
  Processing: { icon: <FaClock />, cls: "bg-amber-100 text-amber-700" },
  Cancelled: { icon: <FaTimesCircle />, cls: "bg-red-100 text-red-700" },
};

export default function OrderDetail() {
  const { id } = useParams();
  const order = mockOrders[id] || mockOrders["ORD-10021"];
  const sc = statusConfig[order.status] || statusConfig.Processing;

  return (
    <div className="space-y-5">

      {/* Back + Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <NavLink
          to="/profile/orders"
          className="flex items-center gap-2 text-gray-500 hover:text-amber-500 text-sm font-bold mb-4 transition-colors"
        >
          <FaArrowLeft /> Back to Orders
        </NavLink>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-black text-[#0b1b3a] text-xl">Order {order.id}</h2>
            <p className="text-gray-400 text-sm mt-0.5">Placed on {order.date}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold ${sc.cls}`}>
              {sc.icon} {order.status}
            </span>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all">
              <FaDownload /> Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Order Tracking */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-black text-[#0b1b3a] mb-5">Order Tracking</h3>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            {order.tracking.map((step, i) => (
              <div key={i} className="flex items-start gap-5 pl-2">
                <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${step.done ? "bg-amber-500 border-amber-500" : "bg-white border-gray-300"}`}>
                  {step.done && <FaCheckCircle className="text-white text-xs" />}
                </div>
                <div>
                  <p className={`font-bold text-sm ${step.done ? "text-[#0b1b3a]" : "text-gray-400"}`}>{step.label}</p>
                  {step.date && <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Items */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-black text-[#0b1b3a] mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-gray-100" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#0b1b3a] text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Qty: {item.qty}</p>
                </div>
                <p className="font-black text-[#0b1b3a]">${(item.price * item.qty).toLocaleString()}</p>
              </div>
            ))}
          </div>

          {order.status === "Delivered" && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
              <NavLink
                to="/allproduct"
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-black font-bold rounded-xl text-sm hover:bg-amber-400 transition-all"
              >
                <FaRedo /> Reorder
              </NavLink>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-5">

          {/* Delivery Address */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-black text-[#0b1b3a] mb-4">Delivery Address</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-bold text-[#0b1b3a]">{order.address.name}</p>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{order.address.line}, {order.address.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-amber-500 flex-shrink-0" />
                <span>{order.address.phone}</span>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-black text-[#0b1b3a] mb-4">Payment Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span><span>${order.payment.subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span><span>{order.payment.shipping === 0 ? "Free" : `$${order.payment.shipping}`}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Tax</span><span>${order.payment.tax}</span>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-2 flex justify-between font-black text-[#0b1b3a]">
                <span>Total</span><span>${order.payment.total.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                Paid via <span className="font-bold text-[#0b1b3a]">{order.payment.method}</span>
                {order.payment.last4 && ` ending ••••${order.payment.last4}`}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
