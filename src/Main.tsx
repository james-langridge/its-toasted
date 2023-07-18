import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { generateToast } from "./lib";
import { ToastContainer } from "./toast";
import { useToastsDispatch } from "./toast/ToastsContext";

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
  const dispatch = useToastsDispatch();

  function addToast() {
    const toast = generateToast();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const id: string = uuidv4();

    dispatch({
      toast: { ...toast, id },
      type: "added",
    });
  }

  return (
    <>
      <ToastContainer />
      <AppContainer>
        <Button onClick={addToast}>Click Me</Button>
      </AppContainer>
    </>
  );
}
