import React, { useState,useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import mountvisoke from '../imgs/Mountvisoke.jpg';
import waterfall from '../imgs/Rwanda safaris.jpg';
import museum from '../imgs/palace.jpg';
import Map from '../pages/Rwandamap';
import lake from '../imgs/lakekivu1.jpg';
import visitRwanda from '../imgs/intro.mp4';
import { getDestination } from '../services/destination';
 
const Destination= () => {
    const [playVideo, setPlayVideo] = useState(false);
    const [type, setType] = useState('forest');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        let cancelled = false; 
        const fetchData = async () => {
          setLoading(true);
          setError(null);
          try {
            const results = await getDestination(type);
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
                         <section className="h-[60vh] md:h-screen relative overflow-hidden">
                                            {!playVideo && (
                                                <div className="absolute inset-0 bg-cover bg-center z-10" style={{ backgroundImage: `url(${lake})`,}} ></div>)}
                                            {playVideo && (
                                                <video autoPlay muted  loop className="absolute inset-0 w-full h-full object-cover z-0" ><source src={visitRwanda} type="video/mp4" /></video>)}
                                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
                                                {!playVideo && (
                                                 <button onClick={() => setPlayVideo(true)} className="text-white text-4xl border border-white rounded-full px-6 py-3 hover:bg-white hover:text-black transition"> ▶</button>)}
                                                 </div>
                                        </section>

                        <section>
                            <div className="flex md:flex-row  flex-col items-center gap-4 justify-center py-8">
                                <hr className='border border-black w-1/2'/>
                                <h3 className='text-2xl md:text-4xl font-semibold'>Visit Rwanda Now</h3>
                                <hr className=' border border-black w-1/2' />
                            </div>
                            <div>
                                <p className='text-center px-4'>Journey through Rwanda’s beauty. Home to towering volcanoes, misty forests, lakes, country rich in culture  and the  mountain gorillas. Hike through breathtaking landscapes, track rare primates, and experience the  beauty of Rwanda’s highlands. </p>
                            </div>
                           <div className='flex flex-col md:flex-row gap-10 mt-10 px-6 py-8 items-center justify between'>   
                               <div className="">
                                    <p className='mt-10 text-2xl font-semibold text-center md:text-left'>View map by:</p>
                                    <div className='flex md:flex-col flex-row gap-4 mt-10'>  
                                        <button className=" border border-black bg-transparent px-8 py-4 rounded hover:bg-[#946B29] hover:text-white hover:border-0 transition">National park</button>
                                        <button className=" border border-black bg-transparent px-8 py-4 rounded hover:bg-[#946B29] hover:text-white hover:border-0 transition">lakes</button>
                                        <button className="  px-8 py-4 rounded bg-[#946B29] text-white transition">city</button>
                                    </div>
                                    </div>
                                    
                                <div className="px-2 h-96 w-full">
                                     <Map></Map>
                                </div>
                            </div>
                        </section>
                         <section className="mt-10 p-8">
        <h1 className="font-bold text-4xl md:text-3xl text-center">Transportation type</h1>

        <div className="flex gap-4 mt-10 justify-center">
          {['forest', 'park', 'city', 'museum'].map((item) => (
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
                               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaTwitter /> </a>
                               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 text-white"><FaYoutube /></a>
                           </div>
                       </footer>
                   </section>
                 );
            }
             
            export default Destination;