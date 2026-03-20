import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { motion } from 'motion/react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
        <motion.h3 
          className="text-2xl font-serif font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category.name}
        </motion.h3>
        <p className="text-stone-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {category.description}
        </p>
        <Link
          to={`/shop?category=${category.name}`}
          className="inline-flex items-center text-white text-sm font-medium border-b border-white/30 pb-1 w-fit hover:border-emerald-400 transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
