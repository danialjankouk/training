// import React from "react";
// import { useRouter } from "next/dist/client/router";
// import axios from "axios";
// const product = ({ products }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading ...</div>;
//   }
//   return (
//     <div>
//       <h1>products detail</h1>
//       <br></br>
//       <h2>
//         title : {products.title} - price : {products.price}
//       </h2>
//       <br></br>
//       <p>{products.description}</p>
//     </div>
//   );
// };

// export default product;

// //get static paths
// export const getStaticPaths = () => {
//     return {
//         paths: [
//             {
//              params: { productId: "1" }
//             },
//         ],
//         fallback:true,
//     }
// }

// //get static props
// export const getStaticProps =async (contex) => {
//     const {params} = contex
//     const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`)
//     console.log(`generate the /products/${params.productId } page`);
//     return {
//         props: {
//             products: data
//         },
//         revalidate:10
//     }
// }
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import axios from "axios"
const product = ({products}) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <h1>loading ...</h1>
    )
  }
  return (
    <div>
      <h1>this is pprroducys</h1>
      <h2>title : {products.title}</h2>
      <br></br>
      <h2>price : {products.price}</h2>
    </div>
  );
};

export default product;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params : {productId : "1"}
      }
    ],
    fallback:true
  }
}

export const getStaticProps =async (contex) => {
    const {params} = contex
    const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`)
    console.log(`generate the /products/${params.productId } page`);
    return {
        props: {
            products: data
        },
        revalidate:5
    }
}