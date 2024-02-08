"use client";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Events, Link } from "react-scroll";
import {
  PAGE_SECTION,
  PageSection,
  activeSectionState,
} from "../atoms/activeSection";
import { PortalLogo } from "./PortalLogo";

const HEADER_PAGES: { section: PageSection; label: string }[] = [
  { section: PAGE_SECTION.About, label: "About me" },
  { section: PAGE_SECTION.Apps, label: "Apps" },
  { section: PAGE_SECTION.Share, label: "Support me" },
];

export const Header = () => {
  const activeSection = useAtomValue(activeSectionState);
  const [disableAnchorColoring, setDisableAnchorColoring] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setDisableAnchorColoring(true);
    });
    Events.scrollEvent.register("end", (to, element) => {
      setDisableAnchorColoring(false);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const getAnchorClassName = (sec: PageSection) =>
    `transition-colors font-bold ${
      sec === activeSection && !disableAnchorColoring
        ? "text-primary drop-shadow-[0_0_4px_rgba(0,145,255,0.25)]"
        : ""
    }`;

  return (
    <header className="sticky -mb-24 top-0 flex items-center px-4 md:px-8 py-4 shadow w-full bg-background z-50 justify-between md:gap-16">
      <Link to={PAGE_SECTION.Welcome} smooth duration={500}>
        <PortalLogo />
      </Link>
      <aside className="hidden md:flex flex-1">
        <ul className="flex flex-row gap-4">
          {HEADER_PAGES.map((page) => (
            <li key={page.section} className="cursor-pointer">
              <Link to={page.section} smooth duration={500}>
                <span className={getAnchorClassName(page.section)}>
                  {page.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};
