import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
//Catch All Routes
const Params = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
      <div>
        this is params in blogs => <b>{JSON.stringify(params)}</b>
        <br></br>
        <Link href="/">
          <a>back to home ?</a>
        </Link>

        <br></br>
        <Link href="/posts/blogs/2022/8/4">
          <a>go to latest blog ?</a>
        </Link>
      </div>
    );
};

export default Params;