

// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-6xl font-bold text-outline">LATEST</h1>
//             <h2 className="text-6xl font-extrabold text-purple-800 tracking-wide">NEWS</h2>
//             <p className="text-gray-500 mt-4 max-w-xs">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-[7rem] font-bold text-outline">LATEST</h1> {/* Increased font size */}
//             <h2 className="text-[7rem] font-extrabold text-purple-800 mt-[-3rem]">NEWS</h2> {/* Increased font size */}
//             <p className="text-gray-500 mt-4 max-w-xs">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;


// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = window.innerWidth >= 1024 ? 2.5 : 1; // Adjust for responsiveness

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-[4rem] md:text-[5rem] lg:text-[7rem] italic font-bold text-outline">LATEST</h1>
//             <h2 className="text-[4rem] md:text-[5rem] lg:text-[7rem] italic font-extrabold text-[#4A0D34] mt-[-3rem]">
//               NEWS
//             </h2>
//             <p className="text-gray-500 mt-4 max-w-xs text-sm md:text-base lg:text-lg">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * (100 / visibleNews)}%)` }} // Adjusted for responsiveness
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full sm:w-[50%] lg:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-3xl lg:text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-3xl lg:text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container ml-auto px-0"> {/* Removed padding on the container */}
//         <div className="flex gap-4">
//            {/* Left Heading Section */}
//           <div className="flex-grow-[1.5] mt-24 w-[1200px]"> {/* Set fixed width for the heading section */}
//             <div className="flex items-end space-x-0"> {/* Flexbox to align headings */}
//               <h1 className="text-6xl font-extrabold text-[#4A0D34] tracking-wide">
//                 LATEST NEWS
//               </h1> {/* Combined the headings into one line */}
//             </div>
//             <p className="text-gray-500 mt-4 max-w-md">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section */}
//           <div className="flex-grow-[2]">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 3 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12 ">
     
//         <div className="flex gap-0">
//           {/* Left Heading Section */}
//           <div className="w-[50%] mt-24 ml-20"> {/* Set fixed width for the heading section */}
//             <div className="flex items-end space-x-0">
//               <h1 className="text-[3rem] font-extrabold text-[#00175F] tracking-wide ">
//                 LATEST NEWS
//               </h1>
//             </div>
//             <p className="text-gray-500 mt-4 max-w-md">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section */}
//           <div className="w-[100%] ml-20 ">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Move by 1/3 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%]  p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[500px] object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-[#CBECFF]"
//                     : "text-purple-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
       
//       </div>
//     </section>
//   );
// };

// export default LatestNews;
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for making the API request

// const LatestNews = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 3 news items at a time

//   useEffect(() => {
//     // Function to fetch news items from the API
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/news");
//         const data = response.data;
//         // Take the top 5 news items from the response
//         const topFiveNews = data.slice(0, 5).map((newsItem) => ({
//           title: newsItem.heading, // Use heading as the title
//           image: newsItem.imageUrl, // Use imageUrl as the image
//         }));
//         setNewsItems(topFiveNews); // Update state with the top 5 news
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews(); // Call the function to fetch news on component mount
//   }, []);

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="flex gap-0">
//         {/* Left Heading Section */}
//         <div className="w-[50%] mt-24 ml-20">
//           <div className="flex items-end space-x-0">
//             <h1 className="text-[3rem] font-extrabold text-[#00175F] tracking-wide">
//               LATEST NEWS
//             </h1>
//           </div>
//           <p className="text-gray-500 mt-4 max-w-md">
//             Stay tuned for the latest news from our school cricket teams! From
//             thrilling match victories to upcoming tournaments and player
//             achievements, this is your go-to spot for all the action.
//           </p>
//           <button className="mt-6 px-8 py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
//             MORE HERE &rarr;
//           </button>
//         </div>

