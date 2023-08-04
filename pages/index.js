import React from "react";
import Reviews from "@/components/reviewsFrontend";
import Star from "@/components/Star";

const Home = ({ data }) => {
  return (
    <>
      <Reviews props={data} />
      <Star stars={data} />
    </>
  );
};

export default Home;


export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/getall");
  const data = await response.json();

  return { props: { data } };
}


// export async function getServerSideProps() {
//   const res = await fetch("https://dummyjson.com/posts");
//   const data = await res.json();

//   return { props: { data } };
// }
