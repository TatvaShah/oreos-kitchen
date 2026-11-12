import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Oreo's Kitchen",
  tagline: "Proper Nigerian meals, made fresh to order.",
  category: "Nigerian home cooking",
  schemaType: "FoodEstablishment",
  area: "Mississauga, ON",
  siteUrl: "https://oreos-kitchen.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#6b2a18" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Fresh to order",
    headline: "Nigerian meals for the week and for the table",
    subhead: "Soups, stews, rice bowls and party trays, delivered across the GTA. Order on WhatsApp.",
    images: [
      { src: "/images/post-5.jpg", alt: "Peppered meat and stew from Oreo's Kitchen" },
      { src: "/images/post-6.jpg", alt: "Peppered turkey from Oreo's Kitchen" },
      { src: "/images/post-7.jpg", alt: "Party trays from Oreo's Kitchen" },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/15192813349" },
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: ["Made fresh to order", "Saturday food bowls", "Party trays", "Delivered across the GTA"],

  about: {
    title: "Welcome to Oreo's Kitchen",
    body: [
      "Oreo's Kitchen makes proper Nigerian meals, fresh to order, with weekly family portions and party trays. Orders are placed on WhatsApp, and meals are delivered across the GTA.",
      "Saturday food bowl preorders close Friday at 7 PM. Bowls start at 2.2L, about 4 to 5 servings. For Christmas catering, send your event date, guest count and delivery location.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Peppered turkey from Oreo's Kitchen" },
  },

  menu: {
    label: "Menu",
    title: "What we cook",
    variant: "list",
    groups: [
      {
        title: "Weekly bowls and trays",
        items: [
          { name: "Saturday food bowls", description: "Soups, stews and rice bowls from 2.2L, about 4 to 5 servings. Preorders close Friday at 7 PM." },
          { name: "Jollof rice and shrimp fried rice trays" },
          { name: "Moimoi elewe" },
          { name: "Peppered turkey and peppered hake fish" },
          { name: "Pounded yam and efo riro" },
        ],
      },
      {
        title: "Classic Celebration Spread",
        note: "$585",
        items: [
          { name: "Large tray of jollof rice" },
          { name: "Small tray of shrimp fried rice" },
          { name: "20 pieces of moimoi elewe" },
          { name: "10 pieces of peppered turkey" },
          { name: "10 pieces of peppered hake fish" },
          { name: "5 wraps of pounded yam" },
          { name: "3.5L efo riro" },
        ],
      },
    ],
    footnote: "The Classic Celebration Spread price was posted on Instagram. Payment is by cash or Interac e-Transfer.",
  },

  gallery: {
    title: "From the kitchen",
    items: [
      { src: "/images/post-5.jpg", alt: "Peppered meat and stew from Oreo's Kitchen", caption: "Stew and peppered meat" },
      { src: "/images/post-6.jpg", alt: "Peppered turkey from Oreo's Kitchen", caption: "Peppered turkey" },
      { src: "/images/post-7.jpg", alt: "Party trays from Oreo's Kitchen", caption: "Party trays" },
      { src: "/images/post-8.jpg", alt: "Packaged food bowls from Oreo's Kitchen", caption: "Food bowls" },
      { src: "/images/post-3.jpg", alt: "Celebration meal bundles posted by Oreo's Kitchen", caption: "Celebration spreads" },
      { src: "/images/post-1.jpg", alt: "Stacked Saturday food bowls from Oreo's Kitchen", caption: "Saturday bowls" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "oreoskitchennca",
    embeds: ["https://www.instagram.com/reel/Dfh32awxENd/", "https://www.instagram.com/p/Dfbi-e7x4AK/"],
  },

  order: {
    label: "How to order",
    title: "Order on WhatsApp",
    intro: "Tap the button to start an order on WhatsApp. Saturday bowl preorders close Friday at 7 PM. For Christmas catering, send your event date, guest count and delivery location.",
    dmMessage: "Hi Oreo's Kitchen! I would like to order.\nDate needed:\nWhat you would like:\nDelivery area:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order on WhatsApp", href: "https://wa.me/15192813349" }],
    note: "Payment is by cash or Interac e-Transfer.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Order on WhatsApp at 519-281-3349. Saturday food bowl preorders close Friday at 7 PM." },
    { q: "Do you deliver?", a: "Oreo's Kitchen is based in Mississauga and delivers across the GTA." },
    { q: "What is in the Classic Celebration Spread?", a: "It is posted at $585 and includes a large tray of jollof rice, a small tray of shrimp fried rice, 20 pieces of moimoi elewe, 10 pieces of peppered turkey, 10 pieces of peppered hake fish, 5 wraps of pounded yam and 3.5L of efo riro." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga, Ontario",
    phone: "519-281-3349",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/oreoskitchennca/" }],
  },

  seo: {
    title: "Oreo's Kitchen | Nigerian home cooking in Mississauga",
    description: "Nigerian soups, stews, rice bowls and party trays in Mississauga, delivered across the GTA. Order on WhatsApp.",
    keywords: ["Nigerian food Mississauga", "jollof rice GTA", "Oreo's Kitchen"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
