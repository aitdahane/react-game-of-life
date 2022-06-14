export const range = (length: number) => new Array(length).fill(0).map((_, i) => i);

export const compact = <T = any>(array: T[]) => array.filter(x => !!x);
