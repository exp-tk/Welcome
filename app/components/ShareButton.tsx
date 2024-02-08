"use client";
import { Button, Link } from "@nextui-org/react";

type SocialMedia = "X" | "LINE";

type Props = {
  media: SocialMedia;
};

const MEDIA_INFO_MAP: Record<
  SocialMedia,
  { brandColor: string; shareText: string; href: string }
> = {
  X: {
    brandColor: "#0f1419",
    shareText: "Xでシェア",
    href: "https://twitter.com/intent/tweet?url=https://tinykitten.dev&text=TinyKittenの開発中アプリだよ&via=tinykitten8&related=tinykitten8",
  },
  LINE: {
    brandColor: "#00b900",
    shareText: "LINEで送る",
    href: "https://social-plugins.line.me/lineit/share?url=https://tinykitten.dev",
  },
};

export const ShareButton = ({ media }: Props) => {
  const { brandColor, shareText, href } = MEDIA_INFO_MAP[media];
  return (
    <Button
      as={Link}
      href={href}
      target="_blank"
      className={`w-72 h-14 max-w-full bg-[${brandColor}] text-white shadow-lg shadow-[${brandColor}]/40`}
    >
      <span className="text-lg font-bold">{shareText}</span>
    </Button>
  );
};
