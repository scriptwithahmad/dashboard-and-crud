import React from "react";

const Team = ({ props }) => {
  // console.log(props.teamData);

  const delPost = async (id) => {
    try {
      const res = await fetch(`/api/team/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="team-col-main">
        <div className="team-col-grid">
          {props?.teamData?.map((v) => {
            return (
              <div key={v.id} className="card">
                <img src={v.avatar} alt="" />
                <div className="cardInfo">
                  <h2>{v.name}</h2>
                  <h4>{v.design}</h4>
                  <button onClick={() => delPost(v.id)}>del Post</button>
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



