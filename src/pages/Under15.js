// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/MemberNavbar';
// import backgroundImage from '../assets/images/flag.png';
// import playerPlaceholderImage from '../assets/images/defaultPlayer.jpg'; // Placeholder image
// import Footer from '../components/Footer';


// const PlayerProfile = () => {
//     const [players, setPlayers] = useState([]); // Stores list of players
//     const [selectedPlayer, setSelectedPlayer] = useState(null); // Stores currently selected player
//     const [playerStat, setPlayerStat] = useState([]); // Stores stats for the selected player
//     const [showPlayerList, setShowPlayerList] = useState(false); // Toggle for mobile player list
  
 
//    const accessToken = localStorage.getItem('accessToken');
//    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year
//    const API_URL = process.env.REACT_APP_API_URL;
 
//     const [filterUnder, setFilterUnder] = useState("");
//      const [filterYear, setFilterYear] = useState("");
//        const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
//     // Safely retrieve the access token
// //   const tokenString = localStorage.getItem("user"); // Assuming 'user' contains the token object
// //   const tokenData = tokenString ? JSON.parse(tokenString) : null; // Parse only if the string exists
// //   const accessToken = tokenData?.token || ""; // Safely extract the token
// //   console.log("Access Token:", accessToken);
//     //Fetch all players from the API when the component mounts or selectedYear changes
//     useEffect(() => {
//         const fetchPlayers = async () => {
//             try {
//                 const response = await fetch(`${API_URL}admin/players/all`,{
//                     headers: {
//                          Authorization: `Bearer ${accessToken}`,
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json',
//                 }, });
//                 const data = await response.json();

//                 // Filter players who are part of "Under 13" in the selected year
//                 const under13Players = data.filter((player) =>
//                     player.teamDetails &&
//                     player.teamDetails.some(
//                         (team) => team.under === "Under 15" && parseInt(team.year, 10) === selectedYear
//                     )
//                 );

//                 setPlayers(under13Players);

//                 // Set default selected player if data exists
//                 if (under13Players.length > 0) {
//                     setSelectedPlayer(under13Players[0]); // Select first player by default
//                 }
//             } catch (error) {
//                 console.error('Error fetching player data:', error);
//             }
//         };

//         fetchPlayers();
//     }, [selectedYear]);

    
   
//     useEffect(() => {
//         const fetchPlayerStats = async () => {
//             if (selectedPlayer) {
//                 try {

//                     const response = await fetch(`${API_URL}playerStats/all-stats/${selectedPlayer.playerId}`,{
//                         method: 'GET',
//                         headers: {
//                              Authorization: `Bearer ${accessToken}`,
//                             'Content-Type': 'application/json',
//                             'Accept': 'application/json',
//                     }, });

//                     const data = await response.json();
//                     // console.log('Fetched player stats:', data); // Log the fetched response data
//                     setPlayerStat(data); // No need to filter if all stats are relevant
//                 } catch (error) {
//                     console.error('Error fetching player stats:', error);
//                 }
//             }
//         };
    
      

//         // Fetch stats only if a player is selected
//         if (selectedPlayer) {
//             fetchPlayerStats();
//         }
//     }, [selectedPlayer]);

//     // Function to handle year selection change
//     const handleYearChange = (event) => {
//         setSelectedYear(parseInt(event.target.value, 10));
//     };

//     // Function to generate year options for the dropdown (e.g., last 10 years)
//     const getYearOptions = () => {
//         const currentYear = new Date().getFullYear();
//         return Array.from({ length: 10 }, (_, i) => (currentYear + 1) - i);
//     };


//     const resetFilters = () => {
//         setFilterUnder("");
//         setFilterYear("");
//       };
      
   
  
// // const summarizeStats = (type) => {

// //     if (!playerStat || !playerStat.length) {
// //       return {
// //         matches: 0,
// //         battingInnings: 0,
// //         bawlingInnings: 0,
// //         runs: 0,
// //         highestScore: 0,
// //         avg: 0,
// //         sr: 0,
// //         catches:0,
// //         stumps:0,
// //         runOuts:0,
// //         balls:0,
// //         "100s": 0,
// //         "50s": 0,
// //         "4s": 0,
// //         "6s": 0,
// //         overs:0,
// //         wickets:0,
// //         runsConceded:0,
// //         bawlingAvg:0,
// //         battingAvg:0,
// //         bestValue:'N/A',
// //         economyRate:0,
// //         bestWickets: 0,
// //         bestRunsConceded: Infinity,
        
// //       };
// //     }
// //     const filteredStats = playerStat.filter(
// //       (stat) => stat.match.type === type 
// //     );

// //   // Track unique innings for both batting and bowling
// //   const uniqueBowlingInnings = new Set();
// //   const uniqueBattingInnings = new Set();

// //   const summary = filteredStats.reduce(
// //     (acc, stat) => {
// //       acc.matches += 1;
// //       acc.balls += stat.balls || 0;
// //       acc["100s"] += stat.centuries || 0;
// //       acc["50s"] += stat.fifties || 0;
// //       acc["4s"] += stat.fours || 0;
// //       acc["6s"] += stat.sixers || 0;
// //       acc.overs += stat.overs || 0;
// //       acc.wickets += stat.wickets || 0;
// //       acc.runsConceded += stat.runsConceded || 0;
// //       acc.catches += stat.catches || 0;
// //       acc.stumps += stat.stumps || 0;
// //       acc.runOuts += stat.runOuts || 0;
// //       acc.runs += stat.runs || 0;

// //        // Unique identification of bowling innings
// //       if (stat.match.matchId && stat.inning) {
// //         uniqueBowlingInnings.add(`${stat.match.matchId}-${stat.inning}`);
// //       };

// //       // Count batting innings, excluding specific dismissals
// //       const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
// //       if (!excludedHowOuts.includes(stat.howOut) && stat.match.matchId && stat.inning) {
// //         uniqueBattingInnings.add(`${stat.match.matchId}-${stat.inning}`);
// //       };

// //       acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;

// //       const currentAverage = stat.wickets > 0 ? stat.runsConceded / stat.wickets : Infinity;
// //       acc.bestValue = Math.min(acc.bestValue, currentAverage);

// //       if (
// //         stat.wickets > acc.bestWickets ||
// //         (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
// //       ) {
// //         acc.bestWickets = stat.wickets;
// //         acc.bestRunsConceded = stat.runsConceded;
// //       }

// //       return acc;
// //     },
// //     {
// //       matches: 0,
// //       balls: 0,
// //       battingInnings: 0,
// //       bawlingInnings:0,
// //       runs: 0,
// //       highestScore: 0,
// //       avg: 0,
// //       sr: 0,

// //       overs:0,
// //       wickets:0,
// //       runsConceded:0,
// //       bawlingAvg:0,
// //       battingAvg:0,
// //       bestValue:Infinity,
// //       bestWickets: 0,
// //       bestRunsConceded: 0,
// //       economyRate:0,
// //       catches:0,
// //       stumps:0,
// //       runOuts:0,
// //       balls:0,

// //       "100s": 0,
// //       "50s": 0,
// //       "4s": 0,
// //       "6s": 0,



// //     }
// //   );
// //   console.log("Unique Bowling Innings:", uniqueBowlingInnings);
// //   console.log("Unique Batting Innings:", uniqueBattingInnings);
// //   summary.bawlingInnings = uniqueBowlingInnings.size;
// //   summary.battingInnings = uniqueBattingInnings.size;
// //   summary.battingAvg =
// //   summary.battingInnings > 0
// //   ? (summary.runs / summary.battingInnings).toFixed(2)
// //   : "N/A";

// //   summary.sr =
// //     summary.balls > 0
// //       ? ((summary.runs / summary.balls) * 100).toFixed(2)
// //       : "N/A";

// //   summary.bawlingAvg =
// //     summary.wickets > 0
// //       ? (summary.runsConceded / summary.wickets).toFixed(2)
// //       : "N/A";

// //   summary.economyRate =
// //     summary.overs > 0
// //       ? (summary.runsConceded / summary.overs).toFixed(2)
// //       : "N/A";

// //   summary.bestValue =
// //     summary.bestValue === Infinity ? "N/A" : summary.bestValue.toFixed(2);
// //   return summary;
// // };

// const summarizeStats = (type) => {

//     if (!playerStat || !playerStat.length) {
//       return {
//         matches: 0,
//         battingInnings: 0,
//         bawlingInnings: 0,
//         runs: 0,
//         highestScore: 0,
//         avg: 0,
//         sr: 0,
//         catches:0,
//         stumps:0,
//         runOuts:0,
//         balls:0,
//         "100s": 0,
//         "50s": 0,
//         "4s": 0,
//         "6s": 0,
//         overs:0,
//         wickets:0,
//         runsConceded:0,
//         bawlingAvg:0,
//         battingAvg:0,
//         bestValue:'N/A',
//         economyRate:0,
//         bestWickets: 0,
//         bestRunsConceded: 0,
        
//       };
//     }
//     const filteredStats = playerStat.filter(
//       (stat) => stat.match.type === type 
//     );
//     const uniqueMatches = new Set();
//   // Track unique innings for both batting and bowling
//   const uniqueBowlingInnings = new Set();
//   const uniqueBattingInnings = new Set();

//   const summary = filteredStats.reduce(
//     (acc, stat) => {
//         if (stat.match.matchId) {
//             uniqueMatches.add(stat.match.matchId);
//           }
     
//       acc.balls += stat.balls || 0;
//       acc["100s"] += stat.centuries || 0;
//       acc["50s"] += stat.fifties || 0;
//       acc["4s"] += stat.fours || 0;
//       acc["6s"] += stat.sixers || 0;
//       acc.overs += stat.overs || 0;
//       acc.wickets += stat.wickets || 0;
//       acc.runsConceded += stat.runsConceded || 0;
//       acc.catches += stat.catches || 0;
//       acc.stumps += stat.stumps || 0;
//       acc.runOuts += stat.runOuts || 0;
//       acc.runs += stat.runs || 0;

