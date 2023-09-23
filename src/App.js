import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddItem from './Components/AddItem'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-item" element={<AddItem />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
