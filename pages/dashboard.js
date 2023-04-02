import { useState, useEffect, use } from "react";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    async function getDashboardData() {
      setLoading(true);
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setLoading(false);
      console.log(data);
      setDashboardData(data);
    }

    getDashboardData();
  }, []);

  if (isLoading) return <h4>Is Loading ...</h4>;
  return (
    <>
      <h1>Dashboard</h1>
      <h4>Post : {dashboardData.post}</h4>
      <h4>Like : {dashboardData.like}</h4>
      <h4>Following : {dashboardData.following}</h4>
      <h4>Followrs : {dashboardData.followrs}</h4>
    </>
  );
};

export default Dashboard;
