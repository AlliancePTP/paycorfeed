import Widget from './components/Widget'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import JobPage from './components/JobPage'
import Paycor from './components/Paycor'
import { useState } from 'react'
import { getJobs } from './lib/jobs'
import { useEffect } from 'react'

function App() {
  const [jobs, setJobs] = useState([])
  const [states, setStates] = useState([])
  useEffect(async () => {
    const { jobs, states } = await getJobs()
    setJobs(jobs)
    setStates(states.sort())

    if (window.location.href.indexOf('gni' > -1)) {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const jobId = urlParams.get('gni')
      localStorage.setItem('jobID', jobId)
      window.parent.location.href =
        'https://lifeatalliance.com/career-opportunities'
    }
  }, [])
  if (jobs.length === 0) {
    return (
      <div className='container mx-auto mt-12 text-center text-3xl'>
        Loading our jobs...
      </div>
    )
  } else {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Widget jobs={jobs} states={states} />} />
          <Route
            path='department/:department'
            element={<Widget jobs={jobs} states={states} />}
          />
          <Route
            path='brand/:brand'
            element={<Widget jobs={jobs} states={states} />}
          />
          <Route path='job/:id' element={<JobPage jobs={jobs} />} />
          <Route path='/paycor' element={<Paycor />} />
        </Routes>
      </Router>
    )
  }
}

export default App
