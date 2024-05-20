import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import VStack from "../stack/VStack";

/**
 * 나무 + 언덕 이미지
 * - relative 필요
 */

type TreeBGViewProps = {
  className?: string;
  hiddenTree?: boolean;
  treeLayout?: ReactNode;
  treeLayoutClassName?: string;
  hillLayout?: ReactNode;
  hillLayoutClassName?: string;
};

export default function TreeBGView({
  className,
  hiddenTree = false,
  treeLayout,
  treeLayoutClassName,
  hillLayout,
  hillLayoutClassName,
}: TreeBGViewProps) {
  return (
    <VStack className={cn("relative h-full w-full", className)}>
      {hiddenTree ? (
        <VStack
          className={cn(
            "absolute bottom-[37%] left-0 right-0 z-0 h-[63%] w-full",
            treeLayoutClassName,
          )}
        >
          {treeLayout}
        </VStack>
      ) : (
        <VStack
          className={cn(
            "absolute bottom-[27%] left-0 right-0 z-0 h-[73%] bg-[url('/imgs/home_tree_top.svg')] bg-bottom bg-no-repeat",
            treeLayoutClassName,
          )}
        >
          {/* <VStack className="absolute bottom-0 left-0 right-0 z-0 h-[40%] w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat"></VStack> */}
          {/* <VStack className="mx-[40px] mb-[-24px] h-[300px]  bg-contain bg-bottom bg-no-repeat"> */}
          {treeLayout}
        </VStack>
      )}

      <VStack
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10 h-[30%] w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat",
          hillLayoutClassName,
        )}
      >
        {hillLayout}
      </VStack>
    </VStack>
  );
}
