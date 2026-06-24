import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const STORAGE_KEY = "mz_nl_v3";
const DELAY_MS = 2000;

const schema = object({
  email: string()
    .required("Email is required.")
    .email("Please enter a valid email address."),
});

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
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
      {/* Backdrop overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[998] bg-black/45 backdrop-blur-[2px] transition-opacity duration-[380ms] ease-out ${visible ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* ── Centered Modal ── */}
      <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 pointer-events-none">
        {/* Modal Wrapper Container */}
        <div
          className={`relative w-full max-w-[520px] pointer-events-auto transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(.34,1.45,.64,1)] ${visible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-90 translate-y-6 opacity-0"
            }`}
        >
          {/* ── Outer striped/dashed border frame (FIXED WITH STYLE FOR MAXIMUM COMPATIBILITY) ── */}
          <div
            className="absolute inset-0 rounded-[4px] p-2.5"
            style={{
              background: "repeating-linear-gradient(-45deg,#1e3663 0px, #1e3663 6px, #ffffff 6px, #ffffff 14px)"
            }}
          />

          {/* ── White inner card ── */}
          <div className="relative m-2.5 bg-white px-8 py-10 rounded-sm"> 
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
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-amber-500 animate-[nlFadeDown_0.5s_ease_both_0.2s]">
                    Get In Touch
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Come To Those Who Sign Up For Our Newsletter
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="w-full space-y-3">
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
                      <span className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center text-[8px] font-black flex-shrink-0">
                        !
                      </span>
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
                  flex items-center justify-center gap-2 mx-auto
                  bg-[#0f1f45] min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* ── Success state ── */
              <div className="flex flex-col items-center gap-4 py-4 animate-[nlFadeUp_0.4s_ease_both]">
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#c8960a"
                      strokeWidth="3"
                      strokeDasharray="175"
                      strokeDashoffset="175"
                      className="animate-[nlRingDraw_0.7s_ease_forwards_0.1s]"
                    />
                  </svg>
                  <FaCheckCircle
                    className="absolute inset-0 m-auto text-[#c8960a] text-2xl animate-[nlCheckPop_0.4s_cubic-bezier(.36,.07,.19,.97)_both_0.55s]"
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

    </>
  );
}
