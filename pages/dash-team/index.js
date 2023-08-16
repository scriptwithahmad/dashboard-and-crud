import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const DashTeam = ({ data }) => {
  console.log(data.teamData);

  const [query, setQuery] = useState("");
  const [fData, setFData] = useState(data.teamData);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };


  const router = useRouter();
  const delPost = async (id) => {
    // console.log(id)
    try {
      if (window.confirm("Do you wnat to Delete this Post") === true) {
        const res = await fetch(`/api/team/${id}`, {
          method: "DELETE",
        });
        if ( toast.success("Post is Delete Successfully", { duration: 2000, position: "top-right", })) {
          router.push("/dash-team");
        } else {
          toast.error("Something went Wrong");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSearch = () => {
    const filteredData = data.teamData.filter(
      (v) =>
        v.name.toLowerCase().includes(query.toLowerCase()) ||
        v.design.toLowerCase().includes(query.toLowerCase())
    );
    setFData(filteredData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div>
      <Toaster />
      <div class="backCover">
        <div className="dash-wrapper">
          <div className="filterBox">
            <h1 className="mainTitle">
              Edify <span>Team</span>
            </h1>
            <div className="innerInput">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className="dasboard-Main">
          {fData.length > 0 ? (
          fData.map((v) => {
            return (
              <div key={v._id} className="das-col">
                <div className="das-sub-col">
                  <div className="dasImgMain">
                    <Image
                      src={v.avatar}
                      alt="Image Alt"
                      width={200}
                      height={200}
                      className="das-img"
                    />
                  </div>
                  <div className="das-info">
                    <h1 className="title"> {v.name} </h1>
                    <p style={{ display: "inline-block" }} className="cate">
                      {v.design}
                    </p>
                  </div>
                </div>
                <div className="action">
                  <Link href={"/"}>
                    <i class="fa-solid fa-eye"></i>
                  </Link>
                  <Link href={`/edit/${v._id}`}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <i
                    onClick={() => delPost(v._id)}
                    class="fa-solid fa-trash"
                  ></i>
                </div>
              </div>
            );
          })
        ) : (
          <p>No posts found.</p> // Display this message if no matching posts
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashTeam;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get-all-team");
  const data = await res.json();

  return { props: { data } };
}
