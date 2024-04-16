"use client";

import { ReactNode, useEffect } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import updateLocale from "dayjs/plugin/updateLocale";

type DayjsProviderProps = {
  children: ReactNode;
};

export default function DayjsProvider({ children }: DayjsProviderProps) {
  useEffect(() => {
    dayjs.extend(updateLocale);
    dayjs.locale("ko");
    dayjs.updateLocale("ko", {
      weekStart: 1,
    });
  }, []);

  return <>{children}</>;
}
