export class Stack<T> {
  private elements = new Array<T>();

  push(e: T): void {
    this.elements.push(e);
  }

  pop(): void {
    if (this.elements.length == 0) {
      throw new Error("popping empty stack", {});
    }
    this.elements.pop();
  }

  top(): T {
    if (this.elements.length == 0) {
      throw new Error("top of empty stack", {});
    }
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length == 0;
  }

  copy(): Stack<T> {
    let c = new Stack<T>();
    c.elements = [...this.elements];
    return c;
  }

  // toString(): string {
  //   let c = this.copy();
  //   let result = c.convert();
  //   let dashes = "-".repeat(result.length);
  //   return [dashes, result, dashes].join("\n");
  // }

  // private convert(): string {
  //   if (this.isEmpty()) {
  //     return "|";
  //   }
  //   let t = this.top();
  //   this.pop();
  //   return this.convert() + ` ${t} |`;
  // }
}
