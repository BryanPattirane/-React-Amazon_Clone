import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";

function App() {
  return (
    <div className="app">
      {/* <Router> */}
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout/>
            </>
          }
        >
          {/* <p>Checkout Page!</p> */}
        </Route>
        <Route path="/login" element={<Login />}>
          {/* <p>Login Page!</p> */}
        </Route>
        {/* This is the default route, */} 

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
