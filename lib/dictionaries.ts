import type { Locale } from "@/lib/i18n";

// All copy sticks to facts the owner confirmed: location, menu, hours,
// delivery area, payment. No invented history or quality claims.

const en = {
  meta: {
    siteTitle: "Friends Pizza Vilseck | Pizza Delivery & Pickup",
    siteDescription:
      "Pizza, wings, burgers and pasta from the Marktplatz in Vilseck. Delivery across Vilseck and to Rose Barracks, daily from 16:00 to 23:00, closed Thursdays.",
    ogLocale: "en_US",
    menuTitle: "Menu & Prices",
    menuDescription:
      "The full Friends Pizza menu with prices: 14 pizzas in M and XL, finger food, burgers, pasta, salads, dessert and drinks. Order for pickup or delivery in Vilseck.",
    aboutTitle: "About Us",
    aboutDescription:
      "Friends Pizza is the pizzeria and delivery service on the Marktplatz in Vilseck, serving the town and Rose Barracks every day except Thursday.",
    contactTitle: "Contact, Hours & Delivery Area",
    contactDescription:
      "Call 09662 3999 705 or visit us at Marktplatz 30, 92249 Vilseck. Open from 16:00 to 23:00, closed Thursdays. Delivery in Vilseck and to Rose Barracks.",
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
    toggleTheme: "Switch light / dark mode",
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
    factHours: "16:00-23:00 · closed Thu",
    factService: "Delivery & pickup",
    imageAlt: "Friends Pizza with rucola, mushrooms and parmesan, fresh from the oven",
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
  gallery: {
    stamp: "From our kitchen",
    title: "Made fresh on the Marktplatz.",
    items: [
      { caption: "Pizza in M or XL", alt: "A slice of pizza with rucola being lifted from the pie" },
      { caption: "Burgers & finger food", alt: "Burger with crispy patty, lettuce and red onion on a sesame bun" },
      { caption: "Marktplatz 30, Vilseck", alt: "Friends Pizza storefront on the Marktplatz in Vilseck" },
    ],
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
    imageAlt: "Tossing pizza dough in the Friends Pizza kitchen in Vilseck",
    p2: "We cook for our neighbours in town and for the families and soldiers at Rose Barracks. Order online, give us a call, or stop by: we're open every day except Thursday, from 16:00 to 23:00.",
  },
  location: {
    stamp: "Find us",
    title: "On the Marktplatz.",
    hoursTitle: "Opening hours",
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    today: "Today",
    restDay: "Closed",
    restDayNote: "Thursday is our weekly rest day.",
    serviceTitle: "Delivery & payment",
    deliveryLabel: "Delivery area",
    deliveryValue: "Vilseck & Rose Barracks (~5 km)",
    pickupLabel: "Pickup",
    pickupValue: "Marktplatz 30",
    paymentLabel: "Payment",
    paymentValue: "Cash or card",
    mapTitle: "Map showing the Friends Pizza location in Vilseck",
  },
  status: {
    open: "Open now · until {close}",
    before: "Opens today at {open}",
    afterTomorrow: "Closed now · opens tomorrow at {open}",
    afterFriday: "Closed now · opens Friday at {open}",
    restDay: "Closed today (rest day) · back Friday at {open}",
  },
  contact: {
    stamp: "Get in touch",
    title: "Order, ask, or just say hi.",
    call: "Call",
    email: "Email",
  },
  cookies: {
    title: "Cookies & privacy",
    text: "This site only stores what it needs to work, like your light or dark mode. Google Maps is loaded only if you allow it, because it sends data to Google.",
    privacyLink: "Privacy policy",
    acceptAll: "Accept all",
    necessaryOnly: "Only necessary",
    settings: "Settings",
    save: "Save selection",
    necessaryTitle: "Necessary",
    necessaryText: "Your light or dark mode and your cookie choice.",
    alwaysOn: "Always on",
    mapsTitle: "Google Maps",
    mapsText: "Shows our location on an interactive map. Google receives your IP address and may set cookies.",
    footerLink: "Cookie settings",
    mapPlaceholder: "The map is provided by Google Maps. Loading it sends data to Google.",
    loadMap: "Load map",
    openInMaps: "Open in Google Maps",
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
      "Pizza, Wings, Burger und Pasta vom Marktplatz in Vilseck. Lieferung in ganz Vilseck und zur Rose Barracks, Abholung täglich von 16 bis 23 Uhr, Donnerstag Ruhetag.",
    ogLocale: "de_DE",
    menuTitle: "Speisekarte & Preise",
    menuDescription:
      "Die komplette Speisekarte von Friends Pizza mit Preisen: 14 Pizzen in M und XL, Fingerfood, Burger, Pasta, Salate, Dessert und Getränke. Zum Abholen oder mit Lieferung in Vilseck.",
    aboutTitle: "Über uns",
    aboutDescription:
      "Friends Pizza ist die Pizzeria und der Lieferservice am Marktplatz in Vilseck. Für die Stadt und die Rose Barracks, jeden Tag außer Donnerstag.",
    contactTitle: "Kontakt, Öffnungszeiten & Liefergebiet",
    contactDescription:
      "Rufen Sie uns an unter 09662 3999 705 oder besuchen Sie uns am Marktplatz 30, 92249 Vilseck. Geöffnet von 16 bis 23 Uhr, Donnerstag Ruhetag. Lieferung in Vilseck und zur Rose Barracks.",
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
    toggleTheme: "Hell- / Dunkelmodus wechseln",
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
      "Pizza in M oder XL, Wings, Pommes, Burger und Pasta, frisch auf Bestellung am Marktplatz zubereitet. Zum Abholen oder mit Lieferung in ganz Vilseck und zur Rose Barracks.",
    factHours: "16-23 Uhr · Do Ruhetag",
    factService: "Lieferung & Abholung",
    imageAlt: "Friends Pizza mit Rucola, Champignons und Parmesan, frisch aus dem Ofen",
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
        "Von der klassischen Margherita bis zur Supreme und unserer Hauspizza Friends Pizza. Jede Pizza gibt es in M oder XL, für eine Person oder den ganzen Tisch.",
    },
    {
      title: "Bar oder mit Karte",
      description:
        "Bezahlen Sie, wie Sie möchten: an der Theke oder an der Haustür. Bei Abholung und Lieferung nehmen wir Bargeld und Karte.",
    },
  ],
  categories: {
    label: "Kategorien der Speisekarte",
  },
  gallery: {
    stamp: "Aus unserer Küche",
    title: "Frisch gemacht am Marktplatz.",
    items: [
      { caption: "Pizza in M oder XL", alt: "Ein Stück Pizza mit Rucola wird angehoben" },
      { caption: "Burger & Fingerfood", alt: "Burger mit knusprigem Patty, Salat und roten Zwiebeln im Sesambrötchen" },
      { caption: "Marktplatz 30, Vilseck", alt: "Ladenfront von Friends Pizza am Marktplatz in Vilseck" },
    ],
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
    p1: "Friends Pizza ist eine kleine Pizzeria mit Lieferservice mitten in Vilseck, am Marktplatz 30. Wir backen Pizzen in M und XL und machen dazu Wings, Pommes, Burger, Pasta und Salate. Alles frisch auf Bestellung, sobald Sie anrufen oder online bestellen.",
    imageAlt: "Pizzateig wird in der Küche von Friends Pizza in Vilseck geschwungen",
    p2: "Wir kochen für unsere Nachbarn in der Stadt und für die Familien und Soldaten der Rose Barracks. Bestellen Sie online, rufen Sie an oder kommen Sie vorbei: Wir haben jeden Tag außer Donnerstag von 16 bis 23 Uhr geöffnet.",
  },
  location: {
    stamp: "So finden Sie uns",
    title: "Am Marktplatz.",
    hoursTitle: "Öffnungszeiten",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    today: "Heute",
    restDay: "Ruhetag",
    restDayNote: "Donnerstag ist unser wöchentlicher Ruhetag.",
    serviceTitle: "Lieferung & Bezahlung",
    deliveryLabel: "Liefergebiet",
    deliveryValue: "Vilseck & Rose Barracks (~5 km)",
    pickupLabel: "Abholung",
    pickupValue: "Marktplatz 30",
    paymentLabel: "Bezahlung",
    paymentValue: "Bar oder Karte",
    mapTitle: "Karte mit dem Standort von Friends Pizza in Vilseck",
  },
  status: {
    open: "Jetzt geöffnet · bis {close} Uhr",
    before: "Öffnet heute um {open} Uhr",
    afterTomorrow: "Jetzt geschlossen · öffnet morgen um {open} Uhr",
    afterFriday: "Jetzt geschlossen · öffnet Freitag um {open} Uhr",
    restDay: "Donnerstag ist Ruhetag · ab Freitag {open} Uhr wieder für Sie da",
  },
  contact: {
    stamp: "Kontakt",
    title: "Bestellen, fragen oder einfach Hallo sagen.",
    call: "Anrufen",
    email: "E-Mail",
  },
  cookies: {
    title: "Cookies & Datenschutz",
    text: "Diese Website speichert nur, was sie zum Funktionieren braucht, etwa Ihren hellen oder dunklen Modus. Google Maps wird nur geladen, wenn Sie zustimmen, da dabei Daten an Google übertragen werden.",
    privacyLink: "Datenschutzerklärung",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    settings: "Einstellungen",
    save: "Auswahl speichern",
    necessaryTitle: "Notwendig",
    necessaryText: "Ihr heller oder dunkler Modus und Ihre Cookie-Auswahl.",
    alwaysOn: "Immer aktiv",
    mapsTitle: "Google Maps",
    mapsText: "Zeigt unseren Standort auf einer interaktiven Karte. Google erhält Ihre IP-Adresse und kann Cookies setzen.",
    footerLink: "Cookie-Einstellungen",
    mapPlaceholder: "Die Karte wird von Google Maps bereitgestellt. Beim Laden werden Daten an Google übertragen.",
    loadMap: "Karte laden",
    openInMaps: "In Google Maps öffnen",
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
