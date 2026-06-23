import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaCogs, FaEnvelope, FaLock, FaEye, FaEyeSlash,
  FaArrowLeft, FaCheckCircle, FaShieldAlt, FaKey
} from "react-icons/fa";

// ─── Step indicator ─────────────────────────────────────────────────────────
const steps = ["Enter Email", "Verify OTP", "Reset Password"];

function StepBar({ current }) {
  return (
    <div className="flex items-center justify-center mb-8 gap-0">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border-2 transition-all
                ${done ? "bg-amber-500 border-amber-500 text-black"
                  : active ? "bg-[#0b1b3a] border-amber-500 text-amber-500"
                  : "bg-gray-100 border-gray-200 text-gray-400"}`}>
                {done ? <FaCheckCircle className="text-base" /> : i + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide whitespace-nowrap
                ${done ? "text-amber-500" : active ? "text-[#0b1b3a]" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 w-12 sm:w-16 mx-1 mb-5 rounded transition-all ${done ? "bg-amber-500" : "bg-gray-200"}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Step 1 : Email ──────────────────────────────────────────────────────────
function StepEmail({ onNext }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) { setError("Email is required."); return; }
    if (!validate(email)) { setError("Enter a valid email address."); return; }
    setError("");
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onNext(email);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-4">
          <FaEnvelope className="text-amber-500 text-2xl" />
        </div>
        <h2 className="text-2xl font-black text-[#0b1b3a]">Forgot Password?</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          No worries! Enter your registered email and we'll send you a 6-digit OTP.
        </p>
      </div>

      <div>
        <label className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">
          Email Address
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="you@mechzone.com"
            className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${error ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-amber-500"}`}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>}
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {loading ? (
          <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Sending OTP...</>
        ) : "Send OTP"}
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

