import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import {
  FaCogs, FaEnvelope, FaLock, FaEye, FaEyeSlash,
  FaArrowLeft, FaCheckCircle, FaShieldAlt, FaKey
} from "react-icons/fa";

// ─── Yup Schemas ─────────────────────────────────────────────────────────────
const emailSchema = object({
  email: string()
    .required("Email address is required.")
    .email("Enter a valid email address (e.g. you@mechzone.com)."),
});

const otpSchema = object({
  otp: string()
    .required("OTP is required.")
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits."),
});

const passwordSchema = object({
  password: string()
    .required("New password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Must contain at least one lowercase letter.")
    .matches(/\d/, "Must contain at least one number.")
    .matches(/[@$!%*?&]/, "Must contain at least one special character (@$!%*?&)."),
  confirmPassword: string()
    .required("Please confirm your password.")
    .oneOf([ref("password")], "Passwords do not match."),
});

// ─── Shared error message component ──────────────────────────────────────────
function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 font-medium">
      <span className="inline-block w-3.5 h-3.5 rounded-full bg-red-100 text-red-500 flex-shrink-0 flex items-center justify-center text-[9px] font-black">!</span>
      {msg}
    </p>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────
const steps = ["Enter Email", "Verify OTP", "Reset Password"];

function StepBar({ current }) {
  return (
    <div className="hidden min-[576px]:flex items-center justify-center mb-8 gap-0">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all duration-300
                ${done   ? "bg-amber-500 border-amber-500 text-black"
                : active ? "bg-[#0b1b3a] border-amber-500 text-amber-500"
                         : "bg-gray-100 border-gray-200 text-gray-400"}`}>
                {done ? <FaCheckCircle className="text-sm" /> : i + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors
                ${done ? "text-amber-500" : active ? "text-[#0b1b3a]" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 w-12 sm:w-16 mx-1 mb-5 rounded transition-all duration-500 ${done ? "bg-amber-500" : "bg-gray-200"}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Step 1 : Email ───────────────────────────────────────────────────────────
function StepEmail({ onNext }) {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailSchema,
    validateOnBlur: true,
    validateOnChange: false,       // only show error after blur or submit
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        onNext(values.email);
      }, 1500);
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;
  const hasError = touched.email && errors.email;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="text-center mb-6">
        <div className="flex w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 items-center justify-center mx-auto mb-4">
          <FaEnvelope className="text-amber-500 text-xl sm:text-2xl" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#0b1b3a]">Forgot Password?</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          No worries! Enter your registered email and we'll send you a 6‑digit OTP.
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">
          Email Address
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={15} />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@mechzone.com"
            value={values.email}
            onChange={(e) => { handleChange(e); }}
            onBlur={handleBlur}
            className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${hasError
                ? "border-red-400 bg-red-50 focus:border-red-400"
                : touched.email && !errors.email
                  ? "border-green-400 focus:border-green-400"
                  : "border-gray-200 focus:border-amber-500"}`}
          />
          {touched.email && !errors.email && values.email && (
            <FaCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={15} />
          )}
        </div>
        <FieldError msg={hasError ? errors.email : ""} />
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {isSubmitting
          ? <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Sending OTP…</>
          : "Send OTP"}
      </button>

      <div className="text-center">
        <NavLink to="/authendication"
          className="inline-flex items-center gap-2 text-gray-500 text-sm font-bold hover:text-amber-500 transition-colors">
          <FaArrowLeft className="text-xs" /> Back to Sign In
        </NavLink>
      </div>
    </form>
  );
}

