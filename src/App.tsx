import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import TaskCard from "./component/TaskCard";
import Tasks from "./page/Tasks";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Tasks></Tasks>
    </div>
  )
}

export default App;
