"use client";
import Link from "next/link";
import { React, useState } from "react";

const Navbar = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Home",
      link: "/",
    },

    {
      id: 2,
      text: "About",
      link: "/About",
    },
    {
      id: 3,
      text: "Company",
      link: "/Comany",
    },
    {
      id: 4,
      text: "ContactUs",
      link: "/ContactUs",
    },
  ]);
  return (
    <div
      style={{ margin: "auto" }}
      className="pl-6 flex flex-col lg:flex-row items-center justify-between pt-7 "
    >
      <div className="font-bold text-2xl mb-4 lg:mb-0 lg:mr-6">
        The Jobs Harbour
      </div>
      <div className="w-full lg:w-4/6 flex flex-col lg:flex-row justify-between font-semibold">
        {comments.map((comment, index) => (
          <Link href={comment.link}>
            <div
              key={index}
              className="mb-2 m-2 mr-2 lg:mb-0 cursor-pointer hover:text-purple-700"
            >
              {comment.text}
            </div>
          </Link>
        ))}
        <Link href="/SignUp">
          <button
            style={{ border: "1px solid black", marginTop: "-10px" }}
            className="mr-2 lg:mr-4 px-4 lg:px-7 ml-4 py-2 lg:py-3 h-10 lg:h-12 rounded hover:text-purple-700"
          >
            Login
          </button>
        </Link>
        {/* <button
          style={{ border: "1px solid black", marginTop: "-10px" }}
          className="px-3 lg:px-7 py-2 lg:py-3 h-10 lg:h-12 rounded text-white bg-violet-700 hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Register
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
