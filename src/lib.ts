import { Toast } from "./toast/ToastsContext";

export function generateToast(): Omit<Toast, "id"> {
  const toasts: Omit<Toast, "id">[] = [
    {
      intent: "Success",
      message:
        "I’ll never turn to the dark side. You’ve failed, your Highness. I am a Jedi, like my father before me.",
    },
    {
      intent: "Warning",
      message: "It's a trap!",
    },
    {
      intent: "Danger",
      message: "I find your lack of faith disturbing.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * toasts.length);

  return toasts[randomIndex];
}
