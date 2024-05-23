import React, { useEffect, useState } from "react";
import { Country } from "@/types";
import CountryCard from "./CountryCard";
import Pagination from "./common/Pagination";
import Fuse from "fuse.js";
import SearchInput from "./common/SearchInput";

interface ContainerProps {
  countries: Country[];
}
const Container = ({ countries }: ContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const ITEMS_PER_PAGE = 25;

  useEffect(() => {
    if (searchTerm) {
      const fuse = new Fuse(countries, { keys: ["name.common"] });
      setFilteredCountries(fuse.search(searchTerm).map(({ item }) => item));
    } else {
      setFilteredCountries(countries);
    }
  }, [searchTerm, countries]);

  useEffect(() => {
    const sortedCountries = [...filteredCountries].sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredCountries(sortedCountries);
  }, [sortOrder]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCountries = filteredCountries.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage(oldPage => Math.max(oldPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(oldPage => Math.min(oldPage + 1, totalPages));
  };
  const handleSort = () => {
    setSortOrder(oldSortOrder => (oldSortOrder === "asc" ? "desc" : "asc"));
  };
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <div className="text-4xl font-bold mt-10 inline-block">Countries Catalog Implementation</div>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={handleSort}>Sort by name ({sortOrder === "asc" ? "Ascending" : "Descending"})</button>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentCountries?.map((country: Country) => <CountryCard key={country.cca3} country={country} />)}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Container;
