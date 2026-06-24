import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFileContract, FaShoppingCart, FaTruck, FaUndo,
  FaBan, FaGavel, FaChevronRight, FaChevronUp,
  FaExclamationTriangle, FaHandshake
} from "react-icons/fa";

const sections = [
  {
    id: "acceptance",
    icon: <FaHandshake />,
    title: "Acceptance of Terms",
    badge: null,
    content: [
      {
        subtitle: "Agreement",
        text: "By accessing or using the MechZone website, mobile application, or any of our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.",
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years of age and capable of forming a legally binding contract to use our services. By using MechZone, you represent and warrant that you meet these requirements.",
      },
    ],
  },
  {
    id: "orders",
    icon: <FaShoppingCart />,
    title: "Orders & Payments",
    badge: "Important",
    content: [
      {
        subtitle: "Order Placement",
        text: "By placing an order, you make an offer to purchase products at the listed price. MechZone reserves the right to accept or decline any order. An order is confirmed only after you receive a written confirmation email from us.",
      },
      {
        subtitle: "Pricing & Availability",
        text: "All prices are in Indian Rupees (INR) unless otherwise stated and are subject to change without notice. We reserve the right to correct pricing errors. Product availability is not guaranteed until an order is confirmed.",
      },
      {
        subtitle: "Payment Security",
        text: "We accept payments via credit/debit cards, UPI, net banking, and other methods as displayed. All transactions are processed through PCI-DSS compliant payment gateways. MechZone does not store your full card details.",
      },
      {
        subtitle: "GST & Taxes",
        text: "All applicable GST, taxes, and duties are included in or added to the displayed price as required by Indian law. A GST invoice will be provided for every purchase.",
      },
    ],
  },
  {
    id: "shipping",
    icon: <FaTruck />,
    title: "Shipping & Delivery",
    badge: null,
    content: [
      {
        subtitle: "Delivery Timelines",
        text: "Estimated delivery times are provided at checkout and are approximate. MechZone is not responsible for delays caused by couriers, customs, natural events, or other circumstances beyond our control.",
      },
      {
        subtitle: "Shipping Charges",
        text: "Shipping fees are calculated based on weight, dimensions, destination, and selected delivery method. Free shipping may be offered on orders above a minimum cart value as communicated on the website.",
      },
      {
        subtitle: "Risk of Loss",
        text: "Title and risk of loss for products passes to you upon delivery to the specified address. MechZone is not liable for items lost or damaged after confirmed delivery.",
      },
    ],
  },
  {
    id: "returns",
    icon: <FaUndo />,
    title: "Returns & Refunds",
    badge: null,
    content: [
      {
        subtitle: "Return Window",
        text: "Most products may be returned within 7 days of delivery in unused, original condition with all packaging intact. Certain items — including custom-fabricated parts, consumables, and hazardous materials — are non-returnable.",
      },
      {
        subtitle: "Refund Process",
        text: "Upon receipt and inspection of the returned item, refunds will be processed within 7–10 business days to the original payment method. Shipping charges are non-refundable unless the return is due to our error.",
      },
      {
        subtitle: "Damaged or Defective Items",
        text: "If you receive a damaged or defective item, notify us within 48 hours of delivery with photographs. We will arrange a replacement or full refund at our discretion.",
      },
    ],
  },
  {
    id: "prohibited",
    icon: <FaBan />,
    title: "Prohibited Activities",
    badge: "Strict",
    content: [
      {
        subtitle: "Misuse of Services",
        text: "You agree not to use MechZone services for any unlawful purpose, to transmit harmful or malicious code, to attempt unauthorised access to our systems, to scrape or harvest data, or to engage in any activity that disrupts our services.",
      },
      {
        subtitle: "Intellectual Property",
        text: "All content on this website — including text, images, logos, product descriptions, and software — is the exclusive property of MechZone or its licensors. Reproduction, distribution, or use without written permission is strictly prohibited.",
      },
      {
        subtitle: "Account Misuse",
        text: "You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account, impersonate others, or create multiple accounts for fraudulent purposes.",
      },
    ],
  },
  {
    id: "liability",
    icon: <FaExclamationTriangle />,
    title: "Limitation of Liability",
    badge: null,
    content: [
      {
        subtitle: "Disclaimer",
        text: "MechZone provides services on an 'as is' and 'as available' basis without warranties of any kind. We do not guarantee uninterrupted, error-free service or that the website is free from viruses or harmful components.",
      },
      {
        subtitle: "Liability Cap",
        text: "To the maximum extent permitted by applicable law, MechZone's total liability for any claim arising from use of our services shall not exceed the amount you paid for the specific product or service giving rise to the claim.",
      },
      {
        subtitle: "Consequential Damages",
        text: "MechZone shall not be liable for indirect, incidental, special, or consequential damages — including lost profits, loss of data, or business interruption — even if advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "governing",
    icon: <FaGavel />,
    title: "Governing Law & Disputes",
    badge: null,
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
      },
      {
        subtitle: "Dispute Resolution",
        text: "Before initiating legal proceedings, the parties agree to attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996.",
      },
    ],
  },
];

function AccordionItem({ section, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-amber-400 shadow-md shadow-amber-500/10" : "border-gray-100"}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group">
        <div className="flex items-center gap-3">
          <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all
            ${open ? "bg-amber-500 text-[#0b1b3a]" : "bg-gray-100 text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500"}`}>
            {section.icon}
          </span>
          <span className={`font-black text-base transition-colors ${open ? "text-[#0b1b3a]" : "text-gray-600 group-hover:text-[#0b1b3a]"}`}>
            {section.title}
          </span>
          {section.badge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide
              ${section.badge === "Strict" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-700"}`}>
              {section.badge}
            </span>
          )}
        </div>
        <FaChevronUp className={`text-amber-500 text-xs flex-shrink-0 transition-transform duration-300 ${open ? "rotate-0" : "rotate-180"}`} />
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

export default function TermsOfService() {
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
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <NavLink to="/" className="hover:text-amber-500 transition-colors">Home</NavLink>
            <FaChevronRight className="text-xs text-gray-600" />
            <span className="text-amber-400 font-semibold">Terms of Service</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <FaFileContract className="text-amber-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Terms of Service</h1>
              <p className="text-gray-400 text-sm mt-1">Effective: June 24, 2026</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-5 max-w-2xl leading-relaxed">
            Please read these Terms carefully before using MechZone. They govern your access to and use of our platform, products, and services.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sticky sidebar */}
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

              {/* Contact strip */}
              <div className="bg-[#0b1b3a] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                <div>
                  <p className="font-black text-white text-base">Questions about our Terms?</p>
                  <p className="text-gray-400 text-sm mt-0.5">Our legal team is ready to help you.</p>
                </div>
                <NavLink to="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#0b1b3a] font-black text-sm rounded-xl transition-all flex-shrink-0">
                  Contact Us <FaChevronRight className="text-xs" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 lg:bottom-8 z-40 w-10 h-10 bg-amber-500 hover:bg-amber-400 text-black rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-0.5">
          <FaChevronUp />
        </button>
      )}
    </main>
  );
}
