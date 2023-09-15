import React, { useState } from 'react';

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState('Educacion');

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <section id='muestraActividades' className="flex items-center flex-col sm:flex-row flex-wrap mx-6 my-10 sm:my-16 md:my-16">
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-2 md:ml-2 sm:ml-2'>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 px-6 py-2 rounded-3xl text-center ${selectedButton === 'Educacion' ? 'bg-[#19C5EB] text-black' : 'bg-white'}`}
            onClick={() => handleClick('Educacion')}
          >
            Educacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 md:px-6 md:py-2 rounded-3xl text-center ${selectedButton === 'Investigacion' ? 'bg-[#19C5EB] text-black' : 'bg-white'}`}
            onClick={() => handleClick('Investigacion')}
          >
            Investigacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 md:px-6 md:py-2 rounded-3xl text-center ${selectedButton === 'Extension' ? 'bg-[#19C5EB] text-black' : 'bg-white'}`}
            onClick={() => handleClick('Extension')}
          >
            Extension
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
