import React, { useState, useEffect } from "react";
import { fetchAllCountries } from "../actions";
import { CountryContext } from "./index";
import { Country } from "@/types";

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const data = (await fetchAllCountries()) as any;
      setCountries(data.data as Country[]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return <CountryContext.Provider value={{ countries, setCountries }}>{children}</CountryContext.Provider>;
};
