import { FC } from "react";
import {  Cart, Home, NotFound } from "./pages";

import "./app.scss";
import { Route, Routes } from "react-router-dom";
import { Loyout } from "./layout";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
