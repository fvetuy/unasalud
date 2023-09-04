import React from 'react';
import styles from '../style';
import { programHeaderImage, cordinatorPhoto, logoBadge } from '../assets/index';
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
       <div className={`flex flex-col mt-48 ${styles.marginX}`}>
        <div className={`flex flex-row`}>
          <div className="relative w-[200px] h-[200px] md:w-[270px] md:h-[270px]">
            <div className='w-[80%] h-[80%] bg-zinc-100 absolute bottom-5 left-0'></div>
            <img className="w-[80%] h-[80%] object-cover absolute top-0 right-5" src={cordinatorPhoto} alt="program-header-image"/>
          </div>
          <div className='flex flex-1 flex-col items-start'>
            <h1 className="font-dmsans text-[18px] font-medium text-black w-full text-left mb-2">Coordinadora<span className='text-amber-500'> · </span>{cordinatorName}</h1>
            <p className={`${styles.ptext} text-left max-w-[900px] hidden md:block`}>{cordinatorInfo}</p>
          </div>
        </div>
        <p className={`${styles.ptext} text-left max-w-[700px] block md:hidden mt-5`}>{cordinatorInfo}</p>
       </div>
       
       <div className='mb-52'>
        <MisionVision/>
       </div>
    </div>
  )
}

export default programa;