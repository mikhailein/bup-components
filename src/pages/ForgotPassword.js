import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email to follow instructions')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
<div>Forgot Passowrd</div>
    )
}

export default ForgotPassword