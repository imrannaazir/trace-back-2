"use client";

import Image from "next/image";
import { Tabs } from "../ui/Tab";

export function NavLinks() {
  const tabs = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Terms of Use",
      path: "terms-of-use",
    },
    {
      title: "Contact Us",
      path: "contact-us",
    },
    {
      title: "Found Items",
      path: "/found-items",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs tabs={tabs} />
    </div>
  );
}
