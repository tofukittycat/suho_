import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

import HStack from "./stack/HStack";

type SHPaginationProps = {
  className?: string;
};

export default function SHPagination({ className }: SHPaginationProps) {
  return (
    <HStack className={cn("", className)}>
      <Pagination className="h-[35px] w-full rounded-[17.5px] bg-main-purple-suho bg-opacity-[0.2]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem> */}
          {/* <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </HStack>
  );
}
