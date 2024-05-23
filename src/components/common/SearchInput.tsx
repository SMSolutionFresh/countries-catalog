import React from "react";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mt-8">
      <div>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          id="default-search"
          type="search"
          className="block p-4 pl-10 w-full rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search By Country Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
