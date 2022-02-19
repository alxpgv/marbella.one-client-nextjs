import { MenuItemsProps } from "@/layout/Navigation/NavBar";

export const menuItems: MenuItemsProps[] = [
  { title: "About me", url: "/about" },
  { title: "Our services", url: "/services" },
  { title: "Real Estate", url: "/realestate" },
  {
    title: "Owners",
    url: "/owners",
    child: [
      {
        title: "Sell luxury real estate",
        url: "#",
      },
      {
        title: "Real estate price",
        url: "#",
      },
      {
        title: "We guarantee",
        url: "#",
      },
      {
        title: "Reasons to cooperate with us",
        url: "#",
      },
    ],
  },
  { title: "Blog", url: "/blog" },
  { title: "Contacts", url: "/contact" },
];
