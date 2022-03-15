import { Button } from '@mui/material'
import React from 'react'

const SocialButton = ({ src, text, onClick }) => {
    return (
        <Button
            onClick={onClick}
            style={{
                color: '#344054',
                borderColor: '#D0D5DD',
                marginBottom: 16,
                textTransform: 'none'
            }}
            variant="outlined"
        ><img src={src} alt=""
            style={{
                marginRight: 12
            }}
            />
            {text}
        </Button>
    )
}

export default SocialButton