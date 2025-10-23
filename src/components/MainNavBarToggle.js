
import React, { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/UseAuth";

const MainNavbarToggle = () => {
    const navigate = useNavigate(); // Hook for navigation
    const { logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleButton = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const handleLogoutClick = () => {
        logout();
        navigate('/login'); // Redirect to home page after logout
      };

      return (
        <>
          <div className="flex items-start justify-start ">
            <button
              className="text-[#00175F] lg:flex hidden focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              {isMenuOpen
                ? <FaXmark className="text-2xl text-[#00175F] " />
                :  <FaUserCircle className="text-2xl text-[#00175F]" />}
            </button>
            <button
              className="text-[#00175F] lg:hidden flex focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              <FaUserCircle className="text-2xl text-[#00175F]" />
            </button>
          </div>
          <div
            className={`absolute space-y-2 z-30 right-10 mt-10 w-[200px] mb-2 rounded-md justify-end items-center py-3 transition-all duration-500000 ease-in-out  shadow-lg border-[3px] ${isMenuOpen
              ? " h-auto w-48 block justify-center items-center transition-transform text-opacity-100 duration-50000 ease-in-out bg-white mb-10"
              : "hidden"}`}
          >
            <div className="relative group w-full">
                <ul className=" flex flex-col gap-1 relative w-full !text-[12px] cursor-pointer px-1 ![font-family:'Inter',Helvetica]  items-start">
                    <div  onClick={handleLogoutClick} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20 ">
                        {" "}<RiLogoutCircleRLine className="text-[#00175F] text-xl"/> Logout
                    </div>
                </ul>
            </div>
          </div> 
        </>       
    );
};
export default MainNavbarToggle;