import React from "react";
import { notFound } from "next/navigation";

async function ReviewPage({ params }) {
  const { dynamicId } = await params;

  if (dynamicId == "yo") notFound();

  return <div>Review for {dynamicId}</div>;
}

export default ReviewPage;
