import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./ReducerAndContext/App";
// import App from "./useReducer/App";
// import App from "./useContext/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);