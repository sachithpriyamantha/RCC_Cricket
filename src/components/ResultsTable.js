

// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Update the path to your image

// const ScorecardSlider = ({ records }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const recordsPerPage = 6; // Limiting to 6 records (players) per page
//   const totalPages = Math.ceil(records.length / recordsPerPage);
//   const autoSlideInterval = 2000; // 2 seconds for auto-slide

//   const nextPage = () => {
//     if (currentIndex + recordsPerPage < records.length) {
//       setCurrentIndex(currentIndex + recordsPerPage);
//     } else {
//       setCurrentIndex(0); // If reached the end, start from the beginning
//     }
//   };

//   const prevPage = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - recordsPerPage);
//     }
//   };

//   // Auto-slide effect
//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextPage();
//     }, autoSlideInterval);

//     // Cleanup the interval on component unmount or when currentIndex changes
//     return () => clearInterval(autoSlide);
//   }, [currentIndex]);

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         <div className="overflow-hidden relative h-auto md:h-[300px] rounded-lg shadow-lg bg-gray-800">
//           <table className="w-full table-auto text-white text-xs md:text-base rounded-t-lg overflow-hidden">
//             <thead className="bg-gray-700">
//               <tr>
//                 <th className="px-2 md:px-4 py-2">BATSMAN</th>
//                 <th className="px-2 md:px-4 py-2">R</th>
//                 <th className="px-2 md:px-4 py-2">B</th>
//                 <th className="px-2 md:px-4 py-2">4s</th>
//                 <th className="px-2 md:px-4 py-2">6s</th>
//                 <th className="px-2 md:px-4 py-2">50</th>
//                 <th className="px-2 md:px-4 py-2">100</th>
//                 <th className="px-2 md:px-4 py-2">SR</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.slice(currentIndex, currentIndex + recordsPerPage).map((record, idx) => (
//                 <tr key={idx} className="bg-gray-600 text-center">
//                   <td className="px-2 md:px-4 py-2">{record.batsman}</td>
//                   <td className="px-2 md:px-4 py-2">{record.runs}</td>
//                   <td className="px-2 md:px-4 py-2">{record.balls}</td>
//                   <td className="px-2 md:px-4 py-2">{record.fours}</td>
//                   <td className="px-2 md:px-4 py-2">{record.sixes}</td>
//                   <td className="px-2 md:px-4 py-2">{record.fifties}</td>
//                   <td className="px-2 md:px-4 py-2">{record.hundreds}</td>
//                   <td className="px-2 md:px-4 py-2">{record.strikeRate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Slider controls - position fixed below the table */}
//           <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 py-2 bg-gray-800">
//             <button
//               onClick={prevPage}
//               className={`text-white p-2 rounded-full bg-gray-700 shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex === 0}
//             >
//               <FaArrowLeft size={20} />
//             </button>
//             <button
//               onClick={nextPage}
//               className={`text-white p-2 rounded-full bg-gray-700 shadow-lg ${currentIndex + recordsPerPage >= records.length ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex + recordsPerPage >= records.length}
//             >
//               <FaArrowRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-8">
//           {[...Array(totalPages)].map((_, pageIdx) => (
//             <span
//               key={pageIdx}
//               className={`w-6 h-2 mx-1 rounded-full ${currentIndex / recordsPerPage === pageIdx ? 'bg-white' : 'bg-gray-500'}`}
//               style={{
//                 width: currentIndex / recordsPerPage === pageIdx ? '40px' : '6px',
//                 height: '6px',
//                 borderRadius: '0',
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example records array for demonstration
// const records = [
//   { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
//   { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
//   { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
//   { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
//   { batsman: 'Player 5', runs: 20, balls: 15, fours: 1, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 133.33 },
//   { batsman: 'Player 6', runs: 35, balls: 22, fours: 3, sixes: 2, fifties: 0, hundreds: 0, strikeRate: 159.09 },
//   { batsman: 'Player 7', runs: 25, balls: 17, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 147.06 },
//   { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
//   { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
//   { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
//   { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
//   // Add more records if needed
// ];

// const App = () => {
//   return (
//     <div>
//       <ScorecardSlider records={records} />
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Update the path to your image

// const ScorecardSlider = () => {
//   const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables

//   const batsmen = [
//     {
//       name: 'Player 1',
//       runs: 50,
//       balls: 30,
//       minutes: 45,
//       fours: 4,
//       sixes: 2,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 166.67,
//     },
//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Player 2',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },
//   ];

//   // Sample bowlers data
//   const bowlers = [
//     {
//       name: 'Bowler 1',
//       overs: 4,
//       maidens: 0,
//       runs: 30,
//       wickets: 2,
//       noBalls: 1,
//       wides: 2,
//       economy: 7.5,
//       cost: 10,
//     },
//     {
//       name: 'Bowler 2',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Bowler 2',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Bowler 2',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Bowler 2',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Bowler 2',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },

    

//   ];
//   // Constants for extras and total
//   const EXTRAS = 12;
//   const TOTAL = "192/6 (20 overs)";

//   // Function to handle table switch
//   const toggleTable = () => {
//     setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
//   };

 

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         {/* Additional Sections */}
//         <div className="p-6 max-w-screen-xl mx-auto mt-5">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
//             <div className="flex items-center">
//               <select
//                 className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
//                 defaultValue="1st Inning"
//               >
//                 <option value="1st INNING">1st Inning</option>
//                 <option value="2nd INNING">2nd Inning</option>
//               </select>
//             </div>
//             <div className="text-gray-700 font-medium text-sm">
//               180/5 (15.4 overs)
//             </div>
//           </div>

//           {/* Batsmen or Bowlers Table */}
//           <div className="overflow-x-auto mb-8">
//             {currentTable === 'batsmen' ? (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">B</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">4s</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">6s</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">50</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">100</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {batsmen.map((batsman, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-1 text-sm font-medium text-gray-900">{batsman.name}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.runs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.balls}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.minutes}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fours}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.sixes}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fifty}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.hundred}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.strikeRate}</td>
//                     </tr>
//                   ))}
//                   {/* EXTRAS row */}
//                   <tr>
//                     <td className="px-2 py-1 text-sm font-medium text-gray-900">EXTRAS</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
//                       {EXTRAS}
//                     </td>
//                   </tr>
//                   {/* TOTAL row */}
//                   <tr>
//                     <td className="px-2 py-1 text-sm font-bold text-gray-900">TOTAL</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
//                       {TOTAL}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             ) : (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">NB</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">WD</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {bowlers.map((bowler, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.name}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.maidens}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.noBalls}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wides}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.economy}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Pagination and Navigation Arrows */}
//           <div className="flex justify-between items-center">
         
//               <button
//                 className={`px-4 py-2 rounded-lg ${currentTable === 'batsmen' ? 'bg-blue-500 text-white' : 'bg-gray-300'} mr-2`}
//                 onClick={() => setCurrentTable('batsmen')}
//               >
//                 Batsmen
//               </button>
//               <button
//                 className={`px-4 py-2 rounded-lg ${currentTable === 'bowlers' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentTable('bowlers')}
//               >
//                 Bowlers
//               </button>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScorecardSlider;

// import React, { useState } from 'react';
// import backgroundImage from '../assets/images/Trophy.png'; // Update the path to your image


// const ResultsTable = ({ matchId }) => {
//   const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables

//   const batsmen = [
//     {
//       name: 'Lahiru Jayasinghe',
//       runs: 50,
//       balls: 30,
//       minutes: 45,
//       fours: 4,
//       sixes: 2,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 166.67,
//     },
//     {
//       name: 'Pamitha Pankaja',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Yeran Fernando',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Nuwan Nilupul',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Pasindu Chamika',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Chenuka Kuruppu',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Nimesh Nelanga',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },
//     {
//       name: 'Kushan Nalinka',
//       runs: 50,
//       balls: 30,
//       minutes: 45,
//       fours: 4,
//       sixes: 2,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 166.67,
//     },
//     {
//       name: 'Deshan Kavishka',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Ravindu Panditha',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },

//     {
//       name: 'Thilina Maduranga',
//       runs: 60,
//       balls: 35,
//       minutes: 50,
//       fours: 5,
//       sixes: 3,
//       fifty: 1,
//       hundred: 0,
//       strikeRate: 171.43,
//     },
//   ];

//   // Sample bowlers data
//   const bowlers = [
//     {
//       name: 'Peshala Nimnajith',
//       overs: 4,
//       maidens: 0,
//       runs: 30,
//       wickets: 2,
//       noBalls: 1,
//       wides: 2,
//       economy: 7.5,
//       cost: 10,
//     },
//     {
//       name: 'Menuka Sathsara',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Rasindu Pereis',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Gevindu Kumara',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Akila Darshana',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Gayan Pathirana',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },

//     {
//       name: 'Wanidu De Silva',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Hasaral Madushanka',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Chenuka Manditha',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },
//     {
//       name: 'Ovindu Mandith',
//       overs: 4,
//       maidens: 0,
//       runs: 25,
//       wickets: 3,
//       noBalls: 0,
//       wides: 1,
//       economy: 6.25,
//     },

