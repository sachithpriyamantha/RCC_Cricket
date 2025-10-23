import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { TbScoreboard } from "react-icons/tb";
import { MdPeople, MdOutlineNewspaper } from "react-icons/md";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  // Safely retrieve the username from localStorage
  const userString = localStorage.getItem("user"); // Adjust key based on your storage
  const user = userString ? JSON.parse(userString) : null; // Declare `user` properly
  const username = user?.username || ""; // Use optional chaining to access `username`

  
  // console.log("Username is : "+ username); 

  // Set active link based on the current location
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Function to apply active styles
  const getLinkClass = (path) => {
    return path === activeLink
      ? "bg-gray-300 bg-opacity-30"
      : "hover:bg-gray-300 hover:bg-opacity-10";
  };


    return (
        <>
            <div className={`flex h-full w-full flex-col justify-center items-center border border-[#00175F]`}>
                <div className=" w-full py-2 px-2 border-b border-[#00175F] flex items-center ">
                    <h1 className=" h-20 py-5 pl-4 relative  text-white text-2xl font-bold">RCC Admin</h1>
                </div>
                <ul className="flex flex-col w-full h-full">
                    <Link to={"/admin-home"} className={`${getLinkClass("/admin-home")} group flex flex-wrap gap-3 pl-4 py-4 items-center text-2xl text-center p-2 text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<FaHome className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Home</span>
                    </Link >
                    <Link to={"/admin-player"} className={`${getLinkClass("/admin-player")} group flex flex-wrap gap-3 pl-4 py-4 items-center text-2xl text-center p-2 text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<FaPeopleGroup className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Players</span>
                    </Link >
                    <Link to={"/admin-team"} className={`${getLinkClass("/admin-team")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<RiTeamFill className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Teams</span>
                    </Link>
                    <Link to={"/admin-match"} className={`${getLinkClass("/admin-match")} group flex flex-wrap gap-3 py-4 pl-4 cursor-pointer text-2xl items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<BiSolidCricketBall className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Matches</span>
                    </Link>
                    <Link to={"/admin-scorecard"} className={`${getLinkClass("/admin-scorecard")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<TbScoreboard className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Scores</span>
                    </Link>
                    <Link to={"/admin-coach"} className={`${getLinkClass("/admin-coach")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<MdPeople className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Coaches</span>
                    </Link>
                    <Link to={"/admin-official"} className={`${getLinkClass("/admin-official")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<MdPeople className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">officials</span>
                    </Link>
                    <Link to={"/admin-news"} className={`${getLinkClass("/admin-news")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>

                        {" "}<MdOutlineNewspaper className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">News</span>
                    </Link>
                    {/* {username === "admin01" && (
                      <Link
                        to={"/admin-admin-control"}
                        className={`${getLinkClass("/admin-admin-control")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}
                        <MdPeople className="text-white" />
                        <span className="text-sm text-white transition-opacity duration-300 mt-1">
                          Admins
                        </span>
                      </Link>
                    )} */}


{(username === "admin01" || username === "ITMaster") && (
  <Link
    to={"/admin-admin-control"}
    className={`${getLinkClass("/admin-admin-control")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2 text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}
  >
    <MdPeople className="text-white" />
    <span className="text-sm text-white transition-opacity duration-300 mt-1">
      Admins
    </span>
  </Link>
)}
                </ul>
            </div>
        </>   
    );

};

export default Navbar;
