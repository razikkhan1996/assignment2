import { Route, Routes } from "react-router-dom";
import AddProduct from "./features/products/AddProduct";
import EditProduct from "./features/products/EditProduct";
import ProductList from "./features/products/ProductList";


function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">Create And Upadte Products Here!!!!! </h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-user" element={<AddProduct />} />
        <Route path="/edit-user/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
