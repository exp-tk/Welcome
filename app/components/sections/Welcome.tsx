"use client";
import { PAGE_SECTION } from "@/app/atoms/activeSection";
import { useIntersectSection } from "@/app/hooks/useIntersectSection";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { Element, Link } from "react-scroll";

export const WelcomeSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  useIntersectSection(ref, PAGE_SECTION.Welcome);

  return (
    <Element name={PAGE_SECTION.Welcome}>
      <section ref={ref} className="min-h-screen flex justify-center flex-col">
        <h2 className="text-center font-bold text-6xl tracking-tight">
          The quick brown fox jumps over the lazy dog.
        </h2>
        <h3 className="text-center font-bold text-3xl tracking-tight mt-2">
          素早い茶色の狐はのろまな犬を飛び越える
        </h3>
        <div className="text-center mt-8">
          <Button
            color="primary"
            size="lg"
            variant="shadow"
            // react-scroll
            as={Link}
            to={PAGE_SECTION.Apps}
            smooth
            duration={500}
          >
            <span className="text-center font-bold">
              オープンテストに参加する
            </span>
          </Button>
        </div>
      </section>
    </Element>
  );
};
