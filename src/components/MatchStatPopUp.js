// import React, { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import { message } from "antd";

// const MatchStatPopup = ({ matchId, matchType, onClose, isSubmitted }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const accessToken = localStorage.getItem("accessToken");
//   const [isSummaryExists, setIsSummaryExists] = useState(false);
//   const initialStatData = {
//     inning: matchType === "Test" ? "" : "1",
//     oppositionOvers: "",
//     runs: "",
//     wickets: "",
//     overs: "",
//     oppositionRuns: "",
//     oppositionWickets: "",
//     result: "",
//     match: {
//       matchId: matchId
//     }
//   };
//   const [uploading, setUploading] = useState(false);
//   const [statData, setStatData] = useState(initialStatData);
//   const [selectedIning, setSelectedIning] = useState(statData.inning);
//   const [errors, setErrors] = useState({});

//   useEffect(
//     () => {
//       // Reset statData each time the popup is opened
//       if (onClose) {
//         setStatData({
//           ...initialStatData,
//           match: { matchId: matchId || "" }
//         });
//         setSelectedIning(null);
//       }
//       if (matchId) {
//         setStatData(prevState => ({
//           ...prevState,
//           match: { matchId: matchId }
//         }));
//       }
//     },
//     [onClose, matchType, matchId]
//   );

//   useEffect(
//     () => {
//       axios
//         .get(`${API_URL}matchSummary/match/${matchId}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           }
//         })
//         .then(response => {
//           const matchSummary = response.data;
//           if (matchType === "T20" || matchType === "ODI") {
//             if (matchSummary.length > 0) {
//               setStatData(...matchSummary); // Set statData with received summary data
//               setIsSummaryExists(true);
//             } else {
//               setStatData(initialStatData); // Use initial statData if no summary data is
//               setIsSummaryExists(false);
//             }
//             console.log("Match Summary Data:", matchSummary);
//           } else if (matchType === "Test") {
//             const matchInnings =
//               matchSummary &&
//               matchSummary.filter(summary => summary.inning === selectedIning);
//             if (matchInnings.length > 0) {
//               setStatData(...matchInnings); // Set statData with received summary data
//               setIsSummaryExists(true);
//             } else {
//               setStatData({ ...initialStatData, inning: selectedIning }); // Use initial statData if no summary data is available
//               setIsSummaryExists(false);
//             }
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching match summary:", error);
//           setStatData({ ...initialStatData, inning: selectedIning }); // Use initial statData on error
//         });
//       console.log("Is summary exists:", isSummaryExists);
//       console.log("stat to be edited :", statData);

//       if (selectedIning) {
//         console.log("Updated selected inning:", selectedIning);
//         setStatData({ ...statData, inning: selectedIning });
//       }
//     },
//     [matchType, matchId, selectedIning, isSummaryExists]
//   );

//   console.log("matchId2:", matchId);

