import React from 'react'
import { Typography, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import StarIcon from '../components/StarIcon'
import star from './static/images/star.svg'
import starYellow from './static/images/star-yellow.svg'

const RightSide = () => {
    return (
        <Box
            style={{
                width: 768,
                height: 960,
                color: 'white'
            }}
            sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: "linear-gradient(45deg, #101828 0%, #475467 100%)",
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Box style={{width:576}}>
                <Box style={{ width: 80, height: 80, marginBottom: 32 }}>
                    <img
                        src={starYellow}
                        alt=""
                        style={{
                            position: 'relative',
                            display: 'block',
                            top: 0,
                            right: 0
                        }}
                    />
                    <img
                        src={star}
                        alt=""
                        style={{
                            position: 'relative',
                            display:'block',
                            top:'-24px',
                            right: 0
                        }}
                    />
                    <img
                        src={starYellow}
                        alt=""
                        style={{
                            position: 'relative',
                            display: 'block',
                            top: '-86px',
                            left: 62,
                            width:16
                        }}
                    />
                </Box>
                <Typography
                    display='block'
                    variant="h3"
                    component='h1'
                    style={{ fontSize: 60, marginBottom: 24 }}
                >
                    Start turning your ideas into reality</Typography>
                <Typography
                    component='p'
                    variant='body1'
                    style={{ marginBottom: 32 }}
                >Log in to BUP to find the best influencers and companies to create the most daring collaborations</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <AvatarGroup style={{ marginRight: 16 }}>
                        <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="./static/images/1.jpg" />
                        <Avatar sx={{ width: 40, height: 40 }} alt="Travis Howard" src="./static/images/2.jpg" />
                        <Avatar sx={{ width: 40, height: 40 }} alt="Agnes Walker" src="./static/images/4.jpg" />
                        <Avatar sx={{ width: 40, height: 40 }} alt="Trevor Henderson" src="./static/images/5.jpg" />
                        <Avatar sx={{ width: 40, height: 40 }} alt="Trevor Henderson" src="./static/images/5.jpg" />
                    </AvatarGroup>
                    <Typography>Join 40,000+ users</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSide