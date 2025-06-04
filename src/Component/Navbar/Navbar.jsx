// PortfolioNavbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Projects", "Skills", "Contact"];

export default function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-indigo-600"
          whileHover={{ scale: 1.1 }}
        >
          We Webala
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-indigo-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white px-6 pb-4 space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
