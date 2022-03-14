import React from 'react'
import {  Link, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimpleListMenu from '../DropMenu/DropMenu';
import css from './Header.module.css'

const Header = () => {
  return (
      <div className={css.container}>
          <Link underline='none' href='/' style={{ cursor: 'pointer' }}>
              <div className={css.rightSide}>
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