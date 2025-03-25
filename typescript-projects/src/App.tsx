import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainTutorial from './practice/tutorial/MainTutroial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <MainTutorial/>
    </>
  )
}

export default App
