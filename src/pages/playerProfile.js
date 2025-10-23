
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MemberNavbar from '../components/MemberNavbar';
// import back from "../assets/images/flag.png";
// import flag from "../assets/images/backDrop.png";
// import Footer from '../components/Footer';
// import { message } from 'antd';
// import { FaXmark } from "react-icons/fa6";

// const PlayerProfile = () => {
//   const [playerProfile, setPlayerProfile] = useState(null);
//   const [playerStat, setPlayerStat] = useState(null);
//   const [filterUnder, setFilterUnder] = useState("");
//   const [filterYear, setFilterYear] = useState("");
//   const [practiceSessions, setPracticeSessions] = useState([]);
//   const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const user = JSON.parse(localStorage.getItem("user"));
//   const accessToken = localStorage.getItem('accessToken');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch player profile

//         const playerData = await axios.get(`${API_URL}admin/players/${user.playerId}`, { 
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         }});
//         setPlayerProfile(playerData.data);

//         // Fetch player stats
//         const playerStatData = await axios.get(`${API_URL}playerStats/all-stats/${user.playerId}`, { 
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         }});
//         setPlayerStat(playerStatData.data);

//         // Fetch practice sessions
//         const practiceSessionData = await axios.get(`${API_URL}practiseSessions/player/${user.playerId}`, { 
//           headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         }});

//         setPracticeSessions(practiceSessionData.data);

//         console.log("Player stats", playerStatData.data);
//         console.log("Player profile", playerData.data);
//       } catch (err) {
//         if (err.response) {
//           // Server responded with a status other than 200
//           console.error("Server Error:", err.response.data);
//           if (err.response.status === 404) {
//             message.error("Data not found for the given player.");
//           } else {
//             message.error("Failed to fetch data. Please try again later.");
//           }
//         } else if (err.request) {
//           // No response received
//           console.error("No response from server:", err.request);
//           message.error("No response from the server. Please check your network connection.");
//         } else {
//           // Other errors
//           console.error("Error:", err.message);
//           message.error("An unexpected error occurred.");
//         }
//       }
      
//     };

//   fetchData();

//   }, [API_URL, user.playerId]);

//     const summarizeStats = (type) => {

//       if (!playerStat || !playerStat.length) {
//         return {
//           matches: 0,
//           battingInnings: 0,
//           bawlingInnings: 0,
//           runs: 0,
//           highestScore: 0,
//           avg: 0,
//           sr: 0,
//           catches:0,
//           stumps:0,
//           runOuts:0,
//           balls:0,
//           "100s": 0,
//           "50s": 0,
//           "4s": 0,
//           "6s": 0,
//           overs:0,
//           wickets:0,
//           runsConceded:0,
//           bawlingAvg:0,
//           battingAvg:0,
//           bestValue:'N/A',
//           economyRate:0,
//           bestWickets: 0,
//           bestRunsConceded:0,
          
//         };
//       }
//       const filteredStats = playerStat.filter(
//         (stat) => stat.match.type === type &&
//         (filterUnder ? stat.match.under === filterUnder : true) &&
//         (filterYear ? stat.match.year === parseInt(filterYear) : true)
//       );
//     const uniqueMatches = new Set();
//     // Track unique innings for both batting and bowling
//     const uniqueBowlingInnings = new Set();
//     const uniqueBattingInnings = new Set();

//     const summary = filteredStats.reduce(
//       (acc, stat) => {
//         if (stat.match.matchId) {
//           uniqueMatches.add(stat.match.matchId);
//         }
//         acc.balls += stat.balls || 0;
//         acc["100s"] += stat.centuries || 0;
//         acc["50s"] += stat.fifties || 0;
//         acc["4s"] += stat.fours || 0;
//         acc["6s"] += stat.sixers || 0;
//         acc.overs += stat.overs || 0;
//         acc.wickets += stat.wickets || 0;
//         acc.runsConceded += stat.runsConceded || 0;
//         acc.catches += stat.catches || 0;
//         acc.stumps += stat.stumps || 0;
//         acc.runOuts += stat.runOuts || 0;
//         acc.runs += stat.runs || 0;