//   ];

//   // Constants for extras and total
//   const EXTRAS = 12;
//   const TOTAL = "192/6 (20 overs)";

//   // Function to handle table switch
//   const toggleTable = () => {
//     setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
//   };

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"

//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         {/* Additional Sections */}
        
//         <div className="p-6 max-w-screen-xl mx-auto mt-5">
//           {/* Top Bar */}
           
//           <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
//             <div className="flex items-center">
//               <select
//                 className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
//                 defaultValue="1st Inning"
//               >
//                 <option value="1st INNING">1st Inning</option>
//                 <option value="2nd INNING">2nd Inning</option>
//               </select>
//             </div>
//             <div className="text-gray-700 font-medium text-sm">
//               180/5 (15.4 overs)
//             </div>
//           </div>

//           {/* Batsmen or Bowlers Table */}
//           <div className="table-container overflow-x-auto overflow-y-auto mb-8 h-72">
//             {currentTable === 'batsmen' ? (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">B</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">M</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">4s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">6s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">50</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">100</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {batsmen.map((batsman, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-2 text-sm font-medium text-gray-900">{batsman.name}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.runs}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.balls}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.minutes}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fours}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.sixes}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fifty}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.hundred}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.strikeRate}</td>
//                     </tr>
//                   ))}
//                   {/* EXTRAS row */}
//                   <tr>
//                     <td className="px-2 py-1 text-sm font-medium text-gray-900">EXTRAS</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
//                       {EXTRAS}
//                     </td>
//                   </tr>
//                   {/* TOTAL row */}
//                   <tr>
//                     <td className="px-2 py-1 text-sm font-bold text-gray-900">TOTAL</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
//                       {TOTAL}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             ) : (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">NB</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">WD</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {bowlers.map((bowler, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.name}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.maidens}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.noBalls}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wides}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.economy}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Toggle Button */}
//           <div className="flex justify-center mb-8">
//             <button
//               className="bg-[#4A0D34] text-white text-sm font-medium px-4 py-2 rounded-lg"
//               onClick={toggleTable}
//             >
//               {currentTable === 'batsmen' ? 'Show Bowlers' : 'Show Batsmen'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsTable;

// import React, { useEffect, useState } from 'react';
// import backgroundImage from '../assets/images/Trophy.png'; // Update the path to your image

