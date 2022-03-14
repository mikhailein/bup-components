import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import star from '../static/images/star.svg'
import starYellow from '../static/images/star-yellow.svg'
import css from './RightSide.module.css'
import avatar1 from '../static/images/avatar1.png'
import avatar2 from '../static/images/avatar2.png'
import avatar3 from '../static/images/avatar3.png'
import avatar4 from '../static/images/avatar4.png'
import avatar5 from '../static/images/avatar5.png'

const RightSide = () => {
    return (
        <div className={css.container}>
            <Box style={{ width: 576 }}>
                <Box className={css.imgBox}>
                    <img
                        className={css.firstStar}
                        src={starYellow}
                        alt="small star"
                    />
                    <img
                        className={css.bigStar}
                        src={star}
                        alt="big star"
                    />
                    <img
                        className={css.secondStar}
                        src={starYellow}
                        alt="small star"
                    />
                </Box>
                <Typography
                    display='block'
                    variant="h3"
                    component='h1'
                    style={{ fontSize: 60, marginBottom: 24 }}
                >
                    Start turning your ideas into reality</Typography>
                <p className={css.info}>
                    Log in to BUP to find the best influencers and companies to create the most daring collaborations
                </p>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AvatarGroup style={{ marginRight: 16 }}>
                        <Avatar className={css.avatar} alt="Remy Sharp" src={avatar1} />
                        <Avatar className={css.avatar} alt="Travis Howard" src={avatar2} />
                        <Avatar className={css.avatar} alt="Agnes Walker" src={avatar3} />
                        <Avatar className={css.avatar} alt="Trevor Henderson" src={avatar4} />
                        <Avatar className={css.avatar} alt="Trevor Henderson" src={avatar5} />
                    </AvatarGroup>
                    <Typography>Join 40,000+ users</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default RightSide