import React from 'react';
import { useRouter } from 'next/router';
const p1 = () => {
    const route = useRouter()
    const {id} = route.query
    return (
        <div>
            this is {id} page in post
        </div>
    );
};

export default p1;