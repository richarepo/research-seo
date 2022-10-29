/** @format */

import Head from "next/head";
import ProductDetail from "../components/products/ProductDetails";
import styles from "../styles/Home.module.css";

export default function Home({ product }: any) {
   const { name, description, offer, productImage } = product;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Sweater, winter, jacket, black jacket" />
        <meta name="author" content="Sumit lal verma" />
      </Head>
      <ProductDetail product={product} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("http://research-seo.netlify.app/product.json");
  const data = await res.json();

  return {
    props: { product: data }, // will be passed to the page component as props
  };
}
