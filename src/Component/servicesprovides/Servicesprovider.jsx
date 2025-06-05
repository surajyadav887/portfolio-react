import React from "react";
import { motion } from "framer-motion";

import appImage from "../../assets/website.png";
import image1 from "../../assets/app.png";

const services = [
  {
    image: image1,
    title: "App Development",
    description:
      "We build seamless mobile applications tailored to your business needs, ensuring top performance and user engagement.",
    prompt: "Let’s build your next app →",
  },
  {
    image: appImage,
    title: "Website Development",
    description:
      "From beautiful UI to secure backend, we create responsive websites that grow your business online.",
    prompt: "Launch your website today →",
  },
];

const Servicesprovider = () => {
  return (
    <section
      className="pt-20 pb-14 bg-gradient-to-br from-white to-slate-100"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-indigo-600">Services</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Currently, we specialize in building world-class websites and mobile
          apps. But this is just the beginning — in the coming days, we're
          gearing up to solve even bigger problems through innovation,
          automation, and design thinking. Stay tuned, the future is just
          getting started.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-5 text-left group transition-all duration-300 hover:shadow-xl hover:ring-1 hover:ring-indigo-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-40 md:h-60 object-cover rounded-xl mb-5 group-hover:scale-[1.02] transition-transform duration-300"
              />

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-sm sm:text-base"
              >
                {service.prompt}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicesprovider;
