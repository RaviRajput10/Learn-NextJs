"use client";
import { useState } from "react";
import Link from "next/link";


const Home = () => {
  const [name, setName] = useState("Ravi");
  const changeName = () => {
    console.log("hii");
    setName("Ravi Rajput");
  };

  const innerComp = () => {
    return <h1>innerComp</h1>;
  };
  return (
    <>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Welcome to NextJs Tutorial
      </h1>
      <div>{name}</div>
      <button onClick={changeName}> Change </button>
      {/* <innerComp/>
    {innerComp} */}
    

    <p className="mt-10 text-center text-sm text-gray-500">
              <Link href="signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create a New Account
              </Link>
            </p>
    </>
  );
};

export default Home;
