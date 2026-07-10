export const AUTH_KEY = "loftLivingDemoAuthed";
export const THEME_KEY = "loftLivingTheme";
export const BASE_RENT = 1450;
export const UTILITIES = 30;
export const PAY_STEP = 50;
export const MIN_PAYMENT = 50;
export const CATEGORIES = ["Plumbing", "Electrical", "Appliance", "HVAC", "Pest control", "Other"];
export const REWARDS_TABS = ["Earn", "Redeem", "Benefits", "Activity"];

export function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const SEED_REQUESTS = [
  { id: 1, title: "Leaking kitchen faucet", category: "Plumbing", urgent: true, date: "Jul 6", status: "In progress" },
  { id: 2, title: "AC not cooling", category: "HVAC", urgent: false, date: "Jun 28", status: "Resolved" },
  { id: 3, title: "Hallway light out", category: "Electrical", urgent: false, date: "Jun 14", status: "Resolved" },
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
