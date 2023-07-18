import { useState } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

import { Toast } from "./components/toast";
import "./styles/globals.css";

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
      <Button onClick={() => setShowToast(!showToast)}>Click me</Button>
      <Toast
        intent="Danger"
        message="This is a toast."
        setShowToast={setShowToast}
        showToast={showToast}
      />
    </Container>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
