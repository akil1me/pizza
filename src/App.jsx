import { Cart, Home, NotFound } from "./pages";

import "./app.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      }
    </div>
  );
};

export default App;
