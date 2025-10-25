"use client";

import { usePathname } from "next/navigation";
import { faHouse, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import { faWater } from "@fortawesome/free-solid-svg-icons/faWater";

const NavbarWrapper: React.FC = () => {
	const pathname = usePathname();

	const links = [
		{ href: "#home", label: "Főoldal", icon: faHouse },
		{ href: "#services", label: "Szolgáltatások", icon: faWater },
		{ href: "#priceList", label: "Árlista", icon: faMoneyBill },
	];

	return <Navbar currentPath={pathname} links={links} />;
};

export default NavbarWrapper;
