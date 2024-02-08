"use client";

import { Button } from "@nextui-org/react";

export const ShareButton = () => (
  <Button
    className="bg-[#0f1419] text-white shadow-lg shadow-[#0f1419]/40"
    size="lg"
    onClick={() => alert("サイトが完成していないから無効化してるよ")}
  >
    <span className="font-bold">Xでシェアする</span>
  </Button>
);