//   const handleChange = e => {
//     const { name, value, files } = e.target;
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     if (name.includes(".")) {
//       const [mainKey, subKey] = name.split(".");
//       setStatData({
//         ...statData,
//         [mainKey]: {
//           ...statData[mainKey],
//           [subKey]: value
//         }
//       });
//     } else {
//       setStatData({
//         ...statData,
//         [name]: value
//       });
//     }
//     if (name === "inning") {
//       setSelectedIning(value);
//       setStatData({
//         ...statData,
//         [name]: value
//       });
//     }
//     const fieldError = validateForm(name, value);

//     setErrors(prev => {
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
//     switch (name) {
//       case "inning":
//         if (matchType === "Test" && !value) {
//           newErrors.inning = "Inning is required.";
//           message.error("Please select an inning before submitting.");
//         }
//         break;
//       case "overs":
//         if (!value) {
//           newErrors.overs = "Overs are required.";
//         } else if (!value || value < 0 || value > 120)
//           newErrors.overs = "Overs must be between 0 and 120.";
//         break;
//       case "runs":
//         if (!value) {
//           newErrors.runs = "Runs are required.";
//         } else if (!value || value < 0 || value > 1000)
//           newErrors.runs = "Runs must be between 0 and 1000.";
//         break;
//       case "wickets":
//         if (!value) {
//           newErrors.wickets = "Wickets are required.";
//         } else if (!value || value < 0 || value > 10)
//           newErrors.wickets = "Wickets must be between 0 and 10.";
//         break;
//       case "oppositionOvers":
//         if (!value) {
//           newErrors.oppositionOvers = "Opposition Overs are required.";
//         } else if (!value || value < 0 || value > 120)
//           newErrors.oppositionOvers =
//             "Opposition overs must be between 0 and 120.";
//         break;
//       case "oppositionRuns":
//         if (!value) {
//           newErrors.oppositionRuns = "Opposition Runs are required.";
//         } else if (!value || value < 0 || value > 1000)
//           newErrors.oppositionRuns =
//             "Opposition runs must be between 0 and 1000.";
//         break;
//       case "oppositionWickets":
//         if (!value) {
//           newErrors.oppositionWickets = "Opposition Wickets are required.";
//         } else if (!value || value < 0 || value > 10)
//           newErrors.oppositionWickets =
//             "Opposition wickets must be between 0 and 10.";
//         break;
//       case "result":
//         if (!(matchType === "Test" && statData.inning === "1") && !value) {
//           newErrors.result = "Result is required.";
//         }
//         break;
//       default:
//         break;
//     }
//     return newErrors;
//   };

//   const validateFormData = statData => {
//     const errors = {};
//     // Validate top-level fields
//     Object.keys(statData).forEach(field => {
//       const fieldErrors = validateForm(field, statData[field]);
//       if (fieldErrors[field]) {
//         errors[field] = fieldErrors[field];
//       }
//     });
//     return errors;
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const errors = validateFormData(statData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }

//     setUploading(true);
//     console.log("add :", statData); // Log to verify structure before making request

//     try {
//       let addingStatData = { ...statData };
//       if (matchType === "T20" || matchType === "ODI") {
//         addingStatData.inning = "1";
//       }
//       const response = await axios.post(
//         `${API_URL}matchSummary/add`,
//         addingStatData,
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//           }
//         }
//       );
//       message.success("Successful!");
//       setStatData({
//         inning: "",
//         oppositionOvers: "", // Make sure the casing is correct
//         runs: "",
//         wickets: "",
//         overs: "",
//         oppositionRuns: "",
//         oppositionWickets: "",
//         result: "",
//         match: {
//           matchId: "" // matchId must be a valid existing ID
//         }
//       });
//       isSubmitted();
//       console.log("Success response add :", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   const handleUpdate = async e => {
//     e.preventDefault();
//     const errors = validateFormData(statData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }

//     setUploading(true);
//     console.log("update: ", statData); // Log to verify structure before making request
//     try {
//       // Set inning to "1" if matchType is T20 or ODI
//       let updatedStatData = { ...statData };
//       if (matchType === "T20" || matchType === "ODI") {
//         updatedStatData.inning = "1";
//       }

//       console.log("add:", updatedStatData);
//       const response = await axios.put(
//         `${API_URL}matchSummary/update/${updatedStatData.id}`,updatedStatData,
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`
//           }
//         }
//       );
//       message.success("Successfully updated the match Summary!");
//       setStatData({
//         inning: "",
//         oppositionOvers: "", // Make sure the casing is correct
//         runs: "",
//         wickets: "",
//         overs: "",
//         oppositionRuns: "",
//         oppositionWickets: "",
//         result: "",
//         match: {
//           matchId: "" // matchId must be a valid existing ID
//         }
//       });
//       isSubmitted();
//       console.log("success response:", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   const handleClose = () => {
//     setIsSummaryExists(false);
//     onClose();
//   };

//   const handleKeyDown = e => {
//     if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//       const formElements = Array.from(e.target.form.elements);
//       const index = formElements.indexOf(e.target);
//       const nextIndex = e.key === "ArrowUp" ? index - 1 : index + 1;

//       if (formElements[nextIndex]) {
//         formElements[nextIndex].focus();
//         e.preventDefault();
//       }
//     } else if (e.key === "Enter") {
//       e.preventDefault();
//       const form = e.target.form;
//       const isLastField = form.elements[form.elements.length - 1] === e.target;
//       if (isLastField) {
//         handleSubmit(e);
//       }
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
//       <div className="flex items-center justify-center">
//         <div
//           className={`bg-white ${uploading
//             ? "opacity-80"
//             : "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}
//         >
//           <div className="flex justify-end ">
//             <button
//               onClick={handleClose}
//               className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//               aria-label="Close"
//             >
//               <FaTimes />
//             </button>
//           </div>
//           <h2 className="text-xl font-bold mb-6 text-[#480D35]">
//             Add Match Stat
//           </h2>
//           <form
//             className="grid grid-cols-1 md:grid-cols-2 gap-3"
//             onKeyDown={handleKeyDown}
//           >
//             {matchType === "Test"
//               ? <div className="col-span-1">
//                   <label className="block text-black text-sm font-semibold">
//                     Inning
//                   </label>
//                   <select
//                     type="text"
//                     name="inning"
//                     value={statData.inning}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//                   >
//                     <option value="" disabled selected>
//                       Select inning
//                     </option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                   </select>
//                   {errors.inning &&
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.inning}
//                     </p>}
//                 </div>
//               : <div className="col-span-1">
//                   <label className="block text-black text-sm font-semibold">
//                     Inning
//                   </label>
//                   <input
//                     type="text"
//                     name="inning"
//                     value="1"
//                     onChange={handleChange}
//                     readOnly
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//                   />
//                   {errors.inning &&
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.inning}
//                     </p>}
//                 </div>}
//             <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
//               Richmond match stats details
//             </p>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Overs
//               </label>
//               <input
//                 type="number"
//                 name="overs"
//                 min={0}
//                 max={120}
//                 value={statData.overs}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 120) value = 120; // Ensure maximum value is 120
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.overs &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.overs}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Runs
//               </label>
//               <input
//                 type="number"
//                 name="runs"
//                 min={0}
//                 max={1000}
//                 value={statData.runs}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 1000) value = 1000; // Ensure maximum value is 1000
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.runs &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.runs}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Wickets
//               </label>
//               <input
//                 type="number"
//                 name="wickets"
//                 min={0}
//                 max={10}
//                 value={statData.wickets}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 10) value = 10; // Ensure maximum value is 10
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//               />
//               {errors.wickets &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.wickets}
//                 </p>}
//             </div>
//             <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
//               Opposition match stats details
//             </p>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Overs
//               </label>
//               <input
//                 type="number"
//                 name="oppositionOvers"
//                 min={0}
//                 max={120}
//                 value={statData.oppositionOvers}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 120) value = 120; // Ensure maximum value is 120
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionOvers &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionOvers}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Runs
//               </label>
//               <input
//                 type="number"
//                 name="oppositionRuns"
//                 min={0}
//                 max={1000}
//                 value={statData.oppositionRuns}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 1000) value = 1000; // Ensure maximum value is 1000
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionRuns &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionRuns}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Wickets
//               </label>
//               <input
//                 type="number"
//                 name="oppositionWickets"
//                 min={0}
//                 max={10}
//                 value={statData.oppositionWickets}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 10) value = 10; // Ensure maximum value is 10
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionWickets &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionWickets}
//                 </p>}
//             </div>

//             {matchType === "Test" && selectedIning === "1"
//               ? <div className="col-span-1 md:col-span-2">
//                   <label className="block text-black text-sm font-semibold">
//                     Result
//                   </label>
//                   <input
//                     type="text"
//                     name="result"
//                     value={statData.result}
//                     onChange={handleChange}
//                     readOnly
//                     placeholder="This is restricted for inning 1."
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                   />
//                 </div>
//               : <div className="col-span-1 md:col-span-2">
//                   <label className="block text-black text-sm font-semibold">
//                     Result
//                   </label>
//                   <input
//                     type="text"
//                     name="result"
//                     value={statData.result}
//                     onChange={handleChange}
//                     required
//                     placeholder="Victory for college A by X runs."
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                   />
//                   {errors.result &&
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.result}
//                     </p>}
//                 </div>}
//             {isSummaryExists
//               ? <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
//                   <button
//                     onClick={handleUpdate}
//                     type="submit"
//                     className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//                   >
//                     Update
//                   </button>
//                 </div>
//               : <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
//                   <button
//                     onClick={handleSubmit}
//                     type="submit"
//                     className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//                   >
//                     Submit
//                   </button>
//                 </div>}
//           </form>
//         </div>
//       </div>
//       {uploading &&
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
//           <img
//             src={ball}
//             alt="Loading..."
//             className="w-20 h-20 bg-transparent"
//           />
//         </div>}
//     </div>
//   );
// };

// export default MatchStatPopup;

// import React, { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import { message } from "antd";

// const MatchStatPopup = ({ matchId, matchType, onClose, isSubmitted }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const accessToken = localStorage.getItem("accessToken");
//   const [isSummaryExists, setIsSummaryExists] = useState(false);
//   const initialStatData = {
//     inning: ["Test", "3 Day", "2 Day"].includes(matchType) ? "" : "1",
//     oppositionOvers: "",
//     runs: "",
//     wickets: "",
//     overs: "",
//     oppositionRuns: "",
//     oppositionWickets: "",
//     result: "",
//     match: {
//       matchId: matchId
//     }
//   };
//   const [uploading, setUploading] = useState(false);
//   const [statData, setStatData] = useState(initialStatData);
//   const [selectedIning, setSelectedIning] = useState(statData.inning);
//   const [errors, setErrors] = useState({});

//   useEffect(
//     () => {
//       // Reset statData each time the popup is opened
//       if (onClose) {
//         setStatData({
//           ...initialStatData,
//           match: { matchId: matchId || "" }
//         });
//         setSelectedIning(null);
//       }
//       if (matchId) {
//         setStatData(prevState => ({
//           ...prevState,
//           match: { matchId: matchId }
//         }));
//       }
//     },
//     [onClose, matchType, matchId]
//   );

//   useEffect(
//     () => {
//       axios
//         .get(`${API_URL}matchSummary/match/${matchId}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           }
//         })
//         .then(response => {
//           const matchSummary = response.data;
//           if (matchType === "T20" || matchType === "ODI") {
//             if (matchSummary.length > 0) {
//               setStatData(...matchSummary); // Set statData with received summary data
//               setIsSummaryExists(true);
//             } else {
//               setStatData(initialStatData); // Use initial statData if no summary data is
//               setIsSummaryExists(false);
//             }
//             console.log("Match Summary Data:", matchSummary);
//           }  else if (["Test", "3 Day", "2 Day"].includes(matchType)) {
//             const matchInnings =
//               matchSummary &&
//               matchSummary.filter(summary => summary.inning === selectedIning);
//             if (matchInnings.length > 0) {
//               setStatData(...matchInnings); // Set statData with received summary data
//               setIsSummaryExists(true);
//             } else {
//               setStatData({ ...initialStatData, inning: selectedIning }); // Use initial statData if no summary data is available
//               setIsSummaryExists(false);
//             }
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching match summary:", error);
//           setStatData({ ...initialStatData, inning: selectedIning }); // Use initial statData on error
//         });
//       console.log("Is summary exists:", isSummaryExists);
//       console.log("stat to be edited :", statData);

