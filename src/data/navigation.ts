export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  mobile?: boolean;
  hasDropdown?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "case-studies", label: "Case studies", href: "/case-studies" },
  /*{id: "blog", label: "Blog", href: "/blog"},*/
  { id: "company", label: "Company", href: "/company", hasDropdown: true, mobile: true },
  { id: "contacts", label: "Contact", href: "/contacts" },
];
