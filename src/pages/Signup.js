import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import RightSide from '../components/RightSide/RightSide'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm/SignUpForm'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/login')
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 672,
            height: 960
          }}>
          <Header />
          <SignUpForm />
          <Footer></Footer>
        </Box>
        <RightSide></RightSide>
      </Box>
    </>
  )
}

export default Signup