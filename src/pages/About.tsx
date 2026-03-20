import { motion } from 'motion/react';
import { Heart, Users, Sparkles, Award } from 'lucide-react';

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

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <section className="px-6 mb-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-emerald-700 font-medium tracking-widest uppercase text-xs mb-6"
          >
            Our Story & Vision
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8"
          >
            Art into Every <span className="text-emerald-800 italic relative inline-block">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 h-3 bg-emerald-200/50 -z-10"
              />
              Heart
            </span> & Home
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            A&N Craft House is more than just a brand; it's a celebration of creativity, inclusivity, and the human spirit.
          </motion.p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900 text-white p-12 md:p-20 rounded-[3rem] flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif font-bold mb-8">Our Vision</h2>
            <p className="text-emerald-100/80 text-xl leading-relaxed italic">
              “To bring art into every heart and home while creating an inclusive platform where creativity, craftsmanship, and diversity are celebrated. The initiative encourages people of all ages to learn, create, and earn through craft.”
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-12 md:p-20 rounded-[3rem] border border-stone-100 flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Our Mission</h2>
            <ul className="space-y-6">
              {[
                "Promote traditional Indian art forms like Lippan and Dot Mandala.",
                "Create a neurodiverse-friendly space for artistic expression.",
                "Empower individuals through skill-building workshops.",
                "Deliver high-quality, personalized handmade products."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1 p-1 bg-emerald-100 text-emerald-700 rounded-full">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-stone-600 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">The Hearts Behind A&N</h2>
            <p className="text-stone-500">Meet the mother-son duo who started it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 text-center group"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-emerald-100 relative">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.pravatar.cc/300?u=nagmi" 
                  alt="Nagmi" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Nagmi</h3>
              <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">Founder & Lead Artist</p>
              <p className="text-stone-600 leading-relaxed">
                With over 15 years of experience in various art forms, Nagmi is the creative force behind our collections. Her passion for teaching and inclusive art drives our workshop initiative.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 text-center group"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-emerald-100 relative">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://i.pravatar.cc/300?u=aahil" 
                  alt="Aahil" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Aahil</h3>
              <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">Co-Founder & Visionary</p>
              <p className="text-stone-600 leading-relaxed">
                Aahil brings a fresh perspective and energy to the brand. His vision for an inclusive platform where everyone can 'Learn, Create, and Earn' is the foundation of A&N Craft House.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            { label: "Handmade", icon: <Heart size={32} />, value: "100%" },
            { label: "Students", icon: <Users size={32} />, value: "500+" },
            { label: "Art Forms", icon: <Palette size={32} />, value: "12+" },
            { label: "Awards", icon: <Award size={32} />, value: "5+" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
              }}
              className="text-center p-8 bg-white rounded-3xl border border-stone-100 hover:border-emerald-200 transition-colors"
            >
              <div className="text-emerald-700 mb-4 flex justify-center">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</h4>
              <p className="text-xs text-stone-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

function Palette(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.688-1.688h1.954c3.11 0 5.586-2.514 5.586-5.625S17.59 2 12 2Z" />
    </svg>
  );
}
