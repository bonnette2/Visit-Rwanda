import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { getItineraries } from '../services/iteneraries';
import laker from '../imgs/Laker.png';

const Iteneraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [days, setDays] = useState(3); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getItineraries(days); 
        setItineraries(data);
      } catch (err) {
        setError("Failed to fetch itineraries. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [days]);

  const handleChange = (event) => {
    setDays(parseInt(event.target.value, 10)); 
  };

  return (
    <div>
      <section className="bg-cover h-[60vh] md:h-screen relative flex items-center justify-center" style={{ backgroundImage: `url(${laker})` }}>
        <p className="text-4xl md:text-6xl font-bold text-white">Itineraries</p>
      </section>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-8 py-5 gap-6">
          <h1 className="font-bold text-3xl md:text-4xl">Itineraries</h1>
          <div>
            <select id="duration" value={days} onChange={handleChange}className="p-2 border border-gray-300 rounded-md ">
              <option value="3">3 Days</option>
              <option value="6">6 Days</option>
              <option value="9">9 Days</option>
            </select>
          </div>
        </div>

        {loading ? (
          <p className="text-center mt-10 text-xl">Loading itineraries...</p>
        ) : error ? (
          <p className="text-center mt-10 text-xl text-red-500">{error}</p>
        ) : itineraries.length === 0 ? (
          <p className="text-center mt-10 text-xl">
            No itineraries found for {days} days.
          </p>
        ) : (
          itineraries.map((item, index) => (
            <div
              key={item._id || index}
              className={`flex flex-col md:flex-row gap-10 px-4 py-10 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                  className="rounded object-cover h-auto w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="font-bold text-3xl md:text-4xl">{item.day}</h1>
                <p className="mt-6 text-2xl font-semibold">{item.name}</p>
                <p className="mt-6 text-gray-700">{item.description}</p>
                {item.website && (
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    <button className="mt-6 bg-[#946B29] hover:bg-[#7a5620] transition text-white px-6 py-3 rounded-lg shadow-md">
                      Visit Website
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#946B29] text-white text-center py-6 mt-10">
        <h2 className="text-xl font-bold mb-2">Visit Rwanda</h2>
        <p className="text-sm text-gray-300 mb-4">
          Connect with us on social platforms
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 text-white"
          >
            <FaYoutube />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Iteneraries;
