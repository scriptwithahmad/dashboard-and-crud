import Link from "next/link";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useState } from "react";

const router = Router;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault;

    try {
      const data = await signIn("credentials", {
        redirect: "/",
        email,
        password,
      });

      if (data){
        console.log("SuccessFully Login!")
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form" onClick={submitHandler}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          value={password}
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
