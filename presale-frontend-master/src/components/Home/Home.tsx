import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Avatar, Paper, IconButton, Box, Typography, AppBar, Toolbar } from '@material-ui/core'
import {
  Brightness2Outlined as Brightness2OutlinedIcon,
  WbSunnyOutlined as WbSunnyOutlinedIcon,
} from '@material-ui/icons'

import IntroApp from './IntroApp'
import Guidelines from './Guidelines'
import IntroDetail from './IntroDetail'
import JoinCommunity from './JoinCommunity'
import PresaleSection from './PresaleSection'

import logoImage from '../../assets/images/logo.png'
import certik from '../../assets/images/certik.png'
import certikDark from '../../assets/images/certikDark.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      height: '70px',
      justifyContent: 'center',
      background:
        theme.palette.type === 'dark'
          ? 'linear-gradient(90deg, #1D4437 0%, #141414 100%)'
          : 'linear-gradient(90deg, #FAFFFE 0%, #F5F5F5 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    container: {
      background:
        theme.palette.type === 'dark'
          ? "url('/Images/Home/background.png'), linear-gradient(75.36deg, #0C3C2B 10.36%, #000000 89.64%)"
          : "url('/Images/Home/background.png'), #F8FFFD",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    navContent: {
      width: '100%',
      maxWidth: '1120px',
      margin: '0 auto',
    },
    themeSwitch: {
      width: '38px',
      height: '38px',
      background: theme.palette.type === 'dark' ? '#1B413D' : 'white',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      marginRight: '4px',
    },
    themeButton: {
      color: '#31C77E',
      padding: '7px',
    },
    launchAppBtn: {
      background: 'linear-gradient(90deg, #5BE3B6 0%, #F9C817 100%)',
      textTransform: 'none',
      '&:hover': {
        color: 'black',
      },
    },
    docBtn: {
      backgroundColor: '#FF7511',
      color: 'white',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#FFC711',
        color: 'black',
      },
    },
    certik: {
      color: theme.palette.type === 'dark' ? '#ffffff' : '#000000',
      fontWeight: 600,
      fontSize: '28px',
      marginBottom: 0,
      letterSpacing: '1px',
    },
    certikBox: {
      backgroundColor: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
    },
    topbar: {
      justifyContent: 'center',
    },
    styledLogoTitle: {
      color: theme.palette.type === 'dark' ? 'white' : 'black',
      fontSize: '16px',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      marginLeft: '10px',
      lineHeight: 1.2,
    },
  }),
)

const StyledAvatar = styled(Avatar)({
  width: '50px',
  height: '50px',
})

const StyledIntroButton = styled(Button)({
  margin: '0 6px',
  borderRadius: '25px',
})

interface HomeProps {
  setIsDark: (state: boolean) => void
  isDark: boolean
}

const Home: React.FC<HomeProps> = ({ setIsDark, isDark }) => {
  const classes = useStyles()

  // switch theme
  const handleThemeChange = () => {
    const state = !isDark
    setIsDark(state)
  }
  return (
    <Box>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.topbar}>
          <Box className={classes.navContent} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <StyledAvatar alt="banana logo" src={logoImage} />
              <Box>
                <Typography className={classes.styledLogoTitle} variant="subtitle1">
                  Banana
                </Typography>
                <Typography className={classes.styledLogoTitle} variant="subtitle1">
                  Finance
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Paper className={classes.themeSwitch}>
                <IconButton onClick={() => handleThemeChange()} className={classes.themeButton}>
                  {isDark ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />}
                </IconButton>
              </Paper>
              <StyledIntroButton
                href="https://bit.ly/3IIflzV"
                className={classes.launchAppBtn}
                variant="contained"
                size="large"
              >
                Enter Presale
              </StyledIntroButton>
              <Link style={{ textDecoration: 'none' }} to="/app">
                <StyledIntroButton className={classes.docBtn} variant="contained" size="large">
                  Launch App
                </StyledIntroButton>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.container} py={4}>
        <IntroApp />
        <PresaleSection />
        <Guidelines />
        <IntroDetail />
        <JoinCommunity />
        <Box display="flex" alignItems="center" flexDirection="column" gridGap="30px" margin="0 20px 100px 20px">
          <Typography className={classes.certik} variant="subtitle1">
            Our contracts have been audited by
          </Typography>
          <Link
            style={{ display: 'block', width: '100%', maxWidth: '700px', color: 'inherit', textDecoration: 'none' }}
            target="_blank"
            to={{ pathname: 'https://www.certik.com/projects/bananafinance' }}
          >
            <Box
              className={classes.certikBox}
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
              margin="0 0 100px 0"
              padding="60px 10%"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="4px"
            >
              {isDark ? (
                <img width="100%" src={certikDark} alt="certik" />
              ) : (
                <img width="100%" src={certik} alt="certik" />
              )}
            </Box>
          </Link>
        </Box>
      </Box>
      <Box width="100%" height="50px" bgcolor="#31C77E">
        <Box textAlign="center" style={{ paddingTop: '12px', color: 'white' }}>
          <p>Powered by Banana Finance</p>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
