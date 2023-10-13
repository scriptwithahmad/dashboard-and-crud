import React from "react";

const Register = () => {
  return (
    <>
      <div className="main_amasdor_wrapper">
        <div class="container">
          <div class="title">Student Apply</div>
          <form action="#">
            <div class="user__details">
              {/* FULL NAME  --------------*/}
              <div class="input__box">
                <label htmlFor="name" class="details">
                  Full Name
                </label>
                <input autoComplete="true" id="name" type="text" placeholder="E.g: john" required />
              </div>
              {/* FATHER NAME  --------------*/}
              <div class="input__box">
                <label htmlFor="fName" class="details">
                  Father Name
                </label>
                <input autoComplete="true" id="fName" type="text" placeholder="Doe" required />
              </div>
              {/* EMAIL  --------------*/}
              <div class="input__box">
                <label htmlFor="email" class="details">
                  Email
                </label>
                <input
                  autoComplete="true"
                  id="email"
                  type="email"
                  placeholder="johnsmith@hotmail.com"
                  required
                />
              </div>
              {/* PHONE NUMBER  --------------*/}
              <div class="input__box">
                <label htmlFor="p_No" class="details">
                  Phone Number
                </label>
                <input
                  id="p_No"
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="03014411245"
                  required
                />
              </div>
              {/* PROMO CODE  --------------*/}
              <div class="input__box">
                <label htmlFor="promo_code" class="details">
                  Promo Code
                </label>
                <input
                  id="promo_code"
                  type="text"
                  placeholder="wd-123"
                  required
                />
              </div>
              {/* COURSE NAME  --------------*/}
              <div class="input__box">
                <label htmlFor="coruse_name" class="details">
                  Course Name
                </label>
                <input
                  id="coruse_name"
                  type="text"
                  placeholder="eg. 3,000"
                  required
                />
              </div>

              {/* COURSE FEE  --------------*/}
              <div class="input__box">
                <label htmlFor="fee" class="details">
                  Course Fee
                </label>
                <input id="fee" type="text" placeholder="eg. 30,000" required />
              </div>
              {/* TOTAL FEE  --------------*/}
              <div class="input__box">
                <label htmlFor="totol_fee" class="details">
                  Course Fee
                </label>
                <input
                  id="totol_fee"
                  type="text"
                  placeholder="eg. 38,000"
                  required
                />
              </div>
            </div>
            {/* GENDER  --------------*/}
            <div class="gender__details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <span class="gender__title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span>Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span>Female</span>
                </label>
              </div>
            </div>
            {/* BUTTONS  --------------*/}
            <div className="main_buttons_div">
              <div class="button">
                <input type="submit" value="Register" />
              </div>
              <div class="button">
                <input type="reset" value="Reset" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
