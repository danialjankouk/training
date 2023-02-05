//number
let Likes: number = 55;
console.log(typeof Likes);
Likes = 5;
//string
let Note: string = "typescript is cool";
console.log(typeof Note);
// boolean
let Bool: boolean = false;
console.log(typeof Bool);
Bool = true;

//share type
let user: typeof Note;
user = "dany j";

//backtick
let str: string = `this is ${Bool}`;
console.log(str);

//mix
console.log(Likes * 85);

