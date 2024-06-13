interface Featured {
  id: number;
  title: string;
  link: string;
  image: string;
}

export const featuredCategories: Featured[] = [
  {
    id: 1,
    title: "Lamps",
    link: "/products/lamps",
    image: "/Furniture/category-pop-3.jpg",
  },
  {
    id: 2,
    title: "Sofas",
    link: "/products/sofas",
    image: "/Furniture/category-pop-2.jpg",
  },
  {
    id: 3,
    title: "Pillows",
    link: "/products/pillows",
    image: "/Furniture/category-pop-1.webp",
  },
  {
    id: 4,
    title: "Bedding",
    link: "/products/bedding",
    image: "/Furniture/category-pop-4.jpeg",
  },
  {
    id: 5,
    title: "Chairs",
    link: "/products/chairs",
    image: "/Furniture/category-pop-5.jpg",
  },
];
