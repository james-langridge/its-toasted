import { v4 as uuidv4 } from "uuid";

import { Toast } from "./types";

export function generateToast(): Toast {
  const toasts: Toast[] = [
    {
      id: uuidv4(),
      intent: "Success",
      message:
        "I’ll never turn to the dark side. You’ve failed, your Highness. I am a Jedi, like my father before me.",
    },
    {
      id: uuidv4(),
      intent: "Warning",
      message: "It's a trap!",
    },
    {
      id: uuidv4(),
      intent: "Danger",
      message: "I find your lack of faith disturbing.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * toasts.length);

  return toasts[randomIndex];
}
