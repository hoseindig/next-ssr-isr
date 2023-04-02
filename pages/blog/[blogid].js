import { useRouter } from "next/router";

const BlogDetial = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading ...</h1>;
  if (!post.id) return <h1>No Data Found!</h1>;
  return (
    <>
      {post && (
        <div>
          <h4>blogid : {post.id} </h4>
          <h1>{post.title}</h1>
          <h4>{post.body}</h4>
        </div>
      )}
    </>
  );
};

export default BlogDetial;

export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { blogid: `${post.id}` },
  //   };
  // });
  // console.log("paths", paths);
  return {
    paths: [
      {
        params: { blogid: "1" },
      },
      {
        params: { blogid: "2" },
      },
    ],

    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  // console.log("params", params);
  if (params.blogid) {
    console.log(`genrate page for /blog/${params.blogid}`);
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.blogid
    );
    const data = await res.json();
    console.log(data);
    if (!data.id) {
      return;
      {
        notFound: true;
      }
    }
    return { props: { post: data } };
  } else return { props: { post: [] } };
}
