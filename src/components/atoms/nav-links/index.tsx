"use client";

import Link from "next/link";
import React from "react";

interface NavLinksProps {
  href: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLinksComponent = ({ href, children, active }: NavLinksProps) => {
  return (
    <Link
      href={href}
      className={
        active
          ? "text-blue-800 dark:text-blue-300 "
          : "text-black dark:text-blue-100"
      }
    >
      {children}
    </Link>
  );
};

export default NavLinksComponent;