//        // Unique identification of bowling innings
//       if (stat.match.matchId && stat.inning) {
//         uniqueBowlingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//       };

//       // Count batting innings, excluding specific dismissals
//       const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
//       if (!excludedHowOuts.includes(stat.howOut) && stat.match.matchId && stat.inning) {
//         uniqueBattingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//       };

//       acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;

//     //   const currentAverage = stat.wickets > 0 ? stat.runsConceded / stat.wickets : Infinity;
//     //   acc.bestValue = Math.min(acc.bestValue, currentAverage);

//       if (
//         stat.wickets > acc.bestWickets ||
//         (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
//       ) {
//         acc.bestWickets = stat.wickets;
//         acc.bestRunsConceded = stat.runsConceded;
//       }

//       return acc;
//     },
//     {
//       matches: 0,
//       balls: 0,
//       battingInnings: 0,
//       bawlingInnings:0,
//       runs: 0,
//       highestScore: 0,
//       avg: 0,
//       sr: 0,

//       overs:0,
//       wickets:0,
//       runsConceded:0,
//       bawlingAvg:0,
//       battingAvg:0,
//       bestValue:Infinity,
//       bestWickets: 0,
//       bestRunsConceded: 0,
//       economyRate:0,
//       catches:0,
//       stumps:0,
//       runOuts:0,
//       balls:0,

//       "100s": 0,
//       "50s": 0,
//       "4s": 0,
//       "6s": 0,



//     }
//   );
// //   console.log("Unique Bowling Innings:", uniqueBowlingInnings);
// //   console.log("Unique Batting Innings:", uniqueBattingInnings);
//   summary.matches = uniqueMatches.size;
//   summary.bawlingInnings = uniqueBowlingInnings.size;
//   summary.battingInnings = uniqueBattingInnings.size;
//   summary.battingAvg =
//   summary.battingInnings > 0
//   ? (summary.runs / summary.battingInnings).toFixed(2)
//   : 0;

//   summary.sr =
//     summary.balls > 0
//       ? ((summary.runs / summary.balls) * 100).toFixed(2)
//       : 0;

//   summary.bawlingAvg =
//     summary.wickets > 0
//       ? (summary.runsConceded / summary.wickets).toFixed(2)
//       : 0;

//   summary.economyRate =
//     summary.overs > 0
//       ? (summary.runsConceded / summary.overs).toFixed(2)
//       : 0;

// //   summary.bestValue =
// //     summary.bestValue === Infinity ? "N/A" : summary.bestValue.toFixed(2);
// summary.bestValue =
// summary.bestWickets > 0
//   ? `${summary.bestWickets}/${summary.bestRunsConceded}`
//   : 0;
//   return summary;
// };




//     return (
//         <div className="bg-gray-400 min-h-screen text-white">
//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <div className="max-w-screen pt-20">
//                 {/* Mobile Player List Toggle - comes before Header Section */}
//                 {/* Mobile Player List Toggle - only visible on mobile screens */}
// <div className="md:hidden top-20 left-0 right-0 bg-gray-200 p-4 rounded-lg shadow-md z-10"> {/* Use md:hidden to hide on larger screens */}
//     <button 
//         onClick={() => setShowPlayerList(!showPlayerList)} 
//         className="text-black font-bold flex justify-between items-center w-full"
//     >
//         {/* Our Players
//         <span>{showPlayerList ? '-' : '+'}</span> */}
//             Our Players
//          {/* Year Dropdown */}
//          <div className="flex md:top-8 items-center gap-2 md:right-10">
//             <select
//                 value={selectedYear}
//                 onChange={handleYearChange}
//                 className=" bg-gradient-to-r from-[#000175] to-[#4A0D34] text-white font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:bg-[#00175F] focus:outline-none focus:ring-2 focus:ring-[#00175F] text-sm md:text-base mt-1"
//             >
//                 {getYearOptions().map((year) => (
//                     <option key={year} value={year} className="bg-[#000175] text-white hover:bg-[#4A0D34] focus:bg-[#4A0D34]">
//                         {year}
                        
//                     </option>
//                 ))}
//             </select>
//             <div className='rounded-full p-2 w-10 h-10 bg-black'>
//                 <span className=' text-white '>{showPlayerList ? '-' : '+'}</span>
//             </div>
            
//         </div>
//     </button>
//     {showPlayerList && (
//         <div className="mt-4">
//             <ul className="space-y-3 text-black">
//                 {players.map((player) => (
//                     <li 
//                         key={player.playerId} 
//                         className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} 
//                         onClick={() => { setSelectedPlayer(player); setShowPlayerList(false); }} // Close list when a player is selected
//                     >
//                         <img src={`${`http://rcc.dockyardsoftware.com/images/${ player.image ? player.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
//                         {player.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )}
// </div>

                

