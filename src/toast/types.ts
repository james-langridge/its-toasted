import { Toast } from "./ToastsContext";

export type Intent = "Danger" | "Success" | "Warning";

export interface ContainerProps {
  intent: Intent;
}

export type ToastProps = {
  autoCloseDuration?: number;
  key: string;
  title?: string;
  toast: Toast;
};
