export type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
  excerpt: string;
  flavours: string[];
  sizes: string[];
  ingredients: string[];
  description: string;
  rating: number;
  category: string;
};

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 35,
    image: "/images/cakes/chocalate.jpg",
    excerpt: "Rich chocolate cake layered with smooth chocolate cream.",
    description:
      "A delicious chocolate cake made with premium cocoa, soft sponge layers, and fresh chocolate cream. Perfect for birthdays, celebrations, and special moments.",
    rating: 5,
    category: "Chocolate",

    flavours: [
      "Dark Chocolate",
      "Milk Chocolate",
      "Chocolate Hazelnut",
      "Chocolate Truffle",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
      "3 KG",
    ],

    ingredients: [
      "Premium Flour",
      "Cocoa Powder",
      "Fresh Cream",
      "Chocolate",
      "Eggs",
      "Sugar",
      "Butter",
    ],
  },


  {
    id: 2,
    name: "Strawberry Cake",
    price: 40,
    image: "/images/cakes/strwberry.jpg",
    excerpt: "Fresh strawberry cake with creamy layers.",
    description:
      "A refreshing strawberry cake prepared with fresh strawberries, soft vanilla sponge, and creamy frosting.",
    rating: 5,
    category: "Fruit Cake",

    flavours: [
      "Fresh Strawberry",
      "Strawberry Vanilla",
      "Berry Mix",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
      "3 KG",
    ],

    ingredients: [
      "Vanilla Sponge",
      "Fresh Strawberries",
      "Whipped Cream",
      "Milk",
      "Sugar",
      "Butter",
    ],
  },


  {
    id: 3,
    name: "Red Velvet Cake",
    price: 45,
    image: "/images/cakes/redvel.jpg",
    excerpt: "Classic red velvet cake with cream cheese frosting.",
    description:
      "A premium red velvet cake with soft red sponge layers and rich cream cheese frosting.",
    rating: 5,
    category: "Premium Cake",

    flavours: [
      "Classic Red Velvet",
      "Chocolate Red Velvet",
      "Berry Red Velvet",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
      "3 KG",
    ],

    ingredients: [
      "Red Velvet Sponge",
      "Cream Cheese",
      "Flour",
      "Cocoa",
      "Eggs",
      "Sugar",
      "Butter",
    ],
  },


  {
    id: 4,
    name: "Vanilla Dream Cake",
    price: 38,
    image: "/images/cakes/Vanila.jpg",
    excerpt: "Soft vanilla sponge with creamy frosting.",
    description:
      "Light and fluffy vanilla cake with a smooth creamy finish. A perfect choice for every occasion.",
    rating: 4,
    category: "Vanilla Cake",

    flavours: [
      "Classic Vanilla",
      "Vanilla Strawberry",
      "Vanilla Caramel",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
    ],

    ingredients: [
      "Vanilla Extract",
      "Flour",
      "Milk",
      "Eggs",
      "Sugar",
      "Cream",
    ],
  },


  {
    id: 5,
    name: "Black Forest Cake",
    price: 42,
    image: "/images/cakes/black-forest.jpg",
    excerpt: "Chocolate sponge with cherries and fresh cream.",
    description:
      "Traditional Black Forest cake made with chocolate sponge, whipped cream, and cherry topping.",
    rating: 5,
    category: "Chocolate Cake",

    flavours: [
      "Classic Black Forest",
      "Cherry Chocolate",
      "Dark Chocolate",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
      "3 KG",
    ],

    ingredients: [
      "Chocolate Sponge",
      "Fresh Cream",
      "Cherries",
      "Chocolate Flakes",
      "Sugar",
      "Eggs",
    ],
  },


  {
    id: 6,
    name: "Cheesecake",
    price: 48,
    image: "/images/cakes/cheescake.jpg",
    excerpt: "Creamy cheesecake with premium topping.",
    description:
      "A rich and creamy cheesecake with a smooth texture and delicious topping.",
    rating: 5,
    category: "Cheesecake",

    flavours: [
      "Classic Cheese",
      "Blueberry",
      "Strawberry",
      "Chocolate",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
    ],

    ingredients: [
      "Cream Cheese",
      "Biscuit Base",
      "Fresh Cream",
      "Sugar",
      "Milk",
      "Fruit Topping",
    ],
  },


  {
    id: 7,
    name: "Blueberry Cake",
    price: 46,
    image: "/images/cakes/blueberr.jpg",
    excerpt: "Blueberry cake with fresh cream topping.",
    description:
      "A delightful blueberry cake made with fresh blueberries and creamy frosting.",
    rating: 5,
    category: "Fruit Cake",

    flavours: [
      "Blueberry",
      "Blueberry Vanilla",
      "Mixed Berry",
    ],

    sizes: [
      "0.5 KG",
      "1 KG",
      "2 KG",
    ],

    ingredients: [
      "Blueberries",
      "Vanilla Sponge",
      "Fresh Cream",
      "Flour",
      "Milk",
      "Sugar",
    ],
  },
];