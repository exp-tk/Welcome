import Link from "next/link";
import { PortalLogo } from "./PortalLogo";
import { TinyKittenProduct } from "./TKProduct";

export const Footer = () => (
  <footer className="bg-secondary p-8 text-white flex justify-between flex-col md:items-center">
    <Link
      className="block w-full text-sm text-gray-300 font-semibold md:font-medium"
      href="https://tinykitten.me"
    >
      開発者のポートフォリオ
    </Link>

    <div className="w-full h-px bg-white opacity-50 mt-6 mb-8" />

    <div className="flex w-full justify-between">
      <div className="hidden md:block">
        <PortalLogo invert />
      </div>
      <div className="flex md:items-end md:self-right flex-col">
        <TinyKittenProduct />
        <p className="text-xs mt-4 text-gray-300 font-medium">
          &copy; 2024-2025 TinyKitten(Tsubasa SEKIGUCHI)
        </p>
      </div>
    </div>
  </footer>
);
