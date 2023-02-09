let blog : {
    title:string,
    text?:string,
    like:number,
    author:object,
    comment?:object[] | Array<object>
}

blog = {
    title:"title",
    text:"new text",
    like:50,
    author:{name:"dani"},
}
console.log(blog);
