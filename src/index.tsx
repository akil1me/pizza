import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { configStore } from "./store";

import { BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";

const rootEl = document.getElementById("root")

if(rootEl){
  const root = ReactDOM.createRoot(rootEl);
root.render(
  <BrowserRouter>
    <Provider store={configStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

}