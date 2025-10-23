
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import flag from "../assets/images/backDrop3.png";
import logo from "../assets/images/RLogo.png";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import { message, DatePicker } from "antd";
import { storage } from "../config/firebaseConfig"; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import dayjs from "dayjs";
import { CalendarOutlined } from "@ant-design/icons";
import relativeTime from "dayjs/plugin/relativeTime"; // To use time from now feature
import NewsPreview from "../components/NewsPreview";
import MainNavbarToggle from "../components/MainNavBarToggle";
import ReactQuill from "react-quill"; // Import the rich-text editor
import "react-quill/dist/quill.snow.css"; // Import Quill styles

dayjs.extend(relativeTime);

const NewsCreator = () => {
  const [createdNews, setCreatedNews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageIds, setImageIds] = useState([]);
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [isShowmorePressed, setIsShowmorePressed] = useState(false);
  const [isViewPressed, setIsViewPressed] = useState(false);
  const [keyViewPressed, setKeyViewPressed] = useState(null);
  const [currentNewsId, setCurrentNewsId] = useState();
  const [currentNews, setCurrentNews] = useState();
  const [uploading, setUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImageDeleteModal, setShowImageDeleteModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [newsToDelete, setNewsToDelete] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [existingImageURLs, setExistingImageURLs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const [searchHeading, setSearchHeading] = useState(""); // State for heading search
  const [searchDate,setSearchDate] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    images: [],
    body: "",
    createdBy:"",
    updatedBy:"",
  });
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem('accessToken');
  const divRef = useRef(null);
  console.log("logged user in news: ", user);

  useEffect(() => {
    // Fetch player data for playerId 4
  
    loadNews();
  
    const leftSection = document.getElementById("left-section");
    const rightSection = document.getElementById("right-section");
  
    // Helper function to update right section height
    const updateRightSectionHeight = () => {
      if (leftSection && rightSection) {
        const leftHeight = leftSection.offsetHeight;
        rightSection.style.height = `${leftHeight}px`;
      }
    };
  
    // ResizeObserver to detect changes in left section height
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateRightSectionHeight); // Debounce using requestAnimationFrame
    });
  
    if (leftSection) {
      observer.observe(leftSection);
    }
  
    // Initial height adjustment
    updateRightSectionHeight();
  
    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);
  

  const loadNews = async() => {
    setUploading(true);
    axios
      .get(`${API_URL}news`, { 
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }})
      .then((response) => {
        const createdNews = response.data;
        setCreatedNews(createdNews);
        console.log("Created News:", createdNews);

        setUploading(false);

      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
    if (files) {
      const selectedFiles = Array.from(files);
      const validationErrors = selectedFiles.map(file => validateImageFile(file)).filter(Boolean);

    if (validationErrors.length > 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        imageUrl: validationErrors.join(", "),
      }));
    } else {
      const previewUrls = selectedFiles.map(file => URL.createObjectURL(file));
      setImageFiles(prevFiles => [...prevFiles, ...selectedFiles]);
      setImagePreviews(prevPreviews => [...prevPreviews, ...previewUrls]);
    }
    }else {

      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const fieldError = validateFormAdd(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, ...fieldError }));
  };

  const handleQuillChange = (content) => {
    setFormData((prev) => ({ ...prev, body: content }));
  };

  const validateFormAdd = (name, value) => {
    const newErrors = {};
    switch(name){
      case "author":
        //name validation
        if (value.trim().length < 4 || value.trim().length > 25) {
          newErrors.author = "Author name must be between 4 and 25 characters long.";
        } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
          newErrors.author = "Author name can only contain letters, spaces, and periods.";
        } else if (/^\s|\s$/.test(value)) {
          newErrors.author = "Author name cannot start or end with a space.";
        };
        break;
      case "heading":
        // Heading validation
        if (value.length > 150) {
          newErrors.heading = "Heading should be under 150 characters.";
        };  
        break;
      default:
        break;  
    };
     return newErrors;
  };
  const validateImageFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return "Invalid file type. Only jpg, png, gif, and webp are allowed.";
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      return "File size should be less than 5MB.";
    }
    return null; // No error
  };

  const validateFormDataAdd = (formData) => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const fieldErrors = validateFormAdd(field, formData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    if (imagePreviews.length === 0 ) {
      errors.imageUrl = "At least one image is required.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFormDataAdd(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      message.error("Please fix the errors before submitting.");
      return;
    }

    setUploading(true);
    console.log("data before submit: ", formData);
    try {
      console.log("formdata1: ",formData.images[0]);
      console.log("formdata2: ",formData.images[2]);

      setFormData(prevData => ({
        ...prevData,
        images:imageFiles,
        createdBy: user.username,
      }));

      const formDataToSend = new FormData();
      const { images, ...newsData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("newsData", JSON.stringify(newsData));

      // Append image file
      imageFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      // console.log("formdata before submit: ", createdNews);
      console.log("Data before edit submit :", formData);
      console.log("FormDataToSend before edit submit :", formDataToSend);
      const response = await axios.post(
        `${API_URL}news/create`,
        formDataToSend,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("News Creation Successfull!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        body: "",
        createdBy:"",
        updatedBy: "",
      });
      setImagePreviews([]);
      setImageFiles([]);
      loadNews();
    } catch (error) {
      console.error("Error submitting form:", error);
       if (error.response && error.response.data && error.response.data.message) {
        // Map specific backend error messages to user-friendly messages
        const errorMsg = error.response.data.message;

        // Example of matching the error message and providing a friendly message
        let userFriendlyMessage = "An unexpected error occurred. Please try again.";

        if (errorMsg.includes("Data truncation: Data too long for column 'body'")) {
          userFriendlyMessage = "The content you're trying to submit is too large (e.g., images exceeding the maximum size of 45KB). Please reduce the size and try again.";
        } else if (errorMsg.includes("some other specific error condition")) {
          userFriendlyMessage = "Specific error message for another case.";
        }
        message.error(userFriendlyMessage);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const EditNews = (news) => {
    console.log("newsId: ", news.id);
    setCurrentNewsId(news.id);
    setIsEditPressed(true);

    setFormData({ 
      author: news.author,
      heading: news.heading,
      body: news.body,
      createdBy: news.createdBy,
      images:news.images.map(image =>({ imageUrl: image.imageUrl}))} 
    );
    
    const imageUrls = news.images.map(
      (img) => `http://rcc.dockyardsoftware.com/images/${img.imageUrl ? img.imageUrl.split('/').pop() : 'default.jpg'}`
    );
    setImagePreviews(imageUrls); // Update image previews with URLs
    // Keep track of existing image URLs
    setExistingImageURLs(imageUrls);

    const imageIds = news.images.map((img) => img.imageId);
    setImageIds(imageIds);
    setImageFiles([]); 
  };

  const handleEditCancel = () => {
    setIsEditPressed(false);
    setFormData({
      images: [],
      author: "",
      heading: "",
      body: "",
      createdBy:"",
      updatedBy: "",
    });
    setImagePreviews([]);
    setCurrentNewsId(null);
    setErrors([]);
  };

  const handleNewsEdit = async (e) => {
     e.preventDefault();
     const errors = validateFormDataAdd(formData);
     setErrors(errors);
     if (Object.keys(errors).length > 0) {
       message.error("Please correct the highlighted errors.");
       console.log("Validation Errors:", errors);
       return;
     };

    setUploading(true);
    try {
      
      setFormData({
        ...formData,
        images: imageFiles,
        updatedBy: user.username,
        
      });

      const formDataToSend = new FormData();

      const { images, ...newsData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("newsData", JSON.stringify(newsData));

      // Append image file
      imageFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      //console.log("formdate before edit submit: ", editedNewsData);
      console.log("Data before edit submit :", formData);
      console.log("FormDataToSend before edit submit :", formDataToSend);
      const response = await axios.put(
        `${API_URL}news/${currentNewsId}`,
        formDataToSend, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`
        }}
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfully Updated!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        body: "",
        createdBy:"",
        updatedBy: "",
      });
      setImagePreviews([]);
      setImageFiles([]);
      setIsEditPressed(false);
      setCurrentNewsId(null);
      loadNews();
    } catch (error) {
       console.error("Error submitting form:", error);
       if (error.response && error.response.data && error.response.data.message) {
        // Map specific backend error messages to user-friendly messages
        const errorMsg = error.response.data.message;

        // Example of matching the error message and providing a friendly message
        let userFriendlyMessage = "An unexpected error occurred. Please try again.";

        if (errorMsg.includes("Data truncation: Data too long for column 'body'")) {
          userFriendlyMessage = "The content you're trying to submit is too large (e.g., images exceeding the maximum size of 45KB). Please reduce the size and try again.";
        } else if (errorMsg.includes("some other specific error condition")) {
          userFriendlyMessage = "Specific error message for another case.";
        }
        message.error(userFriendlyMessage);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const uploadImagesToFirebase = () => {
    return Promise.all(
      imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const storageRef = ref(storage, `news/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            () => {},
            (error) => reject(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject);
            }
          );
        });
      })
    );
  };

  const handleDelete = id => {
    setNewsToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try {
      const deleteMatch = await axios.delete(
        `${API_URL}news/${newsToDelete}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }}
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      loadNews();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to submit: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleImageRemove = async(index) => {
    console.log("index removed: ", index);
    console.log("existing image urls: ", existingImageURLs);
    let updatedImageFiles;
    let updatedImagePreviews;

    if (index < existingImageURLs.length) {
      setShowImageDeleteModal(true);
      setImageToDelete(index);
      
    } else{
      // Removing a newly added image
      const newIndex = index - existingImageURLs.length;  // Adjust index for new images
      // setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== newIndex));
      updatedImageFiles = imageFiles.filter((_, i) => i !== newIndex);
      setImageFiles(updatedImageFiles);

      // Update previews for both new and existing images
      updatedImagePreviews = imagePreviews.filter((_, i) => i !== index);
      setImagePreviews(updatedImagePreviews);

       // Dynamic validation
      if (updatedImageFiles.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          imageUrl: "At least one image is required.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { imageUrl, ...rest } = prevErrors;
          return rest;
        });
      }
    }; 

    // Log to confirm changes
    console.log("Updated existingImageURLs:", existingImageURLs);
    console.log("Updated imageFiles:", imageFiles);
    console.log("Updated imagePreviews:", imagePreviews);
  };

  const confirmImageDelete = async() =>{
    const imageId = imageIds[imageToDelete];

    try {
      const deleteImage = await axios.delete(
        `${API_URL}news/deleteImage/${imageId}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }}
      );
      const updatedExistingImages = existingImageURLs.filter((_, i) => i !== imageToDelete);
      setExistingImageURLs(updatedExistingImages);
      setImagePreviews(updatedExistingImages);
      message.success("Successfully Deleted!");
      setShowImageDeleteModal(false);
      loadNews();
      // Dynamic validation
      if (updatedExistingImages.length === 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          imageUrl: "At least one image is required.",
        }));
      } else {
        setErrors((prevErrors) => {
          const { imageUrl, ...rest } = prevErrors;
          return rest;
        });
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to submit: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  }

  const toggleView = (news) => {
    setCurrentNews(news);
    setIsViewPressed(true);
    setKeyViewPressed((prevId) => (prevId === news.id ? null : news.id));
  };
  const toggleShowmore = () => {
    setIsShowmorePressed(!isShowmorePressed);
  };
  const handlePreviewClose = () => {
    setIsViewPressed(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
  
    if (!e.dataTransfer || !e.dataTransfer.files) {
      console.error("No files were dropped.");
      return;
    }
  
    // Ensure that dropped files are iterable
    const droppedFiles = Array.from(e.dataTransfer.files || []);
    const validationErrors = droppedFiles.map(file => validateImageFile(file)).filter(Boolean);

    if (validationErrors.length > 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        imageUrl: validationErrors.join(", "),
      }));
    } else {
      // Generate preview URLs and update the state
      const previewUrls = droppedFiles.map((file) => URL.createObjectURL(file));
    
      setImageFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
      console.log("Dropped files processed:", droppedFiles);
      setErrors(prevErrors => ({
        ...prevErrors,
        imageUrl: "", // Reset errors
      }));
    };
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits for month
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
    return `${year}/${month}/${day}`;
  };
  

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const formatDateTimeForBackend = (date) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss"); // Adjust format if needed
  };

  // Filter news based on search inputs
  const filteredNews = createdNews.filter((news) => {
    const matchesHeading = news.heading
      .toLowerCase()
      .includes(searchHeading.toLowerCase());
    const matchesAuthor = news.author
      .toLowerCase()
      .includes(searchHeading.toLowerCase());
    const matchesDate = searchDate
      ? dayjs(news.createdOn).isSame(searchDate, "day")
      : true;
    return (matchesHeading || matchesAuthor) && matchesDate;
  });
  


  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center w-full items-stretch min-h-screen">
        <div
          className="lg:flex hidden fixed left-0 justify-center items-center w-[12%] h-screen"
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-full flex px-5 lg:px-0 ">
        <div className="lg:w-[12%] w-0 "></div>
        <div className="lg:w-[88%] w-full md:py-5 flex flex-col items-center justify-center ">
          <div className="flex justify-between w-full lg:px-10 pt-3">
            <Link to={"/member"}>
              <img src={logo} className="h-12 w-12" />
            </Link >
            <MainNavbarToggle/>
          </div>
          <div
            className=" lg:w-[95%] w-full bg-gray-200 lg:p-5 p-3 rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="flex lg:grid lg:grid-flow-col-1 lg:grid-cols-3 gap-5 justify-between items-center content-center md:mb-3">
              <NavbarToggleMenu />
              <h2 className="md:text-2xl lg:col-span-2 text-xl font-bold text-center font-popins text-[#480D35]">
                News Creator
              </h2>
              <h2 className="flex md:hidden md:text-2xl text-xl w-10 font-bold text-center font-popins text-[#480D35]">
                
              </h2>

              {/* <div className="flex gap-3"> */}
              <div className="hidden md:flex lg:col-span-1 justify-between gap-2">
                <div className=" flex w-full text-gray-600 border bg-white border-gray-300 px-3 rounded-3xl focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
                  <input
                    type="text"
                    onChange={(e)=>setSearchHeading(e.target.value)}
                    className="border-0 py-1 px-5 w-[90%]  cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600"
                    placeholder='Search by heading or author'
                  />
                  <button
                    type="button"
                    className="flex items-center w-[10%] justify-center text-gray-500 hover:text-gray-700 rounded-md"
                    // onClick={handleSearchChange}
                    >
                    <IoIosSearch />
                  </button>
                </div>
                <DatePicker
                  name="date"
                  dateFormat="yyyy-mm-dd"
                  onChange={(date) => setSearchDate(date)}
                  suffixIcon={<CalendarOutlined className="custom-calendar-icon"/>}
                  inputReadOnly
                  className="custom-datepicker hidden-input-datepicker w-10 pr-2 bg-transparent border-none text-[black] font-bold"
                  placeholder="yyyy-mm-dd"
                  allowClear
                />

              </div>
              
            </div>
            <div className="flex md:hidden justify-center items-center mb-3 content-center">
              <div className="flex text-gray-600 border bg-white border-gray-300 px-3 rounded-3xl focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
                <input
                  type="text"
                  onChange={(e)=>setSearchHeading(e.target.value)}
                  className="border-0 py-1 px-5 w-[90%]  cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600"
                  placeholder='Search by heading or author'
                />
                <button
                  type="button"
                  className="flex items-center w-[10%] justify-center text-gray-500 hover:text-gray-700 rounded-md"
                  // onClick={handleSearchChange}
                  >
                  <IoIosSearch />
                </button>
              </div>
              <DatePicker
                  name="date"
                  dateFormat="yyyy-mm-dd"
                  onChange={(date) => setSearchDate(date)}
                  suffixIcon={<CalendarOutlined className="custom-calendar-icon"/>}
                  inputReadOnly
                  className="custom-datepicker hidden-input-datepicker w-10 pr-2 bg-transparent border-none text-[black] font-bold"
                  placeholder="yyyy-mm-dd"
                  allowClear
                />
            </div>
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} grid grid-flow-col-1 lg:grid-cols-3 gap-5`}>
              <div id="left-section" className=" lg:col-span-2 w-full col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
                <form onSubmit={ isEditPressed ? handleNewsEdit : handleSubmit } className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 w-full md:p-8 ">
                 
                      <div className=" col-span-1">
                        <label htmlFor="author" className="block text-black  text-sm font-semibold">Author</label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          required
                          placeholder="Enter Name"
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
                      </div>
                    <div className="col-span-1 md:col-span-2">
                      <label htmlFor="heading" className="block text-black text-sm font-semibold">Heading</label>
                      <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        required
                        placeholder="Enter Subject"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                      />
                      {errors.heading && <p className="text-red-500 text-xs mt-1">{errors.heading}</p>}
                      </div>
                      <div className="col-span-1 md:col-span-2">
                      <label htmlFor="body" className="block text-black text-sm font-semibold">Content</label>
                       <ReactQuill
                        id="body"
                        value={formData.body}
                        placeholder="......"
                        required
                        onChange={handleQuillChange}
                        className="bg-gray-50 custom-quill border-gray-300 text-gray-600 text-sm block w-full mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        modules={{
                        toolbar: [
                          [{ font: [] }, { size: [] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ color: [] }, { background: [] }],
                          [{ script: "sub" }, { script: "super" }],
                          [{ align: [] }],
                          [{ direction: "rtl" }], // Right-to-left
                          [{ indent: "-1" }, { indent: "+1" }], // Indentation
                          // Block elements
                          [{ header: [] }], // Headers
                          ["blockquote", "code-block"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link", "image", "video","formula", "code"],
                          ["clean"],
                        ],
                      }}
                      theme="snow"
                    />
                      {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Upload Images for carousel</label>
                       
                      <div
                        className={`w-full px-3 py-4 border rounded-md ${
                          isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
                        } flex flex-col items-center justify-center cursor-pointer`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        
                      >
                        <div onClick={handleClick} className="py-5">
                          <p className="text-gray-500 text-sm">
                            {isDragging
                              ? "Drop the image here"
                              : (
                                <p className="flex flex-col md:flex-row items-center justify-center">
                                  Drag and drop an image, or click here&nbsp; 
                                  <span className="mt-1">
                                    <GiClick className="text-lg" />
                                  </span>
                                  &nbsp;to upload images
                                </p>
                              )}
                          </p>
                          <input
                            ref={fileInputRef}
                            id="imageUrl"
                            type="file"
                            name="imageUrl"
                            accept="image/*"
                            onChange={handleChange}
                            multiple
                            className="hidden"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {imagePreviews && (
                            imagePreviews.map((image,index)=>(
                              <div className=" flex flex-col relative items-center rounded-md">
                                <img
                                  key={index}
                                  src={image}
                                  alt="Preview"
                                  className=" object-fill rounded-md  border border-gray-300"
                                />
                                <button
                                  type="button"
                                  title="Remove"
                                  onClick={() => handleImageRemove(index)}
                                  className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            )))}
                        </div>    
                      </div>
                    </div>
                    {errors.imageUrl && <p className="text-red-500 text-xs">{errors.imageUrl}</p>} 
                      <div className="col-span-1 md:col-span-2 flex gap-2 justify-end">
                        <button
                          type="submit"
                          className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-90 py-2 px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                        >
                          Save
                        </button>
                        {isEditPressed && (
                          <button
                            onClick={handleEditCancel}
                            className="bg-gray-400 hover:bg-opacity-100 bg-opacity-90 py-2 text-end px-3 rounded-md focus:bg-slate-500 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                          >
                            {" "}
                            Cancel
                          </button>
                        )}
                      </div>
                </form>
              </div>
              <div id="right-section" className=" relative lg:col-span-1 rounded-lg border border-[#480D35] bg-white overflow-hidden w-full custom-scrollbar hover:overflow-auto col-start-1 row-start-1 lg:col-start-3 lg:row-start-1 ">
                <div className="px-5 md:px-3 py-2 ">
                  <div className="sticky top-0 z-40 rounded-t-2xl bg-gradient-to-r from-[#00175f] to-[#480D35] ">
                    <h1 className="text-white  rounded-t-lg font-bold font-mono md:text-xl text-lg py-1 px-5">
                      All News
                    </h1>
                  </div>

                  <div className={`flex flex-col custom-scrollbar`}>
                    {filteredNews &&
                      filteredNews.map((news) => (
                        <React.Fragment key={news.id}>
                          <div className="focus:bg-opacity-50 w-full rounded mb-1 shadow-md hover:bg-gray-50 ">
                            <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
                              <div className="flex rounded w-20 h-20 p-1">
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  src={`${`http://rcc.dockyardsoftware.com/images/${ news.images? news.images[0]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                                />
                              </div>
                              <div className="mr-2 pt-2 w-full">
                                <h1 className="font-bold text-[black] text-base">
                                  {news.heading}
                                </h1>
                                <div className="text-black text-xs text-justify">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: news?.body
                                        ? news.body.slice(0, 200).replace(/\n/g, "<br />")
                                        : "No content available",
                                    }}
                                  />...
                                </div>
                                <div className=" mt-3 flex justify-between text-xxs">
                                  <p className="text-gray-600 ">
                                    {dayjs(news.createdOn).format("YYYY-MMM-DD")}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {dayjs(news.createdOn).fromNow()}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {news.author}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2 text-[#00175f] p-1 px-3">
                              <button onClick={() => toggleView(news)} className=" items-center justify-center text-blue-500 hover:text-blue-600 rounded-lg">
                                {<FaEye />}
                              </button>
                              <button onClick={() => EditNews(news)} className="flex items-center justify-center text-green-500 hover:text-green-600 rounded-lg">
                                <FaEdit />
                              </button>
                              <button onClick={() => handleDelete(news.id)} className=" items-center justify-center text-red-500 hover:text-red-600 rounded-lg">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this news?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
        {showImageDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this existing image?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => setShowImageDeleteModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmImageDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      {isViewPressed && (
        <NewsPreview onClose={handlePreviewClose} news={currentNews} />
      )}
      {uploading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};
export default NewsCreator;