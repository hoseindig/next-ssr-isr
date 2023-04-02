import useSWR from "swr";

async function feacher() {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();
  return data;
}

const DashBoardSWR = () => {
  const { data, error } = useSWR("dasgbaord", feacher);
  if (error) return <h4>error</h4>;
  if (!data) return <h4>Loading</h4>;
  return (
    <>
      <h1>Dashbaord SWR</h1>
      <h4>Post : {data.post}</h4>
      <h4>Like : {data.like}</h4>
      <h4>Following : {data.following}</h4>
      <h4>Followrs : {data.followrs}</h4>
    </>
  );
};

export default DashBoardSWR;
