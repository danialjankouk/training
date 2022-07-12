import React from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
const HomePage = () => {
  const route = useRouter();
  const clickHandler = () => {
    route.push("/posts/blogs");
  };
  const clickHandler2 = () => {
    route.replace("/posts")
  }
  return (
    <div>
      Home Page
      <br></br>
      <Link href="/posts">
        <a>go to posts ?</a>
      </Link>
      <br></br>
      <Link href="/posts/blogs">
        <a>go to blogs ?</a>
      </Link><br></br>
      ---------------------------<br></br>
      <button onClick={clickHandler}>Push to blugs ?</button><br></br>
      ---------------------------<br></br>
      <button onClick={clickHandler2}>replace to posts ?</button>
    </div>
  );
};

export default HomePage;
