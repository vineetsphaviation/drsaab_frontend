import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// Navigation links are objects so their fields stay explicit at each call site.
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Panchayat Model", href: "/panchayat-modal" },
  { label: "Urban Partner", href: "/urban-partner" },
  { label: "Franchise", href: "/franchise" },
  // { label: "Support", href: "/support" },
  { label: "About Us", href: "/about-us" },
  // { label: "Contact Us", href: "/contact-us" },
];

// Footer links are objects so their fields stay explicit at each call site.
export const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Services",
    href: "/our-services",
  },
  {
    label: "Panchayat Model",
    href: "/panchayat-modal",
  },
  {
    label: "Urban Partner",
    href: "/urban-partner",
  },
  {
    label: "Franchise",
    href: "/franchise",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
];

// footer social links
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
];

export const supportLinks = [
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
