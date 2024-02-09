"use client";
import { PAGE_SECTION } from "@/app/atoms/activeSection";
import { useIntersectSection } from "@/app/hooks/useIntersectSection";
import { useRef } from "react";
import { Element } from "react-scroll";
import { Button, Link } from "@nextui-org/react";

export const ShareSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  useIntersectSection(ref, PAGE_SECTION.Share);

  return (
    <Element name={PAGE_SECTION.Share}>
      <section
        ref={ref}
        className="min-h-screen flex justify-center flex-col pt-24"
      >
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          Support Me
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          TinyKittenを応援しよう
        </h3>
        <div className="flex flex-1 items-center justify-center flex-col gap-8">
          <Button
            as={Link}
            href={
              "https://twitter.com/intent/tweet?url=https://tinykitten.dev&text=フリーランスエンジニアTinyKittenの開発中アプリだよ&via=tinykitten8&related=tinykitten8"
            }
            target="_blank"
            className={`w-72 h-14 max-w-full bg-[--brand-color-x] text-white shadow-lg shadow-[--brand-color-x]/40`}
          >
            <span className="text-lg font-bold">Xでシェア</span>
          </Button>
          <Button
            as={Link}
            href={
              "https://social-plugins.line.me/lineit/share?url=https://tinykitten.dev"
            }
            target="_blank"
            className={`w-72 h-14 max-w-full bg-[--brand-color-line] text-white shadow-lg shadow-[--brand-color-line]/40`}
          >
            <span className="text-lg font-bold">LINEで送る</span>
          </Button>
        </div>
      </section>
    </Element>
  );
};
