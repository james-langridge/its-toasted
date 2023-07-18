import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import { Toast } from "./components/toast";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f3f3f3;
    color: #333;
  }

  html,
  body {
    max-width: 100vw;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toast intent="Danger" message="This is a toast." />
    </>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
