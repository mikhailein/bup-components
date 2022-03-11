import { Box } from '@mui/material'
import React from 'react'
import RightSide from '../components/RightSide'
import Header from './Header'
import Footer from './Footer'
import LogInForm from '../components/LogInForm'

const Login = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-between',
            width: 672,
            height: 960
          }}>
          <Header />
          <LogInForm/>
          <Footer></Footer>
        </Box>
        <RightSide></RightSide>
      </Box>
    </>
  )
}

export default Login