//         {/* Right News Section */}
//         <div className="w-[100%] ml-20">
//           {/* News carousel */}
//           <div className="overflow-hidden w-full">
//             <div
//               className="flex transition-transform duration-300"
//               style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
//             >
//               {newsItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-[500px] object-cover rounded-lg"
//                   />
//                   <div className="p-4">
//                     <p className="font-semibold text-gray-700">{item.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Arrow buttons below the carousel */}
//           <div className="flex justify-center mt-4 space-x-8">
//             {/* Left arrow */}
//             <button
//               onClick={prevSlide}
//               className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
//                 currentSlide === 0
//                   ? "text-[#CBECFF]"
//                   : "text-[#4A0D34] hover:text-[#00175F]"
//               }`}
//               disabled={currentSlide === 0}
//             >
//               &#8592;
//             </button>

//             {/* Right arrow */}
//             <button
//               onClick={nextSlide}
//               className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
//                 currentSlide >= newsItems.length - visibleNews
//                   ? "text-[#CBECFF]"
//                   : "text-purple-[#4A0D34] hover:text-[#00175F]"
//               }`}
//               disabled={currentSlide >= newsItems.length - visibleNews}
//             >
//               &#8594;
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

// Make the component Responsive to any screen

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for making the API request
// import { useNavigate } from 'react-router-dom';

// const LatestNews = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 1; // Show 1 news item at a time on mobile
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_API_URL;

//   // useEffect(() => {
//   //   // Function to fetch news items from the API
//   //   const fetchNews = async () => {
//   //     try {
//   //       const response = await axios.get(`${API_URL}news`);
//   //       const data = response.data;
//   //       // Take the top 5 news items from the response
//   //       const topFiveNews = data.slice(0, 5).map((newsItem) => ({
//   //         title: newsItem.heading, // Use heading as the title
//   //         image: newsItem.imageUrl, // Use imageUrl as the image
//   //       }));
//   //       setNewsItems(topFiveNews); // Update state with the top 5 news
//   //     } catch (error) {
//   //       console.error("Error fetching news:", error);
//   //     }
//   //   };

//   //   fetchNews(); // Call the function to fetch news on component mount
//   // }, []);


//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(`${API_URL}news`);
//         const data = response.data;

//         const topFiveNews = data.slice(0, 5).map((newsItem) => ({
//           title: newsItem.heading,
//           image: `http://rcc.dockyardsoftware.com/images/${newsItem.imageUrl ? newsItem.imageUrl.split("/").pop() : "default.jpg"}?cacheBust=${Date.now()}`,
//         }));
//         setNewsItems(topFiveNews);

        
//         // Filter news items that are today or earlier, then sort and slice to get the latest 5
//         const today = new Date();
//         const filteredNews = data
//         .filter(newsItem => new Date(newsItem.dateTime) <= today)
//         .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
//         .slice(0, 5)
//         .map(newsItem => ({
//             title: newsItem.heading,
//             image: Array.isArray(`${`http://rcc.dockyardsoftware.com/images/${ newsItem.images ? newsItem.images.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`) && newsItem.images.length > 0
//               ? (typeof newsItem.images[0] === 'string' 
//                  ?  `${`http://rcc.dockyardsoftware.com/images/${ newsItem.images[0] ? newsItem.images[0].split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}` // If it's a string, use it directly
//                  : newsItem.images[0].imageUrl) // If it's an object, access imageUrl
//               : '', // Fallback
//         }));
      
//         setNewsItems(filteredNews);

