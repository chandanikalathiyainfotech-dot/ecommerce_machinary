import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { NavLink } from "react-router-dom";

function Checkout() {

    const [couponopen, SetCouponopen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [showDetails, setShowDetails] = useState(true);

    //  const validationSchema = object({
    //     coupon:string().required("enter coupon code enter")
    // });


    let validationSchema;
    let initialValues;

    if (couponopen) {
        validationSchema = { coupon: string().required("enter coupon code enter") }

        initialValues = { coupon: "" }
    } else {
        validationSchema = {
            firstName: string().required("First name is required"),
            lastName: string().required("Last name is required"),
            country: string().required("Country is required"),
            streetAddress: string().required("Street address is required"),
            apartment: string().optional(),
            city: string().required("Town/City is required"),
            state: string().optional(),
            pincode: string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(5, "Too short")
                .max(10, "Too long")
                .required("Pincode/Zip code is required"),
            phone: string()
                .matches(/^[0-9+-\s]+$/, "Invalid phone number")
                .optional(),
            email: string().email("Invalid email address").required("Email is required"),
            businessName: string().optional(),
        }

        initialValues = {
            firstName: "",
            lastName: "",
            country: "United Kingdom (UK)",
            streetAddress: "",
            apartment: "",
            city: "",
            state: "",
            pincode: "",
            phone: "",
            email: "",
            businessName: "",
        }
    }

    // 2. Initialize Formik hooks
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            country: "United Kingdom (UK)",
            streetAddress: "",
            apartment: "",
            city: "",
            state: "",
            pincode: "",
            phone: "",
            email: "",
            businessName: "",
            coupon: ""
        },
        validationSchema: object(validationSchema),
        onSubmit: (values) => {
            console.log("Form Submitted Successfully:", values);
            alert("Order placed successfully!");
        },
    });

    const { handleSubmit, handleBlur, handleChange, values, touched, errors, setFieldValue, setFieldTouched } = formik;
    console.log(errors)

    return (
        <main>
            <section id="top" className="!mt-4 md:!mt-0 md:bg-[#F7F7F7] md:py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="text text-center py-5 md:py-0 bg-[#F7F7F7] md:bg-transparent">
                        <h2 className="text-[28px] uppercase font-bold hidden md:block">Checkout</h2>
                        <div className="breadcrumps pl-4 md:pl-0">
                            <ol className="flex gap-1 md:justify-center">
                                <NavLink to={'/'}><li>Home /</li></NavLink>
                                <li className="text-amber-500"> Checkout</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

                    {/* Coupon Alert Toggle */}
                    <div className="bg-white border border-gray-200 p-4 rounded text-sm">
                        <span className="text-gray-600">Have a coupon?</span>
                        <button className="text-blue-600 hover:underline ml-1" onClick={() => SetCouponopen(!couponopen)}>Click here to enter your code</button>
                    </div>

                    <div className={`bg-white border rounded overflow-hidden transition-all duration-300 ease-in-out ${couponopen
                        ? "max-h-[250px] opacity-100 p-6 border-gray-200 mt-4 mb-4"
                        : "max-h-0 opacity-0 p-0 border-transparent pointer-events-none"
                        }`}>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    name='coupon'
                                    id='coupon'
                                    defaultValue="sdfr"
                                    className="w-full sm:max-w-xs p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    value={values.coupon}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <button type="submit" onClick={handleSubmit} className="bg-[#4ab324] hover:bg-[#3f9a1e] text-white font-medium px-6 py-2 rounded text-sm transition-colors self-start sm:self-auto">
                                    Apply Coupon
                                </button>
                            </div>
                            {errors.coupon && touched.coupon && <span className="text-red-500 text-sm">{errors.coupon}</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Left Column: Billing Details */}
                        <form className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded space-y-5" onSubmit={handleSubmit}>
                            <h2 className="text-xl font-bold border-b border-gray-100 pb-3">Billing details</h2>

                            {/* Name Fields Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-gray-700">First name <span className="text-red-500">*</span></label>
                                    <input type="text"
                                        name="firstName" id="firstName"
                                        placeholder="First Name"
                                        className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && touched.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-gray-700">Last name <span className="text-red-500">*</span></label>
                                    <input type="text"
                                        placeholder="Last Name"
                                        name="lastName" id="lastName"
                                        className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && touched.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                                </div>
                            </div>

                            {/* Country / Region */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Country / Region <span className="text-red-500">*</span></label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="country" id="country"
                                    value={values.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option>United Kingdom (UK)</option>
                                    <option>United States (US)</option>
                                    <option>Canada</option>
                                </select>
                                {errors.country && touched.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                            </div>

                            {/* Street Address */}
                            <div className="">
                                <label className="block text-sm font-semibold text-gray-700">Street address <span className="text-red-500">*</span></label>
                                <input type="text"
                                    placeholder="House number and street name"
                                    className="w-full p-3 mt-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="streetAddress" id="streetAddress"
                                    value={values.streetAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.streetAddress && touched.streetAddress && <span className="text-red-500 text-sm">{errors.streetAddress}</span>}

                                <input type="text"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    className="w-full p-3 mt-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="apartment" id="apartment"
                                    value={values.apartment}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.apartment && touched.apartment && <span className="text-red-500 text-sm">{errors.apartment}</span>}
                            </div>

                            {/* Town / City */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Town / City <span className="text-red-500">*</span></label>
                                <input type="text"
                                    placeholder="City"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="city" id="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.city && touched.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                            </div>

                            {/* County */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">State (optional)</label>
                                <input type="text"
                                    placeholder="State"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="state" id="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.state && touched.state && <span className="text-red-500 text-sm">{errors.state}</span>}
                            </div>

                            {/* Postcode */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Pincode <span className="text-red-500">*</span></label>
                                <input type="text"
                                    placeholder="Pin Code"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="pincode" id="pincode"
                                    value={values.pincode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.pincode && touched.pincode && <span className="text-red-500 text-sm">{errors.pincode}</span>}
                            </div>

                            {/* phone */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Phone (optional)</label>
                                <input type="text"
                                    placeholder="Phone"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="phone" id="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Email Adress<span className="text-red-500">*</span></label>
                                <input type="email"
                                    placeholder="Email Adress"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="email" id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>

                            {/* Business Name */}
                            <div className="space-y-1">
                                <label className="block text-sm font-semibold text-gray-700">Business Name (optional) <span className="text-red-500">*</span></label>
                                <input type="text"
                                    placeholder="Business Name"
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    name="businessName" id="businessName"
                                    value={values.businessName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.businessName && touched.businessName && <span className="text-red-500 text-sm">{errors.businessName}</span>}
                            </div>
                        </form>


                        {/* Right Column: Order Summary */}
                        <div className="bg-white border border-gray-200 p-4 rounded space-y-6">
                            <h2 className="text-xl font-bold border-b border-gray-100 pb-3">Your order</h2>
                            {/* Table Header Labels */}
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-0 space-y-1">

                                <h3 className="font-medium text-gray-900">1 item</h3>
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="flex items-center gap-1 text-[16px] text-gray-600 hover:text-black font-medium transition-colors"
                                >
                                    {showDetails ? "Hide Details" : "Show Details"}
                                    <svg
                                        xmlns="http://w3.org"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2.5"
                                        stroke="currentColor"
                                        className={`w-3 h-3 transition-transform duration-200 ${showDetails ? "" : "rotate-180"}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            {/* Product Item Row / Collapsible Container */}
                            <div className={`overflow-hidden transition-all  border-b border-gray-100  duration-300 ease-in-out  mb-0 ${showDetails ? "max-h-[200px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0 pointer-events-none"
                                }`}>
                                {/* Clean, wrapped row layout containing the price inside */}
                                <div className="flex items-start gap-4 pb-4 ">

                                    {/* Product Image Container */}
                                    <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded flex items-center justify-center p-1 shrink-0">
                                        <img
                                            src='../../src/assets/Images/machines/m1.jpg'
                                            alt="Skil Circular Saw"
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>

                                    {/* Product Description & Quantity */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[16px] text-gray-700 font-medium leading-tight">
                                            Skil 7-1/4 in Handheld Circular Saw 5280-01
                                        </h4>
                                        <span className="block text-xs text-gray-400 mt-1">x1</span>
                                    </div>
                                </div>
                                {/* Product Item Cost (Moved inside row layout) */}
                                <div className="text-[18px] font-bold text-[var(--secondary-color)] shrink-0 self-start text-right">
                                    $100.00
                                </div>
                            </div>


                            {/* Price Breakdowns */}
                            <div className="pt-3 space-y-3 text-[16px] text-gray-500">
                                {/* Subtotal */}
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-[var(--secondary-color)]">$100.00</span>
                                </div>

                                {/* Shipping */}
                                <div className="flex justify-between border-b border-gray-100 pb-3">
                                    <span>Shipping</span>
                                    <span className="font-medium text-[var(--secondary-color)]">$7.00</span>
                                </div>

                                {/* Total Tax Excl */}
                                <div className="flex justify-between">
                                    <span>Total (tax excl.)</span>
                                    <span className="font-medium text-[var(--secondary-color)]">$107.00</span>
                                </div>

                                {/* Total Tax Incl */}
                                <div className="flex justify-between items-center pt-1 text-[16px] font-bold text-black">
                                    <span>Total (tax incl.)</span>
                                    <span className="text-amber-500 text-base">$107.00</span>
                                </div>
                            </div>


                            {/* Payment Options Wrapper */}
                            <div className="space-y-4 bg-[#f8f8f8] px-4 py-6 rounded-md border-1 border-gray-200 mt-10">

                                {/* Option 1: Direct Bank Transfer */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-800">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "bank"}
                                            onChange={() => setPaymentMethod("bank")}
                                            className="text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                                        />
                                        Direct bank transfer
                                    </label>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${paymentMethod === "bank"
                                        ? "max-h-40 opacity-100 mt-2"
                                        : "max-h-0 opacity-0 pointer-events-none"
                                        }`}>
                                        <div className="bg-white border border-gray-100 p-3 rounded text-[13px] text-gray-500 leading-relaxed">
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </div>
                                    </div>
                                </div>

                                {/* Option 2: Check Payments */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-800">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "check"}
                                            onChange={() => setPaymentMethod("check")}
                                            className="text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                                        />
                                        Check payments
                                    </label>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${paymentMethod === "check"
                                        ? "max-h-40 opacity-100 mt-2"
                                        : "max-h-0 opacity-0 pointer-events-none"
                                        }`}>
                                        <div className="bg-white border border-gray-100 p-3 rounded text-[13px] text-gray-500 leading-relaxed">
                                            Please send a physical check to our store address. Your order will process once the bank clears the check value.
                                        </div>
                                    </div>
                                </div>

                                {/* Option 3: Cash on Delivery */}
                                <div className="space-y-2 pb-4 border-b border-gray-100">
                                    <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-gray-800">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "cod"}
                                            onChange={() => setPaymentMethod("cod")}
                                            className="text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                                        />
                                        Cash on delivery
                                    </label>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${paymentMethod === "cod"
                                        ? "max-h-40 opacity-100 mt-2"
                                        : "max-h-0 opacity-0 pointer-events-none"
                                        }`}>
                                        <div className="bg-white border border-gray-100 p-3 rounded text-[13px] text-gray-500 leading-relaxed">
                                            Pay with cash upon physical delivery. Please ensure you have the exact change available for our delivery agent.
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy & Submission Info */}
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                </p>
                                {/* Place Order CTA Button */}
                                <button type="submit" onClick={handleSubmit} className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded text-xs tracking-wider uppercase transition-colors">
                                    Place Order
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}

export default Checkout;