import React, { useContext, useEffect } from "react";
import Container from "./components/Container";
import { CountryContext } from "./context";

const App = () => {
  useEffect(() => {
    document.title = "Implement Countries Catalog";
  }, []);

  const { countries } = useContext(CountryContext);
  return (
    <div>
      <Container countries={countries} />
    </div>
  );
};

export default App;
