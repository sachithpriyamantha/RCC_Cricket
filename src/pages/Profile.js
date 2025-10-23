
// import React, { useState } from 'react';
// import Navbar from '../components/MemberNavbar';
// import backgroundImage from '../assets/images/flag.png';
// import playersData from './PlayersData';

// const PlayerProfile = () => {
//     // Sort players alphabetically by fullName
//     const sortedPlayers = [...playersData].sort((a, b) => a.fullName.localeCompare(b.fullName));
//     const [selectedPlayer, setSelectedPlayer] = useState(sortedPlayers[0]);

//     return (
//         <div className="bg-gray-400 min-h-screen text-white">
//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <div className="max-w-screen pt-20">
//                 {/* Header Section */}
//                 <div className="justify-center w-full px-10">
//                     <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mb-8 lef-20" >
//                         <img
//                             src={backgroundImage}
//                             alt="Background"
//                             className="w-full h-48 object-cover opacity-75"
//                         />
//                         <div className="absolute inset-0 flex items-center left-20 px-20 py-6">
//                             {/* Profile Image Container */}
//                             <div className="relative flex-shrink-0">
//                                 <img
//                                     src={selectedPlayer.imageUrl}
//                                     alt={selectedPlayer.fullName}
//                                     className="h-40 w-40 rounded-full border-4 border-[#4A0D34] object-cover"
//                                 />
//                             </div>
//                             <div className="ml-8">
//                                 <h1 className="text-5xl font-bold">{selectedPlayer.fullName}</h1>
//                                 <p className="text-gray-400 text-xl">{selectedPlayer.careerStart} - {selectedPlayer.careerEnd || 'Present'}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex gap-6 justify-center px-10">
//                     {/* Player List */}
//                     <div 
//                         className="bg-gray-200 rounded-lg shadow-md" 
//                         style={{ 
//                             width: '350px', 
//                             flexShrink: 0, 
//                             marginTop: '-0px',  
//                             maxHeight: '469px',  
//                             display: 'flex',
//                             flexDirection: 'column',
//                         }}
//                     >
//                         {/* Fixed Heading */}
//                         <div className="p-4 border-b text-black border-gray-100">
//                             <h2 className="text-xl font-bold text-gray-900">Our Players</h2>
//                         </div>

//                         {/* Scrollable Player List */}
//                         <div 
//                             className="p-4 overflow-y-auto"
//                             style={{
//                                 flexGrow: 1,
//                                 maxHeight: 'calc(500px - 64px)', 
//                                 scrollbarWidth: 'none',  
//                                 msOverflowStyle: 'none',  
//                             }}
//                         >
//                             <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>  
//                                 {sortedPlayers.map((player) => (
//                                     <li
//                                         key={player.id}
//                                         className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${player.id === selectedPlayer.id ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`}
//                                         onClick={() => setSelectedPlayer(player)}
//                                     >
//                                         <img
//                                             src={player.imageUrl}
//                                             alt={player.fullName}
//                                             className="h-10 w-10 rounded-full mr-3 object-cover"
//                                         />
//                                         {player.fullName}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Player Details */}
//                     <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
//                         <div className="bg-gray-100 p-6 rounded-lg">
//                             <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
//                             {/* Personal Info Table */}
//                             <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
//                                 <tbody>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.fullName}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.birthDate}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.email}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-300">
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
//                                         <td className="py-2 px-5">{selectedPlayer.playingRole}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>

//                         <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
//                             <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>

//                             {/* Batting Stats */}
//                             <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
//                             <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
//                                 <thead>
//                                     <tr className="bg-gray-200">
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Innings</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Highest Score</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">SR</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">100s</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">50s</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">4s</th>
//                                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">6s</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {selectedPlayer.stats.map((stat) => (
//                                         <tr key={stat.format} className="border-b border-gray-300">
//                                             <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.runs}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.hs}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.avg}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat.sr}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat['100s']}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat['50s']}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat['4s']}</td>
//                                             <td className="py-2 px-5 text-center align-middle">{stat['6s']}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>

