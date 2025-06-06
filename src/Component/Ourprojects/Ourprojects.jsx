import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaSchool,
  FaHospitalSymbol,
  FaUniversity,
  FaRing,
  FaShoppingBasket,
} from "react-icons/fa";

const projects = [
  {
    title: "Grocery Delivery",
    icon: <FaShoppingBasket className="text-pink-500 text-2xl" />,
    description:
      "A user-friendly grocery delivery platform that allows customers to browse products, add items to cart, and place orders with real-time status updates.",
    tech: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    link: "https://grocery-ui-one.vercel.app/login",
    shadowColor: "hover:shadow-[0_4px_24px_rgba(236,72,153,0.4)]", // Pink
  },
  {
    title: "School Management System",
    icon: <FaSchool className="text-blue-600 text-2xl" />,
    description:
      "A full-featured school management system to handle admissions, attendance, student progress, and teacher coordination — all in one dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Git"],
    link: "https://school-web-eta-seven.vercel.app/",
    shadowColor: "hover:shadow-[0_4px_24px_rgba(37,99,235,0.4)]", // Blue
  },
  {
    title: "Institute Management System",
    icon: <FaUniversity className="text-green-600 text-2xl" />,
    description:
      "A scalable solution for educational institutions with features like student enrollment, faculty modules, payment tracking, and reporting tools.",
    tech: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    link: "https://institute-frontend-mocha.vercel.app/",
    shadowColor: "hover:shadow-[0_4px_24px_rgba(22,163,74,0.4)]", // Green
  },
  {
    title: "Marriage Hall Booking",
    icon: <FaRing className="text-red-500 text-2xl" />,
    description:
      "A modern marriage hall booking portal where users can check availability, explore event packages, and book halls online with integrated payment options.",
    tech: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    link: "https://mairage-ract.vercel.app/",
    shadowColor: "hover:shadow-[0_4px_24px_rgba(239,68,68,0.4)]", // Red
  },
  {
    title: "Admission Counseling Platform",
    icon: <FaHospitalSymbol className="text-purple-500 text-2xl" />,
    description:
      "An intuitive platform to guide students through the admission process — includes university listings, real-time counseling, and document submission.",
    tech: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    link: "https://fastadmissionportal.onrender.com/",
    shadowColor: "hover:shadow-[0_4px_24px_rgba(168,85,247,0.4)]", // Purple
  },
];

const Ourprojects = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-blue-800 font-playfair">
    Our Deployed Projects in the Market
  </h2>
  <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto font-playfair">
    We’ve built and launched real-world projects for various industries. These applications are helping businesses operate more efficiently and connect with users globally.
  </p>
</div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`border border-gray-200 p-6 rounded-xl bg-white shadow-sm transition-all duration-300 transform hover:scale-[1.03] ${project.shadowColor}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              {project.icon}
              <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sky-700 hover:underline inline-flex items-center gap-1"
            >
              Visit Site <FaExternalLinkAlt size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ourprojects;
