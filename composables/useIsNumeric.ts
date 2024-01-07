export function useIsNumeric(str: any): boolean {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }