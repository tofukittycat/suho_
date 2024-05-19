"use client";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useAuth from "@/components/hooks/useAuth";

// token 리다이렉션 page
export default function RedirectionEntryPage() {
  useAuth();

  return <SHGlobalSpinner />;
}
