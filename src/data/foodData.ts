import Meal2 from "../images/meals/meal2.jpg";
import Meal3 from "../images/meals/meal3.jpg";
import Meal4 from "../images/meals/meal4.jpg";

export interface MenuItem {
  id: number;
  image:string
  title: string;
  description: string;
  price: number;
}

export const foods: { [key: string]: MenuItem[] } = {
  breakfast: [
    {
      id: 1,
      image:Meal2,
      title: "Warm Spinach Dip & Chips",
      description:
        "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
      price: 10.99,
    },
    {
      id: 2,
      image:Meal3,
      title: "Key West Nachos",
      description:
        "Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream, and salsa.",
      price: 11.99,
    },
    {
      id: 3,
      image:Meal4,
      title: "Crispy Onions Rings",
      description:
        "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
      price: 11.99,
    },
    {
      id: 4,
      image:Meal2,
      title: "Lobster & Shrimp Quesadilla",
      description:
        "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
      price: 13.99,
    },
  ],

  brunch: [
    {
      id: 5,
      image:Meal3,
      title: "Jumbo Lump Crab Stack",
      description:
        "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
      price: 12.49,
    },
    {
      id: 6,
      image:Meal2,
      title: "Jamaican Chicken Wings",
      description:
        "Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream, and salsa.",
      price: 15.99,
    },
    {
      id: 7,
      image:Meal4,
      title: "Bahamian Seafood Chowder",
      description:
        "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
      price: 10.99,
    },
    {
      id: 8,
      image:Meal3,
      title: "Grilled Chicken & Tropical Fruit on Mixed Greens",
      description:
        "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
      price: 12.99,
    },
  ],

  dinner: [
    {
      id: 9,
      image:Meal4,
      title: "Grilled Top Sirloin Steak",
      description:
        "Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.",
      price: 18.99,
    },
    {
      id: 10,
      image:Meal2,
      title: "Steak Oscar",
      description:
        "Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream, and salsa.",
      price: 23.99,
    },
    {
      id: 11,
      image:Meal3,
      title: "Skirt Steak Churrasco",
      description:
        "A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.",
      price: 20.99,
    },
    {
      id: 12,
      image:Meal4,
      title: "Grilled Beef Steak",
      description:
        "Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.",
      price: 20.99,
    },
  ],
};
