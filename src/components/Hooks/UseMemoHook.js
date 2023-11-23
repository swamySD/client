import React,{useEffect, useMemo, useState} from 'react'

const UseMemoHook = () => {
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
   
     const memoCalculation= useMemo(()=>{
      return  expensiveFunction(number)
      },[number])

    
    
    const cssStyle={
        backgroundColor:dark?"black":'white',
        color:dark?'white':'black',
        width:'500px',
        height:'300px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }

    const inputs={
        height:'30px',
        textAlign:'center',
        width:'300px'
    }

    const buttons={
        height:'40px',
        width:'200px',
        cursor:'pointer',
        fontSize:'16px'
    }

  return (
    <div style={cssStyle}>
        <input onChange={(e)=>setNumber(e.target.value)}  style={inputs}
        type='number' value={number}
        />
        <h2>Calculation:{memoCalculation}</h2>
        <button onClick={()=>setDark(!dark)} style={buttons}>Toggle</button>
    </div>
  )
}

const expensiveFunction=(number)=>{
    console.log('Loop Started');
    for(let i=0; i<1000000000;i++){
        return number
    }
}

export default UseMemoHook