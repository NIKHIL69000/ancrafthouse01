import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Users, Palette, Sparkles, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, WORKSHOPS } from '../constants';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

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

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop"
            alt="Crafting background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-transparent to-stone-50" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-emerald-700 font-medium tracking-widest uppercase text-xs mb-6"
          >
            Handmade with Love by Nagmi & Aahil
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-bold text-stone-900 leading-[0.9] mb-8 tracking-tight"
          >
            Bringing Art into <br />
            <span className="text-emerald-800 italic relative inline-block">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 h-3 bg-emerald-200/50 -z-10"
              />
              Every Heart
            </span> & Home
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Discover a world where creativity, craftsmanship, and diversity are celebrated. From Lippan art to resin wonders, find pieces that tell a story.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-200 flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Shop Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
              <motion.div 
                className="absolute inset-0 bg-emerald-600 z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
              />
            </Link>
            <Link
              to="/workshops"
              className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all flex items-center"
            >
              Book a Workshop
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="p-4 bg-white rounded-2xl shadow-xl border border-stone-100 flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Unique Designs</p>
              <p className="text-[10px] text-stone-500">100% Handmade</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Craft Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Explore Categories</h2>
            <p className="text-stone-500 max-w-md">From traditional Lippan art to modern resin creations, discover our diverse range of crafts.</p>
          </div>
          <Link to="/shop" className="text-emerald-700 font-medium flex items-center hover:underline">
            View All Categories <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Featured Picks</h2>
            <p className="text-stone-500">Our most loved and handcrafted masterpieces.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-6 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop"
                alt="Nagmi and Aahil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full -z-0 opacity-50 blur-3xl" />
          </div>

          <div className="space-y-8">
            <span className="text-emerald-700 font-medium tracking-widest uppercase text-xs">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Founded by <span className="text-emerald-800 italic">Nagmi</span> & her son <span className="text-emerald-800 italic">Aahil</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              A&N Craft House was born from a simple yet powerful vision: to bring art into every heart and home. We believe that creativity has no boundaries and craftsmanship should be celebrated in all its forms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Inclusive Platform</h4>
                  <p className="text-sm text-stone-500">Celebrating diversity in art.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Learn & Earn</h4>
                  <p className="text-sm text-stone-500">Empowering artists of all ages.</p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Upcoming Workshops</h2>
              <p className="text-stone-500 max-w-md">Join our inclusive art sessions for kids and adults. Online and offline options available.</p>
            </div>
            <Link to="/workshops" className="text-emerald-700 font-medium flex items-center hover:underline">
              Browse All Workshops <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORKSHOPS.map((workshop) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {workshop.type}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs text-emerald-700 font-bold uppercase tracking-widest mb-2">{workshop.date}</p>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{workshop.title}</h3>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">{workshop.description}</p>
                  <Link
                    to="/workshops"
                    className="w-full py-3 bg-white border border-stone-200 text-stone-900 rounded-xl font-medium hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-emerald-900 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop"
              alt="Texture"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-8 py-20 md:p-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Looking for Something <span className="text-emerald-400 italic">Personalized?</span>
            </h2>
            <p className="text-emerald-100/80 text-lg mb-10">
              From corporate gifting to personalized birthday presents, we create custom artworks tailored to your vision.
            </p>
            <Link
              to="/custom-orders"
              className="px-10 py-5 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl"
            >
              Request Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">What People Say</h2>
            <div className="flex justify-center space-x-1 text-emerald-600">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Art Collector",
                text: "The Lippan mirror I bought is absolutely stunning. The level of detail is incredible. It's now the centerpiece of my living room!",
                image: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                name: "Rahul Mehta",
                role: "Workshop Participant",
                text: "Attended the Dot Mandala workshop with my son. Nagmi is a wonderful teacher. It was such a therapeutic and fun experience.",
                image: "https://i.pravatar.cc/150?u=rahul"
              },
              {
                name: "Priya Sharma",
                role: "Corporate Client",
                text: "Ordered 50 custom resin coasters for our company event. They were delivered on time and everyone loved the unique touch.",
                image: "https://i.pravatar.cc/150?u=priya"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-10 bg-stone-50 rounded-3xl border border-stone-100 relative">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-stone-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                    <p className="text-xs text-stone-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block p-4 bg-emerald-500/10 rounded-3xl mb-8">
            <Mail size={32} className="text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Craft Community</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to get early access to new collections, workshop announcements, and creative tips from A&N Craft House.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 bg-stone-800 border border-stone-700 rounded-full focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="w-full sm:w-auto px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
