import React from "react";
import axios from "axios";
import Link from "next/link";
const Category = ({ blogs, category }) => {
  return (
    <div>
      <h1>blogs for category : {category}</h1>
      <br></br>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>title : {blog.title}</h2>
            <p>description : {blog.description}</p>
            <Link href="/blogs">
              <a>back to blogs ? </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${category}`
  );
  return {
    props: {
      category,
      blogs: data,
    },
  };
};
