import React, { useState } from "react";

  const [isFilterSelected, setIsFilterSelected] = useState(false);

  const handFilterSelection = () => {
    setIsFilterSelected(!isFilterSelected);
  };

const filter = () => (
    <section id='muestraActividades' className="flex items-center flex-col sm:flex-row flex-wrap mx-6 my-10 sm:my-16 md:my-16">
        <ul className='grid grid-cols-3 gap-10 md:px-2 md:ml-2 sm:ml-2'> 
            <li>
                <button>
                    <span>Educacion</span>
                </button>
            </li>
            <li>
                <button>
                    <span>Investigacion</span>
                </button>
            </li>
            <li>
               <button>
                <span>Extension</span>
               </button>
            </li>
        </ul>
    </section>
  )

export default filter