import { ReactNode } from "react";

type HillBGViewProps = {
  hiddenHill?: boolean;
  children: ReactNode;
};

export default function HillBGView({ children, hiddenHill }: HillBGViewProps) {
  return (
    <div className="relative h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <div className="z-10 h-full w-full ">{children}</div>
      {!hiddenHill && (
        <div className="visible absolute bottom-0 left-0 right-0 z-0 h-[40%] w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat md:invisible" />
      )}
    </div>
  );
}
