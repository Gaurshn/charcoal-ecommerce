import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Lumpshop, { lumpShoploader } from "./pages/Lumpshop";
import Logshop from "./pages/Logshop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductPage from "./pages/Productpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout with Header/Footer
    children: [
      { index: true, element: <HomePage /> }, // / -> HomePage
      { path: "lumpshop", element: <Lumpshop />, loader: lumpShoploader },
      { path: "logshop", element: <Logshop /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:id", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