//                              {/* Bowling Stats */}
//         <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
//         <table className="min-w-full bg-white  border-gray-300 rounded-lg">
//             <thead>
//                 <tr className="bg-gray-200">
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Inns</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Overs</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Wickets</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs Conceded</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Best</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
//                     <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Economy Rate</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {selectedPlayer.bowlingStats.map((stat) => (
//                     <tr key={stat.format} className="border-b border-gray-300">
//                         <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.overs}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.wickets}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.runsConceded}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.best}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.average}</td>
//                         <td className="py-2 px-5 text-center align-middle">{stat.economyRate}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayerProfile;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/MemberNavbar';
// import backgroundImage from '../assets/images/flag.png';
// import playerPlaceholderImage from '../assets/images/dana.jpeg'; // Placeholder image

// const PlayerProfile = () => {
//     const [players, setPlayers] = useState([]);
//     const [selectedPlayer, setSelectedPlayer] = useState(null);

//     // Fetch player data from the API when the component mounts
//     useEffect(() => {
//         fetch("http://localhost:8080/api/admin/players/all")
//             .then((response) => response.json())
//             .then((data) => {
//                 const under13Players = data.filter((player) =>
//                     player.teamsUnder.includes("Under 13")
//                 );
//                 setPlayers(under13Players);
//                 if (under13Players.length > 0) {
//                     setSelectedPlayer(under13Players[0]);
//                 }
//             })
//             .catch((error) => console.error('Error fetching player data:', error));
//     }, []);

//     if (!players.length) {
//         return (
//             <div className="bg-gray-400 min-h-screen text-white">
//                 <Navbar />
//                 <div className="max-w-screen pt-20 text-center">
//                     <h1 className="text-4xl">Loading players...</h1>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-gray-400 min-h-screen text-white">
//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <div className="max-w-screen pt-20">
//                 {/* Header Section */}
//                 <div className="justify-center w-full px-10">
//                     <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mb-8 left-2">
//                         <img
//                             src={backgroundImage}
//                             alt="Background"
//                             className="w-full h-48 object-cover opacity-75"
//                         />
//                         <div className="absolute inset-0 flex items-center left-20 px-20 py-6">
//                             {/* Profile Image Container */}
//                             <div className="relative flex-shrink-0">
//                                 <img
//                                     src={selectedPlayer?.image || playerPlaceholderImage}
//                                     alt={selectedPlayer?.name}
//                                     className="h-40 w-40 rounded-full border-4 border-[#4A0D34] object-cover"
//                                 />
//                             </div>
//                             <div className="ml-8">
//                                 <h1 className="text-5xl font-bold">{selectedPlayer?.name}</h1> {/* Update the name */}
//                                 <p className="text-gray-400 text-xl">
//                                     {selectedPlayer?.startDate} - {selectedPlayer?.endDate === 'Present' || !selectedPlayer?.endDate ? 'Present' : selectedPlayer?.endDate}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex gap-6 justify-center px-10">
//                     {/* Player List */}
//                     <div
//                         className="bg-gray-200 rounded-lg shadow-md"
//                         style={{
//                             width: '350px',
//                             flexShrink: 0,
//                             maxHeight: '469px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                         }}
//                     >
//                         {/* Fixed Heading */}
//                         <div className="p-4 border-b text-black border-gray-100">
//                             <h2 className="text-xl font-bold text-gray-900">Our Players</h2>
//                         </div>

//                         {/* Scrollable Player List */}
//                         <div
//                             className="p-4 overflow-y-auto"
//                             style={{
//                                 flexGrow: 1,
//                                 maxHeight: 'calc(500px - 64px)',
//                                 scrollbarWidth: 'none',
//                                 msOverflowStyle: 'none',
//                             }}
//                         >
//                             <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
//                                 {players.map((player) => (
//                                     <li
//                                         key={player.playerId}
//                                         className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${
//                                             player.playerId === selectedPlayer?.playerId
//                                                 ? 'bg-gray-100 font-bold'
//                                                 : 'bg-gray-100'
//                                         }`}
//                                         onClick={() => setSelectedPlayer(player)}
//                                     >
//                                         <img
//                                             src={player.image || playerPlaceholderImage}
//                                             alt={player.name}
//                                             className="h-10 w-10 rounded-full mr-3 object-cover"
//                                         />
//                                         {player.name} {/* Display name in player list */}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Player Details */}
//                     {selectedPlayer && (
//                         <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
//                             <div className="bg-gray-100 p-6 rounded-lg">
//                                 <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
//                                 {/* Personal Info Table */}
//                                 <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
//                                     <tbody>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.name}</td> {/* Display name here */}
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.dateOfBirth}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.email}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
//                                         </tr>
//                                         <tr>
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.playerRole}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>

