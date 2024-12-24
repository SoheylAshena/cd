import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CombinedApp from "./App.jsx";
import "./fonts.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CombinedApp />
  </StrictMode>
);
