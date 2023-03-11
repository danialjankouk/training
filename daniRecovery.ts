let histo: Date = new Date();
console.log(histo);

let prodycts: Array<{ name: string; price: number | string }>;
let basket = {
  products: [
    {
      name: "shti",
      price: 500,
    },
  ],
};

let blo: {
  title: string;
  like: number;
  bool?: boolean;
};

blo = {
  title: "ash",
  like: 4,
};

//tuple
let user: [name: string, age: number];
user = ["shit", 55];

enum TEST {
  OK = 200,
  CREATE = 500,
  ACCEPT = 302,
  ERROR = "oh shit",
}
console.log(TEST.ERROR);

//interface
interface Interperson {
  name: string;
  lname: string;
  age: number;
}

let ohg: Interperson = {
  name: "dania;",
  lname: "dasda",
  age: 5,
};

console.log(undefined ?? null);
console.log("" ?? true);

type ID = number | string | null;

type usefer = {
  name: number;
  eao: undefined;
  jaejieL?: string;
};

function getAss(userId: ID): void {
  return;
}

