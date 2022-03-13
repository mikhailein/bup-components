import React from 'react'
import { Typography, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import star from '../static/images/star.svg'
import starYellow from '../static/images/star-yellow.svg'
import css from './RightSide.module.css'

const RightSide = () => {
    return (
        <Box className={css.container} >
            <Box style={{width:576}}>
                <Box className={css.imgBox}>
                    <img
                        className={css.firstStar}
                        src={starYellow}
                        alt=""
                    />
                    <img
                        className={css.bigStar}
                        src={star}
                        alt="big star"
                    />
                    <img
                        className={css.secondStar}
                        src={starYellow}
                        alt=""
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