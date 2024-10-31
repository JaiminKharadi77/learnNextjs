import React from "react";

async function DynamicId({ params }) {
  const { dynamicId } = await params;

  return <div>Dynamic ID {dynamicId}</div>;
}

export default DynamicId;
