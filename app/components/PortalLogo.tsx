import { TKSymbol } from "./Symbol";

type Props = {
  invert?: boolean;
};

export const PortalLogo = (props?: Props) => (
  <div className="flex items-center">
    <TKSymbol width={32} height={32} theme="black" invert={props?.invert} />
    <div className="ml-2 md:ml-2">
      <span className="text-2xl tracking-tight font-bold">Dev</span>
      <span className="ml-1 text-2xl tracking-tight">Portal</span>
    </div>
  </div>
);
