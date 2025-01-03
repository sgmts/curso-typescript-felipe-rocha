"use strict";
// Type
const user = {
    firstName: "Joao",
    age: 20,
    email: "lalala@email.com",
    orders: [{ productId: "1", price: 200 }],
};
const printLog = (message) => { };
//Pode ser uma string ou undefined pois o campo é opcional
// o '!' serve como byPass para ignorar o erro, caso o campo seja undefined
printLog(user.password);
const author = {
    age: 2,
    books: ["1"],
    email: "lalal@gmail.com",
    firstName: "Zezinho",
    orders: [],
};
const emailUSer = {
    email: 'emaillalalal@email',
    firstName: 'Lele'
};
emailUSer.email = '2';
const newAuthor = {
    email: 'email@email.com',
    firstName: "Felipe",
    books: []
};
