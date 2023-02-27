interface InterfacePerson {
  name: string;
  lname: string;
  age: number;
}

const personData: InterfacePerson = {
  name: "dani",
  lname: "Jankouk",
  age: 52,
};

interface TestInterface {
  color: string;
  height: number;
}

let property: TestInterface = {
  color: "blue",
  height: 52,
};


//nulish operator
console.log(null ?? true);
console.log(undefined ?? true);
console.log("" ?? true);

