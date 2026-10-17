import type { Localized } from "@/lib/i18n";

export type MenuItem = {
  name: Localized;
  description?: Localized;
  /** Single price in EUR, or the M size for pizzas */
  price: number;
  /** XL size price in EUR (pizzas only) */
  priceXl?: number;
  /** Portion note, e.g. "6 pcs" */
  portion?: Localized;
  /** Additive/allergen codes as printed on the in-store menu */
  allergens?: string;
  tag?: "bestseller";
};

export type MenuCategory = {
  id: string;
  label: Localized;
  note?: Localized;
  items: MenuItem[];
};

export type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

export const business = {
  name: "Friends Pizza",
  url: "https://friendspizza-vilseck.de",
  address: {
    street: "Marktplatz 30",
    postalCode: "92249",
    city: "Vilseck",
    full: "Marktplatz 30, 92249 Vilseck, Germany",
  },
  phone: "09662 3999 705",
  phoneHref: "+4996623999705",
  email: "info@friendspizza-vilseck.de",
  orderUrl: "https://friends-pizza.order.app.hd.digital/menus",
  owner: "Fatmir Fazliji",
  social: {
    instagram: "https://www.instagram.com/friendspizzavilseck/",
    facebook: "https://www.facebook.com/profile.php?id=100086550342046",
  },
} as const;

export const googleReviews = {
  // As shown on Google Maps (checked via public listings, Oct 2026). Update when it changes.
  rating: "5.0",
  count: 65,
  url: "https://www.google.com/maps/search/?api=1&query=Friends%20Pizza%2C%20Marktplatz%2030%2C%2092249%20Vilseck",
} as const;

export const openingHours = {
  opens: "16:00",
  closes: "23:00",
  /** schema.org day names; Thursday is the rest day */
  days: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
  closedDay: "Thursday",
} as const;

