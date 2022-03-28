import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#31C77E77',
        '& $title': {
          color: '#ffffff',
        },
        '& $button': {
          color: 'white',
          border: '1px solid white',
        },
      },
    },
    title: {
      marginTop: '10px',
      color: '#9D9D9D',
    },
    button: {
      color: '#31C77E',
      border: '1px solid #31C77E',
    },
  }),
)

const StyledLogoTitle = styled(Typography)({
  marginBottom: '16px',
})

// const StyledIntroButton = styled(Button)({
//   borderRadius: '10px',
//   textTransform: 'none',
//   padding: '10px 24px',
// })
// '#31C77E' : '#F7F9F8'

const LearnMoreCard: React.FC<{ isActive: boolean; actionBtn: boolean; iconSrc: string; title: string }> = ({
  isActive,
  actionBtn,
  iconSrc,
  title,
}) => {
  const classes = useStyles()
  return (
    <Box
      width="320px"
      height="320px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      className={classes.container}
      p={8}
      mx={5}
      my={2}
      textAlign="-webkit-center"
    >
      <img width="130px" height="130px" alt="Remy Sharp" src={iconSrc} />
      <StyledLogoTitle className={classes.title}>{title}</StyledLogoTitle>
      {/* {actionBtn ? (
        <StyledIntroButton className={classes.button} variant="outlined">
          See all
        </StyledIntroButton>
      ) : (
        ''
      )} */}
    </Box>
  )
}

export default LearnMoreCard
