import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "./Button";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <Button
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={17} />
        Previous
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="font-semibold text-gray-950">Page {currentPage}</span>

        <span className="text-gray-300">/</span>

        <span className="text-gray-500">{totalPages}</span>
      </div>

      <Button
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <ChevronRight size={17} />
      </Button>
    </div>
  );
}

export default Pagination;
