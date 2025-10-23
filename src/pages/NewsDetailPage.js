// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();  // Get the news ID from the URL
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch detailed news data based on the ID
//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/news/${id}`); // Fetch news detail by ID
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <Navbar />

//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//       </div>

//        {/* News Title Below the Top Layer */}
//        <div className="container mx-auto p-4 mb-20">
//         {/* Fetch heading from newsItem with increased margin */}
//         <h1 className="text-4xl font-bold text-center mb-8 mt-10"> {/* Add margin-top here */}
//           {newsItem.heading}
//         </h1>

//        {/* Image Container with Specific Size */}
//        <div className="relative w-full h-64 mb-10 "> {/* Set the height you want */}
//           <img 
//             src={newsItem.imageUrl} 
//             alt={newsItem.title} 
//             className=" object-cover" // Cover the entire container
//           />
//           <span className="text-xs text-gray-500 block mt-2"> 
//             {newsItem.imageCaption} {/* Optional caption for the image */}
//           </span>
//         </div>
        
//         {/* Body Text */}
//         <div className="text-gray-700 mb-4">
//           <p className="text-justify">{newsItem.body}</p>
//         </div>
        
//         {/* Date and Author Info */}
//         <span className="text-xs text-gray-500 block mt-4">
//           {new Date(newsItem.dateTime).toLocaleDateString()} • {newsItem.author}
//         </span>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';  // Added Link for back button
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();  // Get the news ID from the URL
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch detailed news data based on the ID
//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/news/${id}`); // Fetch news detail by ID
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-gray-100">
//       <Navbar />

//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//       </div>

//       {/* Back Button */}
//       <div className="container mx-auto px-4 py-4">
//         <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
//           &larr; Back
//         </Link>
//       </div>

//     {/* News Title, Date, and Author */}
// <div className="container mx-auto px-4 text-center">
//   <h1 className="text-4xl font-bold mt-4">
//     {newsItem.heading}
//   </h1>
  
//   {/* Publication Date and Author */}
//   <p className="text-gray-500 text-sm mt-2">
//     Published on {new Date(newsItem.dateTime).toLocaleDateString()} • By {newsItem.author}
//   </p>

//   <hr className="border-t-2 border-blue-500 w-20 mx-auto mt-4" />
// </div>


//     {/* Full-width Top Image */}
// {/* <div className="relative w-full h-[500px] mt-6">  {/* Adjusted to 500px for standard laptop display height */}
//   <img 
//     src={newsItem.imageUrl} 
//     alt={newsItem.title} 
//     className="w-full h-full object-cover"
//     style={{ objectPosition: 'top center' }}  // Focuses on the top and center of the image
//   />
// </div> */}



//       {/* News Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-gray-700 leading-relaxed text-justify">
//           <p className="mb-6">{newsItem.body}</p>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const { state } = location;  // Access state from navigation
//   const role = state?.role || 'default';  // Default role if not passed

//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/news/${id}`);
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <Navbar />

//       {/* Top Image Section with Back Arrow */}
//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative',
//           zIndex: 0,
//         }}
//       >
       
//       </div>

//       {/* News Detail Section */}
//       <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="p-6 text-center">
//             <h1 className="text-3xl font-bold text-gray-800">
//               {newsItem.heading}
//             </h1>
//             <p className="text-gray-500 text-sm mt-2">
//               Published {new Date(newsItem.dateTime).toLocaleDateString()}
//             </p>
//             <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />

//             <div className="relative w-full h-[500px] mt-6">
//               <img 
//                 src={newsItem.imageUrl} 
//                 alt={newsItem.title} 
//                 className="w-full h-full object-cover"
//                 style={{ objectPosition: 'top center' }}
//               />
//             </div>
//           </div>

//           <div className="p-6 text-gray-700 leading-relaxed text-justify">
//             <p>{newsItem.body}</p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const { state } = location;  // Access state from navigation
//   const role = state?.role || 'default';  // Default role if not passed
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const API_URL = process.env.REACT_APP_API_URL;


//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`${API_URL}news/${id}`);
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
//     );
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <Navbar />

//        {/* Top Image Section with Back Arrow */}
//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative',
//           zIndex: 0,
//         }}
//       >
//       </div>

//         {/* News Detail Section */}
//       <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="p-6 text-center">
//             <h1 className="text-3xl font-bold text-gray-800">
//               {newsItem.heading}
//             </h1>
//             <p className="text-gray-500 text-sm mt-2">
//               Published {new Date(newsItem.dateTime).toLocaleDateString()}  • {newsItem.author}

//             </p>
//             <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />
//             {/* Image Carousel */}
//             <div className="relative w-full h-[600px] mt-6">
//               {newsItem.images && newsItem.images.length > 0 && (
//                 <>
//                   <img
//                     src={newsItem.images[currentImageIndex]}
//                     alt={`Slide ${currentImageIndex + 1}`}
//                     className="w-full h-full object-cover"
//                     style={{ objectPosition: 'object-cover' }}
//                   />
//                   <button
//                     onClick={handlePrevImage}
//                     className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r-lg opacity-75 hover:opacity-100"
//                   >
//                     &#9664;
//                   </button>
//                   <button
//                     onClick={handleNextImage}
//                     className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-l-lg opacity-75 hover:opacity-100"
//                   >
//                     &#9654;
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="p-6 text-gray-700 leading-relaxed text-justify">
//             <p>{newsItem.body}</p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const { state } = location;
//   const role = state?.role || 'default';
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const API_URL = process.env.REACT_APP_API_URL;

//   const STEP = 50; // Movement step size in pixels

