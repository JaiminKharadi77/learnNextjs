"use client";

import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // enter /{href} to go to that page
    // router.back() it will get back to previous page
    // router.forward(); it will take you to home page
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-black text-white p-5 rounded-full transition-all hover:bg-red-200 hover:text-black"
      >
        Back To Home
      </button>
    </div>
  );
}

export default OrderProduct;
