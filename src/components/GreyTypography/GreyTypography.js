import { Typography } from '@mui/material'
import React from 'react'

const GreyTypography = ({text}) => {
  return (
      <Typography
          variant='body2'
          element='p'
          color='#667085'
          marginBottom="32px"
      >{text}</Typography>
  )
}

export default GreyTypography