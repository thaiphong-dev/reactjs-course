import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import { AuthProvider } from "./context/testProvider";
import Learn from "./components/Learn";
import { Fragment } from "react";
import { Test } from "./components/Test";
import { Todo } from "./components/Todo";



// JSX
function App() {
  // Component

  //  routing => định nghĩa các đường dẫn cho các component khác nhau

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider>  <Home /></AuthProvider>
            }
          />
           <Route
            path="/todo"
            element={
              <Todo/>
            }
          />
          <Route
            path="/learn"
            element={
              <>
                <AuthProvider>
                  <Learn />
                  <Home />
                </AuthProvider>
              </>
            }
          />
          <Route
            path="/test"
            element={
              <Fragment>
                  <Test />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
