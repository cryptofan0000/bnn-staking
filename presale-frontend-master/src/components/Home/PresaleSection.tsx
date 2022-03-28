import React from 'react'
import { scroller } from 'react-scroll'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === 'dark' ? '#1C4741' : '#D0F4E4',
      padding: '50px 20px',
    },
    contentBox: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '30px 50px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '4px',
      backgroundColor: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
    },
    leftColumn: {
      width: '100%',
      padding: '30px 50px',
      [theme.breakpoints.up('md')]: {
        width: '50%',
        borderRight: '1px solid #dddddd',
      },
    },
    rightColumn: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
      padding: '30px 50px',
    },
    yellowBtn: {
      background: '#FFC711',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      color: '#000000',
      '&:hover': {
        backgroundColor: '#FFC711',
        color: '#000000',
      },
    },
    greenBtn: {
      background: '#31C77E',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#31C77E',
        color: '#ffffff',
      },
    },
    title: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#31C77E',
      textAlign: 'center',
    },
    detail: {
      fontSize: '16px',
      color: '#31C77E',
      textAlign: 'center',
    },
  }),
)

const StyledTitle = styled(Typography)({
  marginBottom: '20px',
})

const ActionButton = styled(Button)({
  width: '100%',
  marginBottom: '20px',
})

const LastButton = styled(Button)({
  width: '100%',
  marginBottom: '20px',
})

const PresaleSection: React.FC = () => {
  const classes = useStyles()

  const scrollToSection = () => {
    scroller.scrollTo('guidelines', {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <Box className={classes.root}>
      <Box
        className={classes.contentBox}
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box
            display="flex"
            className={classes.leftColumn}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <StyledTitle className={classes.title}>BNNF Presale</StyledTitle>
            <StyledTitle className={classes.detail}>Starts from January 21st until February 21st, 2022</StyledTitle>
            <StyledTitle className={classes.detail}>
              If you would like to purchase $BNNF please follow the guidelines we provide. if have any problems and need
              our help, click contact us for assistant during the purchasing process.
            </StyledTitle>
            <Typography className={classes.detail}>
              Thanks,
              <br />
              BananaFinance Team
            </Typography>
          </Box>
          <Box
            display="flex"
            className={classes.rightColumn}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <ActionButton href="https://bit.ly/3IIflzV" className={classes.greenBtn} variant="contained" size="large">
              Presale
            </ActionButton>
            <ActionButton onClick={scrollToSection} className={classes.yellowBtn} variant="contained" size="large">
              Guidelines
            </ActionButton>
            <LastButton href="https://t.me/bananafinance" className={classes.greenBtn} variant="contained" size="large">
              Contact us
            </LastButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PresaleSection
