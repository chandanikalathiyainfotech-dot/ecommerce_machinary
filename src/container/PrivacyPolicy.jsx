import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaShieldAlt, FaUserSecret, FaCookieBite, FaLock,
  FaShareAlt, FaChild, FaEnvelope, FaChevronRight,
  FaChevronUp
} from "react-icons/fa";

const sections = [
  {
    id: "collection",
    icon: <FaUserSecret />,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you register, place an order, or contact us, we collect information such as your name, email address, phone number, billing and shipping address, and payment details (processed securely via third-party providers).",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect information about how you interact with our website — including IP address, browser type, pages visited, time spent on pages, referring URLs, and device information.",
      },
      {
        subtitle: "Cookies & Tracking",
        text: "We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, remember preferences, and analyse site traffic. You may control cookie settings through your browser.",
      },
    ],
  },
  {
    id: "use",
    icon: <FaLock />,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Order Processing",
        text: "We use your data to process and fulfil orders, send order confirmations, and provide shipping and delivery updates.",
      },
      {
        subtitle: "Customer Support",
        text: "Your information helps us respond to enquiries, resolve disputes, and troubleshoot problems efficiently.",
      },
      {
        subtitle: "Personalisation & Marketing",
        text: "With your consent, we may send promotional emails, newsletters, and product recommendations. You may unsubscribe at any time via the link in every email.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may process your data to comply with applicable laws, regulations, or legal proceedings.",
      },
    ],
  },
  {
    id: "sharing",
    icon: <FaShareAlt />,
    title: "Information Sharing",
    content: [
      {
        subtitle: "Service Providers",
        text: "We share data with trusted third parties who assist in operating our website — including payment processors, logistics partners, and analytics providers — under strict confidentiality agreements.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information when required by law, court order, or government authority, or to protect the rights and safety of MechZone, our customers, or others.",
      },
    ],
  },
  {
    id: "cookies",
    icon: <FaCookieBite />,
    title: "Cookies Policy",
    content: [
      {
        subtitle: "Essential Cookies",
        text: "These are necessary for the website to function correctly — enabling shopping cart functionality, secure login sessions, and payment processing.",
      },
      {
        subtitle: "Analytics Cookies",
        text: "We use Google Analytics and similar tools to understand how visitors interact with our website, which helps us improve content and performance.",
      },
      {
        subtitle: "Marketing Cookies",
        text: "These track your browsing to show relevant advertisements on third-party websites. You can opt out through our cookie settings.",
      },
    ],
  },
  {
    id: "rights",
    icon: <FaShieldAlt />,
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access, update, or correct any personal information we hold about you. Log in to your account or contact us directly.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal data, subject to our legal obligations to retain certain records.",
      },
      {
        subtitle: "Data Portability",
        text: "You may request a copy of your personal data in a structured, commonly used, and machine-readable format.",
      },
      {
        subtitle: "Objection & Restriction",
        text: "You may object to or request restriction of certain data processing activities, including direct marketing.",
      },
    ],
  },
  {
    id: "children",
    icon: <FaChild />,
    title: "Children's Privacy",
    content: [
      {
        subtitle: "Age Restriction",
        text: "MechZone is not directed at children under the age of 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal data, please contact us immediately.",
      },
    ],
  },
  {
    id: "contact",
    icon: <FaEnvelope />,
    title: "Contact Us",
    content: [
      {
        subtitle: "Privacy Enquiries",
        text: "For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer at privacy@mechzone.com or write to us at: MechZone Industrial Pro, Plot #123, Industrial Estate, Ahmedabad, Gujarat 380006, India.",
      },
    ],
  },
];

function AccordionItem({ section, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-amber-400 shadow-md shadow-amber-500/10" : "border-gray-100"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-3">
          <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all
            ${open ? "bg-amber-500 text-[#0b1b3a]" : "bg-gray-100 text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500"}`}>
            {section.icon}
          </span>
          <span className={`font-black text-base transition-colors ${open ? "text-[#0b1b3a]" : "text-gray-600 group-hover:text-[#0b1b3a]"}`}>
            {section.title}
          </span>
        </div>
        <FaChevronUp className={`text-amber-500 text-xs transition-transform duration-300 flex-shrink-0 ${open ? "rotate-0" : "rotate-180"}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 space-y-4 border-t border-gray-50">
          {section.content.map((block, i) => (
            <div key={i} className="pt-4">
              <p className="font-bold text-[#0b1b3a] text-sm mb-1.5">{block.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0b1b3a] to-[#1a3a6a] py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <NavLink to="/" className="hover:text-amber-500 transition-colors">Home</NavLink>
            <FaChevronRight className="text-xs text-gray-600" />
            <span className="text-amber-400 font-semibold">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <FaShieldAlt className="text-amber-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
              <p className="text-gray-400 text-sm mt-1">Last updated: June 24, 2026</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-5 max-w-2xl leading-relaxed">
            At MechZone, your privacy is our priority. This policy explains what data we collect, how we use it, and the rights you have over your personal information.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 ">

            {/* Sticky sidebar nav */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-2">Contents</p>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-amber-500 hover:bg-amber-50 transition-all font-medium group">
                    <span className="text-amber-500 text-xs group-hover:scale-125 transition-transform">{s.icon}</span>
                    {s.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Accordion */}
            <div className="flex-1 space-y-3">
              {sections.map((s, i) => (
                <div key={s.id} id={s.id}>
                  <AccordionItem section={s} index={i} />
                </div>
              ))}

              {/* Last updated note */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 mt-6">
                <FaShieldAlt className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  <span className="font-bold">Policy Updates:</span> We may update this Privacy Policy from time to time. We'll notify you of significant changes by email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 lg:bottom-8 z-40 w-10 h-10 bg-amber-500 hover:bg-amber-400 text-black rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-0.5">
          <FaChevronUp />
        </button>
      )}
    </main>
  );
}
