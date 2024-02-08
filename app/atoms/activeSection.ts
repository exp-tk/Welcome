import { atom } from "jotai";

export const PAGE_SECTION = {
  Welcome: "Welcome",
  About: "About",
  Apps: "Apps",
  Share: "Share",
} as const;

export type PageSection = keyof typeof PAGE_SECTION;

export const activeSectionState = atom<PageSection>(PAGE_SECTION.Welcome);
