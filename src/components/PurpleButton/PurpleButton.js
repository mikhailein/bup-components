import { Button } from '@mui/material'
import React from 'react'

const PurpleButton = ({text}) => {
  return (
      <Button
          type="submit"
          style={{
              marginTop:24,
              marginBottom: 16,
              color: 'white',
              backgroundColor: '#6941C6',
              textTransform: 'none',
              fontSize: 16,
          }}
      >{text}</Button>
  )
}

export default PurpleButton