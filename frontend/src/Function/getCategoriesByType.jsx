import React from "react";

const getCategoriesByType = (arrray, type) => {
  return arrray.filter((data) => data.type === type);
};

export default getCategoriesByType;
