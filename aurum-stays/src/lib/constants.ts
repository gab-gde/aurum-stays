export const SITE_NAME = "AURUM STAYS";
export const SITE_DESCRIPTION = "Curated collection of the world\u2019s most exclusive luxury properties";
export const CLEANING_FEE = 250;
export const SERVICE_FEE_RATE = 0.08;
export const MAX_GUESTS = 20;
export const PROPERTY_TYPES = ["VILLA", "PENTHOUSE", "CHALET", "ESTATE", "APARTMENT", "MANSION"] as const;
export const NAV_LINKS = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export const ADMIN_NAV = [
  { href: "/admin", label: "Dashboard", icon: "\u2302" },
  { href: "/admin/properties", label: "Properties", icon: "\u2616" },
  { href: "/admin/bookings", label: "Bookings", icon: "\u2637" },
  { href: "/admin/users", label: "Users", icon: "\u263A" },
];
