import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-square overflow-hidden relative">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-md"
          >
            New
          </motion.span>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white text-stone-900 rounded-full hover:bg-emerald-600 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
          >
            <Eye size={20} />
          </Link>
          <button className="p-3 bg-white text-stone-900 rounded-full hover:bg-emerald-600 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block flex-grow">
          <h3 className="text-stone-900 font-medium group-hover:text-emerald-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-emerald-700 font-semibold">₹{product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
