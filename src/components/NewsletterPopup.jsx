import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const STORAGE_KEY = "mz_nl_v3";
const DELAY_MS    = 2000;

const schema = object({
  email: string()
    .required("Email is required.")
    .email("Please enter a valid email address."),
});

export default function NewsletterPopup() {
  const [open, setOpen]           = useState(false);
  const [visible, setVisible]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 380);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (_, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setTimeout(close, 2500);
      }, 1000);
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;
  const hasError = touched.email && errors.email;

  if (!open) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={close}
        className="fixed inset-0 z-[998]"
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(2px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.38s ease",
        }}
      />

      {/* ── Centered Modal ── */}
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center px-4"
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            pointerEvents: "all",
            transform: visible ? "scale(1) translateY(0)" : "scale(0.9) translateY(24px)",
            opacity: visible ? 1 : 0,
            transition: "transform 0.42s cubic-bezier(.34,1.45,.64,1), opacity 0.35s ease",
          }}
          className="relative w-full max-w-[520px]"
        >
          {/* ── Outer striped/dashed border frame ── */}
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: `repeating-linear-gradient(
                -45deg,
                #c8c8c8 0px,
                #c8c8c8 6px,
                #ffffff 6px,
                #ffffff 14px
              )`,
              padding: "10px",
              borderRadius: "4px",
            }}
          />

          {/* ── White inner card ── */}
          <div className="relative m-[10px] bg-white px-8 py-10 rounded-sm">

            {/* Close ── */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-[42px] right-0 w-7 h-7 bg-white rounded-sm
                flex items-center justify-center text-gray-600 hover:text-red-500
                font-black text-base transition-colors z-10 shadow-sm"
            >
              <FaTimes size={13} />
            </button>

            {!submitted ? (
              <div className="flex flex-col items-center text-center gap-5">

                {/* Heading */}
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-black uppercase tracking-wide nl-heading"
                    style={{ color: "#c8960a" }}
                  >
                    Get In Touch
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Come To Those Who Sign Up For Our Newsletter
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="w-full space-y-3"
                >
                  {/* Email input */}
                  <div className="relative">
                    <input
                      id="nl-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-3.5 rounded-full border text-sm text-gray-700
                        bg-white focus:outline-none transition-all duration-200 text-center
                        placeholder:text-gray-400
                        ${hasError
                          ? "border-red-400 focus:border-red-400"
                          : touched.email && !errors.email && values.email
                            ? "border-green-400 focus:border-green-400"
                            : "border-gray-300 focus:border-[#c8960a]"
                        }`}
                    />
                    {touched.email && !errors.email && values.email && (
                      <FaCheckCircle
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                        size={14}
                      />
                    )}
                  </div>

                  {/* Validation error */}
                  {hasError && (
                    <p className="flex items-center justify-center gap-1.5 text-red-500 text-xs font-semibold">
                      <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center text-[8px] font-black flex-shrink-0">!</span>
                      {errors.email}
                    </p>
                  )}

                  {/* Subscribe button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3 font-black text-sm uppercase tracking-widest
                      text-white rounded-sm transition-all duration-200
                      hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg
                      disabled:opacity-60 disabled:cursor-not-allowed
                      flex items-center justify-center gap-2 mx-auto"
                    style={{ background: "#0f1f45", minWidth: "160px" }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : "Subscribe"}
                  </button>
                </form>

              </div>
            ) : (
              /* ── Success state ── */
              <div className="flex flex-col items-center gap-4 py-4 nl-success">
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle
                      cx="32" cy="32" r="28"
                      fill="none" stroke="#c8960a" strokeWidth="3"
                      strokeDasharray="175" strokeDashoffset="175"
                      style={{ animation: "nlRingDraw 0.7s ease forwards 0.1s" }}
                    />
                  </svg>
                  <FaCheckCircle
                    className="absolute inset-0 m-auto text-[#c8960a] text-2xl"
                    style={{ animation: "nlCheckPop 0.4s cubic-bezier(.36,.07,.19,.97) both 0.55s" }}
                  />
                </div>
                <h3 className="font-black text-[#0f1f45] text-xl uppercase tracking-wide">
                  You're Subscribed!
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
                  Thank you! Exclusive MechZone deals are heading your way.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .nl-heading {
          animation: nlFadeDown 0.5s ease both 0.2s;
        }
        @keyframes nlFadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nl-success {
          animation: nlFadeUp 0.4s ease both;
        }
        @keyframes nlFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nlRingDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes nlCheckPop {
          0%  { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.25); opacity: 1; }
          100%{ transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
