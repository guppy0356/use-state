import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter(counter => counter + 1)
  }

  const handleDecrease = () => {
    setCounter(counter => counter - 1)
  }

  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>

      <div>
        { counter }
      </div>
    </>
  )
}

export default App
