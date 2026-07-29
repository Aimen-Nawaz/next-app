import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/app/Providers";
import FloatingCartBar from "@/components/common/FloatingCartBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Navbar />
          {children}
          <FloatingCartBar />
          <Footer />
        </Providers>

      </body>
    </html>
  );
}