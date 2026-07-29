"use client";
import Link from "next/link";
import { Bookmark, MapPin, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ProfileMenu from "@/components/common/ProfileMenu";
import { useCart } from "@/app/context/CartContext";
import NavbarCart from "@/components/common/NavbarCart";
import NavbarWishlist from "../common/WishList";

export default function Navbar() {
    const { cartItems} = useCart();
    const { totalWishlistItems } = useWishlist();
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };



    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );



    return (
        <header className="sticky top-0 z-50 border-b bg-background shadow-sm">

            <nav className="bg-background">

                {/* ================= Top Navbar ================= */}
                <div className="flex items-center justify-between border-b px-6 lg:px-10 h-20 sm:h-16 sm:px-6">

                    {/* Left - Delivery */}
                    <div className="hidden md:flex items-center gap-3">

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
                        className="text-lg font-bold tracking-[1px] text-primary sm:text-xl sm:tracking-[2px] md:text-2xl md:tracking-[4px] lg:text-4xl lg:tracking-[8px]"
                        >
                        Cake & Bake
                        
                    </Link>

                    {/* Right - Wishlist, Cart, Profile */}
                    <div className="flex items-center  sm:gap-0 md:gap-1 lg:gap-1">
                        {/* Wishlist */}
                        <NavbarWishlist/>
                        <NavbarCart />
                        <ProfileMenu />

                    </div>

                </div>



            </nav>
        </header>
    );
}