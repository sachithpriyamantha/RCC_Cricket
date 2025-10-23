import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  FaEdit,
  FaPlus,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { message } from "antd";
import { Link } from "react-router-dom";
import MatchStatPopup from "../components/MatchStatPopUp.js";
import { useNavigate } from "react-router-dom";
import EditPopup from "../components/EditMatchDetailPopup.js";
import FormPopup from "../components/MatchFormPopUp.js";
import { GrLinkNext } from "react-icons/gr";
import { MdAssignmentAdd } from "react-icons/md";
import { GrLinkPrevious } from "react-icons/gr";
import flag from "../assets/images/backDrop3.png";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import MainNavbarToggle from "../components/MainNavBarToggle";
import ball from "../assets/images/CricketBall-unscreen.gif";
import ScoreCardPopup from "../components/ScoreCardPopup.js";
import logo from "../assets/images/RLogo.png";
import ScoreCardAIModel from "../components/ScoreCardAIModel.js";
import { IoIosSearch } from "react-icons/io";

const MatchDetails = () => {
  const [matches, setMatches] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [matchId, setMatchId] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [matchOpponent, setMatchOpponent] = useState(null);
  const [matchType, setMatchType] = useState(null);
  const [matchDate, setMatchDate] = useState(null);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isScorePopupOpen, setIsScorePopupOpen] = useState(false);
  const [isScorePopupAIOpen, setIsScorePopupAIOpen] = useState(false);
  const [choiseModelOpen, setChoiseModelOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [matchToDelete, setMatchToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");
  const [filteredMatches, setFilteredsortedMatches] = useState([]);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showTierDropdown, setShowTierDropdown] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [searchingTeams, setSearchingTeams] = useState();
  const [teamOptions, setTeamOptions] = useState([]);
  const [underOptions, setUnderOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);
  const [filters, setFilters] = useState({ type: "", team: "" });
  const [filteredTeamOptions, setFilteredTeamOptions] = useState([]);

  const typeOptions = ["Test", "3 Day" , "2 Day" ,"T20", "1 Day"];

  const teamUnder = [
    "Under 9",
    "Under 11",
    "Under 13",
    "Under 15",
    "Under 17",
    "Under 19",
    "Academy Under 9",
    "Academy Under 11",
    "Academy Under 13",
    "Academy Under 15",
    "Academy Under 17",
    "Academy Under 19",
    "Richmond Legend Over 50",
    "Richmond Legend Over 40",
    "Old Boys"
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1990; i--) {
    years.push(i);
  }

  useEffect(
    () => {
      setUploading(true);
      const fetchMatches = async () => {
        try {
          const response = await axios.get(`${API_URL}matches/all`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          });

          // Sort matches by date in descending order so future dates come first
          setUploading(false);
          const sortedMatches = response.data.sort(
            (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
          );
          setMatches(sortedMatches);

          setUnderOptions([
            ...new Set(response.data.map(match => match.under))
          ]);
          setYearOptions([
            ...new Set(response.data.map(match => match.teamYear))
          ]);

          updateRowsPerPage(); // Initial setup
          window.addEventListener("resize", updateRowsPerPage);
          return () => window.removeEventListener("resize", updateRowsPerPage);
        } catch (error) {
          console.error("Error fetching matches:", error);
        }
      };

      fetchMatches();
    },
    [isSubmitted, isDeleted, API_URL]
  );

  // Generate Team Options with useMemo to avoid redundant calculations
  const uniqueTeams = useMemo(
    () => {
      const teams = [];
      yearOptions.forEach(year => {
        underOptions.forEach(under => {
          teams.push(`${under}-${year}`);
        });
      });

      return Array.from(new Set(teams)).sort((a, b) => {
        const yearA = parseInt(a.split("-").pop(), 10);
        const yearB = parseInt(b.split("-").pop(), 10);
        return yearA - yearB;
      });
    },
    [yearOptions, underOptions]
  );

  const updateRowsPerPage = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 1440 && screenHeight >= 900) {
      setRowsPerPage(10); // Desktop screens
    } else if (
      screenWidth >= 1024 &&
      screenWidth < 1440 &&
      screenHeight >= 600 &&
      screenHeight < 900
    ) {
      setRowsPerPage(8); // Laptop screens
    } else {
      setRowsPerPage(6); // Smaller screens (tablets, mobile)
    }
  };

  useEffect(
    () => {
      const filtered = matches.filter(match => {
        return (
          (filters.type ? match.type === filters.type : true) &&
          (filters.team
            ? `${match.under}-${match.teamYear}` === filters.team
            : true) &&
          (filters.tier ? match.tier === filters.tier : true)
        );
      });
      setFilteredsortedMatches(filtered);
      // console.log("sorted matches: ", filters.team);
    },
    [filters, matches]
  );

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1);
    setShowTypeDropdown(false);
    setShowTeamDropdown(false);
  };

  const totalPages = Math.ceil(filteredMatches.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = filteredMatches.slice(
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

  const handleEdit = match => {
    console.log("match:", match);
    setCurrentMatch(match);
    setIsEditPopupOpen(true);
  };

  const handleDelete = id => {
    setMatchToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try {
      const deleteMatch = await axios.delete(
        `${API_URL}matches/delete/${matchToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error("Error deleting match:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message.error(`Failed to delete: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleAddStat = match => {
    const currentDateTime = new Date();
    const matchDateTime = new Date(`${match.date}T${match.time}`);

    if (matchDateTime > currentDateTime) {
      message.error({
        content:
          "This match is scheduled for a future date. Match summary cannot be added at this time.",
        duration: 10
      });
      return;
    }
    setMatchId(match.matchId);
    setCurrentMatchIndex(match.matchId);
    setMatchType(match.type);
    setIsPopupOpen(true);
  };

  const handleAddScoreCard = match => {
    const currentDateTime = new Date();
    const matchDateTime = new Date(`${match.date}T${match.time}`);

    if (matchDateTime > currentDateTime) {
      message.error({
        content:
          "This match is scheduled for a future date. Player stats cannot be added at this time.",
        duration: 10
      });
      return;
    }
    setMatchType(match.type);
    setMatchId(match.matchId);
    setTeamId(match.teamId);
    setMatchOpponent(match.opposition);
    setMatchType(match.type);
    setIsScorePopupOpen(true);
    setMatchDate(match.date);
  };
 
  const handleEditPopupSubmit = updatedMatchData => {
    const updatedMatches = matches.map(
      (match, index) => (index === currentMatchIndex ? updatedMatchData : match)
    );
    setMatches(updatedMatches);
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleAddPopupClose = () => {
    setIsFormPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
  };
  const handleScorePopupAIOpen = () => {
    setIsScorePopupAIOpen(true);
    setChoiseModelOpen(false);
  };
  const handleScorePopupOpen = () => {
    setIsScorePopupOpen(true);
    setChoiseModelOpen(false);
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatch(null);
  };

  const handleScorePopupClose = () => {
    setIsScorePopupOpen(false);
    setMatchId(null);
  };
  const handleScorePopupAIClose = () => {
    setIsScorePopupAIOpen(false);
    setMatchId(null);
  };

  const handleFormPopupSubmit = newMatchData => {
    setMatches([...matches, newMatchData]);
    setIsFormPopupOpen(false);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatTimeToAMPM = time => {
    const [hours, minutes] = time.split(":");
    let period = "AM";
    let hour = parseInt(hours);

    if (hour >= 12) {
      period = "PM";
      if (hour > 12) hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    return `${hour}:${minutes} ${period}`;
  };

  // Update Team Options
  useEffect(
    () => {
      setTeamOptions(uniqueTeams);
      setFilteredTeamOptions(uniqueTeams); // Initialize filtered options
    },
    [uniqueTeams]
  );

  // Debounce Search Logic
  useEffect(
    () => {
      const timeout = setTimeout(() => {
        if (searchingTeams) {
          setFilteredTeamOptions(
            teamOptions.filter(option =>
              option.toLowerCase().includes(searchingTeams.toLowerCase())
            )
          );
        } else {
          setFilteredTeamOptions(teamOptions);
        }
      }, 300);

      return () => clearTimeout(timeout); // Cleanup timeout
    },
    [searchingTeams, teamOptions]
  );

  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center items-stretch min-h-screen w-full">
        <div
          className="lg:flex hidden justify-center items-center w-[12%] h-auto "
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Navbar />
        </div>
        <div className="w-[88%] h-auto py-4 flex flex-col items-center justify-center">
          <div className="flex justify-between w-full lg:px-10 pt-3">
            <Link to={"/member"}>
              <img src={logo} className="h-12 w-12" />
            </Link>
            <MainNavbarToggle />
          </div>
          <div
            className=" lg:w-[95%] h-full w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <div className="flex justify-between items-center md:mb-3">
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
                Match Details
              </h2>
              <div className="flex gap-3">
                <div className=" hidden md:flex text-gray-600 border bg-white border-gray-300 px-3 rounded-3xl focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
                  <input
                    type="text"
                    onChange={e => setSearchingTeams(e.target.value)}
                    className="border-0 py-1 px-5 w-[90%]  cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600"
                    placeholder="Choose a team"
                    onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                  />
                  <button
                    type="button"
                    className="flex items-center w-[10%] justify-center text-gray-500 hover:text-gray-700 rounded-md"
                    //onClick={handleSearchChange}
                  >
                    <IoIosSearch />
                  </button>
                  {showTeamDropdown &&
                    <div className="absolute mt-8 h-80 hover:overflow-auto overflow-hidden bg-white border rounded shadow-lg z-50">
                      <button
                        onClick={() => handleFilterChange("team", "")}
                        className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                      >
                        All
                      </button>
                      {filteredTeamOptions.map((
                        team // Use 'team' as the map parameter here
                      ) =>
                        <button
                          key={team}
                          onClick={() => handleFilterChange("team", team)} // Use 'team' here as well
                          className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                        >
                          {team}
                        </button>
                      )}
                    </div>}
                </div>
                <button
                  title="Add New"
                  onClick={() => setIsFormPopupOpen(true)}
                  className="bg-green-500 hover:bg-green-600 rounded-full p-1 text-white text-lg lg:text-2xl"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className=" flex md:hidden justify-center items-center mb-3 ">
              <div className="flex text-gray-600 border bg-white border-gray-300 px-1 rounded-3xl focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
                <input
                  type="text"
                  onChange={e => setSearchingTeams(e.target.value)}
                  className="border-0 py-1 px-5 w-[90%]  cursor-pointer rounded-3xl focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600"
                  placeholder="Choose a team"
                  onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                />
                <button
                  type="button"
                  className="flex items-center w-[10%] justify-center text-gray-500 hover:text-gray-700 rounded-md"
                  //onClick={handleSearchChange}
                >
                  <IoIosSearch />
                </button>
                {showTeamDropdown &&
                  <div className="absolute mt-8 h-80 hover:overflow-auto overflow-hidden bg-white border rounded shadow-lg z-50">
                    <button
                      onClick={() => handleFilterChange("team", "")}
                      className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                    >
                      All
                    </button>
                    {filteredTeamOptions.map((
                      team // Use 'team' as the map parameter here
                    ) =>
                      <button
                        key={team}
                        onClick={() => handleFilterChange("team", team)} // Use 'team' here as well
                        className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                      >
                        {team}
                      </button>
                    )}
                  </div>}
              </div>
            </div>
            <div className="flex overflow-x-auto">
              <table className="min-w-full divide-gray-300 bg-gray-200 shadow-md">
                <thead className=" text-white ">
                  <tr className="rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                    <th className="py-3 px-4 lg:rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider">
                      Opponent
                    </th>
                    <th className="py-3  px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Time
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Venue
                    </th>
                    <th className=" relative py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Tier
                      <button
                        onClick={() => setShowTierDropdown(!showTierDropdown)}
                        className="ml-2"
                      >
                        {showTierDropdown ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showTierDropdown &&
                        <div className="absolute h-[74px] overflow-auto custom-scrollbar mt-2 bg-white border rounded shadow-lg z-50">
                          <button
                            onClick={() => handleFilterChange("tier", "")}
                            className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                          >
                            All
                          </button>
                          <button
                            onClick={() => handleFilterChange("tier", "Tier A")}
                            className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Tier A
                          </button>
                          <button
                            onClick={() => handleFilterChange("tier", "Tier B")}
                            className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Tier B
                          </button>
                        </div>}
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Division
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Umpire
                    </th>
                    <th className=" relative py-3 px-4 text-left flex text-xs font-semibold uppercase tracking-wider">
                      Type
                      <button
                        onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                        className="ml-2"
                      >
                        {showTypeDropdown ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showTypeDropdown &&
                        <div className="absolute h-[74px] overflow-auto custom-scrollbar mt-5 bg-white border rounded shadow-lg z-50">
                          <button
                            onClick={() => handleFilterChange("type", "")}
                            className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                          >
                            All
                          </button>
                          {typeOptions.map(type =>
                            <button
                              key={type}
                              onClick={() => handleFilterChange("type", type)}
                              className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {type}
                            </button>
                          )}
                        </div>}
                    </th>
                    <th className=" relative py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Team
                    </th>
                    <th className="py-3 lg:rounded-r-lg px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2" />
                </thead>
                <tbody className="divide-y-2 divide-gray-300">
                  {paginatedData && paginatedData.length === 0
                    ? <tr className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                        <td
                          colSpan={10}
                          className="px-4 py-4 h-20 lg:rounded-lg text-center  whitespace-nowrap text-sm"
                        >
                          There is no data available
                        </td>
                      </tr>
                    : paginatedData.map((match, index) =>
                        <tr
                          key={match.matchId}
                          className=" hover:bg-gray-50 h-[64px] lg:rounded-lg bg-white align-middle"
                        >
                          <td className="gap-4 px-4 lg:rounded-l-lg py-2 h-16 items-center text-wrap justify-start text-sm font-bold text-gray-900">
                            <div className="flex items-center justify-start gap-2 ">
                              <img
                                //src={`${match.logo}?cacheBust=${Date.now()}`}
                                src={`${`http://rcc.dockyardsoftware.com/images/${match.logo
                                  ? match.logo.split("/").pop()
                                  : "default.jpg"}`}?cacheBust=${Date.now()}`}
                                alt={match.matchId}
                                className="h-12 w-12 rounded-full object-cover border border-gray-300"
                              />
                              {/* Use truncate or text wrapping for small screens  */}
                              <span className="truncate whitespace-nowrap">
                                {match.opposition}
                              </span>
                            </div>
                          </td>
                          <td className="py-2 px-4 h-16 whitespace-nowrap text-sm text-gray-600 ">
                            {match.date}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {formatTimeToAMPM(match.time)}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.venue}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.tier}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.division}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.umpires}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.type}
                          </td>
                          <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                            {match.under} - {match.teamYear}
                          </td>

                          <td className="py-4 px-4 lg:rounded-r-lg space-x-2 h-16 items-center whitespace-nowrap text-sm text-gray-600">
                            <button
                              title="Edit"
                              onClick={() => handleEdit(match)}
                              className=" text-green-500 hover:text-green-600"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleAddStat(match)}
                              title="Add match stats"
                              className="text-yellow-500 hover:text-yellow-600"
                            >
                              <FaClipboardList />
                            </button>
                            <button
                              title="Add Score"
                              onClick={() => handleAddScoreCard(match)}
                              className=" text-blue-500 hover:text-blue-600"
                            >
                              <MdAssignmentAdd />
                            </button>
                            {/* <button
                          onClick={() => handleDelete(match.matchId)}
                          title="Delete"
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaTrash />
                        </button> */}
                          </td>
                        </tr>
                      )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-[95%] justify-between items-center mt-1 p-1 bg-white shadow-md rounded">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 rounded disabled:bg-gray-300"
            >
              <GrLinkPrevious style={{ color: "#fff" }} />
            </button>

            <div className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 rounded disabled:bg-gray-300"
            >
              <GrLinkNext style={{ color: "#fff" }} />
            </button>
          </div>
          {showDeleteModal &&
            <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
              <div
                className={` ${uploading
                  ? "opacity-80"
                  : "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}
              >
                <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                <p>Are you sure you want to delete this match?</p>
                <div className="flex justify-end mt-4 space-x-2">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>}
          {choiseModelOpen &&
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">
              <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                <h3 className="text-2xl font-bold text-[#480D35] mb-6 text-center">
                  Add Match Score Details
                </h3>
                <p className="text-center text-gray-700 mb-8">
                  How would you like to proceed?
                </p>

                <div className="flex flex-col space-y-4">
                  <button
                    onClick={handleScorePopupAIOpen}
                    className="w-full bg-[#00175f] bg-opacity-80 hover:bg-opacity-90 text-white font-medium py-3 rounded-md transition duration-300"
                  >
                    Upload Score Images for Two Teams
                  </button>
                  <button
                    onClick={handleScorePopupOpen}
                    className="w-full bg-[#480D35] bg-opacity-80 hover:bg-opacity-90 text-white font-medium py-3 rounded-md transition duration-300"
                  >
                    Add Player Score Details Manually
                  </button>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setChoiseModelOpen(false)}
                    className="text-white bg-gray-300 hover:bg-gray-400 py-2 px-6 rounded-md transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>}

          {/* Popup for Adding Form  */}
          {isFormPopupOpen &&
            <FormPopup
              onClose={handleAddPopupClose}
              isSumitted={() => setIsSubmitted(!isSubmitted)}
            />}
          {isPopupOpen &&
            <MatchStatPopup
              matchType={matchType}
              matchId={matchId}
              onClose={handlePopupClose}
              isSubmitted={() => setIsSubmitted(!isSubmitted)}
            />}
          {isEditPopupOpen &&
            <EditPopup
              onClose={handleEditPopupClose}
              match={currentMatch}
              isSubmitted={() => setIsSubmitted(!isSubmitted)}
            />}
          {/* Player Form Popup */}
          {isScorePopupOpen &&
            <ScoreCardPopup
              onClose={handleScorePopupClose}
              matchId={matchId}
              matchType={matchType}
              matchOpponent={matchOpponent}
              teamId={teamId}
              date={matchDate}
            />}
          {isScorePopupAIOpen &&
            <ScoreCardAIModel
              onClose={handleScorePopupAIClose}
              matchId={matchId}
            />}
        </div>
        {uploading &&
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <img
              src={ball}
              alt="Loading..."
              className="w-20 h-20 bg-transparent"
            />
          </div>}
      </div>
    </div>
  );
};

export default MatchDetails;
