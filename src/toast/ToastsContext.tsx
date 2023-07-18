import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { Intent } from "./types";

export const ToastsContext = createContext<ToastsState>([] as ToastsState);
export const ToastsDispatchContext = createContext<Dispatch<ToastsAction>>(
  {} as Dispatch<ToastsAction>
);

export function ToastsProvider({ children }: { children: React.ReactNode }) {
  const [toasts, dispatch] = useReducer(toastsReducer, [] as ToastsState);

  return (
    <ToastsContext.Provider value={toasts}>
      <ToastsDispatchContext.Provider value={dispatch}>
        {children}
      </ToastsDispatchContext.Provider>
    </ToastsContext.Provider>
  );
}

export function useToasts() {
  return useContext(ToastsContext);
}

export function useToastsDispatch() {
  return useContext(ToastsDispatchContext);
}

export type Toast = { id: string; intent: Intent; message: string };
type DeletedAction = {
  id: string;
  type: "deleted";
};
type AddedAction = {
  toast: Toast;
  type: "added";
};
type ToastsAction = AddedAction | DeletedAction;
type ToastsState = Toast[];

function toastsReducer(toasts: ToastsState, action: ToastsAction): ToastsState {
  switch (action.type) {
    case "added": {
      return [...toasts, action.toast];
    }
    case "deleted": {
      return toasts.filter((t) => t.id !== action.id);
    }
    default: {
      return toasts;
    }
  }
}
