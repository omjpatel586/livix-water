"use client";

import axios from "axios";
import { useState } from "react";

export default function GetInTouch({ baseUrl }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitMail = async () => {
    return await axios.post(`${baseUrl}/inquiry/mail/send`, formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prevent multiple triggers if already loading
    if (loading) return;

    // Handle form submission logic here
    setLoading(true);
    const response = await submitMail();

    if (response.status === 200) {
      alert("Thank you! We will get in touch shortly.");
      setLoading(false);
    } else {
      alert("Something went wrong! Please try after some time.");
    }
  };

  return (
    <section id="contact" className="pt-30 pb-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-livix-aqua rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch with Livix</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about our mineral water or interested in distributorship? Fill out the
            form below and our team will reach out to you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-livix-light rounded-2xl shadow-xl overflow-hidden border border-blue-50 flex flex-col md:flex-row">
          {/* Contact Information Side */}
          <div className="bg-brand-blue p-8 md:p-12 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

            <div className="relative z-10">
              <h4 className="text-2xl text-black font-bold mb-6">Contact Information</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Your journey to superior hydration starts here. From individual Qvik bottles to full
                distribution boxes, we provide tailored water solutions for homes and businesses.
                Reach out today or tour our state-of-the-art facility in Surat to see how we bottle
                excellence.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0 text-livix-aqua"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-black">Factory Address</p>
                    <p className="text-slate-600 text-sm mt-1">
                      Jokha Village, Kamrej, Surat, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0 text-livix-aqua"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <p className="text-slate-600 text-sm mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0 text-livix-aqua"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <p className="text-slate-600 text-sm mt-1">contact@livixwater.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 md:w-3/5 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white placeholder:text-slate-400 text-black"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white placeholder:text-slate-400 text-black"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white placeholder:text-slate-400 text-black"
                  placeholder="Street, Area, City"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white placeholder:text-slate-400 text-black"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white resize-none placeholder:text-slate-400 text-black"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 px-8 rounded-lg bg-livix-deep transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer hover:bg-slate-200 hover:text-black"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
