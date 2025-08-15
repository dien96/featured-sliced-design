import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui";
import { useArticlePagination } from "../model";

export const ArticlePagination = () => {
  const { page, canNext, canPrev, handlePageChange, onNext, onPrev, total } =
    useArticlePagination();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={onPrev}
            className={!canPrev ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {new Array(total > 0 && Math.ceil(total / 10))
          .fill(0)
          .map((_, index) => {
              return (
                
              <PaginationItem
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className="px-4 text-sm to-muted-foreground"
              >
                <PaginationLink href="#" isActive={page === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={onNext}
            className={!canNext ? "pointer-events-none opacity-50" : ""}
          ></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