//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`${API_URL}news/${id}`);
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   const handleNextImage = () => {
//     setZoomLevel(1); // Reset zoom level to 1 when changing the image
//     setPosition({ x: 0, y: 0 }); // Reset position as well
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevImage = () => {
//     setZoomLevel(1); // Reset zoom level to 1 when changing the image
//     setPosition({ x: 0, y: 0 }); // Reset position as well
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleZoomIn = () => {
//     setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1));
//     setPosition({ x: 0, y: 0 }); // Reset position when zooming out completely
//   };

//   const handleMove = (direction) => {
//     if (zoomLevel > 1) {
//       const container = { width: 600, height: 600 }; // Assuming the container is a square with 600px
//       const image = { width: 600 * zoomLevel, height: 600 * zoomLevel }; // Image size adjusts with zoom level
    
//       setPosition((prevPosition) => {
//         let newPosition = { ...prevPosition };
//         // Implement movement logic if needed (up, down, left, right)
//         return newPosition;
//       });
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <Navbar />

//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative',
//           zIndex: 0,
//         }}
//       ></div>

//       <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="p-6 text-center">
//             <h1 className="text-3xl font-bold text-gray-800">{newsItem.heading}</h1>
//             <p className="text-gray-500 text-sm mt-2">
//               Published {new Date(newsItem.dateTime).toLocaleDateString()} • {newsItem.author}
//             </p>
//             <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />

//             <div className="relative w-full h-[600px] mt-6 overflow-hidden">
//               {newsItem.images && newsItem.images.length > 0 && (
//                 <div
//                   className="relative w-full h-full"
//                   style={{
//                     transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
//                     transformOrigin: 'center center',
//                     transition: 'transform 0.3s ease-in-out',
//                   }}
//                 >
//                   <img
//                     src={newsItem.images[currentImageIndex]}
//                     alt={`Slide ${currentImageIndex + 1}`}
//                     className="w-full h-full"
//                     style={{
//                       objectFit: zoomLevel === 1 ? 'contain' : 'contain', // Use 'contain' for both zoom levels
//                       objectPosition: 'center', // Ensure image stays centered
//                     }}
//                   />
//                 </div>
//               )}

//               <div className="absolute top-4 right-4 flex gap-2">
              
//               </div>

//               <button
//                 onClick={handlePrevImage}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r-lg opacity-75 hover:opacity-100"
//               >
//                 &#9664;
//               </button>
//               <button
//                 onClick={handleNextImage}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-l-lg opacity-75 hover:opacity-100"
//               >
//                 &#9654;
//               </button>
//             </div>
//           </div>
//           <div className="p-6 text-gray-700 leading-relaxed text-justify">
//             <p>{newsItem.body}</p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/MemberNavbar';
import Footer from '../components/Footer';
import topImage from '../assets/images/BG3.png';
import { FaTimes } from "react-icons/fa";



const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { state } = location;
  const role = state?.role || 'default';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const API_URL = process.env.REACT_APP_API_URL;
  const [selectedNews, setSelectedNews] = useState(null);
  const accessToken = localStorage.getItem('accessToken');


  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {

        const response = await axios.get(`${API_URL}news/${id}`
          ,{
            method: 'GET',
            headers: {
                 'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }, }
        );

        const fetchedNews = response.data;
        setNewsItem(fetchedNews);
        setSelectedNews(fetchedNews); // Set the fetched news to selectedNews
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news detail:', error);
        setError('Failed to fetch news detail');
        setLoading(false);
      }
    };
  
    fetchNewsDetail();
  }, [id]);
  

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
    );
  };
  
  const handleZoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1));
    setPosition({ x: 0, y: 0 }); 
  };

  const handleClose = () => navigate('/news'); // Redirect to the NewsPage

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

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
          position: 'relative',
          zIndex: 0,
        }}
      >
      </div>

    <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="p-6 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{newsItem.heading}</h1>
      <p className="text-gray-500 text-xs sm:text-sm mt-2">
        Published {new Date(newsItem.createdOn).toLocaleDateString()} • {newsItem.author}
      </p>

      {/* <button
  onClick={handleClose}
  className="absolute top-2 right-4 md:top-2 md:right-8 p-2 rounded-full opacity-75 hover:opacity-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition ease-in-out duration-200"
>
  ✕
</button> */}

 
        <button
         onClick={handleClose}
          className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-200 absolute top-2 right-4 md:top-2 md:right-8 p-2 rounded-full"
          aria-label="Close"
        >
          <FaTimes size={24} />
        </button>
     

      <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />

      <div className="relative w-full h-64 sm:h-[400px] md:h-[600px] mt-6 overflow-hidden">
        {newsItem.images && newsItem.images.length > 0 && (
          <div
            className="relative w-full h-full"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {/* <img
               src={newsItem.images[currentImageIndex]?.imageUrl}
              
            /> */}


            <img
              //  src={newsItem.images[currentImageIndex]?.imageUrl}
              src={`${`http://rcc.dockyardsoftware.com/images/${ newsItem.images[currentImageIndex].imageUrl? newsItem.images[currentImageIndex]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
        )}

        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r-lg opacity-75 hover:opacity-100"
        >
          &#9664;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-l-lg opacity-75 hover:opacity-100"
        >
          &#9654;
        </button>
      </div>
    </div>

    {/* <div className="p-4 sm:p-6 text-gray-700 leading-relaxed text-justify">
      <p className="text-sm sm:text-base">{newsItem.body}</p>
    </div> */}

    
  <div className="p-4 sm:p-6 text-gray-700 leading-relaxed text-justify">
    <span
      dangerouslySetInnerHTML={{
        __html: selectedNews?.body.replace(/\n/g, "<br />"),
      }}
      className="font-serif"
    />
  </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
