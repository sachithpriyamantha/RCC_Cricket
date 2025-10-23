// import React, { useRef, useState, useEffect } from 'react';
// import axios from "axios";
// import { storage } from '../config/firebaseConfig'; // Import Firebase storage
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
// import { FaTimes, FaTrash } from "react-icons/fa";
// import dayjs from 'dayjs';
// import { message, DatePicker } from 'antd';
// import { Select } from "antd";
// import { GiClick } from "react-icons/gi";
// import { RiArrowDropDownLine } from 'react-icons/ri';

// const EditPopup = ({ onClose, match, isSubmitted }) => {
//   console.log("initial matches: ", match);
//   const [coaches, setCoaches] = useState([]);
//   const [teams, setTeams] = useState([]);
//   const [selectedCoaches, setSelectedCoaches] = useState(match.coaches || []);
//   const [imagePreview, setImagePreview] = useState(`http://rcc.dockyardsoftware.com/images/${ match.logo ? match.logo.split('/').pop() : 'default.jpg'}`);
//   const [isImageAdded, setIsImageAdded] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [players, setPlayers] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [errors, setErrors] = useState({});
//   const { Option } = Select;
//   const API_URL = process.env.REACT_APP_API_URL;
//   const user = JSON.parse(localStorage.getItem("user"));
//   const accessToken = localStorage.getItem('accessToken');
//   const fileInputRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [showImageError, setShowImageError] = useState(false);
//   // console.log("selected coaches: ", selectedCoaches);

//   const convertTimeTo24Hour = (time12h) => {
//     const [time, modifier] = time12h.split(' ');
//     let [hours, minutes] = time.split(':');
//     if (hours === '12') hours = '00';
//     if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
//     return `${hours}:${minutes}`;
//   };

//   const [formData, setFormData] = useState({
//     date: match.date,
//     time: match.time,
//     venue: match.venue,
//     opposition: match.opposition,
//     tier: match.tier,
//     logo:match.logo,
//     division: match.division,
//     umpires: match.umpires,
//     type: match.type,
//     matchCaptain: match.matchCaptain,
//     matchViceCaptain: match.matchViceCaptain,
//     team:{
//       teamId:match.teamId,
//       under:match.under,
//     },
//     time: convertTimeTo24Hour(match.time),
//     coaches: match.coaches || [],
//     updatedBy:user.username,
//     updatedOn:new Date().toISOString(),
//   });

//   useEffect(() => {
//     // Fetch player data for playerId 4
//     // console.log("formdata :", formData);
//     axios
//       .get(`${API_URL}teams/${formData.team.teamId}/players`, { 
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//       }})
//       .then(response => {
//         const players = response.data;
//         const filteredPlayers = players.filter((player) => ( player.status === "Active"));
//         setPlayers(filteredPlayers);
//         console.log("All Active Players:", filteredPlayers);
//         // const categorizedPlayers = categorizePlayers(filteredPlayers);
//         // setPlayers(categorizedPlayers);
//          // Match captain and vice-captain names to their player IDs
//          const captainPlayer = filteredPlayers.find((player) => player.name === formData.matchCaptain);
//          const viceCaptainPlayer = filteredPlayers.find((player) => player.name === formData.matchViceCaptain);

//          setFormData((prev) => ({
//            ...prev,
//            matchCaptain: captainPlayer ? captainPlayer.playerId : '',
//            matchViceCaptain: viceCaptainPlayer ? viceCaptainPlayer.playerId : '',
//          }));
//       })
//       .catch(error => {
//         console.error("There was an error fetching the match data!", error);
//       });
//     axios.get(`${API_URL}coaches/all`, { 
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     }}).then(response => {
//       const coaches = response.data;
//       const filteredCoaches = coaches.filter((coach) => ( coach.status === "Active"));
//       setCoaches(filteredCoaches);
//       console.log("Coaches Data:", coaches);
//     });
//     axios
//       .get(`${API_URL}teams/all`, { 
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//       }})
//       .then(response => {
//         const teams = response.data;
//          // Extract unique age groups with their respective team IDs
//          const uniqueTeams = teams.map((team) => ({
//           teamId: team.teamId,
//           label: `${team.under}-${team.year}`,
//         }));

//         // Remove duplicates based on the label
//         const uniqueAgeGroups = Array.from(
//           new Map(uniqueTeams.map((team) => [team.label, team])).values()
//         );

//         // Sorting logic for age groups
//         const sortedAgeGroups = uniqueAgeGroups.sort((a, b) => {
//           const regex = /(\D*)(\d+)?-(\d+)/; // Matches "Under", number, and year
//           const [, labelA, numA, yearA] = a.label.match(regex);
//           const [, labelB, numB, yearB] = b.label.match(regex);
//           // Sort alphabetically by label (e.g., "Under", "Academy Under")
//           if (labelA !== labelB) return labelA.localeCompare(labelB);
//           // Sort numerically by age group number (e.g., "11", "13")
//           if (numA && numB && numA !== numB) return parseInt(numA) - parseInt(numB);
//           // Sort by year in descending order
//           return parseInt(yearB) - parseInt(yearA);
//         });
//         setTeams(sortedAgeGroups);
//         console.log("Teams Data:", teams);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the match data!", error);
//       });
//   }, [formData.team.teamId]);

//   const getAgeFromDOB = (dob) => {
//     const birthDate = new Date(dob);
//     const currentDate = new Date();
//     let age = currentDate.getFullYear() - birthDate.getFullYear();
//     const isBeforeBirthday =
//       currentDate.getMonth() < birthDate.getMonth() ||
//       (currentDate.getMonth() === birthDate.getMonth() &&
//         currentDate.getDate() < birthDate.getDate());
//     if (isBeforeBirthday) age -= 1;
//     return age;
//   };

//   const categorizePlayers = (players) => {
//     const categories = {
//       "Under 9": [],
//       "Under 11": [],
//       "Under 13": [],
//       "Under 15": [],
//       "Under 17": [],
//       "Under 19": [],
//       "Richmond Legend Over 40": [],
//       "Richmond Legend Over 50": [],
//       "Old Boys": []
//     };
  
//     // Group players by age category
//     players.forEach(player => {
//       const age = getAgeFromDOB(player.dateOfBirth); // Calculate age from DOB
  
//       if (age < 9) {
//         categories["Under 9"].push(player);
//         //categories["Academy Under 9"].push(player);
//       }
//       if (age >= 9 && age < 11) {
//         categories["Under 11"].push(player);
//         //categories["Academy Under 11"].push(player);
//       }
//       if (age >= 11 && age < 13) {
//         categories["Under 13"].push(player);
//         //categories["Academy Under 13"].push(player);
//       }
//       if (age >= 13 && age < 15) {
//         categories["Under 15"].push(player);
//         //categories["Academy Under 15"].push(player);
//       }
//       if (age >= 15 && age < 17) {
//         categories["Under 17"].push(player);
//         //categories["Academy Under 17"].push(player);
//       }
//       if (age >= 17 && age < 19) {
//         categories["Under 19"].push(player);
//         //categories["Academy Under 19"].push(player);
//       }
//       if (age >= 40 && age < 50) {
//         categories["Richmond Legend Over 40"].push(player);
//       }
//       if (age >= 50) {
//         categories["Richmond Legend Over 50"].push(player);
//       }
//       if (age >= 19) {
//         categories["Old Boys"].push(player);
//       }
//     });
  
//     return categories;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     if (name === "team.teamId") {
//       // Find the selected team based on the 'under' value
//       const selectedTeam = teams.find(team => team.teamId === Number(value));
//       const selectedTeamId = selectedTeam ? selectedTeam.teamId : "";
//       const selectedTeamUnder = selectedTeam ? selectedTeam.under : "";
//       setFormData({
//         ...formData,
//         team: {
//           ...formData.team,
//           under: selectedTeamUnder,
//           teamId: selectedTeamId // Update teamId based on selected team
//         }
//       });
//       // console.log("SelectedTeam:", selectedTeam);
//       // // console.log("Selected selectedTeamUnder:", selectedTeamUnder);
//       // console.log("SelectedTeamId:", selectedTeamId);
//     } else if (name.includes(".")) {
//       const [mainKey, subKey] = name.split(".");
//       setFormData({
//         ...formData,
//         [mainKey]: {
//           ...formData[mainKey],
//           [subKey]: value
//         }
//       });
//     }else if (files && files[0]) {
//       const file = files[0];
//       setImagePreview(URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [name]: file
//       });
//       const fieldError = validateForm(name, file); // Pass file to validation
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         ...fieldError,
//       }));
//       setIsImageAdded(true);
//       setShowImageError(false);

//     }else if (name === "date") {
//       // Handle the DatePicker value change
//       setFormData({
//         ...formData,
//         [name]: value ? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     };

//     const fieldError = validateForm(name, value);
//     setErrors((prev) => {
//       // If no error for this field, remove it from the errors object
//       if (!fieldError[name]) {
//         const { [name]: _, ...rest } = prev; // Exclude the current field's error
//         return rest;
//       }
//       // Otherwise, update the error for this field
//       return { ...prev, ...fieldError };
//     });
//   };

//   const validateForm = (name, value) => {
//     const newErrors = {};
//     switch(name){
//       case "umpires":
//         //name validation
//         // if (value.trim().length < 4 || value.trim().length > 200) {
//         //   newErrors.umpires = "Name must be between 4 and 25 characters long.";
//         // } 
//          if (!/^[a-zA-Z\s.]+$/.test(value)) {
//           newErrors.umpires = "Name can only contain letters, spaces, and periods.";
//         } else if (/^\s|\s$/.test(value)) {
//           newErrors.umpires = "Name cannot start or end with a space.";
//         }
//         break;
//       case "coaches":
//         if (selectedCoaches.length === 0) {
//           newErrors.coaches = "Select at least one coach.";
//         };
//         break;
//       case "logo":
//         console.log("Image validation:", value);
//         if (!value) {
//             newErrors.logo = "Image is required.";
//         } else if (value.type && !/^image\/(jpg|jpeg|png|gif|bmp|webp)$/.test(value.type)) {
//             newErrors.logo = "Only image files (JPG,JPEG, PNG, GIF, BMP, WebP) are allowed.";
//         }
//         break;
//       default:
//         break;
//     }
//     return newErrors;
//   };

//   const validateFormData = (formData) => {
//     const errors = {};
  
//     // Validate top-level fields
//     Object.keys(formData).forEach((field) => {
//       const fieldErrors = validateForm(field, formData[field]);
//       if (fieldErrors[field]) {
//         errors[field] = fieldErrors[field];
//       }
//     });
//     return errors;
//   };

//   const handleEdit = async e => {
//     e.preventDefault();
//     // console.log("coachIds in edited foemdata;", formData.coaches);
//     const errors = validateFormData(formData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }
//     setUploading(true);
//     // console.log("formdata before submit:", formData);
//     try {
//       const formDataToSend = new FormData();
//       const { logo, ...matchData } = formData;

//       // Append userData as a JSON string
//       formDataToSend.append("matchData", JSON.stringify(matchData));

//       // Append image file
//       formDataToSend.append("logo", logo);

//       const response = await axios.put(
//         `${API_URL}matches/update/${match.matchId}`,
//         formDataToSend, { 
//           headers: {
//             'Authorization': `Bearer ${accessToken}`
//         }}
//       );
//       message.success("Successfully Edited the match!");
//       console.log("Form submitted succedded: ", response.data);
//       setFormData({
//         date: "",
//         time: "",
//         venue: "",
//         opposition: "",
//         tier: "",
//         logo:null,
//         division: "",
//         umpires: "",
//         type: "",
//         matchCaptain: "",
//         matchViceCaptain: "",
//         team:{
//           under:"",
//           teamId:""
//         },
//         coaches: [],
//         updatedBy:"",
//         updatedOn:""
//       })
//       isSubmitted();
//       setSelectedCoaches([]);
//       setImagePreview();
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   const handleCoachSelect = coach => {
//     let updatedCoaches;
//     const isSelected = selectedCoaches.some(c => c.coachId === coach.coachId);
//     if (isSelected) {
//       updatedCoaches = selectedCoaches.filter(c => c.coachId !== coach.coachId);
//     } else {
//       updatedCoaches = [...selectedCoaches, { coachId: coach.coachId, coachName: coach.name }];
//     };
//     setSelectedCoaches(updatedCoaches);
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       coaches: updatedCoaches.length === 0 ? "Select coaches." : "",
//     }));
//   };

//   const clearSelectedCoaches = () => {
//     setSelectedCoaches([]); // Clear all selected coaches
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       coaches: "Select coaches.",
//     }));
//   };

//   useEffect(() => {
//     setFormData(prevData => ({
//       ...prevData,
//       coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId }))
//     }));
//   }, [selectedCoaches]);

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `match/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       setUploading(true);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error('Image upload failed:', error);
//           setUploading(false);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setUploading(false);
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setImagePreview(url);
//       setFormData({
//         ...formData,
//         logo: file
//       });

//       // Validate the image and update the errors state
//       const fieldError = validateForm("logo", file); // Pass the file directly for validation
//       setErrors((prevErrors) => {
//         const { logo, ...restErrors } = prevErrors; // Remove existing `image` error
//         return fieldError.logo ? { ...restErrors, logo: fieldError.logo } : restErrors;
//       });

//       setIsImageAdded(true);
//       setShowImageError(false);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImagePreview(null);
//     setShowImageError(true);
//   };

//   const handleClick = () => {
//     if (fileInputRef.current) fileInputRef.current.click();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 overflow-y-auto py-10 min-h-screen">
//       <div className='flex items-center justify-center'>
//       <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}>
//         <div className="flex justify-end items-center">
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800 text-xl"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl font-bold mb-4 text-[#480D35]"> Edit Match Details</h2>
//         <form className='grid grid-cols-1 md:grid-cols-2 gap-2'>
//         <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Date</label>
//             <DatePicker
//               name="date"
//               dateFormat="yyyy-mm-dd"
//               // selected={new Date(formData.dateOfBirth)}
//               defaultValue={dayjs(formData.date)}
//               onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
//               placeholder="yyyy-mm-dd"
//               className="w-full px-3 py-1 hover:border-gray-300 border text-gray-600 border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
//               required
//             />
//           </div>
//           <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Time</label>
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             />
//           </div>
//           <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Venue</label>
//             <input
//               type="text"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             />
//           </div>
//           <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Opponent</label>
//             <input
//               type="text"
//               name="opposition"
//               value={formData.opposition}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             />
//           </div>
//           <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Tier</label>
//             <select
//               type="text"
//               name="tier"
//               value={formData.tier}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value="" disabled selected>Select tier</option>
//               <option value="Tier A">Tier A</option>
//               <option value="Tier B">Tier B</option>
//             </select>
//           </div>
//           <div  className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Division</label>
//             <Select
//               mode="tags" // Enable dropdown and custom input
//               style={{ width: "100%" }}
//               placeholder="Select or add a division"
//               value={formData.division ? [formData.division] : []} // Convert to array for controlled input
//               onChange={(value) => handleChange({ target: { name: "division", value: value[0] } })} // Handle single selection
//               showSearch={false} // Disable search functionality
//             >
//               <Option value="Division 1">Division 1</Option>
//               <Option value="Division 2">Division 2</Option>
//               <Option value="Division 3">Division 3</Option>
//             </Select>
            
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Umpires</label>
//             <input
//               type="text"
//               name="umpires"
//               value={formData.umpires}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             />
//             {errors.umpires && <p className="text-red-500 text-xs mt-1">{errors.umpires}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Type</label>
//             <select
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//                <option value="" disabled selected>Select type</option>
//               {/* <option value="Test">Test</option> */}
//               <option value="3 Day">3 Day</option>
//               <option value="2 Day">2 Day</option>
//               <option value="ODI">ODI</option>
//               <option value="T20">T20</option>
//             </select>
//           </div>
//           <div className="col-span-1 md:col-span-2">
//             <label className="block text-black text-sm font-semibold" htmlFor="team.teamId">Team</label>
//             <select
//               id="team.teamId"
//               name="team.teamId"
//               value={formData.team?.teamId}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value="">Select team</option>
//               {teams.map(team =>
//                 <option key={team.teamId} value={team.teamId}>
//                   {team.label}
//                 </option>
//               )}
//             </select>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Match Captain</label>
//             <select
//               type="text"
//               name="matchCaptain"
//               value={formData.matchCaptain}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value="">Select Captain</option>
//               {players.map(player =>
//                 <option key={player.playerId} value={player.playerId}>
//                   {player.name}
//                 </option>
//               )}
//             </select>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Match Vice-captain</label>
//             <select
//               type="text"
//               name="matchViceCaptain"
//               value={formData.matchViceCaptain}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value="">Select Vice-captain</option>
//               {players.filter((player) => player.playerId !== Number(formData.matchCaptain)).map(player =>
//                 <option key={player.playerId} value={player.playerId}>
//                   {player.name}
//                 </option>
//               )}
//             </select>
//           </div>
//           <div className="col-span-1 md:col-span-2 ">
//             <label className="block text-black text-sm font-semibold">Coaches</label>
//             <div tabIndex={-1} className="flex border gap-1 border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
//               <input
//                 type="text"
//                 className="py-1 px-3 w-[88%] rounded-md cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600 "
//                 value={selectedCoaches.map(coach => coach.coachName).join(", ")} // Show selected coach names, joined by commas
//                 readOnly
//                 placeholder='Choose coaches from the list...'
                
//               />
//                <button
//                   type='button'
//                   title='Select coaches'
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center w-[6%] justify-center text-3xl rounded-lg"
//                 >
//                   <RiArrowDropDownLine />
//               </button>
//               <button
//                 type="button"
//                 title='delete'
//                 className=" items-center w-[6%] justify-center text-sm text-red-500 hover:text-red-600 rounded-lg"
//                 onClick={clearSelectedCoaches}
//               >
//                 <FaTrash/>
//               </button>
//             </div>
//             {errors.coaches && <p className="text-red-500 text-xs mt-1">{errors.coaches}</p>}
//             <div className="relative col-span-1 md:col-span-2 ">
//               {/* Dropdown Content */}
//               {dropdownOpen && (
//                 <div className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-10">
//                   {coaches.map(coach => (
//                     <li key={coach.coachId} className="flex items-center px-3 py-2">
//                       <input
//                         type="checkbox"
//                         id={`coach-${coach.coachId}`}
//                         className="mr-2 text-gray-600"
//                         checked={selectedCoaches.some(p => p.coachId === coach.coachId)}
//                         onChange={() => handleCoachSelect(coach)}
//                       />
//                       <label
//                         htmlFor={`coach-${coach.coachId}`}
//                         className="block text-gray-600 text-sm font-semibold"
//                       >
//                         {coach.name}
//                       </label>
//                     </li>
//                   ))}
//                 </div>
//               )}
//             </div>
           
//           </div>
//           <div className="col-span-1 md:col-span-2 relative">
//             <label className="block text-black text-sm font-semibold">Opponent Logo</label>
//               <div
//                 className={`w-full px-3 py-4 border rounded-md ${
//                   isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
//                 } flex f
//                 +--lex-col items-center justify-center cursor-pointer`}
//                 onDragOver={handleDragOver}
//                 onDragLeave={handleDragLeave}
//                 onDrop={handleDrop}
//                 onClick={handleClick}
//               >
//                 {imagePreview ? (
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className=" object-contain rounded-lg border border-gray-300"
//                   />
//                 ) : (
//                   <p className="text-gray-500 text-sm">
//                     {isDragging
//                       ? "Drop the image here"
//                       : (
//                         <p className="flex flex-col md:flex-row items-center justify-center">
//                           Drag and drop an image, or click here&nbsp; 
//                           <span className="mt-1">
//                             <GiClick className="text-lg" />
//                           </span>
//                           &nbsp;to upload images
//                         </p>
//                       )}
//                   </p>
//                 )}
//               <input
//                 ref={fileInputRef}
//                 id="logo"
//                 type="file" 
//                 name="logo" 
//                 accept="image/*" 
//                 onChange={handleChange}
//                 className="hidden"
//               />
//             </div>
//             {imagePreview && (
//               <button
//               title="Remove image"
//                 onClick={handleRemoveImage}
//                 className="absolute right-2 bottom-2 text-sm text-red-500 hover:text-red-600"
//               >
//                 <FaTrash/>
//               </button>
//             )} 
//           </div>
//           {showImageError && (
//             <p className="text-red-500 text-xs px-2 col-span-1 md:col-span-2 relative ">
//               Upload a new image to replace the existing one, or it will remain unchanged.
//             </p>
//           )}
//           {errors.logo && <p className="text-red-500 text-xs">{errors.logo}</p>} 
//           <div className="col-span-1 md:col-span-2 ">
//             <button
//               onClick={handleEdit}
//               type="submit"
//               className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//         </div>
//       </div>
//       {uploading && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
//           <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditPopup;

import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaTimes, FaTrash } from "react-icons/fa";
import dayjs from 'dayjs';
import { message, DatePicker } from 'antd';
import { Select } from "antd";
import { GiClick } from "react-icons/gi";
import { RiArrowDropDownLine } from 'react-icons/ri';

const EditPopup = ({ onClose, match, isSubmitted }) => {
  console.log("initial matches: ", match);
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedCoaches, setSelectedCoaches] = useState(match.coaches || []);
  const [imagePreview, setImagePreview] = useState(`http://rcc.dockyardsoftware.com/images/${ match.logo ? match.logo.split('/').pop() : 'default.jpg'}`);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const { Option } = Select;
  const API_URL = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem('accessToken');
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showImageError, setShowImageError] = useState(false);
  // console.log("selected coaches: ", selectedCoaches);

  const convertTimeTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    date: match.date,
    time: match.time,
    venue: match.venue,
    opposition: match.opposition,
    tier: match.tier,
    logo:match.logo,
    division: match.division,
    umpires: match.umpires,
    type: match.type,
    matchCaptain: match.matchCaptain,
    matchViceCaptain: match.matchViceCaptain,
    team:{
      teamId:match.teamId,
      under:match.under,
    },
    time: convertTimeTo24Hour(match.time),
    coaches: match.coaches || [],
    updatedBy:user.username,
    updatedOn:new Date().toISOString(),
  });

  useEffect(() => {
    // Fetch player data for playerId 4
    // console.log("formdata :", formData);
    axios
      .get(`${API_URL}teams/${formData.team.teamId}/players`, { 
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }})
      .then(response => {
        const players = response.data;
        const filteredPlayers = players.filter((player) => ( player.status === "Active"));
        setPlayers(filteredPlayers);
        console.log("All Active Players:", filteredPlayers);
        // const categorizedPlayers = categorizePlayers(filteredPlayers);
        // setPlayers(categorizedPlayers);
         // Match captain and vice-captain names to their player IDs
         const captainPlayer = filteredPlayers.find((player) => player.name === formData.matchCaptain);
         const viceCaptainPlayer = filteredPlayers.find((player) => player.name === formData.matchViceCaptain);

         setFormData((prev) => ({
           ...prev,
           matchCaptain: captainPlayer ? captainPlayer.playerId : '',
           matchViceCaptain: viceCaptainPlayer ? viceCaptainPlayer.playerId : '',
         }));
      })
      .catch(error => {
        console.error("There was an error fetching the match data!", error);
      });
    axios.get(`${API_URL}coaches/all`, { 
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }}).then(response => {
      const coaches = response.data;
      const filteredCoaches = coaches.filter((coach) => ( coach.status === "Active"));
      setCoaches(filteredCoaches);
      console.log("Coaches Data:", coaches);
    });
    axios
      .get(`${API_URL}teams/all`, { 
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }})
      .then(response => {
        const teams = response.data;
         // Extract unique age groups with their respective team IDs
         const uniqueTeams = teams.map((team) => ({
          teamId: team.teamId,
          label: `${team.under}-${team.year}`,
        }));

        // Remove duplicates based on the label
        const uniqueAgeGroups = Array.from(
          new Map(uniqueTeams.map((team) => [team.label, team])).values()
        );

        // Sorting logic for age groups
        const sortedAgeGroups = uniqueAgeGroups.sort((a, b) => {
          const regex = /(\D*)(\d+)?-(\d+)/; // Matches "Under", number, and year
          const [, labelA, numA, yearA] = a.label.match(regex);
          const [, labelB, numB, yearB] = b.label.match(regex);
          // Sort alphabetically by label (e.g., "Under", "Academy Under")
          if (labelA !== labelB) return labelA.localeCompare(labelB);
          // Sort numerically by age group number (e.g., "11", "13")
          if (numA && numB && numA !== numB) return parseInt(numA) - parseInt(numB);
          // Sort by year in descending order
          return parseInt(yearB) - parseInt(yearA);
        });
        setTeams(sortedAgeGroups);
        console.log("Teams Data:", teams);
      })
      .catch(error => {
        console.error("There was an error fetching the match data!", error);
      });
  }, [formData.team.teamId]);

  const getAgeFromDOB = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday =
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate());
    if (isBeforeBirthday) age -= 1;
    return age;
  };

  const categorizePlayers = (players) => {
    const categories = {
      "Under 9": [],
      "Under 11": [],
      "Under 13": [],
      "Under 15": [],
      "Under 17": [],
      "Under 19": [],
      "Richmond Legend Over 40": [],
      "Richmond Legend Over 50": [],
      "Old Boys": []
    };
  
    // Group players by age category
    players.forEach(player => {
      const age = getAgeFromDOB(player.dateOfBirth); // Calculate age from DOB
  
      if (age < 9) {
        categories["Under 9"].push(player);
        //categories["Academy Under 9"].push(player);
      }
      if (age >= 9 && age < 11) {
        categories["Under 11"].push(player);
        //categories["Academy Under 11"].push(player);
      }
      if (age >= 11 && age < 13) {
        categories["Under 13"].push(player);
        //categories["Academy Under 13"].push(player);
      }
      if (age >= 13 && age < 15) {
        categories["Under 15"].push(player);
        //categories["Academy Under 15"].push(player);
      }
      if (age >= 15 && age < 17) {
        categories["Under 17"].push(player);
        //categories["Academy Under 17"].push(player);
      }
      if (age >= 17 && age < 19) {
        categories["Under 19"].push(player);
        //categories["Academy Under 19"].push(player);
      }
      if (age >= 40 && age < 50) {
        categories["Richmond Legend Over 40"].push(player);
      }
      if (age >= 50) {
        categories["Richmond Legend Over 50"].push(player);
      }
      if (age >= 19) {
        categories["Old Boys"].push(player);
      }
    });
  
    return categories;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
    if (name === "team.teamId") {
      // Find the selected team based on the 'under' value
      const selectedTeam = teams.find(team => team.teamId === Number(value));
      const selectedTeamId = selectedTeam ? selectedTeam.teamId : "";
      const selectedTeamUnder = selectedTeam ? selectedTeam.under : "";
      setFormData({
        ...formData,
        team: {
          ...formData.team,
          under: selectedTeamUnder,
          teamId: selectedTeamId // Update teamId based on selected team
        }
      });
      // console.log("SelectedTeam:", selectedTeam);
      // // console.log("Selected selectedTeamUnder:", selectedTeamUnder);
      // console.log("SelectedTeamId:", selectedTeamId);
    } else if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    }else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
      const fieldError = validateForm(name, file); // Pass file to validation
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...fieldError,
      }));
      setIsImageAdded(true);
      setShowImageError(false);

    }else if (name === "date") {
      // Handle the DatePicker value change
      setFormData({
        ...formData,
        [name]: value ? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const fieldError = validateForm(name, value);
    setErrors((prev) => {
      // If no error for this field, remove it from the errors object
      if (!fieldError[name]) {
        const { [name]: _, ...rest } = prev; // Exclude the current field's error
        return rest;
      }
      // Otherwise, update the error for this field
      return { ...prev, ...fieldError };
    });
  };

  const validateForm = (name, value) => {
    const newErrors = {};
    switch(name){
      case "umpires":
        //name validation
        // if (value.trim().length < 4 || value.trim().length > 200) {
        //   newErrors.umpires = "Name must be between 4 and 25 characters long.";
        // } 
         if (!/^[a-zA-Z\s.]+$/.test(value)) {
          newErrors.umpires = "Name can only contain letters, spaces, and periods.";
        } else if (/^\s|\s$/.test(value)) {
          newErrors.umpires = "Name cannot start or end with a space.";
        }
        break;
      case "coaches":
        if (selectedCoaches.length === 0) {
          newErrors.coaches = "Select at least one coach.";
        };
        break;
      case "logo":
        console.log("Image validation:", value);
        if (!value) {
            newErrors.logo = "Image is required.";
        } else if (value.type && !/^image\/(jpg|jpeg|png|gif|bmp|webp)$/.test(value.type)) {
            newErrors.logo = "Only image files (JPG,JPEG, PNG, GIF, BMP, WebP) are allowed.";
        }
        break;
      default:
        break;
    }
    return newErrors;
  };

  const validateFormData = (formData) => {
    const errors = {};
  
    // Validate top-level fields
    Object.keys(formData).forEach((field) => {
      const fieldErrors = validateForm(field, formData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    return errors;
  };

  const handleEdit = async e => {
    e.preventDefault();
    // console.log("coachIds in edited foemdata;", formData.coaches);
    const errors = validateFormData(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      console.log("Validation Errors:", errors);
      return;
    }
    setUploading(true);
    // console.log("formdata before submit:", formData);
    try {
      const formDataToSend = new FormData();
      const { logo, ...matchData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("matchData", JSON.stringify(matchData));

      // Append image file
      formDataToSend.append("logo", logo);

      const response = await axios.put(
        `${API_URL}matches/update/${match.matchId}`,
        formDataToSend, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`
        }}
      );
      message.success("Successfully Edited the match!");
      console.log("Form submitted succedded: ", response.data);
      setFormData({
        date: "",
        time: "",
        venue: "",
        opposition: "",
        tier: "",
        logo:null,
        division: "",
        umpires: "",
        type: "",
        matchCaptain: "",
        matchViceCaptain: "",
        team:{
          under:"",
          teamId:""
        },
        coaches: [],
        updatedBy:"",
        updatedOn:""
      })
      isSubmitted();
      setSelectedCoaches([]);
      setImagePreview();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to submit: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
      onClose();
    }
  };

  const handleCoachSelect = coach => {
    let updatedCoaches;
    const isSelected = selectedCoaches.some(c => c.coachId === coach.coachId);
    if (isSelected) {
      updatedCoaches = selectedCoaches.filter(c => c.coachId !== coach.coachId);
    } else {
      updatedCoaches = [...selectedCoaches, { coachId: coach.coachId, coachName: coach.name }];
    };
    setSelectedCoaches(updatedCoaches);
    setErrors((prevErrors) => ({
      ...prevErrors,
      coaches: updatedCoaches.length === 0 ? "Select coaches." : "",
    }));
  };

  const clearSelectedCoaches = () => {
    setSelectedCoaches([]); // Clear all selected coaches
    setErrors((prevErrors) => ({
      ...prevErrors,
      coaches: "Select coaches.",
    }));
  };

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId }))
    }));
  }, [selectedCoaches]);

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `match/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error('Image upload failed:', error);
          setUploading(false);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            resolve(downloadURL);
          });
        }
      );
    });
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
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setFormData({
        ...formData,
        logo: file
      });

      // Validate the image and update the errors state
      const fieldError = validateForm("logo", file); // Pass the file directly for validation
      setErrors((prevErrors) => {
        const { logo, ...restErrors } = prevErrors; // Remove existing `image` error
        return fieldError.logo ? { ...restErrors, logo: fieldError.logo } : restErrors;
      });

      setIsImageAdded(true);
      setShowImageError(false);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setShowImageError(true);
  };

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 overflow-y-auto py-10 min-h-screen">
      <div className='flex items-center justify-center'>
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}>
        <div className="flex justify-end items-center">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-[#480D35]"> Edit Match Details</h2>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Date</label>
            <DatePicker
              name="date"
              dateFormat="yyyy-mm-dd"
              // selected={new Date(formData.dateOfBirth)}
              defaultValue={dayjs(formData.date)}
              onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-gray-600 border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Opponent</label>
            <input
              type="text"
              name="opposition"
              value={formData.opposition}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Tier</label>
            <select
              type="text"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="" disabled selected>Select tier</option>
              <option value="Tier A">Tier A</option>
              <option value="Tier B">Tier B</option>
            </select>
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Division</label>
            <Select
              mode="tags" // Enable dropdown and custom input
              style={{ width: "100%" }}
              placeholder="Select or add a division"
              value={formData.division ? [formData.division] : []} // Convert to array for controlled input
              onChange={(value) => handleChange({ target: { name: "division", value: value[0] } })} // Handle single selection
              showSearch={false} // Disable search functionality
            >
              <Option value="Division 1">Division 1</Option>
              <Option value="Division 2">Division 2</Option>
              <Option value="Division 3">Division 3</Option>
            </Select>
            
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Umpires</label>
            <input
              type="text"
              name="umpires"
              value={formData.umpires}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
            {errors.umpires && <p className="text-red-500 text-xs mt-1">{errors.umpires}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
               <option value="" disabled selected>Select type</option>
              {/* <option value="Test">Test</option> */}
              <option value="3 Day">3 Day</option>
              <option value="2 Day">2 Day</option>
              <option value="1 Day">1 Day</option>
              <option value="T20">T20</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-black text-sm font-semibold" htmlFor="team.teamId">Team</label>
            <select
              id="team.teamId"
              name="team.teamId"
              value={formData.team?.teamId}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select team</option>
              {teams.map(team =>
                <option key={team.teamId} value={team.teamId}>
                  {team.label}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Match Captain</label>
            <select
              type="text"
              name="matchCaptain"
              value={formData.matchCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select Captain</option>
              {players.map(player =>
                <option key={player.playerId} value={player.playerId}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Match Vice-captain</label>
            <select
              type="text"
              name="matchViceCaptain"
              value={formData.matchViceCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select Vice-captain</option>
              {players.filter((player) => player.playerId !== Number(formData.matchCaptain)).map(player =>
                <option key={player.playerId} value={player.playerId}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <label className="block text-black text-sm font-semibold">Coaches</label>
            <div tabIndex={-1} className="flex border gap-1 border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <input
                type="text"
                className="py-1 px-3 w-[88%] rounded-md cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600 "
                value={selectedCoaches.map(coach => coach.coachName).join(", ")} // Show selected coach names, joined by commas
                readOnly
                placeholder='Choose coaches from the list...'
                
              />
               <button
                  type='button'
                  title='Select coaches'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-[6%] justify-center text-3xl rounded-lg"
                >
                  <RiArrowDropDownLine />
              </button>
              <button
                type="button"
                title='delete'
                className=" items-center w-[6%] justify-center text-sm text-red-500 hover:text-red-600 rounded-lg"
                onClick={clearSelectedCoaches}
              >
                <FaTrash/>
              </button>
            </div>
            {errors.coaches && <p className="text-red-500 text-xs mt-1">{errors.coaches}</p>}
            <div className="relative col-span-1 md:col-span-2 ">
              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-10">
                  {coaches.map(coach => (
                    <li key={coach.coachId} className="flex items-center px-3 py-2">
                      <input
                        type="checkbox"
                        id={`coach-${coach.coachId}`}
                        className="mr-2 text-gray-600"
                        checked={selectedCoaches.some(p => p.coachId === coach.coachId)}
                        onChange={() => handleCoachSelect(coach)}
                      />
                      <label
                        htmlFor={`coach-${coach.coachId}`}
                        className="block text-gray-600 text-sm font-semibold"
                      >
                        {coach.name}
                      </label>
                    </li>
                  ))}
                </div>
              )}
            </div>
           
          </div>
          <div className="col-span-1 md:col-span-2 relative">
            <label className="block text-black text-sm font-semibold">Opponent Logo</label>
              <div
                className={`w-full px-3 py-4 border rounded-md ${
                  isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
                } flex f
                +--lex-col items-center justify-center cursor-pointer`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className=" object-contain rounded-lg border border-gray-300"
                  />
                ) : (
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
                )}
              <input
                ref={fileInputRef}
                id="logo"
                type="file" 
                name="logo" 
                accept="image/*" 
                onChange={handleChange}
                className="hidden"
              />
            </div>
            {imagePreview && (
              <button
              title="Remove image"
                onClick={handleRemoveImage}
                className="absolute right-2 bottom-2 text-sm text-red-500 hover:text-red-600"
              >
                <FaTrash/>
              </button>
            )} 
          </div>
          {showImageError && (
            <p className="text-red-500 text-xs px-2 col-span-1 md:col-span-2 relative ">
              Upload a new image to replace the existing one, or it will remain unchanged.
            </p>
          )}
          {errors.logo && <p className="text-red-500 text-xs">{errors.logo}</p>} 
          <div className="col-span-1 md:col-span-2 ">
            <button
              onClick={handleEdit}
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save
            </button>
          </div>
        </form>
        </div>
      </div>
      {uploading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
      )}
    </div>
  );
};

export default EditPopup;