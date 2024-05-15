import { cn } from "@/lib/utils";

type HDividerProps = {
  className?: string;
};

export default function HDivider({ className }: HDividerProps) {
  return <div className={cn("h-[1px] w-full bg-[#E6E8EB]", className)} />;
}
