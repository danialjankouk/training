interface IBlog {
    readonly title:string
    readonly text:string
}

function newBlog(blog:IBlog):IBlog{
    return blog
}

const blog = newBlog({title:"hewd",text:"shit"})

console.log(blog.title);