//                 <div className="justify-center w-full px-4 md:px-10">
//     <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mt-4 mb-8">
//         <img
//             src={backgroundImage}
//             alt="Background"
//             className="w-full h-48 object-cover opacity-75"
//         />
//         <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-4 md:px-20 py-6 space-y-4 md:space-y-0">
//             {/* Profile Image Container */}
//             <div className="relative flex-shrink-0 mb-4 md:mb-0">
//                 {players.length > 0 ? (<img
//                     src={`${`http://rcc.dockyardsoftware.com/images/${ selectedPlayer?.image ? selectedPlayer?.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
//                     alt={selectedPlayer?.name}
//                     className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover mt-0"
//                 />) : (<img
//                     src={ playerPlaceholderImage}
//                     alt="No image Available"
//                     className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover"
//                 />)}
//             </div>
//             <div className="text-center md:text-left md:ml-8">
              
//                 <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4"> {players.length > 0 ? (
//         <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">{selectedPlayer.name}</h1>
//     ) :  (
//             <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">No Player Available</h1>
        
//     )}</h1>
//                 <p className="text-gray-400 text-sm md:text-3xl mt-1 md:mt-2">
//                 Richmond Team Under 15 Year {selectedYear}
//                                 </p>
//             </div>
              
//         </div>
//     </div>
// </div>


            
//                 <div className="flex gap-6 justify-center px-10 md:flex-row flex-col">
//                     {/* Player List for desktop */}
//                     <div className="md:flex hidden bg-gray-200 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0, maxHeight: '469px', flexDirection: 'column' }}>
//                         {/* Fixed Heading */}
//                         {/* <div className="p-4 border-b text-black border-gray-100">
//                             <h2 className="text-xl font-bold text-gray-900 text-center">Our Players</h2>
//                         </div> */}
//                          {/* Fixed Heading */}
//                          <div className="px-5 py-4 flex justify-between items-center border-b text-black border-gray-100">
//                             <h2 className="text-xl font-bold text-gray-900 text-center">Our Players</h2>
//                              {/* Year Dropdown */}
//                             <div className="flex md:top-8 md:right-10">
//                                 <select
//                                     value={selectedYear}
//                                     onChange={handleYearChange}
//                                     className=" bg-gradient-to-r from-[#000175] to-[#4A0D34] text-white font-semibold py-2 px-4 md:py-2 md:px-5 rounded-lg shadow-md hover:bg-[#000175] focus:outline-none focus:ring-2 focus:ring-[#000175] text-sm md:text-base mt-1"
//                                 >
//                                     {getYearOptions().map((year) => (
//                                         <option key={year} value={year} className="bg-[#000175] text-white hover:bg-[#4A0D34] focus:bg-[#4A0D34]">
//                                             {year}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                         {/* Scrollable Player List */}
//                         <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: 'calc(500px - 64px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                         <p>
//     {!players.length ? (
//         <div className="max-w-screen pt-1  text-center text-red-950">
//             <h1 className="text-2xl">No players for Richmond Team Under 15 {selectedYear}</h1>
//         </div>
//     ) : null}
// </p>
//                             <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
//                                 {players.map((player) => (
//                                     <li key={player.playerId} className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} onClick={() => setSelectedPlayer(player)}>
//                                         <img src={`${`http://rcc.dockyardsoftware.com/images/${ player.image ? player.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
//                                         {player.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

                    // {/* Player Details */}
                    // {players.length > 0 && selectedPlayer && (
                    //     <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                    //         <div className="bg-gray-100 p-6 rounded-lg">
                    //             <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                    //             {/* Personal Info Table (responsive for mobile) */}
                    //             <div className="hover:overflow-x-auto overflow-x-hidden">
                    //                 <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6 table-auto">
                    //                     <tbody>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.name}</td>
                    //                         </tr>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.dateOfBirth}</td>
                    //                         </tr>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.email}</td>
                    //                         </tr>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
                    //                         </tr>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
                    //                         </tr>
                    //                         <tr className="border-b border-gray-300">
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
                    //                         </tr>
                    //                         <tr>
                    //                             <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
                    //                             <td className="py-2 px-5">{selectedPlayer.playerRole}</td>
                    //                         </tr>
                    //                     </tbody>
                    //                 </table>
                    //             </div>
                    //         </div>

//                             <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
//                                 <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>
//                                 {/* Batting Stats Table (responsive and elegant for mobile) */}
//                                 <div className="flex flex-col lg:flex-row lg:justify-center gap-4 mb-6 items-center">
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
//                                 <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Batting Stats</h3>
//                                 <div className="hover:overflow-x-auto overflow-x-hidden">
//                                     <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
//                                         <thead>
//                                             <tr className="bg-gray-100">
//                                                 <th className="py-2 px-5 text-center align-middle">Format</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Matches</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Innings</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Runs</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Highest Score</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Avg</th>
//                                                 <th className="py-2 px-5 text-center align-middle">SR</th>
//                                                 <th className="py-2 px-5 text-center align-middle">100s</th>
//                                                 <th className="py-2 px-5 text-center align-middle">50s</th>
//                                                 <th className="py-2 px-5 text-center align-middle">4s</th>
//                                                 <th className="py-2 px-5 text-center align-middle">6s</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                         {[ "2 Day", "3 Day", "1 Day", "T20" ]
//                                .map((type) => {
//                                  const summary = summarizeStats(type);
//                                  return { type, summary };
//                                })
//                                .filter(({ summary }) => summary.matches > 0) // Only keep rows with data
//                                .map(({ type, summary }) => (
//                                  <tr key={type} className="border-b border-gray-300">
//                                    <td className="py-2 px-5 text-center align-middle">{type}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.battingInnings}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.runs}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.highestScore}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.battingAvg}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.sr}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary["100s"]}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary["50s"]}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary["4s"]}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary["6s"]}</td>
//                                  </tr>
//                                ))}
//                            </tbody>
//                                     </table>
//                                 </div>

