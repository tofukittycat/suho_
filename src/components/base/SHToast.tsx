import { Snackbar } from "@mui/material";

type SHToastProps = {
  message: string;
  open: boolean;
  close: () => void;
};

export default function SHToast({ message, open, close }: SHToastProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={close}
      message={message}
    />
  );
}
