"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, customView, ...props }) {
        return (
          <Toast key={id} duration={2000} {...props}>
            {(() => {
              return customView ? (
                <>{customView}</>
              ) : (
                <>
                  <div className="grid w-full gap-1">
                    {description && (
                      <ToastDescription className="w-full text-center text-main-purple-suho">
                        {description}
                      </ToastDescription>
                    )}
                  </div>
                  {action}
                  <ToastClose />
                </>
              );
            })()}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
