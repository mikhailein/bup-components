import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { facebookProvider, githubProvider, googleProvider } from '../config/authMethods'
import { useAuth } from '../contexts/AuthContext'
import RightSide from '../components/RightSide/RightSide'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LogInForm from '../components/LogInForm/LogInForm'

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