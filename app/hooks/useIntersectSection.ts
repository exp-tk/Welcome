"use client";
import { useSetAtom } from "jotai";
import { MutableRefObject, useEffect } from "react";
import { useIntersection } from "react-use";
import { PageSection, activeSectionState } from "../atoms/activeSection";

export const useIntersectSection = (
  ref: MutableRefObject<HTMLElement | null>,
  sec: PageSection
) => {
  const setActiveSection = useSetAtom(activeSectionState);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveSection(sec);
    }
  }, [intersection, sec, setActiveSection]);
};
