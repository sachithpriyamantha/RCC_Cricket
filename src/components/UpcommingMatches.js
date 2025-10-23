

// import React from "react"; 
// import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
// import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location
// import titleImage from '../assets/images/Upcomming Matches.png'; // Image path for the title

// const MatchTable = () => {
//   const matches = [
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     // Add more matches as needed
//   ];

//   return (
//     <div className="w-full p-6">
//       {/* Title Image with Enlarged Effect */}
//       <div className="flex justify-center mb-8">
//         <img 
//           src={titleImage} 
//           alt="Upcoming Matches" 
//           className="w-full h-auto md:w-2/3 lg:w-1/2 transform scale-105 transition-transform duration-500" // Enlarged image with scaling effect
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="min-w-full border-collapse">
//           {/* Table Header */}
//           <thead className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
//             <tr>
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Time</th>
//               <th className="px-4 py-2 text-left">Match</th>
//               <th className="px-4 py-2 text-left">Venue</th>
//             </tr>
//           </thead>
//           {/* Table Body */}
//           <tbody>
//             {matches.map((match, index) => (
//               <tr key={index} className="border-t border-gray-300">
//                 <td className="px-4 py-4 bg-blue-50">{match.date}</td>
//                 <td className="px-4 py-4 bg-blue-50">{match.time}</td>
//                 <td className="px-4 py-4 bg-blue-50 flex items-center">
//                   <img
//                     src={match.team1Logo}
//                     alt={`${match.team1} logo`}
//                     className="w-6 h-6 mr-2"
//                   />
//                   {match.team1}
//                   <span className="mx-2">vs</span>
//                   <img
//                     src={match.team2Logo}
//                     alt={`${match.team2} logo`}
//                     className="w-6 h-6 mr-2"
//                   />
//                   {match.team2}
//                 </td>
//                 <td className="px-4 py-4 bg-blue-50">{match.venue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MatchTable;

// import React from "react"; 
// import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
// import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location


// const MatchTable = () => {
//   const matches = [
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//         date: "09/19/2024",
//         time: "8:30 A.M.",
//         team1: "RICH",
//         team2: "MAHI",
//         venue: "Richmond Cricket Ground",
//         team1Logo: richLogo,
//         team2Logo: mahiLogo,
//       },
//       {
//         date: "09/19/2024",
//         time: "8:30 A.M.",
//         team1: "RICH",
//         team2: "MAHI",
//         venue: "Richmond Cricket Ground",
//         team1Logo: richLogo,
//         team2Logo: mahiLogo,
//       },
//       {
//         date: "09/19/2024",
//         time: "8:30 A.M.",
//         team1: "RICH",
//         team2: "MAHI",
//         venue: "Richmond Cricket Ground",
//         team1Logo: richLogo,
//         team2Logo: mahiLogo,
//       },
//     // Add more matches as needed
//   ];

  
  
//   return (
//     <div className="w-full">
//       <div className="relative w-fit ml-20 mt-6">
//         {/* Background and foreground text combined */}
//         <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-[#00175F]">
//           UPCOMING MATCHES
//         </p>
//       </div>
  
//       {/* Table */}
//       <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg mb-12 ml-20 mr-20">
//         <table className="min-w-full border-collapse rounded-lg overflow-hidden">
//           {/* Table Header */}
//           <thead className="bg-gradient-to-r from-[#00175F] to-[#4A0D34] text-white">
//             <tr>
//               <th className="px-2 md:px-4 py-2 text-center rounded-tl-lg">Date</th>
//               <th className="px-2 md:px-4 py-2 text-center">Time</th>
//               <th className="px-2 md:px-4 py-2 text-center">Match</th>
//               <th className="px-2 md:px-4 py-2 text-center rounded-tr-lg">Venue</th>
//             </tr>
//           </thead>
//           {/* Table Body */}
//           <tbody>
//             {matches.map((match, index) => (
//               <tr
//                 key={index}
//                 className={`border-t text-center border-gray-300 ${
//                   index === 0 ? 'bg-blue-200 text-lg py-6' : 'bg-blue-50'
//                 }`}
//                 style={index === 0 ? { fontSize: '1.25rem', height: '80px' } : {}}
//               >
//                 <td
//                   className={`text-center px-2 md:px-4 py-4 ${
//                     index === 0 ? 'font-semibold' : ''
//                   }`}
//                 >
//                   {match.date}
//                 </td>
//                 <td
//                   className={`text-center px-2 md:px-4 py-4 ${
//                     index === 0 ? 'font-semibold' : ''
//                   }`}
//                 >
//                   {match.time}
//                 </td>
//                 <td
//                   className={`text-center px-2 md:px-4 py-4 ${
//                     index === 0 ? 'font-semibold' : ''
//                   }`}
//                 >
//                   <div className="flex justify-center items-center">
//                     <img
//                       src={match.team1Logo}
//                       alt={`${match.team1} logo`}
//                       className={`w-6 h-6 mr-2 ${index === 0 ? 'w-10 h-10' : ''}`}
//                     />
//                     {match.team1}
//                     <span className="mx-2">vs</span>
//                     <img
//                       src={match.team2Logo}
//                       alt={`${match.team2} logo`}
//                       className={`w-6 h-6 mr-2 ${index === 0 ? 'w-10 h-10' : ''}`}
//                     />
//                     {match.team2}
//                   </div>
//                 </td>
//                 <td
//                   className={`text-center px-2 md:px-4 py-4 ${
//                     index === 0 ? 'font-semibold' : ''
//                   }`}
//                 >
//                   {match.venue}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
  
