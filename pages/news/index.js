import Link from "next/link";

const News = ({ news = [] }) => {
  return (
    <>
      <h1>News List</h1>

      <ul>
        {news &&
          news.map((n) => {
            return (
              <li key={n.id}>
                <Link href={`news/info/`}>
                  {n.id} {n.title}
                </Link>
                <Link href={"news/" + n.category}> {n.category} </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default News;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  res.setHeader("my-cookie", ["my-value=1"]);
  res.setHeader("Set-Cookie", ["Cookie-value=1"]);
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log("%cnews pre-rendering ", "background:blue");
  console.log("news", data.length);
  console.log("news cookie", req.headers.cookie);
  console.log("query", query);
  return { props: { news: data } };
}
