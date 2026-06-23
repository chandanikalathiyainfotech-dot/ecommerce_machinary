
import { useFormik } from "formik";
import React from "react";
console.log(React);

import {
  FaMapMarkerAlt, FaEnvelope, FaClock,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { object, string } from "yup";

function Contact() {

  const authschema = object({
    fname: string().required(),
    lname: string().required(),
    email: string().email().required(),
    subject: string().required(),
    message: string().required(),
  })


  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      subject: '',
      message: '',
    },
    enableReinitialize: true,
    validationSchema: authschema,
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);

      resetForm();
    },
  })

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } = formik;
  console.log("errors:", errors);

  return (
    <main>
      <section className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e2e8f0] py-8 sm:py-12 lg:py-20 !mt-0">
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-3">
              <span className="text-amber-600 text-xs font-semibold tracking-wide">Get In Touch</span>
            </div>
            {/* <span className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-600">
                Get In Touch
              </span> */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-[#0b1b3a] mb-3">Contact Us</h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-lg max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            {/* Contact Information */}
            <div className="col-span-12 min-[992px]:col-span-5 col-span-6 space-y-4 sm:space-y-6">
              {/* Info Cards */}
              <div className="grid gap-3 sm:gap-6">
                {/* Location */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#0b1b3a] text-base sm:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-bold text-[#0b1b3a] mb-1">Our Location</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Plot No. 123, Odhav Industrial Estate, Ahmedabad, Gujarat 380038
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <MdCall className="text-amber-500 text-base sm:text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-bold text-[#0b1b3a] mb-1">Phone Number</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">+91 79 1234 5678</p>
                      <p className="text-gray-600 text-xs sm:text-sm">+91 9876 543 210</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-[#0b1b3a] text-base sm:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-bold text-[#0b1b3a] mb-1">Email Address</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">info@mechzone.com</p>
                      <p className="text-gray-600 text-xs sm:text-sm">support@mechzone.com</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 hover:border-amber-500 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-amber-500 text-base sm:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-bold text-[#0b1b3a] mb-1">Working Hours</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100">
                <h3 className="text-sm sm:text-lg font-bold text-[#0b1b3a] mb-3">Follow Us</h3>
                <div className="flex gap-2 sm:gap-3">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#0b1b3a]/10 flex items-center justify-center text-[#0b1b3a] hover:bg-amber-500 hover:text-[#0b1b3a] transition-all"
                    >
                      <Icon className="sm:text-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-12 min-[992px]:col-span-7 col-span-6 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-lg sm:text-2xl font-bold text-[#0b1b3a] mb-4 sm:mb-6">Send Us a Message</h3>
              <form className="space-y-3 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div>
                    <label className="block text-[#0b1b3a] font-semibold mb-1 text-xs sm:text-sm">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-xs sm:text-sm"
                      placeholder="Your first name"
                      name="fname"
                      id="fname"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fname && touched.fname && <span className="text-red-500 text-sm">{errors.fname}</span>}
                  </div>
                  <div>
                    <label className="block text-[#0b1b3a] font-semibold mb-1 text-xs sm:text-sm">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-xs sm:text-sm"
                      placeholder="Your last name"
                      name="lname"
                      id="lname"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lname && touched.lname && <span className="text-red-500 text-sm">{errors.lname}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-[#0b1b3a] font-semibold mb-1 text-xs sm:text-sm">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-xs sm:text-sm"
                    placeholder="your@email.com"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div>
                  <label className="block text-[#0b1b3a] font-semibold mb-1 text-xs sm:text-sm">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 text-xs sm:text-sm"
                    placeholder="How can we help you?"
                    name="subject"
                    id="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && touched.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
                </div>
                <div>
                  <label className="block text-[#0b1b3a] font-semibold mb-1 text-xs sm:text-sm">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-all bg-gray-50 resize-none text-xs sm:text-sm"
                    placeholder="Your message here..."
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && touched.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>
                
                <button
                  type="submit"
                  className="group relative block w-full px-6 py-3 font-semibold text-[14px] text-center bg-[var(--secondary-color)] border border-[var(--secondary-color)]
                            rounded overflow-hidden transition-colors duration-300 ease-in-out text-white hover:border-amber-400"
                >
                  <span className="absolute bottom-0 left-0 w-full h-full bg-amber-400 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10">Send Message</span>
                </button>

              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.12908061268!2d72.61885505661937!3d23.039541768446256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e875c0d1c8b8d%3A0x9a6b3a2c0b8a0f5c!2sOdhav%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718119000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="sm:h-[300px] lg:h-[400px]"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
