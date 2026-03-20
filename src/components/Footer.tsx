import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-white">
            A&N <span className="text-emerald-500">Craft House</span>
          </Link>
          <p className="text-sm leading-relaxed text-stone-400">
            Bringing art into every heart and home. We celebrate creativity, craftsmanship, and diversity through our handmade art and inclusive workshops.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-medium mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
            <li><Link to="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
            <li><Link to="/custom-orders" className="hover:text-white transition-colors">Custom Orders</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-medium mb-6">Categories</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shop?category=Lippan Art" className="hover:text-white transition-colors">Lippan Art</Link></li>
            <li><Link to="/shop?category=Resin Art" className="hover:text-white transition-colors">Resin Art</Link></li>
            <li><Link to="/shop?category=Dot Mandala" className="hover:text-white transition-colors">Dot Mandala</Link></li>
            <li><Link to="/shop?category=Handcrafted Jewellery" className="hover:text-white transition-colors">Handcrafted Jewellery</Link></li>
            <li><Link to="/shop?category=DIY Craft Kits" className="hover:text-white transition-colors">DIY Craft Kits</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-medium mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-emerald-500 flex-shrink-0" />
              <span>123 Art Lane, Creative District, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-emerald-500 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-emerald-500 flex-shrink-0" />
              <span>hello@ancrafthouse.com</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500"
      >
        <p>© 2026 A&N Craft House. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
        </div>
      </motion.div>
    </footer>
  );
}
