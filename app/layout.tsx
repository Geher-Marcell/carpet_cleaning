"use client";
import "./globals.css";
import NavbarWrapper from "./Navbar/navbarWrapper";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="hu" className="scroll-smooth">
			<body>
				{children}
				<NavbarWrapper />
			</body>
		</html>
	);
}