/** Google Maps route to the shop. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.address.full
)}`;

export const deliveryArea = ["Vilseck", "Rose Barracks"] as const;
export const deliveryRadiusKm = 5;

// Paste real Google reviews here (quote, first name + initial, stars).
// The section shows the Google rating only until this list has entries.
export const testimonials: Testimonial[] = [];

// Mirrors the live menu at friendspizza-vilseck.de/menu (synced 2026-10-15),
// checked against the printed menu on 2026-10-17 (Veggie, Ham, Tuna Salad, Ben & Jerry's added).
export const menu: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    note: { en: "M (12″) / XL (16″)", de: "M (12″) / XL (16″)" },
    items: [
      {
        name: "Pepperoni",
        description: {
          en: "Tomato sauce, mozzarella, pepperoni",
          de: "Tomatensauce, Mozzarella, Pepperoni",
        },
        price: 10.5,
        priceXl: 22.5,
        allergens: "1,2,3,4,a,b,j",
        tag: "bestseller",
      },
      {
        name: "Salami",
        description: {
          en: "Tomato sauce, mozzarella, salami",
          de: "Tomatensauce, Mozzarella, Salami",
        },
        price: 10.5,
        priceXl: 22.5,
        allergens: "1,2,3,a,b",
      },
      {
        name: "Margherita",
        description: {
          en: "Tomato sauce, mozzarella, fresh basil, salt, extra-virgin olive oil",
          de: "Tomatensauce, Mozzarella, frisches Basilikum, Salz, natives Olivenöl extra",
        },
        price: 9.9,
        priceXl: 21.5,
        allergens: "3,a,b",
      },
      {
        name: "Meat Pizza",
        description: {
          en: "Tomato sauce, mozzarella, bacon, ham, pepperoni, pulled beef",
          de: "Tomatensauce, Mozzarella, Bacon, Schinken, Pepperoni, Pulled Beef",
        },
        price: 13,
        priceXl: 26.2,
        allergens: "1,2,3,4,5,a,b,j",
      },
      {
        name: "BBQ Chicken",
        description: {
          en: "Barbecue sauce, mozzarella, grilled chicken, bell peppers, onions",
          de: "Barbecuesauce, Mozzarella, gegrilltes Hähnchen, Paprika, Zwiebeln",
        },
        price: 12.9,
        priceXl: 24.8,
        allergens: "a,b",
      },
      {
        name: "Hawaii",
        description: {
          en: "Tomato sauce, ham, mozzarella, pineapple",
          de: "Tomatensauce, Schinken, Mozzarella, Ananas",
        },
        price: 12.2,
        priceXl: 24.5,
        allergens: "2,3,4,5,6,a,b",
      },
      {
        name: "Funghi",
        description: {
          en: "Tomato sauce, mozzarella, mushrooms, parsley",
          de: "Tomatensauce, Mozzarella, Champignons, Petersilie",
        },
        price: 11.5,
        priceXl: 22.9,
        allergens: "3,a,b",
      },
      {
        name: "Supreme",
        description: {
          en: "Tomato sauce, mozzarella, pepperoni, pulled beef, bell peppers, olives, onions, mushrooms",
          de: "Tomatensauce, Mozzarella, Pepperoni, Pulled Beef, Paprika, Oliven, Zwiebeln, Champignons",
        },
        price: 12.9,
        priceXl: 25.5,
        allergens: "1,2,3,4,5,6,8,a,b,h",
        tag: "bestseller",
      },
      {
        name: "Quattro Formaggi",
        description: {
          en: "Tomato sauce, gorgonzola, feta, mozzarella, parmigiano reggiano",
          de: "Tomatensauce, Gorgonzola, Feta, Mozzarella, Parmigiano Reggiano",
        },
        price: 12.2,
        priceXl: 24.9,
        allergens: "4,a,b,h",
      },
      {
        name: "Bianco",
        description: {
          en: "Cream sauce, mozzarella, ham, crispy bacon, mushrooms",
          de: "Sahnesauce, Mozzarella, Schinken, knuspriger Bacon, Champignons",
        },
        price: 12.9,
        priceXl: 24.9,
        allergens: "1,2,3,5,a,b,h",
      },
      {
        name: "Pizza Tuna",
        description: {
          en: "Tomato sauce, tuna, onions, mozzarella, olives",
          de: "Tomatensauce, Thunfisch, Zwiebeln, Mozzarella, Oliven",
        },
        price: 11.9,
        priceXl: 23.5,
        allergens: "1,2,3,4,8,a,b,c",
      },
      {
        name: "Sujuk Pizza",
        description: {
          en: "Tomato sauce, mozzarella, sujuk, feta, black olives",
          de: "Tomatensauce, Mozzarella, Sucuk, Feta, schwarze Oliven",
        },
        price: 12.5,
        priceXl: 24.9,
        allergens: "1,2,3,4,8,a,b",
      },
      {
        name: "Friends Pizza",
        description: {
          en: "Tomato sauce, mozzarella, beef ham, mushrooms, parmesan, rucola",
          de: "Tomatensauce, Mozzarella, Rinderschinken, Champignons, Parmesan, Rucola",
        },
        price: 12.5,
        priceXl: 24.9,
      },
      {
        name: "Veggie Pizza",
        description: {
          en: "Tomato sauce, mozzarella, red onions, bell peppers, mushrooms, olives, banana peppers, arugula, parmesan",
          de: "Tomatensauce, Mozzarella, rote Zwiebeln, Paprika, Champignons, Oliven, Bananenpaprika, Rucola, Parmesan",
        },
        price: 12.2,
        priceXl: 23.9,
      },
      {
        name: { en: "Ham Pizza", de: "Schinken-Pizza" },
        description: {
          en: "Tomato sauce, mozzarella, ham, mushrooms",
          de: "Tomatensauce, Mozzarella, Schinken, Champignons",
        },
        price: 12.2,
        priceXl: 23.9,
      },
      {
        name: { en: "Garlic Pizza Bread", de: "Knoblauch-Pizzabrot" },
        price: 5,
      },
    ],
  },
  {
    id: "finger-food",
    label: "Finger Food",
    items: [
      { name: "Mozzarella Sticks", portion: { en: "6 pcs", de: "6 Stk." }, price: 8.4, allergens: "1,a,d,i" },
      { name: "Poppers", portion: { en: "6 pcs", de: "6 Stk." }, price: 8.4, allergens: "1,a,d,i" },
      { name: "Buffalo Chicken Wings", portion: { en: "10 pcs", de: "10 Stk." }, price: 12.5 },
      { name: "Curly Fries", price: 7.5, allergens: "4,h" },
      { name: { en: "French Fries", de: "Pommes frites" }, price: 5.5 },
      { name: "Meat 'n' Cheese Fries", price: 8.7, allergens: "1,3,h" },
      { name: { en: "Onion Rings", de: "Zwiebelringe" }, price: 7.3 },
      { name: "Chicken Nuggets", portion: { en: "8 pcs", de: "8 Stk." }, price: 8.4 },
    ],
  },
  {
    id: "burgers",
    label: "Burger",
    items: [
      {
        name: "Cheeseburger",
        description: {
          en: "Cheddar, lettuce, tomatoes, onions, pickles, burger sauce",
          de: "Cheddar, Salat, Tomaten, Zwiebeln, Gewürzgurken, Burgersauce",
        },
        price: 9,
        allergens: "1,a,b",
      },
      {
        name: "Chicken Burger",
        description: {
          en: "Tomatoes, cheese, lettuce, onions, ranch sauce",
          de: "Tomaten, Käse, Salat, Zwiebeln, Ranch-Sauce",
        },
        price: 9,
        allergens: "1,a,b",
      },
      {
        name: "Pulled Beef Burger",
        description: {
          en: "Barbecue sauce, cheddar, lettuce, onions, tomatoes",
          de: "Barbecuesauce, Cheddar, Salat, Zwiebeln, Tomaten",
        },
        price: 9.5,
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Mac 'n' Cheese", price: 8 },
      { name: "Alfredo Pasta (Rigatoni)", price: 10, allergens: "1,a,b,h,d" },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    note: {
      en: "Add to any pizza, burger or pasta",
      de: "Für jede Pizza, jeden Burger und jede Pasta",
    },
    items: [
      { name: { en: "Chicken", de: "Hähnchen" }, price: 2 },
      { name: { en: "Mushrooms", de: "Champignons" }, price: 1 },
      { name: "Bacon", price: 2 },
      { name: { en: "Onions", de: "Zwiebeln" }, price: 1 },
      { name: "Pulled Beef", price: 2 },
      { name: "Jalapeños", price: 1 },
    ],
  },
  {
    id: "salads",
    label: { en: "Salads", de: "Salate" },
    note: {
      en: "Dressing: vinegar & oil, ranch or yogurt",
      de: "Dressing: Essig & Öl, Ranch oder Joghurt",
    },
    items: [
      {
        name: { en: "Chicken Salad", de: "Hähnchensalat" },
        description: {
          en: "Grilled chicken, green salad, cucumbers, cherry tomatoes, onions, bell peppers, corn, parmesan",
          de: "Gegrilltes Hähnchen, grüner Salat, Gurken, Kirschtomaten, Zwiebeln, Paprika, Mais, Parmesan",
        },
        price: 9.5,
        allergens: "a,b",
      },
      {
        name: { en: "Mixed Salad", de: "Gemischter Salat" },
        description: {
          en: "Green salad, tomatoes, cucumbers, bell peppers, onions, parmesan",
          de: "Grüner Salat, Tomaten, Gurken, Paprika, Zwiebeln, Parmesan",
        },
        price: 7.5,
        allergens: "a,b",
      },
      {
        name: { en: "Tuna Salad", de: "Thunfischsalat" },
        description: {
          en: "Green salad, tomatoes, cucumbers, tuna, onions, olives, lemon slice",
          de: "Grüner Salat, Tomaten, Gurken, Thunfisch, Zwiebeln, Oliven, Zitronenscheibe",
        },
        price: 8.5,
        allergens: "a,b",
      },
    ],
  },
  {
    id: "dips",
    label: "Dips",
    items: [
      {
        name: "Dip",
        description: {
          en: "Ketchup, mayo, ranch, marinara, BBQ or garlic sauce",
          de: "Ketchup, Mayo, Ranch, Marinara, BBQ oder Knoblauchsauce",
        },
        price: 1,
        allergens: "1,2,4,d,e,j,k",
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: { en: "Strawberry Tiramisu", de: "Erdbeer-Tiramisu" }, price: 6, allergens: "a,b,d" },
      {
        name: "Ben & Jerry's",
        portion: "500 ml",
        description: {
          en: "Chocolate Fudge Brownie, Cookie Dough, Topped Salted Caramel or Strawberry Cheesecake",
          de: "Chocolate Fudge Brownie, Cookie Dough, Topped Salted Caramel oder Strawberry Cheesecake",
        },
        price: 9,
      },
    ],
  },
  {
    id: "drinks",
    label: { en: "Drinks", de: "Getränke" },
    note: { en: "Plus bottle deposit (Pfand)", de: "zzgl. Pfand" },
    items: [
      { name: "Coca-Cola", portion: "1 L", price: 3.7 },
      { name: "Mezzo Mix", portion: "1 L", price: 3.7 },
      { name: "Fanta", portion: "1 L", price: 3.7 },
      { name: "Sprite", portion: "1 L", price: 3.7 },
      { name: { en: "Pineapple Juice", de: "Ananassaft" }, portion: "1 L", price: 3.7 },
      { name: { en: "Orange Juice", de: "Orangensaft" }, portion: "1 L", price: 3.7 },
      { name: { en: "Apple Juice", de: "Apfelsaft" }, portion: "1 L", price: 3.7 },
      { name: { en: "Ice Tea", de: "Eistee" }, portion: { en: "1.5 L", de: "1,5 L" }, price: 3.7 },
      { name: { en: "Water", de: "Wasser" }, portion: { en: "1.5 L", de: "1,5 L" }, price: 3 },
    ],
  },
];

/**
 * Legend for the codes in `MenuItem.allergens`, as printed on the in-store menu.
 * Numbers are additives, letters are allergens (there is no "g").
 */
