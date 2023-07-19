type AddedAction = {
  toast: Toast;
  type: "added";
};

export type AddToast = {
  /**
   * The duration to display the toast in milliseconds.  Defaults to 6000.
   */
  autoCloseDuration?: number;

  /**
   * The style of the toast.  Chose between "Danger", "Success", and "Warning".
   */
  intent: Intent;

  /**
   * The message to display in the toast.
   */
  message: string;

  /**
   * The title to display on the toast.  This is limited to 50 characters.
   */
  title?: string;
};

export type AddToastProps = {
  toast: AddToast;
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
  autoCloseDuration: number;
  id: string;
  intent: Intent;
  message: string;
  title: string;
};

export type ToastProps = {
  toast: Toast;
};

export type ToastsAction = AddedAction | DeletedAction;

export type ToastsState = Toast[];
