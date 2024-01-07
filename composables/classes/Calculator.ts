import { Stack } from "./Stack";

export class Calculator {
    mTokens: Stack<string>;
    mArguments: Stack<number>;
    mOperators: Stack<string>;
  
    constructor(s: string) {
      this.mTokens = useCreateStack(s);
      this.mArguments = new Stack();
      this.mOperators = new Stack();
    }
  
    evaluate(): number {
      console.log("Input: " + this.mTokens);
  
      while (!this.mTokens.isEmpty()) {
        let t = this.mTokens.top();
        this.mTokens.pop();
  
        if (useIsNumeric(t)) {
          this.mArguments.push(parseInt(t));
          continue;
        }
  
        if (this.mOperators.isEmpty() || t == "(") {
          this.mOperators.push(t);
          continue;
        }
  
        let topOp = this.mOperators.top();
  
        if (topOp == "(" && t == ")") {
          this.mOperators.pop();
        } else if (t == ")" || useEvalBefore(topOp, t)) {
          this.popAndEvaluate();
          this.mTokens.push(t);
        } else {
          this.mOperators.push(t);
        }
      }
  
      while (!this.mOperators.isEmpty()) {
        this.popAndEvaluate();
      }
  
      return this.mArguments.top();
    }
  
    popAndEvaluate() {
      let rhs = this.mArguments.top();
      this.mArguments.pop();
      let lhs = this.mArguments.top();
      this.mArguments.pop();
      let op = this.mOperators.top();
      this.mOperators.pop();
      let result: number;
  
      switch (op) {
        case "+":
          result = lhs + rhs;
          break;
        case "-":
          result = lhs - rhs;
          break;
        case "*":
          result = lhs * rhs;
          break;
        case "/":
          result = lhs / rhs;
          break;
        case "%":
          result = lhs % rhs;
          break;
        case "**":
          result = lhs ** rhs;
          break;
        default:
          throw new Error("Invalid Argument");
      }
  
      this.mArguments.push(result);
    }
  }