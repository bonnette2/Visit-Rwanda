import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import inyambo from '../imgs/inyambo.jpg';
import traditional from '../imgs/inyamibwa.png';
import museum from '../imgs/museum.jpg';
import imishanana from '../imgs/imishanana.jpg'
import Rwanda from '../imgs/Rwandanflag.jpg';
import arts from '../imgs/crafts.jpg';
const Culture = () => {
                         return ( 
                            <div>
                               <section className="h-[60vh] bg-cover  md:h-screen object-cover flex items-center justify-center" style={{ backgroundImage: `url(${Rwanda})` }}>
                                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">Culture & Heritage</p>
                                </section>

                                <section>
                                    <div className="flex  sm:flex-row items-center gap-4 justify-center py-8 mt-10 text-center px-4">
                                        <hr className="border border-black w-1/2 sm:w-1/6" />
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Culture & Heritage</h3>
                                        <hr className="border border-black w-1/2 sm:w-1/6" />
                                    </div>
                                    <div>
                                        <p className='text-center px-4'>Journey through Rwanda’s beauty. Home to towering volcanoes, misty forests, lakes, country rich in culture  and the  mountain gorillas. Hike through breathtaking landscapes, track rare primates, and experience the  beauty of Rwanda’s highlands.  Home to towering volcanoes, misty forests, lakes,country rich in culture  and the  mountain gorillas. Hike through breathtaking landscapes, track rare primates, and experience the  beauty of Rwanda’s highlands</p>
                                    </div>
                                </section>
                                <section>

                                    <div className='flex flex-col md:flex-row px-4 py-8 items-center gap-10 mt-10'>
                                        <div className="w-full md:w-1/2">
                                            <img src={inyambo} className="rounded w-full h-auto object-cover" />
                                        </div>
                                        <div className='md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start'>
                                            <h1 className="text-2xl md:text-4xl font-bold ">Inyambo cattle</h1>
                                            <p className="mt-6 ">Inyambo cattle are a  significant symbol of Rwanda’s culture there are found in the Bigogwe and Located n Volcanoes National Park, the Iby’iwacu Cultural Village offers an authentic insight into Rwandan traditions and rural life. Engage with local villagers, participate in heh traditional activities such as farming, cooking, and ehe crafts, and witness captivating performances of ehehe traditional dance and music.</p>
                                            <button className="bg-[#946B29] text-white px-5 py-5 rounded mt-10 hover:bg-[#7a521b] transition" >Plan a trip today</button>
                                        </div>
                                    </div> 

                                    <div className='flex flex-col md:flex-row px-4 py-8 items-center gap-10 '>
                                        <div  className='md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start'>
                                            <h1 className="font-bold text-2xl md:text-4xl" >Traditional perfomance</h1>
                                            <p className="mt-10">Traditional Drumming and Dance Performances: Experience the lively rhythms and energetic movements of traditional Rwandan drumming and dance. Various cultural centers and performance groups across the country offer engaging performances that showcase the unique dance styles and the significance of drumming in Rwandan culture</p>  
                                            <button className="bg-[#946B29] text-white rounded py-4 px-6 mt-10" >Plan a trip today</button>
                                        </div>
                                        <div className="w-full md:w-1/2" >
                                            <img src={traditional} className="rounded w-full h-auto object-cover" />
                                        </div>
                                    </div>

                                    <div className='flex flex-col md:flex-row px-4 py-8 items-center gap-10'>
                                        <div className="w-full md:w-1/2">
                                            <img src={imishanana} className="rounded w-full h-auto object-cover"/>
                                        </div>
                                        <div className='md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start'>
                                            <h1 className="text-4xl font-bold ">Traditional wear</h1>
                                            <p className="mt-10">Inyambo cattle are a  significant symbol of Rwanda’s culture there are found in the Bigogwe and Located n Volcanoes National Park, the Iby’iwacu Cultural Village offers an authentic insight into Rwandan traditions and rural life. Engage with local villagers, participate in heh traditional activities such as farming, cooking, and ehe crafts, and witness captivating performances of ehehe traditional dance and music.</p> 
                                            <button className="bg-[#946B29] text-white py-4 px-6 rounded mt-10" >Plan a trip today</button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col md:flex-row px-4 py-8 items-center gap-10 '>
                                        <div className='md:w-1/2 w-full text-center md:text-left flex flex-col items-center md:items-start'>
                                            <h1 className="font-bold text-4xl" >Arts and crafts</h1>
                                            <p className="mt-10">Traditional Drumming and Dance Performances: Experience the lively rhythms and energetic movements of traditional Rwandan drumming and dance. Various cultural centers and performance groups across the country offer engaging performances that showcase the unique dance styles and the significance of drumming in Rwandan culture</p>  
                                            <button className="bg-[#946B29] text-white rounded py-4 px-6 mt-10" >Plan a trip today</button>
                                         </div>
                                        <div className="w-full md:w-1/2">
                                            <img src={arts} className="rounded w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                   
                                    <div className='flex flex-col md:flex-row px-4 py-8 items-center gap-10'>
                                        <div className="w-full md:w-1/2">
                                            <img src={museum} className="rounded w-full h-auto object-cover"/>
                                        </div>
                                        <div className='w-full text-center md:text-left flex flex-col items-center md:items-start'>
                                            <h1 className="text-4xl font-bold " >Nyanza museum</h1>
                                            <p className="mt-10">Inyambo cattle are a  significant symbol of Rwanda’s culture there are found in the Bigogwe and Located n Volcanoes National Park, the Iby’iwacu Cultural Village offers an authentic insight into Rwandan traditions and rural life. Engage with local villagers, participate in heh traditional activities such as farming, cooking, and ehe crafts, and witness captivating performances of ehehe traditional dance and music.</p> 
                                            <button className="bg-[#946B29] text-white py-4 px-6 rounded mt-10" >Plan a trip today</button>
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
                            </div>
                         );
                    }
 
export default Culture;