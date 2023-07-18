import { Danger, Success, Warning } from "./icons";
import { Intent } from "./types";

export const intentBgColors: Record<Intent, string> = {
  Danger: "#eb5757",
  Success: "#6fcf97",
  Warning: "#f2c94c",
};

export const intentColors: Record<Intent, string> = {
  Danger: "#ffe8e8",
  Success: "#0f552c",
  Warning: "#6e5404",
};

export const intentIcons: Record<Intent, () => JSX.Element> = {
  Danger: Danger,
  Success: Success,
  Warning: Warning,
};
