export type NewsType = {
  id: number;
  date: string;
  title: string;
  detail: string;
};

export type ProductType = {
  id: number;
  imageUrl: string;
  alt: string;
  name: string;
  price: number;
  description: string;
};

export type ReviewType = {
  id: number;
  imageUrl: string;
  comment: string;
  name: string;
};

export type HoneyType = {
  id: number;
  imageUrl: string;
  alt: string;
  name: string;
  description: string;
};
