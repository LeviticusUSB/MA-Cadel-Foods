import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/cadel-logo.png" 
                alt="Cadel Food & Pastries Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Welcome to MA Cadel – your home for healthy local and continental dishes, top pastries, and convenient meal subscription offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors" aria-label="Send us an email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pastries" className="text-gray-400 hover:text-white transition-colors">Pastries</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Our Menu</h4>
            <ul className="space-y-2">
              <li><Link to="/pastries" className="text-gray-400 hover:text-white transition-colors">Artisan Pastries</Link></li>
              <li><Link to="/cakes" className="text-gray-400 hover:text-white transition-colors">Signature Cakes</Link></li>
              <li><Link to="/breads" className="text-gray-400 hover:text-white transition-colors">Fresh Breads</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-500">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new products and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white"
                aria-label="Email address for newsletter subscription"
              />
              <button className="bg-gold-600 hover:bg-gold-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Cadel Food & Pastries. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;