// ─── Step 2 : OTP ─────────────────────────────────────────────────────────────
const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function StepOTP({ email, onNext, onBack }) {
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const [resending, setResending] = useState(false);
  const inputsRef = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  // Formik for OTP — store as single string via a hidden field
  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: otpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        onNext();
      }, 1400);
    },
  });

  const { values, errors, touched, setFieldValue, setFieldTouched, handleSubmit, isSubmitting } = formik;

  // Split the formik otp string into array for the boxes
  const digits = values.otp.padEnd(OTP_LENGTH, "").split("").slice(0, OTP_LENGTH);

  const handleBoxChange = (val, i) => {
    if (!/^\d*$/.test(val)) return;
    const arr = digits.map((d) => d);
    arr[i] = val.slice(-1);
    const joined = arr.join("").replace(/\s/g, "");
    setFieldValue("otp", joined);
    setFieldTouched("otp", true, false);
    if (val && i < OTP_LENGTH - 1) inputsRef.current[i + 1]?.focus();
  };

  const handleBoxKeyDown = (e, i) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      const arr = digits.map((d) => d);
      arr[i - 1] = "";
      setFieldValue("otp", arr.join("").replace(/\s/g, ""));
      inputsRef.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    setFieldValue("otp", pasted.padEnd(OTP_LENGTH, "").slice(0, OTP_LENGTH));
    setFieldTouched("otp", true, false);
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleResend = () => {
    setResending(true);
    setFieldValue("otp", "");
    setTimeout(() => { setResending(false); setTimer(RESEND_SECONDS); }, 1200);
  };

  const hasError = touched.otp && errors.otp;
  const isComplete = values.otp.length === OTP_LENGTH;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="text-center mb-6">
        <div className="flex w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 items-center justify-center mx-auto mb-4">
          <FaShieldAlt className="text-amber-500 text-xl sm:text-2xl" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#0b1b3a]">Enter OTP</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          We sent a 6‑digit code to{" "}
          <span className="font-bold text-[#0b1b3a]">{email}</span>
        </p>
      </div>

      {/* OTP digit boxes */}
      <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
        {Array.from({ length: OTP_LENGTH }).map((_, i) => {
          const digit = digits[i] || "";
          return (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleBoxChange(e.target.value, i)}
              onKeyDown={(e) => handleBoxKeyDown(e, i)}
              className={`w-10 h-11 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-black border-2 rounded-xl
                bg-gray-50 focus:bg-white focus:outline-none transition-all duration-200
                ${hasError
                  ? "border-red-400 bg-red-50"
                  : digit
                    ? "border-amber-500 text-[#0b1b3a]"
                    : "border-gray-200 focus:border-amber-500 text-[#0b1b3a]"}`}
            />
          );
        })}
      </div>

      {/* Yup error */}
      {hasError && (
        <FieldError msg={errors.otp} />
      )}
      {/* Success hint when all filled and no error */}
      {isComplete && !hasError && (
        <p className="flex items-center justify-center gap-1.5 text-green-500 text-xs font-bold">
          <FaCheckCircle /> OTP entered — click Verify to continue.
        </p>
      )}

      {/* Resend timer */}
      <div className="text-center text-sm">
        {timer > 0 ? (
          <p className="text-gray-400">
            Resend OTP in <span className="font-bold text-[#0b1b3a]">{timer}s</span>
          </p>
        ) : (
          <button type="button" onClick={handleResend} disabled={resending}
            className="text-amber-500 font-bold hover:underline disabled:opacity-60 transition-all">
            {resending
              ? <span className="flex items-center gap-1.5 justify-center"><span className="w-3.5 h-3.5 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" /> Resending…</span>
              : "Resend OTP"}
          </button>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {isSubmitting
          ? <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Verifying…</>
          : "Verify OTP"}
      </button>

      <div className="text-center">
        <button type="button" onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 text-sm font-bold hover:text-amber-500 transition-colors">
          <FaArrowLeft className="text-xs" /> Change Email
        </button>
      </div>
    </form>
  );
}

// ─── Step 3 : Reset Password ──────────────────────────────────────────────────
const pwRules = [
  { label: "At least 8 characters",   test: (v) => v.length >= 8 },
  { label: "One uppercase letter",    test: (v) => /[A-Z]/.test(v) },
  { label: "One lowercase letter",    test: (v) => /[a-z]/.test(v) },
  { label: "One number",              test: (v) => /\d/.test(v) },
  { label: "One special character",   test: (v) => /[@$!%*?&]/.test(v) },
];

const strengthMeta = [
  null,
  { label: "Weak",       color: "bg-red-500",    text: "#ef4444" },
  { label: "Fair",       color: "bg-orange-400",  text: "#f97316" },
  { label: "Good",       color: "bg-yellow-400",  text: "#eab308" },
  { label: "Strong",     color: "bg-green-400",   text: "#22c55e" },
  { label: "Very Strong",color: "bg-green-600",   text: "#16a34a" },
];

