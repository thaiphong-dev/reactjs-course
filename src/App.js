import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import { AuthProvider } from "./context/testProvider";
import Learn from "./components/Learn";
import { Fragment } from "react";
// JSX
function App() {
  // Component

  //  routing => định nghĩa các đường dẫn cho các component khác nhau

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={
            < >
              <AuthProvider>
                <Learn />
                <Home />
              </AuthProvider>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
