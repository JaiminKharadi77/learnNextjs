import React from "react";

export const generateMetadata = async ({ params }) => {
  const { dynamicId } = await params;

  return {
    title: `Dyanamic Meta Data ${dynamicId}`,
  };
};

async function DynamicId({ params }) {
  const { dynamicId } = await params;

  return <div>Dynamic ID {dynamicId}</div>;
}

export default DynamicId;
