import Rwandair from '../imgs/Rwandaa.png';
import Bal from '../imgs/Bal.jpg';
import bayern from '../imgs/bayern.jpg';
import psg from '../imgs/psg.jpg';
import arsenal from '../imgs/visit Rwanda.jpg';
import naming from '../imgs/naminf.jpg';
import umuganura from '../imgs/umuganura.jpg';
import giants from '../imgs/giants.jpg';

const News = () => {
    return ( 
        <div>
            <section className='bg-cover h-[60vh] md:h-screen relative flex items-center justify-center' style={{ backgroundImage: `url(${Rwandair})`}}>
                <p className='text-center text-white font-bold text-3xl md:text-5xl'>News and events</p>
            </section>
            <section className='mt-10'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <hr className='border border-black w-1/2 sm:w-1/6' />
                    <h1 className='font-bold text-3xl md:text-4xl'>Partnerships</h1>
                    <hr className='border border-black w-1/2 sm:w-1/6'/>
                </div>
                <p className='text-center px-2 mt-10'>Visit Rwanda is proud to partner with some of the world’s biggest brands to share the beauty of the country with millions around the globeWarm and friendly, Rwandans are also respectful, and committed to the idea of progress, starting at the grass roots and running all the way to the top </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
                <img src={Bal} alt="BAL" className="w-full h-80 object-cover rounded" />
                <img src={bayern} alt="Bayern" className="w-full h-80 object-cover rounded" />
                <img src={arsenal} alt="Arsenal" className="w-full h-80 object-cover rounded" />
                <img src={psg} alt="PSG" className="w-full h-80 object-cover rounded" />
              </div>

            </section>
            <section>
                <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-4'>
                    <hr className='border border-black w-1/2 md:w-1/6'/>
                    <h1 className='font-bold text-3xl md:text-4xl'>Events</h1>
                    <hr className='border border-black w-1/2 md:w-1/6' />
                </div>
                <div className='flex flex-col md:flex-row mt-10 items-center gap-8 px-4'>
                    <div className='md:w-1/2 w-full'><img src={naming} className="rounded w-full h-auto object-cover" /></div>
                    <div className='md:w-1/2 w-full text-center md:text-left'>
                        <h1 className='mt-5 font-bold text-3xl md:text-4xl'>Naming ceremony</h1>
                        <p className='mt-5'>Warm and friendly, Rwandans are also respectful, and committed to the idea of progress, starting at the grass roots and running all the way to the top .From the ancient kingdom to the modern day, creativity is something to be celebrated, whether through traditional dance, unique architecture or works of art.</p>
                        <button className='bg-[#946B29] px-4 py-4 rounded text-white hover:bg-[#5e4826] mt-6'>View more</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mt-10 items-center gap-4 px-4 mt-10'>
                    <div className='text-center md:text-left w-full md:w-1/2 px-4'>
                        <h1 className='font-bold text-3xl md:text-5xl'>Umuganura day</h1>
                        <p className='mt-6'>Warm and friendly, Rwandans are also respectful, and committed to the idea of progress, starting at the grass roots and running all the way to the top .From the ancient kingdom to the modern day, creativity is something to be celebrated, whether through traditional dance, unique architecture or works of art.</p>
                        <button className='bg-[#946B29] px-4 py-4 rounded text-white hover:bg-[#5e4826] mt-6'>View more</button>
                    </div>
                    <div className='w-full md:w-1/2 px-4'><img src={umuganura} className="rounded w-full h-auto object-cover" /></div>
                </div>
                <div className='mt-10 flex flex-col md:flex-row items-center gap-8 px-4 mt-10'>
                    <div class="w-full md:w-1/2"><img src={giants} alt="" /></div>
                    <div className='text-center md:text-left w-full md:w-1/2 mt-10'>
                        <h1 className='font-bold text-3xl md:text-4xl'>Giants of Africa</h1>
                        <p className='mt-5'>Warm and friendly, Rwandans are also respectful, and committed to the idea of progress, starting at the grass roots and running all the way to the top .From the ancient kingdom to the modern day, creativity is something to be celebrated, whether through traditional dance, unique architecture or works of art.</p>
                        <button className='bg-[#946B29] py-4 px-4 text-white rounded hover:bg-[#503e22] mt-6'>View more</button>
                    </div>
                </div>
            </section>
               <footer className="bg-[#946B29] text-white text-center py-6 mt-10">
        <h2 className="text-xl font-bold mb-2">Visit Rwanda</h2>
        <p className="text-sm text-gray-300 mb-4">Connect with us on social platforms</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-orange-400">Facebook</a>
          <a href="#" className="hover:text-orange-400">Instagram</a>
          <a href="#" className="hover:text-orange-400">YouTube</a>
        </div>
      </footer>
        </div>
     );
}
 
export default News;