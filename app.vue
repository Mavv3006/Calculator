<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script setup lang="ts">

class Stack<T> {
  private elements = new Array<T>();

  push(e: T): void {
    this.elements.push(e);
  }

  pop(): void {
    if (this.elements.length == 0) {
      throw new Error('popping empty stack', {});
    }
    this.elements.pop();
  }

  top(): T {
    if (this.elements.length == 0) {
      throw new Error('top of empty stack', {});
    }
    return this.elements[-1];
  }

  isEmpty(): boolean {
    return this.elements == new Array<T>();
  }

  copy(): Stack<T> {
    let c = new Stack<T>();
    c.elements = this.elements;
    return c;
  }

  toString(): string {
    let c = this.copy();
    let result = c.convert();
    let dashes = '-'.repeat(result.length);
    return [dashes, result, dashes].join('\n');
  }

  private convert(): string {
    if (this.isEmpty()) { return '|' }
    let t = this.top();
    this.pop();
    return this.convert() + ` ${t} |`;
  }
}

function tokenize(s: string): Array<string> {
  let result = new Array<string>();
  for (const match of s.matchAll(/([0-9]+|\*\*|[()+*%\/\-])/)) {
    result.push(match[0]);
  }
  return result.reverse();
}

interface Precedence {
  readonly [k: string]: number
}

function evalBefore(o1: string, o2: string): boolean {
  if (o1 === '(') { return false; }
  let precedence: Precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, '**': 3 };
  if (precedence[o1] > precedence[o2]) { return true; }
  else if (precedence[o1] == precedence[o2]) {
    if (o1 == o2) {
      return o1 in ['+', '-', '*', '/', '%'];
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function createStack<T>(l: Array<T>): Stack<T> {
  let s = new Stack<T>();
  for (let index = 0; index < l.length; index++) {
    const element = l[index];
    s.push(element)
  }
  return s;
}

function isNumeric(str: any): boolean {
  return !isNaN(parseFloat(str)) && isFinite(str);
}

class Calculator {
  mTokens: Stack<string>;
  mArguments: Stack<number>;
  mOperators: Stack<string>;

  constructor(s: string) {
    this.mTokens = createStack(tokenize(s))
    this.mArguments = new Stack();
    this.mOperators = new Stack();
  }

  evaluate(): number {
    while (!this.mTokens.isEmpty()) {
      let t = this.mTokens.top();
      this.mTokens.pop();

      if (isNumeric(t)) {
        this.mArguments.push(parseInt(t));
        continue;
      }

      if (this.mOperators.isEmpty() || t == '(') {
        this.mOperators.push(t);
        continue;
      }

      let topOp = this.mOperators.top();

      if (topOp == '(' && t == ')') {
        this.mOperators.pop();
      } else if (t == ')' || evalBefore(topOp, t)) {
        this.popAndEvaluate();
        this.mTokens.push(t);
      } else {
        this.mOperators.push(t)
      }
    }

    while (!this.mOperators.isEmpty()) {
      this.popAndEvaluate()
    }

    return this.mArguments.top();
  }

  popAndEvaluate() {
    let rhs = this.mArguments.top(); this.mArguments.pop();
    let lhs = this.mArguments.top(); this.mArguments.pop();
    let op = this.mOperators.top(); this.mOperators.pop();
    let result: number;

    switch (op) {
      case '+':
        result = lhs + rhs;
        break;
      case '-':
        result = lhs - rhs;
        break;
      case '*':
        result = lhs * rhs;
        break;
      case '/':
        result = lhs / rhs;
        break;
      case '%':
        result = lhs % rhs;
        break;
      case '**':
        result = lhs ** rhs;
        break;
      default:
        throw new Error('Invalid Argument')
    }

    this.mArguments.push(result);
  }
}

</script>