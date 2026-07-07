export type Cookie = {
  id: number;
  name: string;
  price: number;
  image: string;
  excerpt: string;
  description: string;
  rating: number;
  category: string;
  flavours: string[];
  sizes: string[];
  
};

export const cookies: Cookie[] = [

  {
    id: 1,
    name: "Chocolate Chip Cookies",
    price: 350,
    image: "/images/cookies/chocolate-chip.jpg",
    excerpt: "Crispy cookies loaded with chocolate chips.",
    description:
      "Freshly baked chocolate chip cookies with a crunchy outside and soft chocolate-filled center. Perfect with tea or coffee.",
    rating: 5,
    category: "Chocolate Cookies",

    flavours: [
      "Classic Chocolate",
      "Dark Chocolate",
      "Double Chocolate",
    ],

    sizes: [
      "6 Pieces",
      "12 Pieces",
      "24 Pieces",
    ],

 
  },


  {
    id: 2,
    name: "Butter Cookies",
    price: 300,
    image: "/images/cookies/butter-cookies.jpg",
    excerpt: "Classic buttery cookies with a soft texture.",
    description:
      "Traditional butter cookies made with premium butter and baked until golden and delicious.",
    rating: 5,
    category: "Classic Cookies",

    flavours: [
      "Classic Butter",
      "Vanilla Butter",
      "Almond Butter",
    ],

    sizes: [
      "6 Pieces",
      "12 Pieces",
      "24 Pieces",
    ],

  
  },


  {
    id: 3,
    name: "Oatmeal Cookies",
    price: 320,
    image: "/images/cookies/oatmeal.jpg",
    excerpt: "Healthy oatmeal cookies with natural flavors.",
    description:
      "Wholesome oatmeal cookies prepared with oats, nuts, and balanced sweetness.",
    rating: 4,
    category: "Healthy Cookies",

    flavours: [
      "Classic Oatmeal",
      "Oatmeal Raisin",
      "Oatmeal Chocolate",
    ],

    sizes: [
      "6 Pieces",
      "12 Pieces",
      "24 Pieces",
    ],
 },


  {
    id: 4,
    name: "Almond Cookies",
    price: 400,
    image: "/images/cookies/almond-cookies.jpg",
    excerpt: "Premium almond cookies with crunchy almonds.",
    description:
      "Luxury almond cookies made with roasted almonds and rich buttery flavor.",
    rating: 5,
    category: "Premium Cookies",

    flavours: [
      "Classic Almond",
      "Chocolate Almond",
      "Honey Almond",
    ],

    sizes: [
      "6 Pieces",
      "12 Pieces",
      "24 Pieces",
    ],
  }

];