//                                 {/* Bowling Stats Table (responsive and elegant for mobile) */}
//                                    {/* Bowling Stats Table (responsive and elegant for mobile) */}
//                                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Bowling Stats</h3>
//                                 <div className="hover:overflow-x-auto overflow-x-hidden">
//                                     <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg table-auto">
//                                         <thead>
//                                             <tr className="bg-gray-100">
//                                                 <th className="py-2 px-5 text-center align-middle">Format</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Matches</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Inns</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Overs</th>
                                              
//                                                 <th className="py-2 px-5 text-center align-middle">Wickets</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Runs Conceded</th>
//                                                 <th className="py-2 px-5 text-center align-middle">No Ball</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Wide Ball</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Best</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Avg</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Economy Rate</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                         {[ "2 Day", "3 Day", "1 Day", "T20" ]
//                                .map((type) => {
//                                  const summary = summarizeStats(type);
//                                  return { type, summary };
//                                })
//                                .filter(({ summary }) => summary.matches > 0) // Only keep rows with data
//                                .map(({ type, summary }) => (
//                                  <tr key={type} className="border-b bg-white border-gray-300">
//                                  <td className="py-2 px-5 text-center align-middle">{type}</td>
                          
                               
//                           <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.bawlingInnings}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.overs}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.wickets}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.runsConceded}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.noBalls}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.wides}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.bestValue}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.bawlingAvg}</td>
//                           <td className="py-2 px-5 text-center align-middle">{summary.economyRate}</td>
//                              </tr>
//                                ))}
//                            </tbody>
//                                     </table>
//                                 </div>

//                                  {/* Fielding Stats */}

//                                  <br/>
//                                  <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Fielding Stats</h3>

//                                 <div className="hover:overflow-x-auto overflow-x-hidden">
//                                     <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
//                                         <thead>
//                                             <tr className="bg-gray-100">
//                                                 <th className="py-2 px-5 text-center align-middle">Format</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Matches</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Innings</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Catches</th>
//                                                 <th className="py-2 px-5 text-center align-middle">Stumps</th>
//                                                 <th className="py-2 px-5 text-center align-middle">RunOuts</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                              {[ "2 Day", "3 Day", "1 Day", "T20" ]
//                                .map((type) => {
//                                  const summary = summarizeStats(type);
//                                  return { type, summary };
//                                })
//                                .filter(({ summary }) => summary.matches > 0) // Only keep rows with data
//                                .map(({ type, summary }) => (
//                                    <tr key={type} className="border-b border-gray-300">
//                                    <td className="py-2 px-5 text-center align-middle">{type}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.bawlingInnings}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.catches}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.stumps}</td>
//                                    <td className="py-2 px-5 text-center align-middle">{summary.runOuts}</td>
//                                </tr>
//                                ))}
//                            </tbody>
                           
//                                     </table>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default PlayerProfile;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/MemberNavbar';
import backgroundImage from '../assets/images/flag.png';
import playerPlaceholderImage from '../assets/images/defaultPlayer.jpg'; // Placeholder image
import Footer from '../components/Footer';


