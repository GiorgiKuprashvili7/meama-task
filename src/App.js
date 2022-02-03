import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Coffee from './pages/Coffee'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [coffeState, setCoffeState] = useState({})
  const [allState, setAllState] = useState([])
  useEffect(() => {
    axios
      .get('https://cms.meamacollect.ge/meama-collect/api/client/ka')
      .then((res) => {
        setCoffeState(res.data[0])
        setAllState(res.data)
      })
      .catch((err) => console.log(err))
    return
  }, [])

  return (
    <div className="App" style={{ backgroundColor: '#fafafa' }}>
      <Routes>
        <Route
          path="/"
          element={<HomePage coffeState={coffeState} allState={allState} />}
        />
        <Route
          path="coffee/:id/:name"
          element={<Coffee coffeeDetails={coffeState} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
