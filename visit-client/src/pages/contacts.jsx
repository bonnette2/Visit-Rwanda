import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import bgImage from "../imgs/lakekivu1.jpg"; // make sure you have an image in imgs folder

const Contact = () => {
    return ( 
        <div 
            className="relative min-h-screen flex flex-col items-center justify-start py-10 bg-cover bg-center" 
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <section className="relative z-10 bg-transparent border border-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl backdrop-blur-md">
                <h1 className="text-center text-[#F3B544] font-bold text-3xl mb-8 tracking-wide">
                    Contact Us
                </h1>

                {/* Input fields */}
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="text-white font-semibold">First name</p>
                        <input 
                            className="w-48 h-10 bg-[#000000]/60 rounded-full px-4 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F3B544]" 
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white font-semibold">Last name</p>
                        <input 
                            className="w-48 h-10 bg-[#000000]/60 rounded-full px-4 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F3B544]" 
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10 mt-6">
                    <div className="flex flex-col gap-3">
                        <p className="text-white font-semibold">Email</p>
                        <input 
                            className="w-64 h-10 bg-[#000000]/60 rounded-full px-4 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F3B544]" 
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-white font-semibold">Phone</p>
                        <input 
                            className="w-48 h-10 bg-[#000000]/60 rounded-full px-4 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F3B544]" 
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-white font-semibold mb-2">Message</p>
                    <textarea 
                        className="bg-[#000000]/60 w-full h-28 rounded-lg p-3 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F3B544]" 
                    />
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="bg-[#F3B544] hover:bg-[#c88e2d] transition-all px-8 py-3 rounded-full text-black font-semibold mt-10 shadow-lg">
                        Submit
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 text-white text-center py-6 mt-10 w-full">
                <h2 className="text-xl font-bold mb-2">Visit Rwanda</h2>
                <p className="text-sm text-gray-300 mb-4">Connect with us on social platforms</p>
                <div className="flex justify-center space-x-6 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B544]"><FaFacebookF /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B544]"><FaInstagram /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B544]"><FaTwitter /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3B544]"><FaYoutube /></a>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
