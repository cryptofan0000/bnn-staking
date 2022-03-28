import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: theme.palette.type === 'dark' ? '#1B413D' : '#ffffff',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#31C77E',
        '& $title': {
          color: '#ffffff',
        },
        '& $subtitle': {
          color: '#ffffff',
        },
        '& $icon': {
          backgroundColor: '#ffffff',
          color: '#31C77E',
        },
      },
    },
    title: {
      fontSize: '20px',
      color: '#31C77E',
    },
    subtitle: {
      fontSize: '16px',
      color: '#9D9D9D',
    },
    icon: {
      background: '#31C77E',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '100px',
      verticalAlign: 'middle',
      fontSize: '50px',
    },
  }),
)

const StyledLogoTitle = styled(Typography)({
  marginTop: '16px',
  marginBottom: '16px',
})

const Joincard: React.FC<{ isActive: boolean; subtitle: string; iconSrc: string; title: string }> = ({
  isActive,
  iconSrc,
  title,
  subtitle,
}) => {
  const classes = useStyles()
  return (
    <Box
      width="240px"
      height="240px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      className={classes.container}
      p={2}
      mx={3}
      my={2}
      textAlign="-webkit-center"
    >
      <span>
        <i className={[classes.icon, iconSrc].join(' ')} />
      </span>
      <StyledLogoTitle className={classes.title}>{title}</StyledLogoTitle>
      <StyledLogoTitle className={classes.subtitle}>{subtitle}</StyledLogoTitle>
    </Box>
  )
}

export default Joincard
