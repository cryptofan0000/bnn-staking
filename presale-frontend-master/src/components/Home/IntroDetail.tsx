import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LearnMoreCard from '../../common/components/LearnMoreCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '60px',
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
    bannerText: {
      color: theme.palette.type === 'dark' ? 'white' : 'black',
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
    headerpart1: {
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
    headerpart2: {
      color: '#FFC711',
      fontWeight: 600,
    },
    presaleBox: {
      backgroundColor: 'rgb(49, 199, 126)',
      marginBottom: '40px',
    },
    presale: {
      color: '#ffffff',
      fontWeight: 600,
      fontSize: '30px',
      marginBottom: 0,
      whiteSpace: 'nowrap',
      letterSpacing: '1px',
      padding: '10px 15px',
    },
    container: {
      background: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
    },
  }),
)

const StyledTitleTypography = styled(Typography)({
  fontSize: '36px',
  textAlign: 'center',
  marginBottom: '24px',
})

const IntroDetail: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center" flexDirection={{ xs: 'column', sm: 'row' }}>
        <StyledTitleTypography className={classes.headerpart1}>Learn more about&nbsp;</StyledTitleTypography>
        <StyledTitleTypography className={classes.headerpart2}>Banana Finance</StyledTitleTypography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
        <Link
          style={{ textDecoration: 'none' }}
          target="_blank"
          to={{ pathname: 'https://bananafinance.medium.com/bananafinance-introduction-b48b942a1008' }}
        >
          <LearnMoreCard
            isActive={true}
            actionBtn={true}
            iconSrc="/Images/Home/banana_card.png"
            title="Intro to Banana Finance"
          />
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          target="_blank"
          to={{ pathname: 'https://bananafinance.medium.com/bnnf-tokenomic-13cf69f51458' }}
        >
          <LearnMoreCard isActive={false} actionBtn={true} iconSrc="/Images/Home/Tokenomic.png" title="Tokenomic" />
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          target="_blank"
          to={{ pathname: 'https://bananafinance.medium.com/bananafinance-roadmap-1b3faac56597' }}
        >
          <LearnMoreCard isActive={false} actionBtn={false} iconSrc="/Images/Home/Roadmap.png" title="Roadmap" />
        </Link>
      </Box>
    </div>
  )
}

export default IntroDetail
