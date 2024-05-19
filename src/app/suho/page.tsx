"use client";

import useAppRepository from "@/components/hooks/useAppRepository";

export default function page() {
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  console.log("@@@userId", userInfo);

  return <div>suho</div>;
}
