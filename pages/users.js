import User from "@/components/user";

function Users({ users = [] }) {
  return (
    <div style={{ padding: "25px" }}>
      <ul>
        {users.map((item, index) => {
          return <User user={item} key={index} />;
        })}
      </ul>
      <h4>users : {users.length}</h4>
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return { props: { users: data } };
}
