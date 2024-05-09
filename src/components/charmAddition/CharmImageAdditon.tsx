"use client";

import Image from "next/image";

import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import { Reorder } from "framer-motion";
import { motion } from "framer-motion";

import Label from "../base/Label";

export default function CharmImageAdditon(): JSX.Element {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px]">
          <div className="grid gap-1 text-center">
            <Label className="text-base font-bold">행운을 담은 마음을 적어주세요.</Label>
            <Label className="text-[13px] font-medium">24자 이내로 적을 수 있어요.</Label>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-center">
              <figure className="relative h-[312px] w-[200px]">
                <Image
                  src="/imgs/charm_red_dragon.png"
                  fill={true}
                  className={cn("h-auto w-auto object-cover transition-all hover:scale-105")}
                  alt="Picture of the charm"
                />
                <textarea
                  className="absolute left-[20%] right-[20%] top-2/3 max-h-10 max-w-40 text-sm font-semibold"
                  placeholder="행운을 담은 응원을 적어보세요."
                />
              </figure>
            </div>
            <React.Fragment>
              <motion.div className="h-28 w-28 bg-gray-200" ref={constraintsRef}>
                <motion.div
                  className="h-4 w-6 bg-slate-400"
                  drag
                  dragConstraints={constraintsRef}
                />
                <motion.div className="h-4 w-6 bg-zinc-800" drag dragConstraints={constraintsRef} />
              </motion.div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}
