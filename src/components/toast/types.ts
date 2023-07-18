export interface ContainerProps {
  intent: "Warning" | "Success" | "Danger";
}

export type ToastProps = {
  autoCloseDuration?: number;
  intent: "Danger" | "Success" | "Warning";
  message: string;
  title?: string;
};
