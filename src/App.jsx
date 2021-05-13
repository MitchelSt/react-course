import CalculationOverview from "./components/CalculationOverview";
import Input from "./components/Input";
import { InputValueProvider } from "./context/InputValueContext";

export default function App() {
  return (
    <>
      <h1>Multiplied by two App</h1>

      <InputValueProvider>
        <Input />

        <CalculationOverview />
      </InputValueProvider>
    </>
  );
}
