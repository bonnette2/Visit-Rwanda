import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import kgl from "../imgs/kigali-rwanda.jpg";
import { getTransportation } from "../services/transportation";

const Transportation = () => {
  const [category, setCategory] = useState(""); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await getTransportation(category); 
        if (!cancelled) setData(results || []);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [category]);

  return (
    <section>
      {/* Hero Section */}
      <section
        className="bg-cover h-[60vh] md:h-screen relative flex items-center justify-center"
        style={{ backgroundImage: `url(${kgl})` }}
      >
        <p className="font-bold text-white text-4xl md:text-6xl">
          Transportation
        </p>
      </section>

      {/* Filter dropdown */}
      <section className="mt-10">
        <div className="flex items-center justify-between px-6">
          <h1 className="font-bold text-3xl md:text-4xl">
            Transportation Type
          </h1>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-6 py-3 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#946B29]"
          >
            <option value="">All</option>
            <option value="group">Group</option>
            <option value="single">Single</option>
          </select>
        </div>

        {/* Data results */}
        <div className="mt-10 px-6">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && data.length === 0 && (
            <p className="text-center text-gray-500">
              No {category ? category.charAt(0).toUpperCase() + category.slice(1) : "transportation"} options found.
            </p>
          )}

          <div className="flex flex-col gap-10 mt-6">
            {data.map((item, index) => {
              const imageUrl = item.image?.startsWith("http")
                ? item.image
                : `http://localhost:5000${item.image}`;

              return (
                <div
                  key={item._id || index}
                  className="flex flex-col md:flex-row gap-10 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="rounded object-cover w-full h-80"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="font-bold text-3xl md:text-4xl">
                      {item.name}
                    </h1>
                    <p className="mt-6">{item.description}</p>
                    {item.website && (
                      <button className="bg-[#946B29] px-5 py-3 rounded text-white mt-6">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#946B29] text-white text-center py-6 mt-10 items-center">
        <h2 className="text-xl font-bold mb-2">Visit Rwanda</h2>
        <p className="text-sm text-gray-300 mb-4">
          Connect with us on social platforms
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white">
            <FaYoutube />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Transportation;
