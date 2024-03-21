import React, { useEffect, useState } from 'react'
import Job from './Jobs'
import { convertXML } from 'simple-xml-to-json'

const Widget = () => {
  const [jobs, setJobs] = useState<string[]>([])

  useEffect(() => {
    const url =
      'https://corsproxy.io/?' +
      encodeURIComponent(
        'https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a7883d0879c591b0187e3570b4e28cc'
      )

    fetch(url)
      .then((response) => response.text())
      .then((xml) => {
        // Parse the XML into an array
        const parsedJobs = convertXML(xml)
        const filteredJobs = parsedJobs.feed.children.filter(
          (job: any) => job.entry
        )

        const mappedJobs = filteredJobs.map((e: any) => {
          const object = Object.assign({}, ...e.entry.children)
          return object
        })

        setJobs(mappedJobs)
      })
  }, [])

  return (
    <div className='container mx-auto'>
      {jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  )
}

export default Widget
