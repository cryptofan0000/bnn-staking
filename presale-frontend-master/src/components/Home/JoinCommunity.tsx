import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Joincard from '../../common/components/Joincard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 20px 100px 20px',
    },
    appBar: {
      height: '100px',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #FAFFFE 0%, #F5F5F5 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    financeTitle: {
      color: '#FFC711',
    },
    farmingTitle: {
      color: '#31C77E',
    },
    launchAppBtn: {
      backgroundColor: '#31C77E',
    },
    buyBtn: {
      backgroundColor: '#FFC711',
    },
    docBtn: {
      backgroundColor: '#FF7511',
    },
    header: {
      fontSize: '36px',
      textAlign: 'center',
      marginBottom: '36px',
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
  }),
)

const JoinCommunity: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Join our community</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', lg: 'row' }}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            to={{ pathname: 'https://twitter.com/bananafinance_' }}
          >
            <Joincard isActive={true} iconSrc="fab fa-twitter" title="Twitter" subtitle="Banana Finance #BNF" />
          </Link>
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            to={{ pathname: 'https://t.me/bananafinance' }}
          >
            <Joincard
              isActive={false}
              iconSrc="fab fa-telegram-plane"
              title="Telegram"
              subtitle="Banana Finance Community"
            />
          </Link>
        </Box>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            to={{ pathname: 'https://medium.com/@bananafinance' }}
          >
            <Joincard isActive={false} iconSrc="fab fa-medium-m" title="Medium" subtitle="Read our latest blog posts" />
          </Link>
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            to={{ pathname: 'https://t.me/bananafichannel' }}
          >
            <Joincard
              isActive={false}
              iconSrc="fab fa-telegram-plane"
              title="Announcement"
              subtitle="Banana Finance Announcement"
            />
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default JoinCommunity
