import React from 'react'
import css from './Input.module.css'

const Input = ({placeholder}) => {
  return (
      <input
          className={css.input}
          placeholder={placeholder}
          type="Email"
      />
  )
}

export default Input