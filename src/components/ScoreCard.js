

// import React from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly
// import backgroundImage from '../assets/images/ScoreCardBack.png'; // Background image path

// const ScoreCard = () => {
//   return (
//     <div
//       className="relative w-full h-screen"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Main Score Card */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%]">
//         {/* Left Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={leftBadge}
//             alt="Richmond College Badge"
//             className="w-36 h-36"
//           />
//         </div>

//         {/* Middle Section with inner white div */}
//         <div className="text-center w-1/2">
//           <div className="bg-white rounded-lg shadow-md px-8 py-6">
//             <div className="flex justify-center items-center space-x-8">
//               {/* Winning Team */}
//               <div className="flex flex-col items-end">
//                 <span className="text-blue-600 text-lg font-bold">WIN</span> {/* WIN Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">
//                   RICHMOND
//                 </span>{' '}
//                 {/* Team Name */}
//               </div>

//               {/* Score */}
//               <div className="flex items-center space-x-6">
//                 <span className="text-4xl font-bold text-white bg-[#00175F] w-24 h-24 flex items-center justify-center rounded-lg">
//                   258
//                 </span>
//                 <span className="text-4xl font-bold text-white bg-[#FF0000] w-24 h-24 flex items-center justify-center rounded-lg">
//                   125
//                 </span>
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-start">
//                 <span className="text-red-600 text-lg font-bold">LOSE</span> {/* LOSS Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">
//                   MAHINDA
//                 </span>{' '}
//                 {/* Team Name */}
//               </div>
//             </div>

//             {/* Optional description or additional information */}
//             <p className="text-gray-500 text-xs mt-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry.
//             </p>
//           </div>
//         </div>

//         {/* Right Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={rightBadge}
//             alt="Mahinda College Badge"
//             className="w-36 h-36"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;

// import React from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly
// import backgroundImage from '../assets/images/ScoreCardBack.png'; // Background image path

// const ScoreCard = () => {
//   return (
//     <div
//       className="relative w-full h-screen md:h-[80vh] flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Main Score Card */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl py-6 px-4 sm:px-10 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[80%]">
//         {/* Left Badge */}
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <img
//             src={leftBadge}
//             alt="Richmond College Badge"
//             className="w-24 h-24 md:w-36 md:h-36"
//           />
//         </div>

//         {/* Middle Section with inner white div */}
//         <div className="text-center w-full md:w-1/2 mb-4 md:mb-0">
//           <div className="bg-white rounded-lg shadow-md px-4 py-4 md:px-8 md:py-6">
//             <div className="flex justify-center items-center space-x-4 md:space-x-8">
//               {/* Winning Team */}
//               <div className="flex flex-col items-end">
//                 <span className="text-blue-600 text-sm md:text-lg font-bold">
//                   WIN
//                 </span>
//                 <span className="text-gray-700 text-lg md:text-2xl font-bold mt-2">
//                   RICHMOND
//                 </span>
//               </div>

//               {/* Score */}
//               <div className="flex items-center space-x-4 md:space-x-6">
//                 <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
//                   258
//                 </span>
//                 <span className="text-2xl md:text-4xl font-bold text-white bg-[#FF0000] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
//                   125
//                 </span>
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-start">
//                 <span className="text-red-600 text-sm md:text-lg font-bold">
//                   LOSE
//                 </span>
//                 <span className="text-gray-700 text-lg md:text-2xl font-bold mt-2">
//                   MAHINDA
//                 </span>
//               </div>
//             </div>

//             {/* Optional description or additional information */}
//             <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//           </div>
//         </div>

//         {/* Right Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={rightBadge}
//             alt="Mahinda College Badge"
//             className="w-24 h-24 md:w-36 md:h-36"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;


// import React from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

// const ScoreCard = () => {
//   return (
//     <>
//     {/* Title Section */}
//     <div className="ml-20">
//         <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH  RESULTS</p>
//       </div>
    
//     <div className="w-full h-auto flex flex-col items-center  mt-1">
      

//       {/* Main Score Card */}
//       <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
//         {/* Left Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={leftBadge}
//             alt="Richmond College Badge"
//             className="w-36 h-36"
//           />
//         </div>

//         {/* Middle Section with inner white div */}
//         <div className="text-center w-1/2">
//           <div className="bg-white rounded-lg shadow-md px-8 py-6">
//             <div className="flex justify-center items-center space-x-8">
//               {/* Winning Team */}
//               <div className="flex flex-col items-end">
//                 <span className="text-blue-600 text-lg font-bold">WIN</span> {/* WIN Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND</span> {/* Team Name */}
//               </div>

