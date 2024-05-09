import SHInputField, { SHInputFieldProps } from "./SHInputField";

type SHDateInputFieldProps = SHInputFieldProps;

export default function SHDateInputField({ ...props }: SHDateInputFieldProps) {
  return (
    <SHInputField type="date" autoComplete="off" inputProps={{ max: "9999-12-31" }} {...props} />
  );
}
