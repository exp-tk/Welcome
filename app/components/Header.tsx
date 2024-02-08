"use client";
import { useAtomValue } from "jotai";
import { Link } from "react-scroll";
import {
  PAGE_SECTION,
  PageSection,
  activeSectionState,
} from "../atoms/activeSection";
import { TKSymbol } from "./Symbol";

export const Header = () => {
  const activeSection = useAtomValue(activeSectionState);

  const getAnchorClassName = (sec: PageSection) =>
    `font-bold ${
      sec === activeSection
        ? "text-primary drop-shadow-[0_0_4px_hsl(var(--nextui-primary-100))]"
        : ""
    }`;

  return (
    <header className="sticky -mb-16 top-0 flex items-center px-4 md:px-8 py-4 shadow w-full bg-background z-50 justify-between md:gap-16">
      <Link to={PAGE_SECTION.Welcome} smooth duration={500}>
        <div className="flex">
          <TKSymbol width={32} height={32} />
          <div className="ml-2 md:ml-2">
            <span className="text-2xl tracking-tight font-bold">Dev</span>
            <span className="ml-1 text-2xl tracking-tight">Portal</span>
          </div>
        </div>
      </Link>
      <aside className="hidden md:flex flex-1">
        <ul className="flex flex-row gap-4">
          <li className="cursor-pointer">
            <Link to={PAGE_SECTION.Apps} smooth duration={500}>
              <span className={getAnchorClassName(PAGE_SECTION.Apps)}>
                Apps
              </span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={PAGE_SECTION.Share} smooth duration={500}>
              <span className={getAnchorClassName(PAGE_SECTION.Share)}>
                Support me
              </span>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
