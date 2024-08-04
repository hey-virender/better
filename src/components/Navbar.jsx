import { Phone } from "lucide-react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navItems = ["home", "about", "start", "calculator"];
  return (
    <div className="flex justify-between px-5 items-center font-one py-3 bg-[#004733] text-white">
      <div className="text-lg flex gap-10">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        {navItems.map((navItem) => (
          <div key={navItem} className="capitalize">
            <Link href={`/${navItem == "home" ? "" : navItem}`}>{navItem}</Link>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <div className="border-2 border-white p-2 rounded-full">
          <Phone />
        </div>
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default Navbar;
