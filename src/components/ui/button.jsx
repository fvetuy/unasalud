import React from 'react'
import styles from '../../style'

const Button = ({text, className, onClick}) => {
  return (
    <button onClick={onClick} className={`max-w-[190px] bg-black p-2 rounded-xl ${className} cursor-pointer black`}>
      <p className={`text-white text-[16px]`}>{text}</p>
    </button>
  )
}

export default Button
