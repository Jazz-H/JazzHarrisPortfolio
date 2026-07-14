export const AUTH_KEY = "loftLivingDemoAuthed";
export const THEME_KEY = "loftLivingTheme";
export const BASE_RENT = 1450;
export const UTILITIES = 30;
export const PAY_STEP = 50;
export const MIN_PAYMENT = 50;
export const CATEGORIES = ["Plumbing", "Electrical", "Appliance", "HVAC", "Pest control", "Other"];

export function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Mid-sentence and standalone display text for a payment method, shared by
// Home (lead card CTA) and Pay (method row, confirmation screen, history
// entries) so "bank account ····5678" / "cash code 123456" / "card ····4242"
// stay consistent everywhere a method gets mentioned.
export function methodPhrase(m) {
  if (!m) return null;
  if (m.type === "bank") return `bank account ····${m.last4}`;
  if (m.type === "cash") return `cash code ${m.code}`;
  return `card ····${m.last4}`;
}

export function methodLabel(m) {
  const p = methodPhrase(m);
  return p.charAt(0).toUpperCase() + p.slice(1);
}

export const PAYMENT_METHOD_TYPES = [
  { key: "bank", label: "Bank account (ACH)", sub: "No fee · 2–3 business days" },
  { key: "card", label: "Debit or credit card", sub: "2.9% processing fee" },
  { key: "cash", label: "Cash at retail", sub: "Pay in person · $3.99 fee" },
];

// The one recurring feature every top-rated resident app has that LOFT
// Living didn't: a property-wide notice on the home screen (Buildium
// Resident Center, RentCafe Resident).
export const ANNOUNCEMENTS = [
  {
    title: "Water shut off Thu, Jul 17 · 10am–2pm",
    detail: "For scheduled repairs in Building B",
  },
];

// Rewards are derived from real payment history rather than tracked as
// separate state, so a payment made in the Pay tab immediately shows up
// as points, credits, tier progress, and an Activity entry here. With the
// single seed payment in SEED_HISTORY these constants net out to the
// same 120 pts / $25 credits a first-time visitor should see.
export const POINTS_PER_PAYMENT = 10;
export const BASE_POINTS = 110;
export const CREDITS_PER_PAYMENT = 5;
export const BASE_CREDITS = 20;

export const REWARD_TIERS = [
  { key: "silver", name: "Silver", minPayments: 0 },
  { key: "gold", name: "Gold", minPayments: 5 },
  { key: "platinum", name: "Platinum", minPayments: 12 },
];

export const REWARD_CATALOG = [
  { key: "credit10", label: "$10 statement credit", cost: 100 },
  { key: "parking", label: "Reserved parking upgrade", sub: "1 month", cost: 150 },
  { key: "carpet", label: "In-unit carpet cleaning", sub: "One-time service", cost: 300 },
  { key: "credit50", label: "$50 statement credit", cost: 500 },
];

export const REWARD_BENEFITS = [
  { label: "Priority maintenance scheduling", iconKey: "tool" },
  { label: "Fee-free payment methods", iconKey: "creditCard" },
  { label: "Early access to renewal offers", iconKey: "clock" },
];

export function paymentsCount(history) {
  return history.filter((t) => t.amount < 0).length;
}

export function rewardsPoints(history) {
  return BASE_POINTS + paymentsCount(history) * POINTS_PER_PAYMENT;
}

export function rewardsCredits(history) {
  return BASE_CREDITS + paymentsCount(history) * CREDITS_PER_PAYMENT;
}

export function currentTier(history) {
  const count = paymentsCount(history);
  return REWARD_TIERS.reduce((cur, t) => (count >= t.minPayments ? t : cur), REWARD_TIERS[0]);
}

export function nextTier(history) {
  const count = paymentsCount(history);
  return REWARD_TIERS.find((t) => t.minPayments > count) ?? null;
}

export function spentPoints(redemptions) {
  return redemptions.reduce((sum, r) => sum + r.cost, 0);
}

