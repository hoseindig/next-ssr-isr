import { useState } from "react";
import { useRouter } from "next/router";
const Event = ({ events = [], category = {} }) => {
  const router = useRouter();
  const [eventsList, setCategory] = useState(events);

  const categoryHandler = async (catgor) => {
    const categoryQuery = catgor ? `?category=${catgor}` : "";
    const res = await fetch(`http://localhost:4000/event${categoryQuery}`);
    const data = await res.json();
    setCategory(data);
    router.push(`/event${categoryQuery}`, undefined, { shallow: true });
  };
  return (
    <>
      <h1>Event</h1>
      {category.map((c, i) => {
        return (
          <button key={c.id} onClick={() => categoryHandler(c.name)}>
            {c.name}
          </button>
        );
      })}
      <button onClick={() => categoryHandler("")}>clear</button>
      <ul>
        {eventsList.map((e, i) => {
          return (
            <li key={i}>
              {e.title} / {e.category}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : "";

  const res = await fetch("http://localhost:4000/event?" + queryString);
  const data = await res.json();

  const category_res = await fetch("http://localhost:4000/category");
  const category_data = await category_res.json();

  console.log("events", data.length);
  console.log("query", query, category);
  return {
    props: { events: data, category: category_data },
  };
}
