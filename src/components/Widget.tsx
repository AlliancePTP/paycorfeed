import React, { useEffect, useState } from 'react'
import Job from './Jobs'
import { convertXML } from 'simple-xml-to-json'


const Widget = () => {
  const [jobs, setJobs] = useState<string[]>([]);

  useEffect(() => {
      const url = 'https://corsproxy.io/?' + encodeURIComponent('https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a7883d0879c591b0187e3570b4e28cc')
    
      fetch(url)
        .then((response) => response.text())
        .then((xml) => {
          // Parse the XML into an array
          const parsedJobs = convertXML(xml);
          const filteredJobs = parsedJobs.feed.children.filter((job: any) => job.entry);
          setJobs(filteredJobs);
        })
  }, []);

    console.log('jobs', jobs);

    return (
      <div className='container mx-auto'>
        <div className='h-56 sm:h-64 bg-blue-900 xl:h-80 2xl:h-96'>
          {/* <pre>{JSON.stringify(jobs, null, 2)}</pre> */}
          {jobs.map((job, index) => (
            <div key={index}>
              <Job job={job} />
            </div>
          ))}
        </div>
      </div>
    )
          }

export default Widget