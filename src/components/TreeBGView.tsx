import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import VStack from "./base/stack/VStack";

/**
 * 나무 + 언덕 이미지
 * - relative 필요
 */

type TreeBGViewProps = {
  className?: string;
  hiddenTree?: boolean;
  treeLayout?: ReactNode;
  hillLayout?: ReactNode;
};

export default function TreeBGView({
  className,
  hiddenTree = false,
  treeLayout,
  hillLayout,
}: TreeBGViewProps) {
  return (
    <VStack className={cn("absolute z-0 mt-[150px] h-full w-full", className)}>
      {hiddenTree ? (
        <VStack className="mx-[40px] mb-[-24px] h-[500px]">{treeLayout}</VStack>
      ) : (
        <VStack className="mx-[40px] mb-[-24px] h-[500px] bg-[url('/imgs/home_tree_top.svg')] bg-contain bg-bottom bg-no-repeat">
          {treeLayout}
        </VStack>
      )}
      <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-[center_top] bg-no-repeat">
        {hillLayout}
      </VStack>
    </VStack>
  );
}
