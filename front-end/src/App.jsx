import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3000/').then(resposne => {
      setData(resposne.data);
    })
  }, [])

  return (
    <>
      <h1>Hey It's a {data && data.Day ? data.Day : 'Loading ....'}, it's time to {data.moto ? data.moto : 'Loading...'}</h1>
    </>
  )
}

export default App
