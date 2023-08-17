import React from 'react'
import styles from '../../style'

const Button = ({text, className}) => {
  return (
    <div className={`max-w-[190px] bg-black p-2 rounded-xl ${className} cursor-pointer black`}>
      <p className={`text-white text-[16px]`}>{text}</p>
    </div>
  )
}

export default Button