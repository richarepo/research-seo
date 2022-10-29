/** @format */

import ProductDetail from "../components/products/ProductDetails";
import styles from "../styles/Home.module.css";

export default function Home({ product }: any) {
  return (
    <div className={styles.container}>
      <ProductDetail product={product} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("http://localhost:3000/product.json");
  const data = await res.json();

  return {
    props: { product: data }, // will be passed to the page component as props
  };
}
