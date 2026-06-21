export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

export const business = {
  name: "Friends Pizza",
  tagline: "Fresh pizza, made by friends",
  address: {
    line1: "Marktplatz 30",
    line2: "92249 Vilseck, Bavaria, Germany",
    full: "Marktplatz 30, 92249 Vilseck, Bavaria, Germany",
  },
  phone: "09662 3999 705",
  phoneHref: "+4996623999705",
  email: "info@friendspizza-vilseck.de",
  orderUrl: "https://friends-pizza.order.app.hd.digital/menus",
} as const;

export const hours = {
  guests: {
    label: "Guests (dine-in)",
    value: "16:00 – 23:00, closed Thu",
    available: false,
  },
  delivery: {
    label: "Delivery",
    value: "16:00 – 22:45, closed Thu",
    available: true,
  },
  pickup: {
    label: "Pickup",
    value: "16:00 – 22:45, closed Thu",
    available: true,
  },
} as const;

export const openDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const menu: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    items: [
      {
        name: "Margherita",
        description: "Tomato sauce, mozzarella, fresh basil",
        price: "€9.90",
      },
      {
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, pepperoni",
        price: "€10.50",
      },
      {
        name: "Hawaii",
        description: "Tomato sauce, ham, mozzarella, pineapple",
        price: "€12.20",
      },
      {
        name: "Quattro Formaggi",
        description: "Gorgonzola, fontina, mozzarella, parmigiano",
        price: "€12.20",
      },
      {
        name: "BBQ Chicken",
        description:
          "Barbecue sauce, mozzarella, grilled chicken, peppers, onions",
        price: "€12.90",
      },
      {
        name: "Supreme",
        description:
          "Pepperoni, pulled beef, peppers, olives, onions, mushrooms",
        price: "€12.90",
        tag: "Bestseller",
      },
      {
        name: "Friends Pizza Special",
        description:
          "Tomato sauce, mozzarella, beef ham, mushrooms, parmesan, rucola",
        price: "€12.50",
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      {
        name: "Chicken Salad",
        description:
          "Grilled chicken, greens, cherry tomatoes, corn, parmesan",
        price: "€9.50",
      },
    ],
  },
];

export const categories = [
  { id: "pizza", label: "Pizza" },
  { id: "burgers", label: "Burgers" },
  { id: "pasta", label: "Pasta" },
  { id: "salads", label: "Salads" },
  { id: "drinks", label: "Drinks" },
] as const;

// Sample placeholders (not real reviews yet) — swap in the actual 5/5 Google reviews when ready.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Best pizza in Vilseck, hands down. Fresh ingredients and the staff actually cares.",
    author: "Markus B.",
    rating: 5,
  },
  {
    quote:
      "Ordered for pickup and it was ready right on time, still hot. Will be back.",
    author: "Sabine K.",
    rating: 5,
  },
  {
    quote:
      "Great value, generous toppings, and friendly service every time we order.",
    author: "Daniel R.",
    rating: 5,
  },
];

export const highlights = [
  {
    title: "Friend-run",
    description:
      "Three friends, one busy oven, and a menu built on recipes we actually grew up eating.",
  },
  {
    title: "Fresh, daily",
    description:
      "Dough is proofed every morning. No shortcuts, no freezer pizza pretending otherwise.",
  },
  {
    title: "Vilseck local",
    description:
      "Right on the Marktplatz. Walk in, call ahead, or order online for delivery or pickup.",
  },
] as const;
