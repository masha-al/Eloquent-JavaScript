//4
export function min (a: number, b: number) { 
  let min = (a: number, b: number) => a < b ? a : b;
}
console.log(min(3, 12));

//5
export function isEven (number: number): number | boolean {
  const step = number < 0 ? -2 : 2;
  if (number === 0) return true;
  if (number === 1 || number === -1) return false;

  return isEven(number-step);
}
const a = isEven(-4)
console.log(a);

//6
export function countChar (sourceStr: string, char: string): number {
  let counter = 0;

  for (const letter of sourceStr) {
    if (letter === char) counter+=1;
  }

  return counter;
}

console.log(countChar("Masha", "a"));
