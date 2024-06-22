"use client";

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

    console.error(message);

    switch (statusCode) {
      case 400:
      case 401:
      case 403:
        toast({ description: message });

        break;
      default:
        toast({ description: `⚠️ ${message}: ${statusCode}` });
        // window.location.href = "/signin"; // 일단 로그인으로~
        break;
    }
  }

  return <>{children}</>;
}
