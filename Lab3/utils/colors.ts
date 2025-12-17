export const colorScheme = {
  background: "rgb(14, 17, 21)",
  foreground: "rgb(240, 242, 245)",
  card: "rgb(21, 24, 30)",
  cardForeground: "rgb(240, 242, 245)",
  popover: "rgb(25, 29, 36)",
  popoverForeground: "rgb(240, 242, 245)",
  primary: "rgb(25, 230, 212)",
  primaryForeground: "rgb(14, 17, 21)",
  secondary: "rgb(33, 36, 44)",
  secondaryForeground: "rgb(209, 217, 224)",
  muted: "rgb(39, 44, 53)",
  mutedForeground: "rgb(123, 137, 157)",
  accent: "rgb(25, 230, 212)",
  accentForeground: "rgb(14, 17, 21)",
  destructive: "rgb(221, 60, 60)",
  destructiveForeground: "rgb(248, 250, 252)",
  border: "rgb(39, 44, 53)",
  input: "rgb(33, 36, 44)",
  ring: "rgb(25, 230, 212)",
  sidebarBackground: "rgb(250, 250, 250)",
  sidebarForeground: "rgb(63, 63, 70)",
  sidebarPrimary: "rgb(24, 24, 27)",
  sidebarPrimaryForeground: "rgb(250, 250, 250)",
  sidebarAccent: "rgb(244, 244, 245)",
  sidebarAccentForeground: "rgb(24, 24, 27)",
  sidebarBorder: "rgb(229, 231, 235)",
  sidebarRing: "rgb(59, 130, 246)",
};

export const spacing = {
  radius: "12px",
};

export function primayGlow(
  size: "2xl" | "xl" | "lg" | "md" | "sm" | "xs",
  opacity?: number
): string {
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
  } rgba(25, 230, 212, ${opacity ? opacity : 0.3})`;
}

export function cardGlow(size: "2xl" | "xl" | "lg" | "md" | "sm" | "xs"): string {
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
  } ${colorScheme.card}`;
}

export const languageColors = {
  csharp: "rgb(23, 134, 0)",
  javascript: "rgb(255, 213, 0)",
  typescript: "rgb(48, 140, 232)",
  python: "rgb(217, 172, 38)",
  rust: "rgb(217, 83, 38)",
  go: "rgb(38, 187, 217)",
  java: "rgb(232, 94, 48)",
  cpp: "rgb(209, 71, 140)",
  ruby: "rgb(221, 60, 60)",
  swift: "rgb(244, 89, 37)",
  kotlin: "rgb(153, 82, 224)",
  php: "rgb(79, 93, 149)",
  c: "rgb(85, 85, 85)",
};
