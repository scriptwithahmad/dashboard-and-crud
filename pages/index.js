import React from "react";
import Reviews from "@/components/reviewsFrontend";
import Star from "@/components/Star";
import Team from "../components/team";
import Dashboard from "../components/dashboard";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import PlayAreaCards from "@/components/PlayAreaCards";
import PlaySingle from "@/components/PlaySingle";

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <PlayAreaCards />
      <PlaySingle />
      <Register />
      <Dashboard />
      <Team props={data} />
      <Reviews props={data} />
      <Star stars={data} />
    </>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/getall");
//   const data = await response.json();

//   return { props: { data } };
// }

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get-all-team");
  const data = await res.json();

  return { props: { data } };
}
