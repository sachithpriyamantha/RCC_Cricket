import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Navbar from "../components/HomeNavbar";
import backgroundFlag from "../assets/images/flag.png";
import coachesData from "./coachData";
import PracticeScheduleForm from "../components/PracticeScheduleForm";
import EditPracticeScheduleForm from "../components/EditPracticeScheduleForm";

const practiceSchedulesData = [
  {
    id: 1,
    venue: "Colombo Ground",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    type: "Batting Practice"
  },
  {
    id: 2,
    venue: "Galle Stadium",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    type: "Bowling Practices"
  },
  {
    id: 3,
    venue: "Kandy Ground",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    type: "Fielding Practice"
  }
];

const CoachesProfile = () => {
  const [selectedCoach, setSelectedCoach] = useState(coachesData[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);

  const handleAddSchedule = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleEditSchedule = schedule => {
    setEditSchedule(schedule);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleSaveSchedule = updatedSchedule => {
    const updatedSchedules = practiceSchedulesData.map(
      schedule =>
        schedule.id === updatedSchedule.id ? updatedSchedule : schedule
    );
    // Ideally, this should be done in state and not directly modifying `practiceSchedulesData`
    practiceSchedulesData = updatedSchedules;
    handleCloseEditForm();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-screen-lg pt-16">
        <div className="flex gap-6">
          {/* Sidebar: Our Coaches Section */}
          <div
            className="bg-gray-800 rounded-lg shadow-md"
            style={{
              width: "350px",
              flexShrink: 0,
              marginTop: "0px",
              maxHeight: "500px",
              display: "flex",
              flexDirection: "column",
              marginLeft: "60px"
            }}
          >
            {/* Fixed Heading */}
            <div className="p-4 border-b border-gray-600">
              <h2 className="text-xl font-bold text-gray-200">Our Coaches</h2>
            </div>

            {/* Scrollable Coach List */}
            <div
              className="p-4 overflow-y-auto"
              style={{
                flexGrow: 1,
                maxHeight: "calc(500px - 64px)",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              <ul className="space-y-3" style={{ paddingRight: "10px" }}>
                {coachesData.map(coach =>
                  <li
                    key={coach.id}
                    className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${coach.id ===
                    selectedCoach.id
                      ? "bg-gray-700 font-bold"
                      : "bg-gray-800"}`}
                    onClick={() => setSelectedCoach(coach)}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        marginRight: "12px"
                      }}
                    >
                      <img
                        src={coach.imageUrl}
                        alt={coach.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {coach.fullName}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Coach Details */}
          <div className="flex-grow bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md bg-gray-800">
            <div
              className="flex items-center space-x-6 bg-white bg-opacity-75 p-6 rounded-lg"
              style={{
                backgroundImage: `url(${backgroundFlag})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  overflow: "hidden",
                  borderRadius: "50%",
                  border: "4px solid #3B82F6"
                }}
              >
                <img
                  src={selectedCoach.imageUrl}
                  alt={selectedCoach.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-5xl font-bold text-white">
                  {selectedCoach.fullName}
                </h1>
                <p className="text-white">
                  {selectedCoach.age} years old
                </p>
              </div>
            </div>

            <div className="mt-6  bg-gray-900 bg-opacity-75 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white">
                Coach Information
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="w-full">
                  <p>
                    <span className="font-semibold text-gray-400">
                      Contact:
                    </span>{" "}
                    {selectedCoach.contact}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400">
                      Address:
                    </span>{" "}
                    {selectedCoach.address}
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-gray-400">Description:</p>
                  <p>
                    {selectedCoach.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Practice Schedules Table */}
            <div className="mt-6 bg-gray-900 bg-opacity-75 p-8 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  Practice Schedules
                </h3>
                <button
                  onClick={handleAddSchedule}
                  className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300"
                >
                  <FaPlus className="text-2xl" />
                </button>
              </div>

              <table className="min-w-full mt-4 bg-gray-900 rounded-lg shadow-md w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
                      Venue
                    </th>
                    <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
                      Start Time
                    </th>
                    <th className="py-2 px-16text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
                      End Time
                    </th>
                    <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
                      Type
                    </th>
                    <th className="py-2 px-16 text-center text-gray-700 font-semibold align-middle whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {practiceSchedulesData.map(schedule =>
                    <tr key={schedule.id}>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.venue}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.startTime}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.endTime}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.type}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => handleEditSchedule(schedule)}
                          >
                            <FaEdit className="text-sm" />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Practice Schedule Form Popup */}
        {isFormOpen && <PracticeScheduleForm onClose={handleCloseForm} />}

        {/* Edit Practice Schedule Form Popup */}
        {isEditFormOpen &&
          editSchedule &&
          <EditPracticeScheduleForm
            schedule={editSchedule}
            onClose={handleCloseEditForm}
            onSave={handleSaveSchedule}
          />}
      </div>
    </div>
  );
};

export default CoachesProfile;
