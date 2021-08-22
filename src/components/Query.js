import { useQuery } from "@apollo/client";
import React from "react";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug },
  });

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data ,loading});
};

export default Query;