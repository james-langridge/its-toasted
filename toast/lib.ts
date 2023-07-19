import { AddToast } from "./types";

export function generateToast(): AddToast {
  const toasts: AddToast[] = [
    {
      intent: "Success",
      message:
        "I’ll never turn to the dark side. You’ve failed, your Highness. I am a Jedi, like my father before me.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum elit sit amet mattis facilisis. Praesent vel dui vitae nulla laoreet sollicitudin at eget erat. Quisque urna nisl, euismod sit amet tortor quis, rhoncus efficitur lorem. Pellentesque volutpat dui sit amet ex venenatis elementum. Nam velit lorem, suscipit sit amet mauris nec, mattis dictum lectus. Etiam ultrices sodales libero. Suspendisse fringilla purus et eros feugiat, non rutrum arcu rutrum. Morbi justo odio, tincidunt mattis arcu nec, finibus faucibus purus. Mauris sit amet sagittis velit, in egestas enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et justo nisi. Donec congue sagittis dapibus. Suspendisse sit amet eleifend tellus, et feugiat mi. Sed vitae ligula quis dolor eleifend feugiat eu eu nulla.",
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

export function limitStringLength(input: string, limit = 50): string {
  if (input.length <= limit) {
    return input;
  }

  return input.substring(0, limit) + "...";
}
