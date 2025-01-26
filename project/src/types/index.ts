export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  rating: number;
  stock: number;
}

export interface CarModel {
  id: string;
  name: string;
  type: 'SUV' | 'Sedan' | 'Hatchback';
  basePrice: number;
  imageUrl: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
  type: 'color' | 'accessory';
  price: number;
  imageUrl?: string;
  colorCode?: string;
}