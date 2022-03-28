import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import LeftMenu from '../LeftMenu/LeftMenu'
import TopMenu from '../TopMenu/TopMenu'
import { Switch, Route } from 'react-router'
import Stake from '../Stake/Stake'

const drawerWidth = 250
const drawerCollapsedWidth = 80

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    marginTop: '120px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerCollapsedWidth,
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

interface AdminProps {
  setIsDark: (state: boolean) => void
  isDark: boolean
}
//  className={` ${menuState ? classes.overlayBack : ''}`}
const Admin: React.FC<AdminProps> = ({ setIsDark, isDark }) => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div>
      <CssBaseline />
      <TopMenu isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} setIsDark={setIsDark} />
      <LeftMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: !isOpen,
        })}
      >
        <Switch>
          <Route exact path="/app">
            <Stake />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default Admin
