import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Building2, Package, Palette, Send, CheckCircle2 } from 'lucide-react';

export default function CustomOrders() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    orderType: 'Personalized Gift',
    quantity: '1',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Custom order request received! We will contact you shortly to discuss details.');
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
            Bespoke Creations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 relative inline-block"
          >
            Custom Art for Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-800 italic">Unique</span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/50 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>{' '}
            Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Whether it's a personalized gift, corporate branding, or a bulk order for an event, we bring your vision to life with handcrafted precision.
          </motion.p>
        </div>

        {/* Order Types */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {[
            {
              title: "Personalized Gifts",
              desc: "Customized names, dates, or themes for birthdays, weddings, and anniversaries.",
              icon: <Gift size={32} />
            },
            {
              title: "Corporate Gifting",
              desc: "Unique, branded art pieces that reflect your company's values and culture.",
              icon: <Building2 size={32} />
            },
            {
              title: "Bulk Orders",
              desc: "Handcrafted favors for events, festivals, or retail partnerships.",
              icon: <Package size={32} />
            }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Process */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h2 className="text-4xl font-serif font-bold text-stone-900">How It Works</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Share Your Vision", desc: "Fill out the form with your ideas, preferences, and requirements." },
                { step: "02", title: "Consultation", desc: "We'll connect to discuss materials, timelines, and pricing." },
                { step: "03", title: "Creation", desc: "Nagmi and Aahil start crafting your piece with regular updates." },
                { step: "04", title: "Delivery", desc: "Your unique artwork is carefully packed and shipped to your doorstep." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <span className="text-4xl font-serif font-bold text-emerald-100">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h4>
                    <p className="text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="p-8 bg-emerald-900 text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Quality Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-emerald-100/80">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span>Premium materials only</span>
                  </li>
                  <li className="flex items-center space-x-3 text-emerald-100/80">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span>Regular progress updates</span>
                  </li>
                  <li className="flex items-center space-x-3 text-emerald-100/80">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span>Secure worldwide shipping</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100">
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8">Custom Order Form</h3>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Order Type</label>
                  <select
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    value={formState.orderType}
                    onChange={(e) => setFormState({ ...formState, orderType: e.target.value })}
                  >
                    <option>Personalized Gift</option>
                    <option>Corporate Gifting</option>
                    <option>Bulk Orders</option>
                    <option>Custom Artwork</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                    value={formState.quantity}
                    onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Describe Your Vision</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Tell us about the colors, size, and theme you have in mind..."
                  value={formState.description}
                  onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center space-x-3"
              >
                <Send size={20} />
                <span>Submit Request</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
