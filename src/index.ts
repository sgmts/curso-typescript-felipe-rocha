// tsc index.ts

// Tipos Basicos
const age: number = 5;
const isValid: boolean = true;
let idk: any = 5;
idk = 5;
idk = "5";

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, false];
const str: string[] = ["true", "false", "batata"];

// Tupla
const person: [number, string] = [2, "jane"];

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Maria"],
  [2, "Joao"],
  [3, "Junior"],
];

// Intersections
let productId: string | number | boolean = "1";
productId = true;

//Enum
enum Direction {
  Up = 1,
  Down = "down",
}

const direction = Direction.Up;

// Tye Assertions
const productName: any = "Boné";

//let itemId = productName as string;
let itemId = <string>productName

console.log(direction);
