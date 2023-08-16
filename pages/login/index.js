import Link from "next/link";
import { signIn } from "next-auth/react";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data)
        // router.push("/");

        if(data?.error){
          toast.error("Wrong Credentials")
        }else{
          router.push("/")
          toast.success("User Logedin Successfully!");
        }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster />
      <form className="form" onSubmit={submitHandler}>
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
