const sum = (num1: number, num2: number): number => {
  return num1 * num2;
};
const result = sum(5, 6);
console.log(result);

// name function
function getName(firstName: string, lastName: string): string {
  return `hello ${firstName} - ${lastName} welcome`;
}
const myName = getName("fname", "lname");
console.log(myName);
//date function
const getDate = (): Date => {
  return new Date();
};
console.log(getDate().getTime());

//logger
const logger = (log: any): void => {
  console.log(log);
};
logger("do log");

//function type
const func = (fn: Function): Function => {
  return fn();
};
func(()=>{
  console.log("hello func");
})

//object type 
const obj = (val: object): object=>{
  return {val : "shit"}
}