"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const authLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/sign-up" },
];

function layout({ children }) {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="">
        {authLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? `font-bold mr-4` : "text-blue-500"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}

export default layout;
