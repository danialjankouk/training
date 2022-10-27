//enum
enum Syles { grunge = 1, vintage = "noce", boho = 2 };
const myStyle: Syles = Syles.vintage

console.log(myStyle);

//better code
const enum Color { green = 1, blue , yellow };
const myColor: Color = Color.yellow

console.log(myColor);
