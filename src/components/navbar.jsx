import React, { useState } from "react";
import { close, trazoAnimalesBlanco, menu } from "../assets";
import { navLinks } from "../constants";
import ContactInfoPopup from "./ui/contact_info_popup";

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return (
    <nav className="w-full flex py-6 navbar">
      <ul className="list-none sm:flex hidden justify-between items-center flex-1">
        <img src={trazoAnimalesBlanco} alt="una salud" className="w-[150px] h-[40px] object-contain"/>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`dmsans font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'ml-auto' : 'ml-10'} text-white`}>
            {index === navLinks.length - 1 ? 
            (<button className="ml-5 px-4 py-4  text-white rounded" onClick={handlePopupToggle} text={nav.title}>
             Ubicacion y contacto
            </button>)  : 
            (<a href={nav.id === "inicio" ? "/" : `/${nav.id}`}>{nav.title}</a>)}
          </li>
        ))}
      </ul>
      
      <div className="sm:hidden flex flex-row flex-1 justify-between items-center z-[2]">
      <img src={trazoAnimalesBlanco} alt="una salud" className="w-[150px] h-[40px] object-contain"/>
          <img src={toggle ?  close : menu} alt="menu" className="w-[28px] h-[28px] object-contain z-[1]" onClick={() => setToggle((prev) => !prev )}/>
          <div className={`${toggle ? 'flex' : 'hidden'} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
          <ul className="flex flex-col items-center bg-black p-6 rounded-xl shadow-lg">
        {[...navLinks].slice(0,4).map((nav, index) => (

          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                 <a href={nav.id === "inicio" ? "/" : `/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li>
                 <a href="#a" className="text-white">Ubicacion y Contacto</a>
          </li>
       </ul>
          </div>
      </div>

      {isPopupOpen && <ContactInfoPopup onClose={handlePopupToggle} />}
    </nav>
  )
}

export default NavBar