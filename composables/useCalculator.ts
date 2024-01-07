import { Calculator } from "./classes/Calculator";

export function useCalculator(value: string): number {
  let calculator = new Calculator(value);
  return calculator.evaluate();
}