//               {/* Score */}
//               <div className="flex items-center space-x-6">
//                 <span className="text-4xl font-bold text-white bg-[#00175F] w-24 h-24 flex items-center justify-center rounded-lg">258</span>
//                 <span className="text-4xl font-bold text-white bg-[#FF0000] w-24 h-24 flex items-center justify-center rounded-lg">125</span>
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-start">
//                 <span className="text-red-600 text-lg font-bold">LOSE</span> {/* LOSS Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">MAHINDA</span> {/* Team Name */}
//               </div>
//             </div>

//             {/* Optional description or additional information */}
//             <p className="text-gray-500 text-xs mt-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//           </div>
//         </div>

//         {/* Right Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={rightBadge}
//             alt="Mahinda College Badge"
//             className="w-36 h-36"
//           />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ScoreCard;
// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

// const ScoreCard = () => {
//   const [matchData, setMatchData] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     fetch('https://richmond-cricket.up.railway.app/api/matchSummary/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const recentMatch = data[0]; // Get the most recent match data
//         setMatchData(recentMatch); // Set it to state
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, []);

//   if (!matchData) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   // Check match type (Test, T20, ODI)
//   const isTestMatch = matchData.type === 'Test';
//   const isT20Match = matchData.type === 'T20';
//   const isODIMatch = matchData.type === 'ODI';

//   // Decide win/loss based on runs comparison
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       {/* Title Section */}
//       <div className="ml-20">
//         <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1">
//         {/* Main Score Card */}
//         <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
//           {/* Left Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-36 h-36" />
//           </div>

//           {/* Middle Section with inner white div */}
//           <div className="text-center w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-8 py-6">
//               <div className="flex justify-center items-center space-x-8">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-end">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex items-center space-x-6">
//                   {/* Richmond's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && (
//                     <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${matchData.runs}/${matchData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   {/* Opposition's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-start">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

//               {/* Optional description or additional information */}
//               <p className="text-gray-500 text-xs mt-6">{matchData.result}</p>
//             </div>
//           </div>

//           {/* Right Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={rightBadge} alt="Mahinda College Badge" className="w-36 h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;
// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

// const ScoreCard = () => {
//   const [matchData, setMatchData] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     fetch('https://richmond-cricket.up.railway.app/api/matchSummary/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const recentMatch = data[0]; // Get the most recent match data
//         setMatchData(recentMatch); // Set it to state
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, []);

//   if (!matchData) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   // Check match type (Test, T20, ODI)
//   const isTestMatch = matchData.type === 'Test';

//   // Decide win/loss based on runs comparison
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       {/* Title Section */}
//       <div className="ml-20">
//         <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1">
//         {/* Main Score Card */}
//         <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
//           {/* Left Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-36 h-36" />
//           </div>

//           {/* Middle Section with inner white div */}
//           <div className="text-center w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-8 py-6">
//               <div className="flex justify-center items-center space-x-8">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-end">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex items-center space-x-6">
//                   {/* Richmond's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && (
//                     <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${matchData.runs}/${matchData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   {/* Opposition's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                   {isTestMatch && (
//                     <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${matchData.oppositionRuns}/${matchData.oppositionWickets} (2nd)`}
//                     </span>
//                   )}
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-start">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

//               {/* Optional description or additional information */}
//               <p className="text-gray-500 text-xs mt-6">{matchData.result}</p>
//             </div>
//           </div>

//           {/* Right Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={rightBadge} alt="Mahinda College Badge" className="w-36 h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly


// const ScoreCard = () => {
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     fetch('https://richmond-cricket.up.railway.app/api/matchSummary/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const firstMatch = data[0]; // Get the first match data (1st inning)
//         const secondMatch = data[1]; // Get the second match data (2nd inning, if available)

//         // Check if the first match is T20 or ODI
//         if (firstMatch.type === 'T20' || firstMatch.type === 'ODI') {
//           setMatchData(firstMatch); // Use only the first match data for T20 and ODI
//         } else if (firstMatch.type === 'Test' && secondMatch && firstMatch.matchId === secondMatch.matchId) {
//           // For Test matches, check if the matchId is the same for both innings
//           setMatchData(firstMatch); // Set the first inning data
//           setSecondInningData(secondMatch); // Set the second inning data
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, []);

