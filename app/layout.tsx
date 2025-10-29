"use client";
import "./globals.css";
import NavbarWrapper from "./Navbar/navbarWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>
        {children}
        <NavbarWrapper />
      </body>
    </html>
  );
}