function StepReset({ onDone }) {
  const [showPw, setShowPw]   = useState(false);
  const [showCfm, setShowCfm] = useState(false);

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: passwordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => { setSubmitting(false); onDone(); }, 1500);
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

  const strength = pwRules.filter((r) => r.test(values.password)).length;
  const meta     = strengthMeta[strength];

  const pwError  = touched.password        && errors.password;
  const cfmError = touched.confirmPassword && errors.confirmPassword;
  const cfmMatch = values.confirmPassword && values.password === values.confirmPassword;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="text-center mb-6">
        <div className="flex w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 items-center justify-center mx-auto mb-4">
          <FaKey className="text-amber-500 text-xl sm:text-2xl" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#0b1b3a]">Create New Password</h2>
        <p className="text-gray-500 text-sm mt-2">
          Your new password must be different from your previous one.
        </p>
      </div>

      {/* ── New Password ── */}
      <div>
        <label htmlFor="password" className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">
          New Password
        </label>
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          <input
            id="password"
            name="password"
            type={showPw ? "text" : "password"}
            placeholder="••••••••"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="new-password"
            className={`w-full pl-11 pr-12 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${pwError
                ? "border-red-400 bg-red-50 focus:border-red-400"
                : values.password && !errors.password
                  ? "border-green-400 focus:border-green-400"
                  : "border-gray-200 focus:border-amber-500"}`}
          />
          <button type="button" onClick={() => setShowPw((s) => !s)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
            {showPw ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          </button>
        </div>
        <FieldError msg={pwError ? errors.password : ""} />

        {/* Strength indicator */}
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

      {/* ── Confirm Password ── */}
      <div>
        <label htmlFor="confirmPassword" className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">
          Confirm Password
        </label>
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showCfm ? "text" : "password"}
            placeholder="••••••••"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="new-password"
            className={`w-full pl-11 pr-12 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${cfmError
                ? "border-red-400 bg-red-50 focus:border-red-400"
                : cfmMatch
                  ? "border-green-400 focus:border-green-400"
                  : "border-gray-200 focus:border-amber-500"}`}
          />
          <button type="button" onClick={() => setShowCfm((s) => !s)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
            {showCfm ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          </button>
          {cfmMatch && (
            <FaCheckCircle className="absolute right-11 top-1/2 -translate-y-1/2 text-green-500" size={14} />
          )}
        </div>
        <FieldError msg={cfmError ? errors.confirmPassword : ""} />
        {cfmMatch && (
          <p className="flex items-center gap-1.5 text-green-500 text-xs mt-1.5 font-bold">
            <FaCheckCircle className="text-[10px]" /> Passwords match!
          </p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {isSubmitting
          ? <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Updating…</>
          : "Reset Password"}
      </button>
    </form>
  );
}

// ─── Step 4 : Success ─────────────────────────────────────────────────────────
function StepSuccess({ navigate }) {
  useEffect(() => {
    const t = setTimeout(() => navigate("/authendication"), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="text-center py-6 space-y-5">
      <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center mx-auto success-pop">
        <FaCheckCircle className="text-green-500 text-4xl" />
      </div>
      <div>
        <h2 className="text-2xl font-black text-[#0b1b3a]">Password Reset!</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          Your password has been updated successfully.<br />
          Redirecting you to sign in…
        </p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div className="h-full bg-amber-500 rounded-full" style={{ animation: "shrink 3s linear forwards" }} />
      </div>
      <NavLink to="/authendication"
        className="inline-block px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a]
          font-black text-sm rounded-xl uppercase tracking-widest hover:shadow-xl hover:shadow-amber-500/30 transition-all">
        Sign In Now
      </NavLink>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ForgotPassword() {
  const [step, setStep] = useState(0); // 0 email | 1 otp | 2 reset | 3 success
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto my-5 md:my-10 lg:my-20 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-[992px]:flex-row">

        {/* ── Left decorative panel ── */}
        <div className="min-[992px]:w-1/2 bg-[linear-gradient(rgba(15,23,42,0.75),rgba(15,23,42,0.75)),url('../assets/Images/forget.jpg')]
          bg-cover bg-center p-12 flex-col justify-between relative overflow-hidden hidden min-[992px]:flex">

          <div className="absolute top-10 right-10 opacity-10 pointer-events-none"><FaCogs size={200} /></div>
          <div className="absolute bottom-20 left-10 opacity-5  pointer-events-none"><FaCogs size={150} /></div>

          {/* Logo */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-2.5 rounded-lg border border-gray-700">
                <FaCogs className="text-amber-500 text-2xl" style={{ animation: "spinSlow 10s linear infinite" }} />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-[#0f172a]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                MECH<span className="text-[#f59e0b]">ZONE</span>
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Account Recovery
              <span className="text-[#f59e0b] block mt-2">Made Simple.</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed">
              Regain access to your industrial equipment dashboard in just a few quick steps.
            </p>
          </div>

          {/* Step list */}
          <div className="relative z-10 mt-12 space-y-4">
            {[
              { icon: <FaEnvelope />, title: "Enter your email",  desc: "We'll send a one‑time code" },
              { icon: <FaShieldAlt />, title: "Verify OTP",        desc: "Enter the 6‑digit code" },
              { icon: <FaKey />,       title: "Set new password",  desc: "Choose a strong password" },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300
                ${step === i ? "bg-amber-500/30 border-amber-500/40" : "border-transparent"}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm transition-all
                  ${step > i  ? "bg-amber-500 text-black"
                  : step === i ? "bg-amber-500/40 text-amber-500"
                               : "bg-gray-800 text-gray-500"}`}>
                  {step > i ? <FaCheckCircle /> : item.icon}
                </div>
                <div>
                  <p className={`font-bold text-sm ${step >= i ? "text-white" : "text-gray-500"}`}>{item.title}</p>
                  <p className={`${step >= i ? "text-white" : "text-gray-500"} text-xs mt-0.5`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="min-[992px]:w-1/2 p-5 sm:p-10 lg:p-12 flex flex-col justify-center">
          {step < 3 && <StepBar current={step} />}

          {step === 0 && <StepEmail onNext={(e) => { setEmail(e); setStep(1); }} />}
          {step === 1 && <StepOTP   email={email} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
          {step === 2 && <StepReset onDone={() => setStep(3)} />}
          {step === 3 && <StepSuccess navigate={navigate} />}
        </div>
      </div>

      <style>{`
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shrink   { from { width: 100%; } to { width: 0%; } }
        @keyframes successPop {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .success-pop { animation: successPop 0.5s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>
    </div>
  );
}
