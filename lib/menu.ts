export type MenuItem = {
  name: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export type Deal = {
  name: string;
  includes: string;
  price: string;
};

export const menuDisclaimer =
  "Prices for all items listed below may vary based on customisation requirements.";

export const menuSections: MenuSection[] = [
  {
    id: "whipped-cream",
    title: "Cakes — Whipped Cream",
    note: "Priced per pound. Multiply by the number of pounds ordered.",
    items: [
      { name: "Vanilla / Chocolate", price: "Rs. 1,700" },
      { name: "Chocolate Fudge", price: "Rs. 2,000" },
    ],
  },
  {
    id: "buttercream",
    title: "Cakes — Buttercream",
    note: "Priced per pound, unless noted as bento.",
    items: [
      { name: "Vanilla / Chocolate", price: "Rs. 2,800" },
      { name: "Chocolate Fudge", price: "Rs. 3,200" },
      { name: "Bento Vanilla / Chocolate", price: "Rs. 1,600" },
      { name: "Bento Chocolate Fudge", price: "Rs. 2,000" },
    ],
  },
  {
    id: "bento-whipped",
    title: "Bento Cakes (Whipped Cream)",
    items: [
      { name: "Vanilla / Chocolate", price: "Rs. 1,200" },
      { name: "Chocolate Fudge", price: "Rs. 1,500" },
      { name: "4–5\" Brownie Bento", price: "Rs. 1,000 – 1,200" },
    ],
  },
  {
    id: "matilda",
    title: "Matilda Cake",
    items: [
      { name: "Bento (1 lb)", price: "Rs. 1,600" },
      { name: "2–2.5 lb", price: "Rs. 3,200" },
    ],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    items: [
      { name: "Whipped Cream Cupcakes — 6 pcs", price: "Rs. 1,300" },
      { name: "Whipped Cream Cupcakes — 12 pcs", price: "Rs. 2,200" },
      { name: "Buttercream Cupcakes — 6 pcs", price: "Rs. 2,000" },
      { name: "Buttercream Cupcakes — 12 pcs", price: "Rs. 3,500" },
      { name: "Whipped Cream One Bite (20 pcs)", price: "Rs. 2,000" },
      { name: "Buttercream One Bite (20 pcs)", price: "Rs. 3,000" },
      { name: "Whipped Cream Boucake", price: "Rs. 2,700" },
      { name: "Butter Cream Boucake", price: "Rs. 3,200" },
    ],
  },
  {
    id: "brownies",
    title: "Brownies",
    items: [
      { name: "6 pc Fudge", price: "Rs. 1,300" },
      { name: "6 pc Oreo Fudge", price: "Rs. 1,500" },
      { name: "7×7 Fudge Slab", price: "Rs. 2,200" },
      { name: "6×6 Fudge Slab", price: "Rs. 1,800" },
      { name: "35 pcs Brownie Bites", price: "Rs. 1,800" },
    ],
  },
  {
    id: "pastry",
    title: "Pastry",
    items: [
      { name: "5 pc Black Forest Pastry", price: "Rs. 1,700" },
    ],
  },
  {
    id: "banana-bread",
    title: "Banana Bread",
    items: [{ name: "Large Loaf", price: "Rs. 1,200" }],
  },
];

export const menuDeals: Deal[] = [
  {
    name: "Deal 1",
    includes: "1 Whipped Cream Bento + 2 Cupcakes",
    price: "Rs. 1,800",
  },
  {
    name: "Deal 2",
    includes: "1 Buttercream Bento + 2 Cupcakes",
    price: "Rs. 2,600",
  },
  {
    name: "Deal 3",
    includes: "1 Whipped Cream Bento + 8 Roses",
    price: "Rs. 2,400",
  },
  {
    name: "Deal 4",
    includes: "1 Buttercream Bento + 8 Roses",
    price: "Rs. 2,700",
  },
  {
    name: "Deal 5",
    includes: "1 Bento + 1 Bouquet",
    price: "Rs. 2,300",
  },
  {
    name: "Deal 6",
    includes: "1 Banana Bread + 6 Brownies",
    price: "Rs. 3,000",
  },
];

export const menuNotes = [
  "Prices are exclusive of fondant work.",
  "Bouquets & gifts can be added with additional cost.",
];

export const orderingPolicy = [
  "Place orders at least 3–4 days prior.",
  "We cannot promise 100% replication of any reference provided — we ensure 60–70% similarity.",
  "100% prepayment is required to confirm your order.",
  "We do not offer delivery. Customers can pick up their order or arrange pickup via InDrive/Yango.",
  "Customers are responsible for the ride cost.",
  "We recommend booking a car instead of a bike to ensure the cake's safety.",
  "We are not responsible for any damage once the order has left our premises.",
  "Orders cannot be cancelled once booked.",
  "Rude customers will not be entertained, even on the day of delivery. No refunds will be provided under any circumstances — please communicate respectfully.",
];

export const deliveryNotice = [
  "Delivery is not our responsibility; damage during delivery is not considered our fault.",
  "Always book a car, not a bike.",
  "We do not usually book rides on your behalf. If we do, please stay available for the rider — we will not field calls from the rider if you're unreachable.",
  "Double-check the phone number provided and remain available for pickup.",
];
