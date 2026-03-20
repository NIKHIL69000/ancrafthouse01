import { Product, Category, Workshop } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'lippan-art',
    name: 'Lippan Art',
    description: 'Traditional mud and mirror work from Kutch.',
    image: 'https://picsum.photos/seed/lippan/600/800',
  },
  {
    id: 'resin-art',
    name: 'Resin Art',
    description: 'Modern, glossy, and vibrant resin creations.',
    image: 'https://picsum.photos/seed/resin/600/800',
  },
  {
    id: 'dot-mandala',
    name: 'Dot Mandala',
    description: 'Intricate patterns created with precision dots.',
    image: 'https://picsum.photos/seed/mandala/600/800',
  },
  {
    id: 'handcrafted-jewellery',
    name: 'Handcrafted Jewellery',
    description: 'Unique wearable art for every occasion.',
    image: 'https://picsum.photos/seed/jewellery/600/800',
  },
  {
    id: 'festive-decor',
    name: 'Festive Decor',
    description: 'Handmade decorations to light up your celebrations.',
    image: 'https://picsum.photos/seed/festive/600/800',
  },
  {
    id: 'diy-craft-kits',
    name: 'DIY Craft Kits',
    description: 'Everything you need to start your own creative journey.',
    image: 'https://picsum.photos/seed/diy/600/800',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Lippan Mirror',
    price: 1200,
    category: 'Lippan Art',
    description: 'A beautiful 12-inch golden Lippan art piece with intricate mirror work.',
    images: ['https://picsum.photos/seed/lippan1/800/800', 'https://picsum.photos/seed/lippan2/800/800'],
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Ocean Resin Coasters',
    price: 850,
    category: 'Resin Art',
    description: 'Set of 4 ocean-themed resin coasters with real sand and shells.',
    images: ['https://picsum.photos/seed/resin1/800/800'],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Rainbow Dot Mandala Canvas',
    price: 1500,
    category: 'Dot Mandala',
    description: 'Hand-painted 10x10 inch dot mandala on a black canvas.',
    images: ['https://picsum.photos/seed/mandala1/800/800'],
    isNew: true,
  },
  {
    id: '4',
    name: 'Terracotta Earring Set',
    price: 450,
    category: 'Handcrafted Jewellery',
    description: 'Eco-friendly terracotta earrings painted with traditional motifs.',
    images: ['https://picsum.photos/seed/jewellery1/800/800'],
  },
  {
    id: '5',
    name: 'Diwali Tealight Holders',
    price: 600,
    category: 'Festive Decor',
    description: 'Set of 2 hand-painted clay tealight holders for festive vibes.',
    images: ['https://picsum.photos/seed/festive1/800/800'],
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Beginner Lippan Kit',
    price: 999,
    category: 'DIY Craft Kits',
    description: 'Complete kit with clay, mirrors, board, and instructions.',
    images: ['https://picsum.photos/seed/diy1/800/800'],
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'Lippan Art for Beginners',
    description: 'Learn the traditional mud and mirror art from Nagmi herself.',
    date: 'April 15, 2026',
    type: 'Offline',
    targetAudience: 'Adults & Teens',
    image: 'https://picsum.photos/seed/workshop1/800/600',
  },
  {
    id: 'w2',
    title: 'Resin Jewelry Making',
    description: 'Create your own stunning resin pendants and earrings.',
    date: 'April 22, 2026',
    type: 'Online',
    targetAudience: 'Kids & Adults',
    image: 'https://picsum.photos/seed/workshop2/800/600',
  },
  {
    id: 'w3',
    title: 'Inclusive Art Session',
    description: 'A neurodiverse-friendly workshop focused on sensory art.',
    date: 'May 05, 2026',
    type: 'Offline',
    targetAudience: 'All Ages',
    image: 'https://picsum.photos/seed/workshop3/800/600',
  },
];
