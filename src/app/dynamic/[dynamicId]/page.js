import React from "react";

export const generateMetadata = async ({ params }) => {
  const { dynamicId } = await params;

  return {
    title: { absolute: `Dyanamic Meta Data ${dynamicId}` }, // absolute will ignonre template set by it parent component
  };
};

async function DynamicId({ params }) {
  const { dynamicId } = await params;

  return <div>Dynamic ID {dynamicId}</div>;
}

export default DynamicId;