// ─── Step 2 : OTP ────────────────────────────────────────────────────────────
const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function StepOTP({ email, onNext, onBack }) {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const [resending, setResending] = useState(false);
  const inputsRef = useRef([]);

  // countdown
  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  const handleChange = (val, i) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    setError("");
    if (val && i < OTP_LENGTH - 1) inputsRef.current[i + 1]?.focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleResend = () => {
    setResending(true);
    setOtp(Array(OTP_LENGTH).fill(""));
    setError("");
    setTimeout(() => {
      setResending(false);
      setTimer(RESEND_SECONDS);
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < OTP_LENGTH) { setError("Please enter all 6 digits."); return; }
    setLoading(true);
    // Simulate verify — accept any 6-digit code for demo
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 1400);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-4">
          <FaShieldAlt className="text-amber-500 text-2xl" />
        </div>
        <h2 className="text-2xl font-black text-[#0b1b3a]">Enter OTP</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          We sent a 6-digit code to <span className="font-bold text-[#0b1b3a]">{email}</span>
        </p>
      </div>

      {/* OTP boxes */}
      <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`w-11 h-13 sm:w-12 sm:h-14 text-center text-xl font-black border-2 rounded-xl
              bg-gray-50 focus:bg-white focus:outline-none transition-all
              ${error ? "border-red-400"
                : digit ? "border-amber-500 text-[#0b1b3a]"
                : "border-gray-200 focus:border-amber-500 text-[#0b1b3a]"}`}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-xs text-center font-medium">{error}</p>}

      {/* Resend */}
      <div className="text-center text-sm">
        {timer > 0 ? (
          <p className="text-gray-400">
            Resend OTP in <span className="font-bold text-[#0b1b3a]">{timer}s</span>
          </p>
        ) : (
          <button type="button" onClick={handleResend} disabled={resending}
            className="text-amber-500 font-bold hover:underline disabled:opacity-60">
            {resending ? "Resending..." : "Resend OTP"}
          </button>
        )}
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {loading ? (
          <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Verifying...</>
        ) : "Verify OTP"}
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

// ─── Step 3 : Reset Password ─────────────────────────────────────────────────
function StepReset({ onDone }) {
  const [fields, setFields] = useState({ password: "", confirm: "" });
  const [show, setShow] = useState({ password: false, confirm: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const pwRules = [
    { label: "At least 8 characters", test: (v) => v.length >= 8 },
    { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
    { label: "One lowercase letter", test: (v) => /[a-z]/.test(v) },
    { label: "One number", test: (v) => /\d/.test(v) },
    { label: "One special character", test: (v) => /[@$!%*?&]/.test(v) },
  ];

  const strength = pwRules.filter((r) => r.test(fields.password)).length;
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"][strength];
  const strengthColor = ["", "bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-green-600"][strength];

  const validate = () => {
    const e = {};
    if (!fields.password) e.password = "Password is required.";
    else if (strength < 5) e.password = "Password does not meet all requirements.";
    if (!fields.confirm) e.confirm = "Please confirm your password.";
    else if (fields.password !== fields.confirm) e.confirm = "Passwords do not match.";
    return e;
  };

  const handleChange = (e) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onDone(); }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-4">
          <FaKey className="text-amber-500 text-2xl" />
        </div>
        <h2 className="text-2xl font-black text-[#0b1b3a]">Create New Password</h2>
        <p className="text-gray-500 text-sm mt-2">
          Your new password must be different from your previous one.
        </p>
      </div>

      {/* New Password */}
      <div>
        <label className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">New Password</label>
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input type={show.password ? "text" : "password"} name="password"
            value={fields.password} onChange={handleChange} placeholder="••••••••"
            className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${errors.password ? "border-red-400" : "border-gray-200 focus:border-amber-500"}`} />
          <button type="button" onClick={() => setShow((s) => ({ ...s, password: !s.password }))}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
            {show.password ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password}</p>}

        {/* Strength bar */}
        {fields.password && (
          <div className="mt-3 space-y-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= strength ? strengthColor : "bg-gray-200"}`} />
              ))}
            </div>
            <p className="text-xs font-bold" style={{ color: strength >= 4 ? "#22c55e" : strength >= 3 ? "#eab308" : "#f97316" }}>
              {strengthLabel}
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {pwRules.map((rule, i) => (
                <li key={i} className={`flex items-center gap-1.5 text-xs font-medium transition-colors
                  ${rule.test(fields.password) ? "text-green-500" : "text-gray-400"}`}>
                  <FaCheckCircle className={`text-[10px] ${rule.test(fields.password) ? "text-green-500" : "text-gray-300"}`} />
                  {rule.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-[#0b1b3a] font-bold mb-2 text-xs uppercase tracking-wide">Confirm Password</label>
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
          <input type={show.confirm ? "text" : "password"} name="confirm"
            value={fields.confirm} onChange={handleChange} placeholder="••••••••"
            className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border rounded-xl text-[#0b1b3a] text-sm
              focus:outline-none focus:bg-white transition-all
              ${errors.confirm ? "border-red-400"
                : fields.confirm && fields.confirm === fields.password ? "border-green-400"
                : "border-gray-200 focus:border-amber-500"}`} />
          <button type="button" onClick={() => setShow((s) => ({ ...s, confirm: !s.confirm }))}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
            {show.confirm ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
          {fields.confirm && fields.confirm === fields.password && (
            <FaCheckCircle className="absolute right-11 top-1/2 -translate-y-1/2 text-green-500" size={14} />
          )}
        </div>
        {errors.confirm && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.confirm}</p>}
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a] font-black text-sm
          rounded-xl hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5
          uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {loading ? (
          <><span className="w-4 h-4 border-2 border-[#0b1b3a]/30 border-t-[#0b1b3a] rounded-full animate-spin" /> Updating...</>
        ) : "Reset Password"}
      </button>
    </form>
  );
}

// ─── Step 4 : Success ────────────────────────────────────────────────────────
function StepSuccess({ navigate }) {
  useEffect(() => {
    const t = setTimeout(() => navigate("/authendication"), 3000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="text-center py-6 space-y-5">
      <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center mx-auto">
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
        <div className="h-full bg-amber-500 rounded-full animate-[shrink_3s_linear_forwards]" />
      </div>
      <NavLink to="/authendication"
        className="inline-block px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b1b3a]
          font-black text-sm rounded-xl uppercase tracking-widest hover:shadow-xl hover:shadow-amber-500/30 transition-all">
        Sign In Now
      </NavLink>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ForgotPassword() {
  const [step, setStep] = useState(0); // 0 email | 1 otp | 2 reset | 3 success
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8fafc] flex items-center justify-center p-4 py-10 sm:py-20 min-h-[calc(100vh-140px)]">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* ── Left Panel (decorative) ── */}
        <div className="lg:w-1/2 bg-[linear-gradient(rgba(15,23,42,0.82),rgba(15,23,42,0.82)),url('../assets/Images/authendication_img.jpg')]
          bg-cover bg-center p-12 flex-col justify-between relative overflow-hidden hidden lg:flex">

          {/* Decorative gears */}
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            <FaCogs size={200} />
          </div>
          <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none">
            <FaCogs size={150} />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-2.5 rounded-lg border border-gray-700">
                <FaCogs className="text-amber-500 text-2xl" style={{ animation: "spin-slow 10s linear infinite" }} />
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

          {/* Steps info */}
          <div className="relative z-10 mt-12 space-y-4">
            {[
              { icon: <FaEnvelope />, title: "Enter your email", desc: "We'll send a one-time password" },
              { icon: <FaShieldAlt />, title: "Verify OTP", desc: "Enter the 6-digit code" },
              { icon: <FaKey />, title: "Set new password", desc: "Choose a strong password" },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all
                ${step === i ? "bg-amber-500/10 border-amber-500/40" : "border-transparent"}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm
                  ${step > i ? "bg-amber-500 text-black" : step === i ? "bg-amber-500/20 text-amber-500" : "bg-gray-800 text-gray-500"}`}>
                  {step > i ? <FaCheckCircle /> : item.icon}
                </div>
                <div>
                  <p className={`font-bold text-sm ${step >= i ? "text-white" : "text-gray-500"}`}>{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Panel (form) ── */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="bg-gradient-to-br from-gray-800 to-black p-2 rounded-lg border border-gray-700">
              <FaCogs className="text-amber-500 text-xl" />
            </div>
            <span className="text-xl font-black text-[#0b1b3a] tracking-tighter">
              MECH<span className="text-[#f59e0b]">ZONE</span>
            </span>
          </div>

          {step < 3 && <StepBar current={step} />}

          {step === 0 && (
            <StepEmail onNext={(e) => { setEmail(e); setStep(1); }} />
          )}
          {step === 1 && (
            <StepOTP email={email} onNext={() => setStep(2)} onBack={() => setStep(0)} />
          )}
          {step === 2 && (
            <StepReset onDone={() => setStep(3)} />
          )}
          {step === 3 && (
            <StepSuccess navigate={navigate} />
          )}
        </div>

      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shrink { from { width: 100%; } to { width: 0%; } }
      `}</style>
    </div>
  );
}
