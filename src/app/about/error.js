"use client";
import React from "react";

function ErrorComponent({ error }) {
  return (
    <div>
      <h3>Static Error Message</h3>
      <h3>ERROR MESSAGE FROM PROPS:-{error.message}</h3>
    </div>
  );
}

export default ErrorComponent;
