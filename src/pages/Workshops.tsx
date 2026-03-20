import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle2, Palette, Heart } from 'lucide-react';
import { WORKSHOPS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Workshops() {
  return (
    <div className="pt-32 pb-24 bg-stone-50">
      {/* Header */}
      <section className="px-6 mb-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-emerald-700 font-medium tracking-widest uppercase text-xs mb-6"
          >
            Learn, Create & Earn
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8"
          >
            Art Workshops for <span className="text-emerald-800 italic relative inline-block">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 h-3 bg-emerald-200/50 -z-10"
              />
              Everyone
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-stone-600 text-lg md:text-xl leading-relaxed"
          >
            Join our inclusive art sessions designed for all ages and abilities. Whether you're a beginner or looking to refine your skills, we have a space for you.
          </motion.p>
        </motion.div>
      </section>

      {/* Workshop List */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {WORKSHOPS.map((workshop, idx) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className={`flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 group ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 px-4 py-2 bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                  {workshop.type}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">
                  <Calendar size={16} />
                  <span>{workshop.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">{workshop.title}</h2>
                <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                  {workshop.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center space-x-3 text-stone-600">
                    <Users size={20} className="text-emerald-600" />
                    <span className="text-sm">{workshop.targetAudience}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-stone-600">
                    <Clock size={20} className="text-emerald-600" />
                    <span className="text-sm">2-3 Hours Session</span>
                  </div>
                  <div className="flex items-center space-x-3 text-stone-600">
                    <MapPin size={20} className="text-emerald-600" />
                    <span className="text-sm">{workshop.type === 'Online' ? 'Zoom Meeting' : 'Creative Studio, India'}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-stone-600">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span className="text-sm">Materials Included</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-fit px-10 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center justify-center group"
                >
                  Book Your Spot
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Join Our Workshops?</h2>
            <p className="text-emerald-100/70 max-w-2xl mx-auto">We believe art is for everyone. Our workshops are designed to be inclusive, therapeutic, and empowering.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Inclusive Environment",
                desc: "Neurodiverse-friendly sessions where everyone feels welcome and supported.",
                icon: <Users size={32} />
              },
              {
                title: "Expert Guidance",
                desc: "Learn directly from Nagmi, who brings years of experience in traditional and modern crafts.",
                icon: <Palette size={32} />
              },
              {
                title: "Community Spirit",
                desc: "Connect with fellow art enthusiasts and share your creative journey.",
                icon: <Heart size={32} />
              }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-800 rounded-3xl flex items-center justify-center mx-auto text-emerald-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                <p className="text-emerald-100/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-stone-50 p-12 md:p-20 rounded-[3rem] border border-stone-100"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Want a Private Workshop?</h2>
          <p className="text-stone-600 mb-10 text-lg">We organize private sessions for birthdays, corporate team building, and school events.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg"
          >
            Inquire for Private Session
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
