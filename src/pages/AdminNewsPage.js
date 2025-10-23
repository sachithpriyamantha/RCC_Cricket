import React, { useState, useEffect } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InitialNavbar from "../components/HomeNavbar";

import topImage from '../assets/images/BG3.png';
import Footer from '../components/Footer';
import HomeNavbar from '../components/InitialNavbar';
// Sample data for the news articles and sidebar
const itemsPerPage = 4;

const timeAgo = (dateTime) => {
  const now = new Date();
  const timeDifference = Math.floor((now - new Date(dateTime)) / 1000);

  const intervals = {
    year: 365 * 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
  };

  if (timeDifference >= intervals.year) {
    const years = Math.floor(timeDifference / intervals.year);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.month) {
    const months = Math.floor(timeDifference / intervals.month);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.day) {
    const days = Math.floor(timeDifference / intervals.day);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.hour) {
    const hours = Math.floor(timeDifference / intervals.hour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.minute) {
    const minutes = Math.floor(timeDifference / intervals.minute);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'just now';
  }
};

const getFirstTwoSentences = (text) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.slice(0, 2).join(' ') : text;
};

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/news');
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news');
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsData([...newsData]);
    }, 60000);
    return () => clearInterval(interval);
  }, [newsData]);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const latestFiveNews = newsData
    .slice()
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
    .slice(0, 5);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  const goToFullArticle = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      {/* Top Image Section */}
      <div
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></div>

      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="relative">
          <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Main News Section */}
            <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 col-span-1 flex flex-col">
              <div className="border border-gray-300 p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-xxs">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Richmond Cricket News</h1>

                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  currentNews.map((news, index) => (
                    <div key={news.id} className="mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row mb-4">
                        <div
                          className="w-full sm:w-40 h-28 mb-4 sm:mb-0 sm:mr-4 cursor-pointer"
                          onClick={() => goToFullArticle(news.id)}
                        >
                          <img
                            src={news.imageUrl}
                            alt={news.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h2
                            className="text-sm sm:text-base md:text-lg font-bold cursor-pointer"
                            onClick={() => goToFullArticle(news.id)}
                          >
                            {news.heading}
                          </h2>
                          <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base">
                            {getFirstTwoSentences(news.body)}
                            <span
                              className="text-blue-500 cursor-pointer"
                              onClick={() => goToFullArticle(news.id)}
                            >
                              ...Read more
                            </span>
                          </p>
                          <span className="text-xxs sm:text-xs text-gray-500 mt-2 block">
                            {new Date(news.dateTime).toLocaleDateString()} • {timeAgo(news.dateTime)} • {news.author}
                          </span>
                        </div>
                      </div>
                      {index < currentNews.length - 1 && <hr className="border-gray-300 my-4" />}
                    </div>
                  ))
                )}

                {/* Pagination */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={goToFirstPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === 1}
                  >
                    «
                  </button>
                  <button
                    onClick={goToPreviousPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === 1}
                  >
                    ‹
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm ${
                        currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={goToNextPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === totalPages}
                  >
                    ›
                  </button>
                  <button
                    onClick={goToLastPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === totalPages}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
              <div className="border-2 border-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-sm">
                <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Latest News</h2>

                {latestFiveNews.map((sidebarItem, index) => (
                  <div key={sidebarItem.id} className="mb-4">
                    <div className="flex cursor-pointer" onClick={() => goToFullArticle(sidebarItem.id)}>
                      <img
                        src={sidebarItem.imageUrl}
                        alt={sidebarItem.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3
                          className="text-sm sm:text-base font-semibold cursor-pointer"
                          onClick={() => goToFullArticle(sidebarItem.id)}
                        >
                          {sidebarItem.heading}
                        </h3>
                        <span className="text-xxs sm:text-xs text-gray-500 block">
                          {new Date(sidebarItem.dateTime).toLocaleDateString()} • {timeAgo(sidebarItem.dateTime)} • {sidebarItem.author}
                        </span>
                      </div>
                    </div>
                    {index < latestFiveNews.length - 1 && <hr className="my-4 border-gray-300" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Footer */}
    
    </div>
  );
};

export default NewsPage;
