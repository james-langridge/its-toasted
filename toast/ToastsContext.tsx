import React, { createContext, Dispatch, useContext, useReducer } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { Toast } from "./Toast";
import { AddToastProps, ToastsAction, ToastsState } from "./types";

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

function useToasts() {
  return useContext(ToastsContext);
}

export function useToastsDispatch() {
  return useContext(ToastsDispatchContext);
}

export function useAddToast() {
  const dispatch = useContext(ToastsDispatchContext);

  return function addToast({
    toast: { autoCloseDuration = 6000, intent, message, title = intent },
  }: AddToastProps) {
    dispatch({
      toast: {
        autoCloseDuration,
        id: uuidv4(),
        intent,
        message,
        title,
      },
      type: "added",
    });
  };
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
