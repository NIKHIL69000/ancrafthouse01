import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

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
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-emerald-700 font-medium tracking-widest uppercase text-xs mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 relative inline-block"
          >
            Let's Start a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-800 italic">Creative</span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>{' '}
            Conversation
          </motion.h1>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 space-y-10">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Contact Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">Email Us</p>
                      <p className="text-stone-900 font-medium">hello@ancrafthouse.com</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">Call / WhatsApp</p>
                      <p className="text-stone-900 font-medium">+91 98765 43210</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">Visit Studio</p>
                      <p className="text-stone-900 font-medium">123 Art Lane, Creative District, India</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Instagram size={20} />, label: 'Instagram' },
                    { icon: <Facebook size={20} />, label: 'Facebook' },
                    { icon: <Twitter size={20} />, label: 'Twitter' },
                    { icon: <MessageCircle size={20} />, label: 'WhatsApp' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-stone-50 text-stone-600 rounded-2xl flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all shadow-sm"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div variants={itemVariants} className="bg-emerald-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Workshop Inquiries?</h3>
                <p className="text-emerald-100/70 mb-6 text-sm leading-relaxed">
                  Looking to book a private session or have questions about our inclusive art classes?
                </p>
                <button className="text-white font-bold text-sm flex items-center hover:text-emerald-400 transition-colors">
                  Learn More About Workshops <Send size={16} className="ml-2" />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100">
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Subject</label>
                  <select
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  >
                    <option>General Inquiry</option>
                    <option>Workshop Registration</option>
                    <option>Custom Order Inquiry</option>
                    <option>Collaboration</option>
                    <option>Bulk Orders</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your creative needs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
