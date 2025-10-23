"use client";

import { usePathname } from "next/navigation";
import {
  faTasks,
  faCog,
  faUser,
  faHouse,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import { faWater } from "@fortawesome/free-solid-svg-icons/faWater";

const NavbarWrapper: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Főoldal", icon: faHouse },
    { href: "/szolgaltatasaink", label: "Szolgáltatásaink", icon: faWater },
    { href: "/arlista", label: "Árlista", icon: faMoneyBill },
  ];

  return <Navbar currentPath={pathname} links={links} />;
};

export default NavbarWrapper;
