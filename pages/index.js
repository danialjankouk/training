import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div>
      this is Home page
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
      <br></br>
      <Link href="/episodes">
        <a>go to episodes?</a>
      </Link>
      <br></br>
      <Link href="/profile">
        <a>go to profile?</a>
      </Link>
    </div>
  );
};

export default index;
