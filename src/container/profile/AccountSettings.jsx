import React, { useState } from "react";
import {
  FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash,
  FaCamera, FaBell, FaShieldAlt, FaTrash, FaCheck
} from "react-icons/fa";

const tabs = ["Personal Info", "Password", "Notifications", "Privacy"];

export default function AccountSettings({ user }) {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: "+91 98765 43210",
    company: "Patel Engineering Ltd.",
    gstin: "24AADCP1234R1Z5",
  });

  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    sms: false,
    whatsapp: true,
  });

  const handleProfileChange = (e) => setProfile((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handlePasswordChange = (e) => setPasswords((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleNotifChange = (key) => setNotifications((n) => ({ ...n, [key]: !n[key] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-black text-[#0b1b3a] text-xl">Account Settings</h2>
        <p className="text-gray-500 text-sm mt-0.5">Manage your profile, security, and preferences.</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 flex gap-1 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab
              ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
              : "text-gray-500 hover:bg-gray-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Personal Info --- */}
      {activeTab === "Personal Info" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">

          {/* Avatar */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full border-2 border-amber-500 object-cover"
              />
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-black hover:bg-amber-400 transition-all shadow-md">
                <FaCamera className="text-xs" />
              </button>
            </div>
            <div>
              <p className="font-black text-[#0b1b3a]">{profile.name}</p>
              <p className="text-gray-400 text-sm">{profile.email}</p>
              <button className="text-amber-500 text-xs font-bold mt-1 hover:underline">Change Photo</button>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  name="name" value={profile.name} onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  name="email" value={profile.email} onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Phone Number</label>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  name="phone" value={profile.phone} onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Company Name</label>
              <input
                name="company" value={profile.company} onChange={handleProfileChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">GSTIN (Optional)</label>
              <input
                name="gstin" value={profile.gstin} onChange={handleProfileChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-3 min-[576px]:px-6 py-3 font-black text-sm rounded-xl transition-all
                ${saved ? "bg-green-500 text-white" : "bg-amber-500 hover:bg-amber-400 text-black"}`}
            >
              {saved ? <><FaCheck /> Saved!</> : "Save Changes"}
            </button>
            <button
              onClick={() => setProfile({ name: user.name, email: user.email, phone: "+91 98765 43210", company: "Patel Engineering Ltd.", gstin: "24AADCP1234R1Z5" })}
              className="px-6 py-3 bg-gray-100 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-200 transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* --- Password --- */}
      {activeTab === "Password" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
              <FaLock />
            </div>
            <div>
              <p className="font-black text-[#0b1b3a]">Change Password</p>
              <p className="text-xs text-gray-400">Choose a strong, unique password.</p>
            </div>
          </div>

          {[
            { label: "Current Password", name: "old", show: showOld, toggle: () => setShowOld(!showOld) },
            { label: "New Password", name: "new", show: showNew, toggle: () => setShowNew(!showNew) },
            { label: "Confirm New Password", name: "confirm", show: showConfirm, toggle: () => setShowConfirm(!showConfirm) },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">{field.label}</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type={field.show ? "text" : "password"}
                  name={field.name}
                  value={passwords[field.name]}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all"
                />
                <button type="button" onClick={field.toggle} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
                  {field.show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={handleSave}
            className={`w-full py-3 font-black text-sm rounded-xl transition-all
              ${saved ? "bg-green-500 text-white" : "bg-amber-500 hover:bg-amber-400 text-black"}`}
          >
            {saved ? "Password Updated!" : "Update Password"}
          </button>
        </div>
      )}

      {/* --- Notifications --- */}
      {activeTab === "Notifications" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
              <FaBell />
            </div>
            <div>
              <p className="font-black text-[#0b1b3a]">Notification Preferences</p>
              <p className="text-xs text-gray-400">Choose how you want to be notified.</p>
            </div>
          </div>

          {[
            { key: "orderUpdates", label: "Order Updates", desc: "Shipping, delivery, and order status changes" },
            { key: "promotions", label: "Promotional Offers", desc: "Discounts, deals, and special offers" },
            { key: "newsletter", label: "Newsletter", desc: "Weekly product and industry news" },
            { key: "sms", label: "SMS Alerts", desc: "Receive alerts via SMS" },
            { key: "whatsapp", label: "WhatsApp Alerts", desc: "Receive updates on WhatsApp" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <div>
                <p className="font-bold text-[#0b1b3a] text-sm">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <button
                onClick={() => handleNotifChange(item.key)}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 flex-shrink-0 ${notifications[item.key] ? "bg-amber-500" : "bg-gray-200"}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${notifications[item.key] ? "left-7" : "left-1"}`}></span>
              </button>
            </div>
          ))}

          <button
            onClick={handleSave}
            className={`w-full py-3 font-black text-sm rounded-xl transition-all mt-2
              ${saved ? "bg-green-500 text-white" : "bg-amber-500 hover:bg-amber-400 text-black"}`}
          >
            {saved ? "Preferences Saved!" : "Save Preferences"}
          </button>
        </div>
      )}

      {/* --- Privacy --- */}
      {activeTab === "Privacy" && (
        <div className="space-y-4 max-w-lg">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <FaShieldAlt />
              </div>
              <div>
                <p className="font-black text-[#0b1b3a]">Privacy & Security</p>
                <p className="text-xs text-gray-400">Control your data and account security.</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Two-Factor Authentication", desc: "Add an extra layer of security to your account", enabled: false },
                { label: "Data Sharing", desc: "Allow usage data to improve our services", enabled: true },
                { label: "Profile Visibility", desc: "Make your profile visible to other users", enabled: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0">
                  <div className="flex-1">
                    <p className="font-bold text-[#0b1b3a] text-sm">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                  <button className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-all duration-300 ${item.enabled ? "bg-amber-500" : "bg-gray-200"}`}>
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${item.enabled ? "left-7" : "left-1"}`}></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
            <h3 className="font-black text-red-500 mb-1">Danger Zone</h3>
            <p className="text-gray-500 text-sm mb-4">Irreversible actions for your account.</p>
            <button
              onClick={() => setDeleteModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-500 border border-red-200 font-bold text-sm rounded-xl hover:bg-red-500 hover:text-white transition-all"
            >
              <FaTrash /> Delete Account
            </button>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-black text-[#0b1b3a] text-lg mb-2">Delete Account?</h3>
            <p className="text-gray-500 text-sm mb-6">
              This will permanently delete your account and all associated data. This action <strong>cannot be undone</strong>.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal(false)}
                className="flex-1 py-2.5 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteModal(false)}
                className="flex-1 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
