// import React, { useState } from "react";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import Navbar from "../components/MemberNavbar";
// import backgroundFlag from "../assets/images/flag.png";
// import coachesData from "./coachData";
// import PracticeScheduleForm from "../components/PracticeScheduleForm";
// import EditPracticeScheduleForm from "../components/EditPracticeScheduleForm";

// const practiceSchedulesData = [
//   {
//     id: 1,
//     venue: "Colombo Ground",
//     startTime: "10:00 AM",
//     endTime: "12:00 PM",
//     type: "Batting Practice"
//   },
//   {
//     id: 2,
//     venue: "Galle Stadium",
//     startTime: "02:00 PM",
//     endTime: "04:00 PM",
//     type: "Bowling Practices"
//   },
//   {
//     id: 3,
//     venue: "Kandy Ground",
//     startTime: "09:00 AM",
//     endTime: "11:00 AM",
//     type: "Fielding Practice"
//   }
// ];

// const CoachesProfile = () => {
//   const [selectedCoach, setSelectedCoach] = useState(coachesData[0]);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isEditFormOpen, setIsEditFormOpen] = useState(false);
//   const [editSchedule, setEditSchedule] = useState(null);

//   const handleAddSchedule = () => {
//     setIsFormOpen(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//   };

//   const handleEditSchedule = schedule => {
//     setEditSchedule(schedule);
//     setIsEditFormOpen(true);
//   };

//   const handleCloseEditForm = () => {
//     setIsEditFormOpen(false);
//   };

//   const handleSaveSchedule = updatedSchedule => {
//     const updatedSchedules = practiceSchedulesData.map(
//       schedule =>
//         schedule.id === updatedSchedule.id ? updatedSchedule : schedule
//     );
//     // Ideally, this should be done in state and not directly modifying `practiceSchedulesData`
//     practiceSchedulesData = updatedSchedules;
//     handleCloseEditForm();
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="max-w-screen-lg pt-16">
//         <div className="flex gap-6">
//           {/* Sidebar: Our Coaches Section */}
//           <div
//             className="bg-gray-800 rounded-lg shadow-md"
//             style={{
//               width: "350px",
//               flexShrink: 0,
//               marginTop: "0px",
//               maxHeight: "500px",
//               display: "flex",
//               flexDirection: "column",
//               marginLeft: "60px"
//             }}
//           >
//             {/* Fixed Heading */}
//             <div className="p-4 border-b border-gray-600">
//               <h2 className="text-xl font-bold text-gray-200">Our Coaches</h2>
//             </div>

//             {/* Scrollable Coach List */}
//             <div
//               className="p-4 overflow-y-auto"
//               style={{
//                 flexGrow: 1,
//                 maxHeight: "calc(500px - 64px)",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none"
//               }}
//             >
//               <ul className="space-y-3" style={{ paddingRight: "10px" }}>
//                 {coachesData.map(coach =>
//                   <li
//                     key={coach.id}
//                     className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${coach.id ===
//                     selectedCoach.id
//                       ? "bg-gray-700 font-bold"
//                       : "bg-gray-800"}`}
//                     onClick={() => setSelectedCoach(coach)}
//                   >
//                     <div
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         overflow: "hidden",
//                         borderRadius: "50%",
//                         marginRight: "12px"
//                       }}
//                     >
//                       <img
//                         src={coach.imageUrl}
//                         alt={coach.fullName}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     {coach.fullName}
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>

