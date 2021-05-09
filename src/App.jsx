import { useState } from "react";
import CalculationOverview from "./components/CalculationOverview";
import Input from "./components/Input";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h1>Multiplied by two App</h1>

      <Input setInputValue={setInputValue} />

      <CalculationOverview inputValue={inputValue} />
    </>
  );
}
