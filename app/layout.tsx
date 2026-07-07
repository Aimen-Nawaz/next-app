import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CartProvider from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            {children}
          </WishlistProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}