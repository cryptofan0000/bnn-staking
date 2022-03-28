import React from 'react'
import { Link } from 'react-router-dom'
//material-ui components
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import { Avatar, Drawer, Box, ListItem, Typography, IconButton } from '@material-ui/core'
//material-ui icons
import GitHubIcon from '@material-ui/icons/GitHub'
import MenuIcon from '@material-ui/icons/Menu'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import logoImage from '../../assets/images/logo.png'

const drawerWidth = 250
const drawerCollapsedWidth = 80

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerCollapsedWidth,
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerCollapsedWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
    background: theme.palette.type === 'dark' ? 'black' : 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    minHeight: '100px !important',
  },
  leftMenuLogoText: {
    color: '#31C77E',
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  leftMenuLogoImg: {
    marginRight: '10px',
    marginLeft: '10px',
  },
  styleIcon: {
    minWidth: '39px',
  },
  styleListItemText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    fontSize: '1rem',
  },
  styleListHeading: {
    paddingLeft: '15px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  styleListHeadingText: {
    color: '#9D9D9D',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    fontSize: '1.25rem',
  },
  iconColor: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
  activeList: {
    backgroundColor: '#31C77E',
    color: '#ffffff !important',
  },
  iconImg: {
    marginLeft: '10px',
    marginRight: '10px',
    fontSize: '20px',
  },
  styledLogoTitle: {
    color: '#31C77E',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: '10px',
    lineHeight: 1.2,
  },
}))

const StyleListItem = styled(ListItem)({
  padding: '16px 16px 16px 18px',
  color: '#9D9D9D',
  '&:hover': {
    backgroundColor: '#91e1ba',
    color: '#9D9D9D',
  },
  '&:focus': {
    backgroundColor: '#31C77E',
    color: '#ffffff',
  },
})

const StyleLink = styled(Link)({
  padding: '0px',
})

const StyledAvatar = styled(Avatar)({
  width: '50px',
  height: '50px',
})

interface LeftMenuProps {
  setIsOpen: (state: boolean) => void
  isOpen: boolean
}

const LeftMenu: React.FC<LeftMenuProps> = ({ setIsOpen, isOpen }) => {
  const classes = useStyles()

  const handleToggleButton = () => {
    const state = !isOpen
    setIsOpen(state)
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.drawerHeader} display="flex" flexWrap="wrap" justifyContent="center">
        <IconButton onClick={handleToggleButton}>
          <MenuIcon className={classes.iconColor} />
        </IconButton>
        <Link style={{ textDecoration: 'none' }} to="/">
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
        </Link>
      </Box>
      <Box my={1}>
        <StyleLink className="nav-link" target="_blank" to={{ pathname: 'https://t.me/bananafichannel' }}>
          <StyleListItem button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Announcement</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" target="_blank" to={{ pathname: 'https://t.me/bananafinance' }}>
          <StyleListItem button>
            <TelegramIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Community</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" target="_blank" to={{ pathname: 'https://twitter.com/bananafinance_' }}>
          <StyleListItem button>
            <TwitterIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Twitter</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink className="nav-link" target="_blank" to={{ pathname: 'https://medium.com/@bananafinance' }}>
          <StyleListItem button>
            <span className={classes.iconImg}>
              <i className="fab fa-medium-m"></i>
            </span>
            <Typography className={classes.styleListItemText}>Medium</Typography>
          </StyleListItem>
        </StyleLink>
        <StyleLink
          className="nav-link"
          target="_blank"
          to={{ pathname: 'https://github.com/bananafinance/bananafinance' }}
        >
          <StyleListItem button>
            <GitHubIcon className={classes.styleIcon} />
            <Typography className={classes.styleListItemText}>Github</Typography>
          </StyleListItem>
        </StyleLink>
      </Box>
    </Drawer>
  )
}

export default LeftMenu
