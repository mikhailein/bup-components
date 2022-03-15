import React from 'react'
import css from './Input.module.css'

const Input = ({ placeholder, refer, type }) => {
  return (
    <input
      ref={refer}
      className={css.input}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input