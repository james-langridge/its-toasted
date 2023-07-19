type AddedAction = {
  toast: Toast;
  type: "added";
};

export interface ContainerProps {
  intent: Intent;
}

type DeletedAction = {
  id: string;
  type: "deleted";
};

export type Intent = "Danger" | "Success" | "Warning";

export type Toast = {
  autoCloseDuration?: number;
  id: string;
  intent: Intent;
  message: string;
  title?: string;
};

export type ToastProps = {
  toast: Toast;
};

export type ToastsAction = AddedAction | DeletedAction;

export type ToastsState = Toast[];
