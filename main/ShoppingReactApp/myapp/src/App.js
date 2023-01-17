import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Products";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;