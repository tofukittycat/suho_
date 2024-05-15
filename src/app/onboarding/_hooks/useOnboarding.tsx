"use client";

import { useRouter } from "next/navigation";

export default function useOnboarding() {
  const router = useRouter();

  return { router };
}
