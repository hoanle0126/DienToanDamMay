import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "@/router";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ThemeContext from "./Context";

createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeContext>
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          <RouterProvider router={MainRouter} />
        </ThemeProvider>
      </Provider>
    </ThemeContext>
  </LocalizationProvider>
);
