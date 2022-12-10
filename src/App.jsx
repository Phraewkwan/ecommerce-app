// import { Routes, Route } from "react-router-dom";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes,
  // BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/productList",
  //     element: <ProductList />,
  //   },
  //   {
  //     path: "/product",
  //     element: <Product />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/Login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  // ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
