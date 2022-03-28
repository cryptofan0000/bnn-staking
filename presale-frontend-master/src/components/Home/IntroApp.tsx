import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "url('/Images/Home/banana-tree.png')",
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '200px 20px',
    },
    content: {
      width: '100%',
      maxWidth: '1120px',
      margin: '0 auto',
    },
    columnLeft: {
      flexGrow: 1,
      marginRight: 0,
      [theme.breakpoints.up('md')]: {
        marginRight: '20px',
      },
    },
    columnRight: {
      marginLeft: 0,
      [theme.breakpoints.up('md')]: {
        marginLeft: '20px',
      },
    },
    financeTitle: {
      color: '#FFC711',
    },
    farmingTitle: {
      color: theme.palette.type === 'dark' ? 'white' : '#31C77E',
    },
    launchAppBtn: {
      backgroundColor: '#31C77E',
      textTransform: 'none',
    },
    buyBtn: {
      backgroundColor: '#FFC711',
      textTransform: 'none',
    },
    docBtn: {
      backgroundColor: '#FF7511',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#FFC711',
        color: 'white',
      },
    },
  }),
)

const StyledAvatar = styled(Avatar)({
  width: '240px',
  height: '240px',
})

const StyledIntroButton = styled(Button)({
  marginRight: '12px',
  marginTop: '20px',
  borderRadius: '25px',
  color: 'white',
})

const IntroApp: React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent={{ xs: 'center', lg: 'between' }}
        className={classes.content}
        alignItems="center"
        flexDirection={{ xs: 'column-reverse', lg: 'row' }}
      >
        <Box flexDirection="column" className={classes.columnLeft}>
          <Typography className={classes.financeTitle} variant="h3">
            Banana Finance
          </Typography>
          <Typography className={classes.farmingTitle} variant="h3">
            Easiest staking & yield farming
          </Typography>
          <Box display="inline">
            {/* <Link style={{ textDecoration: 'none' }} to="/app/stake">
              <StyledIntroButton className={classes.launchAppBtn} variant="contained" size="large">
                Launch App
              </StyledIntroButton>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <StyledIntroButton className={classes.buyBtn} variant="contained" size="large">
                Buy Now
              </StyledIntroButton>
            </Link> */}
            <StyledIntroButton
              href="https://bit.ly/3IIflzV"
              className={classes.docBtn}
              variant="contained"
              size="large"
            >
              Enter Presale
            </StyledIntroButton>
            <Link style={{ textDecoration: 'none' }} to="/app">
              <StyledIntroButton className={classes.launchAppBtn} variant="contained" size="large">
                Launch App
              </StyledIntroButton>
            </Link>
          </Box>
        </Box>
        <Box className={classes.columnRight}>
          <StyledAvatar alt="banana image" src="/Images/Home/banana_card.png" />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroApp
