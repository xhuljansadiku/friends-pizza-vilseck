import type { Locale } from "@/lib/i18n";

// All copy sticks to facts the owner confirmed: location, menu, hours,
// delivery area, payment. No invented history or quality claims.

const en = {
  meta: {
    siteTitle: "Friends Pizza Vilseck | Pizza Delivery & Pickup",
    siteDescription:
      "Pizza, wings, burgers and pasta from the Marktplatz in Vilseck. Delivery across Vilseck and to Rose Barracks, pickup daily 16:00–23:00, closed Thursdays.",
    ogLocale: "en_US",
    menuTitle: "Menu & Prices",
    menuDescription:
      "The full Friends Pizza menu with prices: 14 pizzas in M and XL, finger food, burgers, pasta, salads, dessert and drinks. Order for pickup or delivery in Vilseck.",
    aboutTitle: "About Us",
    aboutDescription:
      "Friends Pizza is the pizzeria and delivery service on the Marktplatz in Vilseck, serving the town and Rose Barracks every day except Thursday.",
    contactTitle: "Contact, Hours & Delivery Area",
    contactDescription:
      "Call 09662 3999 705 or visit us at Marktplatz 30, 92249 Vilseck. Open 16:00–23:00, closed Thursdays. Delivery in Vilseck and to Rose Barracks.",
  },
  nav: {
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
    order: "Order online",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    siteNavigation: "Site navigation",
    skipToContent: "Skip to content",
    switchLanguage: "Deutsche Version",
  },
  common: {
    callUs: "Call us",
    orderNow: "Order now",
    viewMenu: "View menu",
    fullMenu: "See the full menu",
    bestseller: "Bestseller",
    closed: "Closed",
    getDirections: "Get directions",
  },
  hero: {
    stamp: "Marktplatz · Vilseck",
    titleStart: "Pizza in Vilseck,",
    titleEnd: "made by",
    intro:
      "Pizza in medium or XL, wings, fries, burgers and pasta, made to order on the Marktplatz. Pick it up or have it delivered anywhere in Vilseck and to Rose Barracks.",
    factHours: "16:00–23:00 · closed Thu",
    factService: "Delivery & pickup",
  },
  highlights: [
    {
      title: "Pickup or delivery",
      description:
        "Grab your order at the Marktplatz or let us bring it over. We deliver across Vilseck and to Rose Barracks, within about 5 km.",
    },
    {
      title: "14 pizzas, two sizes",
      description:
        "From a classic Margherita to the Supreme and our house Friends Pizza. Every pizza comes in M or XL, for one person or the whole table.",
    },
    {
      title: "Cash or card",
      description:
        "Pay however you like, at the counter or at your door. We take cash and card for both pickup and delivery.",
    },
  ],
  categories: {
    label: "Menu categories",
  },
  menuPreview: {
    stamp: "From the oven",
    title: "Our favourites",
    intro: "A few pizzas to get you started. Prices for M / XL.",
  },
  menu: {
    stamp: "Pickup & delivery",
    title: "Our menu",
    intro:
      "Pizza, finger food, burgers, pasta, salads and drinks. Order online, call us, or pick up at the Marktplatz in Vilseck.",
    priceNote: "All prices include VAT. Drinks plus bottle deposit (Pfand).",
  },
  reviews: {
    stamp: "What people say",
    title: "Rated {rating} on Google",
    subtitle: "From {count}+ reviews by our guests.",
    cta: "Read the reviews on Google",
  },
  about: {
    stamp: "About us",
    title: "Your pizza place on the Vilseck Marktplatz.",
    p1: "Friends Pizza is a small pizzeria and delivery service in the middle of Vilseck, at Marktplatz 30. We make pizzas in medium and XL, plus wings, fries, burgers, pasta and salads, all made to order when you call or click.",
    p2: "We cook for our neighbours in town and for the families and soldiers at Rose Barracks. Order online, give us a call, or stop by: we're open every day except Thursday, from 16:00 to 23:00.",
  },
  location: {
    stamp: "Find us",
    title: "On the Marktplatz.",
    hoursTitle: "Opening hours",
    days: {
      monWed: "Mon – Wed",
      thu: "Thursday",
      friSun: "Fri – Sun",
    },
    serviceTitle: "Delivery & payment",
    deliveryLabel: "Delivery area",
    deliveryValue: "Vilseck & Rose Barracks (~5 km)",
    pickupLabel: "Pickup",
    pickupValue: "Marktplatz 30",
    paymentLabel: "Payment",
    paymentValue: "Cash or card",
    mapTitle: "Map showing the Friends Pizza location in Vilseck",
  },
  contact: {
    stamp: "Get in touch",
    title: "Order, ask, or just say hi.",
    call: "Call",
    email: "Email",
  },
  footer: {
    rights: "All rights reserved.",
    footerNav: "Footer",
    legalNav: "Legal",
  },
  legal: {
    germanOnly: "This page is available in German only.",
  },
};

export type Dictionary = typeof en;

const de: Dictionary = {
  meta: {
    siteTitle: "Friends Pizza Vilseck | Pizza Lieferservice & Abholung",
    siteDescription:
      "Pizza, Wings, Burger und Pasta vom Marktplatz in Vilseck. Lieferung in ganz Vilseck und zur Rose Barracks, Abholung täglich 16–23 Uhr, Donnerstag Ruhetag.",
    ogLocale: "de_DE",
    menuTitle: "Speisekarte & Preise",
    menuDescription:
      "Die komplette Speisekarte von Friends Pizza mit Preisen: 14 Pizzen in M und XL, Fingerfood, Burger, Pasta, Salate, Dessert und Getränke. Zum Abholen oder mit Lieferung in Vilseck.",
    aboutTitle: "Über uns",
    aboutDescription:
      "Friends Pizza ist die Pizzeria und der Lieferservice am Marktplatz in Vilseck – für die Stadt und die Rose Barracks, jeden Tag außer Donnerstag.",
    contactTitle: "Kontakt, Öffnungszeiten & Liefergebiet",
    contactDescription:
      "Rufen Sie uns an unter 09662 3999 705 oder besuchen Sie uns am Marktplatz 30, 92249 Vilseck. Geöffnet 16–23 Uhr, Donnerstag Ruhetag. Lieferung in Vilseck und zur Rose Barracks.",
  },
  nav: {
    home: "Start",
    menu: "Speisekarte",
    about: "Über uns",
    contact: "Kontakt",
    order: "Online bestellen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    siteNavigation: "Seitennavigation",
    skipToContent: "Zum Inhalt springen",
    switchLanguage: "English version",
  },
  common: {
    callUs: "Anrufen",
    orderNow: "Jetzt bestellen",
    viewMenu: "Zur Speisekarte",
    fullMenu: "Ganze Speisekarte ansehen",
    bestseller: "Bestseller",
    closed: "Ruhetag",
    getDirections: "Route planen",
  },
  hero: {
    stamp: "Marktplatz · Vilseck",
    titleStart: "Pizza in Vilseck,",
    titleEnd: "gemacht von",
    intro:
      "Pizza in M oder XL, Wings, Pommes, Burger und Pasta – frisch auf Bestellung am Marktplatz zubereitet. Zum Abholen oder mit Lieferung in ganz Vilseck und zur Rose Barracks.",
    factHours: "16–23 Uhr · Do Ruhetag",
    factService: "Lieferung & Abholung",
  },
  highlights: [
    {
      title: "Abholen oder liefern lassen",
      description:
        "Holen Sie Ihre Bestellung am Marktplatz ab oder lassen Sie sie sich bringen. Wir liefern in ganz Vilseck und zur Rose Barracks, im Umkreis von etwa 5 km.",
    },
    {
      title: "14 Pizzen, zwei Größen",
      description:
        "Von der klassischen Margherita bis zur Supreme und unserer Hauspizza Friends Pizza. Jede Pizza gibt es in M oder XL – für eine Person oder den ganzen Tisch.",
    },
    {
      title: "Bar oder mit Karte",
      description:
        "Bezahlen Sie, wie Sie möchten – an der Theke oder an der Haustür. Bei Abholung und Lieferung nehmen wir Bargeld und Karte.",
    },
  ],
  categories: {
    label: "Kategorien der Speisekarte",
  },
  menuPreview: {
    stamp: "Aus dem Ofen",
    title: "Unsere Favoriten",
    intro: "Ein paar Pizzen für den ersten Hunger. Preise für M / XL.",
  },
  menu: {
    stamp: "Abholung & Lieferung",
    title: "Unsere Speisekarte",
    intro:
      "Pizza, Fingerfood, Burger, Pasta, Salate und Getränke. Online bestellen, anrufen oder am Marktplatz in Vilseck abholen.",
    priceNote: "Alle Preise inkl. MwSt. Getränke zzgl. Pfand.",
  },
  reviews: {
    stamp: "Das sagen unsere Gäste",
    title: "{rating} Sterne bei Google",
    subtitle: "Aus über {count} Bewertungen unserer Gäste.",
    cta: "Bewertungen auf Google lesen",
  },
  about: {
    stamp: "Über uns",
    title: "Ihre Pizzeria am Marktplatz in Vilseck.",
    p1: "Friends Pizza ist eine kleine Pizzeria mit Lieferservice mitten in Vilseck, am Marktplatz 30. Wir backen Pizzen in M und XL und machen dazu Wings, Pommes, Burger, Pasta und Salate – alles frisch auf Bestellung, sobald Sie anrufen oder online bestellen.",
    p2: "Wir kochen für unsere Nachbarn in der Stadt und für die Familien und Soldaten der Rose Barracks. Bestellen Sie online, rufen Sie an oder kommen Sie vorbei: Wir haben jeden Tag außer Donnerstag von 16 bis 23 Uhr geöffnet.",
  },
  location: {
    stamp: "So finden Sie uns",
    title: "Am Marktplatz.",
    hoursTitle: "Öffnungszeiten",
    days: {
      monWed: "Mo – Mi",
      thu: "Donnerstag",
      friSun: "Fr – So",
    },
    serviceTitle: "Lieferung & Bezahlung",
    deliveryLabel: "Liefergebiet",
    deliveryValue: "Vilseck & Rose Barracks (~5 km)",
    pickupLabel: "Abholung",
    pickupValue: "Marktplatz 30",
    paymentLabel: "Bezahlung",
    paymentValue: "Bar oder Karte",
    mapTitle: "Karte mit dem Standort von Friends Pizza in Vilseck",
  },
  contact: {
    stamp: "Kontakt",
    title: "Bestellen, fragen oder einfach Hallo sagen.",
    call: "Anrufen",
    email: "E-Mail",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    footerNav: "Fußzeile",
    legalNav: "Rechtliches",
  },
  legal: {
    germanOnly: "",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
