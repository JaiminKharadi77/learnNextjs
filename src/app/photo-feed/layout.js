import React from "react";

function PhotoLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default PhotoLayout;
