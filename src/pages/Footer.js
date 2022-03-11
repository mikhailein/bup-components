import React from 'react'
import { Link, Typography } from '@mui/material'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 32, color: '#667085' }}>
            <Typography variant="body2" element='span'>©Bup 2022</Typography>
            <Link underline='none' href='mailto:help@bup.com' style={{ cursor: 'pointer', color: '#667085' }}>
                <div style={{ display: 'flex', alignItems: 'center',  }}>
                    <MailOutlineOutlinedIcon style={{ marginRight: 8 }} />
                    <Typography variant="body2" element='span'>help@bup.com</Typography>
                </div>
            </Link>
        </footer>
    )
}

export default Footer