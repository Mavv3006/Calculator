import { Stack } from "./classes/Stack";

export function useCreateStack(value: string): Stack<string> {
  let tokens = useTokenize(value);
  let s = new Stack<string>();
  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];
    s.push(element);
  }
  return s;
}