//          // Unique identification of bowling innings
//         if (stat.match.matchId && stat.inning) {
//           uniqueBowlingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//         };

//         // Count batting innings, excluding specific dismissals
//         const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
//         if (!excludedHowOuts.includes(stat.howOut) && stat.match.matchId && stat.inning) {
//           uniqueBattingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//         };

//         acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;
//         if (
//           stat.wickets > acc.bestWickets ||
//           (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
//         ) {
//           acc.bestWickets = stat.wickets;
//           acc.bestRunsConceded = stat.runsConceded;
//         };

//         return acc;
//       },
//       {
//         matches: 0,
//         balls: 0,
//         battingInnings: 0,
//         bawlingInnings:0,
//         runs: 0,
//         highestScore: 0,
//         avg: 0,
//         sr: 0,

//         overs:0,
//         wickets:0,
//         runsConceded:0,
//         bawlingAvg:0,
//         battingAvg:0,
//         bestValue:Infinity,
//         bestWickets: 0,
//         bestRunsConceded: 0,
//         economyRate:0,
//         catches:0,
//         stumps:0,
//         runOuts:0,
//         balls:0,

//         "100s": 0,
//         "50s": 0,
//         "4s": 0,
//         "6s": 0,



//       }
//     );
//     console.log("Unique Bowling Innings:", uniqueBowlingInnings);
//     console.log("Unique Batting Innings:", uniqueBattingInnings);
//     summary.matches = uniqueMatches.size;
//     summary.bawlingInnings = uniqueBowlingInnings.size;
//     summary.battingInnings = uniqueBattingInnings.size;
//     summary.battingAvg =
//     summary.battingInnings > 0
//     ? (summary.runs / summary.battingInnings).toFixed(2)
//     : 0;

//     summary.sr =
//       summary.balls > 0
//         ? ((summary.runs / summary.balls) * 100).toFixed(2)
//         : 0;

//     summary.bawlingAvg =
//       summary.wickets > 0
//         ? (summary.runsConceded / summary.wickets).toFixed(2)
//         : 0;

//     summary.economyRate =
//       summary.overs > 0
//         ? (summary.runsConceded / summary.overs).toFixed(2)
//         : 0;

//     summary.bestValue =
//     summary.bestWickets > 0
//       ? `${summary.bestWickets}/${summary.bestRunsConceded}`
//       : 0;
//     return summary;
//   };

//   const calculateAge = (dob) => {
//         console.log("dob:", dob);
//         const birthDate = new Date(dob); // Parses the YYYY-MM-DD format
//         const today = new Date();
//         const age = today.getFullYear() - birthDate.getFullYear();
//         const monthDifference = today.getMonth() - birthDate.getMonth();
      
//         // Adjust if the birthday hasn't occurred yet this year
//         if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//           return age - 1;
//         }
//         return age;
//       };


//   const resetFilters = () => {
//     setFilterUnder("");
//     setFilterYear("");
//   };

//   const togglePopup = () => {
//     setIsProfilePopupOpen(!isProfilePopupOpen);
//   };


//   return (
//     <>
//       <div
//         className="flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-black w-full"
//         style={{
//           backgroundImage: `url(${flag})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <MemberNavbar />

//           {/* Batting, Bowling, and Fielding Stats Tables */}

//             {/* Player Details */}
//             <div
//               className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
//               style={{
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)",
//               }}
//             >
//               <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
//                 Player Profile
//               </h1>
//               <div
//                 className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
//                 style={{
//                   backgroundImage:` url(${back})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="relative top-10 rounded-full w-full h-full flex items-center justify-center">
//                   <div className=" -top-5 -left-5 absolute flex flex-col ">
//                     <h1 className="lg:text-4xl font-bold text-white">{playerProfile?.name}</h1>
//                     {playerProfile?.dateOfBirth && (
//                       <p className="lg:text-xl text-sm text-white">{calculateAge(playerProfile.dateOfBirth)} years old</p>
//                     )}
//                   </div>

