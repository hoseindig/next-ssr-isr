import styles from "./blog.module.scss";
import Link from "next/link";
const Blog = ({ posts }) => {
  // console.log(posts);
  return (
    <>
      <h1>Blog main page</h1>
      <div className={styles.mainBox}>
        {posts.map((item, index) => {
          return (
            <Link
              key={item.id}
              href={"/blog/" + item.id}
              className={styles.box}
            >
              <div>
                <h4>
                  {item.id} {item.title}
                </h4>
                <span>{item.body}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data.length);
  return { props: { posts: data.slice(0, 3) } };
}
