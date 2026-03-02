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
  { href: "/admin", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/properties", label: "Properties", icon: "Building2" },
  { href: "/admin/bookings", label: "Bookings", icon: "CalendarCheck" },
  { href: "/admin/users", label: "Users", icon: "Users" },
];
