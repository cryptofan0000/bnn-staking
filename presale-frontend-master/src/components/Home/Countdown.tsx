import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

interface CountdownProps {
  remainingTime: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    time: {
      fontSize: '30px',
      fontWeight: 600,
    },
    dimension: {
      fontSize: '20px',
      fontWeight: 600,
    },
  }),
)

const Home: React.FC<CountdownProps> = ({ remainingTime }) => {
  const classes = useStyles()
  const minuteSeconds = 60
  const hourSeconds = 3600
  const daySeconds = 86400

  const timerProps = {
    isPlaying: true,
    size: 160,
    strokeWidth: 15,
  }

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className={classes.time}>{time}</div>
        <div className={classes.dimension}>{dimension}</div>
      </div>
    )
  }

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0
  const getTimeDays = (time) => (time / daySeconds) | 0

  const days = Math.ceil(remainingTime / daySeconds)
  const daysDuration = days * daySeconds

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      width="100%"
      textAlign="-webkit-center"
      alignItems="center"
      gridGap="30px"
    >
      <Box display="flex" justifyContent="center" flexDirection="row" width="25%">
        <CountdownCircleTimer
          {...timerProps}
          colors="#ffc711"
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) => renderTime('days', getTimeDays(daysDuration - elapsedTime))}
        </CountdownCircleTimer>
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="row" width="25%">
        <CountdownCircleTimer
          {...timerProps}
          colors="#30c67e"
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > hourSeconds, 1000]}
        >
          {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
        </CountdownCircleTimer>
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="row" width="25%">
        <CountdownCircleTimer
          {...timerProps}
          colors="#ffc711"
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > minuteSeconds, 1000]}
        >
          {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
        </CountdownCircleTimer>
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="row" width="25%">
        <CountdownCircleTimer
          {...timerProps}
          colors="#32c77d"
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > 0, 1000]}
        >
          {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
        </CountdownCircleTimer>
      </Box>
    </Box>
  )
}

export default Home
