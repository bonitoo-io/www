export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    hasDropdown?: boolean;
}

export const navigationItems: NavigationItem[] = [
    {id: "services", label: "Services", href: "/services"},
    {id: "case-studies", label: "Case studies", href: "/case-studies"},
    {id: "blog", label: "Blog", href: "/blog"},
    {id: "company", label: "Company", href: "/company", hasDropdown: true},
    {id: "contact", label: "Contact", href: "/contacts"},
];
