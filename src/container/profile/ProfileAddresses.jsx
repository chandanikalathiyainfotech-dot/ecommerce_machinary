import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaMapMarkerAlt, FaPhone, FaUser, FaCheck } from "react-icons/fa";

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    name: "Rajesh Patel",
    phone: "+91 98765 43210",
    line1: "Plot #12, Sector 5",
    line2: "Industrial Estate",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380006",
    isDefault: true,
  },
  {
    id: 2,
    label: "Office",
    name: "Rajesh Patel",
    phone: "+91 87654 32109",
    line1: "Office #301, Tower B",
    line2: "Business Park, SG Highway",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380015",
    isDefault: false,
  },
];

const emptyForm = {
  label: "Home",
  name: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  pincode: "",
};

export default function ProfileAddresses() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const openAdd = () => {
    setForm(emptyForm);
    setEditId(null);
    setShowForm(true);
  };

  const openEdit = (addr) => {
    setForm({ ...addr });
    setEditId(addr.id);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    if (!form.name || !form.phone || !form.line1 || !form.city || !form.state || !form.pincode) return;
    if (editId) {
      setAddresses((prev) => prev.map((a) => (a.id === editId ? { ...form, id: editId, isDefault: a.isDefault } : a)));
    } else {
      setAddresses((prev) => [...prev, { ...form, id: Date.now(), isDefault: prev.length === 0 }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    setDeleteConfirmId(null);
  };

  const setDefault = (id) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-wrap space-y-2 items-center justify-between">
        <div>
          <h2 className="font-black text-[#0b1b3a] text-xl">Saved Addresses</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage your delivery addresses.</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-black font-black text-sm rounded-xl hover:bg-amber-400 transition-all"
        >
          <FaPlus /> Add New
        </button>
      </div>

      {/* Address Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`bg-white rounded-2xl border shadow-sm p-5 relative transition-all ${addr.isDefault ? "border-amber-500" : "border-gray-100"}`}
          >
            {addr.isDefault && (
              <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                <FaCheck className="text-[10px]" /> Default
              </span>
            )}

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#0b1b3a] text-white text-xs font-bold rounded-lg">{addr.label}</span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="text-amber-500 flex-shrink-0" />
                <span className="font-bold text-[#0b1b3a]">{addr.name}</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{addr.line1}, {addr.line2 && `${addr.line2}, `}{addr.city}, {addr.state} - {addr.pincode}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-amber-500 flex-shrink-0" />
                <span>{addr.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => openEdit(addr)}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-amber-500 transition-colors"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => setDeleteConfirmId(addr.id)}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-red-500 transition-colors"
              >
                <FaTrash /> Delete
              </button>
              {!addr.isDefault && (
                <button
                  onClick={() => setDefault(addr.id)}
                  className="ml-auto flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-600 transition-colors"
                >
                  Set as Default
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add Card */}
        <button
          onClick={openAdd}
          className="bg-white rounded-2xl border-2 border-dashed border-gray-200 shadow-sm p-5 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all min-h-[180px]"
        >
          <FaPlus className="text-2xl" />
          <span className="font-bold text-sm">Add New Address</span>
        </button>
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-black text-[#0b1b3a] text-lg mb-2">Delete Address?</h3>
            <p className="text-gray-500 text-sm mb-6">Are you sure you want to delete this address? This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-black text-[#0b1b3a] text-lg mb-5">
              {editId ? "Edit Address" : "Add New Address"}
            </h3>

            <div className="space-y-4">
              {/* Label */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Address Label</label>
                <div className="flex gap-2">
                  {["Home", "Office", "Other"].map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, label: l }))}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${form.label === l ? "bg-amber-500 border-amber-500 text-black" : "border-gray-200 text-gray-500 hover:border-amber-500"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Address Line 1</label>
                <input name="line1" value={form.line1} onChange={handleChange}
                  placeholder="House / Plot / Street"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Address Line 2 (Optional)</label>
                <input name="line2" value={form.line2} onChange={handleChange}
                  placeholder="Area / Locality"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">City</label>
                  <input name="city" value={form.city} onChange={handleChange}
                    placeholder="City"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">State</label>
                  <input name="state" value={form.state} onChange={handleChange}
                    placeholder="State"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Pincode</label>
                  <input name="pincode" value={form.pincode} onChange={handleChange}
                    placeholder="000000"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-all" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 py-3 bg-amber-500 text-black font-black rounded-xl hover:bg-amber-400 transition-all"
              >
                {editId ? "Save Changes" : "Add Address"}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
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
