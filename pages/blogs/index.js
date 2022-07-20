import axios from "axios";
import React from "react";
import Link from "next/link";
const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1>this is blogs</h1>
      <br></br>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>
              category :
              <Link href={`/blogs/${blog.category}`}>
                <a>
                  <b>{blog.category}</b>
                </a>
              </Link>
              - title : {blog.title} - description : {blog.description}
            </h2>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};
export default Blogs;

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:4000/blogs");
  return {
    props: {
      blogs: data,
    },
  };
};
