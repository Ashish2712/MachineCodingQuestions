import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1) // calling count inside a function will take the current value of count
    setCount((count) => count + 1) // and updated value will be 2 upon clicking on button
  }

  return (
    <>
        <button onClick={handleClick}>
          count is {count}
        </button>
    </>
  )
}

export default App
