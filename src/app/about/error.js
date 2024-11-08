"use client";
import React from "react";

function ErrorComponent({ error, reset }) {
  return (
    <div>
      <h3>Static Error Message</h3>
      <h3>ERROR MESSAGE FROM PROPS:-{error.message}</h3>
      <button onClick={reset} className="bg-red-300 text-black p-5">
        Try Again
      </button>
    </div>
  );
}

export default ErrorComponent;