export const allergenLegend: { code: string; label: Localized }[] = [
  { code: "1", label: { en: "colouring", de: "mit Farbstoff" } },
  { code: "2", label: { en: "antioxidant", de: "mit Antioxidationsmittel" } },
  { code: "3", label: { en: "preservative", de: "mit Konservierungsstoff" } },
  { code: "4", label: { en: "flavour enhancer", de: "mit Geschmacksverstärker" } },
  { code: "5", label: { en: "phosphate", de: "mit Phosphat" } },
  { code: "6", label: { en: "with sweeteners", de: "mit Süßungsmittel" } },
  { code: "7", label: { en: "modified starch", de: "modifizierte Stärke" } },
  { code: "8", label: { en: "blackened", de: "geschwärzt" } },
  { code: "a", label: { en: "gluten (wheat)", de: "glutenhaltiges Getreide (Weizen)" } },
  { code: "b", label: { en: "milk, lactose", de: "Milch, Laktose" } },
  { code: "c", label: { en: "fish", de: "Fisch" } },
  { code: "d", label: { en: "egg", de: "Ei" } },
  { code: "e", label: { en: "celery", de: "Sellerie" } },
  { code: "f", label: { en: "nuts", de: "Schalenfrüchte (Nüsse)" } },
  { code: "h", label: { en: "sulphites", de: "Schwefeldioxid, Sulfite" } },
  { code: "i", label: { en: "soy", de: "Soja" } },
  { code: "j", label: { en: "mustard", de: "Senf" } },
  { code: "k", label: { en: "sesame", de: "Sesam" } },
];

/** Item count and lowest price. Sized items (pizzas) only, so garlic bread doesn't count as a pizza. */
export function categorySummary(category: MenuCategory) {
  const sized = category.items.filter((item) => item.priceXl);
  const items = sized.length > 0 ? sized : category.items;
  return { count: items.length, from: Math.min(...items.map((item) => item.price)) };
}

/** Category tiles on the home page; ids match menu category ids. */
export const featuredCategoryIds = ["pizza", "burgers", "pasta", "salads", "dessert", "drinks"] as const;
