import "./App.css";
import Home from "./components/Home"; // Ensure Home component is correctly defined and exported in './components/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./components/Menu";
import MainMenu from "./components/Common/Menu";
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
        <div className="flex flex-col min-h-screen ">
          <MainMenu />

        </div>
      </BrowserRouter>
      {/* <Products /> */}
    </div>
  );
}

export default App;
