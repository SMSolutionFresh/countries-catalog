import { Country } from "@/types";
import React from "react";

interface CountryCardProps {
  country: Country;
  openModal: () => void;
  setSelectedCountry: (country: Country) => void;
}
const CountryCard = ({ country, openModal, setSelectedCountry }: CountryCardProps) => {
  return (
    <div key={country.cca3} className="bg-white shadow-md rounded-md p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className=" w-24 h-16" src={country.flags.png} alt={country.name.common} />
          <div
            className="font-semibold text-lg hover:text-blue-500 hover:underline cursor-pointer"
            onClick={() => {
              openModal();
              setSelectedCountry(country);
            }}>
            {country.name.common}
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600">Country Details:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-sm text-gray-500">cca2: {country.cca2}</li>
          <li className="text-sm text-gray-500">cca3: {country.cca3}</li>
          <li className="text-sm text-gray-500">Native Country Name: {country?.name?.nativeName?.eng?.common}</li>
          <li className="text-sm text-gray-500">Alternate Spellings: {country.altSpellings.join(", ")}</li>
          <li className="text-sm text-gray-500">IDD Root: {country.idd.root}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
