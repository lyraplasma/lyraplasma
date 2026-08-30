/*
let fst: (a: any, b: any) => any = (a, b) => a;
let gst: <T, U>(a: T, b: U) => T = (a, b) => a;
type One = { p: string };
interface Two {
  p: string
}
class Three {
  p = "Hello";
}
let x: One = { p: "Hi" };
let two: Two = x;
two = new Three();
*/
function greet(name: string): string {
  return `Hello ${name}!`;
}
const message: string = greet("World");
console.log(message);
const boot_up_message: string = "This prints";
console.log(boot_up_message);
const port: number = 3000;
const noValue: null = null;
const notDefined: undefined = undefined;

export function calculate_total(
price: number,
quantity: number,
discount: number,
): number {
return price * quantity * (1 - discount);
}