//                             <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
//                                 <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>

//                                 {/* Batting Stats */}
//                                 <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
//                                 <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
//                                     <thead>
//                                         <tr className="bg-gray-200">
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Innings</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Highest Score</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">SR</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">100s</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">50s</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">4s</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">6s</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {selectedPlayer?.stats?.map((stat) => (
//                                             <tr key={stat.format} className="border-b border-gray-300">
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.runs}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.hs}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.avg}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.sr}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat['100s']}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat['50s']}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat['4s']}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat['6s']}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>

//                                 {/* Bowling Stats */}
//                                 <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
//                                 <table className="min-w-full bg-white border-gray-300 rounded-lg">
//                                     <thead>
//                                         <tr className="bg-gray-200">
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Inns</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Overs</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Wickets</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs Conceded</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Best</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
//                                             <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Economy Rate</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {selectedPlayer?.bowlingStats?.map((stat) => (
//                                             <tr key={stat.format} className="border-b border-gray-300">
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.overs}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.wickets}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.runsConceded}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.best}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.average}</td>
//                                                 <td className="py-2 px-5 text-center align-middle">{stat.economyRate}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayerProfile;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/MemberNavbar';
// import backgroundImage from '../assets/images/flag.png';
// import playerPlaceholderImage from '../assets/images/dana.jpeg'; // Placeholder image

// const PlayerProfile = () => {
//     const [players, setPlayers] = useState([]);
//     const [selectedPlayer, setSelectedPlayer] = useState(null);
//     const [playerStat, setPlayerStat] = useState(null);

//     // Fetch player data from the API when the component mounts
//     useEffect(() => {
//         fetch("http://localhost:8080/api/admin/players/all")
//             .then((response) => response.json())
//             .then((data) => {
//                 const under13Players = data.filter((player) =>
//                     player.teamsUnder.includes("Under 13")
//                 );
//                 setPlayers(under13Players);
//                 if (under13Players.length > 0) {
//                     setSelectedPlayer(under13Players[0]);
//                 }
//             })
//             .catch((error) => console.error('Error fetching player data:', error));
//     }, []);

//     // Fetch player stats based on the selected player
//     useEffect(() => {
//         if (selectedPlayer) {
//             fetch(`http://localhost:8080/api/playerStats/all-stats/${selectedPlayer.playerId}`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     const under13PlayerStats = data.filter((stat) =>
//                         stat.teamsUnder.includes("Under 13")
//                     );
//                     setPlayerStat(under13PlayerStats);
//                 })
//                 .catch((error) => console.error('Error fetching player stats:', error));
//         }
//     }, [selectedPlayer]); // Runs whenever the selected player changes

//     if (!players.length) {
//         return (
//             <div className="bg-gray-400 min-h-screen text-white">
//                 <Navbar />
//                 <div className="max-w-screen pt-20 text-center">
//                     <h1 className="text-4xl">Loading players...</h1>
//                 </div>
//             </div>
//         );
//     }

//     const summarizeStats = (type) => {
//         if (!playerStat) {
//             return {
//                 matches: 0,
//                 innings: 0,
//                 runs: 0,
//                 highestScore: 0,
//                 avg: 0,
//                 sr: 0,
//                 "100s": 0,
//                 "50s": 0,
//                 "4s": 0,
//                 "6s": 0,
//             };
//         }
//         const filteredStats = playerStat.filter(
//             (stat) => stat.match.type === type
//         );

//         // Calculate summaries
//         const summary = filteredStats.reduce(
//             (acc, stat) => {
//                 acc.matches += stat.match.matchId.length || 0;
//                 acc.innings += stat.inning.length || 0;
//                 acc.runs += stat.runs || 0;
//                 acc.highestScore = Math.max(acc.highestScore, stat.highestScore);
//                 acc.battingAvg =
//                     acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
//                 acc.sr = (acc.runs / acc.innings).toFixed(2); // Simplified SR calculation
//                 acc["100s"] += stat.hundreds || 0;
//                 acc["50s"] += stat.fifties || 0;
//                 acc["4s"] += stat.fours || 0;
//                 acc["6s"] += stat.sixes || 0;
//                 acc.overs += stat.overs || 0;
//                 acc.wickets += stat.wickets || 0;
//                 acc.runsConceded += stat.runConceded || 0;
//                 acc.bowlingAvg =
//                     acc.overs > 0 ? (acc.runsConceded / acc.overs).toFixed(2) : 0;
//                 return acc;
//             },
//             {
//                 matches: 0,
//                 innings: 0,
//                 runs: 0,
//                 highestScore: 0,
//                 avg: 0,
//                 sr: 0,
//                 overs: 0,
//                 "100s": 0,
//                 "50s": 0,
//                 "4s": 0,
//                 "6s": 0,
//             }
//         );

