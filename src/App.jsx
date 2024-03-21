import Widget from './components/Widget'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import JobPage from './components/JobPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Widget />} />
        <Route path='job/:id' element={<JobPage />} />
      </Routes>
    </Router>
  )
}

export default App
