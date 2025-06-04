import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mark Kozlowski",
    company: "GoodFirms",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GoodFirms_logo.png/320px-GoodFirms_logo.png",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    feedback:
      "I have worked with 75Way for a number of years because they are consistent and they are professional. Having someone reliable to work with is a blessing when I am trying to grow my business. I have 20 internal developers, and hire 2 monthly from 75Way. They supplement my team so that I can remain agile.",
  },
  {
    name: "Kevin Mohl",
    company: "Clutch",
    logo: "https://1000logos.net/wp-content/uploads/2021/09/Clutch-Logo-768x432.png",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
    feedback:
      "The team at 75Way is reliable, fast, and top-notch. They’ve helped us scale quickly without compromising quality or communication. I’m glad we chose them.",
  },
  {
    name: "Sophia Lee",
    company: "Upwork",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Upwork-logo.svg",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "A seamless experience from beginning to end. 75Way truly understands how to deliver exactly what the client needs. Great design and development team!",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 2000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            What Client Says
          </h2>
          <h3 className="text-2xl font-bold text-sky-900">About Us</h3>
          <p className="text-gray-600 text-base">
            We are good and best at what we do. Our client’s words of
            appreciation itself speak about the quality work we deliver. Check
            it out.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="p-3 bg-sky-900 text-white rounded-full hover:bg-sky-700"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="p-3 bg-sky-900 text-white rounded-full hover:bg-sky-700"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full h-auto"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="w-full">
                  <p className="text-gray-700 text-base sm:text-lg italic mb-3">
                    “{testimonial.feedback}”
                  </p>
                  <p className="font-bold text-black text-lg">
                    {testimonial.name}
                  </p>
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="mt-2 h-6 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
