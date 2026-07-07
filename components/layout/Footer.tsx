import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-6 py-14">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Logo & About */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary">
                            Cake & Bake
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            Freshly baked cakes, cookies and artisan bread made with
                            premium ingredients. We bake every day with love and care.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Useful Links
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/#cakes" className="hover:text-primary transition-colors">
                                    Collections
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact#faq"
                                   className="hover:text-primary transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="text-muted-foreground">
                                    Rawalpindi, Pakistan
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <span className="text-muted-foreground">
                                    +92 300 1234567
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <span className="text-muted-foreground">
                                    info@cakebake.com
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <Link
                                href="#"
                                className="rounded-full border border-border p-3 hover:bg-primary hover:text-primary-foreground transition"
                            >
                                <FaFacebookF className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-border p-3 hover:bg-primary hover:text-primary-foreground transition"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </Link>

                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-border pt-6 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Cake & Bake. All Rights Reserved.
                    </p>

                    <p>
                        Developed by <span className="font-medium text-primary">Aimen Nawaz</span>
                    </p>

                </div>

            </div>
        </footer>
    );
}