//Annonymos type
let products : Array<{ name: string ,price: number | undefined , img: string ,discount:number|undefined}>;
let payment : {productAmount:number , gateway:string};

let basket = {
    products : [
        {
            name:"iphone",
            price:5000000,
            img: "https://shit.com",
            discount:5
        }
    ],
    payment:{
        productAmount:5000000,
        gateway:"shit"
    }
}

console.log(basket);