//           {/* Coach Details */}
//           <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md bg-gray-800">
//             <div
//               className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
//               style={{
//                 backgroundImage: `url(${backgroundFlag})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat"
//               }}
//             >
//               <div
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   overflow: "hidden",
//                   borderRadius: "50%",
//                   border: "4px solid #3B82F6"
//                 }}
//               >
//                 <img
//                   src={selectedCoach.imageUrl}
//                   alt={selectedCoach.fullName}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h1 className="text-5xl font-bold text-white">
//                   {selectedCoach.fullName}
//                 </h1>
//                 <p className="text-white">
//                   {selectedCoach.age} years old
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6  bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">
//                 Coach Information
//               </h3>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="w-full">
//                   <p>
//                     <span className="font-semibold text-gray-400">
//                       Contact:
//                     </span>{" "}
//                     {selectedCoach.contact}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">
//                       Address:
//                     </span>{" "}
//                     {selectedCoach.address}
//                   </p>
//                 </div>
//                 <div className="w-full">
//                   <p className="font-semibold text-gray-400">Description:</p>
//                   <p>
//                     {selectedCoach.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Practice Schedules Table */}
//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-semibold text-white">
//                   Practice Schedules
//                 </h3>
//                 <button
//                   onClick={handleAddSchedule}
//                   className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300"
//                 >
//                   <FaPlus className="text-2xl" />
//                 </button>
//               </div>

