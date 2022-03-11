import React from 'react'
import {  Link, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimpleListMenu from '../components/DropMenu';

const Header = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 32 }}>
          <Link underline='none' href='/' style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#667085' }}>
                  <ArrowBackIcon style={{ marginRight: 8 }} />
                  <Typography variant="body2" element='span'>Back to landing</Typography>
              </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', color: '#667085' }}>
              <SimpleListMenu></SimpleListMenu>
          </div>
      </div>
  )
}

export default Header