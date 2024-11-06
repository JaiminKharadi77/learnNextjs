"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const authLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/sign-up" },
];

function layout({ children }) {
  const pathname = usePathname();

  const [input, setInput] = useState("");

  return (
    <div className="">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-red-100"
      />
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
