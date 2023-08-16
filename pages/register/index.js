import Link from "next/link";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(name, email, password)
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      toast.success("User Registered Successfully!")
      router.push("/login")
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Toaster /> 
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />

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
    </>
  );
};

export default RegisterPage;
