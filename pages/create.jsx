import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Create = () => {
  const router = useRouter();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    rate: "",
  });

  const formDataChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const submitReview = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("/api/reviews", {
        ...formData,
      });
      toast.success("Review uplaoded Successfully!");
      res.status(200).json({
        success: true,
        message: "Review Uploaded Successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <h1>Write your Review</h1> */}
      <Toaster />
      <div className="main">
        <form onSubmit={submitReview} className="formMain">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            required
            id="title"
            name="title"
            placeholder="Name"
            value={formData.title}
            onChange={formDataChangeHandler}
          />

          <label htmlFor="desc"> Desc </label>
          <textarea
            placeholder="Comment"
            // required
            cols={6}
            rows={4}
            name="desc"
            value={formData.desc}
            onChange={formDataChangeHandler}
          ></textarea>

          <div className="starMain">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    size={30}
                    color={
                      currentRating <= (hover || rating) ? "#2d599a" : "#c8c8c8"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <label htmlFor="rate">Rating: </label>
          <input
            required
            min={1}
            max={5}
            type="number"
            name="rate"
            id="rate"
            placeholder="Rating"
            value={formData.rate}
            onChange={formDataChangeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
