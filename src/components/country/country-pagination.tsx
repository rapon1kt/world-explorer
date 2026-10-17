"use client";
import { SetStateAction } from "react";

interface CountryPaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

export function CountryPagination({
  totalPages,
  page,
  setPage,
}: CountryPaginationProps) {
  return (
    <div className="flex space-x-4 py-4">
      {totalPages > 1 && (
        <div className="flex flex-1 justify-center items-center gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="cursor-pointer w-36 py-1.5 bg-slate-900 text-slate-200 rounded-sm hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-slate-400 text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="cursor-pointer w-36 py-1.5 bg-slate-900 text-slate-200 rounded-sm hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
