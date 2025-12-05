import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/downtowninstitute", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com/downtowninstitute", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "https://instagram.com/downtowninstitute", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/downtowninstitute", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Mail, href: "mailto:info@downtowninstitute.com", label: "Email", color: "hover:bg-red-600" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - 3 Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Downtown Institute
            </h3>
            <p className="text-gray-400 text-sm mb-4">Excellence in Education</p>
            <p className="text-gray-500 text-xs">
              Empowering learners worldwide with quality education and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div> */}

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className={`bg-gray-800 p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Centered Stack */}
        <div className="md:hidden flex flex-col items-center space-y-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Askfield
            </h3>
            <p className="text-gray-400 text-sm">Excellence in Education</p>
          </div>

          {/* <nav className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav> */}

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                className={`bg-gray-800 p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm space-y-2">
          <p>© {currentYear} Downtown Institute. All rights reserved.</p>
          {/* <p className="text-xs text-gray-500">Made with ❤️ for quality education</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;