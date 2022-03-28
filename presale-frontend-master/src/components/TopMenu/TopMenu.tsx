import React, { useEffect } from 'react'
import classNames from 'classnames'
import clsx from 'clsx'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { ConnectorNames, connectorLocalStorageKey } from 'config'
//material-ui components
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { AppBar, Box, Toolbar, IconButton, Paper, InputBase, MenuItem, Button, InputAdornment } from '@material-ui/core'
import {
  Brightness2Outlined as Brightness2OutlinedIcon,
  ArrowDropDown as ArrowDropDownIcon,
  WbSunnyOutlined as WbSunnyOutlinedIcon,
  Menu as MenuIcon,
} from '@material-ui/icons'

//external components
import Metamask from './Metamask'
import TrustWallet from './TrustWallet'
import XBXTokenImg from '../../assets/images/XBX.png'
import BananaTokenImg from '../../assets/images/BananaToken.png'

const drawerWidth = 250
const drawerCollapsedWidth = 80

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: theme.palette.type === 'dark' ? 'black' : 'white',
  },
  appBarShift: {
    width: `calc(100% - ${drawerCollapsedWidth}px)`,
    marginLeft: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: drawerWidth,
    },
  },
  undersm: {
    display: 'none',
    [theme.breakpoints.up(760)]: {
      display: 'flex',
    },
  },
  upsm: {
    display: 'none',
    [theme.breakpoints.down(760)]: {
      display: 'flex',
    },
  },
  topbar: {
    minHeight: '80px',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    height: 'fit-content',
  },
  iconColor: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },
  controlIconColor: {
    color: '#31C77E',
  },
  hide: {
    display: 'none',
  },
  buyButtonPanel: {
    background: theme.palette.type === 'dark' ? 'black' : 'white',
    border: '1px solid #31C77E',
    boxSizing: 'border-box',
    borderRadius: '7px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    width: 180,
    boxShadow: 'none',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    height: '50%',
  },
  buyButton: {
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    backgroundColor: '#31C77E',
    borderRadius: '0px 5px 5px 0px',
  },
  coinIcon: {
    width: '40px',
    padding: '0px 5px',
  },
  buyInput: {
    flex: 1,
    color: '#31C77E',
  },
  themeSwitch: {
    background: theme.palette.type === 'dark' ? '#1E1F22' : 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  themeButton: {
    color: '#31C77E',
    padding: '7px',
  },
  iconButton: {
    padding: 0,
  },
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerMenuItem: {
    // '&:hover, &:focus': {
    //   backgroundColor: '#F3F5FF',
    // },
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
  connectButton: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    background: 'linear-gradient(90deg, #57E3BA 0%, #FFC711 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '7px',
    color: 'white',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: '5px 10px 5px 20px',
    alignItems: 'center',
    justifyContent: ' center',
  },
  connectMenu: {
    minWidth: 265,
  },
  connectMenuItem: {
    color: theme.palette.type === 'dark' ? 'white' : '#382a2a',
    width: '160px',
  },
  connectMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  topmenubackground: {
    background: theme.palette.type === 'dark' ? 'black' : 'white',
  },
  topBarCollapsedWidth: {
    marginLeft: '0 !important',
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

interface TopMenuProps {
  setIsOpen: (state: boolean) => void
  isOpen: boolean
  setIsDark: (state: boolean) => void
  isDark: boolean
}

interface State {
  numberformat: string
}

const TopMenu: React.FC<TopMenuProps> = ({ isOpen, setIsOpen, isDark, setIsDark }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // switch theme
  const handleThemeChange = () => {
    const state = !isDark
    setIsDark(state)
  }

  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null

  useEffect(() => {
    const localkey = window.localStorage.getItem(connectorLocalStorageKey)

    if (localkey === ConnectorNames.Injected && account === undefined) {
      login(ConnectorNames.Injected)
    }
  })

  const [values1, setValuesone] = React.useState<State>({
    numberformat: '0',
  })

  const [values2, setValuestwo] = React.useState<State>({
    numberformat: '0',
  })

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuesone({
      ...values1,
      [event.target.name]: event.target.value,
    })
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuestwo({
      ...values2,
      [event.target.name]: event.target.value,
    })
  }

  const handleToggleButton = () => {
    const state = !isOpen
    setIsOpen(state)
  }

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null)

  const handleClickOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl1(null)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
      <Box display="flex" alignItems="center" justifyContent={isOpen ? 'flex-end' : 'space-between'}>
        <IconButton
          aria-label="open drawer"
          onClick={handleToggleButton}
          edge="start"
          className={clsx(classes.menuButton, isOpen && classes.hide)}
        >
          <MenuIcon className={classes.iconColor} />
        </IconButton>
        <Toolbar className={classes.topbar}>
          <Box display="flex" className={classes.undersm}>
            {/* <Paper component="form" className={classes.buyButtonPanel}>
              <IconButton className={classes.iconButton}>
                <img src={XBXTokenImg} alt="Coin1" className={classes.coinIcon} />
              </IconButton>
              <InputBase
                className={classes.buyInput}
                value={values1.numberformat}
                onChange={handleChange1}
                placeholder="0.00"
                name="numberformat"
                id="numberformat-input-banana1"
                type="number"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                readOnly
              />
              <Button className={classes.buyButton}>Buy</Button>
            </Paper>
            <Paper component="form" className={classes.buyButtonPanel}>
              <IconButton className={classes.iconButton}>
                <img src={BananaTokenImg} alt="Coin1" className={classes.coinIcon} />
              </IconButton>
              <InputBase
                className={classes.buyInput}
                value={values2.numberformat}
                onChange={handleChange2}
                placeholder="0.00"
                name="numberformat"
                id="numberformat-input-xbx1"
                type="number"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                readOnly
              />
              <Button className={classes.buyButton}>Buy</Button>
            </Paper> */}
            <IconButton
              color="inherit"
              aria-haspopup="true"
              aria-controls="connect-menu"
              className={classes.connectButton}
              onClick={handleClick}
            >
              {account ? `${accountEllipsis}` : 'Connect'}
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="connect-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.headerMenu}
              disableAutoFocusItem
            >
              {account ? (
                <MenuItem
                  className={classNames(classes.connectMenuItem, classes.headerMenuItem)}
                  onClick={() => {
                    logout()
                    window.localStorage.removeItem(connectorLocalStorageKey)
                  }}
                >
                  <Metamask className={classes.connectMenuIcon} /> Logout
                </MenuItem>
              ) : (
                !!login &&
                !!logout && (
                  <MenuItem
                    className={classNames(classes.connectMenuItem, classes.headerMenuItem)}
                    onClick={() => {
                      login(ConnectorNames.Injected)
                      window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected)
                    }}
                  >
                    <Metamask className={classes.connectMenuIcon} /> Metamask
                  </MenuItem>
                )
              )}
              {!account && (
                <MenuItem className={classNames(classes.connectMenuItem, classes.headerMenuItem)}>
                  <TrustWallet className={classes.connectMenuIcon} /> Trust Wallet
                </MenuItem>
              )}
            </Menu>
            <Paper className={classes.themeSwitch}>
              <IconButton onClick={() => handleThemeChange()} className={classes.themeButton}>
                {isDark ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />}
              </IconButton>
            </Paper>
          </Box>
          <Box className={classes.upsm}>
            <div>
              <IconButton onClick={handleClickOpenMenu}>
                <MenuOpenIcon className={classes.controlIconColor} />
              </IconButton>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleMenuClose}
              >
                <Box>
                  <Paper component="form" className={classes.buyButtonPanel} style={{ marginBottom: '8px' }}>
                    <IconButton className={classes.iconButton}>
                      <img src={XBXTokenImg} alt="Coin1" className={classes.coinIcon} />
                    </IconButton>
                    <InputBase
                      className={classes.buyInput}
                      value={values1.numberformat}
                      onChange={handleChange1}
                      placeholder="0.00"
                      name="numberformat"
                      id="numberformat-input-banana2"
                      type="number"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      readOnly
                    />
                    <Button className={classes.buyButton}>Buy</Button>
                  </Paper>
                  <Paper component="form" className={classes.buyButtonPanel} style={{ marginBottom: '8px' }}>
                    <IconButton className={classes.iconButton}>
                      <img src={BananaTokenImg} alt="Coin1" className={classes.coinIcon} />
                    </IconButton>
                    <InputBase
                      className={classes.buyInput}
                      value={values2.numberformat}
                      onChange={handleChange2}
                      placeholder="0.00"
                      name="numberformat"
                      id="numberformat-input-xbx2"
                      type="number"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      readOnly
                    />
                    <Button className={classes.buyButton}>Buy</Button>
                  </Paper>
                  <Box display="flex" justifyContent="space-between">
                    <IconButton
                      color="inherit"
                      aria-haspopup="true"
                      aria-controls="connect-menu"
                      className={classes.connectButton}
                      onClick={handleClick}
                    >
                      {account ? `${accountEllipsis}` : 'Connect'}
                      <ArrowDropDownIcon />
                    </IconButton>
                    <Menu
                      id="connect-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      className={classes.headerMenu}
                      disableAutoFocusItem
                    >
                      {account ? (
                        <MenuItem
                          className={classNames(classes.connectMenuItem, classes.headerMenuItem)}
                          onClick={() => {
                            logout()
                            window.localStorage.removeItem(connectorLocalStorageKey)
                          }}
                        >
                          <Metamask className={classes.connectMenuIcon} /> Logout
                        </MenuItem>
                      ) : (
                        !!login &&
                        !!logout && (
                          <MenuItem
                            className={classNames(classes.connectMenuItem, classes.headerMenuItem)}
                            onClick={() => {
                              login(ConnectorNames.Injected)
                              window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected)
                            }}
                          >
                            <Metamask className={classes.connectMenuIcon} /> Metamask
                          </MenuItem>
                        )
                      )}
                      {!account && (
                        <MenuItem className={classNames(classes.connectMenuItem, classes.headerMenuItem)}>
                          <TrustWallet className={classes.connectMenuIcon} /> Trust Wallet
                        </MenuItem>
                      )}
                    </Menu>
                    <Paper className={classes.themeSwitch}>
                      <IconButton onClick={() => handleThemeChange()} className={classes.themeButton}>
                        {isDark ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />}
                      </IconButton>
                    </Paper>
                  </Box>
                </Box>
              </StyledMenu>
            </div>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default TopMenu
