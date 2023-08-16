import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const Team = ({ props }) => {
  // console.log(props.teamData[0]._id);

  const router = useRouter();

  return (
    <>
      <Toaster />
      <div className="team-col-main">
        <div className="team-col-grid">
          {props?.teamData?.map((v) => {
            return (
              <div key={v.id} className="card">
                <img src={v.avatar} alt="" />
                <div className="cardInfo">
                  <h2>{v.name}</h2>
                  <h4>{v.design}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