//   if (!matchData) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   // Check match type (Test, T20, ODI)
//   const isTestMatch = matchData.type === 'Test';

//   // Decide win/loss based on runs comparison for T20/ODI or Test matches with 2nd innings
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       {/* Title Section */}
//       <div className="ml-20">
//         <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1">
//         {/* Main Score Card */}
//         <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
//           {/* Left Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-36 h-36" />
//           </div>

//           {/* Middle Section with inner white div */}
//           <div className="text-center w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-8 py-6">
//               <div className="flex justify-center items-center space-x-8">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-end">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex items-center space-x-6">
//                   {/* Richmond's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   {/* Opposition's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                     </span>
//                   )}
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-start">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

//               {/* Optional description or additional information */}
//               <p className="text-gray-500 text-xs mt-6">{matchData.result}</p>
//             </div>
//           </div>

//           {/* Right Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={rightBadge} alt="Mahinda College Badge" className="w-36 h-36" />
//           </div>
//         </div>
//       </div>

     
//     </>
//   );
// };

// export default ScoreCard;
// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

// const ScoreCard = ({ onMatchId }) => {  // Receive onMatchId as a prop
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     fetch('http://localhost:8080/api/matchSummary/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const firstMatch = data[0]; // Get the first match data (1st inning)
//         const secondMatch = data[1]; // Get the second match data (2nd inning, if available)

//         // Check if the first match is T20 or ODI
//         if (firstMatch.type === 'T20' || firstMatch.type === 'ODI') {
//           setMatchData(firstMatch); // Use only the first match data for T20 and ODI
//           onMatchId(firstMatch.matchId);  // Pass matchId back to HomePage.js
//         } else if (firstMatch.type === 'Test' && secondMatch && firstMatch.matchId === secondMatch.matchId) {
//           // For Test matches, check if the matchId is the same for both innings
//           setMatchData(firstMatch); // Set the first inning data
//           setSecondInningData(secondMatch); // Set the second inning data
//           onMatchId(firstMatch.matchId);  // Pass matchId back to HomePage.js
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, [onMatchId]);

//   if (!matchData) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   // Check match type (Test, T20, ODI)
//   const isTestMatch = matchData.type === 'Test';

//   // Decide win/loss based on runs comparison for T20/ODI or Test matches with 2nd innings
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       {/* Title Section */}
//       <div className="ml-20">
//         <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1">
//         {/* Main Score Card */}
//         <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
//           {/* Left Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-36 h-36" />
//           </div>

//           {/* Middle Section with inner white div */}
//           <div className="text-center w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-8 py-6">
//               <div className="flex justify-center items-center space-x-8">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-end">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex items-center space-x-6">
//                   {/* Richmond's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-4xl font-bold text-white bg-[#00175F] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   {/* Opposition's Score */}
//                   <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-4xl font-bold text-white bg-[#4A0D34] w-32 h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                     </span>
//                   )}
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-start">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

//               {/* Optional description or additional information */}
//               <p className="text-gray-500 text-xs mt-6">{matchData.result}</p>
//             </div>
//           </div>

//           {/* Right Badge */}
//           <div className="flex items-center space-x-2">
//             <img src={matchData.logo} alt={`${matchData.opposition} Badge`} className="w-36 h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

// Make this component Responsive to any Screen.

// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

// const ScoreCard = ({ onMatchId }) => {  // Receive onMatchId as a prop
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL;
//   // Fetch data from API
//   useEffect(() => {
//     fetch(`${API_URL}matchSummary/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         const firstMatch = data[0]; // Get the first match data (1st inning)
//         const secondMatch = data[1]; // Get the second match data (2nd inning, if available)

//         // Check if the first match is T20 or ODI
//         if (firstMatch.type === 'T20' || firstMatch.type === 'ODI') {
//           setMatchData(firstMatch); // Use only the first match data for T20 and ODI
//           onMatchId(firstMatch.matchId);  // Pass matchId back to HomePage.js
//         } else if (firstMatch.type === 'Test' && secondMatch && firstMatch.matchId === secondMatch.matchId) {
//           // For Test matches, check if the matchId is the same for both innings
//           setMatchData(firstMatch); // Set the first inning data
//           setSecondInningData(secondMatch); // Set the second inning data
//           onMatchId(firstMatch.matchId);  // Pass matchId back to HomePage.js
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, [onMatchId]);

//   if (!matchData) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   // Check match type (Test, T20, ODI)
//   const isTestMatch = matchData.type === 'Test';

//   // Decide win/loss based on runs comparison for T20/ODI or Test matches with 2nd innings
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       {/* Title Section */}
//       <div className="ml-5 md:ml-20 text-center mt-10">
//         <p className="text-2xl md:text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1 px-2 md:px-0">
//         {/* Main Score Card */}
//         <div className="bg-white shadow-lg rounded-xl py-6 px-6 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-4 mb-8">
//           {/* Left Badge */}
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-24 h-24 md:w-36 md:h-36" />
//           </div>

//           {/* Middle Section with inner white div */}
//           <div className="text-center w-full md:w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-4 py-4 md:px-8 md:py-6">
//               <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-end">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                   {/* Richmond's Score */}
//                   <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-28 h-20 md:w-32 md:h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-28 h-20 md:w-32 md:h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   {/* Opposition's Score */}
//                   <span className="text-2xl md:text-4xl font-bold text-white bg-[#4A0D34] w-28 h-20 md:w-32 md:h-28 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-2xl md:text-4xl font-bold text-white bg-[#4A0D34] w-28 h-20 md:w-32 md:h-28 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                     </span>
//                   )}
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-start">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

//               {/* Optional description or additional information */}
//               <p className="text-gray-500 text-xs mt-6">{matchData.result}</p>
//             </div>
//           </div>

//           {/* Right Badge */}
//           <div className="flex items-center space-x-2 mt-4 md:mt-0">
//             <img src={matchData.logo} alt={`${matchData.opposition} Badge`} className="w-24 h-24 md:w-36 md:h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; 
// import rightBadge from '../assets/images/MLogo.png'; 

// const ScoreCard = ({ onMatchId }) => {
//   const[lastMatch, setLastMatch] = useState("");
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL;


//   // useEffect(() => {
//   //   fetch(`${API_URL}matchSummary/all`)
//   //     .then((response) => response.json())
//   //     .then((data) => {

//   //       if (data.length === 0) return; // If there's no match data, exit
  
//   //       const lastMatchIndex = data.length - 1;
//   //       const lastMatch = data[lastMatchIndex]; // Get the last match data (1st inning)
//   //       const secondMatch = data[lastMatchIndex - 1]; // Check if the previous item is the 2nd inning of the same match
  
//   //       // Check if the last match is T20 or ODI
//   //       if (lastMatch.type === 'T20' || lastMatch.type === 'ODI') {
//   //         setMatchData(lastMatch); // Use only the last match data for T20 and ODI
//   //         onMatchId(lastMatch.matchId);  // Pass matchId back to HomePage.js
//   //       } else if (lastMatch.type === 'Test' && secondMatch && lastMatch.matchId === secondMatch.matchId) {
//   //         // For Test matches, check if the matchId is the same for both innings
//   //         setMatchData(lastMatch); // Set the first inning data
//   //         setSecondInningData(secondMatch); // Set the second inning data
//   //         onMatchId(lastMatch.matchId);  // Pass matchId back to HomePage.js

//   //       }
//   //     })
//   //     .catch((error) => console.error('Error fetching match data:', error));
//   // }, [onMatchId]);
  
//   useEffect(() => {
//     fetch(`${API_URL}matchSummary/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.length === 0) return; // If there's no match data, exit
  
//         const lastMatchIndex = data.length - 1;
        
//         const lastMatch = data[lastMatchIndex]; // Get the last match data (1st inning)
//         setLastMatch(lastMatch);
//         // Handle T20 and ODI
//         if (lastMatch.type === 'T20' || lastMatch.type === 'ODI') {
//           setMatchData(lastMatch); // Use only the last match data for T20 and ODI
//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         } else if (lastMatch.type === 'Test') {
//           // Handle Test Match
//           const matchId = lastMatch.matchId;
//           setMatchData(lastMatch); // Set the first inning data
  
//           const secondMatch = data.find(
//             (match) => match.matchId === matchId && match.inning === '2'
//           );
  
//           if (secondMatch) {
//             setSecondInningData(secondMatch);
//             console.log('Second Inning Match:', secondMatch);
//           } else {
//             console.warn('No second inning data found for match:', matchId);
//           }
  
//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, [onMatchId]);
  

//   if (!matchData) {
//     return <p>Loading...</p>; 
//   }

