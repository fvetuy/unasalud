import React from 'react';
import styles from '../style';
import { logoFvetColor, logoUdelarColor, logoBadge, imagenActividad1, imagenActividad3 } from '../assets';

const Header = () => (
  <div className='flex justify-between items-center h-[100px] w-full '>
      <div className="flex items-center justify-end">
        <img className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] object-contain" src={logoBadge} alt="logo-fvet"/>
      </div>

      <a href='https://www.fvet.edu.uy'>
        <div className="flex items-center justify-end">
          <img className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain" src={logoFvetColor} alt="logo-fvet"/>
        </div>
      </a>
      
      <a href='https://udelar.edu.uy/portal/'>
        <div className="flex items-center justify-end">
          <img className="w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] object-contain" src={logoUdelarColor} alt="logo-fvet"/>
        </div>
      </a>
  </div>
)

const Hero = () => {
  return (
    <section id='home' className={`flex mt-5 md:flex-col flex-col sm:mb-10`}>
      <div className="flex flex-col items-center text-center mb-28 mt-5">
          <Header/>
          <div className='w-full h-0.5 mb-2 mt-5'>
              <div className='bg-[#b5b5b5] to-white w-full h-[1.5px] '/>
          </div>
          
          <div className='hidden lg:flex flex-row justify-between w-full mt-10 '>
            <a href='noticias'>
              <div className='relative h-[380px] w-[230px]'>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0 rounded-lg"></div>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={imagenActividad1}
                  alt={`..`}
                />
                <h1 className="absolute bottom-3 left-0 right-0 font-dmsans text-[25px] md:text-[28px] font-regular text-white text-center">
                  Noticias
                </h1>
              </div>
            </a>
            
            <div className='flex flex-col'>
              <h1 className={`font-dmsans font-semibold ss:text-[64px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full mt-4`}>Programa Una Salud</h1>

              <p className={`${styles.ptext} my-4 max-w-[600px]`}>
                La Facultad de Veterinaria renueva su compromiso con la Sociedad con un enfoque transdisciplinario, multisectorial y colaborativo en Una Salud, Un Mundo, Un Bienestar.
              </p>

              <a className="mt-3" href=" #mision-vision">Ver nuestra Mision y Vision</a>

              <div className='flex flex-col mt-6'>
                <p className={`${styles.ptext}`}>
                  Coordinadora Dra. Maria Teresa Correa. Asistente Academica para Una Salud
                </p>

                <div className='w-full h-0.5 mb-5'>
                  <div className='bg-[#b5b5b5] to-white w-full h-[1.5px] '/>
                </div>

                <div className='flex flex-row justify-center'>
                  <div className='flex flex-row flex-wrap justify-center'>
                    <div className='mx-4'>
                      <p className={`${styles.ptext}`}>mtcorrea@fvet.edu.uy</p>
                  </div>
                
                  <div className='mx-4'>
                    <p className={`${styles.ptext}`}>+598 1903 int 2532</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <a href='actividades'>
              <div className='relative h-[380px] w-[230px]'>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0 rounded-lg"></div>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={imagenActividad3}
                  alt={`Noticias`}
                />
                <h1 className="absolute bottom-3 left-0 right-0 font-dmsans text-[25px] md:text-[28px] font-regular text-white text-center">
                  Actividades
                </h1>
              </div>
            </a>
          </div>

          <div className='flex lg:hidden flex-col w-full mt-10'>
            <div className='flex flex-col items-center'>
                <h1 className={`font-dmsans font-semibold ss:text-[64px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full mt-4`}>Programa Una Salud</h1>

                <p className={`${styles.ptext} my-4 max-w-[600px]`}>
                  La Facultad de Veterinaria renueva su compromiso con la Sociedad con un enfoque transdisciplinario, multisectorial y colaborativo en Una Salud, Un Mundo, Un Bienestar.
                </p>

                <a className="mt-3" href=" #mision-vision">Ver nuestra Mision y Vision</a>

                <div className='flex flex-col mt-6'>
                  <p className={`${styles.ptext}`}>
                    Coordinadora Dra. Maria Teresa Correa. Asistente Academica para Una Salud
                  </p>

                  <div className='w-full h-0.5 mb-5'>
                    <div className='bg-[#b5b5b5] to-white w-full h-[1.5px] '/>
                  </div>

                  <div className='flex flex-row justify-center'>
                    <div className='flex flex-row flex-wrap justify-center'>
                      <div className='mx-4'>
                        <p className={`${styles.ptext}`}>mtcorrea@fvet.edu.uy</p>
                    </div>
                  
                    <div className='mx-4'>
                      <p className={`${styles.ptext}`}>+598 1903 int 2532</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='flex flex-col w-full justify-between items-center mt-20 xs:flex-row'>
              <a href='noticias'>
                <div className='relative h-[280px] w-[230px] xs:h-[260px] xs:w-[200px] ss:h-[310px] ss:w-[270px] md:h-[210px] md:w-[250px] mb-10 xs:mb-0'>
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0 rounded-lg"></div>
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={imagenActividad1}
                    alt={`..`}
                  />
                  <h1 className="absolute bottom-3 left-0 right-0 font-dmsans text-[25px] md:text-[28px] font-regular text-white text-center">
                    Noticias
                  </h1>
                </div>
              
              </a>
            
              <a href='actividades'>
                <div className='relative h-[280px] w-[230px] xs:h-[260px] xs:w-[200px] ss:h-[310px] ss:w-[270px] md:h-[210px] md:w-[250px]'>
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0 rounded-lg"></div>
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={imagenActividad3}
                    alt={`..`}
                  />
                  <h1 className="absolute bottom-3 left-0 right-0 font-dmsans text-[25px] md:text-[28px] font-regular text-white text-center">
                    Actividaes
                  </h1>
                </div>
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero