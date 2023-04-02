import Link from "next/link";
import { useRouter } from "next/router";
const Products = ({ products }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Products List</h1>
      {products &&
        products.map((product, index) => {
          return (
            <Link key={index} href={"products/" + product.id}>
              <p>
                {product.id} {product.title} {product.price}
              </p>
            </Link>
          );
        })}
    </>
  );
};

export default Products;
export async function getStaticProps() {
  console.log("Genrating Products");
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  console.log("getStaticProps", data.length);
  return { props: { products: data }, revalidate: 30 };
}