//       if (selectedIning) {
//         console.log("Updated selected inning:", selectedIning);
//         setStatData({ ...statData, inning: selectedIning });
//       }
//     },
//     [matchType, matchId, selectedIning, isSummaryExists]
//   );

//   console.log("matchId2:", matchId);

//   const handleChange = e => {
//     const { name, value, files } = e.target;
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     if (name.includes(".")) {
//       const [mainKey, subKey] = name.split(".");
//       setStatData({
//         ...statData,
//         [mainKey]: {
//           ...statData[mainKey],
//           [subKey]: value
//         }
//       });
//     } else {
//       setStatData({
//         ...statData,
//         [name]: value
//       });
//     }
//     if (name === "inning") {
//       setSelectedIning(value);
//       setStatData({
//         ...statData,
//         [name]: value
//       });
//     }
//     const fieldError = validateForm(name, value);

//     setErrors(prev => {
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
//     switch (name) {
//       case "inning":
//         if (["Test", "2 Day", "3 Day"].includes(matchType) && !value) {
//           newErrors.inning = "Inning is required.";
//           message.error("Please select an inning before submitting.");
//         }
//         break;
//       case "overs":
//         if (!value) {
//           newErrors.overs = "Overs are required.";
//         } else if (value < 0 || value > 120) {
//           newErrors.overs = "Overs must be between 0 and 120.";
//         }
//         break;
//       case "runs":
//         if (!value) {
//           newErrors.runs = "Runs are required.";
//         } else if (value < 0 || value > 1000) {
//           newErrors.runs = "Runs must be between 0 and 1000.";
//         }
//         break;
//       case "wickets":
//         if (!value) {
//           newErrors.wickets = "Wickets are required.";
//         } else if (value < 0 || value > 10) {
//           newErrors.wickets = "Wickets must be between 0 and 10.";
//         }
//         break;
//       case "oppositionOvers":
//         if (!value) {
//           newErrors.oppositionOvers = "Opposition Overs are required.";
//         } else if (value < 0 || value > 120) {
//           newErrors.oppositionOvers = "Opposition overs must be between 0 and 120.";
//         }
//         break;
//       case "oppositionRuns":
//         if (!value) {
//           newErrors.oppositionRuns = "Opposition Runs are required.";
//         } else if (value < 0 || value > 1000) {
//           newErrors.oppositionRuns = "Opposition runs must be between 0 and 1000.";
//         }
//         break;
//       case "oppositionWickets":
//         if (!value) {
//           newErrors.oppositionWickets = "Opposition Wickets are required.";
//         } else if (value < 0 || value > 10) {
//           newErrors.oppositionWickets = "Opposition wickets must be between 0 and 10.";
//         }
//         break;
//       case "result":
//         if (!(["Test", "2 Day", "3 Day"].includes(matchType) && statData.inning === "1") && !value) {
//           newErrors.result = "Result is required.";
//         }
//         break;
//       default:
//         break;
//     }
//     return newErrors;
// };


//   const validateFormData = statData => {
//     const errors = {};
//     // Validate top-level fields
//     Object.keys(statData).forEach(field => {
//       const fieldErrors = validateForm(field, statData[field]);
//       if (fieldErrors[field]) {
//         errors[field] = fieldErrors[field];
//       }
//     });
//     return errors;
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const errors = validateFormData(statData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }

//     setUploading(true);
//     console.log("add :", statData); // Log to verify structure before making request

//     try {
//       let addingStatData = { ...statData };
//       if (matchType === "T20" || matchType === "ODI") {
//         addingStatData.inning = "1";
//       }
//       const response = await axios.post(
//         `${API_URL}matchSummary/add`,
//         addingStatData,
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//           }
//         }
//       );
//       message.success("Successful!");
//       setStatData({
//         inning: "",
//         oppositionOvers: "", // Make sure the casing is correct
//         runs: "",
//         wickets: "",
//         overs: "",
//         oppositionRuns: "",
//         oppositionWickets: "",
//         result: "",
//         match: {
//           matchId: "" // matchId must be a valid existing ID
//         }
//       });
//       isSubmitted();
//       console.log("Success response add :", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   const handleUpdate = async e => {
//     e.preventDefault();
//     const errors = validateFormData(statData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }

//     setUploading(true);
//     console.log("update: ", statData); // Log to verify structure before making request
//     try {
//       // Set inning to "1" if matchType is T20 or ODI
//       let updatedStatData = { ...statData };
//       if (matchType === "T20" || matchType === "ODI") {
//         updatedStatData.inning = "1";
//       }

//       console.log("add:", updatedStatData);
//       const response = await axios.put(
//         `${API_URL}matchSummary/update/${updatedStatData.id}`,updatedStatData,
//         {
//           headers: {
//             'Authorization': `Bearer ${accessToken}`
//           }
//         }
//       );
//       message.success("Successfully updated the match Summary!");
//       setStatData({
//         inning: "",
//         oppositionOvers: "", // Make sure the casing is correct
//         runs: "",
//         wickets: "",
//         overs: "",
//         oppositionRuns: "",
//         oppositionWickets: "",
//         result: "",
//         match: {
//           matchId: "" // matchId must be a valid existing ID
//         }
//       });
//       isSubmitted();
//       console.log("success response:", response.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   const handleClose = () => {
//     setIsSummaryExists(false);
//     onClose();
//   };

//   const handleKeyDown = e => {
//     if (e.key === "ArrowUp" || e.key === "ArrowDown") {
//       const formElements = Array.from(e.target.form.elements);
//       const index = formElements.indexOf(e.target);
//       const nextIndex = e.key === "ArrowUp" ? index - 1 : index + 1;

//       if (formElements[nextIndex]) {
//         formElements[nextIndex].focus();
//         e.preventDefault();
//       }
//     } else if (e.key === "Enter") {
//       e.preventDefault();
//       const form = e.target.form;
//       const isLastField = form.elements[form.elements.length - 1] === e.target;
//       if (isLastField) {
//         handleSubmit(e);
//       }
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
//       <div className="flex items-center justify-center">
//         <div
//           className={`bg-white ${uploading
//             ? "opacity-80"
//             : "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}
//         >
//           <div className="flex justify-end ">
//             <button
//               onClick={handleClose}
//               className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//               aria-label="Close"
//             >
//               <FaTimes />
//             </button>
//           </div>
//           <h2 className="text-xl font-bold mb-6 text-[#480D35]">
//             Add Match Stat
//           </h2>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onKeyDown={handleKeyDown}>
//   {["Test", "3 Day", "2 Day"].includes(matchType) ? (
//     <div className="col-span-1">
//       <label className="block text-black text-sm font-semibold">Inning</label>
//       <select
//         type="text"
//         name="inning"
//         value={statData.inning}
//         onChange={handleChange}
//         required
//         className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//       >
//         <option value="" disabled selected>
//           Select inning
//         </option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//       </select>
//       {errors.inning && (
//         <p className="text-red-500 text-xs mt-1">{errors.inning}</p>
//       )}
//     </div>
//   ) :  <div className="col-span-1">
//                   <label className="block text-black text-sm font-semibold">
//                     Inning
//                   </label>
//                   <input
//                     type="text"
//                     name="inning"
//                     value="1"
//                     onChange={handleChange}
//                     readOnly
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//                   />
//                   {errors.inning &&
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.inning}
//                     </p>}
//                 </div>}
//             <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
//               Richmond match stats details
//             </p>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Overs
//               </label>
//               <input
//                 type="number"
//                 name="overs"
//                 min={0}
//                 max={120}
//                 value={statData.overs}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 120) value = 120; // Ensure maximum value is 120
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.overs &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.overs}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Runs
//               </label>
//               <input
//                 type="number"
//                 name="runs"
//                 min={0}
//                 max={1000}
//                 value={statData.runs}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 1000) value = 1000; // Ensure maximum value is 1000
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.runs &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.runs}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Wickets
//               </label>
//               <input
//                 type="number"
//                 name="wickets"
//                 min={0}
//                 max={10}
//                 value={statData.wickets}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 10) value = 10; // Ensure maximum value is 10
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//               />
//               {errors.wickets &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.wickets}
//                 </p>}
//             </div>
//             <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
//               Opposition match stats details
//             </p>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Overs
//               </label>
//               <input
//                 type="number"
//                 name="oppositionOvers"
//                 min={0}
//                 max={120}
//                 value={statData.oppositionOvers}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 120) value = 120; // Ensure maximum value is 120
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionOvers &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionOvers}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Runs
//               </label>
//               <input
//                 type="number"
//                 name="oppositionRuns"
//                 min={0}
//                 max={1000}
//                 value={statData.oppositionRuns}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 1000) value = 1000; // Ensure maximum value is 1000
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionRuns &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionRuns}
//                 </p>}
//             </div>
//             <div className="col-span-1">
//               <label className="block text-black text-sm font-semibold">
//                 Opposition Wickets
//               </label>
//               <input
//                 type="number"
//                 name="oppositionWickets"
//                 min={0}
//                 max={10}
//                 value={statData.oppositionWickets}
//                 onChange={handleChange}
//                 onInput={e => {
//                   let value = e.target.value;
//                   if (value < 0) value = 0; // Ensure minimum value is 0
//                   if (value > 10) value = 10; // Ensure maximum value is 10
//                   e.target.value = value;
//                   handleChange(e); // Update the form data
//                 }}
//                 required
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               />
//               {errors.oppositionWickets &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.oppositionWickets}
//                 </p>}
//             </div>

//             {["Test", "3 Day", "2 Day"].includes(matchType) && selectedIning === "1" ? (
//   <div className="col-span-1 md:col-span-2">
//     <label className="block text-black text-sm font-semibold">Result</label>
//     <input
//       type="text"
//       name="result"
//       value={statData.result}
//       onChange={handleChange}
//       readOnly
//       placeholder="This is restricted for inning 1."
//       className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//     />
//   </div>
// ) :  <div className="col-span-1 md:col-span-2">
//                   <label className="block text-black text-sm font-semibold">
//                     Result
//                   </label>
//                   <input
//                     type="text"
//                     name="result"
//                     value={statData.result}
//                     onChange={handleChange}
//                     required
//                     placeholder="Victory for college A by X runs."
//                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                   />
//                   {errors.result &&
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.result}
//                     </p>}
//                 </div>}
//             {isSummaryExists
//               ? <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
//                   <button
//                     onClick={handleUpdate}
//                     type="submit"
//                     className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//                   >
//                     Update
//                   </button>
//                 </div>
//               : <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
//                   <button
//                     onClick={handleSubmit}
//                     type="submit"
//                     className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//                   >
//                     Submit
//                   </button>
//                 </div>}
//           </form>
//         </div>
//       </div>
//       {uploading &&
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
//           <img
//             src={ball}
//             alt="Loading..."
//             className="w-20 h-20 bg-transparent"
//           />
//         </div>}
//     </div>
//   );
// };

