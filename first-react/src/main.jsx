import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { HelloWorld } from "./components/helloworld";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld></HelloWorld>
  </StrictMode>
);
