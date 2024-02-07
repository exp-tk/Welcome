"use client";

import { Button } from "@nextui-org/react";

export const ShareButton = () => {
  return (
    <Button
      className="flex flex-col gap-0"
      color="primary"
      size="lg"
      variant="shadow"
    >
      <p className="font-bold">何かしらで応援する</p>
      <p className="text-xs font-bold">(押しても何も起こらないよ)</p>
    </Button>
  );
};
