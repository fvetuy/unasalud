import React from 'react';
import styles from '../style';
import { programHeaderImage, cordinatorPhoto, logoBadge, imagenActividad1, imagenActividad2, imagenActividad3 } from '../assets/index';
import { cordinatorInfo, cordinatorName } from "../constants";
import { MisionVision} from '../components';

const programa = () => {
  return (
    <div className="flex flex-col text-center">
       <div className="relative w-full h-[300px] md:h-[450px]">
        <img className="w-full h-full object-cover" src={programHeaderImage} alt="program-header-image"/>
        <div className="absolute bottom-10 md:bottom-20 left-6 sm:left-16 bg-amber-300 p-4 md:p-6">
          <h1 className="font-dmsans text-[30px] md:text-[40px] font-semibold text-black w-full">El programa</h1>
        </div>
       </div>
       <div className={`flex flex-col mt-40 ${styles.marginX}`}>
        <div className={`flex flex-row`}>
          <div className="relative w-[200px] h-[200px] md:w-[270px] md:h-[270px]">
            <div className='w-[80%] h-[80%] bg-zinc-100 absolute bottom-5 left-0'></div>
            <img className="w-[80%] h-[80%] object-cover absolute top-0 right-5" src={cordinatorPhoto} alt="program-header-image"/>
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <h1 className="font-dmsans text-[18px] font-medium text-black w-full text-left mb-2">Coordinadora<span className='text-amber-500'> · </span>{cordinatorName}</h1>
            <p className={`${styles.ptext} text-left max-w-[900px] hidden md:block mt-5`}>{cordinatorInfo}</p>
            <img className="w-[150px] h-[150px] object-contain block md:hidden" src={logoBadge} alt="program-header-image"/>
          </div>
        </div>
        <p className={`${styles.ptext} text-left max-w-[700px] block md:hidden mt-10`}>{cordinatorInfo}</p>
        <img className="w-[200px] h-[200px] object-contain mx-auto mt-20 hidden md:block" src={logoBadge} alt="program-header-image"/>
       </div>
       <MisionVision/>
       <div className='mt-20 relative w-full h-[300px] p-4 md:p-6'>
        <div className="absolute top-0 w-[200px] h-[200px] sm:w-[270px] sm:h-[270px]">
            <div className='w-[80%] h-[80%] bg-zinc-100 absolute bottom-7 left-2'></div>
            <img className="w-[80%] h-[80%] object-cover absolute top-0 right-5" src={imagenActividad1} alt="program-header-image"/>
        </div> 
        <div className="absolute right-[35%] bottom-7 w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] hidden md:block">
            <div className='w-[80%] h-[80%] bg-zinc-100 absolute bottom-7 left-2'></div>
            <img className="w-[100%] h-[80%] object-cover absolute top-0 right-5" src={imagenActividad2} alt="program-header-image"/>
        </div> 
        <div className="absolute right-0 bottom-0 w-[210px] h-[210px] sm:w-[290px] sm:h-[290px]">
            <div className='w-[100%] h-[80%] bg-zinc-100 absolute bottom-8 right-2'></div>
            <img className="w-[100%] h-[80%] object-cover absolute top-0 right-5" src={imagenActividad2} alt="program-header-image"/>
        </div> 
       </div>
    </div>
  )
}

export default programa;