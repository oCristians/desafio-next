import type { Metadata } from "next";
import { Taviraj } from "next/font/google";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
const taviraj = Taviraj({
  weight: ['300','400','500','600','700','800','900'],
  style: ['normal'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Titulo de teste",
  description: "Descrição de teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={taviraj.className}>{children}</body>
    </html>
  );
}
