import Link from "next/link";
import { getStaticProps } from "./users";

const MainPage = () => {
  return (
    <div>
      <h1>home page</h1>
      <h4>pre render</h4>
      <Link href="users">Users</Link> | <Link href="blog">Blog</Link> |{" "}
      <Link href="products">Products</Link>|{" "}
      <Link href="dashboard">Dashboard</Link> |{" "}
      <Link href="dashbaord-swr">Dashbaord-swr</Link> |{" "}
    </div>
  );
};

export default MainPage;
