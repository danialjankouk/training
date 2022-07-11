import React from 'react';
import { useRouter } from 'next/dist/client/router';
const Sth = () => {
    const router = useRouter()
    const {postId , sth} = router.query
    return (
      <div>
        this is <b>{postId}</b> in postId route and in <b>{sth}</b> page
      </div>
    );
};

export default Sth;