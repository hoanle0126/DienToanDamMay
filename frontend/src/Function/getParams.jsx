import React from "react";

const getParams = (url) => {
    return new URLSearchParams(url.split("?")[1]);
};

export default getParams;
