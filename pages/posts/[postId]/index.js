import React from 'react';
import { useRouter } from 'next/dist/client/router';
const PostId = () => {
    const route = useRouter()
    const {postId} = route.query
    return (
      <div>
        this is <b>{postId}</b>
      </div>
    );
};

export default PostId;