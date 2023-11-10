import React, { useState } from "react";
import { trazoAnimalesBlanco } from "../assets";
import { navLinks } from "../constants";
import ContactInfoPopup from "./ui/contact_info_popup";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return (
    <nav className="w-full flex py-6 navbar">
      <ul className="list-none sm:flex hidden justify-between items-center flex-1">
      <Link to="/">
        <img src={trazoAnimalesBlanco} alt="una salud" className="w-[150px] h-[40px] object-contain" />
      </Link>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id} className={`dmsans font-normal cursor-pointer text-[15px] ${index === navLinks.length - 1 ? 'ml-auto' : 'ml-10'} text-white`}>
            {index === navLinks.length - 1 ? 
            (<button className="ml-5 px-4 py-4  text-white rounded" onClick={handlePopupToggle} text={nav.title}>
             Ubicacion y contacto
            </button>)  : 
            (<Link to={`/${nav.id == "inicio" ? '' : nav.id}`}>{nav.title}</Link>)}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-row flex-1 justify-between items-center z-[2]">
      <Link to="/">
        <img src={trazoAnimalesBlanco} alt="una salud" className="w-[150px] h-[40px] object-contain" />
      </Link>
      <button onClick={() => setToggle((prev) => !prev)}>
       {toggle ? (<div/>) : (<FaBars width={28} height={28} color="white"/>)}
      </button>
      <div className={`${toggle ? 'flex flex-col' : 'hidden'} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
        <ul className="flex flex-col items-center bg-black p-6 rounded-xl shadow-lg">
        <button onClick={() => setToggle((prev) => !prev)}>
         <FaTimes width={28} height={28} color="white"/>
        </button>
        <div className="w-full h-[0.5px] bg-white mx-2 my-4"></div>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`dmsans font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
            {index === navLinks.length - 1 ? 
            (<button className="text-white rounded" onClick={() => {
              handlePopupToggle();
              setToggle(prev => !prev);
            }} text={nav.title}>
              Ubicacion y contacto
            </button>)  : 
             (<Link to={`/${nav.id == "inicio" ? '' : nav.id}`}>{nav.title}</Link>)}
            </li>
        ))}
        <div className="w-full h-[0.5px] bg-white mx-2 my-4"></div>
      </ul>
      </div>
    </div>
    {isPopupOpen && <ContactInfoPopup onClose={handlePopupToggle} />}
    </nav>
  )
}

export default NavBar