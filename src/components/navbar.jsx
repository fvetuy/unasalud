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
      
      <div className="sm:hidden flex flex-row flex-1 justify-between items-center">
      <img src={trazoAnimalesBlanco} alt="una salud" className="w-[150px] h-[40px] object-contain"/>
          <img src={toggle ?  close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev )}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (

          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                 <a href={`#${nav.id}`}>
                  {nav.title}
                 </a>
          </li>
        ))}
       </ul>
          </div>
      </div>

      {isPopupOpen && <ContactInfoPopup onClose={handlePopupToggle} />}
    </nav>
  )
}

export default NavBar