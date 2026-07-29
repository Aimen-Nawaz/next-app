"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "cakes", label: "Cakes" },
  { id: "cookies", label: "Cookies" },
  { id: "bread", label: "Bread" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("cakes");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-3 py-3 sm:gap-2 sm:px-4 sm:py-4 lg:justify-center lg:gap-4">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors sm:px-5 sm:text-base lg:px-6  ${
            active === item.id
              ? "bg-primary text-primary-foreground"
              : "bg-secondary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}