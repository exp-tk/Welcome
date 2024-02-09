"use client";
import { NextUIProvider } from "@nextui-org/system";
import { Provider as JotaiProvider } from "jotai/react";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => (
  <NextUIProvider>
    <JotaiProvider>{children}</JotaiProvider>
  </NextUIProvider>
);
