import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import logo from './static/images/bupLogo.svg'



const LogInForm = () => {

    return (
        <Box style={{ width: 360, alignSelf: 'center' }}>
            <img src={logo} alt="bup-logo" />
            <Typography variant='h3' element='h2' style={{ fontWeight: 600, fontSize: 36 }}>Log In</Typography>
            <Typography
                variant='body2'
                element='p'
                color='#667085'
                marginBottom="32px"
            >
                Welcome back! Please enter your details.</Typography>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    '*:not(:last-child)': {
                        display: "block",
                        marginBottom: 20
                    }
                }}
                onSubmit={()=>(console.log('hello'))}>

                <label htmlFor="email" style={{ marginBottom: 10 }} >Email</label>
                <TextField
                    id="outlined-email-input"
                    placeholder='Enter your email'
                    type="Email"
                    autoComplete="current-password"
                />


                <label htmlFor="password" style={{ marginBottom: 10 }}>Password</label>
                <TextField
                    id="outlined-password-input"
                    placeholder='*******'
                    type="password"
                    autoComplete="current-password"
                />

                <button type="submit" style={{ marginBottom: 10 }}>Submit</button>
            </form>
        </Box >
    )
}

export default LogInForm