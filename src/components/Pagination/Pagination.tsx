import { getPageNumber } from "../../utils/getPageNumber";
import type { PageInfo } from "../../types/pageInfo";

type PaginationProps = {
  info: PageInfo;
  onPageChange: (newPage: number) => void;
};

export default function Pagination({ info, onPageChange }: PaginationProps) {
  let currentPage: number;
  if (info.next !== null) {
    currentPage = getPageNumber(info.next) - 1;
  } else if (info.prev !== null) {
    currentPage = getPageNumber(info.prev) + 1;
  } else {
    currentPage = 1;
  }
  const totalPages = info.pages;

  return (
    <div>
      <button
        disabled={info.prev === null}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <p>
        Page {currentPage} of {totalPages}
      </p>

      <button
        disabled={info.next === null}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
