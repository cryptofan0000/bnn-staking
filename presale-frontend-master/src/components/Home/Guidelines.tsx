import React from 'react'
import { Element } from 'react-scroll'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '60px',
      margin: '20px 20px 60px 20px',
    },
    content: {
      maxWidth: '1120px',
      margin: '0 auto',
    },
    headerpart1: {
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
    headerpart2: {
      color: '#FFC711',
      fontWeight: 600,
    },
    accordionSummary: {
      padding: '10px 25px',
      margin: 0,
      backgroundColor: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
    },
    accordionHeading: {
      margin: 0,
      color: '#31C77E',
      fontSize: '20px',
      fontWeight: 600,
    },
    accordionDetail: {
      padding: '25px',
      fontSize: '14px',
      backgroundColor: theme.palette.type === 'dark' ? '#000000' : '#F5F6F6',
    },
  }),
)

const StyledAccordion = styled(Accordion)({
  borderRadius: '4px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
})

const AccordionIcon = styled(ExpandMoreIcon)({
  fontSize: '32px',
  color: '#31C77E',
})

const StyledTitleTypography = styled(Typography)({
  fontSize: '36px',
  textAlign: 'center',
  marginBottom: '24px',
})

const Guidelines: React.FC = () => {
  const classes = useStyles()

  return (
    <Element name="guidelines" className={classes.root}>
      <Box display="flex" justifyContent="center" flexDirection={{ xs: 'column', sm: 'row' }}>
        <StyledTitleTypography className={classes.headerpart1}>Presale guidelines&nbsp;</StyledTitleTypography>
        <StyledTitleTypography className={classes.headerpart2}>Banana Finance</StyledTitleTypography>
      </Box>
      <Box className={classes.content}>
        <StyledAccordion>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<AccordionIcon />}>
            <Typography className={classes.accordionHeading}>Step 1: Create a wallet</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              <span style={{ color: '#FFC711' }}>$BNNF</span>&nbsp;token is available on the Ethereum blockchain. They
              are so many wallets that work for&nbsp;<span style={{ color: '#FFC711' }}>$BNNF</span>&nbsp;but MetaMask
              is a third-party ERC20 (Ethereum) browser wallet that we recommend the users to use. On Google Chrome,
              visit metamask.io to download the extension and set up a wallet. On mobile, users can get MetaMask's
              application for both iPhone and Android.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<AccordionIcon />}>
            <Typography className={classes.accordionHeading}>Step 2: Prepare your fund in USDC/ USDT/ BUSD</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Transfer USDC/ USDT/ BUSD to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance or
              any CEXs). Users can use both Etheruem chain and Binance Smart Chain BSC for this step.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<AccordionIcon />}>
            <Typography className={classes.accordionHeading}>Step 3: Click 'enter presale</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              You can currently buy&nbsp;<span style={{ color: '#FFC711' }}>$BNNF</span>&nbsp;on the presale phase
              through our steps after clicking 'enter presale on&nbsp;
              <span style={{ color: '#FFC711' }}>BananaFinance.org</span>
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<AccordionIcon />}>
            <Typography className={classes.accordionHeading}>Step 4: Follow the steps</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              Make sure you follow all the steps after clicking 'enter presale and wait for your confirmation email from
              BananaFinance team.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary className={classes.accordionSummary} expandIcon={<AccordionIcon />}>
            <Typography className={classes.accordionHeading}>
              Step 5: Claim&nbsp;<span style={{ color: '#FFC711' }}>$BNNF</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetail}>
            <Typography>
              After the presale ends, all participators will receive their&nbsp;
              <span style={{ color: '#FFC711' }}>$BNNF</span>&nbsp;from the presale directly to their wallet.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </Box>
    </Element>
  )
}

export default Guidelines