//   const isTestMatch = matchData.type === 'Test';
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       <div className="ml-5 md:ml-20 text-center mt-10">
//         <p className="text-2xl md:text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1 px-2 md:px-0">
//         <div className="bg-white shadow-lg rounded-xl py-6 px-6 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-4 mb-8">
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-20 h-20 md:w-36 md:h-36" />
//           </div>

//           <div className="text-center w-full md:w-1/2">
//             <div className="bg-white rounded-lg shadow-md px-4 py-4 md:px-8 md:py-6">
//               <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//                 {/* Winning Team */}
//                 <div className="flex flex-col items-center">
//                   <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
//                 </div>

//                 {/* Score Section */}
//                 <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                   <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                     </span>
//                   )}
//                   <span className="text-2xl md:text-4xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                   </span>
//                   {isTestMatch && secondInningData && (
//                     <span className="text-2xl md:text-4xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                       {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                     </span>
//                   )}
//                 </div>

//                 {/* Losing Team */}
//                 <div className="flex flex-col items-center">
//                   <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                     {!richmondWon ? 'WIN' : 'LOSE'}
//                   </span>
//                   <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//                 </div>
//               </div>

             
//               { (lastMatch.type === 'Test') ? <p className="text-gray-500 text-xs mt-6">{secondInningData.result}</p> :  <p className="text-gray-500 text-xs mt-6">{matchData.result}</p> }
//             </div>
//           </div>

//           <div className="flex items-center space-x-2 mt-4 md:mt-0">
//             <img src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={`${matchData.opposition} Badge`} className="w-20 h-20 md:w-36 md:h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

// KUSHAND CODE


// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; 
// import rightBadge from '../assets/images/MLogo.png'; 

// const ScoreCard = ({ onMatchId }) => {
//   const[lastMatch, setLastMatch] = useState("");
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}matchSummary/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.length === 0) return; // If there's no match data, exit
  
//         const lastMatchIndex = data.length - 1;
        
//         const lastMatch = data[lastMatchIndex]; // Get the last match data (1st inning)
//         setLastMatch(lastMatch);
//         // Handle T20 and ODI
//         if (lastMatch.type === 'T20' || lastMatch.type === 'ODI') {
//           setMatchData(lastMatch); // Use only the last match data for T20 and ODI
//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         } else if (lastMatch.type === 'Test') {
//           // Handle Test Match
//           const matchId = lastMatch.matchId;
//           setMatchData(lastMatch); // Set the first inning data
  
//           const secondMatch = data.find(
//             (match) => match.matchId === matchId && match.inning === '2'
//           );
  
//           if (secondMatch) {
//             setSecondInningData(secondMatch);
//             console.log('Second Inning Match:', secondMatch);
//           } else {
//             console.warn('No second inning data found for match:', matchId);
//           }
  
//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, [onMatchId]);
  

//   if (!matchData) {
//     return <p>Loading...</p>; 
//   }

//   const isTestMatch = matchData.type === 'Test';
//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       <div className="ml-5 md:ml-20 text-center mt-10">
//         <p className="text-2xl md:text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1 px-2 md:px-0">
//         <div className="bg-white shadow-lg rounded-xl py-6 px-6 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-4 mb-8">
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-20 h-20 md:w-36 md:h-36" />
//           </div>

//           <div className="text-center w-full md:w-1/2">
//             <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//               {/* Winning Team */}
//               <div className="flex flex-col items-center">
//                 <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                   {richmondWon ? 'WIN' : 'LOSE'}
//                 </span>
//                 <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
//               </div>

//               {/* Score Section */}
//               <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                 <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                   {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                 </span>
//                 {isTestMatch && secondInningData && (
//                   <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                   </span>
//                 )}
//                 <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                   {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                 </span>
//                 {isTestMatch && secondInningData && (
//                   <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                   </span>
//                 )}
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-center">
//                 <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                   {!richmondWon ? 'WIN' : 'LOSE'}
//                 </span>
//                 <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//               </div>
//             </div>
           
//             { (lastMatch.type === 'Test') ? <p className="text-gray-500 text-xs mt-6">{secondInningData.result}</p> :  <p className="text-gray-500 text-xs mt-6">{matchData.result}</p> }
//           </div>

//           <div className="flex items-center space-x-2 mt-4 md:mt-0">
//             <img src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={`${matchData.opposition} Badge`} className="w-20 h-20 md:w-36 md:h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

// uMAYA CODE


// import React, { useEffect, useState } from 'react';
// import leftBadge from '../assets/images/RLogo.png'; 
// import rightBadge from '../assets/images/MLogo.png'; 

// const ScoreCard = ({ onMatchId }) => {
//   const [lastMatch, setLastMatch] = useState(null);
//   const [matchData, setMatchData] = useState(null);
//   const [secondInningData, setSecondInningData] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}matchSummary/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data || data.length === 0) return; // If there's no match data, exit

//         const lastMatchIndex = data.length - 1;
//         const lastMatch = data[lastMatchIndex]; // Get the last match data (1st inning)
//         setLastMatch(lastMatch);

//         if (lastMatch.type === 'T20' || lastMatch.type === 'ODI') {
//           setMatchData(lastMatch); // Use only the last match data for T20 and ODI
//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         } else if (lastMatch.type === 'Test' || lastMatch.type === '2 Day' || lastMatch.type === '3 Day') {
//           // Handle Test Match
//           const matchId = lastMatch.matchId;
//           setMatchData(lastMatch); // Set the first inning data

//           const secondMatch = data.find(
//             (match) => match.matchId === matchId && match.inning === '2'
//           );

//           if (secondMatch) {
//             setSecondInningData(secondMatch);
//             // console.log('Second Inning Match:', secondMatch);
//           } else {
//             // console.warn('No second inning data found for match:', matchId);
//           }

//           onMatchId(lastMatch.matchId); // Pass matchId back to HomePage.js
//         }
//       })
//       .catch((error) => console.error('Error fetching match data:', error));
//   }, [onMatchId]);

//   if (!matchData) {
//     return <p>Loading...</p>; 
//   }

//   const isTestMatch = matchData.type === 'Test' || matchData.type === '2 Day' || matchData.type === '3 Day';

//   const richmondWon = matchData.runs > matchData.oppositionRuns;

//   return (
//     <>
//       <div className="ml-5 md:ml-20 text-center mt-10">
//         <p className="text-2xl md:text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
//       </div>

//       <div className="w-full h-auto flex flex-col items-center mt-1 px-2 md:px-0">
//         <div className="bg-white shadow-lg rounded-xl py-6 px-6 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-4 mb-8">
//           <div className="flex items-center space-x-2 mb-4 md:mb-0">
//             <img src={leftBadge} alt="Richmond College Badge" className="w-20 h-20 md:w-36 md:h-36" />
//           </div>

//           <div className="text-center w-full md:w-1/2">
//             <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//               {/* Winning Team */}
//               <div className="flex flex-col items-center">
//                 <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                   {richmondWon ? 'WIN' : 'LOSE'}
//                 </span>
//                 <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
//               </div>

//               {/* Score Section */}
//               <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
//                 <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                   {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
//                 </span>
//                 {isTestMatch && secondInningData && (
//                   <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
//                   </span>
//                 )}
//                 <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                   {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
//                 </span>
//                 {isTestMatch && secondInningData && (
//                   <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
//                     {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
//                   </span>
//                 )}
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-center">
//                 <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
//                   {!richmondWon ? 'WIN' : 'LOSE'}
//                 </span>
//                 <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
//               </div>
//             </div>

//             {/* Match Result */}
//             <p className="text-gray-500 text-xs mt-6">
//               {isTestMatch 
//                 ? secondInningData?.result || 'Second inning score not available' 
//                 : matchData?.result || 'Match data not available'}
//             </p>
//           </div>

//           <div className="flex items-center space-x-2 mt-4 md:mt-0">
//             <img src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={`${matchData.opposition} Badge`} className="w-20 h-20 md:w-36 md:h-36" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScoreCard;

import React, { useEffect, useState } from 'react';
import leftBadge from '../assets/images/RLogo.png';
import rightBadge from '../assets/images/MLogo.png';

const ScoreCard = ({ onMatchId }) => {
  const [matchData, setMatchData] = useState(null); // First inning
  const [secondInningData, setSecondInningData] = useState(null); // Second inning
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}matchSummary/all`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) return;

        // Get the latest matchId from the last entry
        const latestMatch = data[data.length - 1];
        const matchId = latestMatch.matchId;

        // Get all innings for the latest matchId
        const matchEntries = data.filter(match => match.matchId === matchId);

        // Find the first and second innings
        const firstInning = matchEntries.find(entry => entry.inning === '1') || matchEntries[0];
        const secondInning = matchEntries.find(entry => entry.inning === '2');

        setMatchData(firstInning);
        setSecondInningData(secondInning);
        onMatchId(matchId);
      })
      .catch((error) => console.error('Error fetching match data:', error));
  }, [onMatchId]);

  if (!matchData) {
    return <p>Loading...</p>;
  }

  const isTestMatch = matchData.type === 'Test' || matchData.type === '2 Day' || matchData.type === '3 Day';
  const richmondWon = matchData.runs > matchData.oppositionRuns;
  return (
    <>
      <div className="ml-5 md:ml-20 text-center mt-10">
        <p className="text-2xl md:text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH RESULTS</p>
      </div>

      <div className="w-full h-auto flex flex-col items-center mt-1 px-2 md:px-0">
        <div className="bg-white shadow-lg rounded-xl py-6 px-6 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[95%] mt-4 mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={leftBadge} alt="Richmond College Badge" className="w-20 h-20 md:w-36 md:h-36" />
          </div>

          <div className="text-center w-full md:w-1/2">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
              {/* Winning Team */}
              <div className="flex flex-col items-center">
                <span className={`text-lg font-bold ${richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
                  {richmondWon ? 'WIN' : 'LOSE'}
                </span>
                <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">RICHMOND COLLEGE</span>
              </div>

              {/* Score Section */}
              {/* <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
                <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
                  {isTestMatch ? `${matchData.runs}/${matchData.wickets} (1st)` : `${matchData.runs}/${matchData.wickets}`}
                </span>
                {isTestMatch && secondInningData && (
                  <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
                    {`${secondInningData.runs}/${secondInningData.wickets} (2nd)`}
                  </span>
                )}
                <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
                  {isTestMatch ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` : `${matchData.oppositionRuns}/${matchData.oppositionWickets}`}
                </span>
                {isTestMatch && secondInningData && (
                  <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
                    {`${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)`}
                  </span>
                )}


              </div> */}

<div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
  {/* First Inning */}
  <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
    {matchData.runs != null && matchData.wickets != null 
      ? isTestMatch 
        ? `${matchData.runs}/${matchData.wickets} (1st)` 
        : `${matchData.runs}/${matchData.wickets}` 
      : 'N/A'}
  </span>

  {/* Second Inning (if Test Match) */}
  {isTestMatch && secondInningData && (
    <span className="text-1xl md:text-2xl font-bold text-white bg-[#00175F] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
      {secondInningData.runs != null && secondInningData.wickets != null 
        ? `${secondInningData.runs}/${secondInningData.wickets} (2nd)` 
        : 'N/A'}
    </span>
  )}

  {/* Opposition First Inning */}
  <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
    {matchData.oppositionRuns != null && matchData.oppositionWickets != null 
      ? isTestMatch 
        ? `${matchData.oppositionRuns}/${matchData.oppositionWickets} (1st)` 
        : `${matchData.oppositionRuns}/${matchData.oppositionWickets}` 
      : 'N/A'}
  </span>

  {/* Opposition Second Inning (if Test Match) */}
  {isTestMatch && secondInningData && (
    <span className="text-1xl md:text-2xl font-bold text-white bg-[#4A0D34] w-20 h-16 md:w-28 md:h-20 flex items-center justify-center rounded-lg">
      {secondInningData.oppositionRuns != null && secondInningData.oppositionWickets != null 
        ? `${secondInningData.oppositionRuns}/${secondInningData.oppositionWickets} (2nd)` 
        : 'N/A'}
    </span>
  )}
</div>


              {/* Losing Team */}
              <div className="flex flex-col items-center">
                <span className={`text-lg font-bold ${!richmondWon ? 'text-blue-600' : 'text-red-600'}`}>
                  {!richmondWon ? 'WIN' : 'LOSE'}
                </span>
                <span className="text-gray-700 text-xl md:text-2xl font-bold mt-2">{matchData.opposition.toUpperCase()}</span>
              </div>
            </div>

            {/* Match Result */}
            <p className="text-gray-500 text-xs mt-6">
              {isTestMatch 
                ? secondInningData?.result || 'Second inning score not available' 
                : matchData?.result || 'Match data not available'}
            </p>
          </div>

          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <img src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={`${matchData.opposition} Badge`} className="w-20 h-20 md:w-36 md:h-36" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;

