type Options = {
  value: string;
  text: string;
}

export const sortOptions:Options[] = [
  {
    value: "",
    text: "по умолчанию",
  },
  {
    value: "rating",
    text: "популярности",
  },
  {
    value: "price",
    text: "цене",
  },
  {
    value: "title",
    text: "алфавиту",
  },
];
