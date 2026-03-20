import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, ChevronRight, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const relatedProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === product?.category && p.id !== id).slice(0, 4),
    [product, id]
  );

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

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-emerald-700 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-stone-500 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-emerald-700">Shop</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-emerald-700">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-stone-900 font-bold">{product.name}</span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          {/* Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-3xl overflow-hidden bg-stone-50 border border-stone-100"
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-emerald-600' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-8">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-4 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm text-stone-500">(12 reviews)</span>
              </div>
              <p className="text-3xl font-bold text-emerald-800">₹{product.price.toLocaleString()}</p>
            </div>

            <p className="text-stone-600 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-stone-200 rounded-full px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900"
                  >
                    +
                  </button>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-emerald-700 text-white h-14 rounded-full font-bold hover:bg-emerald-800 transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-emerald-200"
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-rose-500 hover:border-rose-200 transition-all"
                >
                  <Heart size={20} />
                </motion.button>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-14 border border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition-all"
              >
                Inquiry for Bulk Order
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-stone-50 text-emerald-700 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-medium text-stone-600 uppercase tracking-wider">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-stone-50 text-emerald-700 rounded-lg">
                  <Truck size={20} />
                </div>
                <span className="text-xs font-medium text-stone-600 uppercase tracking-wider">Secure Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-stone-50 text-emerald-700 rounded-lg">
                  <RefreshCw size={20} />
                </div>
                <span className="text-xs font-medium text-stone-600 uppercase tracking-wider">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="pt-24 border-t border-stone-100"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-serif font-bold text-stone-900 mb-12">You May Also Like</motion.h2>
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
