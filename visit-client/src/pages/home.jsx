import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import lakekivu from '../imgs/lakekivu2.jpg';
import akagera from '../imgs/akagera.jpg';
import elephants from '../imgs/elephant.jpg';
import gorrila from '../imgs/Mountain Gorillas.jpg';
import dance from '../imgs/museum.jpg';
import travel from '../imgs/Rwanda air.jpg';
import Rwanda from '../imgs/Rwanda.png';
import visitRwanda from '../imgs/visitRwanda.mp4';

const Home = () => {
     const [playVideo, setPlayVideo] = useState(false);
    return ( 
        <div>
                <section className="h-[60vh] md:h-screen relative overflow-hidden">
                    {!playVideo && (
                        <div className="absolute inset-0 bg-cover bg-center z-10" style={{ backgroundImage: `url(${Rwanda})`,}} ></div>)}
                    {playVideo && (
                        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0" ><source src={visitRwanda} type="video/mp4" /></video>)}
                        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
                        {!playVideo && (
                         <button onClick={() => setPlayVideo(true)} className="text-white text-4xl border border-white rounded-full px-6 py-3 hover:bg-white hover:text-black transition"> ▶</button>)}
                         </div>
                </section>
            <section>
                <div className="flex  flex-col md:flex-row items-center gap-4 justify-center py-8 mt-10 font-semibold">
                    <hr className='border border-black w-1/2 md:w-1/6'/>
                    <h3 className='text-4xl'>Tourism</h3>
                    <hr className=' border border-black w-1/2 md:w-1/6' />
                </div>
                <div>
                    <p className='text-center px-4'>Journey through Rwanda’s beauty. Home to towering volcanoes, misty forests, lakes, country rich in culture  and the  mountain gorillas. Hike through breathtaking landscapes, track rare primates, and experience the  beauty of Rwanda’s highlands. </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
                    <img src={lakekivu} className="rounded h-80 w-full" />
                    <img src={akagera} className="rounded h-80 w-full" />
                    <img src={elephants} className="rounded h-80 w-full" />
                    <img src={gorrila} className="rounded h-80 w-full" />
                </div>
            </section>
            <section className='flex flex-col md:flex-row px-4 py-8 items-center gap-12 '>
                <div className='w-full md:w-1/2'>
                    <img src={dance} className="rounded-lg h-120" />
                </div>
                <div className='md:w-1/2 w-full text-center md:text-left '>
                    <h1 className="text-3xl md:text-4xl font-bold" >Culture & Heritage</h1>
                    <p className='mt-10'>Warm and friendly, Rwandans are also respectful, and committed to the idea of progress, starting at the grass roots and running all the way to the top .From the ancient kingdom to the modern day, creativity is something to be celebrated, whether through traditional dance, unique architecture or works of art.</p>
                    <button className="bg-[#946B29] text-white rounded py-4 px-6 mt-7 text-center" >View Culture & Heritage</button>
                </div>
            </section>
            <section className='flex md:flex-row flex-col items-center justify-between gap-10 mt-10'>
                <div className=' px-6 w-full md:w-1/2 text-center md:text-left'>
                    <h1 className="font-bold text-3xl md:text-4xl" >Plan your trip today</h1>
                    <p className='mt-10'>Dare to walk  the treetops? The legendary canopy awaits,Dare to  enjoy the lake sceneries? lake kivu awaits.Dare to witness the gorillas ? Nyungwe forest awaits,Dare to  witness a few lions ? Akagera park awaits,Let us travel Rwanda together so plan your trip today with Visit Rwanda now and enjoy your beautiful time in Rwanda.</p>   
                    <button className='bg-[#946B29] px-6 py-4 text-white rounded mt-7'>Book your trip today</button>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={travel} className="rounded px-4" />
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
        </div>
     );
}
 
export default Home;