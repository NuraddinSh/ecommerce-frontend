import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Route} from "react-router-dom"
import React from "react";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import ProductsLandingPage from "./pages/ProductsLandingPage";
import Products from "./pages/Products";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path={":categorise"} element={<Outlet /> }>
            <Route index element={<ProductsLandingPage />} />
            <Route path={":products"} element={<Products /> } />
        </Route>
        <Route path={"product-details"} element={<ProductDetails />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route path="*" element={<h1>Page doesn't exist</h1>} />
    </Route>
))


function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
