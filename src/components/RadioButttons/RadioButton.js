import React, { useState } from 'react'
import classes from './RadioButtons.module.css'
const RadioButton = () => {
 const [selectedOption,setSelectedOption]=useState('')
 const [selectedDay,setSelectedDay]=useState('')
    const options=['cricket','footbal','hockey']
    const days=['weekly','weekday']

    const handleChange=(e)=>{
        setSelectedOption(e.target.value)
        console.log(e.target.value)
    }

    const dayschangeHandler=(e)=>{
        setSelectedDay(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div>
    <div className={classes.gamecontainer}>
        <h2>choose your favourite sport:</h2>
        {options.map((eachGame,index)=>{
            return(
            <label key={index}>
            <input type="radio" value={eachGame} className={classes.input}
             onChange={handleChange} checked={selectedOption===eachGame}/>
            {eachGame}</label>
            )
         })}
    </div>
    <div className={classes.gamecontainer}>
        <h2>choose your favourite sport:</h2>
        {days.map((eachday,index)=>{
            return(
            <label key={index}>
            <input type="radio" value={eachday} className={classes.input}
             onChange={dayschangeHandler} checked={selectedDay===eachday}/>
            {eachday}</label>
            )
         })}
    </div>
    </div>
  )
}

export default RadioButton