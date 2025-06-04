// PortfolioNavbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// ⬇️ Import your logo image
import logo from "../../assets/webla1.png"; // Update this path as needed

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
  className="flex items-center gap-4 group"
  whileHover={{ scale: 1.1 }}
>
  {/* Logo with glowing gradient border and blob shape */}
  <div className="relative w-16 h-16 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg">
    <div className="absolute inset-0 z-0 animate-spin-slow bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-lg opacity-30"></div>
    <img
      src={logo}
      alt="Logo"
      className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/20 backdrop-blur-md"
    />
  </div>

  {/* Text with double color + inner glow + subtle shine */}
  <div className="relative">
    <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-pink-600 drop-shadow-lg">
      <span className="inline-block animate-glow">Web</span>
      <span className="text-indigo-500 animate-glow delay-200">la</span>
    </h1>

    {/* Shine line */}
    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/30 opacity-0 group-hover:opacity-100 animate-shine" />
  </div>
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
