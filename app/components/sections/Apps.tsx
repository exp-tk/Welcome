"use client";
import { PAGE_SECTION } from "@/app/atoms/activeSection";
import { useIntersectSection } from "@/app/hooks/useIntersectSection";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { useRef } from "react";
import { Element } from "react-scroll";

export const AppsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  useIntersectSection(ref, PAGE_SECTION.Apps);

  return (
    <Element name={PAGE_SECTION.Apps}>
      <section
        ref={ref}
        className="min-h-screen flex justify-center flex-col pt-24"
      >
        <h2 className="max-w-max font-bold text-4xl md:text-6xl tracking-tight border-slate-950 border-b-8">
          Applications
        </h2>
        <h3 className="font-bold md:text-2xl tracking-tight mt-2">
          実施中のオープンテスト
        </h3>
        <div className="my-16 md:flex md:flex-1 md:items-center md:justify-center">
          <Card className="w-auto md:w-[400px]">
            <CardHeader className="flex gap-3">
              <Link isExternal href="https://led.tinykitten.dev">
                <Image
                  alt="TrainLED Canary"
                  height={40}
                  radius="sm"
                  src="https://led.tinykitten.dev/icon.png"
                  width={40}
                />
              </Link>
              <Link isExternal href="https://led.tinykitten.dev">
                <div className="flex flex-col">
                  <p className="text-md text-foreground">TrainLED Canary</p>
                  <p className="text-small text-default-500">
                    <span className="font-semibold">led</span>.tinykitten.dev
                  </p>
                </div>
              </Link>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-pretty">
                TrainLCDアプリのスピンオフ。お使いのブラウザで使えるあなた専用の電光掲示板。不慣れな路線で迷いそうな時、降りれるか不安な時。きっとあなたの役に立つはずです。
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href="https://led.tinykitten.dev">
                オープンテストに参加
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Element>
  );
};
