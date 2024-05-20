import { ReactNode } from "react";

import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ErrorResponseType = {
  status: number;
  error: string;
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
    const errorResponse = axiosError.response?.data as ErrorResponseType;
    const statusCode = errorResponse.status;
    const message = errorResponse.error;

    console.error(message);

    switch (statusCode) {
      case 400:
      case 401:
      case 403:
        toast({ description: message });
        window.location.href = "/signin";
        break;
      default:
        toast({ description: message });
        break;
    }
  }

  return <>{children}</>;
}
