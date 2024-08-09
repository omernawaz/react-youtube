import React from "react";
import Search from "./pages/Search";
import View from "./pages/View";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Search />,
  },
  {
    path: "/view/:videoId",
    element: <View />,
  },
]);

const App = () => {
  
};

export default App;
