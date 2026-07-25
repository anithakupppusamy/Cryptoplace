import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";


import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer";


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