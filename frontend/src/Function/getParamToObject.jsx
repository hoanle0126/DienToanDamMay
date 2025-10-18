import React from "react";

const getParamToObject = (query) => {
  const params = new URLSearchParams(query);

  const obj = Object.fromEntries(
    Array.from(params.entries()).map(([key, value]) => [
      key,
      isNaN(value) ? value : Number(value),
    ])
  );

  return obj;
};

export default getParamToObject;
