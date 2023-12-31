import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="">DEV BLOG</div>
        </Link>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
