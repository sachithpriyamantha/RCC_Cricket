import React, { useEffect, useState  } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import flag from "../assets/images/backDrop3.png";
import { Link } from "react-router-dom";
import richmandLogo from "../assets/images/RLogo.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import ball from "../assets/images/CricketBall-unscreen.gif";
import logo from "../assets/images/RLogo.png";
import MainNavbarToggle from "../components/MainNavBarToggle";

const ScoreCardPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem('accessToken');
  const [matchSummary, setMatchSummary] = useState([]);
  const [playersStats, setPlayersStats] = useState([]);
  const [inningStats, setInningStats] = useState([]);
  const [battingPlayerStats, setBattingPlayerStats] = useState([]);
  const [bawlingPlayerStats, setBawlingPlayerStats] = useState([]);
  const [matchType, setMatchType] = useState(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedInning, setSelectedInning] = useState({}); 
  const [currentMatchID, setCurrentMatchID] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(matchSummary.length / rowsPerPage);

  useEffect(() => {
    setUploading(true);
    axios
      .get(`${API_URL}matchSummary/all`, { 
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          }}
        )
      .then(response => {
        const matchSummary = response.data;
        setMatchSummary(matchSummary);
        // console.log("Match summary Data:", matchSummary);
        setUploading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the match data!", error);
      });
      updateRowsPerPage(); // Initial setup
      window.addEventListener('resize', updateRowsPerPage);
      return () => window.removeEventListener('resize', updateRowsPerPage);
  }, []);

  const updateRowsPerPage = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 1440 && screenHeight >= 900) {
      setRowsPerPage(6); // Desktop screens
    } else if (screenWidth >= 1024 && screenWidth < 1440 && screenHeight >= 600 && screenHeight < 900) {
      setRowsPerPage(5); // Laptop screens
    } else {
      setRowsPerPage(4); // Smaller screens (tablets, mobile)
    }
  };

  const sortedMatches = matchSummary
    .filter(
      (match, index, self) =>
        self.findIndex((m) => m.matchId === match.matchId) === index
    ) // Ensuring unique matches by matchId
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    // console.log("matchID: ", currentMatchID);
    if(currentMatchID){
      axios
        .get(`${API_URL}playerStats/match/player-stats?matchId=${currentMatchID}`, { 
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            }}
          )
        .then(response => {
          const playersStats = response.data;
          setPlayersStats(playersStats);
          // Apply inning filter only for Test matches
          if (matchType === 'Test' || matchType === '2 Day' || matchType === '3 Day') {
            const inningStats = filterInningStats(playersStats, selectedInning[currentMatchID]);
            const battingStats = inningStats.filter(stat => stat.balls > 0);
            const bawlingStats = inningStats.filter(stat => stat.overs > 0);
            setBattingPlayerStats(battingStats);
            setBawlingPlayerStats(bawlingStats);
            setInningStats(inningStats);
          } else {
            // For ODI and T20, show all stats (no inning filter needed)
            const battingStats = playersStats.filter(stat => stat.balls > 0);
            const bawlingStats = playersStats.filter(stat => stat.overs > 0);
            setBattingPlayerStats(battingStats);
            setBawlingPlayerStats(bawlingStats);
            setInningStats(playersStats);
          }
          console.log("Player stats: ", battingPlayerStats[0]);
        })
        .catch(error => {
          console.error("There was an error fetching the player stats data!", error);
        });
      }  
  }, [currentMatchID, selectedInning[currentMatchID], matchType]);

  // Slice data for current page
  const paginatedData = sortedMatches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filterInningStats = (allInningsStats, inningNumber) => {
    return allInningsStats.filter(stat => stat.inning === inningNumber);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to handle inning selection for a specific match
  const handleInningChange = ( e, matchId) => {
    const newInning = e.target.value; // Get the selected inning
    setSelectedInning((prev) => ({
      ...prev,
      [matchId]: newInning, // Update inning for the specific match
    }));
  };

  // // Function to toggle dropdown visibility for each match
  // const toggleDropDown = (match) => {
  //   if (currentMatchID === match.matchId) {
  //     setCurrentMatchID(null); // Close the dropdown if the same match is pressed again
  //     setMatchType(null);
  //   } else {
  //     setCurrentMatchID(match.matchId); // Open the new dropdown and fetch its data
  //     setMatchType(match.type);
  //     const inning = selectedInning[match.matchId];
  //     if (match.type === 'Test' && inning) {
  //       const inningStats = filterInningStats(playersStats, inning);
  //       setPlayersStats(inningStats);
  //     }
  //   }
   // Function to toggle dropdown visibility for each match
const toggleDropDown = (match) => {
  if (currentMatchID === match.matchId) {
    setCurrentMatchID(null); // Close the dropdown if the same match is pressed again
    setMatchType(null);
  } else {
    setCurrentMatchID(match.matchId); // Open the new dropdown and fetch its data
    setMatchType(match.type);
    
    const inning = selectedInning[match.matchId];
    
    // Check if match type is Test, 2-day, or 3-day
    if ((match.type === 'Test' || match.type === '2 Day' || match.type === '3 Day') && inning) {
      const inningStats = filterInningStats(playersStats, inning);
      setPlayersStats(inningStats);
    }
  }
};



  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center items-stretch min-h-screen w-full">
        <div className="lg:flex hidden fixed z-50 justify-center left-0 items-center w-[12%]  h-screen "
           style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-full flex px-5 lg:px-0 ">
          <div className="lg:w-[12%] w-0 "></div>
          <div className="lg:w-[88%] w-full py-5 flex flex-col items-center justify-center h-auto">
            <div className="flex justify-between w-full lg:px-10 pt-3">
              <Link to={"/member"}>
                <img src={logo} className="h-12 w-12" />
              </Link >
              <MainNavbarToggle/>
            </div>
            <div className=" lg:w-[95%] h-full w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg" 
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                
              }}
            >
              <div className="flex justify-between items-center content-center mb-3" >
                <NavbarToggleMenu />
                <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
                  Match Updates
                </h2>
                <h2 className="md:text-2xl text-xl w-14 font-bold text-center font-popins text-[#480D35]">
                
                </h2>
              </div>
              <div
                className=" relative min-w-full divide-y divide-gray-300 max-h-full bg-gray-300 flex flex-col gap-2 lg:py-2 lg:p-2 rounded-lg shadow-lg overflow-auto"
                style={{
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)"
                }}
              >
                {paginatedData.map((match) =>{
                  const currentStats = selectedInning[currentMatchID] && match.matchId === currentMatchID
                    ? matchSummary.find(
                        (item) =>
                          item.matchId === match.matchId && item.inning === selectedInning[currentMatchID]
                      ) || match // Fall back to match if no inning is selected
                    : match;
                  return(
                  <div key={match.matchId} className="relative flex-grow ">
                    <div className=" flex-grow flex min-w-[1010px] items-center justify-between py-2 lg:px-5 px-3 text-lg bg-white rounded text-black">
                      <div className="flex gap-5 items-center w-[30%]">
                        <div className="flex flex-col items-center justify-center w-[45%]">
                          <img src={richmandLogo} alt={match.matchName} className="w-8 h-8"/>
                          <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >Richmond College, Galle</p>
                          <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >{currentStats.runs}/{currentStats.wickets}</p>
                          <p className="lg:text-xs text-xxs text-center font-semibold" >{currentStats.overs} </p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[10%]">
                          <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                            <p className="lg:text-sm text-xs font-serif font-semibold text-[#08165A]">V<span className="lg:text-xl text-lg font-bold text-[#480D35]">S</span></p>
                          <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[45%]">
                          <img src={`${`http://rcc.dockyardsoftware.com/images/${ match.logo ? match.logo.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`} alt={match.matchName} className="w-8 h-8"/>
                          <p className="lg:text-xs text-xxs text-center font-semibold uppercase">{match.opposition}</p>
                          <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >{currentStats.oppositionRuns}/{currentStats.oppositionWickets}</p>
                          <p className="lg:text-xs text-xxs text-center font-semibold" >{currentStats.oppositionOvers}</p>
                        </div>
                      </div>
                      <div className="w-[40%] lg:w-[40%] justify-center flex ">
                        <p className="lg:text-sm text-lg text-center font-bold uppercase flex items-center  text-[#08165A] font-sans">{match.under}<span className="text-black px-3 text-md"> - </span> <span className="text-[#480D35] text-sm"> {match.type}</span> </p>
                      </div>
                      <div className="flex lg:w-[30%] w-[40%] items-center justify-end lg:gap-5">
                        <div className="flex items-center gap-3 tracking-wider">
                        {(match.type === 'Test' || match.type === '2 Day' || match.type === '3 Day') && (
                            <div className={`flex tracking-wider justify-end`}>
                              {/* <label htmlFor={`inning-select-${match.matchId}`} className="text-xs font-bold font-serif">Select Inning:</label> */}
                              <select
                                className="text-xs border border-gray-400 hover:border-gray-600 hover:shadow-sm rounded text-gray-700 px-5 py-1 uppercase"
                                id="inning"
                                value={selectedInning[match.matchId] || ''}
                                onChange={(e) => handleInningChange(e, match.matchId)}
                              >
                                <option value="" selected disabled className="text-xs text-gray-700 px-3 ">Select Inning</option>
                                <option value={1} className="text-xs text-gray-700 px-3 ">Inning 1</option>
                                <option value={2} className=" text-xs text-gray-700 px-3 ">Inning 2</option>
                              </select>
                            </div>
                            ) 
                          }
                          <div className="w-36 flex flex-col justify-end items-end ">
                            <p className=" flex text-sm font-bold text-right text-[#480D35]">{new Date(match.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })} </p>
                            <p className="flex text-xs justify-end  items-end text-right font-semibold">{match.venue} </p>
                          </div>
                        </div>
                        <button
                          className="flex text-2xl font-bold"
                          onClick={() => toggleDropDown(match)}
                        >
                          {currentMatchID === match.matchId 
                            ? <IoIosArrowDropup />
                            : <IoIosArrowDropdown />}
                        </button>
                      </div>
                    
                    </div>
                      {currentMatchID === match.matchId &&
                      <>
                        <table className="min-w-[1010px] items-stretch lg:min-w-full divide-y divide-gray-300 bg-white shadow-md">
                          <thead className=" bg-[#480D35] text-white rounded">
                            <tr>
                              <th className="py-2 px-4 w-[25%] text-left text-xs font-semibold uppercase tracking-wider">
                                Batting
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                                R
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                                B
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold tracking-wider">
                                4s
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold tracking-wider">
                                6s
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                                50
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                                100
                              </th>
                              <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                                <p>SR</p>
                              </th>
                              {/* <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider">
                                <p>{match.runs}/{match.wickets}<span>({match.overs})</span></p>
                              </th> */}
                            </tr>
                          </thead>

                          <tbody className=" divide-y  divide-gray-300">
                            {battingPlayerStats && battingPlayerStats.map((player, index2) =>
                              <tr key={index2} className=" hover:bg-gray-50 h-full">
                                <td className=" px-4 h-8 w-[25%] whitespace-nowrap text-sm text-gray-800 font-bold">
                                  {player.player.name}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.runs}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.balls}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.fours}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.sixers}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.fifties}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {player.centuries}
                                </td>
                                <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                  {(player.runs/player.balls*100).toFixed(2)}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <table className="min-w-[1010px] lg:min-w-full items-stretch divide-y divide-gray-300 bg-white shadow-md">
                        <thead className=" bg-[#08165A] text-white rounded">
                          <tr>
                            <th className="py-2 px-4 w-[25%] text-left text-xs font-semibold uppercase tracking-wider">
                              Bowling
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              O
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              R
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              W
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              M
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              NB
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              WB
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              ECON
                            </th>
                            {/* <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider">
                              <p>{match.oppositionRuns}/{match.oppositionWickets}<span>({match.oppositionOvers})</span></p>
                            </th> */}
                          </tr>
                        </thead>

                        <tbody className=" divide-y  divide-gray-300">
                          {bawlingPlayerStats && bawlingPlayerStats.map((player, index3) =>
                            <tr key={index3} className=" hover:bg-gray-50 h-full">
                              <td className=" px-4 h-8 w-[25%] whitespace-nowrap text-sm text-gray-800 font-bold">
                                {player.player.name}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.overs}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.runsConceded}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.wickets}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.maidens}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.noBalls}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.wides}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {(player.runsConceded/player.overs).toFixed(2)}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      <table className="min-w-[1010px] lg:min-w-full items-stretch divide-y divide-gray-300 bg-white shadow-md">
                        <thead className=" bg-[#1588b6] text-white rounded">
                          <tr>
                            <th className="py-2 px-4 w-[25%] text-left text-xs font-semibold uppercase tracking-wider">
                              Fielding
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              C
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              S
                            </th>
                            <th className="py-2 px-4 w-[9%] text-left text-xs font-semibold uppercase tracking-wider">
                              RO
                            </th>
                          </tr>
                        </thead>

                        <tbody className=" divide-y  divide-gray-300">
                          {inningStats && inningStats.map((player, index4) =>
                            <tr key={index4} className=" hover:bg-gray-50 h-full" >
                              <td className=" px-4 h-8 w-[25%] whitespace-nowrap text-sm text-gray-800 font-bold">
                                {player.player.name}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                              
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                              
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.catches}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.stumps}
                              </td>
                              <td className=" px-4 h-8 w-[9%] whitespace-nowrap text-sm text-gray-600">
                                {player.runOuts}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </>}
                  </div>);
                })}
              </div>
            </div>
            <div className="flex w-[95%] justify-between items-center mt-1 p-1 bg-white shadow-md rounded">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
              >
                <GrLinkPrevious style={{ color: "#fff" }} />
              </button>

              <div className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
              >
                <GrLinkNext style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
        </div>
        {uploading && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreCardPage;