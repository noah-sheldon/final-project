import { useState } from 'react'
import './App.css'
import ForexNews from './components/ForexNews/ForexNews'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ForexNews/>
    </>
  )
}

export default App