// const ResultsTable = ({ matchId }) => {
//   const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables
//   const [matchData, setMatchData] = useState([]);
//   const [inning, setInning] = useState('1st INNING');
//   const [matchType, setMatchType] = useState('');

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchMatchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playerStats/match/player-stats?matchId=${matchId}`
//         );
//         const data = await response.json();
//         setMatchData(data);

//         // Set match type (assuming all records have the same match type)
//         if (data.length > 0) {
//           setMatchType(data[0].match.type);
//         }
//       } catch (error) {
//         console.error('Error fetching match data:', error);
//       }
//     };

//     fetchMatchData();
//   }, [matchId]);

//   // Filter the data based on the current inning
//   const filterInningData = (inningNumber) => {
//     return matchData.filter((stat) => stat.inning === inningNumber);
//   };

//   // Function to handle table switch
//   const toggleTable = () => {
//     setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
//   };

//   // Calculate strike rate for batsmen
//   const calculateStrikeRate = (runs, balls) => {
//     return balls > 0 ? ((runs / balls) * 100).toFixed(2) : '0.00';
//   };

//   // Calculate economy rate for bowlers
//   const calculateEconomyRate = (runsConceded, overs) => {
//     return overs > 0 ? (runsConceded / overs).toFixed(2) : '0.00';
//   };

//   // Constants for extras and total (for demonstration purposes)
//   const EXTRAS = 12;
//   const TOTAL = "192/6 (20 overs)";

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         {/* Additional Sections */}
//         <div className="p-6 max-w-screen-xl mx-auto mt-5">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
//             <div className="flex items-center">
//               <select
//                 className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
//                 value={inning}
//                 onChange={(e) => setInning(e.target.value)}
//               >
//                 {/* Handle innings based on match type */}
//                 {matchType === 'Test' ? (
//                   <>
//                     <option value="1st INNING">1st Inning</option>
//                     <option value="2nd INNING">2nd Inning</option>
//                   </>
//                 ) : (
//                   <option value="1st INNING">1st Inning</option>
//                 )}
//               </select>
//             </div>
//             <div className="text-gray-700 font-medium text-sm">
//               {/* Display total score */}
//               RICHMOND COLLEGE GALLE
//             </div>
//           </div>

//           {/* Batsmen or Bowlers Table */}
//           <div className="table-container overflow-x-auto overflow-y-auto mb-8 h-72">
//             {currentTable === 'batsmen' ? (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">B</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">4s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">6s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">50</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">100</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filterInningData(inning === '1st INNING' ? '1' : '2').map((batsman, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-2 text-sm font-medium text-gray-900">{batsman.player.name}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.runs}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.balls}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fours}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.sixers}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fifties}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.centuries}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">
//                         {calculateStrikeRate(batsman.runs, batsman.balls)}
//                       </td>
//                     </tr>
//                   ))}
                  
//                   {/* EXTRAS row 

//                   <tr>
//                     <td className="px-2 py-1 text-sm font-medium text-gray-900">EXTRAS</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="7">
//                       {EXTRAS}
//                     </td>
//                   </tr>
//                   */}
//                   {/* TOTAL row 
//                   <tr>
//                     <td className="px-2 py-1 text-sm font-bold text-gray-900">TOTAL</td>
//                     <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="7">
//                       {TOTAL}
//                     </td>
//                   </tr>
//                   */}
//                 </tbody>
//               </table>
//             ) : (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filterInningData(inning === '1st INNING' ? '1' : '2').map((bowler, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.player.name}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runsConceded}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">
//                         {calculateEconomyRate(bowler.runsConceded, bowler.overs)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Toggle Button */}
//           <div className="flex justify-center mb-8">
//             <button
//               className="bg-[#4A0D34] text-white text-sm font-medium px-4 py-2 rounded-lg"
//               onClick={toggleTable}
//             >
//               {currentTable === 'batsmen' ? 'Show Bowlers' : 'Show Batsmen'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsTable;

// import React, { useEffect, useState } from 'react';
// import backgroundImage from '../assets/images/Trophy.png'; // Update the path to your image

// const ResultsTable = ({ matchId }) => {
//   const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables
//   const [matchData, setMatchData] = useState([]);
//   const [inning, setInning] = useState('1st INNING');
//   const [matchType, setMatchType] = useState('');

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchMatchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/playerStats/match/player-stats?matchId=${matchId}`
//         );
//         const data = await response.json();
//         setMatchData(data);

//         // Set match type (assuming all records have the same match type)
//         if (data.length > 0) {
//           setMatchType(data[0].match.type);
//         }
//       } catch (error) {
//         console.error('Error fetching match data:', error);
//       }
//     };

//     fetchMatchData();
//   }, [matchId]);

//   // Filter the data based on the current inning
//   const filterInningData = (inningNumber) => {
//     return matchData.filter((stat) => stat.inning === inningNumber);
//   };

//   // Function to handle table switch
//   const toggleTable = () => {
//     setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
//   };

//   // Calculate strike rate for batsmen
//   const calculateStrikeRate = (runs, balls) => {
//     return balls > 0 ? ((runs / balls) * 100).toFixed(2) : '0.00';
//   };

//   // Calculate economy rate for bowlers
//   const calculateEconomyRate = (runsConceded, overs) => {
//     return overs > 0 ? (runsConceded / overs).toFixed(2) : '0.00';
//   };

//   // Constants for extras and total (for demonstration purposes)
//   const EXTRAS = 12;
//   const TOTAL = "192/6 (20 overs)";

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         {/* Additional Sections */}
//         <div className="p-6 max-w-screen-xl mx-auto mt-5">
//           {/* Top Bar */}
//           <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
//             <div className="flex items-center">
//               {matchType === 'Test' && (
//                 <select
//                   className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
//                   value={inning}
//                   onChange={(e) => setInning(e.target.value)}
//                 >
//                   {/* Handle innings for Test match type */}
//                   <option value="1st INNING">1st Inning</option>
//                   <option value="2nd INNING">2nd Inning</option>
//                 </select>
//               )}
//             </div>
//             <div className="text-gray-700 font-medium text-sm">
//               {/* Display total score */}
//               RICHMOND COLLEGE GALLE
//             </div>
//           </div>

//           {/* Batsmen or Bowlers Table */}
//           <div className="table-container overflow-x-auto overflow-y-auto mb-8 h-72">
//             {currentTable === 'batsmen' ? (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">B</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">4s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">6s</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">50</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">100</th>
//                     <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">SR</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filterInningData(inning === '1st INNING' ? '1' : '2').map((batsman, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-2 text-sm font-medium text-gray-900">{batsman.player.name}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.runs}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.balls}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fours}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.sixers}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fifties}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.centuries}</td>
//                       <td className="px-2 py-2 text-sm text-center text-gray-500">
//                         {calculateStrikeRate(batsman.runs, batsman.balls)}
//                       </td>
//                     </tr>
//                   ))}

