import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
      <footer className="bg-[#0B0A0E] text-gray-400 text-center py-6 w-full">
        {/* Logo y Descripción */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg font-semibold text-white flex items-center">
            <span className="text-orange-500 text-xl">✶</span> <span className="italic ml-1">Nebulabs</span>
          </h2>
          <p className="text-sm max-w-sm">
          Build smarter. Launch faster. Scale easier.
          </p>
          <div className="flex flex-row gap-2">
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
          </div>
        </div>
  
        {/* Línea divisoria */}
        <hr className="border-gray-600 my-4 w-4/5 mx-auto" />
  
        {/* Derechos y Enlaces */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-5xl mx-auto">
          <p>© 2024 - Powered by <a href="#" className="text-gray-300 hover:text-white underline">Nebulabsx</a></p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies Settings</a>
          </div>
        </div>
      </footer>
    );
  }
  