import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import CategoryStore from "./store/CategoryStore";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        product: new ProductStore(),
        category: new CategoryStore(),
        basket: new BasketStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
