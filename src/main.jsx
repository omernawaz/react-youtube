import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./pages/Search";
import Navbar from "./pages/Navbar.jsx";
import View from "./pages/View";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import store from "./app/store.js";
import { Provider } from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search/:videoId",
        element: <Search />,
      },
      {
        path: "view/:videoId",
        element: <View />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
