import React from "react";
import { motion } from "framer-motion";

const developers = [
  {
    name: "Avi Raj",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    desc: "Crafts modern, responsive UIs using React and Tailwind CSS with attention to pixel-perfect details.",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    desc: "Designs seamless user journeys and sleek visual interfaces that prioritize usability and aesthetics.",
  },
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    desc: "Handles frontend to backend with expertise in MERN stack and REST API architecture.",
  },
  {
    name: "Neha Patel",
    role: "React Developer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    desc: "Develops dynamic SPAs with reusable components and clean state management.",
  },
  {
    name: "Aman Yadav",
    role: "Mobile App Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    desc: "Builds powerful cross-platform apps using React Native and Flutter with smooth animations.",
  },
  {
    name: "Sneha Gupta",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Creates visually rich, accessible websites with performance in mind.",
  },
];

const Aboutdevelopers = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-indigo-100 rounded-2xl shadow-md p-4 sm:p-6 text-center transition-all hover:bg-indigo-50 hover:shadow-lg"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-indigo-300">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-700 transition">
                {dev.name}
              </h3>
              <p className="text-xs text-indigo-600 font-medium mb-1">
                {dev.role}
              </p>
              <p className="text-xs text-gray-600">{dev.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutdevelopers;
