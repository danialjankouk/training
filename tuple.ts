let user: [name: string, age: number];
user = ["erdga", 2];

const position: [lat: number, long: number] = [25.05416515, 56.54648];
let [lat, long] = position;
console.log(lat);

let myScore: [name: string, ...score: number[]];
myScore = ["asasd", 58, 465, 165, 1, 4, 51, 56];

let books: [name: string, ...genre: [horror: string, fantasy: string]];
books = ["shit","sfa","aage"]