//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);
//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     } else {
//       setCurrentSlide(0); // Loop back to the first slide
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     } else {
//       setCurrentSlide(newsItems.length - 1); // Loop to the last slide
//     }
//   };

//   const handleButtonClick = () => {
//     navigate('/initial-news'); // Replace with your target page
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="flex flex-col md:flex-row gap-0">
//         {/* Left Heading Section */}
//         <div className="w-full md:w-[50%] mt-8 md:mt-24 md:ml-20 px-4 md:px-0">
//           <div className="flex items-end space-x-0">
//             <h1 className="text-2xl md:text-[3rem] font-extrabold text-[#00175F] tracking-wide">
//               LATEST NEWS
//             </h1>
//           </div>
//           <p className="text-gray-500 mt-4 max-w-md">
//             Stay tuned for the latest news from our school cricket teams! From
//             thrilling match victories to upcoming tournaments and player
//             achievements, this is your go-to spot for all the action.
//           </p>
//           <button 
//             onClick={handleButtonClick}
//             className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
//             MORE HERE &rarr;
//           </button>
//         </div>

//         {/* Right News Section */}
//         <div className="w-full md:w-[100%] mt-8 md:ml-20">
//           {/* Mobile News Carousel */}
//           <div className="block md:hidden">
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Move by full width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={`${`http://rcc.dockyardsoftware.com/images/${ item.image ? item.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
//                       alt={item.title}
//                       className="w-full h-[250px] object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700 text-sm">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons for mobile carousel */}
//             <div className="flex justify-center mt-4 space-x-4">
//               <button
//                 onClick={prevSlide}
//                 className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8592;
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>

//           {/* Desktop News Carousel */}
//           <div className="hidden md:block">
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Show 3 items at a time
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[100%] md:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={`${`http://rcc.dockyardsoftware.com/images/${ item.image ? item.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
//                       alt={item.title}
//                       className="w-full h-[250px] md:h-[500px] object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700 text-sm md:text-base">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons for desktop carousel */}
//             <div className="flex justify-center mt-4 space-x-4 md:space-x-8">
//               <button
//                 onClick={prevSlide}
//                 className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8592;
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for making the API request
// import { useNavigate } from 'react-router-dom';

// const LatestNews = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 1; // Show 1 news item at a time on mobile
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(`${API_URL}news`);
//         const data = response.data;

//         const topFiveNews = data.slice(0, 5).map((newsItem) => ({
//           title: newsItem.heading,
//           image: Array.isArray(newsItem.images) && newsItem.images.length > 0 
//             ? `http://rcc.dockyardsoftware.com/images/${newsItem.images[0].imageUrl ? newsItem.images[0].imageUrl.split("/").pop() : "default.jpg"}?cacheBust=${Date.now()}` // Get the first image's URL
//             : `http://rcc.dockyardsoftware.com/images/default.jpg?cacheBust=${Date.now()}`, // Fallback to default image
//         }));

//         setNewsItems(topFiveNews);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     } else {
//       setCurrentSlide(0); // Loop back to the first slide
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     } else {
//       setCurrentSlide(newsItems.length - 1); // Loop to the last slide
//     }
//   };

//   const handleButtonClick = () => {
//     navigate('/initial-news'); // Replace with your target page
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="flex flex-col md:flex-row gap-0">
//         {/* Left Heading Section */}
//         <div className="w-full md:w-[50%] mt-8 md:mt-24 md:ml-20 px-4 md:px-0">
//           <div className="flex items-end space-x-0">
//             <h1 className="text-2xl md:text-[3rem] font-extrabold text-[#00175F] tracking-wide">
//               LATEST NEWS
//             </h1>
//           </div>
//           <p className="text-gray-500 mt-4 max-w-md">
//             Stay tuned for the latest news from our school cricket teams! From
//             thrilling match victories to upcoming tournaments and player
//             achievements, this is your go-to spot for all the action.
//           </p>
//           <button 
//             onClick={handleButtonClick}
//             className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
//             MORE HERE &rarr;
//           </button>
//         </div>

//         {/* Right News Section */}
//         <div className="w-full md:w-[100%] mt-8 md:ml-20">
//           {/* Mobile News Carousel */}
//           <div className="block md:hidden">
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Move by full width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[250px] object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700 text-sm">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons for mobile carousel */}
//             <div className="flex justify-center mt-4 space-x-4">
//               <button
//                 onClick={prevSlide}
//                 className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8592;
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>

//           {/* Desktop News Carousel */}
//           <div className="hidden md:block">
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Show 3 items at a time
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[100%] md:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[250px] md:h-[500px] object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700 text-sm md:text-base">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons for desktop carousel */}
//             <div className="flex justify-center mt-4 space-x-4 md:space-x-8">
//               <button
//                 onClick={prevSlide}
//                 className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8592;
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
//                   currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
//                 }`}
//                 disabled={newsItems.length <= 1} // Disable if only one news item
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;


import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making the API request
import { useNavigate } from 'react-router-dom';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleNews = 1; // Show 1 news item at a time on mobile
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`);
  };
  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_URL}news`);
        const data = response.data;

        const topFiveNews = data.slice(0, 5).map((newsItem) => ({
          id: newsItem.id, // Include the news ID
          title: newsItem.heading,
          image: Array.isArray(newsItem.images) && newsItem.images.length > 0 
            ? `http://rcc.dockyardsoftware.com/images/${newsItem.images[0].imageUrl ? newsItem.images[0].imageUrl.split("/").pop() : "default.jpg"}?cacheBust=${Date.now()}` // Get the first image's URL
            : `http://rcc.dockyardsoftware.com/images/default.jpg?cacheBust=${Date.now()}`, // Fallback to default image
        }));

        setNewsItems(topFiveNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    if (currentSlide < newsItems.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(newsItems.length - 1); // Loop to the last slide
    }
  };

  const handleButtonClick = () => {
    navigate('/initial-news'); // Replace with your target page
  };

  return (
    <section className="bg-white py-12">
      <div className="flex flex-col md:flex-row gap-0">
        {/* Left Heading Section */}
        <div className="w-full md:w-[50%] mt-8 md:mt-24 md:ml-20 px-4 md:px-0">
          <div className="flex items-end space-x-0">
            <h1 className="text-2xl md:text-[3rem] font-extrabold text-[#00175F] tracking-wide">
              LATEST NEWS
            </h1>
          </div>
          <p className="text-gray-500 mt-4 max-w-md">
            Stay tuned for the latest news from our school cricket teams! From
            thrilling match victories to upcoming tournaments and player
            achievements, this is your go-to spot for all the action.
          </p>
          <button 
            onClick={handleButtonClick}
            className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
            MORE HERE &rarr;
          </button>
        </div>

        {/* Right News Section */}
        <div className="w-full md:w-[100%] mt-8 md:ml-20">
          {/* Mobile News Carousel */}
          <div className="block md:hidden">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Move by full width
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] object-cover rounded-lg"
                    /> */}

<img
  src={item.image}
  alt={item.title}
  className="w-full h-[250px] object-cover rounded-lg cursor-pointer"
  onClick={() => handleNewsClick(item.id)}
/>
<p 
  className="font-semibold text-gray-700 text-sm cursor-pointer"
  onClick={() => handleNewsClick(item.id)}
>
  {item.title}
</p>

                    <div className="p-4">
                      {/* <p className="font-semibold text-gray-700 text-sm">{item.title}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons for mobile carousel */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={prevSlide}
                className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8592;
              </button>

              <button
                onClick={nextSlide}
                className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Desktop News Carousel */}
          <div className="hidden md:block">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Show 3 items at a time
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-[100%] md:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] md:h-[500px] object-cover rounded-lg"
                    /> */}

<img
  src={item.image}
  alt={item.title}
  className="w-full h-[250px] md:h-[500px] object-cover rounded-lg cursor-pointer"
  onClick={() => handleNewsClick(item.id)}
/>
<p 
  className="font-semibold text-gray-700 text-sm md:text-base cursor-pointer"
  onClick={() => handleNewsClick(item.id)}
>
  {item.title}
</p>

                    <div className="p-4">
                      {/* <p className="font-semibold text-gray-700 text-sm md:text-base">{item.title}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons for desktop carousel */}
            <div className="flex justify-center mt-4 space-x-4 md:space-x-8">
              <button
                onClick={prevSlide}
                className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8592;
              </button>

              <button
                onClick={nextSlide}
                className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

