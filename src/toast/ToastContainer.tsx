import styled from "styled-components";

import { Toast } from "./Toast";
import { useToasts } from "./ToastsContext";

const ToastsContainer = styled.div`
  align-items: center;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

export function ToastContainer() {
  const toasts = useToasts();

  return (
    <ToastsContainer>
      {toasts && toasts.map((toast) => <Toast toast={toast} key={toast.id} />)}
    </ToastsContainer>
  );
}
