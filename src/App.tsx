import { createRoot } from "react-dom/client";

import "./styles/globals.css";
import { Main } from "./Main";
import { ToastsProvider } from "./toast";

const App = () => {
  return (
    <ToastsProvider>
      <Main />
    </ToastsProvider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
