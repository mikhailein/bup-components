import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

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
<></>
  )
}

export default Signup