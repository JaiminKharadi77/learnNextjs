import React from "react";

async function Docs({ params }) {
  const t = await params;

  console.log("Params", t.slug);

  if (t.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for Slug1:{t.slug[0]} and Slug2:{t.slug[1]}
      </h1>
    );
  }

  if (t.slug?.length === 1) {
    return <h1>Viewing Docs for Slug1 {t.slug[0]}</h1>;
  }

  return <h1>Docs Page</h1>;
}

export default Docs;