// export default MatchStatPopup;

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { message } from "antd";

const MatchStatPopup = ({ matchId, matchType, onClose, isSubmitted }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");
  const [isSummaryExists, setIsSummaryExists] = useState(false);
  const initialStatData = {
    inning: ["Test", "3 Day", "2 Day"].includes(matchType) ? "" : "1",
    oppositionOvers: "",
    runs: "",
    wickets: "",
    overs: "",
    oppositionRuns: "",
    oppositionWickets: "",
    result: "",
    match: {
      matchId: matchId
    }
  };
  const [uploading, setUploading] = useState(false);
  const [statData, setStatData] = useState(initialStatData);
  const [selectedIning, setSelectedIning] = useState(statData.inning);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Only reset form when the popup opens initially
    if (onClose && !selectedIning) {
      setStatData({
        ...initialStatData,
        match: { matchId: matchId || "" }
      });
      setSelectedIning("1"); // Set default inning as "1" only if it's not already set
    }
  
    if (matchId) {
      setStatData(prevState => ({
        ...prevState,
        match: { matchId: matchId }
      }));
    }
  }, [onClose, matchId]);
  

  useEffect(() => {
    // Ensure selectedIning defaults to "1" if undefined
    if (!selectedIning && ["Test", "2 Day", "3 Day"].includes(matchType)) {
      setSelectedIning("1");
      return; // Wait for re-render with updated inning
    }
  
    axios
      .get(`${API_URL}matchSummary/match/${matchId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(response => {
        const matchSummary = response.data;
  
        if (["T20", "ODI"].includes(matchType)) {
          if (matchSummary.length > 0) {
            setStatData(...matchSummary);
            setIsSummaryExists(true);
          } else {
            setStatData(initialStatData);
            setIsSummaryExists(false);
          }
        } else if (["Test", "3 Day", "2 Day"].includes(matchType)) {
          const matchInnings = matchSummary?.filter(
            summary => summary.inning === selectedIning
          );
          if (matchInnings.length > 0) {
            setStatData(...matchInnings);
            setIsSummaryExists(true);
          } else {
            setStatData({ ...initialStatData, inning: selectedIning });
            setIsSummaryExists(false);
          }
        }
  
        console.log("Match Summary Data:", matchSummary);
      })
      .catch(error => {
        console.error("Error fetching match summary:", error);
        setStatData({ ...initialStatData, inning: selectedIning });
      });
  }, [matchType, matchId, selectedIning]);
  
  
  const handleChange = e => {
    const { name, value, files } = e.target;
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setStatData({
        ...statData,
        [mainKey]: {
          ...statData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setStatData({
        ...statData,
        [name]: value
      });
    }
    if (name === "inning") {
      setSelectedIning(value);
      setStatData({
        ...statData,
        [name]: value
      });
    }
    const fieldError = validateForm(name, value);

    setErrors(prev => {
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
    switch (name) {
      case "inning":
        if (["Test", "2 Day", "3 Day"].includes(matchType) && !value) {
          newErrors.inning = "Inning is required.";
          message.error("Please select an inning before submitting.");
        }
        break;
      case "overs":
        // if (!value) {
        //   newErrors.overs = "Overs are required.";
        // } else 
        
        if (value < 0 || value > 120) {
          newErrors.overs = "Overs must be between 0 and 120.";
        }
        break;
      case "runs":
        // if (!value) {
        //   newErrors.runs = "Runs are required.";
        // } else 
        
        if (value < 0 || value > 1000) {
          newErrors.runs = "Runs must be between 0 and 1000.";
        }
        break;
      case "wickets":
        // if (!value) {
        //   newErrors.wickets = "Wickets are required.";
        // } else
        
        if (value < 0 || value > 10) {
          newErrors.wickets = "Wickets must be between 0 and 10.";
        }
        break;
      case "oppositionOvers":
        // if (!value) {
        //   newErrors.oppositionOvers = "Opposition Overs are required.";
        // } else
        
        if (value < 0 || value > 120) {
          newErrors.oppositionOvers = "Opposition overs must be between 0 and 120.";
        }
        break;
      case "oppositionRuns":
        // if (!value) {
        //   newErrors.oppositionRuns = "Opposition Runs are required.";
        // } else
        
        if (value < 0 || value > 1000) {
          newErrors.oppositionRuns = "Opposition runs must be between 0 and 1000.";
        }
        break;
      case "oppositionWickets":
        // if (!value) {
        //   newErrors.oppositionWickets = "Opposition Wickets are required.";
        // } else 
        
        if (value < 0 || value > 10) {
          newErrors.oppositionWickets = "Opposition wickets must be between 0 and 10.";
        }
        break;
      case "result":
        // if (!(["Test", "2 Day", "3 Day"].includes(matchType) && statData.inning === "1") && !value) {
        //   newErrors.result = "Result is required.";
        // }
        break;
      default:
        break;
    }
    return newErrors;
};


  const validateFormData = statData => {
    const errors = {};
    // Validate top-level fields
    Object.keys(statData).forEach(field => {
      const fieldErrors = validateForm(field, statData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    return errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validateFormData(statData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      return;
    }
  
    setUploading(true);
    try {
      let addingStatData = { ...statData };
      if (matchType === "T20" || matchType === "ODI") {
        addingStatData.inning = "1";
      }
  
      const response = await axios.post(
        `${API_URL}matchSummary/add`,
        addingStatData,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
  
      message.success("Successful!");
      isSubmitted();
      console.log("Success response add:", response.data);
  
      // Check if it's a multi-inning match and current inning is "1"
      if (["Test", "3 Day", "2 Day"].includes(matchType) && statData.inning === "1") {
        setSelectedIning("2"); // Trigger useEffect to load 2nd inning
        setStatData(prev => ({
          ...initialStatData,
          inning: "2",
          match: { matchId: matchId }
        }));
      } else {
        // Reset for single-inning matches
        setStatData({
          inning: "",
          oppositionOvers: "",
          runs: "",
          wickets: "",
          overs: "",
          oppositionRuns: "",
          oppositionWickets: "",
          result: "",
          match: { matchId: "" }
        });
        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(error.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setUploading(false);
    }
  };
  const handleUpdate = async e => {
    e.preventDefault();
    const errors = validateFormData(statData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      return;
    }
  
    setUploading(true);
    try {
      let updatedStatData = { ...statData };
      if (matchType === "T20" || matchType === "ODI") {
        updatedStatData.inning = "1";
      }
  
      const response = await axios.put(
        `${API_URL}matchSummary/update/${updatedStatData.id}`,
        updatedStatData,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
  
      message.success("Successfully updated the match Summary!");
      isSubmitted();
      console.log("Success response update:", response.data);
  
      if (["Test", "3 Day", "2 Day"].includes(matchType) && statData.inning === "1") {
        setSelectedIning("2");
        setStatData({
          ...initialStatData,
          inning: "2",
          match: { matchId: matchId }
        });
      } else {
        setStatData({
          inning: "",
          oppositionOvers: "",
          runs: "",
          wickets: "",
          overs: "",
          oppositionRuns: "",
          oppositionWickets: "",
          result: "",
          match: { matchId: "" }
        });
        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(error.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setUploading(false);
    }
  };
    

  const handleClose = () => {
    setIsSummaryExists(false);
    onClose();
  };

  const handleKeyDown = e => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      const formElements = Array.from(e.target.form.elements);
      const index = formElements.indexOf(e.target);
      const nextIndex = e.key === "ArrowUp" ? index - 1 : index + 1;

      if (formElements[nextIndex]) {
        formElements[nextIndex].focus();
        e.preventDefault();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const isLastField = form.elements[form.elements.length - 1] === e.target;
      if (isLastField) {
        handleSubmit(e);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
      <div className="flex items-center justify-center">
        <div
          className={`bg-white ${uploading
            ? "opacity-80"
            : "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}
        >
          <div className="flex justify-end ">
            <button
              onClick={handleClose}
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-6 text-[#480D35]">
            Add Match Stat
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onKeyDown={handleKeyDown}>
  {["Test", "3 Day", "2 Day"].includes(matchType) ? (
    <div className="col-span-1">
      <label className="block text-black text-sm font-semibold">Inning</label>
      <select
        type="text"
        name="inning"
        value={statData.inning}
        onChange={handleChange}
        required
        className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
      >
        {/* <option value="" disabled selected>
          Select inning
        </option> */}
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      {errors.inning && (
        <p className="text-red-500 text-xs mt-1">{errors.inning}</p>
      )}
    </div>
  ) :  <div className="col-span-1">
                  <label className="block text-black text-sm font-semibold">
                    Inning
                  </label>
                  <input
                    type="text"
                    name="inning"
                    value="1"
                    onChange={handleChange}
                    readOnly
                    className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
                  />
                  {errors.inning &&
                    <p className="text-red-500 text-xs mt-1">
                      {errors.inning}
                    </p>}
                </div>}
            <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
              Richmond match stats details
            </p>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Overs
              </label>
              <input
                type="number"
                name="overs"
                min={0}
                max={120}
                 step="0.1"
                value={statData.overs}
                onChange={(e) => {
                  let value = e.target.value;
            
                  // Optional: parse and validate before calling setState
                  if (value === "") {
                    handleChange(e); // Allow empty for delete/backspace
                    return;
                  }
            
                  const floatValue = parseFloat(value);
                  if (floatValue >= 0 && floatValue <= 120) {
                    handleChange(e);
                  }
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.overs &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.overs}
                </p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Runs
              </label>
              <input
                type="number"
                name="runs"
                min={0}
                max={1000}
                value={statData.runs}
                onChange={handleChange}
                onInput={e => {
                  let value = e.target.value;
                  if (value < 0) value = 0; // Ensure minimum value is 0
                  if (value > 1000) value = 1000; // Ensure maximum value is 1000
                  e.target.value = value;
                  handleChange(e); // Update the form data
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.runs &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.runs}
                </p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Wickets
              </label>
              <input
                type="number"
                name="wickets"
                min={0}
                max={10}
                value={statData.wickets}
                onChange={handleChange}
                onInput={e => {
                  let value = e.target.value;
                  if (value < 0) value = 0; // Ensure minimum value is 0
                  if (value > 10) value = 10; // Ensure maximum value is 10
                  e.target.value = value;
                  handleChange(e); // Update the form data
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
              />
              {errors.wickets &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.wickets}
                </p>}
            </div>
            <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">
              Opposition match stats details
            </p>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Opposition Overs
              </label>
              <input
                type="number"
                name="oppositionOvers"
                min={0}
                max={120}
                step="0.1"

                value={statData.oppositionOvers}
                onChange={(e) => {
                  let value = e.target.value;
            
                  // Optional: parse and validate before calling setState
                  if (value === "") {
                    handleChange(e); // Allow empty for delete/backspace
                    return;
                  }
            
                  const floatValue = parseFloat(value);
                  if (floatValue >= 0 && floatValue <= 120) {
                    handleChange(e);
                  }
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionOvers &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.oppositionOvers}
                </p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Opposition Runs
              </label>
              <input
                type="number"
                name="oppositionRuns"
                min={0}
                max={1000}
                value={statData.oppositionRuns}
                onChange={handleChange}
                onInput={e => {
                  let value = e.target.value;
                  if (value < 0) value = 0; // Ensure minimum value is 0
                  if (value > 1000) value = 1000; // Ensure maximum value is 1000
                  e.target.value = value;
                  handleChange(e); // Update the form data
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionRuns &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.oppositionRuns}
                </p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">
                Opposition Wickets
              </label>
              <input
                type="number"
                name="oppositionWickets"
                min={0}
                max={10}
                value={statData.oppositionWickets}
                onChange={handleChange}
                onInput={e => {
                  let value = e.target.value;
                  if (value < 0) value = 0; // Ensure minimum value is 0
                  if (value > 10) value = 10; // Ensure maximum value is 10
                  e.target.value = value;
                  handleChange(e); // Update the form data
                }}
                // required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionWickets &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.oppositionWickets}
                </p>}
            </div>
{/* 
            {["Test", "3 Day", "2 Day"].includes(matchType) && selectedIning === "1" ? (
  <div className="col-span-1 md:col-span-2">
    <label className="block text-black text-sm font-semibold">Result</label>
    <input
      type="text"
      name="result"
      value={statData.result}
      onChange={handleChange}
      readOnly
      placeholder="This is restricted for inning 1."
      className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
    />
  </div>
) :   */}

<div className="col-span-1 md:col-span-2">
                  <label className="block text-black text-sm font-semibold">
                    Result
                  </label>
                  <input
                    type="text"
                    name="result"
                    value={statData.result}
                    onChange={handleChange}
                    required
                    placeholder="Victory for college A by X runs."
                    className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                  />
                  {errors.result &&
                    <p className="text-red-500 text-xs mt-1">
                      {errors.result}
                    </p>}
                </div>
                
                {/* } */}


            {isSummaryExists
              ? <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
                  <button
                    onClick={handleUpdate}
                    type="submit"
                    className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                  >
                    Update
                  </button>
                </div>
              : <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                  >
                    Submit
                  </button>
                </div>}
          </form>
        </div>
      </div>
      {uploading &&
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img
            src={ball}
            alt="Loading..."
            className="w-20 h-20 bg-transparent"
          />
        </div>}
    </div>
  );
};

export default MatchStatPopup;

