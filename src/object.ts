// Type

type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
}; // ? deixa o parametro opcional

const user: User = {
  firstName: "Joao",
  age: 20,
  email: "lalala@email.com",
  orders: [{ productId: "1", price: 200 }],
};

const printLog = (message: string) => {};
//Pode ser uma string ou undefined pois o campo é opcional
// o '!' serve como byPass para ignorar o erro, caso o campo seja undefined
printLog(user.password!);

//Unions
// Unir dois objetos
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "lalal@gmail.com",
  firstName: "Zezinho",
  orders: [],
};

// Interfaces
interface UserInterface {
    readonly firstName: string
    email: string
}

const emailUSer: UserInterface = {
    email: 'emaillalalal@email',
    firstName: 'Lele'
} 

emailUSer.email = '2'
//emailUSer.firstName = ''

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'email@email.com',
    firstName: "Felipe",
    books: []
}


type Grade = number | string
const grade: Grade = 1