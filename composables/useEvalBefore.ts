interface Precedence {
  readonly [k: string]: number;
}

export function useEvalBefore(o1: string, o2: string): boolean {
  if (o1 === "(") {
    return false;
  }
  let precedence: Precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "**": 3,
  };
  if (precedence[o1] > precedence[o2]) {
    return true;
  } else if (precedence[o1] == precedence[o2]) {
    if (o1 == o2) {
      return ["+", "-", "*", "/", "%"].includes(o1);
    } else {
      return true;
    }
  } else {
    return false;
  }
}
