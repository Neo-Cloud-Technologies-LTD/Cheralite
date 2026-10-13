import React from "react";
import { motion } from "motion/react";

const Contact2 = () => {
  return (
    <section className="w-full bg-[#faf9f7] px-6 py-[120px] overflow-hidden">
      <div className="mx-auto grid max-w-[1232px] grid-cols-1 gap-8 lg:grid-cols-[705px_1fr]">
        
        {/* ================= FORM CARD ================= */}
        <motion.div 
          className="rounded-[4px] border border-[#dedede] bg-white px-12 py-[50px] shadow-[0_8px_25px_rgba(0,0,0,0.03)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-[36px] text-[30px] font-semibold leading-none tracking-[-0.5px] text-[#002b78]">
            Send an Inquiry
          </h2>

          <form>
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-[17px] block text-[12px] font-medium text-[#555]"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border-0 border-b border-[#c9cbd5] bg-transparent pb-[10px] text-[16px] text-[#77798a] outline-none placeholder:text-[#77798a] focus:border-[#002b78] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-[17px] block text-[12px] font-medium text-[#555]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full border-0 border-b border-[#c9cbd5] bg-transparent pb-[10px] text-[16px] text-[#77798a] outline-none placeholder:text-[#77798a] focus:border-[#002b78] transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-[25px]">
              <label
                htmlFor="subject"
                className="mb-[17px] block text-[12px] font-medium text-[#555]"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Project Consultation"
                className="w-full border-0 border-b border-[#c9cbd5] bg-transparent pb-[10px] text-[16px] text-[#77798a] outline-none placeholder:text-[#77798a] focus:border-[#002b78] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="mt-[25px]">
              <label
                htmlFor="message"
                className="mb-[17px] block text-[12px] font-medium text-[#555]"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="4"
                placeholder="Please provide details about your project or inquiry..."
                className="min-h-[130px] w-full resize-none rounded-[2px] border border-[#c9cbd5] bg-white px-4 py-4 text-[16px] text-[#77798a] outline-none placeholder:text-[#77798a] focus:border-[#002b78] transition-colors"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="mt-[46px] inline-flex h-[56px] items-center gap-3 rounded-[10px] bg-[#002b78] px-[32px] text-[14px] font-semibold tracking-[0.4px] text-white transition-all duration-200 hover:bg-[#001f5a]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit Inquiry
              <span className="text-[23px] leading-none">→</span>
            </motion.button>
          </form>
        </motion.div>

        {/* ================= OFFICE CARD ================= */}
        <div>
          <motion.div 
            className="min-h-[578px] rounded-[4px] bg-[#25292b] px-12 py-[138px] text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-[36px] text-[32px] font-medium leading-none tracking-[-0.5px]">
              Corporate Office
            </h2>

            <div className="space-y-[27px]">
              
              {/* Address */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="mt-[2px] flex w-4 shrink-0 justify-center text-[#a9adaf]">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                </div>

                <div>
                  <p className="mb-[7px] text-[11px] font-medium uppercase tracking-[1.4px] text-[#9fa3a5]">
                    Address
                  </p>

                  <p className="text-[15px] leading-[1.7] text-[#f1f1f1]">
                    100 Architectural Way,
                    <br />
                    Suite 400,
                    <br />
                    Metropolis, NY 10001
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <div className="mt-[2px] flex w-4 shrink-0 justify-center text-[#a9adaf]">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>

                <div>
                  <p className="mb-[7px] text-[11px] font-medium uppercase tracking-[1.4px] text-[#9fa3a5]">
                    Email
                  </p>

                  <p className="text-[15px] text-[#f1f1f1]">
                    inquiries@cheralite.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="mt-[2px] flex w-4 shrink-0 justify-center text-[#a9adaf]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>

                <div>
                  <p className="mb-[7px] text-[11px] font-medium uppercase tracking-[1.4px] text-[#9fa3a5]">
                    Phone
                  </p>

                  <p className="text-[15px] text-[#f1f1f1]">
                    +1 (555) 019-8273
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Bottom divider */}
          <motion.div 
            className="mt-8 h-[2px] w-full bg-[#e2e0de]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact2;