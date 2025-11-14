// src/assets/assets.js
import cart_icon from "./cart_icon.png";

// Hero images (use pics1.jpg and pics2.jpg)
export const heroImages = [
  require("./pics1.jpg"),
  require("./pics2.jpg")
];

// Featured cakes (use pics3.jpg, pics4.jpg, pics5.jpg)
export const featuredCakes = [
  { id: 1, name: "Chocolate Dream", price: 25, image: require("./pics3.jpg") },
  { id: 2, name: "Vanilla Delight", price: 20, image: require("./pics4.jpg") },
  { id: 3, name: "Strawberry Bliss", price: 22, image: require("./pics5.jpg") },
];

export { cart_icon };


const reviews = [
  {
    id: 1,
    name: "Alice S.",
    rating: 5,
    comment: "Absolutely delicious cakes! The chocolate one is my favorite.",
    image: "/assets/user-1.png"
  },
  {
    id: 2,
    name: "Mark T.",
    rating: 4,
    comment: "Beautiful presentation and great taste. Will order again!",
    image: "/assets/user-2.png"
  },
  {
    id: 3,
    name: "Sophia L.",
    rating: 5,
    comment: "Amazing flavors and fast delivery. Highly recommend MangoMuse!",
    image: "/assets/user-3.png"
  },
  {
    id: 4,
    name: "James K.",
    rating: 4,
    comment: "Cakes are perfect for celebrations. Very happy with my purchase.",
    image: "/assets/user-4.png"
  },
  {
    id: 5,
    name: "Emma R.",
    rating: 5,
    comment: "The strawberry cake was stunning and delicious!",
    image: "/assets/user-5.png"
  },
  {
    id: 6,
    name: "Liam W.",
    rating: 4,
    comment: "Perfect cakes for birthdays and events. Excellent service!",
    image: "/assets/user-6.png"
  },
];
