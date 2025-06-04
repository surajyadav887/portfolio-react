import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        {/* Prompt & Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Avi Raj</h2>
          <p className="text-sm text-gray-300 mb-4">
            We provide all kinds of websites including dynamic and static ones tailored to your business needs.
          </p>
          <div className="text-sm text-gray-400 space-y-1">
            <p>📍 <a href="https://maps.google.com" target="_blank" className="hover:text-purple-400">Bihar, India</a></p>
            <p>✉️ <a href="mailto:avirajportfolio@gmail.com" className="hover:text-purple-400">avirajportfolio@gmail.com</a></p>
            <p>📞 <a href="tel:+919999999999" className="hover:text-purple-400">+91 99999 99999</a></p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#services" className="hover:text-purple-400">Services</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-purple-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-purple-400"><FaGithub /></a>
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-400"><FaFacebookF /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-3">Subscribe for updates, design tips, and news.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full text-black w-full focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Avi Raj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
