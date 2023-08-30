import React from 'react';
import styles from '../style';
import { programHeaderImage, cordinatorPhoto } from '../assets/index';
import { cordinatorInfo, cordinatorName } from "../constants";

const programa = () => {
  return (
    <div className="flex flex-col text-center">
       <div className="relative w-full h-[300px] md:h-[450px]">
        <img className="w-full h-full object-cover" src={programHeaderImage} alt="program-header-image"/>
        <div className="absolute bottom-10 md:bottom-20 left-6 sm:left-16 bg-amber-300 p-4 md:p-6">
          <h1 className="font-dmsans text-[30px] md:text-[40px] font-semibold text-black w-full">El programa</h1>
        </div>
       </div>
       <div className={`flex flex-row mt-10 ${styles.marginX}`}>
        <div className="relative w-[210px] h-[210px]">
          <div className='w-[80%] h-[80%] bg-zinc-100 absolute bottom-5 left-0'></div>
          <img className="w-[80%] h-[80%] object-cover absolute top-0 right-5" src={cordinatorPhoto} alt="program-header-image"/>
        </div>
        <div className='flex flex-1 flex-col items-start'>
         <div className='flex flex-row items-center'>
          <h1 className={`${styles.h5text}`}>Coordinadora</h1>
          <div className='bg-amber-300 w-[7px] h-[7px] mx-2 rounded-full'></div>
          <h1 className={`${styles.h5text}`}>Coordinadora</h1>
         </div>
        </div>
        </div>
    </div>
  )
}

export default programa