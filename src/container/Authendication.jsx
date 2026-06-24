import { useFormik } from "formik";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCogs, FaUser, FaToolbox, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { boolean, object, string } from "yup";

const Authendication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const authschema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
    remember: boolean().oneOf([true], "Please accept the terms")
  })


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      remember: false
    },
    enableReinitialize: true,
    validationSchema: authschema,
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);

      resetForm();
    },
  })

  const { handleSubmit, handleBlur, handleChange, values, touched, errors, setFieldValue, setFieldTouched } = formik;
  console.log("errors:", errors);

  const pwRules = [
    { label: "At least 8 characters", test: (v) => v.length >= 8 },
    { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
    { label: "One lowercase letter", test: (v) => /[a-z]/.test(v) },
    { label: "One number", test: (v) => /\d/.test(v) },
    { label: "One special character", test: (v) => /[@$!%*?&]/.test(v) },
  ];

  const strengthMeta = [
    null,
    { label: "Weak", color: "bg-red-500", text: "#ef4444" },
    { label: "Fair", color: "bg-orange-400", text: "#f97316" },
    { label: "Good", color: "bg-yellow-400", text: "#eab308" },
    { label: "Strong", color: "bg-green-400", text: "#22c55e" },
    { label: "Very Strong", color: "bg-green-600", text: "#16a34a" },
  ];

  const strength = pwRules.filter((r) => r.test(values.password)).length;
  const meta = strengthMeta[strength];

  return (
    <div className=" bg-[#f8fafc] flex items-center justify-center p-4 py-10 sm:py-20">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transition-all duration-500">

        {/* Left Side - Industrial Visual */}
        <div className={`lg:w-1/2  bg-[linear-gradient(rgba(15,23,42,0.75),rgba(15,23,42,0.75)),url('../assets/Images/authendication_img.jpg')]
         bg-cover bg-center bg-gradient-to-br  p-12 flex flex-col justify-between relative overflow-hidden
          ${isSignIn ? "translate-x-0" : "lg:translate-x-full"} transition-all duration-700 ease-in-out transform z-10 hidden min-[992px]:block`}>
          {/* Decorative Gears */}
          <div className="absolute top-10 right-10 opacity-10">
            <FaCogs size={200} />
          </div>
          <div className="absolute bottom-20 left-10 opacity-5">
            <FaCogs size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-2.5 rounded-lg border border-gray-700 group-hover:border-amber-500 transition-all duration-300">
                <FaCogs className="text-amber-500 text-2xl animate-spin-slow" style={{ animationDuration: '10s' }} />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#0f172a]"></div>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                MECH<span className="text-[#f59e0b]">ZONE</span>
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Welcome Back,
              <span className="text-[#f59e0b] block mt-2">Industrial Professional</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Access your industrial equipment dashboard, manage orders, and track shipments all in one place.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className={`lg:w-1/2 p-8 lg:p-12  ${isSignIn ? "translate-x-0" : "lg:-translate-x-full"} transition-all duration-700 ease-in-out transform`}>
          {/* Tabs */}
          <div className="flex mb-10 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-2 sm:py-3 px-4 rounded-lg font-bold transition-all ${isSignIn
                ? "bg-[#f59e0b] text-[#0f172a] shadow-lg shadow-amber-500/20"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-2 sm:py-3 px-4 rounded-lg font-bold transition-all ${!isSignIn
                ? "bg-[#f59e0b] text-[#0f172a] shadow-lg shadow-amber-500/20"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isSignIn && (
              <div>
                <label className="block text-[#0f172a] font-bold mb-2 text-sm uppercase tracking-wide">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#f59e0b] focus:bg-white transition-all"
                  />
                </div>
                {errors.name && touched.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
            )}

            <div>
              <label className="block text-[#0f172a] font-bold mb-2 text-sm uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@mechzone.com"
                  className="w-full pl-12 pr-4  py-2 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#f59e0b] focus:bg-white transition-all"
                />
              </div>
              {errors.email && touched.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div>
              <label className="block text-[#0f172a] font-bold mb-2 text-sm uppercase tracking-wide">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full pl-12 pr-12 py-2 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#0f172a] focus:outline-none focus:border-[#f59e0b] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#f59e0b] transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.password && touched.password && <span className="text-red-500 text-sm">{errors.password}</span>}

              {values.password && (
                <div className="mt-3 space-y-2">
                  {/* Bar */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300
                                  ${i <= strength ? meta?.color : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  {meta && (
                    <p className="text-xs font-bold" style={{ color: meta.text }}>{meta.label}</p>
                  )}
                  {/* Rules checklist */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                    {pwRules.map((rule, i) => {
                      const pass = rule.test(values.password);
                      return (
                        <li key={i}
                          className={`flex items-center gap-1.5 text-xs font-medium transition-colors
                                    ${pass ? "text-green-600" : "text-gray-400"}`}>
                          <FaCheckCircle className={`text-[10px] flex-shrink-0 ${pass ? "text-green-500" : "text-gray-300"}`} />
                          {rule.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            {isSignIn && (
              <>
                <div className="flex items-center justify-between flex-wrap gap-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#f59e0b]"
                      name="remember" id="remember" checked={values.remember}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#f59e0b]" />
                    <span className="text-gray-600 text-sm font-medium">Remember me</span>
                  </label>
                  <NavLink to="/forgot-password" className="text-[#f59e0b] text-sm font-bold hover:underline">Forgot password?</NavLink>
                </div>
                {/* {errors.remember && touched.remember && (
                  <span className="text-red-500 text-sm">
                    {errors.remember}
                  </span>
                )} */}
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0f172a] font-black text-sm sm:text-[16px] rounded-lg sm:rounded-xl 
              hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-1 uppercase tracking-widest"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="mt-6 grid col-sapn-12 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-2 sm:py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999021,6.65002441 L5.26620003,9.76452941 Z" />
                  <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                  <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                  <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999021,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7273816 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                </svg>
                <span className="text-gray-700 font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-2 sm:py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-gray-700 font-bold">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authendication;