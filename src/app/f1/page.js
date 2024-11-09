import React from "react";
import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>This is F1 Page</h1>
      <Link href={"/f1/f2"} className="text-blue-500">
        Go to F2 Page
      </Link>
    </div>
  );
}
