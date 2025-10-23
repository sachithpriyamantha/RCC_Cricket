import React, { useState } from "react";
import HomeNavbar from "./HomeNavbar";
import back from "../assets/images/flag.png";
import profilePic from "../assets/images/kusal.png";
import flag from "../assets/images/backDrop3.png";
import { FaCamera, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";

const AddOfficialForm = ({ isOpen, onSubmit }) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    name: null,
    dateOfBirth: null,
    age: null,
    email: null,
    username: null,
    password: null,
    address: null,
    description: null,
    contactNumber: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      //isImageAdded(false);
      if (files && files[0]) {
        const file = files[0];
        setImagePreview(URL.createObjectURL(file));
        setFormData({
          ...formData,
          [name]: file,
        });
        setIsImageAdded(true);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log("Form Data:", formData.email);
    // Here you should handle file upload to the server
  };
  const handleEditImageClick = () => {
    setIsEditImage(true);
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    setIsImageAdded(false);
    setIsEditImage(false);
  };

  return (
    <div
      className={`h-full pb-20 text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HomeNavbar />
      <div className="max-w-screen-full pt-20 md:p-16 p-5"></div>
      <div className=" flex relative w-full items-center justify-center p-2 ">
        <div className="w-[5%] ">
          <Navbar />
        </div>
        <div
          className="   h-full bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h1 className="text-2xl font-bold text-[#480D35]">
            Edit Official Profile
          </h1>
          <div
            className="flex justify-center rounded-xl h-32 mt-2 items-end mb-6"
            style={{
              backgroundImage: `url(${back})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white ">
              {!isImageAdded ? (
                <>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    required
                  />
                  <div className="rounded-full p-2 bg-[#480D35]">
                    <FaCamera
                      className="text-2xl text-white cursor-pointer "
                      onClick={() => document.getElementById("image").click()}
                    />
                  </div>
                </>
              ) : (
                imagePreview && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={imagePreview}
                      alt="Image Preview"
                      className=" w-24 h-24 rounded-full object-cover border border-gray-300"
                    />
                    <input
                      id="image"
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="absolute opacity-0 w-10 h-10 cursor-pointer"
                      required
                    />
                    {!isEditImage ? (
                      <div className="absolute rounded-full p-2 bg-[#480D35] bottom-2 right-2">
                        <FaEdit
                          className=" text-lg text-white  cursor-pointer "
                          onClick={handleEditImageClick}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="absolute rounded-full p-2 bg-[#480D35] bottom-0 right-5">
                          <FaCamera
                            className=" text-lg text-white cursor-pointer"
                            onClick={() =>
                              document.getElementById("image").click()
                            }
                          />
                        </div>
                        <div className="absolute rounded-full p-2 bg-[#e62c2c] bottom-0 -right-4">
                          <FaTrash
                            className=" text-lg text-white cursor-pointer"
                            onClick={handleRemoveImage}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )
              )}

              {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="text-[#480D35] md:ml-32 text-lg font-bold">
              Personal information
            </h1>
            <div className="md:px-32 w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 ">
              <div className=" col-span-1">
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="lastName"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-1 h-28 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="phone"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            <div className=" md:ml-32 col-span-2 mt-5">
              <button
                type="submit"
                className="bg-[#480D35] w-full md:w-20 text-white px-4 py-2 rounded-lg"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOfficialForm;