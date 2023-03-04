import React from 'react'
import styles from "../../styles/Button.module.css"

type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }

const Button = ({children}: Props) => {
  return (
    <button className={`${styles.button} text-[16px] text-[#1C0E22] rounded-[48px] w-full h-[52px] flex justify-center items-center`}>{children}</button>
  )
}

export default Button