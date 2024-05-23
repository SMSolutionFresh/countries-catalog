import { Country } from "@/types";
import React, { createContext } from "react";

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

export const CountryContext = createContext<CountryContextProps>({
  countries: [],
  setCountries: () => {},
});