//                   {playerProfile && 
//                   <div className="relative ">
//                       <img
//                         src={`http://rcc.dockyardsoftware.com/images/${ playerProfile.image ? playerProfile.image.split('/').pop() : 'default.jpg'}`}
//                         alt={playerProfile?.name}
//                         className=" flex w-32 h-32 rounded-full object-cover cursor-pointer border-2 bg-white border-gray-300 text-gray-400 hover:border-[#480D35]"
//                         onClick={togglePopup}
//                       />
//                    </div>
//                    }
                  
                  
//                 </div>
                
//               </div>
//               <div className="flex items-center pt-5 justify-center">
//               <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
//                 <h2 className="text-xl font-bold mb-4 text-black text-center">
//                   Personal Information
//                 </h2>
//                 {/* Personal Info Table */}
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
//                   <tbody>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Name:</td>
//                       <td className="py-2 px-5">{playerProfile?.name}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Date of Birth:</td>
//                       <td className="py-2 px-5">
//                         {playerProfile?.dateOfBirth}
//                       </td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Email:</td>
//                       <td className="py-2 px-5">{playerProfile?.email}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Contact No:</td>
//                       <td className="py-2 px-5">
//                         {playerProfile?.contactNo}
//                       </td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Batting Style:</td>
//                       <td className="py-2 px-5">{playerProfile?.battingStyle}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Bowling Style:</td>
//                       <td className="py-2 px-5">{playerProfile?.bowlingStyle}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Role:</td>
//                       <td className="py-2 px-5">{playerProfile?.playerRole}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 </div>
//               </div>
//               </div>
//               {/* The statistics section will remain as is, assuming it doesn't depend on the selectedPlayer */}
//               <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-4 text-center">
//                   Player Statistics
//                 </h2>
//                 <div className="flex flex-col lg:flex-row lg:justify-center gap-4 mb-6 items-center">
//                   <select
//                     value={filterUnder}
//                     onChange={(e) => setFilterUnder(e.target.value)}
//                     className="px-4 py-2 border rounded-md w-full lg:w-auto"
//                   >
//                     <option value="">Select Under</option>
//                     {[...new Set(playerStat?.map((stat) => stat.match.under))].map((under) => (
//                       <option key={under} value={under}>
//                         {under}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     value={filterYear}
//                     onChange={(e) => setFilterYear(e.target.value)}
//                     className="px-4 py-2 border rounded-md w-full lg:w-auto"
//                   >
//                     <option value="">Select Year</option>
//                     {[...new Set(playerStat?.map((stat) => stat.match.year))].map((year) => (
//                       <option key={year} value={year}>
//                         {year}
//                       </option>
//                     ))}
//                   </select>
//                   <button
//                     onClick={resetFilters}
//                     className="px-4 py-2 bg-[#00175F] text-white rounded-md w-full lg:w-auto"
//                   >
//                     Reset
//                   </button>
//                 </div>
//                 {/* Batting Stats */}
//                 <h3 className="text-md text-white bg-gradient-to-r from-[#00175f] to-[#480D35] p-2 font-bold mb-3">
//                   Batting Stats
//                 </h3>
//                 {/* Assuming the data structure of selectedPlayer.stats */}
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Format
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Matches
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Innings
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Runs
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Highest Score
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Avg
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         SR
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         100s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         50s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         4s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         6s
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {["3 Day", "2 Day" ,"ODI", "T20"].map((type) => {
                      
//                       const summary = summarizeStats(type);
//                       return (
//                         <tr
//                           key={type}
//                           className="border-b border-gray-300"
//                         >
//                           <td className="py-2 px-5 text-center align-middle">
//                             {type}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.matches}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.battingInnings}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.runs}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.highestScore}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.battingAvg}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.sr}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["100s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["50s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["4s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["6s"]}
//                           </td>
//                         </tr>
//                       )})}
//                   </tbody>
//                 </table>
//               </div>

//               <h3 className="text-md font-bold w-full p-2 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white mb-3">Bowling Stats</h3>
//               <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg mb-6">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Format
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Matches
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Innings
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Overs
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Wickets
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Runs Conceded
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Best
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Avg
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Economy Rate
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {["3 Day", "2 Day" ,"ODI", "T20"].map((type) => {
//                       const summary = summarizeStats(type);
//                       return (
//                         <tr
//                           key={type}
//                           className="border-b bg-white border-gray-300"
//                         >
//                           <td className="py-2 px-5 text-center align-middle">
//                             {type}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.matches}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.bawlingInnings}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.overs}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.wickets}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.runsConceded}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.bestValue}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">

//                             {summary.bawlingAvg}

//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.economyRate}
//                           </td>
//                         </tr>
//                       )})}
//                   </tbody>
//                 </table>
//                 </div>

//                 <h3 className="text-md font-bold w-full bg-gradient-to-r from-[#00175f] to-[#480D35] p-2 text-white mb-3">Fielding Stats</h3>
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                   <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Format
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Matches
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Innings
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Catches
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Stumps
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           RunOuts
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                     {["3 Day", "2 Day" ,"ODI", "T20"].map((type) => {
//                         const summary = summarizeStats(type);
//                         return (
//                           <tr
//                             key={type}
//                             className="border-b bg-white border-gray-300"
//                           >
//                             <td className="py-2 px-5 text-center align-middle">
//                               {type}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.matches}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.bawlingInnings}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.catches}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.stumps}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.runOuts}
//                             </td>
//                           </tr>
//                         )})}
//                     </tbody>
//                   </table>
//                 </div>
//                 {/* Practice Sessions Table */}
//                 <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
//                   <h2 className="text-xl font-bold mb-4 text-center">Practice Sessions</h2>
//                   <div className="flex hover:overflow-x-auto overflow-x-hidden">
//                     <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="py-2 px-5 text-center">Date</th>
//                           <th className="py-2 px-5 text-center">Type</th>
//                           <th className="py-2 px-5 text-center">Start Time</th>
//                           <th className="py-2 px-5 text-center">End Time</th>
//                           <th className="py-2 px-5 text-center">Venue</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {practiceSessions.length > 0 ? (
//                           practiceSessions.map((session, index) => (
//                             <tr key={index} className="border-b border-gray-300">
//                               <td className="py-2 px-5 text-center">{session.date}</td>
//                               <td className="py-2 px-5 text-center">{session.pracType}</td>
//                               <td className="py-2 px-5 text-center">{session.startTime}</td>
//                               <td className="py-2 px-5 text-center">{session.endTime}</td>
//                               <td className="py-2 px-5 text-center">{session.venue}</td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td colSpan="5" className="py-2 px-5 text-center text-gray-500">
//                               No practice sessions available.
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//              </div>
//           </div>
//        <Footer />
//        {/* Popup Modal */}
//        {isProfilePopupOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//             <div className="relative bg-white rounded-lg p-4 shadow-lg">
//               <button
//                 className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//                 onClick={togglePopup} // Close the popup
//               >
//                 <FaXmark/>
//               </button>
//               <img
//                   src={`http://rcc.dockyardsoftware.com/images/${ playerProfile.image ? playerProfile.image.split('/').pop() : 'default.jpg'}`}
//                   alt={playerProfile?.name}
//                 className="w-full h-auto max-w-lg rounded-lg"
//               />
//             </div>
//           </div>
//         )}
//        </>


//   );
// };
// export default PlayerProfile;



import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberNavbar from '../components/MemberNavbar';
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import Footer from '../components/Footer';
import { message } from 'antd';
import { FaXmark } from "react-icons/fa6";

const PlayerProfile = () => {
  const [playerProfile, setPlayerProfile] = useState(null);
  const [playerStat, setPlayerStat] = useState(null);
  const [filterUnder, setFilterUnder] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [practiceSessions, setPracticeSessions] = useState([]);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch player profile

        const playerData = await axios.get(`${API_URL}admin/players/${user.playerId}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }});
        setPlayerProfile(playerData.data);

        // Fetch player stats
        const playerStatData = await axios.get(`${API_URL}playerStats/all-stats/${user.playerId}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }});
        setPlayerStat(playerStatData.data);

        // Fetch practice sessions
        const practiceSessionData = await axios.get(`${API_URL}practiseSessions/player/${user.playerId}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }});

        setPracticeSessions(practiceSessionData.data);

        console.log("Player stats", playerStatData.data);
        console.log("Player profile", playerData.data);
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200
          console.error("Server Error:", err.response.data);
          if (err.response.status === 404) {
            message.error("Data not found for the given player.");
          } else {
            message.error("Failed to fetch data. Please try again later.");
          }
        } else if (err.request) {
          // No response received
          console.error("No response from server:", err.request);
          message.error("No response from the server. Please check your network connection.");
        } else {
          // Other errors
          console.error("Error:", err.message);
          message.error("An unexpected error occurred.");
        }
      }
      
    };

  fetchData();

  }, [API_URL, user.playerId]);

    const summarizeStats = (type) => {

      if (!playerStat || !playerStat.length) {
        return {
          matches: 0,
          battingInnings: 0,
          bawlingInnings: 0,
          runs: 0,
          highestScore: 0,
          avg: 0,
          sr: 0,
          catches:0,
          stumps:0,
          runOuts:0,
          balls:0,
          "100s": 0,
          "50s": 0,
          "4s": 0,
          "6s": 0,
          overs:0,
          wickets:0,
          runsConceded:0,
          noBalls:0,
        
          wides:0,
          bawlingAvg:0,
          battingAvg:0,
          bestValue:'N/A',
          economyRate:0,
          bestWickets: 0,
          bestRunsConceded:0,
          
        };
      }
      const filteredStats = playerStat.filter(
        (stat) => stat.match.type === type &&
        (filterUnder ? stat.match.under === filterUnder : true) &&
        (filterYear ? stat.match.year === parseInt(filterYear) : true)
      );
    const uniqueMatches = new Set();
    // Track unique innings for both batting and bowling
    const uniqueBowlingInnings = new Set();
    const uniqueBattingInnings = new Set();

    const summary = filteredStats.reduce(
      (acc, stat) => {
        if (stat.match.matchId) {
          uniqueMatches.add(stat.match.matchId);
        }
        acc.balls += stat.balls || 0;
        acc["100s"] += stat.centuries || 0;
        acc["50s"] += stat.fifties || 0;
        acc["4s"] += stat.fours || 0;
        acc["6s"] += stat.sixers || 0;
        acc.overs += stat.overs || 0;
        acc.wickets += stat.wickets || 0;
        acc.runsConceded += stat.runsConceded || 0;
        acc.noBalls += stat.noBalls || 0;
        acc.wides += stat.wides || 0;
        acc.catches += stat.catches || 0;
        acc.stumps += stat.stumps || 0;
        acc.runOuts += stat.runOuts || 0;
        acc.runs += stat.runs || 0;

         // Unique identification of bowling innings
        if (stat.match.matchId && stat.inning) {
          uniqueBowlingInnings.add(`${stat.match.matchId}-${stat.inning}`);
        };

        // Count batting innings, excluding specific dismissals
        const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
        if (!excludedHowOuts.includes(stat.howOut) && stat.match.matchId && stat.inning) {
          uniqueBattingInnings.add(`${stat.match.matchId}-${stat.inning}`);
        };

        acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;
        if (
          stat.wickets > acc.bestWickets ||
          (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
        ) {
          acc.bestWickets = stat.wickets;
          acc.bestRunsConceded = stat.runsConceded;
        };

        return acc;
      },
      {
        matches: 0,
        balls: 0,
        battingInnings: 0,
        bawlingInnings:0,
        runs: 0,
        highestScore: 0,
        avg: 0,
        sr: 0,

        overs:0,
        wickets:0,
        runsConceded:0,
        noBalls:0,
        
        wides:0,
        bawlingAvg:0,
        battingAvg:0,
        bestValue:Infinity,
        bestWickets: 0,
        bestRunsConceded: 0,
        economyRate:0,
        catches:0,
        stumps:0,
        runOuts:0,
        balls:0,

        "100s": 0,
        "50s": 0,
        "4s": 0,
        "6s": 0,



      }
    );
    console.log("Unique Bowling Innings:", uniqueBowlingInnings);
    console.log("Unique Batting Innings:", uniqueBattingInnings);
    summary.matches = uniqueMatches.size;
    summary.bawlingInnings = uniqueBowlingInnings.size;
    summary.battingInnings = uniqueBattingInnings.size;
    summary.battingAvg =
    summary.battingInnings > 0
    ? (summary.runs / summary.battingInnings).toFixed(2)
    : 0;

    summary.sr =
      summary.balls > 0
        ? ((summary.runs / summary.balls) * 100).toFixed(2)
        : 0;

    summary.bawlingAvg =
      summary.wickets > 0
        ? (summary.runsConceded / summary.wickets).toFixed(2)
        : 0;

    summary.economyRate =
      summary.overs > 0
        ? (summary.runsConceded / summary.overs).toFixed(2)
        : 0;

    summary.bestValue =
    summary.bestWickets > 0
      ? `${summary.bestWickets}/${summary.bestRunsConceded}`
      : 0;
    return summary;
  };

  const calculateAge = (dob) => {
        console.log("dob:", dob);
        const birthDate = new Date(dob); // Parses the YYYY-MM-DD format
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
      
        // Adjust if the birthday hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          return age - 1;
        }
        return age;
      };


  const resetFilters = () => {
    setFilterUnder("");
    setFilterYear("");
  };

  const togglePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };


  return (
    <>
      <div
        className="flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-black w-full"
        style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MemberNavbar />

          {/* Batting, Bowling, and Fielding Stats Tables */}

            {/* Player Details */}
            <div
              className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
                Player Profile
              </h1>
              <div
                className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
                style={{
                  backgroundImage:` url(${back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative top-10 rounded-full w-full h-full flex items-center justify-center">
                  <div className=" -top-5 -left-5 absolute flex flex-col ">
                    <h1 className="lg:text-4xl font-bold text-white">{playerProfile?.name}</h1>
                    {playerProfile?.dateOfBirth && (
                      <p className="lg:text-xl text-sm text-white">{calculateAge(playerProfile.dateOfBirth)} years old</p>
                    )}
                  </div>

                  {playerProfile && 
                  <div className="relative ">
                      <img
                        src={`http://rcc.dockyardsoftware.com/images/${ playerProfile.image ? playerProfile.image.split('/').pop() : 'default.jpg'}`}
                        alt={playerProfile?.name}
                        className=" flex w-32 h-32 rounded-full object-cover cursor-pointer border-2 bg-white border-gray-300 text-gray-400 hover:border-[#480D35]"
                        onClick={togglePopup}
                      />
                   </div>
                   }
                  
                  
                </div>
                
              </div>
              <div className="flex items-center pt-5 justify-center">
              <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black text-center">
                  Personal Information
                </h2>
                {/* Personal Info Table */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                  <tbody>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Name:</td>
                      <td className="py-2 px-5">{playerProfile?.name}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Date of Birth:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Email:</td>
                      <td className="py-2 px-5">{playerProfile?.email}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Contact No:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Batting Style:</td>
                      <td className="py-2 px-5">{playerProfile?.battingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Bowling Style:</td>
                      <td className="py-2 px-5">{playerProfile?.bowlingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Role:</td>
                      <td className="py-2 px-5">{playerProfile?.playerRole}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
              {/* The statistics section will remain as is, assuming it doesn't depend on the selectedPlayer */}
              <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Player Statistics
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-4 mb-6 items-center">
                  <select
                    value={filterUnder}
                    onChange={(e) => setFilterUnder(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full lg:w-auto"
                  >
                    <option value="">Select Under</option>
                    {[...new Set(playerStat?.map((stat) => stat.match.under))].map((under) => (
                      <option key={under} value={under}>
                        {under}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full lg:w-auto"
                  >
                    <option value="">Select Year</option>
                    {[...new Set(playerStat?.map((stat) => stat.match.year))].map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-[#00175F] text-white rounded-md w-full lg:w-auto"
                  >
                    Reset
                  </button>
                </div>
                {/* Batting Stats */}
                <h3 className="text-md text-white bg-gradient-to-r from-[#00175f] to-[#480D35] p-2 font-bold mb-3">
                  Batting Stats
                </h3>
                {/* Assuming the data structure of selectedPlayer.stats */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Highest Score
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        SR
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        100s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        50s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        4s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        6s
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {["3 Day", "2 Day", "1 Day", "T20"]
  .map((type) => {
    const summary = summarizeStats(type);
    return { type, summary };
  })
  .filter(({ summary }) => summary.matches > 0) // Only show if matches > 0
  .map(({ type, summary }) => (
                        <tr
                          key={type}
                          className="border-b border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.battingInnings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.highestScore}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.battingAvg}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.sr}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["100s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["50s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["4s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["6s"]}
                          </td>
                        </tr>
                     ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-md font-bold w-full p-2 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white mb-3">Bowling Stats</h3>
              <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Overs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Wickets
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs Conceded
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                      No Ball
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                     Wide Ball
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Best
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        ERate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {[ "2 Day", "3 Day", "1 Day", "T20" ]
                               .map((type) => {
                                 const summary = summarizeStats(type);
                                 return { type, summary };
                               })
                               .filter(({ summary }) => summary.matches > 0) // Only keep rows with data
                               .map(({ type, summary }) => (
                        <tr
                          key={type}
                          className="border-b bg-white border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.bawlingInnings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.overs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.wickets}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runsConceded}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.noBalls}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.wides}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.bestValue}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">

                            {summary.bawlingAvg}

                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.economyRate}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                </div>

                <h3 className="text-md font-bold w-full bg-gradient-to-r from-[#00175f] to-[#480D35] p-2 text-white mb-3">Fielding Stats</h3>
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                  <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Format
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Matches
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Innings
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Catches
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Stumps
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          RunOuts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {[ "2 Day", "3 Day", "1 Day", "T20" ]
                               .map((type) => {
                                 const summary = summarizeStats(type);
                                 return { type, summary };
                               })
                               .filter(({ summary }) => summary.matches > 0) // Only keep rows with data
                               .map(({ type, summary }) => (
                          <tr
                            key={type}
                            className="border-b bg-white border-gray-300"
                          >
                            <td className="py-2 px-5 text-center align-middle">
                              {type}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.matches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.bawlingInnings}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.catches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.stumps}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.runOuts}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* Practice Sessions Table */}
                <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-center">Practice Sessions</h2>
                  <div className="flex hover:overflow-x-auto overflow-x-hidden">
                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-5 text-center">Date</th>
                          <th className="py-2 px-5 text-center">Type</th>
                          <th className="py-2 px-5 text-center">Start Time</th>
                          <th className="py-2 px-5 text-center">End Time</th>
                          <th className="py-2 px-5 text-center">Venue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {practiceSessions.length > 0 ? (
                          practiceSessions.map((session, index) => (
                            <tr key={index} className="border-b border-gray-300">
                              <td className="py-2 px-5 text-center">{session.date}</td>
                              <td className="py-2 px-5 text-center">{session.pracType}</td>
                              <td className="py-2 px-5 text-center">{session.startTime}</td>
                              <td className="py-2 px-5 text-center">{session.endTime}</td>
                              <td className="py-2 px-5 text-center">{session.venue}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="py-2 px-5 text-center text-gray-500">
                              No practice sessions available.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
             </div>
          </div>
       <Footer />
       {/* Popup Modal */}
       {isProfilePopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative bg-white rounded-lg p-4 shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={togglePopup} // Close the popup
              >
                <FaXmark/>
              </button>
              <img
                  src={`http://rcc.dockyardsoftware.com/images/${ playerProfile.image ? playerProfile.image.split('/').pop() : 'default.jpg'}`}
                  alt={playerProfile?.name}
                className="w-full h-auto max-w-lg rounded-lg"
              />
            </div>
          </div>
        )}
       </>


  );
};
export default PlayerProfile;

