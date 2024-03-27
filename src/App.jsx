import Widget from './components/Widget'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import JobPage from './components/JobPage'
import Paycor from './components/Paycor'
import { useState } from 'react'
import { getJobs } from './lib/jobs'
import { useEffect } from 'react'

function App() {
  const [jobs, setJobs] = useState([])
  useEffect(async () => {
    const jobs = await getJobs()
    setJobs(jobs)
  }, [])
  if (jobs.length === 0) {
    return <div>Loading...</div>
  } else {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Widget jobs={jobs} />} />
          <Route path='job/:id' element={<JobPage jobs={jobs} />} />
          <Route path='/paycor' element={<Paycor />} />
        </Routes>
      </Router>
    )
  }
}

export default App