//               <table className="min-w-full mt-4 bg-gray-900 rounded-lg shadow-md w-full">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Venue
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Start Time
//                     </th>
//                     <th className="py-2 px-16text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       End Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Type
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {practiceSchedulesData.map(schedule =>
//                     <tr key={schedule.id}>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.venue}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.startTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.endTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.type}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         <div className="flex justify-center space-x-2">
//                           <button
//                             className="text-blue-500 hover:text-blue-700"
//                             onClick={() => handleEditSchedule(schedule)}
//                           >
//                             <FaEdit className="text-sm" />
//                           </button>
//                           <button className="text-red-500 hover:text-red-700">
//                             <FaTrash className="text-sm" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Practice Schedule Form Popup */}
//         {isFormOpen && <PracticeScheduleForm onClose={handleCloseForm} />}

//         {/* Edit Practice Schedule Form Popup */}
//         {isEditFormOpen &&
//           editSchedule &&
//           <EditPracticeScheduleForm
//             schedule={editSchedule}
//             onClose={handleCloseEditForm}
//             onSave={handleSaveSchedule}
//           />}
//       </div>
//     </div>
//   );
// };

// export default CoachesProfile;

// import React, { useState } from "react";
// import Navbar from "../components/MemberNavbar";
// import backgroundFlag from "../assets/images/flag.png";
// import coachesData from "./coachData";

// const practiceSchedulesData = [
//   {
//     id: 1,
//     venue: "Colombo Ground",
//     startTime: "10:00 AM",
//     endTime: "12:00 PM",
//     type: "Batting Practice"
//   },
//   {
//     id: 2,
//     venue: "Galle Stadium",
//     startTime: "02:00 PM",
//     endTime: "04:00 PM",
//     type: "Bowling Practices"
//   },
//   {
//     id: 3,
//     venue: "Kandy Ground",
//     startTime: "09:00 AM",
//     endTime: "11:00 AM",
//     type: "Fielding Practice"
//   }
// ];

// const CoachesProfile = () => {
//   const [selectedCoach, setSelectedCoach] = useState(coachesData[0]);

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="max-w-screen-lg pt-16">
//         <div className="flex gap-6">
//           {/* Sidebar: Our Coaches Section */}
//           <div
//             className="bg-gray-800 rounded-lg shadow-md"
//             style={{
//               width: "350px",
//               flexShrink: 0,
//               marginTop: "0px",
//               maxHeight: "500px",
//               display: "flex",
//               flexDirection: "column",
//               marginLeft: "60px"
//             }}
//           >
//             {/* Fixed Heading */}
//             <div className="p-4 border-b border-gray-600">
//               <h2 className="text-xl font-bold text-gray-200">Our Coaches</h2>
//             </div>

//             {/* Scrollable Coach List */}
//             <div
//               className="p-4 overflow-y-auto"
//               style={{
//                 flexGrow: 1,
//                 maxHeight: "calc(500px - 64px)",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none"
//               }}
//             >
//               <ul className="space-y-3" style={{ paddingRight: "10px" }}>
//                 {coachesData.map(coach =>
//                   <li
//                     key={coach.id}
//                     className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${coach.id ===
//                     selectedCoach.id
//                       ? "bg-gray-700 font-bold"
//                       : "bg-gray-800"}`}
//                     onClick={() => setSelectedCoach(coach)}
//                   >
//                     <div
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         overflow: "hidden",
//                         borderRadius: "50%",
//                         marginRight: "12px"
//                       }}
//                     >
//                       <img
//                         src={coach.imageUrl}
//                         alt={coach.fullName}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     {coach.fullName}
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>

//           {/* Coach Details */}
//           <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md bg-gray-800">
//             <div
//               className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
//               style={{
//                 backgroundImage: `url(${backgroundFlag})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat"
//               }}
//             >
//               <div
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   overflow: "hidden",
//                   borderRadius: "50%",
//                   border: "4px solid #3B82F6"
//                 }}
//               >
//                 <img
//                   src={selectedCoach.imageUrl}
//                   alt={selectedCoach.fullName}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h1 className="text-5xl font-bold text-white">
//                   {selectedCoach.fullName}
//                 </h1>
//                 <p className="text-white">
//                   {selectedCoach.age} years old
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6  bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">
//                 Coach Information
//               </h3>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="w-full">
//                   <p>
//                     <span className="font-semibold text-gray-400">
//                       Contact:
//                     </span>{" "}
//                     {selectedCoach.contact}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">
//                       Address:
//                     </span>{" "}
//                     {selectedCoach.address}
//                   </p>
//                 </div>
//                 <div className="w-full">
//                   <p className="font-semibold text-gray-400">Description:</p>
//                   <p>
//                     {selectedCoach.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Practice Schedules Table */}
//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">
//                 Practice Schedules
//               </h3>

//               <table className="min-w-full mt-4 bg-gray-900 rounded-lg shadow-md w-full">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Venue
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Start Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       End Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Type
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {practiceSchedulesData.map(schedule =>
//                     <tr key={schedule.id}>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.venue}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.startTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.endTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.type}
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoachesProfile;
// Coach Informations
// import React, { useState, useEffect } from "react";
// import Navbar from "../components/MemberNavbar";
// import backgroundFlag from "../assets/images/flag.png";

// const CoachesProfile = () => {
//   const [coachesData, setCoachesData] = useState([]);
//   const [selectedCoach, setSelectedCoach] = useState(null);
//   const [practiceSchedulesData, setPracticeSchedulesData] = useState([]);

//   // Fetch data from the API when the component mounts
//   useEffect(() => {
//     const fetchCoachesData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/coaches/all");
//         const data = await response.json();
//         setCoachesData(data);
//         setSelectedCoach(data[0]); // Set the first coach as default
//       } catch (error) {
//         console.error("Error fetching coaches:", error);
//       }
//     };

//     fetchCoachesData();

//     // Simulate fetching practice schedules (replace with actual API if available)
//     const fetchedSchedules = [
//       {
//         id: 1,
//         venue: "Colombo Ground",
//         startTime: "10:00 AM",
//         endTime: "12:00 PM",
//         type: "Batting Practice"
//       },
//       {
//         id: 2,
//         venue: "Galle Stadium",
//         startTime: "02:00 PM",
//         endTime: "04:00 PM",
//         type: "Bowling Practices"
//       },
//       {
//         id: 3,
//         venue: "Kandy Ground",
//         startTime: "09:00 AM",
//         endTime: "11:00 AM",
//         type: "Fielding Practice"
//       }
//     ];

//     setPracticeSchedulesData(fetchedSchedules);
//   }, []);

//   if (!selectedCoach) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-900 min-h-screen text-white">
//       <Navbar />
//       <div className="max-w-screen-lg pt-16">
//         <div className="flex gap-6">
//           {/* Sidebar: Our Coaches Section */}
//           <div
//             className="bg-gray-800 rounded-lg shadow-md"
//             style={{
//               width: "350px",
//               flexShrink: 0,
//               marginTop: "0px",
//               maxHeight: "500px",
//               display: "flex",
//               flexDirection: "column",
//               marginLeft: "60px"
//             }}
//           >
//             <div className="p-4 border-b border-gray-600">
//               <h2 className="text-xl font-bold text-gray-200">Our Coaches</h2>
//             </div>
//             <div
//               className="p-4 overflow-y-auto"
//               style={{
//                 flexGrow: 1,
//                 maxHeight: "calc(500px - 64px)",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none"
//               }}
//             >
//               <ul className="space-y-3" style={{ paddingRight: "10px" }}>
//                 {coachesData.map((coach) => (
//                   <li
//                     key={coach.coachId}
//                     className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${
//                       coach.coachId === selectedCoach.coachId
//                         ? "bg-gray-700 font-bold"
//                         : "bg-gray-800"
//                     }`}
//                     onClick={() => setSelectedCoach(coach)}
//                   >
//                     <div
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         overflow: "hidden",
//                         borderRadius: "50%",
//                         marginRight: "12px"
//                       }}
//                     >
//                       <img
//                         src={coach.image}
//                         alt={coach.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     {coach.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Coach Details */}
//           <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md bg-gray-800">
//             <div
//               className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
//               style={{
//                 backgroundImage: `url(${backgroundFlag})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat"
//               }}
//             >
//               <div
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   overflow: "hidden",
//                   borderRadius: "50%",
//                   border: "4px solid #3B82F6"
//                 }}
//               >
//                 <img
//                   src={selectedCoach.image}
//                   alt={selectedCoach.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h1 className="text-5xl font-bold text-white">
//                   {selectedCoach.name}
//                 </h1>
//                 <p className="text-white">
//                   Date of Birth: {new Date(selectedCoach.dateOfBirth).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">Coach Information</h3>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="w-full">
//                   <p>
//                     <span className="font-semibold text-gray-400">Contact:</span> {selectedCoach.contactNo}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">Email:</span> {selectedCoach.email}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">Address:</span> {selectedCoach.address}
//                   </p>
//                 </div>
//                 <div className="w-full">
//                   <p className="font-semibold text-gray-400">Description:</p>
//                   <p>{selectedCoach.description}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Practice Schedules Table */}
//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">Practice Schedules</h3>
//               <table className="min-w-full mt-4 bg-gray-900 rounded-lg shadow-md w-full">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Venue
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Start Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       End Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Type
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {practiceSchedulesData.map((schedule) => (
//                     <tr key={schedule.id}>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.venue}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.startTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.endTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.type}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoachesProfile;

// caoch Informations with practice sesssions.

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/MemberNavbar";
// import backgroundFlag from "../assets/images/flag.png";
// import Footer from '../components/Footer';


// const CoachesProfile = () => {
//   const [coachesData, setCoachesData] = useState([]);
//   const [selectedCoach, setSelectedCoach] = useState(null);
//   const [practiceSchedulesData, setPracticeSchedulesData] = useState([]);

//   // Fetch data from the API when the component mounts
//   useEffect(() => {
//     const fetchCoachesData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/coaches/all");
//         const data = await response.json();
//         setCoachesData(data);
//         setSelectedCoach(data[0]); // Set the first coach as default
//       } catch (error) {
//         console.error("Error fetching coaches:", error);
//       }
//     };

//     fetchCoachesData();
//   }, []);

//   // Fetch practice sessions when selectedCoach changes
//   useEffect(() => {
//     if (selectedCoach) {
//       const fetchPracticeSessions = async () => {
//         try {
//           const response = await fetch(
//             `http://localhost:8080/api/practiseSessions/coach/${selectedCoach.coachId}`
//           );
//           const data = await response.json();
//           setPracticeSchedulesData(data);
//         } catch (error) {
//           console.error("Error fetching practice sessions:", error);
//         }
//       };

//       fetchPracticeSessions();
//     }
//   }, [selectedCoach]);

//   if (!selectedCoach) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-300 min-h-screen text-white">
//       <Navbar />
//       <div className="max-w-screen-lg pt-24">
//         <div className="flex gap-6">
//           {/* Sidebar: Our Coaches Section */}
//           <div
//             className="bg-gray-800 rounded-lg shadow-md"
//             style={{
//               width: "350px",
//               flexShrink: 0,
//               marginTop: "0px",
//               maxHeight: "500px",
//               display: "flex",
//               flexDirection: "column",
//               marginLeft: "60px",
//             }}
//           >
//             <div className="p-4 border-b border-gray-600">
//               <h2 className="text-xl font-bold text-gray-200">Our Coaches</h2>
//             </div>
//             <div
//               className="p-4 overflow-y-auto"
//               style={{
//                 flexGrow: 1,
//                 maxHeight: "calc(500px - 64px)",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <ul className="space-y-3" style={{ paddingRight: "10px" }}>
//                 {coachesData.map((coach) => (
//                   <li
//                     key={coach.coachId}
//                     className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${
//                       coach.coachId === selectedCoach.coachId
//                         ? "bg-gray-700 font-bold"
//                         : "bg-gray-800"
//                     }`}
//                     onClick={() => setSelectedCoach(coach)}
//                   >
//                     <div
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         overflow: "hidden",
//                         borderRadius: "50%",
//                         marginRight: "12px",
//                       }}
//                     >
//                       <img
//                         src={coach.image}
//                         alt={coach.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     {coach.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Coach Details */}
//           <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md bg-gray-800 ">
//             <div
//               className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
//               style={{
//                 backgroundImage: `url(${backgroundFlag})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <div
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   overflow: "hidden",
//                   borderRadius: "50%",
//                   border: "4px solid #3B82F6",
//                 }}
//               >
//                 <img
//                   src={selectedCoach.image}
//                   alt={selectedCoach.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h1 className="text-5xl font-bold text-white">
//                   {selectedCoach.name}
//                 </h1>
//                 <p className="text-white">
//                   Date of Birth:{" "}
//                   {new Date(selectedCoach.dateOfBirth).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">
//                 Coach Information
//               </h3>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <div className="w-full">
//                   <p>
//                     <span className="font-semibold text-gray-400">Contact:</span>{" "}
//                     {selectedCoach.contactNo}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">Email:</span>{" "}
//                     {selectedCoach.email}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-gray-400">Address:</span>{" "}
//                     {selectedCoach.address}
//                   </p>
//                 </div>
//                 <div className="w-full">
//                   <p className="font-semibold text-gray-400">Description:</p>
//                   <p>{selectedCoach.description}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Practice Schedules Table */}
//             <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
//               <h3 className="text-xl font-semibold text-white">
//                 Practice Schedules
//               </h3>
//               <table className="min-w-full mt-4 bg-gray-900 rounded-lg shadow-md w-full">
//                 <thead>
//                   <tr>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Venue
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Start Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       End Time
//                     </th>
//                     <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
//                       Type
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {practiceSchedulesData.map((schedule) => (
//                     <tr key={schedule.pracId}>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.venue}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.starTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.endTime}
//                       </td>
//                       <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
//                         {schedule.pracType}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CoachesProfile;

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/MemberNavbar";
// import backgroundFlag from "../assets/images/flag.png";
// import Footer from "../components/Footer";

// const CoachesProfile = () => {
//     const [coachesData, setCoachesData] = useState([]);
//     const [selectedCoach, setSelectedCoach] = useState(null);
//     const [practiceSchedulesData, setPracticeSchedulesData] = useState([]);
//     const [showCoachList, setShowCoachList] = useState(false); // For mobile responsiveness
//     const API_URL = process.env.REACT_APP_API_URL;
//     // Fetch data from the API when the component mounts
//     useEffect(() => {
//         const fetchCoachesData = async () => {
//             try {
//                 const response = await fetch(`${API_URL}coaches/all`);
//                 const data = await response.json();
//                 setCoachesData(data);
//                 setSelectedCoach(data[0]); // Set the first coach as default
//             } catch (error) {
//                 console.error("Error fetching coaches:", error);
//             }
//         };

//         fetchCoachesData();
//     }, []);

//     // Fetch practice sessions when selectedCoach changes
//     useEffect(() => {
//         if (selectedCoach) {
//             const fetchPracticeSessions = async () => {
//                 try {
//                     const response = await fetch(
//                         `${API_URL}practiseSessions/coach/${selectedCoach.coachId}`
//                     );
//                     const data = await response.json();
//                     setPracticeSchedulesData(data);
//                 } catch (error) {
//                     console.error("Error fetching practice sessions:", error);
//                 }
//             };

//             fetchPracticeSessions();
//         }
//     }, [selectedCoach]);

//     if (!selectedCoach) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="bg-gray-400 min-h-screen text-white">
//             <Navbar />
//             <div className="max-w-screen-lg pt-24 mx-auto">
               

//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Sidebar: Our Coaches Section - Only visible on desktop (md and larger) */}
//                     <div
//                         className="hidden md:block bg-white rounded-lg shadow-md"
//                         style={{
//                             width: "350px",
//                             flexShrink: 0,
//                             marginTop: "0px",
//                             maxHeight: "500px",
//                             display: "flex",
//                             flexDirection: "column",
//                         }}
//                     >
//                         <div className="p-4 border-b border-gray-600">
//                             <h2 className="text-xl font-bold text-black">Our Coaches</h2>
//                         </div>
//                         <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: "calc(500px - 64px)" }}>
//                             <ul className="space-y-3">
//                                 {coachesData.map((coach) => (
//                                     <li
//                                         key={coach.coachId}
//                                         className={`cursor-pointer p-3 rounded-lg ${coach.coachId === selectedCoach.coachId ? 'bg-gray-200 font-bold' : 'bg-gray-800'}`}
//                                         onClick={() => setSelectedCoach(coach)}
//                                     >
//                                         <div className="flex items-center">
//                                             <img src={coach.image} alt={coach.name} className="w-10 h-10 rounded-full object-cover mr-3" />
//                                             {coach.name}
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Coach Details */}
//                     <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-md" style={{ minHeight: '500px' }}>
//                         <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6">
//                             <div
//                                 className="rounded-full overflow-hidden border-4 border-blue-500 mb-4 md:mb-0"
//                                 style={{ width: "150px", height: "150px" }}
//                             >
//                                 <img src={selectedCoach.image} alt={selectedCoach.name} className="w-full h-full object-cover" />
//                             </div>
//                             <div>
//                                 <h1 className="text-3xl md:text-5xl font-bold">{selectedCoach.name}</h1>
//                                 <p className="text-white">Date of Birth: {new Date(selectedCoach.dateOfBirth).toLocaleDateString()}</p>
//                             </div>
//                         </div>

//                         <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md">
                           

//                             <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md">
//     <h3 className="text-xl font-semibold text-white">Coach Information</h3>
//     <div className="overflow-x-auto">
//         <table className="min-w-full bg-gray-900 rounded-lg text-left">
//             <tbody>
//                 <tr>
//                     <td className="py-2 px-4 text-gray-400 font-semibold">Contact:</td>
//                     <td className="py-2 px-4">{selectedCoach.contactNo}</td>
//                 </tr>
//                 <tr>
//                     <td className="py-2 px-4 text-gray-400 font-semibold">Email:</td>
//                     <td className="py-2 px-4">{selectedCoach.email}</td>
//                 </tr>
//                 <tr>
//                     <td className="py-2 px-4 text-gray-400 font-semibold">Address:</td>
//                     <td className="py-2 px-4">{selectedCoach.address}</td>
//                 </tr>
//                 <tr>
//                     <td className="py-2 px-4 text-gray-400 font-semibold">Description:</td>
//                     <td className="py-2 px-4">{selectedCoach.description}</td>
//                 </tr>
              
//             </tbody>
//         </table>
//     </div>
// </div>


//                         </div>

//                         {/* Practice Schedules Table */}
//                         <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md">
//                             <h3 className="text-xl font-semibold text-white">Practice Schedules</h3>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full bg-gray-900 rounded-lg">
//                                     <thead>
//                                         <tr>
//                                             <th className="py-2 px-4 text-center text-gray-400">Venue</th>
//                                             <th className="py-2 px-4 text-center text-gray-400">Start Time</th>
//                                             <th className="py-2 px-4 text-center text-gray-400">End Time</th>
//                                             <th className="py-2 px-4 text-center text-gray-400">Type</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {practiceSchedulesData.map((schedule) => (
//                                             <tr key={schedule.pracId}>
//                                                 <td className="py-2 px-4 text-center">{schedule.venue}</td>
//                                                 <td className="py-2 px-4 text-center">{schedule.starTime}</td>
//                                                 <td className="py-2 px-4 text-center">{schedule.endTime}</td>
//                                                 <td className="py-2 px-4 text-center">{schedule.pracType}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CoachesProfile;

import React, { useState, useEffect } from "react";
import Navbar from "../components/MemberNavbar";
import backgroundImage from '../assets/images/flag.png';
import Footer from "../components/Footer";
import coachPlaceholderImage from '../assets/images/dana.jpeg';

const CoachesProfile = () => {
    const [coachesData, setCoachesData] = useState([]);
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [practiceSchedulesData, setPracticeSchedulesData] = useState([]);
    const [showCoachList, setShowCoachList] = useState(false); // For mobile responsiveness
    const API_URL = process.env.REACT_APP_API_URL;
    const accessToken = localStorage.getItem('accessToken');
  

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchCoachesData = async () => {
            try {
                const response = await fetch(`${API_URL}coaches/all`,{
                    method: 'GET',
                    headers: {
                         Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                }, });
                const data = await response.json();
                setCoachesData(data);
                setSelectedCoach(data[0]); // Set the first coach as default
            } catch (error) {
                console.error("Error fetching coaches:", error);
            }
        };

        fetchCoachesData();
    }, []);

    // Fetch practice sessions when selectedCoach changes
//     useEffect(() => {
//         if (selectedCoach) {
//             const fetchPracticeSessions = async () => {
                
//   console.log("Fetching practice schedules for coach:", selectedCoach.coachId);
//                 try {
//                     const response = await fetch(
//                         `${API_URL}practiseSessions/coach/${selectedCoach.coachId}`,{
//                             method: 'GET',
//                             headers: {
//                                  Authorization: `Bearer ${accessToken}`,
//                                 'Content-Type': 'application/json',
//                                 'Accept': 'application/json',
//                         }, }
//                     );
//                     const data = await response.json();
//                     setPracticeSchedulesData(data);
//                 } catch (error) {
//                     console.error("Error fetching practice sessions:", error);
//                 }
//             };

//             fetchPracticeSessions();
//         }
//     }, [selectedCoach]);

// Fetch practice sessions when selectedCoach changes
useEffect(() => {
    if (selectedCoach) {
        const fetchPracticeSessions = async () => {
            // console.log("Fetching practice schedules for coach:", selectedCoach.coachId);

            try {
                const response = await fetch(
                    `${API_URL}practiseSessions/coach/${selectedCoach.coachId}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    console.error("Failed to fetch practice schedules:", response.status, response.statusText);
                    setPracticeSchedulesData([]); // Set to empty if there's an error
                    return;
                }

                // Check if the response has content
                const text = await response.text();
                if (text) {
                    const data = JSON.parse(text);
                    // console.log("Fetched practice schedules data:", data);
                    setPracticeSchedulesData(data);
                } else {
                    console.log("No practice schedules found for this coach.");
                    setPracticeSchedulesData([]); // No schedules available
                }
            } catch (error) {
                console.error("Error fetching practice schedules:", error);
                setPracticeSchedulesData([]); // Set to empty in case of an error
            }
        };

        fetchPracticeSessions();
    }
}, [selectedCoach]);


    if (!selectedCoach) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-400 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen pt-20">
                {/* Mobile Player List Toggle */}
                <div className="md:hidden top-20 left-0 right-0 bg-gray-200 p-4 rounded-lg shadow-md z-10">
                    <button 
                        onClick={() => setShowCoachList(!showCoachList)} 
                        className="text-black font-bold flex justify-between items-center w-full"
                    >
                        Our Coaches
                        <span>{showCoachList ? '-' : '+'}</span>
                    </button>
                    {showCoachList && (
                        <div className="mt-4">
                            <ul className="space-y-3 text-black">
                                {coachesData.map((coach) => (
                                    <li 
                                        key={coach.coachId} 
                                        className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${coach.coachId === selectedCoach?.coachId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} 
                                        onClick={() => { setSelectedCoach(coach); setShowCoachList(false); }}
                                    >
                                        <img src={`${`http://rcc.dockyardsoftware.com/images/${ coach.image ? coach.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={coach.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                                        {coach.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="justify-center w-full px-4 md:px-10">
                    <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mt-4 mb-8">
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-48 object-cover opacity-75"
                        />
                        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-4 md:px-20 py-6 space-y-4 md:space-y-0">
                            {/* Profile Image Container */}
                            <div className="relative flex-shrink-0 mb-4 md:mb-0">
                                <img
                                    src={`${`http://rcc.dockyardsoftware.com/images/${ selectedCoach?.image ? selectedCoach.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                                    alt={selectedCoach?.name}
                                    className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover mt-0"
                                />
                            </div>
                            <div className="text-center md:text-left md:ml-8">
                            <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">{selectedCoach?.name}</h1>
                            <p className="text-gray-400 text-sm md:text-3xl mt-1 md:mt-2">
                                Date of Birth:{" "}
                                {new Date(selectedCoach.dateOfBirth).toLocaleDateString()}  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 justify-center px-10 md:flex-row flex-col">
                    {/* Player List for desktop */}
                    <div className="md:flex hidden bg-gray-200 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0, maxHeight: '469px', flexDirection: 'column' }}>
                        <div className="p-4 border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 text-center">Our Coaches</h2>
                        </div>
                        <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: 'calc(500px - 64px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
                                {coachesData.map((coach) => (
                                    <li key={coach.coachId} className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${coach.coachId === selectedCoach?.coachId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} onClick={() => setSelectedCoach(coach)}>
                                        <img src={`${`http://rcc.dockyardsoftware.com/images/${ coach.image ? coach.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={coach.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                                        {coach.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    {selectedCoach && (
                        <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6 table-auto">
                                        <tbody>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
                                                <td className="py-2 px-5">{selectedCoach.name}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
                                                <td className="py-2 px-5">{selectedCoach.dateOfBirth}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
                                                <td className="py-2 px-5">{selectedCoach.email}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
                                                <td className="py-2 px-5">{selectedCoach.contactNo}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Coach Status:</td>
                                                <td className="py-2 px-5">{selectedCoach.status}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Description:</td>
                                                <td className="py-2 px-5">{selectedCoach.description}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
                                <h2 className="text-xl font-bold mb-4 text-center text-[black]">Practice Schedules</h2>
                                {/* Batting Stats Table */}
                                <div className="overflow-x-auto">
                                <table className="min-w-full bg-gradient-to-r bg-white to-[#480D35] rounded-lg">
                                    <thead>
                                        <tr className=" bg-gradient-to-r from-[#00175f] to-[#480D35]">
                                            <th className="py-2 px-4 text-center text-white">
                                                Venue
                                            </th>
                                            <th className="py-2 px-4 text-center text-white">
                                                Start Time
                                            </th>
                                            <th className="py-2 px-4 text-center text-white">
                                                End Time
                                            </th>
                                            <th className="py-2 px-4 text-center text-white">
                                                Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {practiceSchedulesData.map((schedule) => (
                                            <tr key={schedule.pracId}>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.venue}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.startTime}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.endTime}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.pracType}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>



                              
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachesProfile;
