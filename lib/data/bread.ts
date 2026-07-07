export type Bread = {
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


export const breads: Bread[] = [

  {
    id: 1,
    name: "Garlic Bread",
    price: 350,
    image: "/images/bread/garlic-bread.jpg",
    excerpt: "Soft bread with garlic butter topping.",
    description:
      "Freshly baked garlic bread with a crispy crust, soft center, and rich garlic butter flavor.",
    rating: 5,
    category: "Savory Bread",

    flavours: [
      "Classic Garlic",
      "Cheese Garlic",
      "Herb Garlic",
    ],

    sizes: [
      "Small",
      "Medium",
      "Large",
    ],


  },


  {
    id: 2,
    name: "French Baguette",
    price: 400,
    image: "/images/bread/french-baguette.jpg",
    excerpt: "Traditional crispy French baguette.",
    description:
      "Authentic French style baguette with a crispy golden crust and soft inside.",
    rating: 5,
    category: "French Bread",

    flavours: [
      "Classic",
      "Herb",
      "Cheese",
    ],

    sizes: [
      "Small",
      "Medium",
      "Large",
    ],

  
  },


  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 300,
    image: "/images/bread/whole-wheat.jpg",
    excerpt: "Healthy whole wheat bread.",
    description:
      "Nutritious whole wheat bread made with natural ingredients for a healthy lifestyle.",
    rating: 4,
    category: "Healthy Bread",

    flavours: [
      "Classic Wheat",
      "Multigrain",
      "Honey Wheat",
    ],

    sizes: [
      "Small Loaf",
      "Medium Loaf",
      "Large Loaf",
    ],

   
  },


  {
    id: 4,
    name: "Brioche Bread",
    price: 450,
    image: "/images/bread/brioche.jpg",
    excerpt: "Soft and rich French brioche bread.",
    description:
      "Premium brioche bread with a soft texture and rich buttery taste.",
    rating: 5,
    category: "Premium Bread",

    flavours: [
      "Classic Brioche",
      "Chocolate Brioche",
      "Honey Brioche",
    ],

    sizes: [
      "Small",
      "Medium",
      "Large",
    ],

 
  },

];