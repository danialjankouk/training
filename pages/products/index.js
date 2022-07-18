import React from "react";
import axios from "axios";
const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>products list page</h1>
      {products.map((p) => {
        return (
          <h2 key={p.id}>
            title : {p.title} - price : {p.price}
          </h2>
        );
      })}
    </div>
  );
};
export default ProductsList;
//get static props
export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:4000/products");
  console.log(`generate the /products page`);
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