//         return summary;
//     };

//     return (
//         <div className="bg-gray-400 min-h-screen text-white">
//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <div className="max-w-screen pt-20">
//                 {/* Header Section */}
//                 <div className="justify-center w-full px-10">
//                     <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mb-8 left-2">
//                         <img
//                             src={backgroundImage}
//                             alt="Background"
//                             className="w-full h-48 object-cover opacity-75"
//                         />
//                         <div className="absolute inset-0 flex items-center left-20 px-20 py-6">
//                             {/* Profile Image Container */}
//                             <div className="relative flex-shrink-0">
//                                 <img
//                                     src={selectedPlayer?.image || playerPlaceholderImage}
//                                     alt={selectedPlayer?.name}
//                                     className="h-40 w-40 rounded-full border-4 border-[#4A0D34] object-cover"
//                                 />
//                             </div>
//                             <div className="ml-8">
//                                 <h1 className="text-5xl font-bold">{selectedPlayer?.name}</h1>
//                                 <p className="text-gray-400 text-xl">
//                                     {selectedPlayer?.startDate} - {selectedPlayer?.endDate === 'Present' || !selectedPlayer?.endDate ? 'Present' : selectedPlayer?.endDate}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex gap-6 justify-center px-10">
//                     {/* Player List */}
//                     <div
//                         className="bg-gray-200 rounded-lg shadow-md"
//                         style={{
//                             width: '350px',
//                             flexShrink: 0,
//                             maxHeight: '469px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                         }}
//                     >
//                         {/* Fixed Heading */}
//                         <div className="p-4 border-b text-black border-gray-100">
//                             <h2 className="text-xl font-bold text-gray-900">Our Players</h2>
//                         </div>

//                         {/* Scrollable Player List */}
//                         <div
//                             className="p-4 overflow-y-auto"
//                             style={{
//                                 flexGrow: 1,
//                                 maxHeight: 'calc(500px - 64px)',
//                                 scrollbarWidth: 'none',
//                                 msOverflowStyle: 'none',
//                             }}
//                         >
//                             <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
//                                 {players.map((player) => (
//                                     <li
//                                         key={player.playerId}
//                                         className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${
//                                             player.playerId === selectedPlayer?.playerId
//                                                 ? 'bg-gray-100 font-bold'
//                                                 : 'bg-gray-100'
//                                         }`}
//                                         onClick={() => setSelectedPlayer(player)}
//                                     >
//                                         <img
//                                             src={player.image || playerPlaceholderImage}
//                                             alt={player.name}
//                                             className="h-10 w-10 rounded-full mr-3 object-cover"
//                                         />
//                                         {player.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Player Details */}
//                     {selectedPlayer && (
//                         <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
//                             <div className="bg-gray-100 p-6 rounded-lg">
//                                 <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
//                                 {/* Personal Info Table */}
//                                 <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
//                                     <tbody>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.name}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.dateOfBirth}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.email}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-300">
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
//                                         </tr>
//                                         <tr>
//                                             <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
//                                             <td className="py-2 px-5">{selectedPlayer.playerRole}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>

//                             <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
//                                 <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>
//                                 {/* Batting Stats */}
//                                 <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
//                                 <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
//                                     <thead>
//                                         <tr className="bg-gray-100">
//                                             <th className="py-2 px-5 text-center align-middle">Format</th>
//                                             <th className="py-2 px-5 text-center align-middle">Matches</th>
//                                             <th className="py-2 px-5 text-center align-middle">Innings</th>
//                                             <th className="py-2 px-5 text-center align-middle">Runs</th>
//                                             <th className="py-2 px-5 text-center align-middle">Highest Score</th>
//                                             <th className="py-2 px-5 text-center align-middle">Avg</th>
//                                             <th className="py-2 px-5 text-center align-middle">SR</th>
//                                             <th className="py-2 px-5 text-center align-middle">100s</th>
//                                             <th className="py-2 px-5 text-center align-middle">50s</th>
//                                             <th className="py-2 px-5 text-center align-middle">4s</th>
//                                             <th className="py-2 px-5 text-center align-middle">6s</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {["Test", "ODI", "T20"].map((type) => {
//                                             const summary = summarizeStats(type);
//                                             return (
//                                                 <tr key={type} className="border-b border-gray-300">
//                                                     <td className="py-2 px-5 text-center align-middle">{type}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.runs}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.highestScore}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.battingAvg}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.sr}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary["100s"]}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary["50s"]}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary["4s"]}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary["6s"]}</td>
//                                                 </tr>
//                                             );
//                                         })}
//                                     </tbody>
//                                 </table>

