import { useRouter } from 'next/router';
import React from 'react';
//Catch All Routes
const Params = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
      <div>
        this is params in blogs => <b>{JSON.stringify(params)}</b>
      </div>
    );
};

export default Params;