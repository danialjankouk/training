const getKeys = (obj: object): string[] => {
  const keys: string[] = Object.values(obj);
  return keys;
};
const user = {
  name: "dani",
  job: "dev",
  age: 20,
};
console.log(getKeys(user));

//array
const number: Array<number> = [1,2,3,4]
console.log(number);
