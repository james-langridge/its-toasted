import styled from "styled-components";

import { useAddToast } from "./toast";
import { generateToast } from "./toast/lib";

const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 10px;
  width: 100vw;
`;

const Button = styled.button`
  border: firebrick 1px solid;
  border-radius: 50px;
  font-size: 50px;
  height: fit-content;
  padding: 10px;
  width: fit-content;

  &:hover {
    background-color: firebrick;
    color: #f3f3f3;
  }
`;

export function Main() {
  const addToast = useAddToast();

  return (
    <AppContainer>
      <Button onClick={() => addToast({ toast: generateToast() })}>
        Click Me
      </Button>
    </AppContainer>
  );
}
