import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";


import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "coin/:coinId",
        element: <Coin />,
      },
      {
        path:"/features",
        element:<Features/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/pricing",
        element:<Pricing/>
      },
      
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;