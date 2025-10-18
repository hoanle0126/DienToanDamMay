import React from "react";

const getPriceValue = (price) => {
    return price.base_price - (price.base_price * price.sales) / 100;
};

export default getPriceValue;
