export type News = {
  id: number;
  date: string;
  title: string;
  detail: string;
};

export type Product = {
  id: number;
  imageUrl: string;
  alt: string;
  name: string;
  price: number;
  description: string;
};

export type Review = {
  id: number;
  imageUrl: string;
  comment: string;
  name: string;
};

export type Honey = {
  id: number;
  imageUrl: string;
  alt: string;
  name: string;
  description: string;
};
