import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/main.css';
import 'remixicon/fonts/remixicon.css';
import './styles.css';
import './vars.css';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