//                                 {/* Bowling Stats */}
//                                 <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
//                                 <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
//                                     <thead>
//                                         <tr className="bg-gray-100">
//                                             <th className="py-2 px-5 text-center align-middle">Format</th>
//                                             <th className="py-2 px-5 text-center align-middle">Inns</th>
//                                             <th className="py-2 px-5 text-center align-middle">Overs</th>
//                                             <th className="py-2 px-5 text-center align-middle">Matches</th>
//                                             <th className="py-2 px-5 text-center align-middle">Wickets</th>
//                                             <th className="py-2 px-5 text-center align-middle">Runs Conceded</th>
//                                             <th className="py-2 px-5 text-center align-middle">Best</th>
//                                             <th className="py-2 px-5 text-center align-middle">Avg</th>
//                                             <th className="py-2 px-5 text-center align-middle">Economy Rate</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {["Test", "ODI", "T20"].map((type) => {
//                                             const summary = summarizeStats(type);
//                                             return (
//                                                 <tr key={type} className="border-b bg-white border-gray-300">
//                                                     <td className="py-2 px-5 text-center align-middle">{type}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.overs}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.wickets}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.runsConceded}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.runConceded}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.bowlingAvg}</td>
//                                                     <td className="py-2 px-5 text-center align-middle">{summary.bowlingAvg}</td>
//                                                 </tr>
//                                             );
//                                         })}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayerProfile;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/MemberNavbar';
import backgroundImage from '../assets/images/flag.png';
import playerPlaceholderImage from '../assets/images/dana.jpeg'; // Placeholder image

const PlayerProfile = () => {
    const [players, setPlayers] = useState([]); // Stores list of players
    const [selectedPlayer, setSelectedPlayer] = useState(null); // Stores currently selected player
    const [playerStat, setPlayerStat] = useState([]); // Stores stats for the selected player

    // Fetch all players from the API when the component mounts
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/admin/players/all");
                const data = await response.json();

                const under13Players = data.filter((player) =>
                    player.teamsUnder.includes("Under 13")
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
    }, []);

    // Fetch player stats based on the selected player
    useEffect(() => {
        const fetchPlayerStats = async () => {
            if (selectedPlayer) {
                try {
                    const response = await fetch(`http://localhost:8080/api/playerStats/all-stats/${selectedPlayer.playerId}`);
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

    if (!players.length) {
        return (
            <div className="bg-gray-400 min-h-screen text-white">
                <Navbar />
                <div className="max-w-screen pt-20 text-center">
                    <h1 className="text-4xl">Loading players...</h1>
                </div>
            </div>
        );
    }

    // Function to summarize player stats for display in the table
    const summarizeStats = (type) => {
        if (!playerStat || !playerStat.length) {
            return {
                matches: 0,
                innings: 0,
                runs: 0,
                highestScore: 0,
                avg: 0,
                sr: 0,
                "100s": 0,
                "50s": 0,
                "4s": 0,
                "6s": 0,
            };
        }

        const filteredStats = playerStat.filter(
            (stat) => stat.match.type === type
        );

        const summary = filteredStats.reduce(
            (acc, stat) => {
                acc.matches += 1; // Since each stat is from a separate match
                acc.innings += parseInt(stat.inning, 10) || 0;
                acc.runs += stat.runs || 0;
                acc.highestScore = Math.max(acc.highestScore, stat.runs);
                acc.battingAvg = acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
                acc.sr = stat.balls > 0 ? ((stat.runs / stat.balls) * 100).toFixed(2) : 0; // Strike rate calculation
                acc["100s"] += stat.centuries || 0;
                acc["50s"] += stat.fifties || 0;
                acc["4s"] += stat.fours || 0;
                acc["6s"] += stat.sixers || 0;
                acc.overs += stat.overs || 0;
                acc.wickets += stat.wickets || 0;
                acc.runsConceded += stat.runsConceded || 0;
                acc.bowlingAvg = acc.wickets > 0 ? (acc.runsConceded / acc.wickets).toFixed(2) : 0;
                return acc;
            },
            {
                matches: 0,
                innings: 0,
                runs: 0,
                highestScore: 0,
                avg: 0,
                sr: 0,
                overs: 0,
                "100s": 0,
                "50s": 0,
                "4s": 0,
                "6s": 0,
                wickets: 0,
                runsConceded: 0,
                bowlingAvg: 0,
            }
        );

        return summary;
    };

    return (
        <div className="bg-gray-400 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen pt-20">
                {/* Header Section */}
                <div className="justify-center w-full px-10">
                    <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mb-8 left-2">
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-48 object-cover opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center left-20 px-20 py-6">
                            {/* Profile Image Container */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src={selectedPlayer?.image || playerPlaceholderImage}
                                    alt={selectedPlayer?.name}
                                    className="h-40 w-40 rounded-full border-4 border-[#4A0D34] object-cover"
                                />
                            </div>
                            <div className="ml-8">
                                <h1 className="text-5xl font-bold">{selectedPlayer?.name}</h1>
                                <p className="text-gray-400 text-xl">
                                    {selectedPlayer?.startDate} - {selectedPlayer?.endDate === 'Present' || !selectedPlayer?.endDate ? 'Present' : selectedPlayer?.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 justify-center px-10">
                    {/* Player List */}
                    <div
                        className="bg-gray-200 rounded-lg shadow-md"
                        style={{
                            width: '350px',
                            flexShrink: 0,
                            maxHeight: '469px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Fixed Heading */}
                        <div className="p-4 border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Our Players</h2>
                        </div>

                        {/* Scrollable Player List */}
                        <div
                            className="p-4 overflow-y-auto"
                            style={{
                                flexGrow: 1,
                                maxHeight: 'calc(500px - 64px)',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
                                {players.map((player) => (
                                    <li
                                        key={player.playerId}
                                        className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${
                                            player.playerId === selectedPlayer?.playerId
                                                ? 'bg-gray-100 font-bold'
                                                : 'bg-gray-100'
                                        }`}
                                        onClick={() => setSelectedPlayer(player)}
                                    >
                                        <img
                                            src={player.image || playerPlaceholderImage}
                                            alt={player.name}
                                            className="h-10 w-10 rounded-full mr-3 object-cover"
                                        />
                                        {player.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    {selectedPlayer && (
                        <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                                {/* Personal Info Table */}
                                <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
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

                            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
                                <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>
                                {/* Batting Stats */}
                                <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
                                <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
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
                                        {["Test", "1 Day", "T20"].map((type) => {
                                            const summary = summarizeStats(type);
                                            return (
                                                <tr key={type} className="border-b border-gray-300">
                                                    <td className="py-2 px-5 text-center align-middle">{type}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.runs}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.highestScore}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.battingAvg}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.sr}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary["100s"]}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary["50s"]}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary["4s"]}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary["6s"]}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                {/* Bowling Stats */}
                                <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
                                <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2 px-5 text-center align-middle">Format</th>
                                            <th className="py-2 px-5 text-center align-middle">Inns</th>
                                            <th className="py-2 px-5 text-center align-middle">Overs</th>
                                            <th className="py-2 px-5 text-center align-middle">Matches</th>
                                            <th className="py-2 px-5 text-center align-middle">Wickets</th>
                                            <th className="py-2 px-5 text-center align-middle">Runs Conceded</th>
                                            <th className="py-2 px-5 text-center align-middle">Best</th>
                                            <th className="py-2 px-5 text-center align-middle">Avg</th>
                                            <th className="py-2 px-5 text-center align-middle">Economy Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {["Test", "1 Day", "T20"].map((type) => {
                                            const summary = summarizeStats(type);
                                            return (
                                                <tr key={type} className="border-b bg-white border-gray-300">
                                                    <td className="py-2 px-5 text-center align-middle">{type}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.overs}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.wickets}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.runsConceded}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.runConceded}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.bowlingAvg}</td>
                                                    <td className="py-2 px-5 text-center align-middle">{summary.bowlingAvg}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
