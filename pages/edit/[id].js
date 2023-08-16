import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Team = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    design: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formDataChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   CLOUDINARY
  const [tempImage, setTempImage] = useState("");

  const uploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImage);
      data.append("upload_preset", "blog-image");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmyrswz0r/image/upload",
        {
          body: data,
          method: "POST",
        }
      );

      const jsonRes = await res.json();

      return jsonRes.secure_url;
    } catch (error) {
      alert("Something wrong! while Uplading image");
    }
  };

  //   CLOUDINARY

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/team/${id}`);
      const data = await res.json();

      // console.log(data)
      setFormData(data);
    };
    fetchData();
  }, []);

  // SUBMIT FORM ON SUBMIT
  const sumbitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const imageUrl = await uploadImageToCloudinary();
      const res = await axios.put(`/api/team/${id}`, {
        ...formData,
        avatar: imageUrl,
      });
      toast.success("Post Updated Succesfully!", {
        duration: 2000,
        position: "top-right",
      });
      setFormData({
        name: "",
        design: "",
      });
      router.push("/dash-team");
      setTempImage("");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM ON SUBMIT

  return (
    <div>
      <div>
        <Toaster />
        <div className="main">
          <form className="formMain teamMain" onSubmit={sumbitHandler}>
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              placeholder="enter your name...."
              onChange={formDataChangeHandler}
            />

            <label htmlFor="design"> Designation </label>
            <input
              placeholder="enter your Designation...."
              name="design"
              id="design"
              value={formData.design}
              onChange={formDataChangeHandler}
            />

            {/* ------------------ CLOUDINARY ----------------- */}
            {tempImage ? (
              <div className="showImageMain">
                <div className="imgDiv">
                  <Image
                    className="inputImage"
                    width={200}
                    height={200}
                    src={URL.createObjectURL(tempImage)}
                    alt=""
                  />
                </div>
                <button className="delImage" onClick={() => setTempImage("")}>
                  <i class="fa-solid fa-xmark"></i>
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setTempImage(e.target.files[0])}
                />
                <label htmlFor="avatar">
                  <div className="defaultImgDiv">
                    <img
                      className="defaultImg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp5ZIUWquEoLHqcBFvATwXyfQsiNfV9o_OopJKKuGU1oY7Otw_tlw7lqpYZJIZfB7KuM&usqp=CAU"
                      alt="img here"
                    />
                  </div>
                </label>
              </>
            )}
            {/* ------------------ CLOUDINARY ----------------- */}

            <button type="submit">
              {loading ? <span className="loading"></span> : "Update"}
              <i class="arrow fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Team;
