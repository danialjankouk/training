import React from "react";
import Link from "next/dist/client/link";
const HomePage = () => {
  return (
    <div>
      <h1>this is HomePage </h1>
      <br></br>
      <Link href="/episodes">
        <a>go to episodes?</a>
      </Link>
      <br></br>
      <Link href="/users">
        <a>go to users?</a>
      </Link>
      <br></br>
      <Link href="/products">
        <a>go to products?</a>
      </Link>
      <br></br>
      <Link href="/blogs">
        <a>go to blogs?</a>
      </Link>
    </div>
  );
};

export default HomePage;
