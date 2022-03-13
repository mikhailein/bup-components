import React from 'react'
import { Box, Typography, TextField, Link, Button } from '@mui/material'
import logo from '../static/images/bupLogo.svg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const LogInForm = () => {

    return (
        <Box style={{ width: 360, alignSelf: 'center' }}>
            <img src={logo} alt="bup-logo" />
            <Typography variant='h3' element='h2' marginBottom="8px" style={{ fontWeight: 600, fontSize: 36 }}>Log In</Typography>
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
                        display: "block"
                    }
                }}
                onSubmit={() => (console.log('hello'))}>

                <label htmlFor="email" style={{ marginBottom: 10 }} >Email</label>
                <TextField
                    style={{ marginBottom: 20 }}
                    id="outlined-email-input"
                    placeholder='Enter your email'
                    type="Email"
                    autoComplete="current-password"
                />


                <label htmlFor="password" style={{ marginBottom: 10 }}>Password</label>
                <TextField
                    style={{ marginBottom: 20 }}
                    id="outlined-password-input"
                    placeholder='*******'
                    type="password"
                    autoComplete="current-password"
                />
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#667085',
                    marginBottom: '24px'
                }}>
                    <FormGroup >
                        <FormControlLabel control={<Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: '#6941C6',
                                },
                            }} />} label="Label" />
                    </FormGroup>
                    <Link underline='none' style={{ color: '#6941C6', fontWeight: '500' }}>Forgot Password</Link>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ marginBottom: 10, color: 'white', backgroundColor: '#6941C6' }}
                >Log In</Button>
            </form>
        </Box >
    )
}

export default LogInForm