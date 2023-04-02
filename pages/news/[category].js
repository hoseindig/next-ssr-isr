const CategoryFilter = ({ articles, category }) => {
  if (articles.length === 0) return <h1>News CategoryFilter Not Found !</h1>;
  return (
    <>
      <h1>News CategoryFilter</h1>
      <h2>
        category {category} # {articles.length}
      </h2>
      {/* <h4> {articles.length} </h4> */}

      <ul>
        {articles.map((a, i) => {
          return (
            <ol key={a.id}>
              {i + 1} ) {a.title} / {a.category}
            </ol>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryFilter;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log("category/length:", data.length);
  console.log("category/cookie:", req.headers.cookie);
  console.log("category/query:", query);
  return { props: { articles: data, category } };
}
