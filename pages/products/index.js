// import React from "react";
// import axios from "axios";
// const ProductsList = ({ products }) => {
//   return (
//     <div>
//       <h1>products list page</h1>
//       {products.map((p) => {
//         return (
//           <h2 key={p.id}>
//             title : {p.title} - price : {p.price}
//           </h2>
//         );
//       })}
//     </div>
//   );
// };
// export default ProductsList;
// //get static props
// export const getStaticProps = async () => {
//   const { data } = await axios.get("http://localhost:4000/products");
//   console.log(`generate the /products page`);
//   return {
//     props: {
//       products: data,
//     },
//     revalidate: 10,
//   };
// };

import axios from "axios";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Products List</h1>
      {products.map((p) => {
        return (
          <div key={p.id}>
            <h1>
              title: {p.title} - price : {p.price} - description :{" "}
              {p.description}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

export const getStaticProps = async() => {
  const { data } = await axios.get("http://localhost:4000/products");
  console.log("generate /products")
  return {
    props:{
      products: data
    },
    revalidate: 5
  }
}