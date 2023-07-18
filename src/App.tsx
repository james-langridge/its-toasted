import { useState } from "react";
import { createRoot } from "react-dom/client";
import styled, { createGlobalStyle } from "styled-components";

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

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Button = styled.button`
  height: 25px;
  width: 75px;
`;

const App = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <Button onClick={() => setShowToast(!showToast)}>Click me</Button>
      {showToast && <Toast intent="Danger" message="This is a toast." />}
    </Container>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
