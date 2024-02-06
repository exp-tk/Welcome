"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => (
  <NextUIProvider>{children}</NextUIProvider>
);
