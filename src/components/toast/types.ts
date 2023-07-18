import { Dispatch, SetStateAction } from "react";

export interface ContainerProps {
  intent: "Warning" | "Success" | "Danger";
}

export type ToastProps = {
  autoCloseDuration?: number;
  intent: "Danger" | "Success" | "Warning";
  message: string;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  showToast: boolean;
  title?: string;
};
