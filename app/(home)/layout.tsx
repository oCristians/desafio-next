import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="pt">
        <body className= "">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    );
  }