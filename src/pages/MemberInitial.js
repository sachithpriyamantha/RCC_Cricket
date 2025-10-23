// import React, { useState }  from 'react';
// import Navbar from '../components/MemberNavbar';

// import ScoreCard from '../components/ScoreCard';
// import ResultsTable from '../components/ResultsTable';
// import Number from '../components/Number';
// import LatestNews from '../components/MemberLatestNews';
// import UpcomingMatches from '../components/UpcommingMatches';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import videoSrc from '../assets/images/new.mp4'; // Corrected import for video
// import Highlights from '../components/Highlights';
// import videoSrc1 from '../assets/images/MP5.mp4';
// import RCCRIC from '../assets/images/groundback.png';
//  import CroppedImage from '../assets/images/Heroes_BacK_Image.png';
//  import {motion} from 'framer-motion';

// const HomePage = () => {
//   const [matchId, setMatchId] = useState(null); // State to manage matchId

//   // Callback function to handle matchId received from ScoreCard
//   const handleMatchId = (id) => {
//     console.log('Match ID:', id);
//     setMatchId(id);
//   };
//   return (
//     <>
//       <Navbar />



      
//      {/* Video Background for large screens
//      <div className="relative w-full h-screen md:h-[75vh] lg:h-[100vh]">
//         <video
//           className="absolute inset-0 w-full h-full object-cover hidden md:block" // Visible only on medium screens and up
//           autoPlay
//           loop={false}
//           muted
//           style={{ zIndex: -1 }}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div> */}

//       {/* Video Background for mobile screens
//       <div className="">
//         <video
//           className="absolute inset-0 w-full h-full object-cover block md:hidden" // Visible only on small screens
//           autoPlay
//           loop={false}
//           muted
//           style={{ zIndex: -1 }}
//         >
//           <source src={videoSrc1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div> */}


// {/*Background  */}
// <div
//   className="relative w-full h-screen flex flex-col items-center justify-center"
//   style={{
//     backgroundImage: `url(${RCCRIC})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   }}
// >
//   {/* Richmond Text */}
//   <motion.h1
//     id="richmond-text"
//     data-text="Richmond"
//     className="effect z-[5] text-center"
//     initial={{ opacity: 0, y: -300 }}
//     animate={{ opacity: 1, y: -100 }}
//     transition={{ duration: 1, delay: 1 }}
//   >
//     Richmond
//   </motion.h1>
//   {/* Background for the two players */}
//       <div
//         className="absolute w-full h-[80%] z-[10] flex items-center justify-center mt-14"
//         style={{
//           backgroundImage: `url(${CroppedImage})`,
//           backgroundSize: "contain", // Responsive scaling
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* College Text */}
//         <motion.h1
//           id="college-text"
//           data-text="College"
//           className="effect z-[15] text-center"
//           initial={{ opacity: 0, y: 300 }}
//           animate={{ opacity: 1, y: 10 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           College
//         </motion.h1>
//       </div>
//     </div>

//       {/* Other Components */}
//       <div className="w-full">
//          {/* Pass handleMatchId as a prop to ScoreCard */}
//          <ScoreCard onMatchId={handleMatchId} />
        
//         {/* Conditionally render ResultsTable only when matchId is available */}
//         {matchId && <ResultsTable matchId={matchId} />}
//         <Number />
//         <LatestNews />
//         <Highlights />
//         <UpcomingMatches />
//         <Hero />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;


import Navbar from '../components/MemberNavbar';
import React, { useState, useEffect } from 'react';

import {motion} from 'framer-motion';

import ScoreCard from '../components/ScoreCard';
import ResultsTable from '../components/ResultsTable';
import Number from '../components/Number';
import LatestNews from '../components/LatestNews';
import UpcomingMatches from '../components/UpcommingMatches';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import videoSrc from '../assets/images/new.mp4';
import videoSrc1 from '../assets/images/MP5.mp4';
import Highlights from '../components/Highlights';

import bgImg from '../assets/images/Frame 152.png';
import RCCRIC from '../assets/images/groundback.png';
import CroppedImage from '../assets/images/players_image_home.png';
import mobileBG from '../assets/images/mobile1.png';
import mobilebg1 from '../assets/images/Rcc1.png';

const HomePage = () => {
  const [matchId, setMatchId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Callback function to handle matchId received from ScoreCard
  const handleMatchId = (id) => {
    setMatchId(id);
  };

  // Handle screen size change for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px breakpoint for mobile
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />

      {/* Background for larger screens */}
      <div
        className={`relative w-full h-screen flex flex-col items-center justify-center ${isMobile ? 'hidden' : 'show-on-large'}`}
        style={{
          backgroundImage: `url(${RCCRIC})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Richmond Text */}
        <motion.h1
          id="richmond-text"
          data-text="Richmond"
          className="effect z-[5] text-center hide-on-small"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Richmond
        </motion.h1>
        {/* Background for the two players */}
        <div
          className="absolute w-full h-[80%] z-[10] flex items-center justify-center mt-14 hide-on-small"
          style={{
            backgroundImage: `url(${CroppedImage})`,
            backgroundSize: "contain", // Responsive scaling
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* College Text */}
          <motion.h1
            id="college-text"
            data-text="College"
            className="effect z-[15] text-center"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1, delay: 1 }}
          >
            College
          </motion.h1>
        </div>
      </div>

      {/* MOBILE VIEW */}
      {isMobile && (
        <div
          className="relative w-full h-screen flex flex-col items-center justify-center show-on-small"
          style={{
            backgroundImage: `url(${mobilebg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Buttons in the bottom-right corner */}
<div 
  className="absolute bottom-4 right-4 flex flex-col space-y-4 z-50" // Ensure buttons are on top
>
  {/* SLCSA Button */}
  <a 
    href="https://slsca.batsman.com/live" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full"
  >
    <button className="bg-[#10164C] text-white px-6 py-2 rounded-lg hover:bg-[#0c113a] w-40">
      SLCSA ↗
    </button>
  </a>

  {/* Crick Info Button */}
  <a 
    href="https://www.espncricinfo.com/live-cricket-score" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full"
  >
    <button className="bg-[#10164C] text-white px-6 py-2 rounded-lg hover:bg-[#0c113a] w-40">
      Crick Info
    </button>
  </a>

  {/* Sponsored By Button */}
  <a 
    href="/role"
    className="w-full"
  >
    <button className="bg-[#4A0D34] text-white px-6 py-2 rounded-lg hover:bg-[#3a0b2a] w-40">
      Sponsored By
    </button>
  </a>
</div>

      {/* Other Components */}
      <div className="w-full">
        <ScoreCard onMatchId={handleMatchId} />

        {/* Conditionally render ResultsTable only when matchId is available */}
        {matchId && <ResultsTable matchId={matchId} />}

        <Number />
        <LatestNews />
        <Highlights />
        <UpcomingMatches />
        <Hero />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;


