import React, { useRef, useState } from 'react'
import { Box, Typography, TextField, Link, Button } from '@mui/material'
import logo from '../static/images/bupLogo.svg'
import PurpleButton from '../PurpleButton/PurpleButton';
import css from './SignUpForm.module.css'
import google from '../static/images/google.svg'
import facebook from '../static/images/facebook.svg'
import arrowLogin from '../static/images/arrowLogin.svg'
import SocialButton from '../SocialButton.js/SocialButton';
import GreyTypography from '../GreyTypography/GreyTypography';
import Input from '../Input/Input';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const SignUpForm = () => {
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
            history.push('/firebase-copy/login')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <div className={css.container}>
            <img src={logo} alt="bup-logo" />
            <Typography variant='h3' element='h2' marginBottom="8px" style={{ fontWeight: 600, fontSize: 36 }}>Sign up</Typography>
            <GreyTypography text={'Enter your information'} />

            <form className={css.form} onSubmit={handleSubmit}>

                <label htmlFor="email" style={{ marginBottom: 10 }} >Email</label>
                <Input refer={emailRef} placeholder={'Enter your email'} />

                <label htmlFor="password" style={{ marginBottom: 10, marginTop: 10 }}>Password</label>
                <Input refer={passwordRef} placeholder={'Create a password'} />
                <GreyTypography text={'Must be at least 8 characters.'} />

                <label htmlFor="password" style={{ marginBottom: 10, marginTop: 10 }}>Repeat Password</label>
                <Input refer={passwordConfirmRef} placeholder={'Create a password'} />
                <GreyTypography text={'Must be at least 8 characters.'} />

                <PurpleButton disabled={loading} text={'Create account'}></PurpleButton>
                <SocialButton src={google} text={'Sign up via Google'} />
                <SocialButton src={facebook} text={'Sign up via Facebook'} />

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <GreyTypography text={'Already have an account?'}>
                    </GreyTypography>
                    <Link
                        underline='none'
                        style={{ color: '#6941C6', fontWeight: '500', marginLeft: 4 }} href='/login'>
                        Log in
                    </Link>
                </Box>
            </form>
            <img className={css.arrow} src={arrowLogin} alt="" />
        </div >
    )
}

export default SignUpForm