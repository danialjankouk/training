import React from 'react';
import { useRouter } from 'next/dist/client/router';
const BlogsPage = () => {
    const router = useRouter()
    const {blogId ,postId} = router.query 
    return (
      <div>
            this is <b>{blogId}</b> in <b>blogs</b> <br></br>
            this is post id <b>{postId}</b>
      </div>
    );
};

export default BlogsPage;