import { useState } from 'react'
import './App.css'
import ForexNews from './components/ForexNews/ForexNews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ForexNews/>
    </>
  )
}

export default App
