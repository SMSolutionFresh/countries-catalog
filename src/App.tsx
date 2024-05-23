import React, { useContext } from "react";
import Container from "./components/Container";
import { CountryContext } from "./context";

const App = () => {
  const { countries } = useContext(CountryContext);
  return (
    <div>
      <Container countries={countries} />
    </div>
  );
};

export default App;
