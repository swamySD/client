import React from 'react'
import classes from './ProgressBar.module.css'
const ProgressBar = ({value}) => {
  return (
    <div className={classes.progress}>
        <span className={classes.value}>{value.toFixed()}%</span>
    </div>
  )
}

export default ProgressBar