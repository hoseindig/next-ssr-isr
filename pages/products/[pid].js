const ProductInfo = ({ product }) => {
  return (
    <>
      <h1>ProductInfo</h1>
      {product && (
        <div>
          <h4>
            {product.id}- {product.title}{" "}
          </h4>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </>
  );
};

export default ProductInfo;

export async function getStaticProps(context) {
  const { params } = context;
  // console.log("params", params);
  if (params.pid) {
    const res = await fetch("http://localhost:4000/products/" + params.pid);
    const data = await res.json();
    console.log("getStaticProps", data);
    return { props: { product: data }, revalidate: 10 };
  } else return { props: { products: null } };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "1" } }, { params: { pid: "2" } }],
    fallback: true, //"blocking"
  };
}