//                 </tbody>
//               </table>
//             ) : (
//               <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
//                 <thead className="bg-[#4A0D34] text-white">
//                   <tr>
//                     <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
//                     <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filterInningData(inning === '1st INNING' ? '1' : '2').map((bowler, index) => (
//                     <tr key={index}>
//                       <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.player.name}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runsConceded}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
//                       <td className="px-2 py-1 text-sm text-center text-gray-500">
//                         {calculateEconomyRate(bowler.runsConceded, bowler.overs)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>

//           {/* Toggle Button */}
//           <div className="flex justify-center mb-8">
//             <button
//               className="bg-[#4A0D34] text-white text-sm font-medium px-4 py-2 rounded-lg"
//               onClick={toggleTable}
//             >
//               {currentTable === 'batsmen' ? 'Show Bowlers' : 'Show Batsmen'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsTable;


// MAKE THIS COMPONENT RES[PONSIVE TO ANY SCREEN.
import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/images/Trophy.png'; // Update the path to your image

const ResultsTable = ({ matchId }) => {
  const [currentTable, setCurrentTable] = useState('batsmen');
  const [matchData, setMatchData] = useState([]);
  const [inning, setInning] = useState('1st INNING');
  const [matchType, setMatchType] = useState('');
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}playerStats/match/player-stats?matchId=${matchId}`
        );
        const data = await response.json();
        setMatchData(data);

        if (data.length > 0) {
          setMatchType(data[0].match.type);
        }
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatchData();
  }, [matchId]);

  const filterInningData = (inningNumber) => {
    return matchData.filter((stat) => stat.inning === inningNumber);
  };

  const toggleTable = () => {
    setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
  };

  const calculateStrikeRate = (runs, balls) => {
    return balls > 0 ? ((runs / balls) * 100).toFixed(2) : '0.00';
  };

  const calculateEconomyRate = (runsConceded, overs) => {
    return overs > 0 ? (runsConceded / overs).toFixed(2) : '0.00';
  };

  return (
    <div
      className="flex justify-end w-full h-auto py-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full md:w-3/5 p-4 md:p-6 py-8">
        <div className="p-6 max-w-screen-xl mx-auto mt-5 bg-gray-900 bg-opacity-70 rounded-lg shadow-lg">
          <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
            <div className="flex items-center">
            {(matchType === 'Test' || matchType === '2 Day' || matchType === '3 Day') && (
                <select
                  className="px-3 py-1 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-full md:w-64 text-xs text-white"
                  value={inning}
                  onChange={(e) => setInning(e.target.value)}
                >
                  <option value="1st INNING">1st Inning</option>
                  <option value="2nd INNING">2nd Inning</option>
                </select>
              )}
            </div>
            <div className="text-white font-medium text-xs md:text-sm">
              RICHMOND COLLEGE GALLE
            </div>
          </div>

          <div className="table-container overflow-x-auto overflow-y-auto mb-8 h-64 md:h-72">
            {currentTable === 'batsmen' ? (
              <table className="w-full table-auto divide-y divide-gray-600">
                <thead className="bg-[#4A0D34] text-white">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">B</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">4s</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">6s</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">50</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">100</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">SR</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-600 text-white">
                  {filterInningData(inning === '1st INNING' ? '1' : '2').map((batsman, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 text-xs md:text-sm font-medium">{batsman.player.name}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.runs}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.balls}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.fours}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.sixers}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.fifties}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{batsman.centuries}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">
                        {calculateStrikeRate(batsman.runs, batsman.balls)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full table-auto divide-y divide-gray-600">
                <thead className="bg-[#4A0D34] text-white">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">O</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">W</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-600 text-white">
                  {filterInningData(inning === '1st INNING' ? '1' : '2').map((bowler, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 text-xs md:text-sm font-medium">{bowler.player.name}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{bowler.overs}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{bowler.runsConceded}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">{bowler.wickets}</td>
                      <td className="px-2 py-2 text-xs md:text-sm text-center">
                        {calculateEconomyRate(bowler.runsConceded, bowler.overs)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="flex justify-center mb-8">
            <button
              className="bg-[#4A0D34] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-[#6A0D34] shadow-md"
              onClick={toggleTable}
            >
              {currentTable === 'batsmen' ? 'Show Bowlers' : 'Show Batsmen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
