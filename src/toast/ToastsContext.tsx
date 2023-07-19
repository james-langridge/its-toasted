import React, { createContext, Dispatch, useContext, useReducer } from "react";
import styled from "styled-components";

import { Toast } from "./Toast";
import { ToastsAction, ToastsState } from "./types";

const ToastsContext = createContext<ToastsState>([] as ToastsState);
const ToastsDispatchContext = createContext<Dispatch<ToastsAction>>(
  {} as Dispatch<ToastsAction>
);

export function ToastsProvider({ children }: { children: React.ReactNode }) {
  const [toasts, dispatch] = useReducer(toastsReducer, [] as ToastsState);

  return (
    <ToastsContext.Provider value={toasts}>
      <ToastsDispatchContext.Provider value={dispatch}>
        <Toasts />
        {children}
      </ToastsDispatchContext.Provider>
    </ToastsContext.Provider>
  );
}

const ToastsContainer = styled.div`
  align-items: center;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

function Toasts() {
  const toasts = useToasts();

  return (
    <ToastsContainer>
      {toasts && toasts.map((toast) => <Toast toast={toast} key={toast.id} />)}
    </ToastsContainer>
  );
}

export function useToasts() {
  return useContext(ToastsContext);
}

export function useToastsDispatch() {
  return useContext(ToastsDispatchContext);
}

function toastsReducer(toasts: ToastsState, action: ToastsAction): ToastsState {
  switch (action.type) {
    case "added": {
      return [action.toast, ...toasts];
    }
    case "deleted": {
      return toasts.filter((t) => t.id !== action.id);
    }
    default: {
      return toasts;
    }
  }
}
