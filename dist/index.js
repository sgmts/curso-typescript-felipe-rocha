"use strict";
// tsc index.ts
// Tipos Basicos
const age = 5;
const isValid = true;
let idk = 5;
idk = 5;
idk = "5";
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false];
const str = ["true", "false", "batata"];
// Tupla
const person = [2, "jane"];
// Lista de Tuplas
const people = [
    [1, "Maria"],
    [2, "Joao"],
    [3, "Junior"],
];
// Intersections
let productId = "1";
productId = true;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction["Down"] = "down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Tye Assertions
const productName = "Boné";
//let itemId = productName as string;
let itemId = productName;
console.log(direction);
