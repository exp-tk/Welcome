"use client";
import { PAGE_SECTION } from "@/app/atoms/activeSection";
import { useIntersectSection } from "@/app/hooks/useIntersectSection";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRef } from "react";
import { Element } from "react-scroll";
import { TKSymbol } from "../Symbol";

export const AboutMeSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  useIntersectSection(ref, PAGE_SECTION.About);

  return (
    <Element name={PAGE_SECTION.About}>
      <section
        ref={ref}
        className="min-h-screen flex justify-center flex-col pt-24"
      >
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          About Me
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          TinyKittenとは
        </h3>
        <div className="flex flex-1 w-full justify-center items-center flex-col">
          <TKSymbol className="w-32 md:w-44 drop-shadow-[0_0_8px_rgba(0,145,255,0.5)]" />
          <div className="w-full md:text-center mt-6">
            <h4 className="font-bold text-md text-balance md:text-xl leading-5 tracking-tight">
              フリーランス
              <br />
              フロントエンドエンジニア
            </h4>
            <h3 className="font-bold text-4xl md:mt-2 text-pretty mb-4 md:text-5xl tracking-tight">
              TinyKitten
            </h3>
            <p className="font-bold text-pretty mb-10 md:text-lg">
              東京都練馬区在住のフリーのフロントエンドエンジニア。タイニーキトゥンと読みます。
              <br />
              でも、「きったん」と呼ばれることが多いです。
            </p>
          </div>
          <Button
            as={Link}
            color="primary"
            size="lg"
            variant="shadow"
            href="https://tinykitten.me/"
            target="_blank"
          >
            <span className="text-center font-bold">ポートフォリオを見る</span>
          </Button>
        </div>
      </section>
    </Element>
  );
};
