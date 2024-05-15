import { ReactNode } from "react";

type UniverseBGViewProps = {
  children: ReactNode;
};

export default function UniverseBGView({ children }: UniverseBGViewProps) {
  return (
    <div className="h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <div className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        {children}
      </div>
    </div>
  );
}