const PlayerProfile = () => {
    const [players, setPlayers] = useState([]); // Stores list of players
    const [selectedPlayer, setSelectedPlayer] = useState(null); // Stores currently selected player
    const [playerStat, setPlayerStat] = useState([]); // Stores stats for the selected player
    const [showPlayerList, setShowPlayerList] = useState(false); // Toggle for mobile player list
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year
    const API_URL = process.env.REACT_APP_API_URL;
    const accessToken = localStorage.getItem('accessToken');
     const [filterUnder, setFilterUnder] = useState("");
      const [filterYear, setFilterYear] = useState("");
        const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  
    // Fetch all players from the API when the component mounts or selectedYear changes
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${API_URL}admin/players/all`,{
                    method: 'GET',
                    headers: {
                         Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                }, });
                const data = await response.json();

                // Filter players who are part of "Under 13" in the selected year
                const under13Players = data.filter((player) =>
                    player.teamDetails &&
                    player.teamDetails.some(
                        (team) => team.under === "Under 15" && parseInt(team.year, 10) === selectedYear
                    )
                );

                setPlayers(under13Players);

                // Set default selected player if data exists
                if (under13Players.length > 0) {
                    setSelectedPlayer(under13Players[0]); // Select first player by default
                }
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchPlayers();
    }, [selectedYear]);

    
   
    
    // Fetch player stats based on the selected player
    useEffect(() => {
        const fetchPlayerStats = async () => {
            if (selectedPlayer) {
                try {
                    const response = await fetch(`${API_URL}playerStats/all-stats/${selectedPlayer.playerId}`,{
                        method: 'GET',
                        headers: {
                             Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                    }, });
                    const data = await response.json();
                    setPlayerStat(data); // No need to filter if all stats are relevant
                } catch (error) {
                    console.error('Error fetching player stats:', error);
                }
            }
        };

        // Fetch stats only if a player is selected
        if (selectedPlayer) {
            fetchPlayerStats();
        }
    }, [selectedPlayer]);

    // Function to handle year selection change
    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value, 10));
    };

    // Function to generate year options for the dropdown (e.g., last 10 years)
    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 10 }, (_, i) => (currentYear + 1) - i);
    };



// const summarizeStats = (type) => {

//     if (!playerStat || !playerStat.length) {
//       return {
//         matches: 0,
//         battingInnings: 0,
//         bawlingInnings: 0,
//         runs: 0,
//         highestScore: 0,
//         avg: 0,
//         sr: 0,
//         catches:0,
//         stumps:0,
//         runOuts:0,
//         balls:0,
//         "100s": 0,
//         "50s": 0,
//         "4s": 0,
//         "6s": 0,
//         overs:0,
//         wickets:0,
//         runsConceded:0,
//         bawlingAvg:0,
//         battingAvg:0,
//         bestValue:'N/A',
//         economyRate:0,
//         bestWickets: 0,
//         bestRunsConceded: Infinity,
        
//       };
//     }
//     const filteredStats = playerStat.filter(
//       (stat) => stat.match.type === type 
//     );

//   // Track unique innings for both batting and bowling
//   const uniqueBowlingInnings = new Set();
//   const uniqueBattingInnings = new Set();

//   const summary = filteredStats.reduce(
//     (acc, stat) => {
//       acc.matches += 1;
//       acc.balls += stat.balls || 0;
//       acc["100s"] += stat.centuries || 0;
//       acc["50s"] += stat.fifties || 0;
//       acc["4s"] += stat.fours || 0;
//       acc["6s"] += stat.sixers || 0;
//       acc.overs += stat.overs || 0;
//       acc.wickets += stat.wickets || 0;
//       acc.runsConceded += stat.runsConceded || 0;
//       acc.catches += stat.catches || 0;
//       acc.stumps += stat.stumps || 0;
//       acc.runOuts += stat.runOuts || 0;
//       acc.runs += stat.runs || 0;

//        // Unique identification of bowling innings
//       if (stat.match.matchId && stat.inning) {
//         uniqueBowlingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//       };

//       // Count batting innings, excluding specific dismissals
//       const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
//       if (!excludedHowOuts.includes(stat.howOut) && stat.match.matchId && stat.inning) {
//         uniqueBattingInnings.add(`${stat.match.matchId}-${stat.inning}`);
//       };

//       acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;

//       const currentAverage = stat.wickets > 0 ? stat.runsConceded / stat.wickets : Infinity;
//       acc.bestValue = Math.min(acc.bestValue, currentAverage);

//       if (
//         stat.wickets > acc.bestWickets ||
//         (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
//       ) {
//         acc.bestWickets = stat.wickets;
//         acc.bestRunsConceded = stat.runsConceded;
//       }

//       return acc;
//     },
//     {
//       matches: 0,
//       balls: 0,
//       battingInnings: 0,
//       bawlingInnings:0,
//       runs: 0,
//       highestScore: 0,
//       avg: 0,
//       sr: 0,

//       overs:0,
//       wickets:0,
//       runsConceded:0,
//       bawlingAvg:0,
//       battingAvg:0,
//       bestValue:Infinity,
//       bestWickets: 0,
//       bestRunsConceded: Infinity,
//       economyRate:0,
//       catches:0,
//       stumps:0,
//       runOuts:0,
//       balls:0,

//       "100s": 0,
//       "50s": 0,
//       "4s": 0,
//       "6s": 0,



//     }
//   );
//   console.log("Unique Bowling Innings:", uniqueBowlingInnings);
//   console.log("Unique Batting Innings:", uniqueBattingInnings);
//   summary.bawlingInnings = uniqueBowlingInnings.size;
//   summary.battingInnings = uniqueBattingInnings.size;
//   summary.battingAvg =
//   summary.battingInnings > 0
//   ? (summary.runs / summary.battingInnings).toFixed(2)
//   : "N/A";

//   summary.sr =
//     summary.balls > 0
//       ? ((summary.runs / summary.balls) * 100).toFixed(2)
//       : "N/A";

//   summary.bawlingAvg =
//     summary.wickets > 0
//       ? (summary.runsConceded / summary.wickets).toFixed(2)
//       : "N/A";

//   summary.economyRate =
//     summary.overs > 0
//       ? (summary.runsConceded / summary.overs).toFixed(2)
//       : "N/A";

//   summary.bestValue =
//     summary.bestValue === Infinity ? "N/A" : summary.bestValue.toFixed(2);
//   return summary;
// };

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
        bestRunsConceded: 0,
        
      };
    }
    // const filteredStats = playerStat.filter(
    //   (stat) => stat.match.type === type 
    // );

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
      acc.noBalls += stat.noBalls || 0;
      acc.wides += stat.wides || 0;
      acc.wickets += stat.wickets || 0;
      acc.runsConceded += stat.runsConceded || 0;
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

    //   const currentAverage = stat.wickets > 0 ? stat.runsConceded / stat.wickets : Infinity;
    //   acc.bestValue = Math.min(acc.bestValue, currentAverage);

      if (
        stat.wickets > acc.bestWickets ||
        (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
      ) {
        acc.bestWickets = stat.wickets;
        acc.bestRunsConceded = stat.runsConceded;
      }

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
//   console.log("Unique Bowling Innings:", uniqueBowlingInnings);
//   console.log("Unique Batting Innings:", uniqueBattingInnings);
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

//   summary.bestValue =
//     summary.bestValue === Infinity ? "N/A" : summary.bestValue.toFixed(2);
summary.bestValue =
summary.bestWickets > 0
  ? `${summary.bestWickets}/${summary.bestRunsConceded}`
  : 0;
  return summary;
};



const resetFilters = () => {
    setFilterUnder("");
    setFilterYear("");
  };

  const togglePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };


    return (
        <div className="bg-gray-400 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen pt-20">
                {/* Mobile Player List Toggle - comes before Header Section */}
                {/* Mobile Player List Toggle - only visible on mobile screens */}
<div className="md:hidden top-20 left-0 right-0 bg-gray-200 p-4 rounded-lg shadow-md z-10"> {/* Use md:hidden to hide on larger screens */}
    <button 
        onClick={() => setShowPlayerList(!showPlayerList)} 
        className="text-black font-bold flex justify-between items-center w-full"
    >
        {/* Our Players
        <span>{showPlayerList ? '-' : '+'}</span> */}
          Our Players
         {/* Year Dropdown */}
         <div className="flex md:top-8 items-center gap-2 md:right-10">
            <select
                value={selectedYear}
                onChange={handleYearChange}
                className=" bg-gradient-to-r from-[#000175] to-[#4A0D34] text-white font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:bg-[#000175] focus:outline-none focus:ring-2 focus:ring-[#000175] text-sm md:text-base mt-1"
            >
                {getYearOptions().map((year) => (
                    <option key={year} value={year}  className="bg-[#000175] text-white hover:bg-[#4A0D34] focus:bg-[#4A0D34]">
                        {year}
                    </option>
                ))}
            </select>
            <div className='rounded-full p-2 w-10 h-10 bg-black'>
                <span className=' text-white '>{showPlayerList ? '-' : '+'}</span>
            </div>
            
        </div>
    </button>
    {showPlayerList && (
        <div className="mt-4">
            <ul className="space-y-3 text-black">
                {players.map((player) => (
                    <li 
                        key={player.playerId} 
                        className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} 
                        onClick={() => { setSelectedPlayer(player); setShowPlayerList(false); }} // Close list when a player is selected
                    >
                        <img src={`${`http://rcc.dockyardsoftware.com/images/${ player.image ? player.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                        {player.name}
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
                {players.length > 0 ? (<img
                    src={`${`http://rcc.dockyardsoftware.com/images/${ selectedPlayer?.image ? selectedPlayer?.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                    alt={selectedPlayer?.name}
                    className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover mt-0"
                />) : (<img
                    src={ playerPlaceholderImage}
                    alt="No image Available"
                    className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover"
                />)}
            </div>
            <div className="text-center md:text-left md:ml-8">
              
                <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4"> {players.length > 0 ? (
        <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">{selectedPlayer.name}</h1>
    ) :  (
            <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">No Player Available</h1>
        
    )}</h1>
                <p className="text-gray-400 text-sm md:text-3xl mt-1 md:mt-2">
                Richmond Legend Over 40s Year {selectedYear}
                                </p>
            </div>
               {/* Year Dropdown */}
               {/* <div className="absolute top-4 right-4 md:top-8 md:right-10">
                <p className="text-sm md:text-base"> Select the Year</p>
                            <select
                                value={selectedYear}
                                onChange={handleYearChange}
                                className="bg-gray-200 text-gray-900 font-semibold py-2 px-4 md:py-3 md:px-8 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base mt-1"
                            >
                                {getYearOptions().map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div> */}
        </div>
    </div>
</div>


            
                <div className="flex gap-6 justify-center px-10 md:flex-row flex-col">
                    {/* Player List for desktop */}
                    <div className="md:flex hidden bg-gray-200 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0, maxHeight: '469px', flexDirection: 'column' }}>
                        
                         {/* Fixed Heading */}
                         <div></div>
                         <div className="px-5 py-4 flex justify-between items-center border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 text-center">Our Players</h2>
                             {/* Year Dropdown */}
                            <div className="flex md:top-8 md:right-10">
                                <select
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                    className=" bg-gradient-to-r from-[#000175] to-[#4A0D34] text-white font-semibold py-2 px-4 md:py-2 md:px-5 rounded-lg shadow-md hover:bg-[#000175] focus:outline-none focus:ring-2 focus:ring-[#000175] text-sm md:text-base mt-1"
                                >
                                    {getYearOptions().map((year) => (
                                        <option key={year} value={year}  className="bg-[#000175] text-white hover:bg-[#4A0D34] focus:bg-[#4A0D34]">
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Scrollable Player List */}
                        <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: 'calc(500px - 64px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <p>
    {!players.length ? (
        <div className="max-w-screen pt-1  text-center text-red-950">
            <h1 className="text-2xl">No players for Richmond Legends over 40s {selectedYear}</h1>
        </div>
    ) : null}
</p>
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
                                {players.map((player) => (
                                    <li key={player.playerId} className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#00175F] hover:text-white ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} onClick={() => setSelectedPlayer(player)}>
                                        <img src={`${`http://rcc.dockyardsoftware.com/images/${ player.image ? player.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                                        {player.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    {players.length > 0 && selectedPlayer && (
                        <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                                {/* Personal Info Table (responsive for mobile) */}
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6 table-auto">
                                        <tbody>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
                                                <td className="py-2 px-5">{selectedPlayer.name}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
                                                <td className="py-2 px-5">{selectedPlayer.dateOfBirth}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
                                                <td className="py-2 px-5">{selectedPlayer.email}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
                                                <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
                                                <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
                                                <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
                                                <td className="py-2 px-5">{selectedPlayer.playerRole}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            


                            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
                                <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>
                                {/* Batting Stats Table (responsive and elegant for mobile) */}
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
                                <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Batting Stats</h3>
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Innings</th>
                                                <th className="py-2 px-5 text-center align-middle">Runs</th>
                                                <th className="py-2 px-5 text-center align-middle">Highest Score</th>
                                                <th className="py-2 px-5 text-center align-middle">Avg</th>
                                                <th className="py-2 px-5 text-center align-middle">SR</th>
                                                <th className="py-2 px-5 text-center align-middle">100s</th>
                                                <th className="py-2 px-5 text-center align-middle">50s</th>
                                                <th className="py-2 px-5 text-center align-middle">4s</th>
                                                <th className="py-2 px-5 text-center align-middle">6s</th>
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
                                 <tr key={type} className="border-b border-gray-300">
                                   <td className="py-2 px-5 text-center align-middle">{type}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.battingInnings}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.runs}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.highestScore}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.battingAvg}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.sr}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary["100s"]}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary["50s"]}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary["4s"]}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary["6s"]}</td>
                                 </tr>
                               ))}
                           </tbody>
                                    </table>
                                </div>

                                {/* Bowling Stats Table (responsive and elegant for mobile) */}
                                   {/* Bowling Stats Table (responsive and elegant for mobile) */}
                                   <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Bowling Stats</h3>
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Inns</th>
                                                <th className="py-2 px-5 text-center align-middle">Overs</th>
                                              
                                                <th className="py-2 px-5 text-center align-middle">Wickets</th>
                                                <th className="py-2 px-5 text-center align-middle">RC</th>
                                                <th className="py-2 px-5 text-center align-middle">No Ball</th>
                                                <th className="py-2 px-5 text-center align-middle">Wide Ball</th>
                                                <th className="py-2 px-5 text-center align-middle">Best</th>
                                                <th className="py-2 px-5 text-center align-middle">Avg</th>
                                                <th className="py-2 px-5 text-center align-middle">ER</th>
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
                                 <tr key={type} className="border-b bg-white border-gray-300">
                                 <td className="py-2 px-5 text-center align-middle">{type}</td>
                          
                               
                          <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.bawlingInnings}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.overs}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.wickets}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.runsConceded}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.noBalls}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.wides}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.bestValue}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.bawlingAvg}</td>
                          <td className="py-2 px-5 text-center align-middle">{summary.economyRate}</td>
                             </tr>
                               ))}
                           </tbody>
                                    </table>
                                </div>

                                 {/* Fielding Stats */}

                                 <br/>
                                 <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00175f] to-[#480D35] text-white p-2">Fielding Stats</h3>

                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Innings</th>
                                                <th className="py-2 px-5 text-center align-middle">Catches</th>
                                                <th className="py-2 px-5 text-center align-middle">Stumps</th>
                                                <th className="py-2 px-5 text-center align-middle">RunOuts</th>
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
                                   <tr key={type} className="border-b border-gray-300">
                                   <td className="py-2 px-5 text-center align-middle">{type}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.bawlingInnings}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.catches}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.stumps}</td>
                                   <td className="py-2 px-5 text-center align-middle">{summary.runOuts}</td>
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

export default PlayerProfile;