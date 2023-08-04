import React from "react";


const Comments = () => {
  return (
    <div className="form-wrapper">
      <form className="col-form">
        <div className="col">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Enter Your Instructor" />
        </div>
        <div className="col rating-stars">
          <i class="fa-sharp fa-solid fa-star"></i>
          <i class="fa-sharp fa-solid fa-star"></i>
          <i class="fa-sharp fa-solid fa-star"></i>
          <i class="fa-sharp fa-solid fa-star"></i>
          <i class="fa-sharp fa-solid fa-star"></i>
        </div>

        <textarea
          className="col"
          name="area"
          id=""
          cols="50"
          rows="5"
          placeholder="Your Comment"
        ></textarea>

        <button>Submit Review</button>
      </form>
    </div>
  );
};

export default Comments;
