export type Pizzas = {
  id?: number;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  price: number[];
  rating?: number;
  category?: number;
};

export type CartTypes = {
  id: number;
  count: number;
  imageUrl: string;
  price: number;
  sizes: number;
  types: string;
  title: string;
};
