import React, { createContext, useContext } from "react";

const StateContext = createContext({
  addressCheckout: {},
  setAddressCheckout: () => {},
});

const ThemeContext = ({ children }) => {
  const addressSession = localStorage.getItem("address_checkout");
  const [addressCheckout, setAddressCheckout] = React.useState(JSON.parse(addressSession));

  React.useEffect(() => {
    localStorage.setItem("address_checkout", JSON.stringify(addressCheckout));
  }, [addressCheckout]);

  return (
    <StateContext.Provider value={{ addressCheckout, setAddressCheckout }}>
      {children}
    </StateContext.Provider>
  );
};

export default ThemeContext;

export const useStateContext = () => useContext(StateContext);
