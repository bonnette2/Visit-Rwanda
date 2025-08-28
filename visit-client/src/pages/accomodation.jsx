import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import serena from '../imgs/Hotel.jpg';
import { getAccommodations } from '../services/accomodations'; 

const Accomodation = () => {
  const [type, setType] = useState('hotel');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false; 
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await getAccommodations(type);
        if (!cancelled) setData(results || []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [type]);

  return (
    <section>
      <section
        className="bg-cover relative h-[60vh] md:h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${serena})` }}
      >
        <p className="text-white font-bold text-3xl md:text-4xl">Accommodation</p>
      </section>

      <section className="mt-10 p-8">
        <h1 className="font-bold text-4xl md:text-3xl text-center">Accommodation type</h1>

        <div className="flex gap-4 mt-10 justify-center">
          {['hotel', 'resort', 'lodge', 'restaurant'].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              aria-pressed={type === item}
              className={`px-5 py-3 rounded w-40 text-center focus:outline-none ${
                type === item ? 'bg-[#946B29] text-white border-0' : 'bg-white border border-black text-black hover:bg-[#946B29] hover:text-white transition'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && data.length === 0 && (
            <p className="text-center text-gray-500">No results for {type}.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {data.map((item) => {
             const imageUrl = item.image?.startsWith('http') ? item.image : `http://localhost:5000${item.image}`;
;
              return (
                <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
                  <img src={imageUrl} alt={item.name} className="w-full h-48 object-cover rounded" />
                  <h1 className="text-xl font-bold mt-4 text-center">{item.name}</h1>
                  <p className=" mt-5 text-md">{item.description}</p>
                  {item.website && (
                    <button className='bg-[#946B29] px-4 py-4 rounded text-white flex justify-center items-center mx-auto mt-6'> <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 ">
                      Visit Website
                    </a></button>
           
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#946B29] text-white text-center py-6 mt-10">
        <h2 className="text-xl font-bold mb-2">Visit Rwanda</h2>
        <p className="text-sm text-gray-300 mb-4">Connect with us on social platforms</p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaYoutube /></a>
        </div>
      </footer>
    </section>
  );
};

export default Accomodation;
