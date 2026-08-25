import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antellay-X | Intelligent Machines",
  description:
    "Production frontend for Antellay-X robotics and autonomous machine systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#101118] text-[#ededf7]">{children}</body>
    </html>
  );
}
