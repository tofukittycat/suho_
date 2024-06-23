"use client";

import { useRouter } from "next/navigation";

import { ReactNode } from "react";

import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type ErrorResponseType = {
  status: number;
  message: string;
  path: string;
};

type ApiErrorBoundaryProps = {
  children: ReactNode;
};

export default function ApiErrorBoundary({ children }: ApiErrorBoundaryProps) {
  const queryClient = useQueryClient();
  const { replace } = useRouter();
  const { toast } = useToast();

  queryClient.getQueryCache().config = {
    onError: error => handleError(error as AxiosError),
  };

  queryClient.getMutationCache().config = {
    onError: error => handleError(error as AxiosError),
  };

  function handleError(axiosError: AxiosError) {
    if (!axiosError) {
      window.location.href = "/signin";
      return;
    }

    const errorResponse = axiosError.response?.data as ErrorResponseType;
    const statusCode = errorResponse.status;
    const message = errorResponse.message;

    switch (statusCode) {
      case 401:
        window.location.href = "/signin";
        toast({ description: message });
        break;
      default:
        toast({ description: `⚠️ ${message}: ${statusCode}` });
        break;
    }
  }

  return <>{children}</>;
}
