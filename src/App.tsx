import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from "./component/Task";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Task></Task>


    </div>
  )
}

export default App
