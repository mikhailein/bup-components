import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassowrd, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updateEmail(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch((e) => {
            setError(e.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <></>
    )
}

export default UpdateProfile