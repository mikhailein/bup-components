import React from 'react'
import { Box, Typography, TextField, Link, Button } from '@mui/material'
import logo from '../static/images/bupLogo.svg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PurpleButton from '../PurpleButton/PurpleButton';
import css from './LoginForm.module.css'
import google from '../static/images/google.svg'
import facebook from '../static/images/facebook.svg'
import arrowLogin from '../static/images/arrowLogin.svg'
import SocialButton from '../SocialButton.js/SocialButton';
import GreyTypography from '../GreyTypography/GreyTypography';
import Input from '../Input/Input';

// useStyle(hook mui)

const LogInForm = () => {

    return (
        <div
            className={css.container}
        >
            <img src={logo} alt="bup-logo" />
            <Typography variant='h3' element='h2' marginBottom="8px" style={{ fontWeight: 600, fontSize: 36 }}>Log In</Typography>
            <GreyTypography text={'Welcome back! Please enter your details.'} />
            <form className={css.form}
                onSubmit={() => (console.log('hello'))}>
                
                <label htmlFor="email" style={{ marginBottom: 10 }} >Email</label>
                <Input placeholder={'Enter your email'} />

                <label htmlFor="password" style={{ marginBottom: 10 }}>Password</label>
                <Input placeholder={'*******'}  />
                
                <Box className={css.checkBox}>
                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox sx={{
                                '&.Mui-checked': { color: '#6941C6', },
                            }} />} label="Remember me" />
                    </FormGroup>
                    <Link underline='none' style={{ color: '#6941C6', fontWeight: '500' }} href='/forgot-password'>Forgot Password</Link>
                </Box>
                
                <PurpleButton text={'Log in'}></PurpleButton>
                <SocialButton src={google} text={'Log in via Google'} />
                <SocialButton src={facebook} text={'Log in via Facebook'} />
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <GreyTypography text={'Don’t have an account?'}>
                    </GreyTypography>
                    <Link
                        underline='none'
                        style={{ color: '#6941C6', fontWeight: '500', marginLeft: 4 }} href='/signup'>
                        Sign up
                    </Link>
                </Box>
            </form>
            <img className={css.arrow} src={arrowLogin} alt="" />
        </div >
    )
}

export default LogInForm