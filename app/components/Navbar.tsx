import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-15 bg-gradient-to-r from-[#2d4b97] to-[#217066] p-2 border">
      <Link className="font-bold text-white text-2xl" href="/">
        Home
      </Link>
      <Link className="font-bold text-white text-2xl" href="/portfolio">
        Portfolio
      </Link>
      <Link className="font-bold text-white text-2xl" href="/about">
        About
      </Link>
      <Link className="font-bold text-white text-2xl" href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
