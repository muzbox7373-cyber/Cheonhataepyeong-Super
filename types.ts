export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
}

export interface SpaceItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  content: string;
  date: string;
}