export const SEED_REQUESTS = [
  {
    id: 1,
    title: "Leaking kitchen faucet",
    category: "Plumbing",
    urgent: true,
    okToEnter: true,
    desc: "Water pooling under the sink, worse when running hot water.",
    date: "Jul 6",
    status: "In progress",
    assignee: "Mike R.",
    eta: "Jul 9",
  },
  {
    id: 2,
    title: "AC not cooling",
    category: "HVAC",
    urgent: false,
    okToEnter: true,
    date: "Jun 28",
    status: "Resolved",
    resolvedDate: "Jun 29",
    resolution: "Replaced capacitor and recharged refrigerant. Tested cooling for 30 minutes.",
  },
  {
    id: 3,
    title: "Hallway light out",
    category: "Electrical",
    urgent: false,
    okToEnter: false,
    date: "Jun 14",
    status: "Resolved",
    resolvedDate: "Jun 16",
    resolution: "Replaced fixture and bulb, tested switch.",
  },
];

// Running balance is computed by folding over this list (see Pay.jsx's
// HistoryScreen), so amounts just need to net out to the current starting
// balance — two charges post Jul 1 with nothing paid against them yet,
// landing on the same $1,480 the app starts with.
export const SEED_HISTORY = [
  { id: 1, date: "Jun 1", desc: "Rent", amount: BASE_RENT },
  { id: 2, date: "Jun 1", desc: "Utilities", amount: UTILITIES },
  { id: 3, date: "Jun 3", desc: "Payment — card ····4242", amount: -(BASE_RENT + UTILITIES) },
  { id: 4, date: "Jul 1", desc: "Rent", amount: BASE_RENT },
  { id: 5, date: "Jul 1", desc: "Utilities", amount: UTILITIES },
];

export const MORE_SECTIONS = [
  {
    label: "My Account",
    items: [
      { key: "account", label: "Account Settings", sub: "Manage account details", iconKey: "settings" },
      { key: "profile", label: "My Public Profile", sub: "Edit your public info", iconKey: "user" },
    ],
  },
  {
    label: "My Apartment",
    items: [
      { key: "pay", label: "Payment Center", sub: "View balance & pay rent", iconKey: "creditCard", jump: true },
      { key: "maintenance", label: "Service Requests", sub: "Track maintenance requests", iconKey: "tool", jump: true },
      { key: "lease", label: "My Lease", sub: "View lease documents", iconKey: "fileText" },
    ],
  },
  {
    label: "My Community",
    items: [
      { key: "property", label: "Property Info", sub: "Contact & address", iconKey: "info" },
      { key: "rewards", label: "Rewards", sub: "Points, tier & perks", iconKey: "award" },
    ],
  },
];

export const DETAIL_CONTENT = {
  account: {
    title: "Account Settings",
    rows: [
      ["Name", "Jordan Ellis"],
      ["Email", "jordan@example.com"],
      ["Phone", "(555) 010-0142"],
      ["Notifications", "On"],
    ],
  },
  profile: {
    title: "My Public Profile",
    rows: [
      ["Display name", "Jordan E."],
      ["Visible to", "Your community"],
      ["Move-in date", "Mar 2025"],
    ],
  },
  lease: {
    title: "My Lease",
    rows: [
      ["Unit", "214"],
      ["Term", "Mar 2025 – Feb 2026"],
      ["Monthly rent", `$${fmt(BASE_RENT)}`],
      ["Renewal status", "Not yet offered"],
    ],
  },
  property: {
    title: "Property Info",
    rows: [
      ["Property", "Cedar Row Apartments"],
      ["Office phone", "(555) 010-0100"],
      ["Email", "leasing@example.com"],
      ["Address", "100 Main St, Anytown, ST"],
      ["Office hours", "Mon–Fri, 9am–6pm"],
    ],
  },
  events: {
    title: "Events",
    rows: [
      ["Rooftop Yoga", "Sat, Jul 12 · 9:00 AM"],
      ["Resident Mixer", "Fri, Jul 18 · 6:00 PM"],
      ["Food Truck Friday", "Fri, Jul 25 · 5:00 PM"],
      ["Community Yard Sale", "Sun, Aug 3 · 10:00 AM"],
    ],
  },
  docs: {
    title: "Docs",
    rows: [
      ["Lease Agreement", "Signed Mar 2025"],
      ["Move-in Checklist", "PDF"],
      ["Community Rules & Regulations", "PDF"],
      ["Renters Insurance Policy", "On file"],
    ],
  },
  amenities: {
    title: "Amenities",
    rows: [
      ["Fitness Center", "Open 5am–11pm"],
      ["Rooftop Lounge", "Open 8am–10pm"],
      ["Package Room", "24/7 access"],
      ["Resident Parking", "Assigned · Spot 214"],
    ],
  },
};
