import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePrevious, handleNext }) => {
  return (
    <div className="flex my-4 items-center justify-evenly">
      <button
        className={`px-4 py-2 border rounded ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-blue-500 hover:text-white"}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}>
        Previous
      </button>
      <div className="text-lg">
        Page {currentPage} of {totalPages}
      </div>
      <button
        className={`px-4 py-2 border rounded ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-blue-500 hover:text-white"}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
