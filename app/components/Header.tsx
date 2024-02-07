import { TKSymbol } from "./Symbol";

export const Header = () => {
  return (
    <header className="fixed flex items-center px-8 py-4 shadow w-full bg-background z-50 justify-between gap-16">
      <div className="flex">
        <TKSymbol width={32} height={32} />
        <div className="ml-2">
          <span className="text-2xl tracking-tight font-bold">Dev</span>
          <span className="ml-1 text-2xl tracking-tight">Portal</span>
        </div>
      </div>
      <aside className="flex flex-1">
        <ul>
          <li className="cursor-pointer">
            <span className="font-bold text-primary drop-shadow-[0_0_4px_hsl(var(--nextui-primary-100))]">
              Willkommen
            </span>
          </li>
        </ul>
      </aside>
    </header>
  );
};
