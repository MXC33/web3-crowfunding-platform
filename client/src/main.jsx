import React from "react";
import ReactDom from "react-dom/client";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import App from "./App";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
