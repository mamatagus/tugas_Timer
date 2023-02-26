import React, { useEffect, useState } from 'react'
import './App.css'
import { Button, Typography } from 'antd'

const { Title } = Typography

const Timer = () =>{
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)

  const handleStartStop = () =>{
    setStart(start => !start)
  }

  const handleReset = () =>{
    setCount(0)
  }

  useEffect(() => {
      const timer = setInterval(()=>{
        if(start){
        setCount(count => count + 1)
        }
      }, 1000)
    return () =>{
      clearInterval(timer)
  }
  },[start])

  return(
    <div>
      <h1>Timer : {count}</h1>
    <div>
    <Button onClick={handleStartStop}>{start ? 'Stop' : 'Start'}</Button>
    <Button onClick={handleReset} disabled={start}>Reset</Button>
    </div>
    </div>
  )
}

function App() {
  return(
    <div className='App'>
    <title judul="vite + React"/>
    <title judul="Agus"/>

    <div className='card'>
    </div>
  </div>
  )
}
export default App