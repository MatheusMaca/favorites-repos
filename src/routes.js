import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route
          path="/repositorio/:repositorio"
          element={<Repositorio />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
