export function useTokenize(s: string): Array<string> {
    let result = new Array<string>();
    for (const match of s.matchAll(/([0-9]+|\*\*|[()+*%/-])/g)) {
      result.push(match[0]);
    }
    return result.reverse();
  }