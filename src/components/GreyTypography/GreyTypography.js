import { Typography } from '@mui/material'
import React from 'react'

const GreyTypography = ({text}) => {
  return (
      <Typography
          variant='body2'
          element='p'
          color='#667085'
      >{text}</Typography>
  )
}

export default GreyTypography