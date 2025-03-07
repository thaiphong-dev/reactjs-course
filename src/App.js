import "./App.css";
import Home from "./components/Home"; // Ensure Home component is correctly defined and exported in './components/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./components/Menu";
// JSX
function App() {
  // Component

  const list = [
    {
      name: "phong",
      age: "25",
      gender: "male",
    },
    {
      name: "phong1",
      age: "253",
      gender: "male",
    },
    {
      name: "phong2",
      age: "235",
      gender: "male",
    },
  ];

  const listFemale = [
    {
      name: "female234",
      age: "25",
      gender: "female",
    },
    {
      name: "female2234",
      age: "253",
      gender: "female",
    },
    {
      name: "female2324",
      age: "235",
      gender: "female",
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* <nav className="bg-gray-800 p-4 text-white flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/me">Me</Link>
          </nav> */}
          <main className="flex-1 p-4">
            <Routes>
              <Route
                path="/"
                element={<Home male={list} female={listFemale} />}
              />
              <Route
                path="/menu"
                element={<Menu />}
              />

              {/* <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/me" element={<Me />} /> */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      {/* <Products /> */}
    </div>
  );
}

export default App;
