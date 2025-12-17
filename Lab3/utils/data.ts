import { DropDownData } from "@/components/dropdown";
import { languageColors } from "./colors";

export const CommonLanguages: DropDownData[] = [
  { label: "Python", value: "Python", color: languageColors.python },
  { label: "JavaScript", value: "JavaScript", color: languageColors.javascript },
  { label: "Java", value: "Java", color: languageColors.java },
  { label: "C#", value: "C#", color: languageColors.csharp },
  { label: "C++", value: "C++", color: languageColors.cpp },
  { label: "TypeScript", value: "TypeScript", color: languageColors.typescript },
  { label: "Rust", value: "rust", color: languageColors.rust },
  { label: "Go", value: "Go", color: languageColors.go },
  { label: "PHP", value: "PHP", color: languageColors.php },
  { label: "C", value: "C", color: languageColors.c },
  { label: "Ruby", value: "ruby", color: languageColors.ruby },
  { label: "Kotlin", value: "kotlin", color: languageColors.kotlin },
  { label: "Swift", value: "swift", color: languageColors.swift },
];

export const DataPeriods: DropDownData[] = [
  { label: "This week", value: 7 },
  { label: "This month", value: 31 },
  { label: "This year", value: 365 },
];

export function normalizeLanguage(lang: string | null): keyof typeof languageColors | null {
  if (!lang) return null;

  const map: Record<string, keyof typeof languageColors> = {
    typescript: "typescript",
    javascript: "javascript",
    python: "python",
    java: "java",
    "c#": "csharp",
    csharp: "csharp",
    "c++": "cpp",
    cpp: "cpp",
    go: "go",
    rust: "rust",
    php: "php",
    ruby: "ruby",
    swift: "swift",
    kotlin: "kotlin",
    c: "c",
  };

  return map[lang.toLowerCase()] ?? null;
}
