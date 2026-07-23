"use client";
import Link from "next/link";
import { Bookmark, MapPin, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProfileMenu from "@/components/common/ProfileMenu";
import { useCart } from "@/app/context/CartContext";
import NavbarCart from "@/components/common/NavbarCart";



export default function Navbar() {
  const { cartItems, totalPrice } = useCart();
  const { totalWishlistItems } = useWishlist();
  const pathname = usePathname();
 
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }
  
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: "Home", href: "/#hero", path: "/", id: "hero" },
    { name: "Cakes", href: "/#cakes", path: "/cakes", id: "cakes" },
    { name: "Cookies", href: "/#cookies", path: "/cookies", id: "cookies" },
    { name: "Bread", href: "/#bread", path: "/bread", id: "bread" },
    { name: "About", href: "/#about", path: "/about", id: "about" },
    { name: "Contact", href: "/#contact", path: "/contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = ["hero", "cakes", "cookies", "bread", "about",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );



  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <nav className="bg-background">

        {/* ================= Top Navbar ================= */}
        <div className="flex items-center justify-between border-b px-6 lg:px-10 h-20">

          {/* Left - Delivery */}
          <div className="hidden lg:flex items-center gap-3">

            <MapPin className="h-8 w-8 text-primary" />

            <div>
              <p className="text-sm font-semibold text-foreground">
                Delivery To
              </p>

              <p className="text-xs text-muted-foreground">
                F-8/3, Islamabad • 45 mins
              </p>
            </div>

          </div>

          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-bold tracking-[8px] text-primary"
          >
            Cake & Bake
          </Link>

          {/* Right - Wishlist, Cart, Profile */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <Link href="/wishlist">
              <Button
                size="icon"
                variant="ghost"
                className="relative"
              >
                <Bookmark className="size-7" />

                {totalWishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 p-0 text-xs text-white flex items-center justify-center">
                    {totalWishlistItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <NavbarCart />
            <ProfileMenu />

          </div>

        </div>

        {/* ================= Bottom Navbar ================= */}

        <div className="border-b bg-background">

          <div className="mx-auto flex max-w-7xl justify-center gap-4 py-4">

            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`rounded-full px-6 py-2 transition ${pathname === "/"
                  ? activeSection === link.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                  : pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>

      </nav>
    </header>
  );
}