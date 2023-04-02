import Link from "next/link";

const NewsInfo = () => {
  return (
    <>
      <h1>NewsInfo</h1>
      <Link href={"info/1"}>Link</Link>
    </>
  );
};

export default NewsInfo;

// export async function getStaticProps(context) {
//   console.log("context", context);
//   return { props: {} };
// }
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { nid: "1" },
//       },
//       {
//         params: { nid: "2" },
//       },
//     ],
//     fallback: false,
//   };
// }
