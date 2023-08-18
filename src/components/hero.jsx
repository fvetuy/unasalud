import React from 'react';
import styles from '../style';
import { trazoAnimales } from '../assets';
import Button from './ui/button';

const Header = () => (
  <div className='flex flex-col w-full '>
    <div className='flex flex-row justify-between'>
      <div>Logo udelar</div>
      <img src={trazoAnimales} alt="logo-header" className="h-[110px] "/>
      <div>Logo FVET</div>
    </div>
    <div className='w-full h-0.5 mb-5'>
      <div className='bg-gradient-to-r from-white via-[#101010] to-white w-full h-0.5 '/>
    </div>
  </div>
)

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-col flex-col ${styles.paddingY}`}>
      <div className="flex flex-col items-center text-center">
          <Header/>
          <h1 className={`${styles.h1text} mt-4`}>Programa <span   className='text-[#19C5EB]'>Una Salud</span>
          </h1>

          <p className={`${styles.ptext} my-4 max-w-[800px]`}>
            La Facultad de Veterinaria renueva su compromiso con la Sociedad con un enfoque transdisciplinario, multisectorial y colaborativo en Una Salud, Un Mundo, Un Bienestar.
          prueba branch vice
          </p>
         
          <Button text={'Ver nuestra Mision y Vision'} className={'mt-6'}/>
          
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
    </section>
  )
}

export default Hero