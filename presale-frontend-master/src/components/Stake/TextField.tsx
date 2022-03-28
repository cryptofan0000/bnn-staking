import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(3),
    borderRadius: '10px',
    backgroundColor: theme.palette.type === 'dark' ? 'black' : 'white',
  },
  input: {
    padding: theme.spacing(1, 2),
    fontSize: '18px',
    flex: 1,
  },
  iconButton: {
    padding: '8px 12px',
    fontSize: '18px',
    color: '#31c77e',
  },
  divider: {
    height: 40,
    margin: 4,
    backgroundColor: 'grey',
  },
}))

interface Props {
  value: string
  setValue: (val: string) => void
  maxValue: string
}

const CustomizedInputBase: React.FC<Props> = ({ value, setValue, maxValue }) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleMax = () => {
    setValue(maxValue)
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        type="number"
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton className={classes.iconButton} aria-label="directions" onClick={handleMax}>
        Max
      </IconButton>
    </Paper>
  )
}

export default CustomizedInputBase
