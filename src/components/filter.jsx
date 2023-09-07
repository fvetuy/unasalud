import React from 'react'

const filter = () => (
    <section id='muestraActividades' className="flex items-center flex-col sm:flex-row flex-wrap mx-6 my-10 sm:my-16 md:my-16">
        <ul className='grid grid-cols-3 gap-10 md:px-2 md:ml-2 sm:ml-2'> 
            <li>
                <button>Educacion</button>
            </li>
            <li>
                <button>Investigacion</button>
            </li>
            <li>
               <button>Extension</button>
            </li>
        </ul>
    </section>
  )

export default filter