// };

// export default MatchTable;
// import React, { useEffect, useState } from "react";
// import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
// import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location

// const MatchTable = () => {
//   const [matches, setMatches] = useState([]);

//   // Fetch data from API and filter upcoming matches
//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/matches/all");
//         const data = await response.json();

//         // Filter matches that are after today
//         const today = new Date();
//         const upcomingMatches = data
//           .filter((match) => new Date(match.date) > today)
//           .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

//         // Map API response to match the table structure
//         const mappedMatches = upcomingMatches.map((match) => ({
//           date: new Date(match.date).toLocaleDateString(), // Format the date
//           time: match.time,
//           team1: "Richmond College", // Replace with actual team if available
//           team2: match.opposition, // Opposition is the other team
//           venue: match.venue,
//           team1Logo: richLogo, // Placeholder logo
//           team2Logo: match.logo, // Placeholder logo for now
//         }));

//         setMatches(mappedMatches);
//       } catch (error) {
//         console.error("Failed to fetch matches:", error);
//       }
//     };

//     fetchMatches();
//   }, []);

//   return (
//     <div className="w-full">
//       <div className="relative w-fit ml-20 mt-6">
//         {/* Background and foreground text combined */}
//         <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-[#00175F]">
//           UPCOMING MATCHES
//         </p>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg mb-12 ml-20 mr-20">
//         <table className="min-w-full border-collapse rounded-lg overflow-hidden">
//           {/* Table Header */}
//           <thead className="bg-gradient-to-r from-[#00175F] to-[#4A0D34] text-white">
//             <tr>
//               <th className="px-2 md:px-4 py-2 text-center rounded-tl-lg">Date</th>
//               <th className="px-2 md:px-4 py-2 text-center">Time</th>
//               <th className="px-2 md:px-4 py-2 text-center">Match</th>
//               <th className="px-2 md:px-4 py-2 text-center rounded-tr-lg">Venue</th>
//             </tr>
//           </thead>
//           {/* Table Body */}
//           <tbody>
//             {matches.map((match, index) => (
//               <tr
//                 key={index}
//                 className={`border-t text-center border-gray-300 ${
//                   index === 0 ? "bg-blue-200 text-lg py-6" : "bg-blue-50"
//                 }`}
//                 style={index === 0 ? { fontSize: "1.25rem", height: "80px" } : {}}
//               >
//                 <td className={`text-center px-2 md:px-4 py-4 ${index === 0 ? "font-semibold" : ""}`}>
//                   {match.date}
//                 </td>
//                 <td className={`text-center px-2 md:px-4 py-4 ${index === 0 ? "font-semibold" : ""}`}>
//                   {match.time}
//                 </td>
//                 <td className={`text-center px-2 md:px-4 py-4 ${index === 0 ? "font-semibold" : ""}`}>
//                   <div className="flex justify-center items-center">
//                     <img
//                       src={match.team1Logo}
//                       alt={`${match.team1} logo`}
//                       className={`w-6 h-6 mr-2 ${index === 0 ? "w-10 h-10" : ""}`}
//                     />
//                     {match.team1}
//                     <span className="mx-2">  vs  </span>
//                     <img
//                       src={match.team2Logo}
//                       alt={`${match.team2} logo`}
//                       className={`w-6 h-6 mr-2 ${index === 0 ? "w-10 h-10" : ""}`}
//                     />
//                     {match.team2}
//                   </div>
//                 </td>
//                 <td className={`text-center px-2 md:px-4 py-4 ${index === 0 ? "font-semibold" : ""}`}>
//                   {match.venue}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MatchTable;


import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location

