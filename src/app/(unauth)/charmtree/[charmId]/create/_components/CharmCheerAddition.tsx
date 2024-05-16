"use client";

import Image from "next/image";

import React from "react";

import SHLabel from "@/components/base/SHLabel";
import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function CharmCheerAdditon({
  form,
  charmImageURL,
}: {
  form: any;
  charmImageURL: string;
}): JSX.Element {
  return (
    <div className="inset-0 -z-10 h-full min-h-[1000px] w-full bg-[url('/imgs/im_universe.png')] bg-[35%_top] bg-no-repeat sm:bg-[38%_top] md:bg-[40%_top] lg:bg-[44%_top] xl:bg-top forced-colors:hidden">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px]">
          <div className="grid gap-1 text-center">
            <SHLabel className="text-base font-bold">행운을 담은 마음을 적어주세요.</SHLabel>
            <SHLabel className="text-[13px] font-medium">24자 이내로 적을 수 있어요.</SHLabel>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-center">
              <figure className="relative h-[312px] w-[200px]">
                <Image
                  src={charmImageURL}
                  fill={true}
                  className={cn("h-auto w-auto object-cover transition-all hover:scale-105")}
                  alt="Picture of the charm"
                />
                <div className="absolute left-[20%] right-[20%] top-[10%] bg-black">냐냐냥</div>
                <FormField
                  control={form.control}
                  name="cheers"
                  render={({ field }) => (
                    <>
                      <FormControl>
                        <Textarea
                          className="absolute left-[15%] right-[15%] top-2/3 max-w-36 border-none bg-transparent text-center text-sm font-semibold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </>
                  )}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
