export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'Online' | 'Offline';
  targetAudience: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}
