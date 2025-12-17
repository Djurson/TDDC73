export const colorScheme = {
  background: "14, 17, 21",
  foreground: "240, 242, 245",
  card: "21, 24, 30",
  cardForeground: "240, 242, 245",
  popover: "25, 29, 36",
  popoverForeground: "240, 242, 245",
  primary: "25, 230, 212",
  primaryForeground: "14, 17, 21",
  secondary: "33, 36, 44",
  secondaryForeground: "209, 217, 224",
  muted: "39, 44, 53",
  mutedForeground: "23, 137, 157",
  accent: "25, 230, 212",
  accentForeground: "14, 17, 21",
  destructive: "221, 60, 60",
  destructiveForeground: "248, 250, 252",
  border: "39, 44, 53",
  input: "33, 36, 44",
  ring: "25, 230, 212",
  javascript: "255, 213, 0",
  typescript: "48, 140, 232",
  python: "217, 172, 38",
  rust: "217, 83, 38",
  go: "38, 187, 217",
  java: "232, 94, 48",
  cpp: "209, 71, 140",
  ruby: "221, 60, 60",
  swift: "244, 89, 37",
  kotlin: "153, 82, 224",
  sidebarBackground: "250, 250, 250",
  sidebarForeground: "63, 63, 70",
  sidebarPrimary: "24, 24, 27",
  sidebarPrimaryForeground: "250, 250, 250",
  sidebarAccent: "244, 244, 245",
  sidebarAccentForeground: "24, 24, 27",
  sidebarBorder: "229, 231, 235",
  sidebarRing: "59, 130, 246",
};

export const spacing = {
  radius: "12px",
};

export function primayGlow(size: "2xl" | "xl" | "lg" | "md" | "sm" | "xs"): string {
  return `0 0 ${
    size === "2xl"
      ? "24px"
      : size === "xl"
      ? "20px"
      : size === "lg"
      ? "16px"
      : size === "md"
      ? "12px"
      : size === "sm"
      ? "8px"
      : "4px"
  } rgba(${colorScheme.primary}, 0.3)`;
}

export function cardGlow(size: "2xl" | "xl" | "lg" | "md" | "sm" | "xs"): string {
  return `0 16px ${
    size === "2xl"
      ? "24px"
      : size === "xl"
      ? "20px"
      : size === "lg"
      ? "16px"
      : size === "md"
      ? "12px"
      : size === "sm"
      ? "8px"
      : "4px"
  } rgba(${colorScheme.card}, 1)`;
}