const MatchTable = () => {
  const [matches, setMatches] = useState([]);

  const [showAll, setShowAll] = useState(false); // Toggle to show more rows


  const API_URL = process.env.REACT_APP_API_URL;

  // Fetch data from API and filter upcoming matches
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${API_URL}matches/all`);
        const data = await response.json();

        // Filter matches that are after today
        const today = new Date();
        const upcomingMatches = data
          .filter((match) => new Date(match.date) > today)
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

        // Map API response to match the table structure
        const mappedMatches = upcomingMatches.map((match) => ({
          date: new Date(match.date).toLocaleDateString(), // Format the date
          time: match.time,
          team1: "Richmond College", // Replace with actual team if available
          team2: match.opposition, // Opposition is the other team
          venue: match.venue,
          team1Logo: richLogo, // Placeholder logo
          team2Logo: `http://rcc.dockyardsoftware.com/images/${match.logo ? match.logo.split("/").pop() : "default.jpg"}?cacheBust=${Date.now()}` // Placeholder logo for now
        }));

        setMatches(mappedMatches);
      } catch (error) {
        console.error("Failed to fetch matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full px-4 lg:px-20">
      <div className="relative w-fit mx-auto mt-6">
        <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-[#00175F] text-center">
          UPCOMING MATCHES
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg mb-12">
        <table className="min-w-full border-collapse rounded-lg overflow-hidden">
          {/* Table Header */}

          <thead className="bg-gradient-to-r from-[#00175F] to-[#4A0D34] text-white hidden md:table-header-group">

            <tr>
              <th className="px-2 md:px-4 py-2 text-center rounded-tl-lg">Date</th>
              <th className="px-2 md:px-4 py-2 text-center">Time</th>
              <th className="px-2 md:px-4 py-2 text-center">Match</th>
              <th className="px-2 md:px-4 py-2 text-center rounded-tr-lg">Venue</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {matches.map((match, index) => (
              <tr
                key={index}
                className={`border-t text-center border-gray-300 ${
                  index === 0 ? "bg-blue-200 text-lg py-6" : "bg-blue-50"
                } ${index > 0 && !showAll ? "hidden md:table-row" : ""}`}
                style={index === 0 ? { fontSize: "1.25rem", height: "80px" } : {}}
              >
                {/* Mobile View Layout */}
                <td className="block md:table-cell text-center px-2 py-4 md:px-4 md:py-4 md:font-semibold">
                  <div className="flex flex-col bg-gray-100 p-4 rounded-lg mb-4 shadow">
                    <div className="text-gray-600 font-medium"></div>
                    <div className="text-lg font-semibold text-[#00175F]">{match.date}</div>
                  </div>
                </td>
                <td className="block md:table-cell text-center px-2 py-4 md:px-4 md:py-4 md:font-semibold">
                  <div className="flex flex-col bg-gray-100 p-4 rounded-lg mb-4 shadow">
                    <div className="text-gray-600 font-medium"></div>
                    <div className="text-lg font-semibold text-[#00175F]">{match.time}</div>
                  </div>
                </td>
                <td className="block md:table-cell text-center px-2 py-4 md:px-4 md:py-4 md:font-semibold">
  <div className="flex flex-col bg-gray-100 p-4 rounded-lg mb-4 shadow">
    <div className="text-gray-600 font-medium"></div>
    <div className="flex items-center justify-center"> {/* Center items in the row */}
      <div className="flex items-center mx-2"> {/* Margin for spacing */}
        <img
          src={match.team1Logo}
          alt={`${match.team1} logo`}
          className="w-8 h-8"
        />
        <span className="font-semibold">{match.team1}</span>
      </div>
      <span className="mx-2 text-lg font-bold">vs</span>
      <div className="flex items-center mx-2"> {/* Margin for spacing */}
        <img
          src={match.team2Logo}
          alt={`${match.team2} logo`}
          className="w-8 h-8"
        />
        <span className="font-semibold">{match.team2}</span>
      </div>
    </div>
  </div>
</td>



                <td className="block md:table-cell text-center px-2 py-4 md:px-4 md:py-4 md:font-semibold">
                  <div className="flex flex-col bg-gray-100 p-4 rounded-lg mb-4 shadow">
                    <div className="text-gray-600 font-medium"></div>
                    <div className="text-lg font-semibold text-[#00175F]">{match.venue}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Toggle Button */}
{matches.length > 1 && (
  <div className="flex justify-center mt-4 md:hidden"> {/* Hide on medium and larger screens */}
    <button
      className="flex items-center text-[#00175F] font-semibold hover:underline"
      onClick={toggleShowAll}
    >
      {showAll ? (
        <>
          Show Less <FiChevronUp className="ml-2" />
        </>
      ) : (
        <>
          Show More <FiChevronDown className="ml-2" />
        </>
      )}
    </button>
  </div>
)}

    </div>
  );
};

export default MatchTable;
