import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const prompts = [
  "We are Webala",
  "We are a tech family",
  "We build brands",
  "We craft digital dreams",
  "We design. We develop. We deliver",
];



const Herosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prompts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 min-h-[3.5rem]">
  <AnimatePresence mode="wait">
    <motion.span
      key={prompts[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="block bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent"
    >
      {prompts[index]}
    </motion.span>
  </AnimatePresence>
</h1>



          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Every project we take on is unique — and delivered within 10 to 30
            days, depending on scale. No templates. No shortcuts. Just pure
            creative focus tailored for your brand. <br />
            Let’s build something unforgettable — together.
          </motion.p>

          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Image or Illustration */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://via.placeholder.com/350x350.png?text=Your+Photo"
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-indigo-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
