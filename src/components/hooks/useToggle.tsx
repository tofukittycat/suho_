import { useCallback, useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, [setIsOpen]);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
